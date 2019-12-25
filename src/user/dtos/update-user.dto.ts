import {  Sex} from "../interfaces/user.interface";
import { ApiModelPropertyOptional, ApiModelProperty } from "@nestjs/swagger";

export class UpdateUserDto{
    @ApiModelPropertyOptional()
    description?:string;

    @ApiModelProperty({
        required:false,
    })
    sex?:Sex;
}