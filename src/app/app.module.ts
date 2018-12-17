import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemListComponent } from './components/todo-item-list/todo-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
