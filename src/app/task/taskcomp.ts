import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class Taskcomp implements OnInit {
  //dependency injection is done here 
  constructor(private taskService:TaskService){}
  
  //tosave returned taskobj
  idtochange!:number;
  isVisible:boolean=false;
  
  newTask:Task = {description:"", completed:false};
  updatedTask:Task = {description:"", completed:false};

  

  tasks:Task[] = [];
    ngOnInit(): void {
    this.getAllTasks();
  }
  createTask():void{
    this.taskService.createTask(this.newTask).subscribe((createdTask)=>{
      this.newTask={description:"",completed:false}
    })
  }

  getAllTasks():void{
    this.taskService.getAllTasks().subscribe((tasks)=>
      {
        this.tasks=tasks;
      }
    )
  }
  //updatetasks method
  updateTask():void{
    this.taskService.updateTask(this.idtochange,this.updatedTask).subscribe((upd)=>{
      this.updatedTask={description:"",completed:false}
    })
  }
  
  updatevisibility(task: Task): void {
  this.isVisible = true;
}





}
