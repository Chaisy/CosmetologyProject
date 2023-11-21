/*
1. The interactivity of the developed site by means of JS
to your liking.
*/
function updateDateTime() {
    var currentDateTime = new Date();
    var formattedDateTime = currentDateTime.toLocaleString();
    var element = document.getElementById("current-datetime");

    if (element) {
        element.innerText = formattedDateTime;
    }
}
setInterval(updateDateTime, 1);


/*
2. Placing several banners on the site and rotating them after a period of time,
which can be changed by the administrator using the form element. To start and stop
banner changes, use a page focus check. Each banner provides a click on its own link.
*/
const imageContainer = document.getElementById("imageContainer");
const animationTimeInput = document.getElementById("animationTime");

if (imageContainer && document.hasFocus()) {
    const images = imageContainer.childNodes;
    images.forEach(image => {
        image.addEventListener("mouseover", function () {
            images.forEach(i => {
                // if (i.style) {
                //     i.style.animationPlayState = "paused";
                // }
            });
        });
        image.addEventListener("mouseout", function () {
            images.forEach(i => {
                if (i.style) {
                    i.style.animationPlayState = "running";
                }
            });
        });
        image.addEventListener("click", function () {
            window.open("https://cosmetologytelaviv.com/");
        });
    });
}

if (animationTimeInput) {
    animationTimeInput.addEventListener("input", function () {
        const animationTime = animationTimeInput.value + "s";
        document.documentElement.style.setProperty("--animation-time", animationTime);
    });
}

/*
3. Animation effect when scrolling (multiple images).
*/
const leftEffect = document.getElementById("left_effect");
const rightEffect = document.getElementById("right_effect");
const text = document.getElementById("text");
const moon = document.getElementById("moon");

if (leftEffect && rightEffect && text && moon) {
    window.addEventListener("scroll",function () {
        let value = scrollY;
        left_effect.style.left = `-${value/0.5}px`;
        right_effect.style.left = `${value/0.35}px`;
        text.style.bottom = `-${value}px`;
        moon.style.height = `${window.innerHeight - value/2}px`;
    })
}


/*
4. Cards with a volume effect on hover
or a shape with a parallax effect on hover.
*/
const parallax = document.getElementById("parallax");
const walk = {x: 100, y: 50};

if (parallax) {
    parallax.addEventListener("mousemove", function (e) {
        const width = parallax.offsetWidth;
        const height = parallax.offsetHeight;

        let {offsetX: x, offsetY: y} = e;

        const xWalk = Math.round((e.x / width / 2 * walk.x) - (walk.x / 2));
        const yWalk = Math.round((e.y / height / 2  * walk.y) - (walk.y / 2));

        parallax.style.transform = `rotateY(${-xWalk}deg) rotateX(${yWalk}deg)`;
    });
}


/*
5. The ability to change the font size and color of the text, the
background color of the page using the form elements generated when
selecting the appropriate checkbox. The dimensions of the images
should not change.
*/
const fontSizeInput = document.getElementById("fontSize");
const textColorInput = document.getElementById("textColor");
const backgroundColorInput = document.getElementById("backgroundColor");
textic = document.getElementById("text_dec")

if (fontSizeInput) {
    fontSizeInput.addEventListener("input", function () {
        const fontSize = fontSizeInput.value + "px";
        textic.style.fontSize = fontSize;
    });
}
if (textColorInput) {
    textColorInput.addEventListener("input", function () {
        const textColor = textColorInput.value;
        textic.style.color = textColor;
    });
}
if (backgroundColorInput) {
    backgroundColorInput.addEventListener("input", function () {
        const backgroundColor = backgroundColorInput.value;
        document.body.style.backgroundColor = backgroundColor;
    });
}

