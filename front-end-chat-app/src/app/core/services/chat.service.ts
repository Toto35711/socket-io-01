import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from 'src/app/data/schema/message';

@Injectable()
export class ChatService {
  constructor(private socket: Socket) {}

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }
  getMessage(): Observable<Message> {
    return this.socket.fromEvent<Message>('message');
  }
}
