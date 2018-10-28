import { ApiModelProperty } from '@nestjs/swagger';

export class UserLoginDto {
    @ApiModelProperty()
    mail: string;
    @ApiModelProperty()
    password: string;
}
