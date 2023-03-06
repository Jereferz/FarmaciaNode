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
function RegisterMedicine(Med) {
    var code = Med.code;
    var name = Med.name;
    var amount = Med.amount;
    var unitPrice = Med.unitPrice;
    var medici= new clases.Medicine(code, name, amount, unitPrice);
    Medicine.push(medici);
    var datosMedicine = JSON.stringify(Medicine);
    fs.writeFile('./Datos/MedicinesD.txt', datosMedicine, (error, datos) => {
        if (error) {
            console.log('archivo no leido');
        } else {
            console.log('escritura exitosa');
        }
    });
}
function RegisterProvider(Pro) {
    var nameP = Pro.nameP;
    var phoneNumber = Pro.phoneNumber;
    var objPro= new clases.Provider(nameP, phoneNumber);
    Provider.push(objPro);
    var datosProvider = JSON.stringify(Provider);
    fs.writeFile('./Datos/ProvidersD.txt', datosProvider, (error, datos) => {
        if (error) {
            console.log('archivo no leido');
        } else {
            console.log('escritura exitosa');
        }
    });
}
function SeeMedicine(){
    return Medicine;
}
function SeeProvider(){
    return Provider;
}
module.exports = {
    RegisterMedicine,
    SeeMedicine,
    RegisterProvider,
    SeeProvider
};