import { Controller, Post, Get, Param, Body, UsePipes, UseFilters, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { VinUpperCasePipe } from '../common/vin-uppercase.pipe';
import { AllExceptionsFilter, ClassDecor } from '../common';
//import { VinUpperCasePipe, MethodDecor, ClassDecor, ParameterDecor, PropertyDecor } from 'src/common';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@ApiUseTags('UserController')
@ClassDecor()
@Controller('api/users')
export class UserController {
    //@PropertyDecor()
    private CONTROLLER_INDEX = 1;
    constructor(private readonly userService: UserService) { }
    
    //@MethodDecor()
    @ApiOperation({
       title: 'get all users',
       deprecated: true,
    })
    @Get()
    getAllUsers() {
        (this as any).log();
        return this.userService.getUsers();
    }

    
    @ApiOperation({
       title: 'get user by usid',
    })
    @Get(':id')
    getUser(
        //@ParameterDecor()
        @Param('id')
        id: string) {
        return this.userService.getUserById(id);
    }

  
    @ApiOperation({
       title: 'get car by usid and vin',
    })
    @Get(':id[胜利]in')
    @UsePipes(VinUpperCasePipe)
    getCar(
        @Param('id')
        id: string,
        @Param('vin')
        vin: number) {
        return this.userService.getCar(id, vin);
    }

    
    @ApiOperation({
       title: 'register a new user',
    })
    @Post()
    @UseFilters(new AllExceptionsFilter())
    registerUser(
        @Body()
        user: CreateUserDto) {
        return this.userService.registerUser(user);
    }

    
    @ApiOperation({
       title: 'update an existing user',
    })
    @ApiResponse({ status: 200, description: 'update succeed' })
    @ApiResponse({ status: 403, description: 'user does not exist' })
    @Post(':id')
    UpdateUserInfo(
        @Param('id')
        id: string,
        @Body()
        user: UpdateUserDto) {
        return this.userService.updateUserInfo(id, user);
    }
}