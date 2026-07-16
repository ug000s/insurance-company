import { BadRequestException, Injectable } from '@nestjs/common';
import { UserSaveDto } from '../dto/user.save-dto';

@Injectable()
export class UsersValidator {
  validateSaveDto(saveDto: UserSaveDto): void {
    if (
      !saveDto ||
      !saveDto.email?.includes('@') ||
      !saveDto.password?.trim() ||
      !saveDto.name?.trim()
    ) {
      throw new BadRequestException('Invalid user data');
    }
  }
}
