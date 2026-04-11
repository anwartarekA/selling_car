import { Controller, Post, Body } from '@nestjs/common';
import { createUserDto } from './dtos/create-user.dto';
@Controller('auth')
export class UserController {
  @Post('/signup')
  createUser(@Body() body: createUserDto) {
    console.log(body);
  }
}
