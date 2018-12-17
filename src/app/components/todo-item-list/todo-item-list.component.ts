import { Component, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TodoItemComponent} from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css']
})
export class TodoItemListComponent implements OnInit {

  todos: BehaviorSubject<Todo[]>;
  selectedTodo: Todo;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.todos;
    this.todos.subscribe(console.log);
  }



  ngOnInit() {
  }

  onSelect(todo: Todo): void {
    this.selectedTodo= todo;
  }
  editTodo(): void {
    this.todoService.editTodo(
      this.selectedTodo.id,
      this.selectedTodo.title,
      this.selectedTodo.description,
      this.selectedTodo.time.toString());

  }
}
