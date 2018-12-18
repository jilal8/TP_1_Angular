import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-apprail',
  templateUrl: './apprail.component.html',
  styleUrls: ['./apprail.component.scss']
})
export class ApprailComponent implements OnInit {
@Input() appareilName: string;
@Input() appareilStatus: string;
@Input() btnname: string='Eteindre';

  constructor() { }

  ngOnInit() {
  }

  getStatus = function(){
    return this.appareilStatus;
  }

  getColor = function() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }         
  }

  eteindreAllumer = function(){
    if(this.appareilStatus==='allumé'){
    this.appareilStatus = 'éteint';
  }else if(this.appareilStatus === 'éteint'){
      this.appareilStatus = 'allumé';
    }
  }

}
