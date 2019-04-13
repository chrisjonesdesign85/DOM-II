// Your code goes here


//click - change the text on click
let h1Change = document.querySelector('body > header > div > h1')
h1Change.addEventListener('click', (event) => {
    h1Change.innerHTML = "All Your Base Are Belong To Us!!!"
})


//keydown - pressing a key on the keyboard will change the background color to green
let keyPress = document.querySelector('body').addEventListener("keydown", keyFunction);

function keyFunction() {
    this.style.backgroundColor = "green";
}


//wheel
document.querySelector('body > div > header > p').addEventListener("wheel", myFunction)

function myFunction() {
    this.style.fontSize = "35px"
}


//load
window.onload = function () {
    document.body.style.background = "lightgrey"
}


//focus
document.querySelector('body > header > div > nav > a:nth-child(1)').addEventListener("focus", foFunction)

function foFunction() {
    this.style.color = "pink"
    this.style.fontSize = "35px"
}


//resize
window.addEventListener("resize", sizeFunction)

function sizeFunction() {
    document.body.style.background = "red"
}


//mouseDown / mouseUp
let mDown = document.querySelector('body > div > header > img')
mDown.addEventListener("mousedown", downFunc);
mDown.addEventListener("mouseup", upFunc);

function downFunc() {
    document.body.style.background = 'yellow';
}

function upFunc() {
    document.body.style.background = "lightgrey"
}


//focusin
document.querySelector('body > header > div > nav > a:nth-child(2)').addEventListener("focusin", focusinFunc)

function focusinFunc() {
    document.body.style.background = 'purple';

}


//focusout
document.querySelector('body > header > div > nav > a:nth-child(2)').addEventListener("focusout", focusoutFunc)

function focusoutFunc() {
    document.body.style.background = 'lightgrey';
}


//mouseenter / mouseleave
mouseFoot = document.querySelector('body > footer')
document.querySelector('body > footer').addEventListener("mouseenter", mouseEnter);
document.querySelector('body > footer').addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    mouseFoot.style.background = "red"
    document.querySelector('body > footer > p').style.color = "white"
    document.querySelector('body > footer > p').style.fontSize = "35px"
}

function mouseLeave() {
    mouseFoot.style.background = "#FFEBCD"
    document.querySelector('body > footer > p').style.color = "black"
    document.querySelector('body > footer > p').style.fontSize = "16px"
}


//dblclick
document.querySelector('body > div > section:nth-child(2) > div.text-content > p:nth-child(2)')
    .addEventListener("dblclick", doubleClk)

function doubleClk() {
    this.innerHTML = "Converted to Binary :) 01000001 01100100 01110110 01100101 01101110 01110100 01110101 01110010 01100101 00100000 01110111 01100101 01100010 01100100 01100101 01110011 01101001 01100111 01101110 00100000 01110000 01110010 01100101 01110100 01110100 01111001 00100000 01100100 01100101 01110011 01101001 01100111 01101110 00100000 01100100 01100101 01110011 01101001 01100111 01101110 00101100 00100000 01100101 01111000 01100011 01110101 01110010 01110011 01101001 01101111 01101110 00100000 01100011 01110101 01110100 01100101 00100000 01010111 01101111 01110010 01100100 01010000 01110010 01100101 01110011 01110011 00100000 01100010 01101100 01101111 01100111 01100111 01100101 01110010 00100000 01100100 01100101 01110011 01101001 01100111 01101110 00100000 01110111 01100101 01100010 01100100 01100101 01110011 01101001 01100111 01101110 00100000 01100001 01100100 01110110 01100101 01101110 01110100 01110101 01110010 01100101 00101110 00100000 01010000 01110010 01100101 01110100 01110100 01111001 00100000 01110011 01101001 01101101 01110000 01101100 01100101 00100000 01110100 01110010 01100001 01110110 01100101 01101100 01101001 01101110 01100111 00100000 01100110 01110101 01101110 00100000 01010111 01101111 01110010 01100100 01010000 01110010 01100101 01110011 01110011 00100000 01110111 01100001 01101110 01100100 01100101 01110010 01101100 01110101 01110011 01110100 00100000 01100100 01100001 01110010 01101110 00100000 01110011 01101001 01101101 01110000 01101100 01100101 00100000 01101111 01110010 01100111 01100001 01101110 01101001 01111010 01100101 01100100 00101110"
}


// can't get the below "dblClick" Event to work when I double click, it starts on page Load couldn't figure it out

// document.querySelector(body > div > section:nth-child(2)).addEventListener("dblclick", change)
// let i = 0;
// function change() {

//     let doc = document.querySelector('body > header');
//     let color = ["black", "#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3", "white"];

//     doc.style.backgroundColor = color[i];
//     i = (i + 1) % color.length;

// }
// setInterval(change, 50);





//select
// function mySelectFunction() {
//     document.getElementsByClassName("footer").select();
// }

// function myAlertFunction() {
//     alert("you selected some text bro!");
// }

//I've been trying "select" for over an hour or more and, I just saw "Supported HTML tags:	<input type="file">, <input type="password">, <input type="text">, and <textarea>"" but there is no input or text field on the website i have been trying to select <p>'s or <div>'s... SMH

//also just saw these Events are merely suggestions :D I thought we had to use the ones listed! HAHA
