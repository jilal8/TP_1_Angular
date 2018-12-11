import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChateComponent } from './chat/chate.component';
import { ChateElementComponent } from './chate-element/chate-element.component';
import { ChateAfficheComponent } from './chate-affiche/chate-affiche.component';
@NgModule({
imports: [
CommonModule,
FormsModule,
HttpClientModule
],
declarations: [
ChateComponent,
ChateAfficheComponent,
ChateElementComponent
],
exports: [ChateComponent]
})
export class ChatModule { }
