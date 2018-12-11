import { Component, OnInit } from '@angular/core';
import {Message} from '../models/message';
import {Input} from '@angular/core';

@Component({
  selector: 'app-chate-affiche',
  templateUrl: './chate-affiche.component.html',
  styleUrls: ['./chate-affiche.component.scss']
})

export class ChateAfficheComponent implements OnInit {

@Input() messages:Array<Message>;

  constructor() { }

  ngOnInit() {
  //this.messages = new Array<Message>();
  }

}
