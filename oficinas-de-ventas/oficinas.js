angular.module('copa').controller('OfficesCtrl', ["$scope", function ($scope) {
        $scope.offices = [
            {
                country: "Antillas Holandesas",
                city: "St Marteen",
                address: "Aeropuerto Internacional\nPrincesa Juliana Oficina # 1030",
                schedules: "Para asistencia previa a su viaje contactarse con nuestro Centro de Reservaciones"
            },
            {
                country: "Argentina",
                city: "Buenos Aires",
                address: "Emma de la Barra 353 Piso 7, Puerto Madero Este",
                schedules: 'Lun - Vie \n9:00am-5:00pm'
            }
        ];
    }]);
