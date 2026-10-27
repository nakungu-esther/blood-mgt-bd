import { NotificationsService } from './notifications.service.js';
export declare class NotificationsController {
    private readonly service;
    constructor(service: NotificationsService);
    private userId;
    list(req: any): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        title: string;
        message: string;
        category: string;
        isRead: boolean;
        readAt: Date | null;
    }[]>;
    unreadCount(req: any): Promise<{
        count: number;
    }>;
    readAll(req: any): Promise<{
        updated: number;
    }>;
    markRead(req: any, id: string): Promise<{
        success: boolean;
    }>;
}
