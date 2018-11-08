import { ApiModelProperty } from '@nestjs/swagger';

export class PaginationDto {
    @ApiModelProperty()
    page: number;
    @ApiModelProperty()
    pageSize: number;
}
