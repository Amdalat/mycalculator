var num = document.getElementsByClassName('num');
var history = document.getElementById('history');
var result = document.getElementById('text');
var opp = document.getElementsByClassName('opp');
var pres = ''
let arr = [];
for(i=0; i<opp.length; i++){
        arr.push(opp[i].innerText);
    }
// code starts here
function isValidExpression(expression) {
    const decimalRegex = /[0-9]*\./;
    
    if (decimalRegex.test(expression)) {
      return false;
    }
    
    try {
      eval(expression);
      return true;
    } catch (error) {
      return false;
    }
  }

function evalres(){
    if(result.innerText == ''){
        result.innerText = ''
        pres = ''
    }
    else if(result.innerText != ''){
        try {
        ans = eval(result.innerText)
        result.innerText = ans
        pres = ''
        } catch (error) {
            result.innerText = 'eRrOr'
        }
    }
}

function dnum(index){
    if(index == '.'){
        nlast = result.innerText.slice(0, result.innerText.length-1)
        last = result.innerText.slice(-1)
        if (isValidExpression(pres)) {
            console.log("Expression is valid.");
            if(result.innerText == '' || arr.includes(last)){
                result.innerText += 0 + index
                pres += 0 + index
            }
            else{
                result.innerText += index
                pres += index
            }
        }
        else {
            result.innerText += ''
            console.log("Expression contains multiple decimals.");
        }
    }
        else{
            result.innerText += index
            pres += index
        }
}
function del(){
    newres = result.innerText.slice(0, result.innerText.length-1)  
    result.innerText = newres
}

function clr(){
    result.innerText = ''
}

function dopp(sign){
    pres = ''
    nlast = result.innerText.slice(0, result.innerText.length-1)
    last = result.innerText.slice(-1)
    snlast = result.innerText.slice(0, result.innerText.length-2)
    slast = result.innerText.slice(result.innerText.length-2, result.innerText.length-1)

    if(result.innerText == ''){
        if(sign == '/' || sign == '*'){
            result.innerText = ''
        }
        else{
            result.innerText += sign
        }
    }
    else if(result.innerText != ''){
        if(last == sign){
            result.innerText = nlast+sign
        }
        else if(arr.includes(sign) && arr.includes(last)){
            if(last == '/' || last == '*'){
                if(sign == '/' || sign == '*' || sign == '+'){
                    result.innerText = nlast+sign
                }
                else{
                    result.innerText += sign
                }
            }
            else if(sign == '/' || sign == '*'){
                if(last == '-'){
                    result.innerText = snlast+sign
                }
                else if(last == '+'){
                    result.innerText = nlast+sign
                }
                else{
                    result.innerText += sign
                }
            }
            else if(last == '-' && sign == '+' && slast == '/' || slast == '*'){
                result.innerText = snlast+sign
            }     
            else{
                result.innerText = nlast+sign
            }
        }
        else{
            result.innerText += sign}
        }    
    }
