import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    ) {}

    async findByUsername( username: string ): 
        Promise<UserEntity> {
        return await this.userRepo.findOne({ where: { username } });
    }
      
    async updateUser(
        username: string,
        data//: UpdateUserDTO,
      )/*: Promise<AuthResponse> */{
        await this.userRepo.update({ username }, data);
        const user = await this.userRepo.findOne({ where: { username } });
        //const payload = { username };
        //const token = this.jwtService.sign(payload);
        //return { ...user.toJSON(), token };
        return this.findByUsername(username);
      }

    /*async findByUsername(
        username: string,
        //user?: UserEntity,
      ): Promise<ProfileResponse> {
        return (
          await this.userRepo.findOne({
            where: { username },
            relations: ['followers'],
          })
        ).toProfile(user);
      }
      */
    /*
      async followUser(
        currentUser: UserEntity,
        username: string,
      ): Promise<ProfileResponse> {
        const user = await this.userRepo.findOne({
          where: { username },
          relations: ['followers'],
        });
        user.followers.push(currentUser);
        await user.save();
        return user.toProfile(currentUser);
      }
    
      async unfollowUser(
        currentUser: UserEntity,
        username: string,
      ): Promise<ProfileResponse> {
        const user = await this.userRepo.findOne({
          where: { username },
          relations: ['followers'],
        });
        user.followers = user.followers.filter(
          follower => follower !== currentUser,
        );
        await user.save();
        return user.toProfile(currentUser);
      }*/
}
