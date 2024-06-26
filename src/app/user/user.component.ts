import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  @Input({ required: true }) id!: string;

  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter<string>();

  //select=(output)<string>();

  onSelectUser() {
    this.select.emit(this.id);
  }
}
