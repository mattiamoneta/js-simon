const domNumbersWrapper = document.getElementById('digits-list');
const domMsg = document.getElementById('msg');
start();

function start(){

    // Generazione numeri casuali e assegnazione ad array
    let numbers = [];
    let usrNumbers = [];

    for (let i = 0; i < 5; i++){
        numbers[i] = randNumber();
        const newListItem = document.createElement('li');
        newListItem.innerText = numbers[i];
        newListItem.classList.add('digits-item');
        domNumbersWrapper.append(newListItem);
    }

    // Timer
    setTimeout(function(){
        domNumbersWrapper.classList.add('hidden');
    }, 5000);

    setTimeout(function(){
        let counter = 0;
        const listItems = document.getElementsByClassName('digits-item');
        usrNumbers = getInput();
        domNumbersWrapper.classList.remove('hidden');
        
        for(let i = 0; i < numbers.length; i++){

            if(numbers[i] != usrNumbers[i]){
                listItems[i].classList.add('wrong')
            } else {
                listItems[i].classList.add('right')
                counter++;
            }
        }

        domMsg.innerText = `Hai indovinato ${counter} numeri!`;

    },5500);

}


function randNumber(){
    return Math.floor(Math.random() * 99) + 1;
}

function getInput(){

    let inputNumbers = [];

    for (let j = 0; j < 5; j++ ){
        
        let userPrompt = "";

        do{
            userPrompt = parseInt(prompt(`Inserire il ${j + 1}° numero: `));
            inputNumbers[j] = userPrompt;
        } while (isNaN(userPrompt))

    }

    return inputNumbers;
}