//vd về callback, promise, async
let logNumber1 = (num, callBack) => {
    let numberHere = "";
    setTimeout(() => {
        numberHere = num + 10;
        callBack(numberHere);
    }, 2000)
}

logNumber1(10, (numberInput) => {
    console.log(numberInput + " callback");
    logNumber1(20, (numberInput) => {
        console.log(numberInput + " callback");
        logNumber1(30, (numberInput) => {
            console.log(numberInput + " callback");
        })
    })
})

let logNumber2 = (num) => {
    let numberHere = "";
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            numberHere = num + 10;
            resolve(numberHere)
        }, 2000)
    })
    return promise
}

logNumber2(10)
    .then((res) => {
        console.log(res + " promise")
        return logNumber2(20)
    })
    .then((res) => {
        console.log(res + " promise")
        return logNumber2(30)
    })
    .then((res) => {
        console.log(res + " promise")
    })

let logNumber3 = (num) => {
    let numberHere = "";
    let promise = new Promise((relsove, reject) => {
        setTimeout(() => {
            numberHere = 10 + num;
            relsove(numberHere)
        }, 2000)
    })
    return promise
}

let fuTest = async () => {
    try {
        await logNumber3(10).then((res) => {
            console.log(res + " async")
        });
        await logNumber3(20).then((res) => {
            console.log(res + " async")
        });
        await logNumber3(30).then((res) => {
            console.log(res + " async")
        });
    } catch (err) {
        console.log(err)
    }
}

fuTest().then(()=>{
    console.log("Hoàn thành async")
});