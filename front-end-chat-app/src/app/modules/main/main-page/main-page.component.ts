import { Component } from '@angular/core';
import { Message } from 'src/app/data/schema/message';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  message: string = '';
  messages: Message[] = [];

  /**
   * To Do: sending message via socket IO
   */
  sendMessage() {
    const isSender: boolean = Math.random() < 0.5 ? true : false;
    this.messages.push({ message: this.message, isSender });
    this.message = '';
  }
}
