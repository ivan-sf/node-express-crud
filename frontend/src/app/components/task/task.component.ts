import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  isTrue =1;
  constructor(
    public taskService:TaskService
  ) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(){
    this.taskService.getTasks().subscribe(
      success=>{
        this.taskService.tasks = success;
      },
      error=>{
        console.log(error)
      }
    )
  }

  addTask(form:NgForm){
    if(!form.value._id)
      this.taskService.createTask(form.value).subscribe(
        success=>{
          this.getTasks();
          form.reset();
        },
        error=>{
          console.log(error)
        }
      )
    else
      this.taskService.updateTask(form.value).subscribe(
        success=>{
          this.getTasks();
          form.reset();
          console.log(success);
        },
        error=>{
          console.log(error)
        }
      )
  }

  deleteTask(_id:any){
    if(confirm('¿Are you sure want to delete it?')){
      this.taskService.deleteTask(_id).subscribe(
        success=>{
          this.getTasks();
          alert('Task deleted')
        },
        error=>{
          console.log(error)
        }
      )
    }
  }

  updateTask(task:Task){
    this.taskService.selectedTask = task;
  } 
}
