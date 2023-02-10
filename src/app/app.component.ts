// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   taskName: string = '';
//   tasks: string[] = [];

//   addTask() {
//     this.tasks.push(this.taskName);
//     this.taskName = '';
//   }

//   deleteTask(index: number) {
//     this.tasks.splice(index, 1);
//   }

//   updateTask(index: number) {
//     this.taskName = this.tasks[index];
//     this.tasks.splice(index, 1);
//   }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: string[] = [];
  newTask: string = '';
  editTaskData = '';
  editedTaskIndex = -1;

  addTask() {
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  removeTask(task: string) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  editTask(task: string) {
    // this.editTaskData = task;
    // this.editedTaskIndex = this.tasks.indexOf(task);
    this.editTaskData = task
      
  }

  updateTask() {
    const index = this.tasks.indexOf(this.editTaskData);
    this.tasks[index] = this.newTask;
    this.editTaskData = '';
    this.newTask = '';
    }
    
    cancelEditTask() {
    this.editTaskData = '';
    this.newTask = '';
    }

  // updateTask() {
  //   this.tasks[this.editedTaskIndex] = this.editTaskData;
  //   this.cancelEditTask();
  // }

  // cancelEditTask() {
  //   this.editTaskData = '';
  //   this.editedTaskIndex = -1;
  // }
}



