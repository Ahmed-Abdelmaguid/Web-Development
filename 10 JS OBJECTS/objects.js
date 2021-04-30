var obj = [
    {
        name : "burgers",
        rating : 5,
        watched : true
    },

    {
        name : "forzen",
        rating : 4.5,
        watched : false
    },

    {
        name : "Mad Max",
        rating : 5,
        watched : false
    }
];

for (let index = 0; index < obj.length; index++) {
    if (obj[index].watched == true) {
        console.log("You have watched " + obj[index].name + " - " + obj[index].rating + " stars");
    } else {
        console.log("You have not seen " + obj[index].name + " - " + obj[index].rating + " stars");        
    }

}

obj.forEach(function (movi) {
    if (movi[index].watched == true) {
        console.log("You have watched " + movi[index].name + " - " + movi[index].rating + " stars");
    } else {
        console.log("You have not seen " + movi[index].name + " - " + movi[index].rating + " stars");        
    }
})