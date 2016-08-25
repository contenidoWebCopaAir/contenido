 var app = angular.module('Offices', []);

 app.controller('officesCtrl', ['$scope', function ($scope) {
    $scope.query = '';
    $scope.selectedCountry = '';
    $scope.countriesEn = [
        {
            countryName: 'Netherlands Antilles',
            cities: [
                {
                    name: 'St Marteen',
                    phone: '001 877 389 3606'
                }
            ]
        },
        {
            countryName: 'Argentina',
            cities: [
                {
                    name: 'Buenos Aires',
                    phone: '0810 810 COPA (2672)'
                },
                {
                    name: 'Cordoba',
                    phone: '0810 810 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Aruba',
            cities: [
                {
                    name: 'Oranjestad',
                    phone: '585 COPA(2672)'
                }
            ]
           
        },
        {
            countryName: 'Bahamas',
            cities: [
                {
                    name: 'Nassau',
                    phone: '1 800 389 0772'
                }
            ]
        },
        {
            countryName: 'Bolivia',
            cities: [
                {
                    name: 'Santa Cruz de la Sierra',
                    phone: '800 10 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Brazil',
            cities: [
                {
                    name: 'Belo Horizonte',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Brasilia',
                    phone: '0800 886 COPA (2672)' 
                }, 
                {
                    name: 'Campinas',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Manaos',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Porto Alegre',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Recife',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Rio de Janeiro',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Sao Paulo',
                    phone: '0800 886 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Canada',
            cities: [
                {
                    name: 'Montreal',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Toronto',
                    phone: '1 800 FLY COPA (359 2672)'
                }
            ]
        },
        {
            countryName: 'Chile',
            cities: [
                {
                    name: 'Santiago de Chile',
                    phone: '(56) 2 2835 8200'
                }
            ]
        },
        {
            countryName: 'Colombia',
            cities: [
                {
                    name: 'Barranquilla',
                    phone: '01 8000 112600'
                },
                 {
                    name: 'Bogota',
                    phone: '01 8000 112600'
                },
                 {
                    name: 'Bucaramanga',
                    phone: '01 8000 112600'
                },
                 {
                    name: 'Cali',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Cartagena',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Cucuta',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Medellin',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Pereira',
                    phone: '01 8000 112600'
                },
                {
                    name: 'San Andres',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Santa Marta',
                    phone: '01 8000 112600'
                }
            ]
        },
        {
            countryName: 'Costa Rica',
            cities: [
                {
                    name: 'Liberia',
                    phone: '(506) 2223 COPA (2672)'
                },
                {
                    name: 'San Jose',
                    phone: '(506) 2223 COPA (2672)'
                },
            ]
        },
        {
            countryName: 'Cuba',
            cities: [
                {
                    name: 'Cayo Santa María',
                    phone: '(53) 7 204 1111'
                },
                {
                    name: 'La Habana',
                    phone: '(53) 7 204 1111'
                }
            ]
        },
        {
            countryName: 'Curaçao',
            cities: [
                {
                    name: 'Willemstad',
                    phone: '001 877 389 3606'
                }
            ]
        },
        {
            countryName: 'Ecuador',
            cities: [
                {
                    name: 'Cuenca',
                    phone: '(5934) 230 3211'
                },
                {
                    name: 'Guayaquil',
                    phone: '(5934) 230 3211'
                },
                {
                    name: 'Quito',
                    phone: '(5932) 4013000'
                }
            ]
        },
        {
            countryName: 'El Salvador',
            cities: [
                {
                    name: 'San Salvador',
                    phone: '(503) 2209 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'United States',
            cities: [
                {
                    name: 'Chicago',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Fort Lauderdale',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Las Vegas',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Los Angeles',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Miami',
                    phone: '1 800 FLY COPA (359 2672) - 1 305 371 COPA (2672)'
                },
                {
                    name: 'New York',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Orlando',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Tampa',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Washington D.C',
                    phone: '1 800 FLY COPA (359 2672)'
                }
            ]
        },
        {
            countryName: 'Guatemala',
            cities: [
                {
                    name: 'Guatemala',
                    phone: '(502) 2307-6400'
                }
            ]
        },
        {
            countryName: 'Guyana',
            cities: [
                {
                    name: 'Georgetown',
                    phone: '(855) 654 0566'
                }
            ]
        },
        {
            countryName: 'Haiti',
            cities: [
                {
                    name: 'Port-au-Prince',
                    phone: '1 800 271 COPA (2672) - 868 669 5189' 
                }
            ]
        },
        {
            countryName: 'Honduras',
            cities: [
                {
                    name: 'San Pedro Sula',
                    phone: '(504) 516 COPA (2672)'
                }, 
                {
                    name: 'Tegucigalpa',
                    phone: '(504) 233 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Jamaica',
            cities: [
                {
                    name: 'Kingston',
                    phone: '1 800 234 COPA (2672)'
                },
                {
                    name: 'Montego Bay',
                    phone: '1 800 234 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Mexico',
            cities: [
                {
                    name: 'Cancun',
                    phone: '01 800 265 COPA (2672)'
                },
                {
                    name: 'Guadalajara',
                    phone: '01 800 265 COPA (2672)'
                },
                {
                    name: 'Monterrey',
                    phone: '01 800 265 COPA (2672)'
                },
                {
                    name: 'Mexico D.F',
                    phone: '01 800 265 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Nicaragua',
            cities: [
                {
                    name: 'Managua',
                    phone: '(505) 2267 0045'
                }
            ]
        },
        {
            countryName: 'Panama',
            cities: [
                {
                    name: 'Panama',
                    phone: '(507) 217 COPA (2672)'
                },
                {
                    name: 'David, Chiriqui',
                    phone: '(507) 217 COPA (2672)'
                },
                {
                    name: 'Colón Free Trade Zone',
                    phone: '(507) 217 COPA (2672)'
                }
            ]
        }, 
        {
            countryName: 'Paraguay',
            cities: [
                {
                    name: 'Asunción',
                    phone: '(595) 2161 4300'
                }
            ]
        },
        {
            countryName: 'Peru',
            cities: [
                {
                    name: 'Lima',
                    phone: '(51) 1 7092600'
                }
            ]
        },
        {
            countryName: 'Puerto Rico',
            cities: [
                {
                    name: 'San Juan',
                    phone: '1 800 FLY COPA (359 2672)'
                }
            ]
        },
        {
            countryName: 'Dominican Republic',
            cities: [
                {
                    name: 'Punta Cana',
                    phone: '(809) 200 2772'
                },
                {
                    name: 'Santiago de los Caballeros',
                    phone: '(809) 200 2772'
                },
                {
                    name: 'Santo Domingo',
                    phone: '(809) 472 COPA (2672), Free Call to 809 200 2772'
                }
            ]
        },
        {
            countryName: 'Trinidad y Tobago',
            cities: [
                {
                    name: 'Port of Spain',
                    phone: '1 800 271 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Uruguay',
            cities: [
                {
                    name: 'Montevideo',
                    phone: '(598) 2626 1000'
                }
            ]
        },
        {
            countryName: 'Venezuela',
            cities: [
                {
                    name: 'Caracas',
                    phone: '0 800 826 7200'
                },
                 {
                    name: 'Maracaibo',
                    phone: '0 800 826 7200'
                },
                {
                    name: 'Valencia',
                    phone: '0 800 826 7200'
                }
            ]
        }

    ];

    $scope.countriesEs = [
        {
            countryName: 'Antillas Holandesas',
            cities: [
                {
                    name: 'St Marteen',
                    phone: '001 877 389 3606'
                }
            ]
        },
        {
            countryName: 'Argentina',
            cities: [
                {
                    name: 'Buenos Aires',
                    phone: '0810 810 COPA (2672)'
                },
                {
                    name: 'Córdoba',
                    phone: '0810 810 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Aruba',
            cities: [
                {
                    name: 'Oranjestad',
                    phone: '585 COPA(2672)'
                }
            ]
           
        },
        {
            countryName: 'Bahamas',
            cities: [
                {
                    name: 'Nassau',
                    phone: '1 800 389 0772'
                }
            ]
        },
        {
            countryName: 'Bolivia',
            cities: [
                {
                    name: 'Santa Cruz de la Sierra',
                    phone: '800 10 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Brasil',
            cities: [
                {
                    name: 'Belo Horizonte',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Brasilia',
                    phone: '0800 886 COPA (2672)' 
                }, 
                {
                    name: 'Campinas',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Manaos',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Puerto Alegre',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Recife',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Rio de Janeiro',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Sao Paulo',
                    phone: '0800 886 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Canadá',
            cities: [
                {
                    name: 'Montreal',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Toronto',
                    phone: '1 800 FLY COPA (359 2672)'
                }
            ]
        },
        {
            countryName: 'Chile',
            cities: [
                {
                    name: 'Santiago de Chile',
                    phone: '(56) 2 2835 8200'
                }
            ]
        },
        {
            countryName: 'Colombia',
            cities: [
                {
                    name: 'Barranquilla',
                    phone: '01 8000 112600'
                },
                 {
                    name: 'Bogotá',
                    phone: '01 8000 112600'
                },
                 {
                    name: 'Bucaramanga',
                    phone: '01 8000 112600'
                },
                 {
                    name: 'Cali',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Cartagena',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Cúcuta',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Medellín',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Pereira',
                    phone: '01 8000 112600'
                },
                {
                    name: 'San Andrés',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Santa Marta',
                    phone: '01 8000 112600'
                }
            ]
        },
        {
            countryName: 'Costa Rica',
            cities: [
                {
                    name: 'Liberia',
                    phone: '(506) 2223 COPA (2672)'
                },
                {
                    name: 'San José',
                    phone: '(506) 2223 COPA (2672)'
                },
            ]
        },
        {
            countryName: 'Cuba',
            cities: [
                {
                    name: 'Cayo Santa María',
                    phone: '(53) 7 204 1111'
                },
                {
                    name: 'La Habana',
                    phone: '(53) 7 204 1111'
                }
            ]
        },
        {
            countryName: 'Curazao',
            cities: [
                {
                    name: 'Willemstad',
                    phone: '001 877 389 3606'
                }
            ]
        },
        {
            countryName: 'Ecuador',
            cities: [
                {
                    name: 'Cuenca',
                    phone: '(5934) 230 3211'
                },
                {
                    name: 'Guayaquil',
                    phone: '(5934) 230 3211'
                },
                {
                    name: 'Quito',
                    phone: '(5932) 4013000'
                }
            ]
        },
        {
            countryName: 'El Salvador',
            cities: [
                {
                    name: 'San Salvador',
                    phone: '(503) 2209 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Estados unidos',
            cities: [
                {
                    name: 'Chicago',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Fort Lauderdale',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Las Vegas',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Los Angeles',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Miami',
                    phone: '1 800 FLY COPA (359 2672) - 1 305 371 COPA (2672)'
                },
                {
                    name: 'Nueva York',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Orlando',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Tampa',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Washington D.C',
                    phone: '1 800 FLY COPA (359 2672)'
                }
            ]
        },
        {
            countryName: 'Guatemala',
            cities: [
                {
                    name: 'Guatemala',
                    phone: '(502) 2307-6400'
                }
            ]
        },
        {
            countryName: 'Guyana',
            cities: [
                {
                    name: 'Georgetown',
                    phone: '(855) 654 0566'
                }
            ]
        },
        {
            countryName: 'Haití',
            cities: [
                {
                    name: 'Puerto Príncipe',
                    phone: '1 800 271 COPA (2672) - 868 669 5189' 
                }
            ]
        },
        {
            countryName: 'Honduras',
            cities: [
                {
                    name: 'San Pedro Sula',
                    phone: '(504) 516 COPA (2672)'
                }, 
                {
                    name: 'Tegucigalpa',
                    phone: '(504) 233 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Jamaica',
            cities: [
                {
                    name: 'Kingston',
                    phone: '1 800 234 COPA (2672)'
                },
                {
                    name: 'Montego Bay',
                    phone: '1 800 234 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'México',
            cities: [
                {
                    name: 'Cancún',
                    phone: '01 800 265 COPA (2672)'
                },
                {
                    name: 'Guadalajara',
                    phone: '01 800 265 COPA (2672)'
                },
                {
                    name: 'Monterrey',
                    phone: '01 800 265 COPA (2672)'
                },
                {
                    name: 'México D.F',
                    phone: '01 800 265 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Nicaragua',
            cities: [
                {
                    name: 'Managua',
                    phone: '(505) 2267 0045'
                }
            ]
        },
        {
            countryName: 'Panamá',
            cities: [
                {
                    name: 'Panamá',
                    phone: '(507) 217 COPA (2672)'
                },
                {
                    name: 'David, Chiriquí',
                    phone: '(507) 217 COPA (2672)'
                },
                {
                    name: 'Zona Libre Colón',
                    phone: '(507) 217 COPA (2672)'
                }
            ]
        }, 
        {
            countryName: 'Paraguay',
            cities: [
                {
                    name: 'Asunción',
                    phone: '(595) 2161 4300'
                }
            ]
        },
        {
            countryName: 'Perú',
            cities: [
                {
                    name: 'Lima',
                    phone: '(51) 1 7092600'
                }
            ]
        },
        {
            countryName: 'Puerto Rico',
            cities: [
                {
                    name: 'San Juan',
                    phone: '1 800 FLY COPA (359 2672)'
                }
            ]
        },
        {
            countryName: 'República Dominicana',
            cities: [
                {
                    name: 'Punta Cana',
                    phone: '(809) 200 2772'
                },
                {
                    name: 'Santiago de los Caballeros',
                    phone: '(809) 200 2772'
                },
                {
                    name: 'Santo Domingo',
                    phone: '(809) 472 COPA (2672), Free Call to 809 200 2772'
                }
            ]
        },
        {
            countryName: 'Trinidad y Tobago',
            cities: [
                {
                    name: 'Puerto España',
                    phone: '1 800 271 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Uruguay',
            cities: [
                {
                    name: 'Montevideo',
                    phone: '(598) 2626 1000'
                }
            ]
        },
        {
            countryName: 'Venezuela',
            cities: [
                {
                    name: 'Caracas',
                    phone: '0 800 826 7200'
                },
                 {
                    name: 'Maracaibo',
                    phone: '0 800 826 7200'
                },
                {
                    name: 'Valencia',
                    phone: '0 800 826 7200'
                }
            ]
        }

    ];

    $scope.countriesPt = [
        {
            countryName: 'Antilhas Neerlandesas',
            cities: [
                {
                    name: 'St Marteen',
                    phone: '001 877 389 3606'
                }
            ]
        },
        {
            countryName: 'Argentina',
            cities: [
                {
                    name: 'Buenos Aires',
                    phone: '0810 810 COPA (2672)'
                },
                {
                    name: 'Córdova',
                    phone: '0810 810 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Aruba',
            cities: [
                {
                    name: 'Oranjestad',
                    phone: '585 COPA(2672)'
                }
            ]
           
        },
        {
            countryName: 'Bahamas',
            cities: [
                {
                    name: 'Nassau',
                    phone: '1 800 389 0772'
                }
            ]
        },
        {
            countryName: 'Bolívia',
            cities: [
                {
                    name: 'Santa Cruz de la Sierra',
                    phone: '800 10 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Brasil',
            cities: [
                {
                    name: 'Belo Horizonte',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Brasília',
                    phone: '0800 886 COPA (2672)' 
                }, 
                {
                    name: 'Campinas',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Manaus',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Porto Alegre',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Recife',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'Rio de Janeiro',
                    phone: '0800 886 COPA (2672)'
                },
                {
                    name: 'São Paulo',
                    phone: '0800 886 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Canadá',
            cities: [
                {
                    name: 'Montreal',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Toronto',
                    phone: '1 800 FLY COPA (359 2672)'
                }
            ]
        },
        {
            countryName: 'Chile',
            cities: [
                {
                    name: 'Santiago de Chile',
                    phone: '(56) 2 2835 8200'
                }
            ]
        },
        {
            countryName: 'Colômbia',
            cities: [
                {
                    name: 'Barranquilla',
                    phone: '01 8000 112600'
                },
                 {
                    name: 'Bogotá',
                    phone: '01 8000 112600'
                },
                 {
                    name: 'Bucaramanga',
                    phone: '01 8000 112600'
                },
                 {
                    name: 'Cáli',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Cartagena',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Cúcuta',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Medellín',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Pereira',
                    phone: '01 8000 112600'
                },
                {
                    name: 'San Andrés',
                    phone: '01 8000 112600'
                },
                {
                    name: 'Santa Marta',
                    phone: '01 8000 112600'
                }
            ]
        },
        {
            countryName: 'Costa Rica',
            cities: [
                {
                    name: 'Liberia',
                    phone: '(506) 2223 COPA (2672)'
                },
                {
                    name: 'San José',
                    phone: '(506) 2223 COPA (2672)'
                },
            ]
        },
        {
            countryName: 'Cuba',
            cities: [
                {
                    name: 'Ilha Santa María',
                    phone: '(53) 7 204 1111'
                },
                {
                    name: 'La Habana',
                    phone: '(53) 7 204 1111'
                }
            ]
        },
        {
            countryName: 'Curaçao',
            cities: [
                {
                    name: 'Willemstad',
                    phone: '001 877 389 3606'
                }
            ]
        },
        {
            countryName: 'Equador',
            cities: [
                {
                    name: 'Cuenca',
                    phone: '(5934) 230 3211'
                },
                {
                    name: 'Guaiaquil',
                    phone: '(5934) 230 3211'
                },
                {
                    name: 'Quito',
                    phone: '(5932) 4013000'
                }
            ]
        },
        {
            countryName: 'El Salvador',
            cities: [
                {
                    name: 'San Salvador',
                    phone: '(503) 2209 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Estados unidos',
            cities: [
                {
                    name: 'Chicago',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Fort Lauderdale',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Las Vegas',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Los Angeles',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Miami',
                    phone: '1 800 FLY COPA (359 2672) - 1 305 371 COPA (2672)'
                },
                {
                    name: 'Nova York',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Orlando',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Tampa',
                    phone: '1 800 FLY COPA (359 2672)'
                },
                {
                    name: 'Washington D.C',
                    phone: '1 800 FLY COPA (359 2672)'
                }
            ]
        },
        {
            countryName: 'Guatemala',
            cities: [
                {
                    name: 'Guatemala',
                    phone: '(502) 2307-6400'
                }
            ]
        },
        {
            countryName: 'Guyana',
            cities: [
                {
                    name: 'Georgetown',
                    phone: '(855) 654 0566'
                }
            ]
        },
        {
            countryName: 'Haití',
            cities: [
                {
                    name: 'Puerto Príncipe',
                    phone: '1 800 271 COPA (2672) - 868 669 5189' 
                }
            ]
        },
        {
            countryName: 'Honduras',
            cities: [
                {
                    name: 'San Pedro Sula',
                    phone: '(504) 516 COPA (2672)'
                }, 
                {
                    name: 'Tegucigalpa',
                    phone: '(504) 233 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Jamaica',
            cities: [
                {
                    name: 'Kingston',
                    phone: '1 800 234 COPA (2672)'
                },
                {
                    name: 'Montego Bay',
                    phone: '1 800 234 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'México',
            cities: [
                {
                    name: 'Cancún',
                    phone: '01 800 265 COPA (2672)'
                },
                {
                    name: 'Guadalajara',
                    phone: '01 800 265 COPA (2672)'
                },
                {
                    name: 'Monterrey',
                    phone: '01 800 265 COPA (2672)'
                },
                {
                    name: 'México D.F',
                    phone: '01 800 265 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Nicarágua',
            cities: [
                {
                    name: 'Manágua',
                    phone: '(505) 2267 0045'
                }
            ]
        },
        {
            countryName: 'Panamá',
            cities: [
                {
                    name: 'Panamá',
                    phone: '(507) 217 COPA (2672)'
                },
                {
                    name: 'David, Chiriquí',
                    phone: '(507) 217 COPA (2672)'
                },
                {
                    name: 'Zona Franca de Colón',
                    phone: '(507) 217 COPA (2672)'
                }
            ]
        }, 
        {
            countryName: 'Paraguay',
            cities: [
                {
                    name: 'Asunción',
                    phone: '(595) 2161 4300'
                }
            ]
        },
        {
            countryName: 'Perú',
            cities: [
                {
                    name: 'Lima',
                    phone: '(51) 1 7092600'
                }
            ]
        },
        {
            countryName: 'Puerto Rico',
            cities: [
                {
                    name: 'San Juan',
                    phone: '1 800 FLY COPA (359 2672)'
                }
            ]
        },
        {
            countryName: 'República Dominicana',
            cities: [
                {
                    name: 'Punta Cana',
                    phone: '(809) 200 2772'
                },
                {
                    name: 'Santiago de los Caballeros',
                    phone: '(809) 200 2772'
                },
                {
                    name: 'Santo Domingo',
                    phone: '(809) 472 COPA (2672), Free Call to 809 200 2772'
                }
            ]
        },
        {
            countryName: 'Trinidad e Tobago',
            cities: [
                {
                    name: 'Puerto Espanha',
                    phone: '1 800 271 COPA (2672)'
                }
            ]
        },
        {
            countryName: 'Uruguay',
            cities: [
                {
                    name: 'Montevideo',
                    phone: '(598) 2626 1000'
                }
            ]
        },
        {
            countryName: 'Venezuela',
            cities: [
                {
                    name: 'Caracas',
                    phone: '0 800 826 7200'
                },
                 {
                    name: 'Maracaibo',
                    phone: '0 800 826 7200'
                },
                {
                    name: 'Valencia',
                    phone: '0 800 826 7200'
                }
            ]
        }

    ];

    $scope.countriesNameEn = [];
    $scope.countriesNameEs = [];
    $scope.countriesNamePt = [];

    for( var i in $scope.countriesEn ){
        if( $scope.countriesEn.indexOf( $scope.countriesEn[i].countryName ) == -1 ){
            $scope.countriesNameEn.push( $scope.countriesEn[i].countryName );
        }
    }
    for( var i in $scope.countriesEs ){
        if( $scope.countriesEs.indexOf( $scope.countriesEs[i].countryName ) == -1 ){
            $scope.countriesNameEs.push( $scope.countriesEs[i].countryName );
        }
    }
    for( var i in $scope.countriesPt ){
        if( $scope.countriesPt.indexOf( $scope.countriesPt[i].countryName ) == -1 ){
            $scope.countriesNamePt.push( $scope.countriesPt[i].countryName );
        }
    }
}]);