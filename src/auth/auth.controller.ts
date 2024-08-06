import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException, Res } from '@nestjs/common';
import { Response } from 'express'
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UsersService) { }

  @Post('/login')
  create(@Body() loginDto: LoginDto,@Res({ passthrough: true }) response: Response) {
    const user = this.userService.findByEmail(loginDto.username);
    console.log(user)
    if(user==null){
      throw new NotFoundException()
    }
    response.cookie('user', user)
    return this.authService.login(loginDto);
  }
}
