import { Module } from '@nestjs/common';

import { ItemsModule } from './items/items.module';
import { ItemController } from './app.controller';
import { ItemsService } from './items/items.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ItemsModule, AuthModule, UsersModule],
  controllers: [ItemController],
  providers: [ItemsService],
})
export class AppModule {}
