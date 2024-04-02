
a = 100;
b = 150;
c = 200;
x = 120;
y = 90;
z = 100;
const steveAverage = (a, b, c) => (a + b + c/3);


const billAverage = (x, y, z) => (x + y + z/3);

function checkAverageSalary(steveAverage, billAverage) {
    if (steveAverage > billAverage) {
        console.log(`Steve has more salary than Bill ${steveAverage}K vs ${billAverage}K`)
    }
    else {
        console.log(`Bill has more salary than Steve ${billAverage}K vs ${steveAverage}K`);
    }
}

checkAverageSalary(steveAverage(a,b,c), billAverage(x,y,z));
console.log(steveAverage(a,b,c));
console.log(billAverage(x,y,z));
