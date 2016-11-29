// JavaScript Document
$(function() {

      var sysCities = {
            "fromcities": [
            {"name":"Belo Horizonte, BR", "id":"CNF"},
            {"name":"Brasilia, BR", "id":"BSB"},
            {"name":"Campinas, BR", "id":"VCP"},
            {"name":"Manaus, BR", "id":"MAO"},
            {"name":"Porto Alegre, BR", "id":"POA"},
            {"name":"Recife, BR", "id":"REC"},
            {"name":"Rio de Janeiro, BR", "id":"GIG"},
            {"name":"Sao Paulo, BR", "id":"GRU"}              
             ],
                        
            "tocities": [
            {"name":"Assun&ccedil;&atilde;o, PY","id":"ASU"},
            {"name":"Aruba, AW","id":"AUA"},
            {"name":"Barranquilla, CO", "id":"BAQ"},
            {"name":"Bogot&aacute;, CO", "id":"BOG"},
            {"name":"Boston, US", "id":"BOS"},
            {"name":"Bucaramanga, CO", "id":"BGA"}, 
            {"name":"Cali, CO", "id":"CLO"},
            {"name":"Canc&uacute;n, MX", "id":"CUN"},
            {"name":"Caracas, VE", "id":"CCS"},
            {"name":"Cartagena, CO", "id":"CTG"},
            {"name":"Chicago, US", "id":"ORD"},
            {"name":"C&uacute;cuta, CO", "id":"CUC"},
            {"name":"Cura&ccedil;ao, AN", "id":"CUR"},
            {"name":"David, PA", "id":"DAV"},
            {"name":"Fort Lauderdale, US", "id":"FLL"},
            {"name":"Guadalajara, MX", "id":"GDL"},
            {"name":"Guatemala, GT", "id":"GUA"},
            {"name":"Havana, CU", "id":"HAV"},
            {"name":"Iquitos, PE", "id":"IQT"},
            {"name":"Kingston, JM", "id":"KIN"},
            {"name":"Las Vegas, US", "id":"LAS"},
            {"name":"Liberia, CR", "id":"LIR"},
            {"name":"Lima, PE", "id":"LIM"},
            {"name":"Managua, NI", "id":"MGA"},
            {"name":"Maracaibo, VE", "id":"MAR"},
            {"name":"Medell&iacute;­n, CO", "id":"MDE"},
            {"name":"M&eacute;xico - Ciudad, MX", "id":"MEX"},
            {"name":"Miami, US", "id":"MIA"},
            {"name":"Montego Bay, JM", "id":"MBJ"},
            {"name":"Monterrey, MX", "id":"MTY"},
            {"name":"Montevideo, UY", "id":"MVD"},
            {"name":"Montreal, CA", "id":"YUL"},
            {"name":"Nassau, BS", "id":"NAS"},
            {"name":"Nova Orleans, US", "id":"MSY"},
            {"name":"Orlando, US", "id":"MCO"},
            {"name":"Panam&aacute;, PA", "id":"PTY"},
            {"name":"Pereira, CO", "id":"PEI"},
            {"name":"Porto Espanha, TT", "id":"POS"},
            {"name":"Punta Cana, DO", "id":"PUJ"},
            {"name":"San Andr&eacute;s Isla, CO", "id":"ADZ"},
            {"name":"San Jos&eacute;, CR", "id":"SJO"},
            {"name":"San Juan, PR", "id":"SJU"},
            {"name":"San Pedro Sula, HN", "id":"SAP"},
            {"name":"San Salvador, SV", "id":"SAL"},
            {"name":"Santa Clara, CU", "id":"SNU"},
            {"name":"Santa Cruz, BO", "id":"VVI"},
            {"name":"Santiago de Chile, CL", "id":"SCL"},
            {"name":"Santiago de los Caballeros, DO", "id":"STI"},
            {"name":"Santo Domingo, DO", "id":"SDQ"},           
            {"name":"St Maarten, AN", "id":"SXM"},
            {"name":"Tampa, US", "id":"TPA"},
            {"name":"Tegucigalpa, HN", "id":"TGU"},
            {"name":"Toronto, CA", "id":"YYZ"},
            {"name":"Valencia, VE", "id":"VLN"},
            {"name":"Washington Dulles, US", "id":"IAD"}
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
            minDate: new Date(2015, 5 - 1, 26),
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
            alert("Selecione a cidade de origem");
            return false;
      }
      v_TO = $("#HACIA").val();
      if (v_TO == "" || v_TO == undefined || v_TO == 0) {
            alert("Selecione a cidade de destino");
            return false;
      }
      if(v_FROM == v_TO){
            alert("Selecione uma cidade de destino diferente a fonte");
            return false;
      }
      
      v_FROMDATE = $("#from").val();
      if (v_FROMDATE == "" || v_FROMDATE == undefined) {
            alert("Escolha sua data de partida");
            return false;
      }
      v_radIdaVuelta = $('input:radio[name=radIdaVuelta]:checked').val();
      if(v_radIdaVuelta == "RT"){
            v_TODATE = $("#to").val();
            if (v_TODATE == "" || v_TODATE == undefined) {
                  alert("Selecione a data de retorno");
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
      window.open("https://bookings.copaair.com/CMGS/AirLowFareSearchExternal.do?tripType="+v_radIdaVuelta+"&outboundOption.originLocationCode="+v_FROM+"&outboundOption.destinationLocationCode="+v_TO+"&outboundOption.departureDay="+v_diasalida+"&outboundOption.departureMonth="+v_messalida+"&outboundOption.departureYear="+v_anosalida+"&inboundOption.destinationLocationCode="+v_FROM+"&inboundOption.originLocationCode="+v_TO+"&inboundOption.departureDay="+v_diaregreso+"&inboundOption.departureMonth="+v_mesregreso+"&inboundOption.departureYear="+v_anoregreso+"&coupon="+v_codigoprom+"&flexibleSearch="+v_fechas+"&cabinClass="+v_cabinClass+"&guestTypes[0].type=ADT&guestTypes[0].amount="+v_pasajeros+"&guestTypes[1].type=CNN&guestTypes[1].amount="+v_pasajerosninos+"&guestTypes[2].type=INF&guestTypes[2].amount="+v_infantesPasajeros+"&pos=CMGS&lang=pt")
}

/*function goMulti(){
      track_medio = $("#d1").val();
      window.open("https://bookings.copaair.com/CMGS/AirSearchExternalForward.do?tripType=MC&pos=CMGS&lang=en&d1="+track_medio);
}*/

function goMulti(){
      window.open("https://bookings.copaair.com/CMGS/AirSearchExternalForward.do?tripType=MC&pos=CMGS&lang=pt");
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