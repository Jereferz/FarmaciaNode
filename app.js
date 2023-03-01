const clases = require('./Clases');
var fs = require('fs');
const { Module } = require('module');
var Medicine = [];
var Provider = [];
var recupararMedicine;
var recupararProvider;

try {
    recupararMedicine = fs.readFileSync('./Datos/MedicinesD.txt', 'utf8');
    Medicine = JSON.parse(recupararMedicine);
    
} catch (error) {
    Medicine = [];
}
try {
    recupararProvider = fs.readFileSync('./Datos/ProvidersD.txt', 'utf8');
    Provider = JSON.parse(recupararProvider);
} catch (error) {
    Provider = [];
}
function RegisterMedicine(Med) {
    var code = Med.code;
    var name = Med.name;
    var amount = Med.amount;
    var unitPrice = Med.unitPrice;
    var medici= new clases.Cliente(code, name, amount, unitPrice);
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
function SeeMedicine(){
    return Medicine;
}
module.exports = {
    RegisterMedicine,
    SeeMedicine
};