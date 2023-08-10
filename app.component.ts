import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks = [
    "Go to school",
    "Buy vegetables",
    "Pickup laundry",
    "Pay tuition fee"
  ]

  add(newTask: string){
    this.tasks.push(newTask)
  }

  remove(existingTask: string){
   var userConfirmed = confirm(`Are you sure to delete the task? \n "${existingTask}"`)

   if (userConfirmed) {
    this.tasks = this.tasks.filter(task => task != existingTask)
   }

  }
}
