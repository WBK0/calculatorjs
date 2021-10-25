let a = "";
let b = 0;
let c = "";
let isOperator = false;
let isFirstOperator = false;
let artimeticalOperator = "";

const clearNumpad = () => {
    document.getElementById("operatorInfo").innerHTML = "";
    a = 0;
    b = 0;
    c = "";
    isOperator = false;
    isFirstOperator = false;
    artimeticalOperator = "";
    document.getElementById("resultInput").innerHTML = "0";
}

const pushNumber = (number) => {
    if (isFirstOperator){
        c = a;
        a = "";
        a = a.toString();
        isFirstOperator = false;
    
    }
    if (isOperator){
        a = "";
        a = a.toString();
        isOperator = false;
    }
    if (number === 0 && a === 0){
        return
    }
    
    
    a = a + number;
    a = a.toString();
    document.getElementById("resultInput").innerHTML = a;
}

const pushOperator = (operator) => {
    document.getElementById("operatorInfo").innerHTML = operator;
    if (c !== ""){
        b = c;
        c = ""
    }

    if(artimeticalOperator === "")
    {
        console.log('xd');
        artimeticalOperator=operator;
        isFirstOperator = true;
    }else{
        if (artimeticalOperator === '+'){
           
            a = parseInt(a)
            b = parseInt(b)
            b = b + a
            document.getElementById("resultInput").innerHTML = b;
        }
        if (artimeticalOperator === '-'){
           
            a = parseInt(a)
            b = parseInt(b)
            b = b - a
            document.getElementById("resultInput").innerHTML = b;
        }
        if (artimeticalOperator === 'x'){
           
            a = parseInt(a)
            b = parseInt(b)
            b = b * a
            document.getElementById("resultInput").innerHTML = b;
        }
        if (artimeticalOperator === '='){
           
            a = parseInt(a)
            b = parseInt(b)
            b = b
            document.getElementById("resultInput").innerHTML = b;
        }
        if (artimeticalOperator === '/'){
            
            a = parseInt(a)
            b = parseInt(b)
            b = b/a
            document.getElementById("resultInput").innerHTML = b;
        }
        artimeticalOperator = operator; 
        isOperator = true;
        
    }

    
   
}