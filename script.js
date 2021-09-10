
const button = document.getElementById("countButton");

button.addEventListener("click", ()=> returnButton());


function returnButton() {
    resultInnerLetter()
    resultInnerWord()
}


function letterSplit() {

    let typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase(); 

    typedText = typedText.replace(/[^a-z'\s]+/g, "");

    let arrayText = typedText.split("");

    return arrayText;
}

function wordSplit() {

    let typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase(); 

    typedText = typedText.replace(/[^a-z'\s]+/g, "");

    let arrayText = typedText.split(" ");

    return arrayText;

}

function itemCounts(type) {

    let arrayText = type();  

    const letterCounts = {};

    for (let i = 0; i < arrayText.length; i++) {
        
        let currentLetter = arrayText[i];
        
        if (letterCounts[arrayText[i]]===undefined) {

            letterCounts[currentLetter] = 1;
        }

        else {
            letterCounts[arrayText[i]] += 1;
        }
                
     }

     
return letterCounts


}

 function resultInnerLetter() {


    const divLetters = document.getElementById("lettersDiv");

    const span = document.createElement("span")

    const countObject = JSON.stringify(itemCounts(letterSplit));

    span.innerText = countObject;

    divLetters.appendChild(span)

    console.log(countObject);

 }

 function resultInnerWord() {

    const divLetters = document.getElementById("wordsDiv");

    const span = document.createElement("span")

    const countObject = JSON.stringify(itemCounts(wordSplit));

    span.innerText = countObject;

    divLetters.appendChild(span)

    console.log(countObject);

 }


