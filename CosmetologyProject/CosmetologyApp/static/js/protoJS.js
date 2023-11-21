result1= document.getElementById("result1")
result2=document.getElementById("result2")
result3=document.getElementById("result3")
result4=document.getElementById("result4")
function Service(naming, description, price) {
    this.naming = naming;
    this.description = description;
    this.price = price;
}

Service.prototype = {
    get naming() {
        return this._naming;
    },
    set naming(newNaming) {
        this._naming = newNaming;
    },

    // Ãåòòåðû è ñåòòåðû äëÿ ñâîéñòâà "description"
    get description() {
        return this._description;
    },
    set description(newDescription) {
        this._description = newDescription;
    },

    // Ãåòòåðû è ñåòòåðû äëÿ ñâîéñòâà "price"
    get price() {
        return this._price;
    },
    set price(newPrice) {
        this._price = newPrice;
    },

    displayInfo: function () {
        return `Naming: ${this.naming}, Description: ${this.description}, Price: ${this.price}`;
    },
}

function Procedure(naming, description, price, doctor, partOfBody) {
    Service.call(this, naming, description, price);
    this.doctor = doctor;
    this.partOfBody = partOfBody;
}

// Óñòàíîâëèâàåì ñâîéñòâà ýêçåìïëÿðà
Object.setPrototypeOf(Procedure.prototype, Service.prototype);
// Ïîäêëþ÷àåì ñòàòè÷åñêèå ñâîéñòâà
Object.setPrototypeOf(Procedure, Service);

// Ãåòòåðû è ñåòòåðû äëÿ ñâîéñòâ êëàññà-íàñëåäíèêà
Object.defineProperties(Procedure.prototype, {
    doctor: {
        get: function () {
            return this._doctor;
        },
        set: function (newDoctor) {
            this._doctor = newDoctor;
        },
    },
    partOfBody: {
        get: function () {
            return this._partOfBody;
        },
        set: function (newPartOfBody) {
            this._partOfBody = newPartOfBody;
        },
    },
});

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
sv.price = 205;

var displayInfo = logServiceInfo(sv, sv.displayInfo);
displayInfo()

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