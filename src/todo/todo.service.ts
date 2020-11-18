import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
    todoList: Todo[] = []

    getTodos(){
        return this.todoList
    }

    getTodosById(id: string){
        const todo = this.todoList.find((value) => value.id === id); 
        return todo;
    }

    addTodos(title: string) {
        const todo = new Todo()
        todo.id = uuidv4()
        todo.title = title
        this.todoList.push(todo)
        return this.todoList
    }

    updateTodos(id: string, title: string) {
        const resultById =  this.todoList.find(r => id === r.id)
        resultById ? resultById.title = title : []
        return resultById
    }

    deleteTodos(id: string) {
        const index =  this.todoList.findIndex(r => r.id)
        this.todoList.splice(index, 1)
    }
}
