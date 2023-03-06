const clases = require('./Clases');
var fs = require('fs');
const { Module } = require('module');
var Medicine = [];
var Provider = [];
var recuperarMedicine;
var recuperarProvider;

try {
    recuperarMedicine = fs.readFileSync('./Datos/MedicinesD.txt', 'utf8');
    Medicine = JSON.parse(recuperarMedicine);
    
} catch (error) {
    Medicine = [];
}
try {
    recuperarProvider = fs.readFileSync('./Datos/ProvidersD.txt', 'utf8');
    Provider = JSON.parse(recuperarProvider);
} catch (error) {
    Provider = [];
}
function registerMedicine(Med) {
    var code = Med.code;
    var name = Med.name;
    var amount = Med.amount;
    var unitPrice = Med.unitPrice;
    var medici= new clases.Medicine(code, name, amount, unitPrice);
    Medicine.push(medici); //añade el elemento al final del array
    var datosMedicine = JSON.stringify(Medicine); //metodo stringify convierte un objeto o valor de JavaScript en una cadena de texto JSON
    fs.writeFile('./Datos/MedicinesD.txt', datosMedicine, (error) => { //WriteFile sirve para escribir sobre un archivo y si este no existe se crea
        if (error) {
            console.log('archivo no leido');
        } else {
            console.log('Escritura exitosa');
        }
    });
}
function registerProvider(Pro) {
    var nameP = Pro.nameP;
    var phoneNumber = Pro.phoneNumber;
    var objPro= new clases.Provider(nameP, phoneNumber);
    Provider.push(objPro);
    var datosProvider = JSON.stringify(Provider);
    fs.writeFile('./Datos/ProvidersD.txt', datosProvider, (error) => {
        if (error) {
            console.log('archivo no leido');
        } else {
            console.log('Escritura exitosa');
        }
    });
}
function SeeMedicine(){
    return Medicine;
}
function SeeProvider(){
    return Provider;
}
function deleteMedicine(Med) {
    var codeM = Med.code;
    Medicine.splice(codeM, 1);
    var medDatos = JSON.stringify(Medicine);
    fs.writeFile('./Datos/MedicinesD.txt', medDatos, (error) => {
        if (error) {
            console.log('archivo no leido');
        } else {
            console.log('Eliminacion exitosa');
        }
    });
}
module.exports = {
    registerMedicine,
    SeeMedicine,
    registerProvider,
    SeeProvider,
    deleteMedicine
};