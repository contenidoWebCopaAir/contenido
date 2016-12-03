		angular.module("copa").controller('copaVacationsCtrl', [ "$scope", function($scope){
			var url = window.location.href.toString().split(window.location.host)[‌​1];
			if( url.indexOf('?') != -1 ){
				var countryUrl = url.split('?')[1].toLowerCase();
			}
			$scope.countries = [];
			$scope.selectedCountry = '';
			$scope.world = [
				{
					origin: 'Perú',
					a2: 'pe',
					packages: [
						{
							destination: {
								city: 'Montego Bay',
								country: 'Jamaica'
							}, 
							price: 1319,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 5,
							nights: 4,
							url: '/peru-montego-bay',
							img: {
								src: '/documents/20182/174915/montegoBaySmall.png',
								alt: 'Playa de Montego bay'
							}
						},
						{
							destination: {
								city: 'Panamá',
								country: 'Panamá'
							},
							price: 469,
							tickets: 1,
							hotel: 1,
							transport: 0,
							allInclusive: 0,
							days: 4,
							nights: 3,
							url: '/peru-panama',
							img: {
								src: '/documents/20182/174915/Panamá-city400.jpg',
								alt: 'Ciudad de Panamá'
							}
						},
						{
							destination: {
								city: 'Punta Cana',
								country: 'Rep. Dominicana'
							},
							price: 1075,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 5,
							nights: 4,
							url: '/peru-punta-cana',
							img: {
								src: '/documents/20182/174915/puj-small.jpg',
								alt: 'Playa de Punta Cana'
							}
						},
						{
							destination: {
								city: 'Cancún',
								country: 'México'
							},
							price: 1159,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 5,
							nights: 4,
							url: '/peru-cancun',
							img: {
								src: '/documents/20182/174915/cun-small.jpg',
								alt: 'Playa de Cancún'
							}
						},

					]
				},
				{
					origin: 'Argentina',
					a2: 'ar',
					packages: [
						{
							destination: {
								city: 'Cancún',
								country: 'México'
							},
							price: 2478,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 8,
							nights: 7,
							url: '/argentina-cancun',
							img: {
								src: '/documents/20182/174915/cancun400.jpg',
								alt: 'Playa de Cancun'
							}
						},
						{
							destination: {
								city: 'San Andres Isla',
								country: 'Colombia'
							},
							price: 1619,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 8,
							nights: 7,
							url: '/argentina-san-andres',
							img: {
								src: '/documents/20182/174915/adz-small.jpg',
								alt: 'San Andres Isla'
							}
						},
						{
							destination: {
								city: 'Punta Cana',
								country: 'Rep. Dominicana'
							},
							price: 2619,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 10,
							nights: 9,
							url: '/argentina-punta-cana',
							img: {
								src: '/documents/20182/174915/PUNTA-CANA400.jpg',
								alt: 'Playa de Punta Cana'
							}
						}
					]
				},
				
				{
					origin: 'Ecuador',
					a2: 'ec',
					packages: [
						{
							destination: {
								city: 'Santiago de los Caballeros',
								country: 'Rep. Dominicana'
							},
							price: 874,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 4,
							nights: 3,
							url: '/ecuador-santiago-de-los-caballeros',
							img: {
								src: '/documents/20182/174915/STI-small.jpg',
								alt: 'Santiago de los Caballeros'
							}
						},
						{
							destination: {
								city: 'Punta Cana',
								country: 'Rep. Dominicana'
							},
							price: 985,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 4,
							nights: 3,
							url: '/ecuador-punta-cana',
							img: {
								src: '/documents/20182/174915/puj-small.jpg',
								alt: 'Punta Cana beach'
							}
						},
						{
							destination: {
								city: 'Panamá',
								country: 'Panamá'
							},
							price: 555,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 0,
							days: 4,
							nights: 3,
							url: '/ecuador-panama',
							img: {
								src: '/documents/20182/174915/Panamá-Canal400.jpg',
								alt: 'Panamá canal'
							}
						},
						{
							destination: {
								city: 'St Maarten',
								country: ''
							},
							price: 1134,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 4,
							nights: 3,
							url: '/ecuador-st-maarten',
							img: {
								src: '/documents/20182/174915/SXM-small.jpg',
								alt: 'St Maarten'
							}
						}
					]
				},
				{
					origin: 'Colombia',
					a2: 'co',
					packages: [
						{
							destination: {
								city: 'Panamá',
								country: 'Panamá'
							},
							price: 599,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 4,
							nights: 3,
							url: '/colombia-panama',
							img: {
								src: '/documents/20182/174915/pty-small.jpg',
								alt: 'Ciudad de Panamá'
							}
						},
						{
							destination: {
								city: 'Orlando',
								country: 'Estados Unidos'
							},
							price: 849,
							tickets: 1,
							hotel: 1,
							transport: 0,
							allInclusive: 0,
							days: 4,
							nights: 3,
							url: '/colombia-orlando',
							img: {
								src: '/documents/20182/174915/mco-small.jpg',
								alt: 'Gran sobrero de mago'
							}
						},
						{
							destination: {
								city: 'Miami',
								country: 'Estados Unidos'
							},
							price: 779,
							tickets: 1,
							hotel: 1,
							transport: 0,
							allInclusive: 0,
							days: 4,
							nights: 3,
							url: '/colombia-miami',
							img: {
								src: '/documents/20182/174915/mia-small.jpg',
								alt: 'Miami en la noche'
							}
						},
						{
							destination: {
								city: 'Las Vegas',
								country: 'Estados Unidos'
							},
							price: 789,
							tickets: 1,
							hotel: 1,
							transport: 0,
							allInclusive: 0,
							days: 4,
							nights: 3,
							url: '/colombia-las-vegas',
							img: {
								src: '/documents/20182/174915/LAS-small.jpg',
								alt: 'Las Vegas'
							}
						},
					]
				},
				{
					origin: 'Paraguay',
					a2: 'py',
					packages: [
						{
							destination: {
								city: 'Los Angeles',
								country: 'Estados Unidos'
							},
							price: 1090,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 0,
							days: 6,
							nights: 5,
							url: '/paraguay-los-angeles',
							img: {
								src: '/documents/20182/174915/lax-small.jpg',
								alt: 'Los Angeles'
							}
						},
						{
							destination: {
								city: 'Punta Cana',
								country: 'Rep. Dominicana'
							},
							price: 1150,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 6,
							nights: 5,
							url: '/paraguay-punta-cana',
							img: {
								src: '/documents/20182/174915/PUNTA-CANA400.jpg',
								alt: 'Punta Cana'
							}
						},
						{
							destination: {
								city: 'Montego Bay',
								country: 'Jamaica'
							},
							price: 1150,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 6,
							nights: 5,
							url: '/paraguay-montego-bay',
							img: {
								src: '/documents/20182/174915/mbj-small.jpg',
								alt: 'Montego Bay'
							}	
						},
						{
							destination: {
								city: 'Nassau',
								country: 'Bahamas'
							},
							price: 1990,
							tickets: 1,
							hotel: 1,
							transport: 0,
							allInclusive: 0,
							days: 8,
							nights: 7,
							url: '/paraguay-nassau',
							img: {
								src: '/documents/20182/174915/NAS-small.jpg',
								alt: 'Nassau'
							}
						},
						{
							destination: {
								city: 'Panamá',
								country: 'Panamá'
							},
							price: 1090,
							tickets: 1,
							hotel: 1,
							transport: 0,
							allInclusive: 0,
							days: 5,
							nights: 4,
							url: '/paraguay-panama',
							img: {
								src: '/documents/20182/174915/Panamá-ruinas400.jpg',
								alt: 'Panamá'
							}
						}
					]	
				}
			];

			for( var i in $scope.world){
		        if( $scope.countries.indexOf( $scope.world[i].origin ) == -1 ){
		            $scope.countries.push( $scope.world[i].origin );
		        }

		        if( countryUrl && $scope.world[i].a2 == countryUrl ){
		        	$scope.selectedCountry = $scope.world[i].origin;
		        }
    		}

		}]);
