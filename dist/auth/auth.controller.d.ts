import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        accessToken: string;
        tokenType: string;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import("../generated/prisma/enums.js").UserRole;
            facilityId: string | null;
        };
    }>;
    me(request: any): any;
}
