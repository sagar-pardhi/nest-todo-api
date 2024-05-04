import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class TodoEntity {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  text: string;

  @ApiProperty({ required: false, default: false })
  isCompleted: boolean;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  '__v': number;

  constructor(partial: Partial<TodoEntity>) {
    Object.assign(this, partial);
  }
}
