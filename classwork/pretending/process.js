const WHICH = 2;
function parta() {
    setTimeout(function() {
        console.log("Select cone");
        setTimeout(function() {
            console.log("Select flavor");
            setTimeout(function() {
                console.log("Select scoop count");
                setTimeout(function() {
                    console.log("Select toppings");
                    setTimeout(function() {
                        console.log("Enjoy");
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000);
}

async function partb(version) {
    function orderPromise(work, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(work());
            }, time);
        });
    }
    async function start() {
        await orderPromise(() => console.log("Select cone"), 1000);
        await orderPromise(() => console.log("Select flavor"), 1000);
        await orderPromise(() => console.log("Select scoop count"), 1000);
        await orderPromise(() => console.log("Select toppings"), 1000);
        await orderPromise(() => console.log("Enjoy"), 1000);
    }
    if (version) {
        orderPromise(() => {console.log("Select cone")}, 1000)
        .then(() => {return orderPromise(() => {console.log("Select flavor")}, 1000)})
        .then(() => {return orderPromise(() => {console.log("Select scoop count")}, 1000)})
        .then(() => {return orderPromise(() => {console.log("Select toppings")}, 1000)})
        .then(() => {return orderPromise(() => {console.log("Enjoy")}, 1000)})
    } else {
        start();
    }
}

if (WHICH == 0) {
    console.log("Callbacks and setTimeout");
    parta();
} else if (WHICH == 1) {
    console.log("Promises");
    partb(true);
} else if (WHICH == 2) {
    console.log("Async and await");
    partb(false);
}