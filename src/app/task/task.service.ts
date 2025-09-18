import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './taskf.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:8080/postmethod";
  //we send api requests with this
  constructor(private httpClient: HttpClient){}

  createTask(newTask:Task):Observable<Task>
  {
     return this.httpClient.post<Task>(this.apiUrl,newTask);
  }

  //get tasks method
  getAllTasks():Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.apiUrl);
  }
 
}
