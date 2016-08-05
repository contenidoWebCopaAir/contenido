var app = angular.module('newsApp', []);
	app.controller('newsController', ['$scope', function($scope){

		var urlHome = 'http://copacom-pre-produccion-external-971320470.us-east-1.elb.amazonaws.com';

		$scope.news = [
			{
				date: new Date('12/06/2016').getDate(),
				title: 'Copa Airlines inaugura vuelos directos a la ciudad de Holguín en Cuba.',
				description: 'A partir del 21 de junio, Copa Airlines conectará por primera vez a la ciudad de Holguín de manera directa con el Hub de las Américas ubicado en la Ciudad de Panamá',
				img: 'img/skytrax.jpg',
				url: urlHome + '/vuelos-directos-holguin' 
			},
			{
				date: new Date('25/02/2016').getDate(),
				title: 'Copa Airlines inaugura vuelos directos a la ciudad de Rosario en Argentina'
				description: 'A partir de hoy, 1ro de julio, Copa Airlines conecta con vuelos directos a la Ciudad de Rosario en Argentina con el Hub de las Américas, en la Ciudad de Panamá',
				img: 'img/article.jpg',
				url: urlHome + '/vuelos-sin-escalas-a-rosario'
			},
			{
				date: new Date('30/08/2016').getDate(),
				title: 'Copa Airlines inicia vuelos directos a la ciudad de Chiclayo, su nuevo destino en Perú'
				description: 'A partir del 28 de junio la ciudad de Chiclayo estará conectada de manera directa con el Hub de las Américas ubicado en la Ciudad de Panamá',
				img: 'img/article(1).jpg',
				url: urlHome + '/vuelo-inaugural-chiclayo'
			}
		];
	}]);