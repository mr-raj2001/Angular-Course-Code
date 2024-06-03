import { Component, EventEmitter, Input, Output } from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // @Input({ required: true }) id!: string;

  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  //select=(output)<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
