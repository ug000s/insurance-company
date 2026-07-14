import {
  Body,
  Controller,
  Get,
  HttpStatus,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Delete,
  ParseEnumPipe,
} from '@nestjs/common';
import {User} from './user.entity';
import {Role} from './enums/role.enum';

@Controller('users')
export class UserController {
  @Post()
  create(@Body() user: User): User {
    console.log(user);
    return user;
  }

  @Get()
  getAll(): User[] {
    const user1: User = new User();
    user1.name = 'Jack';
    const user2: User = new User();
    user2.name = 'Jane';
    return [user1, user2];
  }

  // Get 127.0.0.1:3000/users?id=7
  // @Get
  // getById(@Query('id', ParseIntPipe) id: number){}

  // Get 127.0.0.1:3000/users/7
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): User {
    console.log(`Id: ${id}`);
    const user1 = new User();
    user1.name = 'Jack';
    return user1;
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(@Param('id', ParseIntPipe) id: number, @Body() user: User): User {
    console.log(`Id: ${id}`);
    console.log(`New name ${user.name}`);
    return user;
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): void {
    console.log(`Id: ${id}`);
  }

  // patch 127.0.0.1:3000/users/7/set-role/ADMIN
  @Patch(':id/set-role/:role')
  @HttpCode(HttpStatus.NO_CONTENT)
  setRole(
    @Param('id', ParseIntPipe) id: number,
    @Param('role', new ParseEnumPipe(Role)) role: Role,
  ): void {
    console.log(`Id: ${id}`);
    console.log(`Role: ${role}`);
  }
}
