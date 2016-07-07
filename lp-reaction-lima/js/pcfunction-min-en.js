// JavaScript Document
$(function() {

      var sysCities = {
            "fromcities": [
            {"name":"Boston, US", "id":"BOS"},
            {"name":"Chicago, US", "id":"ORD"},
            {"name":"Fort Lauderdale, US", "id":"FLL"},
            {"name":"Las Vegas, US", "id":"LAS"},
            {"name":"Los Angeles, US", "id":"LAX"},
            {"name":"Miami, US", "id":"MIA"},
            {"name":"Nueva York, US", "id":"JFK"},
            {"name":"Orlando, US", "id":"MCO"},
            {"name":"Tampa, US", "id":"TPA"},
            {"name":"Toronto, CA", "id":"YYZ"},
            {"name":"Washington Dulles, US", "id":"IAD"}           
             ],         
            "tocities": [
            {"name":"Asuncion, PY","id": "ASU"},
            {"name":"Aruba, AW","id": "AUA"},
            {"name":"Barranquilla, CO", "id":"BAQ"},
            {"name":"Belo Horizonte, BR", "id":"CNF"},
            {"name":"Bogota, CO", "id":"BOG"},
            {"name":"Brasilia, BR", "id":"BSB"},
            {"name":"Bucaramanga, CO", "id":"BGA"}, 
            {"name":"Cali, CO", "id":"CLO"},
            {"name":"Campinas, BR", "id":"VCP"},
            {"name":"Caracas, VE", "id":"CCS"},
            {"name":"Cartagena, CO", "id":"CTG"},
            {"name":"Cucuta, CO", "id":"CUC"},
            {"name":"Curacao, AN", "id":"CUR"},
            {"name":"David, PA", "id":"DAV"},
            {"name":"Guatemala, GT", "id":"GUA"},
            {"name":"Havana, CU", "id":"HAV"},
            {"name":"Iquitos, PE", "id":"IQT"},
            {"name":"Kingston, JM", "id":"KIN"},
            {"name":"Liberia, CR", "id":"LIR"},
            {"name":"Lima, PE", "id":"LIM"},
            {"name":"Managua, NI", "id":"MGA"},
            {"name":"Manaus, BR", "id":"MAO"},
            {"name":"Maracaibo, VE", "id":"MAR"},
            {"name":"Medelli­n, CO", "id":"MDE"},         
            {"name":"Montego Bay, JM", "id":"MBJ"},
            {"name":"Montevideo, UY", "id":"MVD"},
            {"name":"Nassau, BS", "id":"NAS"},
            {"name":"Panama, PA", "id":"PTY"},
            {"name":"Pereira, CO", "id":"PEI"},
            {"name":"Porto Alegre, BR", "id":"POA"},
            {"name":"Port of Spain, TT", "id":"POS"},
            {"name":"Punta Cana, DO", "id":"PUJ"},
            {"name":"Rio de Janeiro, BR", "id":"GIG"},
            {"name":"San Andres Island, CO", "id":"ADZ"},
            {"name":"San Jose, CR", "id":"SJO"},
            {"name":"San Pedro Sula, HN", "id":"SAP"},
            {"name":"San Salvador, SV", "id":"SAL"},
            {"name":"Santa Clara, CU", "id":"SNU"},
            {"name":"Santa Cruz, BO", "id":"VVI"},
            {"name":"Santiago de Chile, CL", "id":"SCL"},
            {"name":"Santiago de los Caballeros, DO", "id":"STI"},
            {"name":"Santo Domingo, DO", "id":"SDQ"},
            {"name":"Sao Paulo, BR", "id":"GRU"},
            {"name":"St Maarten, AN", "id":"SXM"},
            {"name":"Tegucigalpa, HN", "id":"TGU"},
            {"name":"Valencia, VE", "id":"VLN"}

      ]
      }

      $.each(sysCities.fromcities, function (index, value) {
            $("#DESDE").append('<option value="'+value.id+'">'+value.name+'</option>');
      });
      $.each(sysCities.tocities, function (index, value) {
            $("#HACIA").append('<option value="'+value.id+'">'+value.name+'</option>');
      });

      
      $.datepicker.setDefaults($.datepicker.regional['es']);
      var dates = $( "#from, #to" ).datepicker({
            dateFormat: 'dd/mm/yy',
            regional: 'es',
            numberOfMonths: 2,
            //minDate: +1,
            minDate: new Date(2015, 5 - 1, 27),
            maxDate: new Date(2015, 6 - 1, 23),
/*          showOn: "both",
            buttonImage: "images/iconcal.jpg",
            buttonImageOnly: true,
*/          

        onSelect: function( selectedDate ) {
            var option = this.id == "from" ? "minDate" : "maxDate",
                instance = $( this ).data( "datepicker" ),
                date = $.datepicker.parseDate(
                    instance.settings.dateFormat ||
                    $.datepicker._defaults.dateFormat,
                    selectedDate, instance.settings );
            dates.not( this ).datepicker( "option", option, date );
        }
    });
      
      $("input:radio[name=radIdaVuelta]").change(function(){
            valIdaVuelta = $('input:radio[name=radIdaVuelta]:checked').val(); 
            if(valIdaVuelta == "RT"){
                  $("#inputRegreso").show();
            }else{
                  $("#inputRegreso").hide();
            }
            //$('#to').attr('disabled', 'true');
            
      })    
      
});
function buscarVuelos() {
            
      v_FROM = $("#DESDE").val();   
      if (v_FROM == "" || v_FROM == undefined) {
            alert("Choose your departure city");
            return false;
      }
      v_TO = $("#HACIA").val();
      if (v_TO == "" || v_TO == undefined || v_TO == 0) {
            alert("Choose your destination city");
            return false;
      }
      if(v_FROM == v_TO){
            alert("Choose a destination city different to the departure city");
            return false;
      }
      
      v_FROMDATE = $("#from").val();
      if (v_FROMDATE == "" || v_FROMDATE == undefined) {
            alert("Choose your departure date");
            return false;
      }
      v_radIdaVuelta = $('input:radio[name=radIdaVuelta]:checked').val();
      if(v_radIdaVuelta == "RT"){
            v_TODATE = $("#to").val();
            if (v_TODATE == "" || v_TODATE == undefined) {
                  alert("Choose your return date");
                  return false;
            }
      }else{
            v_TODATE = "";    
      }
      //track_medio = $("#d1").val();
      v_codigoprom = $("#coupon").val();
      v_radIdaVuelta = $('input:radio[name=radIdaVuelta]:checked').val();
      
      arr_elm = v_FROMDATE.split("/");
      v_diasalida = arr_elm[0];
      v_messalida = arr_elm[1];
      v_anosalida = arr_elm[2];
      
      arr_elm = v_TODATE.split("/");
      v_diaregreso = arr_elm[0];
      v_mesregreso = arr_elm[1];
      v_anoregreso = arr_elm[2];
      
      v_fechas = $('input:radio[name=fechas]:checked').val();
      v_cabinClass = $('input:radio[name=cabinClass]:checked').val();
      
      v_pasajeros = $("#pasajeros").val();
      v_pasajerosninos = $("#cbpasajerosninos").val();
      v_infantesPasajeros = $("#cbinfantesPasajeros").val();
      
      goBooking(
            //track_medio,
            v_codigoprom,
            v_radIdaVuelta,
            v_FROM,
            v_TO,
            v_diasalida,
            v_messalida,
            v_anosalida,
            v_diaregreso,
            v_mesregreso,
            v_anoregreso,
            v_fechas,
            v_cabinClass,
            v_pasajeros,
            v_pasajerosninos,
            v_infantesPasajeros
      );

      return false;
}
/*function goBooking(track_medio,v_codigoprom,v_radIdaVuelta,v_FROM,v_TO,v_diasalida,v_messalida,v_anosalida,v_diaregreso,v_mesregreso,v_anoregreso,v_fechas,v_cabinClass,v_pasajeros,v_pasajerosninos,v_infantesPasajeros){
      window.open("https://bookings.copaair.com/CMGS/AirLowFareSearchExternal.do?d1="+track_medio+"&tripType="+v_radIdaVuelta+"&outboundOption.originLocationCode="+v_FROM+"&outboundOption.destinationLocationCode="+v_TO+"&outboundOption.departureDay="+v_diasalida+"&outboundOption.departureMonth="+v_messalida+"&outboundOption.departureYear="+v_anosalida+"&inboundOption.destinationLocationCode="+v_FROM+"&inboundOption.originLocationCode="+v_TO+"&inboundOption.departureDay="+v_diaregreso+"&inboundOption.departureMonth="+v_mesregreso+"&inboundOption.departureYear="+v_anoregreso+"&coupon="+v_codigoprom+"&flexibleSearch="+v_fechas+"&cabinClass="+v_cabinClass+"&guestTypes[0].type=ADT&guestTypes[0].amount="+v_pasajeros+"&guestTypes[1].type=CNN&guestTypes[1].amount="+v_pasajerosninos+"&guestTypes[2].type=INF&guestTypes[2].amount="+v_infantesPasajeros+"&pos=CMGS&lang=en")
}*/
function goBooking(v_codigoprom,v_radIdaVuelta,v_FROM,v_TO,v_diasalida,v_messalida,v_anosalida,v_diaregreso,v_mesregreso,v_anoregreso,v_fechas,v_cabinClass,v_pasajeros,v_pasajerosninos,v_infantesPasajeros){
      window.open("https://bookings.copaair.com/CMGS/AirLowFareSearchExternal.do?tripType="+v_radIdaVuelta+"&outboundOption.originLocationCode="+v_FROM+"&outboundOption.destinationLocationCode="+v_TO+"&outboundOption.departureDay="+v_diasalida+"&outboundOption.departureMonth="+v_messalida+"&outboundOption.departureYear="+v_anosalida+"&inboundOption.destinationLocationCode="+v_FROM+"&inboundOption.originLocationCode="+v_TO+"&inboundOption.departureDay="+v_diaregreso+"&inboundOption.departureMonth="+v_mesregreso+"&inboundOption.departureYear="+v_anoregreso+"&coupon="+v_codigoprom+"&flexibleSearch="+v_fechas+"&cabinClass="+v_cabinClass+"&guestTypes[0].type=ADT&guestTypes[0].amount="+v_pasajeros+"&guestTypes[1].type=CNN&guestTypes[1].amount="+v_pasajerosninos+"&guestTypes[2].type=INF&guestTypes[2].amount="+v_infantesPasajeros+"&pos=CMGS&lang=en")
}

/*function goMulti(){
      track_medio = $("#d1").val();
      window.open("https://bookings.copaair.com/CMGS/AirSearchExternalForward.do?tripType=MC&pos=CMGS&lang=en&d1="+track_medio);
}*/

function goMulti(){
      window.open("https://bookings.copaair.com/CMGS/AirSearchExternalForward.do?tripType=MC&pos=CMGS&lang=en");
}

//programacion landing
$(document).ready(function(){
      function load(num) {
                  
                  $('.colmenu li a').each(function(){
                        $(this).parent().removeClass("active");
                        $(this).removeClass("active");
                  });
                  
                  $("#bt"+num).parent().addClass("active");
                  $("#bt"+num).addClass("active");
                  
                  $("#load_content").fadeOut("fast", function(){
                        $('#load_content').load("info/"+num +".html", function(){
                                    $("#load_content").fadeIn("slow");
                              });
                  });
                  
        }
        $.history.init(function(url) {
                load(url == "" ? "boston" : url);
            });

        $('.jqload').live('click', function(e) {
                var url = $(this).attr('href');
                url = url.replace(/^.*#/, '');
                $.history.load(url);
                return false;
        });
            
    });