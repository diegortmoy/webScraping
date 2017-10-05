var request = require('request'), //Para realizar peticiones atraves de una  URL
	cheerio = require('cheerio'); //Cheerio removes all the DOM inconsistencies and browser cruft from the jQuery library, revealing its truly gorgeous API.

	//encoding, para no tener caracteres extranos 
	request({url: 'http://www.bncr.fi.cr/BNCR/Default.aspx', encoding: 'binary'}, function(err, resp, body){
	//se pregunta que no haya errores y statusCode (http request ok)
	if (!err && resp.statusCode == 200){
			var $ = cheerio.load(body); //carga el objeto para manejarlo con jQuery
			$('#a').each(function(){
				var compra = $(this).find('#ctl00_lblMontoCompra font').html();
				var venta = $(this).find('#ctl00_lblMontoVenta font').html();
				console.log(compra); 
				console.log(venta);
				console.log(typeof(venta));
			});//el each es para manejar los elementos y poder extrar lo que se requiere
		}
	});

