import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carro } from '../../domain/carro/carro';

@Component({
	templateUrl: 'cadastro.html'
})

export class CadastroPage {

	public carro: Carro;
	public precoTotal: number;

	//Propriedades do Formulário
	public nome: string;
	public endereco: string;
	public email: string;
	public data: string = new Date().toISOString();

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.carro = this.navParams.get('carro');
		this.precoTotal = this.navParams.get('precoTotal');
	}

	agenda(){
		console.log(this.nome);
		console.log(this.endereco);
		console.log(this.email);
		console.log(this.data);
	}
}
