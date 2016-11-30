		angular.module("copa").controller('copaVacationsCtrl', [ "$scope", function($scope){
			var url = window.location.href.toString().split(window.location.host)[‌​1];
			if( url.indexOf('?') != -1 ){
				var countryUrl = url.split('?')[1].toLowerCase();
			}
			$scope.countries = [];
			$scope.selectedCountry = '';
			$scope.world = [
				{
					origin: 'Peru',
					a2: 'pe',
					packages: [
						{
							destination: {
								city: 'Havana',
								country: 'Cuba'
							}, 
							price: 1097,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 5,
							nights: 4,
							url: '/peru-habana',
							img: {
								src: '/documents/20182/174915/montegoBaySmall.png',
								alt: 'Havana'
							}
						},
						{
							destination: {
								city: 'Santo Domingo',
								country: 'Dominican Republic'
							},
							price: 1188,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 5,
							nights: 4,
							url: '/peru-santo-domingo',
							img: {
								src: '/documents/20182/174915/.jpg',
								alt: 'Santo Domingo'
							}
						},
						{
							destination: {
								city: 'Panama',
								country: 'Panama'
							},
							price: 695,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 0,
							days: 4,
							nights: 3,
							url: '/peru-panama',
							img: {
								src: '/documents/20182/174915/.jpg',
								alt: 'Panama'
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
								country: 'Dominican Republic'
							},
							price: 1155,
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
								city: 'Panama',
								country: 'Panama'
							},
							price: 666,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 0,
							days: 4,
							nights: 3,
							url: '/ecuador-panama',
							img: {
								src: '/documents/20182/174915/Panama-Canal400.jpg',
								alt: 'Panama canal'
							}
						},
						{
							destination: {
								city: 'Miami',
								country: 'USA'
							},
							price: 836,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 0,
							days: 4,
							nights: 3,
							url: '/ecuador-miami',
							img: {
								src: '/documents/20182/174915/.jpg',
								alt: 'Miami beach'
							}
						},
						{
							destination: {
								city: 'Curaçao',
								country: 'Curaçao'
							},
							price: 1079,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 4,
							nights: 3,
							url: '/ecuador-miami',
							img: {
								src: '/documents/20182/174915/.jpg',
								alt: 'Miami beach'
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
								city: 'Panama',
								country: 'Panama'
							},
							price: 689,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 4,
							nights: 3,
							url: '/colombia-panama',
							img: {
								src: '/documents/20182/174915/pty-small.jpg',
								alt: 'Panama City'
							}
						},
						{
							destination: {
								city: 'Punta Cana',
								country: 'Dominican Republic'
							},
							price: 959,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 1,
							days: 4,
							nights: 3,
							url: '/colombia-punta-cana',
							img: {
								src: '/documents/20182/174915/.jpg',
								alt: 'Punta Cana'
							}
						},
						{
							destination: {
								city: 'Curaçao',
								country: 'Curaçao'
							},
							price: 749,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 0,
							days: 4,
							nights: 3,
							url: '/colombia-curazao',
							img: {
								src: '/documents/20182/174915/.jpg',
								alt: 'Curaçao'
							}
						},
						{
							destination: {
								city: 'Aruba',
								country: 'Aruba'
							},
							price: 899,
							tickets: 1,
							hotel: 1,
							transport: 1,
							allInclusive: 0,
							days: 4,
							nights: 3,
							url: '/colombia-aruba',
							img: {
								src: '/documents/20182/174915/.jpg',
								alt: 'Aruba'
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
								country: 'United States'
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
								country: 'Dominican Republic'
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
							price: 1440,
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
								city: 'Panama',
								country: 'Panama'
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
								src: '/documents/20182/174915/panama-ruinas400.jpg',
								alt: 'Panama'
							}
						}
					]	
				},
				{
					origin: "Argentina",
					a2: 'ar',
					packages: [
						{
							destination: {
								city: 'San Andres Island',
								country: 'Colombia'
							},
							price: 1872,
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
