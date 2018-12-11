import { Component, OnInit } from '@angular/core';
import {Message} from '../models/message';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chate',
  templateUrl: './chate.component.html',
  styleUrls: ['./chate.component.scss']
})
export class ChateComponent implements OnInit {
public messages: Array<Message>;
  constructor(private http: HttpClient) { 
  	this.messages = new Array<Message>();
  }

  ngOnInit() {
  this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(
(results) => {
if (results != null) {
for (const result of results) {
result.date = new Date();
const message = new Message(result);
this.messages.push(message);}

}
console.log(this.messages);
});
const arr = new Array<Message>();
arr.push(...this.messages);
this.messages = arr;
  }

}
