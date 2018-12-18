import { Component, OnInit } from '@angular/core';
import {Message} from '../models/message';
import {HttpClient} from '@angular/common/http';
import {ChatService} from './service/chat.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-chate',
  templateUrl: './chate.component.html',
  styleUrls: ['./chate.component.scss']
})
export class ChateComponent implements OnInit {
public messages: Observable<Array<Message>>;

  constructor(private chatService:ChatService) {
  	this.messages = new Observable<Array<Message>>();
  }

  public ngOnInit(): void {
  this.messages = this.chatService.getMessages();
  }
  public gererNouveauMessage(message: Message): void {
  this.messages = this.chatService.addMessage(message);
  }
}