/*
6. Using promo codes when calculating the cost of services/goods/...
*/
const enterButton = document.getElementById("enterButton");
if (enterButton) {
    enterButton.addEventListener("click", function (e) {
        e.preventDefault();

        const kostyl = document.getElementById("kostyl");

        // const priceInput = document.getElementById("priceInput");
        const discountInput = document.getElementById("discountInput");
        const result = document.getElementById("result");

        // const price = priceInput.value;
        const discount = discountInput.value;
        var k = parseInt(kostyl.innerText);
        //k += parseInt(discount);

        if (k <= 0 || discount < 0 || discount > 100) {
            result.innerText = "Invalid Data!"
        } else {
            var general = k - k * (discount / 100);
            result.innerText = `New price = ${general}`;
        }
    });
}


/*
7. Request for the date of birth, calculation of the number of years,
a message about the day of the week of the entered date for adults and
an alert about the need for parental permission to use the site if a minor.
*/
function EvaluateInfo() {
    var form = document.forms.inputForm;

    var span = document.getElementById("DisplayAge");

    var displayer = document.getElementById("displayer");

    const date_of_bitrh = new Date(form.date_of_bitrh.value);


    const currentDate = new Date();

    var age = currentDate.getFullYear() - date_of_bitrh.getFullYear();


    if (date_of_bitrh.getMonth() >= currentDate.getMonth() && date_of_bitrh.getDate() > currentDate.getDate())
        age = age - 1;


    // span.innerHTML = age;
    //
    //
    // displayer.removeAttribute('hidden');

    if (age >= 18) {
        alert("You are born in " + getDayOfWeek(date_of_bitrh.getDay()) + ", you are " + age + " years old");
    }
    if(age<0){
        alert("INVALID DATA!")
    }
    else {
        alert("You are too young. Ask you parents to use this site" + ", you are " + age + " years old" +
            "(" + getDayOfWeek(date_of_bitrh.getDay()) + ")");
    }
}


function getDayOfWeek(number) {
    switch (number) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid Day";
    }
}


/*
8. When entering the site page, show the user a countdown
that will end in an hour from the moment the user enters the site.
***Make sure that after refreshing the page, the countdown continues
from where it left off.
*/
function startCountdown() {
    const currentTime = new Date().getTime();

    if (sessionStorage.getItem("countdownStartTime")) {
        const startTime = parseInt(sessionStorage.getItem("countdownStartTime"), 10);
        const elapsedTime = currentTime - startTime;
        const remainingTime = 60 * 60 * 1000 - elapsedTime;
        displayTime(remainingTime);
    } else {
        sessionStorage.setItem("countdownStartTime", currentTime.toString());
        displayTime(60 * 60 * 1000);
    }
}
function displayTime(remainingTime) {
    const element = document.getElementById("countdown");
    if (!element) {
        return;
    }

    if (remainingTime <= 0) {
        document.getElementById("countdown").innerText = "00:00 ";
        return;
    }

    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);

    if (element) {
        if (seconds < 10) {
            element.innerText = `${minutes}:0${seconds}`;
        } else {
            element.innerText = `${minutes}:${seconds}`;
        }
    }

    if (remainingTime > 0) {
        setTimeout(() => displayTime(remainingTime - 1000), 1000);
    }
}
startCountdown();


/*
9. Write a code that will generate a square table (array) (the size is chosen by the user),
in which numbers will be randomly placed. Develop functions to perform actions:
− Transpose the table by pressing the button.
− By clicking on any cell, this cell should be highlighted in color (the color is different
for cells with a value of multiples of two and the rest).
− ***Make it so that no more than n cells can be selected in one row/or column of the table
(the value entered in the field) and the neighbors on the left and right cannot be selected.
− ***By clicking on the corresponding buttons, add both a new row and a new column
*/
function generateTable() {
    //ïîëó÷àåì ðàçììåð òàáëèöû
    const tableSize = parseInt(document.getElementById('tableSize').value);
    const mainTable = document.getElementById('mainTable');
    mainTable.innerHTML = '';

    for (let i = 0; i < tableSize; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < tableSize; j++) {
            // ñîçäàåì ÿ÷åéêó
            const cell = document.createElement('td');
            // çàïèõèâàåì â íåå ñëó÷àéíîå ÷èñëî
            cell.textContent = Math.floor(Math.random() * 100) + 1;
            // óñòàíàâëèâàåì àòðèáóò, êîòîðûé ïîâçîëÿåò âûäåëÿòü ÿ÷åéêó
            cell.setAttribute('clickable', 'true');
            cell.style.backgroundColor = "white";
            cell.onclick = function () {
                toggleCellColor(this);
            };
            row.appendChild(cell);
        }

        mainTable.appendChild(row);
    }
}

