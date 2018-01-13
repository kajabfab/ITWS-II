/* The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its
 resulting value. */

function count3() {
    setTimeout(function () {
        console.log(1);
        setTimeout(function () {
            console.log(2);
            setTimeout(function () {
                console.log(3);
                console.log('count done');
            }, 1000);
        }, 1000);
    }, 1000);
}

count3();

function makePromise(i) {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log(i);
            resolve();
        }, 1000)
    })
}

function newCount3() {
    makePromise(1)
        .then(() => {
            return makePromise(2);
        })
        .then(() => {
            return makePromise(3);
        })
        .then(() => {
            console.log('newCount3 done');
        })
}

newCount3();