import { Controller, Get, NotFoundException, Param, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.decorator';
import { UserEntity } from 'src/entities/user.entity';
import { EntitySchema, Repository } from 'typeorm';
import { UserService } from './user.service';

@Controller('profiles')
export class ProfileController {
    constructor(private userService: UserService) {}

  //@ApiOkResponse({ description: 'Find user profile' })
  @Get('/:username')
  //@UseGuards(new OptionalAuthGuard())
  async findProfile(
    @Param('username') username: string,
    @User() user: UserEntity,
  )/*: Promise<ResponseObject<'profile', ProfileResponse>> */{
    const profile = await this.userService.findByUsername(username/*, user*/);
    if (!profile) {
      throw new NotFoundException();
    }
    return { profile :user};
  }
/*
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Follow user' })
  @ApiUnauthorizedResponse()
  @Post('/:username/follow')
  @HttpCode(200)
  @UseGuards(AuthGuard())
  async followUser(
    @User() user: UserEntity,
    @Param('username') username: string,
  ): Promise<ResponseObject<'profile', ProfileResponse>> {
    const profile = await this.userService.followUser(user, username);
    return { profile };
  }

  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Unfollow user' })
  @ApiUnauthorizedResponse()
  @Delete('/:username/follow')
  @UseGuards(AuthGuard())
  async unfollowUser(
    @User() user: UserEntity,
    @Param('username') username: string,
  ): Promise<ResponseObject<'profile', ProfileResponse>> {
    const profile = await this.userService.unfollowUser(user, username);
    return { profile };
  }*/
}
