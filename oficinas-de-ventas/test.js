angular.module('copa').controller('OfficesCtrl', ["$scope", function ($scope) {

    var reservaciones = 'For assistance before your trip, please contact our <a href="/{{cultureFromUrl | lowercase}}/{{storeFrontFromUrl | lowercase}}/reservation-center" target="_blank">Reservation Center</a>';

    $scope.query = '';
    $scope.selectedCountry = "";
    $scope.offices = [
        {
            countryName: "Antillas Holandesas",
            cities: [
                {
                    name: "St Marteen",
                    address: "International Airport <br>Office Princess Juliana  # 1030",
                    schedules: reservaciones
                }
            ]
            
        },
        {
            countryName: "Argentina",
            cities: [
                {
                    name: "Buenos Aires",
                    address: "Emma de la Barra 353, 7th floor, East Puerto Madero",
                    schedules: 'Monday - Friday 9:00am-5:00pm'
                }
            ]
        },
        {
            
            countryName: "Aruba",
            cities: [
                {
                    name: "Oranjestad",
                    address: "Queen Beatrix Airport<br>(International flights section)",
                    schedules: reservaciones
                    
                }
            ]
        },
        {
            
            countryName: "Bahamas",
            cities: [
                {
                    name: "Nassau",
                    address: "International Airport Lynden Pindling Terminal A",
                    schedules: reservaciones
                    
                }
            ]
        },
        {
            
            countryName: 'Bolivia',
            cities: [
                {
                    name: 'Santa Cruz de la Sierra',
                    address: 'La Pascana Building Office #3, 24 de septiembre St., Centro Histórico Zone',
                    schedules: 'Monday - Friday 8:30am-12:30pm<br>2:30pm -6:30pm<br>Saturday 9:00am-12:30pm'
                }
            ]
        },
        {
            
            countryName: 'Brazil',
            cities: [
                {
                    name: 'Belo Horizonte',
                    address: 'Av. Bias Fortes, 472 Lourdes A/B CEP : 30170-01',
                    schedules: 'Monday - Friday 9:00am - 6:00pm'  
                },
                {
                    name:'Brazilia',
                    address: 'Brasilia Airport S/N aeroporto lago sul Brazilia -DF 71.608-900',
                    schedules: 'Monday - Friday 9:00am - 6:00pm'
                },
                {
                    name: 'Campinas',
                    address: 'Rod Santos Dumont km 66 Term 1 Level 1 Viracopos Airport',
                    schedules: 'Monday - Friday 9:00am - 6:00pm'
                },
                {
                    name: 'Manaos',
                    address: 'Av. Santos Dumont, 1350 Bairro Taruma - Terreo <br>International Airport Eduardo Gomes CEP 69.041-000',
                    schedules: 'Monday - Friday 9:00am - 6:00pm'
                },
                {
                    name: 'Porto Alegre',
                    address: 'Av. Severo Dulius, 90010 Sao João',
                    schedules: 'Monday - Friday 9:00am - 6:00pm'
                },
                {
                    name: 'Recife',
                    address: 'Praça Ministro Salgado Filho s / n – Imbiribeira International Airport Gilberto Freyre',
                    schedules: 'Monday - Friday 9:00am - 6:00pm'
                },
                {
                    name: 'Rio de Janeiro',
                    address: 'Atlantic Avenue, 1130 - 15 andar Copacabana',
                    schedules: 'Monday - Friday 9:00am - 6:00pm'
                },
                {
                    name: 'Sao Paulo',
                    address: 'Paulista Avenue 1337 – 4º floor ZIP 01311-200',
                    schedules: 'Monday - Friday 9:00am - 6:00pm'
                }

            ]
        },
       
        {
            countryName: 'Canada',
            cities: [
                {
                    name: 'Montreal',
                    address: 'International Airport de montreal pierre elliott trudeau 975 boul. Romeo vachon nord Suite 429',
                    schedules: reservaciones
                },
                {
                    name: 'Toronto',
                    address: 'International Airport Pearson Terminal 1 . Oficina GA 2202<br>**Only Canadian dollars and Visa cards are accepted, MasterCard.',
                    schedules: 'Monday - Friday 9:00am-12:00pm'
                }
                
            ]
        },
        {
            countryName: 'Chile',
            cities: [
                {
                    name: 'Santiago de Chile',
                    address: 'Av. El Golf 99 office 101ª Las Condes',
                    schedules: 'Monday - Friday 9:00am-5:00pm'
                }
            ]
        },
        {
            countryName: 'Colombia',
            cities: [
                {
                    name: 'Barranquilla',
                    address: 'street 72 N. 54 - 49 office 1 y 2',
                    schedules: 'Monday - Friday 8:00am-6:00pm<br>Saturday 9:00am-1:00pm'
                },
                {
                    name: 'Bogota',
                    address: 'street 100 #. 7 A - 81 office 3 building Universa',
                    schedules: 'Momday - Friday<br> 8:00am-7:00pm<br>Saturday 8:00am-12:00pm y 1:00pm-5:00pm<br>Sunday 11:00am-4:00pm'
                },
                {
                    name: 'Bogota',
                    address: 'street 76 Cra 11 No. 76-57 office 01',
                    schedules: 'Monday - Friday 8:00am-6:00pm<br>Saturday 9:00am-12:00pm'
                },
                {
                    name: 'Bogota',
                    address: 'Gran Estacion Mall, Costado sphere, first floor, Entry 1',
                    schedules: 'Monday - Saturday 10:00am-8:30pm<br> Sun &amp; Holidays 11:00am-7:00pm'
                },
                {
                    name: 'Bogota',
                    address: 'El Dorado Airport, Entrance 8 Front office 13 y 16, second floor',
                    schedules: 'Monday - Saturday 5:00am-9:00pm<br> Sun &amp; Holidays 5:00am-1:00pm'
                },
                {
                    name: 'Bogota',
                    address: 'Unicentro commercial center<br>Avenue 15th # 124 - 30 floor 1<br> office 1-101 Entrance 8',
                    schedules: 'Monday - Friday 9:00am-8:00pm<br>Saturday 10:00am-7:00pm<br>Sun &amp; Holidays 10:00am-4:00pm'
                },
                {
                    name: 'Bucaramanga',
                    address: 'Carrera 35 No.54-114',
                    schedules: 'Monday - Friday 8:00am-6:00pm<br>Saturday 9:00am-12:00pm'
                },
                {
                    name: 'Cali',
                    address: 'Norte AV 6ta BIS NO. 30 N- 25',
                    schedules: 'Monday - Friday 8:00am-7:00pm<br>Saturday 9:00am-6:00pm<br>Sun &amp; Holidays 9:00am-1:00pm'
                },
                {
                    name: 'Cali',
                    address: '14 Paso Ancho commercial center<br>13th street # 80 - 60',
                    schedules: 'Monday - Friday 9:00am-7:00pm<br>Saturday 8:00am-12:00pm and 1:00pm-5:00pm<br>Sun &amp; Holidays 11:00am-4:00pm'
                },
                {
                    name: 'Cartagena',
                    address: 'International Airport Rafael Nuñez<br>Crespo – Cartagena first floor',
                    schedules: 'Monday - Friday 8:00am-6:00pm<br>Saturday, Sun &amp; Holidays 8:00am-5:00pm'
                },
                {
                    name: 'Cúcuta',
                    address: '15th street N0. 0 E - 18 Los Caobos',
                    schedules: 'Monday - Friday 8 :00am – 6:00pm<br>Saturday 9:00am – 1pm'
                },
                {
                    name: 'Medellin',
                    address: 'Almacentro commercial center<br>Cra 43 A # 34 – 95 office 099',
                    schedules: 'Monday - Friday 8 :00am – 6:00pm<br>Saturday 9:00am – 12:00pm'
                },
                {
                    name: 'Pereira',
                    address: 'AV circunvalar # 8b-51 building Bancafe office 103',
                    schedules: 'Monday - Friday 8 :00am – 6:00pm<br>Saturday 9:00am – 12:00pm'
                },
                {
                    name: 'San Andres',
                    address: 'Ave. Newball Torre Sunrise Beach No. 4- 141 office 125-b6',
                    schedules: 'Monday - Friday<br>8:00am-12:00m<br>2:00pm-6:00pm<br>Saturday 9:00am-1:00pm'
                }
            ]
        },
        {
            countryName: 'Costa Rica',
            cities: [
                {
                    name: 'Liberia',
                    address: 'Aeropuerto Daniel Oduber',
                    schedules: 'Thursday &amp; Sunday 7:00am-2:00pm'
                },
                {
                    name: 'San José',
                    address: 'Edif. Torres Mercedes, 1er floor, Paseo Colón San José',
                    schedules: 'Monday - Friday 8:00am-5:00pm<br>Saturday 8:00am-12:00pm'
                }
            ]
            
        },
        {
            countryName: 'Cuba',
            cities: [
                {
                    name: 'La Habana',
                    address: 'Centro de Negocios Miramar, Planta baja Edif. Barcelona 5ta Avenida entre 76 y 78, Playa.',
                    schedules: 'Monday - Friday 8:30am-5:00pm<br>Saturday 9:00am-1:00pm '
                }
            ]
        },
        {
            countryName: 'Curazao',
            cities: [
                {
                    name: 'Willemstand',
                    address: 'Zuikertuin Mall Tower Unit 1B y 1C Willemstad, Curazao',
                    schedules: 'Monday - Friday 8:00am-5:00pm'
                },
                {
                    name: 'Willemstand',
                    address: 'Curaçao International Airport',
                    schedules: 'Tuesday, Thursday, Friday y Sunday 8:00am-4:00pm'
                }
            ]
        },
        {
            
            countryName: 'Ecuador',
            cities: [
                {
                    name: 'Cuenca',
                    address: 'Miguel Cordero y Av Paucarbamba Edif Work Center Planta baja Ofic N 09',
                    schedules: 'Monday - Friday 9:00am-1:00pm y 2:00pm-5:45pm<br>Saturday 9:00am-1:00pm' 
                }, 
                {
                    name: 'Guayaquil',
                    address: 'Nueve de Octubre 100 y Malecón Simón Bolívar, floor 25',
                    schedules: 'Monday - Friday 8:00am-5:45pm<br>Saturday 8:00am-1:45pm'
                },
                {
                   name: 'Guayaquil',
                    address: 'Village Plaza Mall, Km 11/2 Vía Samborondón Planta alta',
                    schedules: 'Monday - Saturday 10:00am-9:00pm<br>Sun &amp; Holidays 10:00am-8:00pm' 
                },
                {
                    name: 'Quito',
                    address: 'Av. República de El Salvador 361 e Moscú, building Aseguradora del Sur, Planta Baja.',
                    schedules: 'Monday - Friday 8:00am-6:00pm<br>Saturday 9:00am-2:00pm'
                },
                {
                    name: 'Quito',
                    address: 'Mall El Jardín Av. República 6-114 y Amazonas',
                    schedules: 'Monday - Saturday 10:00am-8:30pm<br>Sun &amp; Holidays 10:00am-7:30pm '
                }
            ]
        },
       
        {
            
            countryName: 'El Salvador',
            cities: [
                {
                    name: 'San Salvador',
                    address: 'building World Trade Center, 1er. Level, office 107, Colonia Escalon entre street El Mirador y 89 Av. Norte',
                    schedules: 'Monday - Friday 8:00am-6:00pm<br>Saturday 8:00am-12:00pm '
                }
            ]
        },
        {
            
            countryName: 'United States',
            cities: [
                {
                    name: 'Chicago',
                    address: 'Chicago Ohare International Airport Terminal 5 Chicago Berssie Coleman Drive 10000 Chicago IL 60666. Para consultas sobre ventas, escriba a: <a href="mailto:chicagosales@copaair.com">chicagosales@copaair.com</a>',
                    schedules: 'Monday - Sunday 4:30am-12:30pm'
                },
                {
                    name: 'Fort Lauderdale',
                    address: 'International Airport Fort Lauderdale – Hollywood',
                    schedules: reservaciones
                },
                {
                    name: 'Las Vegas',
                    address: 'International Airport McCarran, Terminal 3, 5757 Wayne Newton Blvd , Las Vegas ,NV 89119',
                    schedules: 'Mon - Sun &amp; Holidays<br>12:00pm-4:00pm y 7:00pm-12:00am'
                },
                {
                    name: 'Los Angeles',
                    address: 'International Airport de Los Angeles Terminal 6, 600 World Way , Los Angeles, CA 90045',
                    schedules: 'Mon - Sun &amp; Holidays<br>7:30am-9:30am y 6:00pm-9:30pm'
                },
                {
                    name: 'Miami',
                    address: 'Waterford Center , 6205 Blue Lagoon Drive Suite 200 Miami Fl 33126',
                    schedules: 'Monday - Friday 9:00am-6:00pm'
                },
                {
                    name: 'New York',
                    address: 'New York International Airport , Terminal 4 Councourse A',
                    schedules: 'Mon - Sun &amp; Holidays 8:45am-9:20am 1:30pm-2:30pm'
                },
                {
                    name: 'Orlando',
                    address: 'International Airport de Orlando , Terminal A 9303 Jeff Fuqua Blvd Orlando FL 32827',
                    schedules: 'Monday - Friday 9:00am-3:00pm '
                },
                {
                    name: 'Tampa',
                    address: 'Waterford Center , 6205 Blue Lagoon Drive Suite 200 Miami Fl 33126',
                    schedules: reservaciones
                },
                {
                    name: 'Washington, D.C',
                    address: 'International Airport Washington-Dulles, 1 Saarinen Circle Dulles Va , Terminal principal Puerta N° 2 salida de vuelos terminal A puerta 19',
                    schedules: 'Monday - Sunday<br>6:00am - 9:00am y 12:00pm - 2:30pm'
                }
            ]
        },
        {           
            countryName: 'Guatemala',
            cities: [
                {
                    name: 'Ciudad de Guatemala',
                    address: '5 avenida 5-55 zona 14 building Euro Plaza Torre 3 Planta Baja, Oficina 102',
                    schedules: 'Monday - Friday 8:00am-6:00pm<br>Saturday 8:00am-12:00pm'
                }
            ]
        },
        {
            
            countryName: 'Guyana',
            cities: [
                {
                    name: 'Georgetown',
                    address: '#212 Camp Street, North Cummingsburg, Georgetown, Guyana',
                    schedules: 'Monday - Friday 8:30am-5:00pm<br>Saturday 9:00am-12:00pm'
                }
            ]
        },
         {
            
            countryName: 'Haití',
            cities: [
                {
                    name: 'Puerto Principe',
                    address: 'Av. 30 , Marie Jeanne',
                    schedules: 'Monday - Friday 8:30am-3:30pm'
                }
            ]
        },
        {
            
            countryName: 'Honduras',
            cities: [
                {
                    name: 'San Pedro Sula',
                    address: 'Avenida Circunvalacion Barrio Paz Barahona, 13 street esquina opuesta a sears, Plaza Geosur, office 1',
                    schedules: 'Monday - Friday 8:00am-5:00pm<br>Saturday 8:00am-12:00m '
                },
                {
                    name: 'Tegucigalpa',
                    address: 'building Corporativo Contiguo al Hotel Clarion 1era Planta, Col. Alameda  Avenida Juan Manuel Galvez',
                    schedules: 'Monday - Friday 8:00am-5:00pm<br>Saturday 8:00am-12:00m'
                }
            ]
        },
        {
            countryName: 'Jamaica',
            cities: [
                {
                    name: 'Kingston',
                    address: 'Courtleigh Corporate Center, 8 St. Lucia Avenue, Kingston 5, Jamaica',
                    schedules: 'Monday - Friday 8:30am-5:00pm '
                },
                {
                    name: 'Montego Bay',
                    address: 'International Airport Sangster Montego Bay, Jamaica W.I.',
                    schedules: reservaciones
                }
            ]
        },
        {   
            countryName: 'México',
            cities: [
                {
                    name: 'Cancún',
                    address: 'International Airport de Cancún Terminal 2 , detrás de mostradores 83 y 84 Oficina N. 43',
                    schedules: 'Monday - Saturday 9:00am-4:00pm<br>Sun &amp; Holidays 10:00am-4:00pm'
                },
                {
                    name: 'Guadalajara',
                    address: 'AV Moctezuma N. 3515 officees 8 e 9, Hotel Presidente Intercontinental Colonia Ciudad del Sol , Zapopan Jalisco México',
                    schedules: 'Monday - Friday 9:00am-6:00pm<br>Saturday 9:00am-1:00pm '
                },
                {
                    name: 'Monterrey',
                    address: 'Av. Lázaro Cárdenas #2225, Torre Latitud, office 2 Planta Baja, Colonia Valle Oriente, San Pedro Garza Garcia, Nuevo León, México.',
                    schedules: 'Monday - Friday 9:00am-6:00pm<br>Saturday 9:00am-1:00pm '
                },
                {
                    name: 'México D.F',
                    address: 'Berna Numero 06 Planta Baja, Colonia Juarez México Delegacion Cuauhtemoc CP 06600 DF',
                    schedules: 'Monday - Friday 9:00am-6:00pm<br>Saturday 10:00am-2:00pm '
                }
            ]
        },
     
        {
            
            countryName: 'Nicaragua',
            cities: [
                {
                    name: 'Managua',
                    address: 'Commercial center Galerías Santo Domingo, km. 7 carretera a Masaya',
                    schedules: 'Monday - Saturday 10:00am - 8:00pm<br>Sunday 11:00am - 8:00pm'
                },
                {
                    name: 'Managua',
                    address: 'Km. 4.5 carretera Masaya, building CAR No. 6 Planes de Altamira',
                    schedules: 'Monday - Friday 8:00am - 5:30pm<br>Saturday 8:00am - 12:00pm'
                }
            ]
        },
        {
            
            countryName: 'Panamá',
            cities: [
                {
                    name: 'Panamá',
                    address: 'Galerías Hotel Riande Continental, Vía España.',
                    schedules: 'Monday - Friday 8:00am-5:00pm<br>Saturday 9:00am-1:00pm '
                },
                {
                    name: 'Panamá',
                    address: 'Casco Antiguo – officees comerciales del Hotel American Trade, street José de Obaldía, Avenida Central entre street 9na y 10am',
                    schedules: 'Monday - Friday 8:00am-6:00pm<br>Saturday 9:00am-1:00pm'
                },
                {
                    name: 'Panamá',
                    address: 'Complejo Business Park, Torre Norte, Planta Baja; Costa del Este',
                    schedules: 'Monday - Friday 8:00am-6:00pm<br>Saturday 8:00am-12:00pm'
                },
                {
                    name: 'Panamá',
                    address: 'Commercial center Altaplaza Mall, Level 2 - área de cines',
                    schedules: 'Monday - Saturday 10:00am-8:00pm<br>Sunday 11:00am-7:00pm'
                },
                {
                    name: 'Panamá',
                    address: 'Commercial center Multiplaza, Plaza del Mar, Primer Level',
                    schedules: 'Monday - Saturday 10:00am-8:00pm<br>Sunday 11:00am-7:00pm'
                },
                {
                    name: 'Panamá',
                    address: 'Commercial center Albrook Mall, Pasillo del Koala',
                    schedules: 'Monday - Saturday 10:00am-8:00pm<br>Sunday 11:00am-7:00pm'
                },
                {
                    name: 'Panamá',
                    address: 'Commercial center Metromall, Primer Level, stand K1-17 frente a Dunkin Donnuts ',
                    schedules: 'Monday - Saturday 10:00am-8:00pm<br>Sunday 11:00am-7:00pm'
                },
                {
                    name: 'Panamá',
                    address: 'Hotel Sheraton, Planta Baja',
                    schedules: 'Monday - Friday <br>8:00am-12:00pm y 1:00pm-5:00pm<br>Saturday 8:00am-12:00pm'
                },
                {
                    name: 'Zona Libre Colón',
                    address: 'street 14 Av Rusbell y Santa Isabel ',
                    schedules: 'Monday - Friday 8:00am-5:00pm'
                },
                {
                    name: 'David, Chiriquí',
                    address: 'Ave. Domingo Díaz building Garrido, planta baja, office #1 David, Provincia de Chiriquí',
                    schedules: 'Monday - Friday 8:00am-5:00pm<br>Saturday 8:00am-12:00pm '
                }
                
            ]
        },
       
        {  
            countryName: 'Paraguay',
            cities: [
                {
                    name: 'Asunción',
                    address: 'Ave. Boggiani Esq. Cap. Nudelman building Boggiani, Planta Baja',
                    schedules: 'Monday - Friday 8:30am-5:30pm<br>Saturday 8:30am-12:30pm'
                }
            ]
        },
        {
            
            countryName: 'Perú',
            cities: [
                {
                    name: 'Lima',
                    address: 'street Los Halcones 105 San Isidro, Cruce de Canaval y Moreyra con República de Panamá ',
                    schedules: 'Monday - Friday 9:00am-6:00pm<br>Saturday 9:00am-1:00pm '
                },
                {
                    name: 'Iquitos',
                    address: 'street Sargento Lores 379',
                    schedules: 'Monday - Friday 9:00am- 7:00pm<br>Saturday 9:00am- 1:00pm'
                }
            ]
        },
        
         {
            
            countryName: 'Puerto Rico',
            cities: [
                {
                    name: 'San Juan',
                    address: '#15 street 2 Millenium Park Plaza, Suite 102, Metro Office Park Guaynabo P.R. 00968',
                    schedules: 'Monday - Friday 8:30am-5:00pm<br>Saturday 9:00am-1:00pm '
                }
            ]
        },
        {
            
            countryName: 'Republica Dominicana',
            cities: [
                {
                    name: 'Punta Cana',
                    address: 'International Airport Punta Cana ',
                    schedules: reservaciones
                },
                {
                    name: 'Santiago de los Caballeros',
                    address: 'Carretera Luperón kilometro 1, Plaza Galerías Luperón, office 1- Planta Baja',
                    schedules: 'Monday - Friday<br>9:00am-1:00pm y 2:00pm-6:00pm<br>Saturday 9:00am-1:00pm'
                },
                {
                    name: 'Santo Domingo',
                    address: 'Ave. Abraham Lincoln esq. Jacinto Mañon Torre Ejecutiva Sonora, Suite 101-A, 1er Level ',
                    schedules: 'Monday - Friday<br>8:00am-1:00pm y 2:00pm-6:00pm<br>Saturday 9:00am-1:00pm'
                }

            ]
        },
       
        {
            
            countryName: 'Trinidad y Tobago',
            cities: [
                {
                    name: 'Puerto España',
                    address: 'International Airport Piarco floor uno, Terminal Principal Atrium ',
                    schedules: 'Monday - Friday 9:00am-5:00pm'
                }
            ]
        },
        {
            
            countryName: 'Uruguay',
            cities: [
                {
                    name: 'Montevideo',
                    address: 'Luis Alberto de Herrera 1248 office 43 Torre 3 (Entrance por 26 de Marzo) World Trade Center',
                    schedules: 'Monday - Friday 9:00am-5:30pm'
                }
            ]
        },
        {       
            countryName: 'Venezuela',
            cities: [
                {
                    name: 'Caracas',
                    address: 'Ave. Francisco Miranda, Centro Lido, Level Miranda, office 22 - Urb. El Rosal.',
                    schedules: 'Monday - Friday 8:00am-5:00pm'
                },
                {
                    name: 'Maracaibo',
                    address: 'street 78 con Av 3E, Commercial center Kalakawa office 08',
                    schedules: 'Monday - Friday 8:00am-5:00pm'
                },
                {
                    name: 'Valencia',
                    address: 'Commercial center Via Veneto, Level Florencia office F 34 Mañongo, Town Naguanagua - Carabobo',
                    schedules: 'Monday - Saturday 12:00pm-7:00pm'
                }
            ]
        }
       
    ];

    $scope.countries = [];

    //Europe, Asia, middke east and oceania
    $scope.farCountries = [

        {
            america: false,
            country: 'Germany',
            city: 'Wiesbaden',
            address: 'Discover the World Marketing. Schenkendorfstr. 1 65187',
            phone: 'Tel: ++49 611 267 670<br>Fax.: ++49 611 267 6760',
            email: 'discover@discover-fra.com'
        },
        {
            america: false,
            country: 'Australia',
            city: 'Sydney',
            address: 'Discover the World Marketing. Level 7, 89 York Street, Sydney NSW 2000, Australia.',
            phone: 'Tel:  +612 9959 3696<br>Fax: +612 9929 8438',
            email: null
        },
        {
            america: false,
            country: 'Austria',
            city: 'Vienna',
            address: 'Discover the World Marketing. Vorgartenstrasse 132/1/131. A -1020.',
            phone: 'Tel: +43 1 512 86 86<br>Fax:+43 1 512 8686 60',
            email: 'office@discovertheworld.at'
        },
        {
            america: false,
            country: 'Belgium',
            city: 'Hilversum',
            address: 'Stationsplein 3 (2nd floor), 1211 EX',
            phone: '+32 (0) 25881979',
            email: null
        },
        {
            america: false,
            country: 'Denmark',
            city: 'Copenhagen',
            address: 'Trommesalen 5, 5th Floor DK-1614',
            phone: '+45 3325 2566',
            email: 'info@discoverthworld.dk'
        },
        {
            america: false,
            country: 'England',
            city: 'London',
            address: 'Studio 403, VOX Studios. 1-45 Durham Street, London SE11 5RH',
            phone: '+44 203 598 8036',
            email: 'support@copaair.eu'
        },
    
        {
            america: false,
            country: 'Korea',
            city: 'Seoul',
            address: 'Discover the World Marketing. 9th Floor, Injoo Building 22 Jong-ro, Jongno-gu, 03188',
            phone: 'Tel: +82 2 771 5622<br>Fax: +82 2 771 1157'
        },
        {
            america: false,
            country: 'France',
            city: 'Paris',
            address: 'Discover the World Marketing.  82, Rue Taitbout 75009',
            phone: 'Tel:  +33 (0)1 5822 2004<br>Fax: +33 (0)1 5822 2010',
            email: null 
        },
        {
            america: false,
            country: 'Germany',
            city: 'Wiesbaden',
            address: 'Schenkendorfstr, 65187',
            phone: 'Tel:  +49 611 267 6770<br>Fax: +49 611 267 6760',
            email: 'discover@discover-fra.com'
        },
        {
            america: false,
            country: 'Greece',
            city: 'Athens',
            address: 'Intermodal. 25, Filellinon Street.105.57',
            phone: 'Tel:  0030 210 371 6370',
            email: null     
        },
        {
            america: false,
            country: 'Netherlands',
            city: 'Hilversum',
            address: 'Discover the World Stationsplein 3 (2nd floor) 1211',
            phone: 'Tel:  +31 (0) 20 2410168',
            email: 'info@discoverthworld.dk'
        },
        {
            america: false, 
            country: 'India',
            city: 'Mumbai',
            address: 'Discover the World Marketing. 209, The Avenue, International Airport Road, Opp. The Leela Hotel– Marol Andheri-East Naka, Mumbai – 400 069',
            phone: 'Tel:  +91 22 2921 0300',
            email: 'info@discovertheworld.co.in'
        }, 
        {
            america: false,
            country: 'Israel',
            city: 'Tel Aviv-Yafo',
            address: '2nd floor, Migdalot Building, 25 Ben Yehuda St, 6380602',
            phone: 'Tel: 037951333',
            email: null        
        },
        {
            america: false,
            country: 'Italy',
            city: 'Milan',
            address: 'Discover the World Marketing. Via Teglio, 9 – 20158',
            phone: 'Tel: +39 02 67077382<br>Fax: +39 02 39304137',
            email: 'info@discovertheworld-mil.com'
        },
        {
            america: false,
            country: 'Japan',
            city: 'Tokyo',
            address: 'Discover the World Marketing. Hibiya Kokusai Bldg. 2-3, Uchisaiwaicho 2-chome, Chiyoda-ku. 100-0011',
            phone: 'Tel:  +81 3 3597 9480',
            email: 'dscvrtyo@cc.mbn.or.jp'
        },
        {
            america: false,
            country: 'New Zeland',
            city: 'Auckland',
            address: 'Discover the World, Central Park, Building 5, Level 3, 666 Great South Road, 1051.',
            phone: 'Tel:  +649 280 3133<br>Tel: 0800 623 4293',
            email: null
        },
        {
            america: false,
            country: 'Portugal',
            city: 'Lisboa',
            address: 'Av. Defensores de Chaves, 15-3ºE 1000-109',
            phone: 'Tel:  (+351) 21 358 44 56',
            email: 'copaairlines@selectaviation.pt'
        },
        {
            america: false,
            country: 'Portugal',
            city: 'Porto',
            address: 'CE Capitólio Loja 44. Av. França, 256 4050-276',
            phone: 'Tel:  (+351) 21 358 44 56',
            email: 'copaairlines@selectaviation.pt' 
        },
        {
            america: false,
            country: 'Rusia',
            city: 'Moscow',
            address: 'Discover the World Marketing. 40/2 build. 1, str. Prechistenka, Entrance 1, office 34. Moscow, 119034. Russian Federation.',
            phone: 'Tel: +7  (495) 744 0490<br>Fax: +7 (495) 425 1800',
            email: 'info@discovertheworld.ru'
        },
        {
            america: false,
            country: 'Singapore',
            city: 'Singapore',
            address: 'Discover the World 180B Bencoolen Street #05-01 The Bencoolen Office Tower, Singapore 189648',
            phone: 'Tel:  +65 6884-9119<br>Fax: +65 6884-9919',
            email: 'dtwmsin@discovertheworld.com.sg'
        },
        {
            america: false,
            country: 'Spain',
            city: 'Madrid',
            address: ' Select Aviation.  C/Princesa #2, Planta 2, Oficina 1 28008 Madrid, Spain.',
            phone: 'Tel: (34) 91 547 8588',
            email: null
        },
        {
            america: false,
            country: 'Switzerland',
            city: 'Merenschwand',
            address: 'Bremgartenstrasse 11, 5634 Merenschwand (Switzerland)',
            phone: 'Tel:  +41 58 201 32 01<br>Fax: +41 58 201 32 11',
            email: 'info@discoverzrh.ch'
        },
        {
            america: false,
            country: 'Taiwan',
            city: 'Taipei',
            address: 'Elite Holiday Travel Service. 5F-1, No. 62. Sec 2, Nan king E. Rd Taipei, Taiwan.',
            phone: 'Tel: +886 2 25413366',
            email: null
        }
       
    ];
    for( var i in $scope.offices){

        if( $scope.countries.indexOf( $scope.offices[i].country ) == -1 ){
            $scope.countries.push( $scope.offices[i].country );
        }

    }
}]);