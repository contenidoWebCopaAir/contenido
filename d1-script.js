(function(){
	//Existe una cookie con el valor d1?
	if(getCookie('d1'){
		console.log('existe la cookie d1');
	}
	// Existe el parametro d1 en la url?
	var d1 = getParameterByName('d1');
	if( d1 && d1 != "" ){
		console.log('creamos una cookie con el nombre ' + d1);
	} else {
		console.log("nada");
	}
}());

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/*
* Busca el nombre de una cookie y retorna su valor, si la cookie no existe retorna null
*
* @cname  String  Nombre de la cookie
***/
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return false;
}