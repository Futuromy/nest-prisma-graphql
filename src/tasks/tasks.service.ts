import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(createTaskInput: CreateTaskInput) {
    console.log(createTaskInput);
    return this.prisma.task.create({ data: createTaskInput });
  }

  findAll() {
    return this.prisma.task.findMany({});
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    const { title, description, completed } = updateTaskInput;
    return this.prisma.task.update({
      where: {
        id,
      },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(completed && { completed }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
