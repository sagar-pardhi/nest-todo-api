import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = await this.todoModel.create(createTodoDto);
    return createdTodo;
  }

  async findAll() {
    return await this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const updatedTodo = await this.todoModel
      .findOneAndUpdate({ _id: id }, updateTodoDto, { new: true })
      .exec();
    return updatedTodo;
  }

  async remove(id: string) {
    const deletedTodo = await this.todoModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedTodo;
  }
}
