let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log("The doubled numbers are", newNumbers); //[2,6]
console.log("----------------------------------------------------------------------------");

let filteredNumbers = numbers.filter((x)=> {
    if (x % 2 !== 0) {
        return x;
    }
});

let mapNumbers = filteredNumbers.map((x)=> {
    return x * 2;
});

console.log("The doubled numbers are", mapNumbers);

console.log("----------------------------------------------------------------------------");

let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);

console.log("----------------------------------------------------------------------------");

console.log(tasks);
console.log(tasks.length);

console.log("----------------------------------------------------------------------------");

const convertedTime = [];
tasks.map((value) => {
    let hour = Math.trunc(value.duration / 60);
    let remainder = value.duration % 60;
    return convertedTime.push(value.name + " is " + hour + " hour " + remainder + " minutes. ");
})
console.log(convertedTime);

console.log("----------------------------------------------------------------------------");

const filteredEvents = tasks.filter((events) => {
    return events.duration <= 120;
})
console.log(filteredEvents);

console.log("----------------------------------------------------------------------------");


const payment = [];
tasks.map((time) => {
    let hour = Math.trunc(time.duration / 60);
    let newPayment = hour * 5;
    if (hour > 0) {
        return payment.push(time.name + " for " + hour + " hour(s) " + " costs " + newPayment + " Euro. ");
    } else if (hour <= 0) {
        return payment.push(time.name + " for " + hour + " hour(s) " + 0 + " Euro. ");
    }
})



console.log(payment);

console.log("----------------------------------------------------------------------------");

const payPayment = [];
tasks.map((time) => {
    let hour = Math.trunc(time.duration / 60);
    let newPayment = hour * 5;
        return payPayment.push(newPayment);
})
const reducer = (prevVan, currentValue) => prevVan + currentValue;
console.log("The total amount of the money which Maartje will have is " + payPayment.reduce(reducer) + " Euro(s). ");

console.log("----------------------------------------------------------------------------");