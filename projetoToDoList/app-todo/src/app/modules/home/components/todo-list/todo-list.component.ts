import { Component, DoCheck } from '@angular/core';
//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{
  
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')

  constructor(){}

  
ngDoCheck(): void {  
  this.setLocalStorate();
}

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }
//deleta o item da lista.
  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

// deleta todos os itens da lista.
  public deleteAllTaskList(){

    const confirm =  window.confirm("Você tem certeza que deseja apagar tudo?");
    
    if(confirm)
      this.taskList = [];
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("O campo de tarefa está vazio. Deseja deletar?")

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorate(){

    if(this.taskList){
      this.taskList.sort( (first, last)=> Number(first.checked)- Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }
}
