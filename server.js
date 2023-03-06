const {
    request,
    response
} = require('express');
const express = require('express');
const path = require('path');
const app = express();
const funcion = require('./app'); //importo  las funciones

app.use(express.json()); //se encarga de agregar a nuestro 
//request el campo body de acuerdo al tipo de contenido (texto) enviado en las cabeceras http
app.use(express.urlencoded({
    extended: false
}));//permite codificar matrices y objetos enriquecidos en formato de codificación URL

const port = 3005;

app.get('/', (request, response) => { 
    response.sendFile(path.join(__dirname, './View/Menu.html'));
});
app.get('/RegisterMedicine', (request, response) => {//Cuando se reciba la ruta /forms/RegisterMedicine.html en el server
    response.sendFile(path.join(__dirname, './forms/RegisterMedicine.html'));// devuelve el formulario de RegisterMedicine.html
});
app.get('/RegisterProvider', (request, response) => {
    response.sendFile(path.join(__dirname, './forms/RegisterProvider.html'));
});
app.post('/RegisterMedicine', (request,response) => {//(Objeto y atributo) donde el atributo es un json
    console.log('llego un post AñadirM');
    funcion.RegisterMedicine(request.body); // pedido y json con el contenido del formulario
    response.redirect('/RegisterMedicine') // Dudas ???? como resuelve esta parte
});
app.post('/RegisterProvider', (request,response) => {
    console.log('llego un post AñadirP');
    funcion.RegisterProvider(request.body); 
    response.redirect('/RegisterProvider')
});
app.get('/Menu', (request, response) => {
    response.sendFile(path.join(__dirname, './View/Menu.html'));
    
});
app.get('/SeeMedicine', (request, response) => {//para obtener la vista de SeeMedicine.html
    response.sendFile(path.join(__dirname, './View/SeeMedicine.html'));
});
app.get('/SeeMedicineV', (request, response) => {
    var listMedicine = funcion.SeeMedicine();
    response.send(listMedicine);
});
app.get('/SeeProvider', (request, response) => {//para obtener la vista de SeeProvider.html
    response.sendFile(path.join(__dirname, './View/SeeProvider.html'));
});
app.get('/SeeProviderP', (request, response) => {
    var listProvider = funcion.SeeProvider();
    response.send(listProvider);
});

app.listen(port, () => {
    console.log('puerto listo');
})