// Ôóíêöèÿ äëÿ ïåðåêëþ÷åíèÿ öâåòà ÿ÷åéêè
function toggleCellColor(cell) {
    // ïîëó÷àåì ìàêñèìàëüíîå êîëè÷åñòâî ÿ÷ååê êîòîðîå ìîæåò áûòü âûäåëåíî
    var cellsNumber = document.getElementById('cellsNuber').value;
    // ïîëó÷àåì êîëè÷åñòâî âûäåëåííûõ ÿ÷ååê íà äàííûé ìîìåíò (ïîëó÷àåì âñå ÿ÷åéêè ó êîòîðûõ ñòîèò àòðèáóò clicked)
    var selectedcellsNumber = cell.parentElement.querySelectorAll('[clicked="true"]').length;
    // åñëè ÿ÷åéêà ìîæåò áûòü íàæàòà è âûäåëåíî äîïóñòèìîå êîëè÷åñòâî ÿ÷ååê
    if (cell.hasAttribute('clickable') && selectedcellsNumber < cellsNumber) {
        // ïîìå÷àåì ÿ÷åêó êàê âûäåëåííóþ
        cell.setAttribute('clicked', 'true');
        // óáèðàåì àòðèáóò, îòâå÷àþùèé çà âîçìîæíîñòü âûäåëåíèÿ
        cell.removeAttribute('clickable')
        // âûäåëåíèå ðàçíûìè öâåòàìè(ïî óñëîâèþ)
        const cellValue = parseInt(cell.textContent);
        if (cellValue % 2 === 0) {
            cell.style.backgroundColor = 'lightblue';
        } else {
            cell.style.backgroundColor = 'lightgreen';
        }

        // äåëàåì íåêëèêàáåëüíûìè ñîñåäíèè ÿ÷åéêè
        if (cell.nextElementSibling !== null && cell.nextElementSibling.hasAttribute('clickable')) {
            cell.nextElementSibling.removeAttribute('clickable');
        }

        if ( cell.previousElementSibling !== null && cell.previousElementSibling.hasAttribute('clickable')) {
            cell.previousElementSibling.removeAttribute('clickable');
        }
    }
}

// Ôóíêöèÿ äëÿ òðàíñïîíèðîâàíèÿ òàáëèöû
function transposeTable() {
    const table = document.getElementById('mainTable');
    const rows = Array.from(table.getElementsByTagName('tr'));
    const columns = rows[0].getElementsByTagName('td').length;

    if (rows.length !== columns) {
        alert('Mistake in create table.');
        return;
    }

    const newTable = new Array(columns).fill(null).map(() => new Array(columns).fill(null));

    // òðàíñïîíèðóåì òàáëèöó - ñîçäàåì íîâûé ìàññèâ, êîòîðûé áóäåò ñîäåðæàòü òðàíñïîèíðîâàííóþ òàáëèöó(òîëüêî ÷èñëà)
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < columns; j++) {
            newTable[i][j] = rows[j].getElementsByTagName('td')[i].textContent;
        }
    }

    // èç ñòàðîé òàáëèöû ôîðìèðóåì òàáëèöó ñ òðàíñïîíèðîâàííûì ñòðîêàìè è ñòîëáöàìè
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < columns; j++) {
            // ïîëó÷àåì ÿ÷åéêó èç ñòàðîé òàáëèöû
            var cell = rows[i].getElementsByTagName('td')[j];
            // çàíîñèì â íåå çíà÷åíèå èç íîâîé òàáëèöû
            cell.textContent = newTable[i][j];
            // óáèðàåì àòðèáóò, îòâå÷àþùèé çà âûäåëåííîñòü ÿ÷åéêè
            if (cell.hasAttribute('clicked'))
                cell.removeAttribute('clicked');
            // óñòàíàâëèâàåì àòðèáóò, îòâå÷àþùèé çà âîçìîæíîñòü íàæàòèÿ íà ÿ÷åéêó
            cell.setAttribute('clickable', 'true');
            cell.style.backgroundColor = 'white';
        }
    }
}

