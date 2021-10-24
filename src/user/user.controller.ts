import { Body, Controller, Get, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { get } from 'http';
import { User } from 'src/auth/user.decorator';
import { UserEntity } from 'src/entities/user.entity';
import { UpdateUserDTO } from 'src/models/user.models';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ){}

    /*
    async findCurrentUser(
        /*@User()*/ //{ username }: UserEntity,
     // )/*: Promise<ResponseObject<'user', AuthResponse>> */{
        //const user = await this.authService.findCurrentUser(username);
        //return { user };
    //}
   @Get()
   @UseGuards()
    async findCurrentUser(
        @User() { username }: UserEntity,
      )/*: Promise<ResponseObject<'user', AuthResponse>> */{
        const user = await this.userService.findByUsername(username);
        return { user };
    }

    @Put()
    @UseGuards(AuthGuard())
    async update(
      @User() { username }: UserEntity,
      @Body('user', new ValidationPipe({ transform: true, whitelist: true }))
      data: UpdateUserDTO,
    )/*: Promise<ResponseObject<'user', AuthResponse>> */{
      const user = await this.userService.updateUser(username, data);
      return { user };
    }
}
