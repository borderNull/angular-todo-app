import { Injectable } from '@angular/core';
import {Todo} from './todo';


@Injectable()
export class TodoService {
  todos: Array<Todo>;

  constructor() {}

  private updateStorage() {
    localStorage.setItem('todo-app', JSON.stringify(this.todos));
  }

  public getAllTodos(): void {
    let sourceTodos = JSON.parse(localStorage.getItem('todo-app') || '[]');

    this.todos = sourceTodos.map( (todo: Todo) => {
        let item = <Todo>{      
          text: todo.text,
          completed: todo.completed,
          important: todo.important 
        };
        return item;
    }); 
  }

  private getCompletedTodos(completed: Boolean) {
    return this.todos.filter((todo: Todo) => todo.completed === completed)
  }

  public getCompleted() {
    return this.getCompletedTodos(true);
  }

  public getRemaining() {
    return this.getCompletedTodos(false);
  }

  public addTodo(todo: Todo) {

    this.todos.push(todo);
    this.updateStorage();
  }

  public completeTodo(todo: Todo) {
      todo.completed = !todo.completed;
      this.updateStorage();
  }

  public deleteTodo(todo: Todo) {
    let removedTodo = this.todos.indexOf(todo);
    this.todos.splice(removedTodo, 1);
    this.updateStorage();
    
  }

  public toggleImportantTodo(todo: Todo) {
     todo.important = !todo.important;
     this.updateStorage();
  }

}
