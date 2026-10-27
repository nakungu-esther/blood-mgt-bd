var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException, } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service.js';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator.js';
let JwtAuthGuard = class JwtAuthGuard {
    jwt;
    prisma;
    reflector;
    constructor(jwt, prisma, reflector) {
        this.jwt = jwt;
        this.prisma = prisma;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [context.getHandler(), context.getClass()]);
        if (isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const header = request.headers.authorization;
        if (typeof header !== 'string' || !header.startsWith('Bearer ')) {
            throw new UnauthorizedException('Bearer token required');
        }
        const token = header.slice(7).trim();
        if (!token) {
            throw new UnauthorizedException('Bearer token required');
        }
        let payload;
        try {
            payload = await this.jwt.verifyAsync(token);
        }
        catch {
            throw new UnauthorizedException('Invalid or expired token');
        }
        if (!payload || typeof payload.sub !== 'string') {
            throw new UnauthorizedException('Invalid token');
        }
        const user = await this.prisma.user.findUnique({
            where: { id: payload.sub },
            select: {
                id: true,
                email: true,
                role: true,
                facilityId: true,
                isActive: true,
            },
        });
        if (!user?.isActive) {
            throw new UnauthorizedException('Account inactive or not found');
        }
        request.user = user;
        return true;
    }
};
JwtAuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [JwtService,
        PrismaService,
        Reflector])
], JwtAuthGuard);
export { JwtAuthGuard };
//# sourceMappingURL=jwt-auth.guard.js.map