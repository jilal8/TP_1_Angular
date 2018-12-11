import { Component, OnInit } from '@angular/core';
import {Message} from '../models/message';
import {Input} from '@angular/core';

@Component({
  selector: 'app-chate-element',
  templateUrl: './chate-element.component.html',
  styleUrls: ['./chate-element.component.scss']
})
export class ChateElementComponent implements OnInit {
@Input() public message: Message;
  constructor() { }

  ngOnInit() {
  }

}
