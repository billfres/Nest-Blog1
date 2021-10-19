import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AuthService {
    private nockUser = {
        email:"billy@gmail.com",
        token:"jwt.token",
        username:"bill",
        bio:"billlll",
        image: null
    }

    register(){
        return this.nockUser;
    }
    
    login(credentials: any){
        if(credentials.email === this.nockUser.email){
            return this.nockUser;
        }
        throw new InternalServerErrorException();
    }


}
