import { TodoService } from './todo.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService){}

    @Get()
    async getTodos(): Promise<Todo[]>{
        const result = this.todoService.getTodos()
        return result
    }

    @Get(':id')
    async getTodosById(@Param('id') id: string): Promise<Todo>{
        const result = this.todoService.getTodosById(id)
        return result
    }

    @Post()
    async addTodos(@Body() title: string): Promise<Todo[]>{
        const result = this.todoService.addTodos(title)
        return result
    }

    @Put(':id')
    async updateTodos(@Param('id') id: string,@Body() title: string): Promise<Todo>{
        const result = this.todoService.updateTodos(id,title)
        return result
    }

    @Delete(':id')
    async deleteTodos(@Param('id') id: string){
        this.todoService.deleteTodos(id)
    }


}
