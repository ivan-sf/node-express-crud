import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  API:string = 'http://localhost:3000/api/task';
  selectedTask: Task={
    title:"",
    description:"",
  };
  tasks: Task[];

  constructor(private http: HttpClient) { }

  getTasks(){
    return this.http.get<Task[]>(this.API)
  }

  createTask(task:Task){
    return this.http.post(this.API,task)
  }

  deleteTask(_id:string){
    return this.http.delete(`${this.API}/${_id}`)
  }

  updateTask(task:Task){
    return this.http.put(`${this.API}/${task._id}`,task);
  }

}
