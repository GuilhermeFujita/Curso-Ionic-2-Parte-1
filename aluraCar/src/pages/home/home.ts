import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { EscolhaPage} from '../escolha/escolha';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit {

	public carros;

	constructor(public navCtrl: NavController,
		private _http: Http,
		private _loadingCtrl: LoadingController,
		private _alertCtrl: AlertController) {}

	ngOnInit() {
		let loader = this._loadingCtrl.create({
			content: "Buscando novos carros. Aguarde"
		}); // Criação do Loader

		loader.present(); // Exibe o loader criado

		this._http
			.get('https://aluracar.herokuapp.com')
			.map(res => res.json())
			.toPromise()
			.then(carros => {
				this.carros = carros;
				loader.dismiss(); //Fecha o Loader
			})
			 .catch(err => {
				loader.dismiss();
				console.log(err);

				let alert = this._alertCtrl.create({
					title: 'Falha na conexão',
					buttons: [{ text: 'Estou ciente' }],
					subTitle: 'Não foi possível obter a lista de carros. Tente mais tarde.'
				});
				alert.present();
			});
	}

	seleciona(carro){
		this.navCtrl.push(EscolhaPage, {carroSelecionado: carro});
	}
}
