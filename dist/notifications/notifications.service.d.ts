import { PrismaService } from '../prisma/prisma.service.js';
export declare class NotificationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(userId: string): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        title: string;
        message: string;
        category: string;
        isRead: boolean;
        readAt: Date | null;
    }[]>;
    unreadCount(userId: string): Promise<{
        count: number;
    }>;
    markRead(userId: string, id: string): Promise<{
        success: boolean;
    }>;
    readAll(userId: string): Promise<{
        updated: number;
    }>;
}