// Ôóíêöèÿ äëÿ äîáàâëåíèÿ íîâîãî ðÿäà â òàáëèöó
function addRow() {
    const table = document.getElementById('mainTable');
    const newRow = document.createElement('tr');
    const columns = table.rows[0].cells.length;

    for (let i = 0; i < columns; i++) {
        const cell = document.createElement('td');
        cell.textContent = Math.floor(Math.random() * 100) + 1;
        cell.setAttribute('clickable', 'true');
        cell.style.backgroundColor = "white";
        cell.onclick = function () {
            toggleCellColor(this);
        };
        newRow.appendChild(cell);
    }

    table.appendChild(newRow);
}

// Ôóíêöèÿ äëÿ äîáàâëåíèÿ íîâîé êîëîíêè â òàáëèöó
function addColumn() {
    const table = document.getElementById('mainTable');
    const rows = Array.from(table.getElementsByTagName('tr'));


    rows.forEach((row) => {
        const cell = document.createElement('td');
        cell.textContent = Math.floor(Math.random() * 100) + 1;
        cell.setAttribute('clickable', 'true');
        cell.style.backgroundColor = "white";
        cell.onclick = function () {
            toggleCellColor(this);
        };
        row.appendChild(cell);
    });
}


/*
10. In accordance with your subject area, create a base class and a successor class
with five functions (including getters and setters), to provide a demonstration of their
capabilities. Create a decorator for one of the functions and demonstrate its use. Implement
two options: 1) prototypical inheritance in the functional style and 2) the "class"/"extends"
construction
*/
const classFunctionActivator = document.getElementById("classFunctionActivator");
if (classFunctionActivator) {
    classFunctionActivator.addEventListener("click", function (e) {
        e.preventDefault();
        console.clear();

        functionalInheritance();
        classInheritance();
    });
}
function functionalInheritance() {
    function withTimestamp(fn) {
      return function() {
        const timestamp = new Date().toLocaleString();
        const result = fn.apply(this, arguments);
        return `${timestamp}: ${result}`;
      };
    }

    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.getName = function() {
        return this.name;
    };
    Animal.prototype.setName = function(name) {
        this.name = name;
    };
    Animal.prototype.getAge = function() {
        return this.age;
    };
    Animal.prototype.setAge = function(age) {
        this.age = age;
    };
    Animal.prototype.getDetails = withTimestamp(function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    });

    function Dog(name, age, breed) {
        Animal.call(this, name, age);
        this.breed = breed;

        this.getBreed = function () {
            return this.breed;
        }
        this.setBreed = function (breed) {
            this.breed = breed;
        }
    }
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.bark = function() {
        return `${this.name} barks!`;
    };
    Dog.prototype.getDetails = function() {
        const animalDetails = Animal.prototype.getDetails.call(this);
        return `${animalDetails}, Breed: ${this.getBreed()}`;
    };

    const myAnimal = new Animal("Rover", 5);
    const myDog = new Dog("Buddy", 3, "Golden Retriever");

    console.log(myDog.getName());
    myDog.setName("Badass");
    console.log(myDog.getName());
    console.log(myAnimal.getDetails());
    console.log(myDog.getDetails());
    console.log(myDog.bark());
}
function classInheritance() {
    function withTimestamp(fn) {
      return function() {
        const timestamp = new Date().toLocaleString();
        const result = fn.apply(this, arguments);
        return `${timestamp}: ${result}`;
      };
    }

    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getName() {
            return this.name;
        }
        setName(name) {
            this.name = name;
        }
        getAge() {
            return this.age;
        }
        setAge(age) {
            this.age = age;
        }
        getDetails = withTimestamp(() => {
            return `Name: ${this.name}, Age: ${this.age}`;
        });
    }

    class Dog extends Animal {
        constructor(name, age, breed) {
            super(name, age);
            this.breed = breed;
        }
        getBreed() {
            return this.breed;
        }
        setBreed(breed) {
            this.breed = breed;
        }
        bark() {
            return `${this.name} barks!`;
        }
        getDetails() {
            const animalDetails = super.getDetails();
            return `${animalDetails}, Breed: ${this.getBreed()}`;
        }
    }

    const myAnimal = new Animal("Rover", 5);
    const myDog = new Dog("Buddy", 3, "Golden Retriever");

    console.log(myDog.getName());
    myDog.setName("Badass");
    console.log(myDog.getName());
    console.log(myAnimal.getDetails());
    console.log(myDog.getDetails());
    console.log(myDog.bark());
}


