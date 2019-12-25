import { Injectable, HttpException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import * as uuid from 'uuid';
import { CreateUserDto, UpdateUserDto } from './dtos';

@Injectable()
export class UserService {
    private readonly users: User[] = [];

    async getUsers(): Promise<User[]> {
        return this.users;
    }

    async getUserById(id: string): Promise<User> {
        const user = this.users.find(x => x.id === id);
        return user;
    }

    async getCar(id: string, vin: number) {
        const user = this.users.find(x => x.id === id);
        return {...user, vin};
    }

    async registerUser(user: CreateUserDto): Promise<User> {
        const index = this.users.push({
            id: uuid.v4().replace(/[-]/g, ''),
            ...user,
        }) - 1;
        return this.users[index];
    }

    async updateUserInfo(id: string, user: UpdateUserDto): Promise<User> {
        const u: User = this.users.find(x => x.id === id);
        if (u) {
            u.description = user.description || u.description;
            u.sex = user.sex || u.sex;
            return u;
        } else {
            throw new HttpException('User does not exist!', 401);
        }
    }
}
