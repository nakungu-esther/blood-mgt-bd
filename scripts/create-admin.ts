import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';
import * as bcrypt from 'bcrypt';
import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

async function main() {
  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  let prisma: PrismaClient | undefined;

  try {
    const email = (await rl.question('Admin email: '))
      .trim()
      .toLowerCase();

    const firstName = (await rl.question('First name: ')).trim();
    const lastName = (await rl.question('Last name: ')).trim();
    const password = await rl.question('New password (visible while typing): ');

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !firstName ||
      !lastName ||
      password.length < 12
    ) {
      throw new Error(
        'Provide a valid email, both names and a password of at least 12 characters.',
      );
    }

    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is missing.');
    }

    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    });

    prisma = new PrismaClient({ adapter });

    const existingAdmins = await prisma.user.count({
      where: { role: 'SUPER_ADMIN' },
    });

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    // Prevent unauthenticated promotion or password resets
    // when an administrator already exists.
    if (existingAdmins > 0 || existingUser) {
      throw new Error(
        'An administrator or matching account already exists. ' +
        'Use the authenticated admin-management workflow to create ' +
        'another administrator or reset credentials.',
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const admin = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        passwordHash,
        role: 'SUPER_ADMIN',
        isActive: true,
      },
    });

    console.log('\nAdministrator created successfully.');
    console.log('Email:', admin.email);
    console.log('Role:', admin.role);
  } finally {
    await prisma?.$disconnect();
    rl.close();
  }
}

main().catch((error) => {
  console.error('Setup failed:', error.message);
  process.exitCode = 1;
});
