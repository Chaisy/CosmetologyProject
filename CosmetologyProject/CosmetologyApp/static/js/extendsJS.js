result1= document.getElementById("result1")
result2=document.getElementById("result2")
result3=document.getElementById("result3")
result4=document.getElementById("result4")
class Service {
    #naming
    #description;
    #price;
    constructor(naming, description, price) {
        this.#naming = naming;
        this.#description = description;
        this.#price = price;
    }

    // Ãåòòåðû è ñåòòåðû
    get naming() {
        return this.#naming;
    }

    set naming(naming) {
        this.#naming = naming;
    }

    get description() {
        return this.#description;
    }

    set description(description) {
        this.#description = description;
    }

    get price() {
        return this.#price;
    }

    set price(price) {
        this.#price = price;
    }

    displayInfo() {
        return `Naming: ${this.naming}, Description: ${this.description}, Price: ${this.price}`;
    }


}

// Êëàññ-íàñëåäíèê ArtPiece
class Procedure extends Service {
    #doctor;
    #partOfBody;
    constructor(naming, description, price, doctor, partOfBody) {
        super(naming, description, price);
        this.doctor = doctor;
        this.partOfBody = partOfBody;
    }

    get doctor() {
        return this.#doctor;
    }

    set doctor(doctor) {
        this.#doctor = doctor;
    }

    get partOfBody() {
        return this.#partOfBody;
    }

    set partOfBody(partOfBody) {
        this.#partOfBody = partOfBody;
    }

}

// Äåêîðàòîð äëÿ âûâîäà èíôîðìàöèè îá ýêñïîíàòå
function logServiceInfo(classObj, f) {
    return function () {
        result1.innerText = "Call with decorator" + f.call(classObj);
        alert(`Call with decorator`);
        alert(f.call(classObj));
    }
}

var sv = new Service("S1", "D1", 201);
result2.innerText = sv.naming + " " + sv.description + " " + sv.price;
alert(sv.naming + " " + sv.description + " " + sv.price);

sv.naming = 'S2';
sv.description = 'D2';
sv.price = 202;

var displayInfo = logServiceInfo(sv, sv.displayInfo);
displayInfo();

var pr = new Procedure("P1", "D1", 101, "Doc1", "partOfBody1");
result3.innerText = pr.naming + " " + pr.description + " " + pr.price + " " + pr.doctor + " " + pr.partOfBody;
alert(pr.naming + " " + pr.description + " " + pr.price + " " + pr.doctor + " " + pr.partOfBody);

pr.naming = 'P2';
pr.description = 'D2';
pr.price = 102;
pr.doctor = "Doc2";
pr.partOfBody = "partOfBody2";

var displayInfo = logServiceInfo(pr, pr.displayInfo);
displayInfo();