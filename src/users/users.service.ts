import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    private readonly users:User[] = []

    async create(username:string,password:string):Promise<User>{
        const hashedPassword = await bcrypt.hash(password,10);
        const user = { id:Date.now(),username,password:hashedPassword};
        this.users.push(user);
        return user;
    }
    
    async findOne(username:string):Promise<User | undefined>{
        return this.users.find(user => user.username === username)
    }
}
