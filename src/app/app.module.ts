import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ChatModule } from './chate/chate.module';
import { ChateAfficheComponent } from './chate/chate-affiche/chate-affiche.component';
import {ChatService} from './chate/chat/service/chat.service';

@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChatModule
  ],

  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
