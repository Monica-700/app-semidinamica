//importar os paquetes como el express para  crear un web server en un entorno local.
const express = require("express");
const app = express();
const port = 9595;

//mostrar contenido de la carpeta public
app.use(express.static("public"));

//consultar las páginas en el webserver see utiliza el get, una función de flecha
app.get("/left-sidebar", (req, res) => {
  //res s utiliza para responder a la petición del usuario
  res.sendFile(__dirname + "/public/left-sidebar.html");
})
app.get("/right-sidebar", (req, res) => {
  //res s utiliza para responder a la petición del usuario
  res.sendFile(__dirname + "/public/right-sidebar.html");
})
app.get("/no-sidebar", (req, res) => {
  //res s utiliza para responder a la petición del usuario
  res.sendFile(__dirname + "/public/no-sidebar.html");
})
app.get('*', (req, res) => {
    //el comodín o asterisco sirve para validar la búsqueda de una página
  //res s utiliza para responder a la petición del usuario
  res.sendFile(__dirname + "/public/404.html");
})
//se necesita activar el puerto para el webserver
app.listen(port,() => {
    console.log('webserver activo en el puerto ${port}')
});

