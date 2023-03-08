//Palabra reservada para declarar una clase Class
class Medicine {
    //Constructor de medicine
    //Los atributos siempre con this
     constructor(code, name, amount, unitPrice) {
        this.code = code;
        this.name = name;
        this.amount = amount;
        this.unitPrice = unitPrice;
    }
    //Getters y Setters de cada atributo
    getCode() {
        return this.code;
    }
    setCode(code) {
        this.code = code;
    }
    getName() {
        return this.name;
    }
    setName( name) {
        this.name = name;
    }
    getAmount() {
        return amount;
    }
    setAmount( amount) {
        this.amount = amount;
    }
    getUnitPrice() {
        return unitPrice;
    }
    setUnitPrice(unitPrice) {
        this.unitPrice = unitPrice;
    }

}
class Provider {



    constructor(nameP,phoneNumber) {
        this.nameP = nameP;
        this.phoneNumber = phoneNumber;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    getName() {
        return this.nameP;
    }
    setName(nameP) {
        this.nameP = nameP;
    }
}
//pone a disposición de otros ficheros Javascript, datos o código que tenemos en el fichero actual.
module.exports= {Medicine,Provider};
