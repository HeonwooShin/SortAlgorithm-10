const container = document.querySelector('#sortContainer'),
    startBtn = document.querySelector('#startBtn');
let lengthOfData = 10;

function getOrderedArray(length) {
    let array = [];
    for (i=0; i<length; i++) {
        array.push(i+1);
    }
    return array;
}

function randomizeArray(array) {
    let newArray = [];
    const length = array.length;

    for (i=0; i<length; i++) {
        const randomNumber = Math.floor(Math.random()*array.length);
        newArray.push(array[randomNumber]);
        array.splice(randomNumber, 1);
    }
    return newArray;
}

function displayArray(array) {
    container.innerHTML = "";
    const length = array.length;
    for (i=0; i<length; i++) {
        let datum = document.createElement('span');
        datum.innerHTML = array[i];
        container.append(datum);
    }
}

function bubbleSort(array) {
    let iteration = 0;
    let step = 0;
    const length = array.length
    const orderedArray = getOrderedArray(length)
    const lengthMinusOne = length - 1;
    let isTheSameArray = false;

    while (!isTheSameArray) {
        iteration += 1;
        
        for (i=0; i<lengthMinusOne; i++) {
            let a = array[i];
            let b = array[i+1];
            if (a > b) {
                array.splice(i, 1, b);
                array.splice(i+1, 1, a);
                displayArray(array)
            }
            step += 1;
            console.log(`[${array}], step: ${step}, iteration: ${iteration}`);
            startBtn.innerHTML = `step: ${step}, iteration: ${iteration}`
        }

        isTheSameArray = true;
        for (i = 0; i < length; i++)
            if (orderedArray[i] !== array[i])
                isTheSameArray = false;
    }
}


function init() {
    const unorderedArray = randomizeArray(getOrderedArray(lengthOfData));
    displayArray(unorderedArray);

    startBtn.addEventListener('click', () => bubbleSort(unorderedArray));
}

init();

