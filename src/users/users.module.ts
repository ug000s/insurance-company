import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersRepository],
})
export class UsersModule {}
