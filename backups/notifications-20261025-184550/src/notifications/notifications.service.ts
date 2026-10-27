import { Injectable, NotImplementedException } from '@nestjs/common';
@Injectable()
export class NotificationsService {
  // No Notification model exists in the current Prisma schema.
  // Do not present fabricated or transient alerts as persisted notifications.
  list(): never {
    throw new NotImplementedException('Persistent notifications require a database model and migration.');
  }
}
