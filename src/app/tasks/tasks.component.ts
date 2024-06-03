import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  //I know a input will be provided from app component ts by this  onSelectedUser(id: string) {
  //   this.selectedUserId = id;
  // } so i am taking that input then sending it to html

  @Input({}) name?: string;
}
