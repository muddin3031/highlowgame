let targetNum;
let clock1, clock2, clock3, clock4;
targetNum = Math.floor((Math.random() * 100) + 1);
clock1 = "1:25";
clock2 = "4:30";
clock3 = "2:50";
clock4 = "9:00";
console.log(targetNum);
// let resultDisplay = document.getElementById('result')
let counter = document.getElementById('counter')
let clockimg = document.getElementById('clocks')
let x = 0;
let button22=document.getElementById('button2')

function checkResult() {
    let resultDisplay = document.getElementById('result');
    let guess = (document.getElementById('number').value);
    
    if (x == 0) {
        if (guess == null) {
            return;
        }
        else if (guess == clock1) {
            resultDisplay.style.color = "#488543";
            resultDisplay.innerHTML = "You got it!";
            counter.innerHTML = "1";
            clockimg.src = "clock2.jpg";
            x++;
            return;
        }
        else if (guess !== clock1) {
            resultDisplay.style.color = "#d9534f";
            resultDisplay.innerHTML = "Try Again";
        }

    }
    if (x == 1) {
        if (guess == null) {
            return;
        }
        else if (guess == clock2) {
            resultDisplay.style.color = "#488543";
            resultDisplay.innerHTML = "You got it!";
            counter.innerHTML = "2";
            clockimg.src = "clock 3.jpg";
            x++;
            return;

        }
        else if (guess !== clock2) {
            resultDisplay.style.color = "#d9534f";
            resultDisplay.innerHTML = "Try Again";
        }
    }

    if (x == 2) {
        if (guess == null) {
            return;
        }
        else if (guess == clock3) {
            resultDisplay.style.color = "#488543";
            resultDisplay.innerHTML = "You got it!";
            counter.innerHTML = "3";
            clockimg.src = "clock4.jpg";
            x++;
            return;

        }
        else if (guess !== clock3) {
            resultDisplay.style.color = "#d9534f";
            resultDisplay.innerHTML = "Try Again";
        }
    }

    if (x == 3) {
        if (guess == null) {
            return;
        }
        else if (guess == clock4) {
            resultDisplay.style.color = "#488543";
            resultDisplay.innerHTML = "You got it! You Won the whole Game";
            counter.innerHTML = "4";
           button22.innerHTML="Replay";
            
            x++;
            return;


        }
        else if (guess !== clock4) {
            resultDisplay.style.color = "#d9534f";
            resultDisplay.innerHTML = "Try Again";
        }
    }
    
    if(x==4)
    {
        gameOver(); 
    }
}

function gameOver()
{
    location.reload();
}
