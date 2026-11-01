import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: [
            'https://inspiring-florentine-54bb2d.netlify.app',
            'http://127.0.0.1:5173',
        ],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const port = Number(process.env.PORT ?? 3000);
    await app.listen(port);
    console.log(`AfriBlood Backend running at http://localhost:${port}`);
}
bootstrap().catch((error) => {
    console.error('Backend startup failed:', error);
    process.exitCode = 1;
});
//# sourceMappingURL=main.js.map