import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId?: string;

  get selectedUsername() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
