const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helper');

//Para reconocer el puerto por el cual esta escuchando el servidor
//si no esta ejecuanto el proceso se le asigna el puerto 3000
const port = process.env.PORT || 3000;

//se hace publico todo lo que esta en la carpeta public.
app.use(express.static(__dirname + '/public'));

// Creacion de directorio para los parciales
hbs.registerPartials(__dirname + '/views/parciales');


// permite a express poder renderizar las paginas que
//  utilizan el tipo de sintaxis de  handlebars 
//  y de esta forma hacer la pagina dinamica.
//Express HBS engine
app.set('view engine', 'hbs');


//Pagina About
app.get('/about', (req, res) => {
    res.render('about');
    //la funcion send serializa en formato JSON
    // res.send(salida);
});

// Redirecciona siempre al home
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan Roberto'
    });
});

//configuracion del puerto de escucha.
app.listen(port);

// se agrega la pripiedad start al objeto script en el archivo package-json para que heroku sepa 
// que comando ejecutar para montar el server
// "start": "node server.js",

console.log(`Escuchando desde el puerto ${port}`);