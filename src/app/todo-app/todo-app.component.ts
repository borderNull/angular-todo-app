import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export  class TodoAppComponent implements OnInit {
  private newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();    
  }


  getTodos(): void {
    this.todoService.getAllTodos();
  }

  addTodo() {
   this.todoService.addTodo(this.newTodo)
   this.newTodo = new Todo;
  }

  completeTodo(todo) {
    this.todoService.completeTodo(todo);
  }

  toggleImportant(todo) {
    this.todoService.toggleImportantTodo(todo);
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }
}
