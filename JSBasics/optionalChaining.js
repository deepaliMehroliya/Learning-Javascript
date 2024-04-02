// ? 

// stops javascript from throwing undefined exceprion error
// It check if the value exist . if exist it tries to access the properties
const restaurant = {

    name: "Classico Italiano",

    location: "Via Angelo Tavanti 23, Firenze, Italy",

    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],

    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],

    mainMenu: ["Pizza", "Pasta", "Risotto"],



    openingHours: {

        thu: {

            open: 12,

            close: 22,

        },

        fri: {

            open: 11,

            close: 23,

        },

        sat: {

            open: 0, // Open 24 hours

            close: 24,

        },

    },

    order(a, b) {

        return a + b;

    },

};
console.log(restaurant.openingHours.mon?.open);

if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
} else {
    console.log("Monday is not there in openingHours object")
}

console.log(restaurant.openingHours.sat?.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day in days) {
    const open = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order1?.(4, 3) ?? "Method does not exist");


emails = ["mehroliyadeepali@gmailcom", "mehroliyadeepaligmail.com", "mehroliyadeepali@gmail.com"];

function getDomainNameFromEmail(email) {
    const domain = email.slice(email.indexOf("@") + 1)
    //console.log(domain)
    return domain;
};

function emailValidation(emails) {
    for (email of emails) {
        if (email.indexOf("@") !== -1 && email.indexOf(".") !== -1) {
            console.log(`Email is valid and the domain is ${getDomainNameFromEmail(email)}`);
        }
        else {
            console.log("Email is invalid")

        }
    }
}
        
emailValidation(emails)

