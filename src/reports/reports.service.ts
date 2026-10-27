import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}
  async summary(user: { id:string; role:string; facilityId?:string }) {
    const where=user.role==='SUPER_ADMIN' ? {} : { facilityId:user.facilityId! };
    const [inventory, donations, requests, unitsByStatus, requestsByStatus] = await Promise.all([
      this.prisma.bloodUnit.count({where}),
      this.prisma.donation.count({where}),
      this.prisma.hospitalRequest.count({where}),
      this.prisma.bloodUnit.groupBy({by:['status'],where,_count:{_all:true}}),
      this.prisma.hospitalRequest.groupBy({by:['status'],where,_count:{_all:true}}),
    ]);
    return { generatedAt:new Date().toISOString(), scope:user.role==='SUPER_ADMIN'?'all-facilities':user.facilityId,
      inventory, donations, requests,
      unitsByStatus:unitsByStatus.map(x=>({status:x.status,count:x._count._all})),
      requestsByStatus:requestsByStatus.map(x=>({status:x.status,count:x._count._all})) };
  }
}
