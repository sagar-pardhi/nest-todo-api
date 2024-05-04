import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  readonly text: string;

  @IsBoolean()
  @IsOptional()
  readonly isCompleted: boolean;
}
