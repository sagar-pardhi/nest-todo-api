import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly text: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  readonly isCompleted: boolean;
}
