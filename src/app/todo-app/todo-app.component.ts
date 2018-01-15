import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export  class TodoAppComponent implements OnInit {

  //@Input('newTodo') newTodo: string;
  private newTodo: Todo = new Todo();
  // private todos = TodoService;
 
 
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
    console.log(this)
    console.log(this.todoService)
  }


  getTodos(): void {
    this.todoService.getAllTodos();
  }

  addTodo() {
    console.log(this);
    this.todoService.addTodo(this.newTodo)
    this.newTodo = new Todo;
  }

  completeTodo(todo) {
    this.todoService.completeTodo(todo);
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }
}
