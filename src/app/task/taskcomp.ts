import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './taskf.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector:'app-task',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './taskcomp.html',
  styleUrl: './taskcomp.css'
})
export class Taskcomp {
  //dependency injection is done here 
  constructor(private taskService:TaskService){}

  newTask:Task = {description:"", completed:false};

  createTask():void{
    this.taskService.createTask(this.newTask).subscribe((createdTask)=>{
      this.newTask={description:"",completed:false}
    })
  }

}
