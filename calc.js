var num = document.getElementsByClassName('num');
var history = document.getElementById('history');
var result = document.getElementById('text');
var opp = document.getElementsByClassName('opp');

let arr = [];
for(i=0; i<opp.length; i++){
        arr.push(opp[i].innerText);
    }
console.log(arr)

function dnum(index){
    if(result.innerText == ''){
        result.innerText = index
    }
    else if(result.innerText != ''){
        result.innerText += index
    }
}
function del(){
    newres = result.innerText.slice(0, result.innerText.length-1)  
    result.innerText = newres
}
function evalres(){
    if(result.innerText == ''){
        result.innerText = ''
    }
    else if(result.innerText != ''){
        ans = eval(result.innerText)
        result.innerText = ans
    }
}
function clr(){
    result.innerText = ''
}

function dopp(sign){
    nlast = result.innerText.slice(0, result.innerText.length-1)
    last = result.innerText.slice(-1)
    change = result.innerText.slice(0, result.innerText.length-2)
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
                if(sign == '/' || sign == '*'){
                    result.innerText = nlast+sign
                }
                else{
                    result.innerText += sign
                }
            }
            else{
                result.innerText = nlast+sign
            }
        }
        else{
            result.innerText += sign}
        }    
    }