/*
11.
*/
  function generateRandomDate() {
    var randomDay = Math.floor(Math.random() * 31) + 1;
    var randomMonth = Math.floor(Math.random() * 12) + 1;
    var randomYear = Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000;

    return { day: randomDay, month: randomMonth, year: randomYear };
  }

  // Функция для форматирования даты в шаблон "дд.мм.гг"
  function formatDateString(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
    var year = date.getFullYear() % 100; // Получаем двузначный год

    return (day < 10 ? '0' : '') + day + '.' + (month < 10 ? '0' : '') + month + '.' + (year < 10 ? '0' : '') + year;
  }

  // Функция для поиска самой поздней даты
  function findLatestDate(dates) {
    var latestDate = null;

    for (var key in dates) {
      if (dates.hasOwnProperty(key)) {
        var currentDate = new Date(dates[key].year, dates[key].month - 1, dates[key].day);

        if (latestDate === null || currentDate > latestDate) {
          latestDate = currentDate;
        }
      }
    }

    return latestDate;
  }

  // Функция для генерации и вывода дат по нажатию кнопки
  function generateAndDisplayDates() {
    var numberOfDates = 5;
    var randomDates = {};

    for (var i = 1; i <= numberOfDates; i++) {
      randomDates['date' + i] = generateRandomDate();
    }

    // Вывод всего массива
    var arrayInfoParagraph = document.getElementById('p');
    arrayInfoParagraph.textContent = "Random dates:\n";

    for (var key in randomDates) {
        if (randomDates.hasOwnProperty(key)) {
            arrayInfoParagraph.textContent += key + ": " + formatDateString(new Date(randomDates[key].year, randomDates[key].month - 1, randomDates[key].day)) + "\n";


        }
    }

    document.body.appendChild(arrayInfoParagraph);

    // Вывод самой поздней даты
    var latestDate = findLatestDate(randomDates);
    var resultParagraph = document.getElementById('p1');
    resultParagraph.textContent = "Latest Date: " + formatDateString(latestDate);
    document.body.appendChild(resultParagraph);
  }

//#############################################################


function Show_text(){
    if(document.getElementById('show_change_text').checked){
        document.getElementById("appearanceForm").style.display = "block";
        document.getElementById("ooo").style.background = "none"
        document.getElementById("text_dec").style.fontFamily = "cursive"
    }
    else{
        document.getElementById("appearanceForm").style.display = "none";
        document.getElementById("ooo").style.background = ""
    }

}


// Ïðîâåðÿåì, åñòü ëè ñîñòîÿíèå îòñ÷åòà â localStorage
// const savedCountdown = localStorage.getItem('countdown');
//
// if (savedCountdown) {
//     const secondsRemaining = parseInt(savedCountdown);
//     startCountdown(secondsRemaining);
// } else {
//     // Åñëè ñîñòîÿíèå îòñ÷åòà íå íàéäåíî, íà÷èíàåì íîâûé îòñ÷åò
//     const initialSeconds = 3600; // 1 ÷àñ
//     startCountdown(initialSeconds);
// }


// Ôóíêöèÿ äëÿ ñîçäàíèÿ íà÷àëüíîé òàáëèöû







