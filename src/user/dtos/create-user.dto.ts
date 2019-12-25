import { Sex } from "../interfaces/user.interface";
import {IsNumber,IsString} from 'class-validator';
import { ApiModelProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @IsString()
    @ApiModelProperty()
    name:string;

    @ApiModelProperty()
    description:string;

    @ApiModelProperty({
        description: `available inputs:'Male'|'Female'|'Unclear'`,
        default:'Unclear',
    })
    sex:Sex=Sex.Unclear;

    @IsNumber()
    age:number;
}