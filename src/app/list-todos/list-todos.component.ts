import { Component, OnInit } from '@angular/core';
import { TotoDataService } from '../service/data/toto-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos : Todo[]
  message:string
  constructor(
    private todoService:TotoDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
   this.refreshTodos();
  }
  refreshTodos(){
    this.todoService.retriveAllTodos('jag').subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`deleted todo, ${id}`)
    this.todoService.deleteTodo('jag',id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of todo ${id} Successful !`
        this.refreshTodos();
        
      }
    )
  }
  updateTodo(id){
    console.log(`Update todo, ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}
