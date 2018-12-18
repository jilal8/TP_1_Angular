import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Message} from '../../models/message';

@Component({
  selector: 'app-chat-formulaire',
  templateUrl: './chat-formulaire.component.html',
  styleUrls: ['./chat-formulaire.component.scss']
})
export class ChatFormulaireComponent implements OnInit {

	@Output() nouveauMessage: EventEmitter<Message>;

    constructor() {
  		this.nouveauMessage = new EventEmitter<Message>();
   	}

    public texte: string;
    public nom: string;

	ngOnInit() {
		this.texte = '';
	}

	public envoyer(): void {
		console.log("envoyer");
		const message = new Message();
		message.auteur = this.nom;
		message.date = new Date();
		message.texte = this.texte;
		this.nouveauMessage.emit(message);
		this.texte = '';
	}

}
