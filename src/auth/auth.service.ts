import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { LoginDTO, RegisterDTO } from 'src/models/user.dto';

@Injectable()
export class AuthService {
    private nockUser = {
        email:"billy@gmail.com",
        token:"jwt.token",
        username:"bill",
        bio:"billlll",
        image: null
    }

    register(credentials : RegisterDTO){
        return this.nockUser;
    }
    
    login(credentials : LoginDTO){
        if(credentials.email === this.nockUser.email){
            return this.nockUser;
        }
        throw new InternalServerErrorException();
    }


}
