let contentMain = document.getElementsByClassName("content")[0];
    contentMain.style.width = "100vw";
    contentMain.style.height = "100vh";
    contentMain.style.justifyContent = "center";
    contentMain.style.display = "grid";

let bodyMain = document.getElementsByTagName("body")[0];
    bodyMain.style.backgroundColor = "#DDD6CE";

let borderLine = document.getElementsByClassName("border")[0];
    borderLine.style.height="550px";
    borderLine.style.width="300px";
    borderLine.style.backgroundColor="#f3ede1";
    borderLine.style.borderRadius="25px";
    borderLine.style.padding="60px";
    borderLine.style.marginTop="100px";

let title = document.getElementsByClassName("header")[0];
    title.style.textAlign="center";
    title.style.fontFamily = "serif";
    title.style.backgroundColor = "#e7dcc4";
    title.style.color = "black";
    title.style.fontSize="40px";

let n1 = document.getElementsByClassName("num")[0];
    n1.style.fontFamily = "serif";
    n1.style.fontSize="25px";

let n2 = document.getElementsByClassName("num")[1];
    n2.style.fontFamily = "serif";
    n2.style.fontSize="25px";

let field1 = document.getElementsByClassName("text")[0];
    field1.style.width = "100%";
    field1.style.height = "35px";
    field1.style.backgroundColor = "#e6e6e6";

let field2 = document.getElementsByClassName("text")[1];
    field2.style.width = "100%";
    field2.style.height = "35px";
    field2.style.backgroundColor = "#e6e6e6";

let addBtn = document.getElementsByClassName("btn")[0];
    addBtn.style.width = "60px";
    addBtn.style.height = "45px";
    addBtn.style.borderRadius = "10px";
    addBtn.style.backgroundColor = "#AF005F";
    addBtn.style.color = "white";
    addBtn.style.marginLeft = "15px";
    addBtn.style.fontSize="20px";

let subBtn = document.getElementsByClassName("btn")[1];
    subBtn.style.width = "60px";
    subBtn.style.height = "45px";
    subBtn.style.borderRadius = "10px";
    subBtn.style.backgroundColor = "#AF005F";
    subBtn.style.color = "white";
    subBtn.style.fontSize="20px";

let multiBtn = document.getElementsByClassName("btn")[2];
    multiBtn.style.width = "60px";
    multiBtn.style.height = "45px";
    multiBtn.style.borderRadius = "10px";
    multiBtn.style.backgroundColor = "#AF005F";
    multiBtn.style.color = "white";
    multiBtn.style.fontSize="20px";

let divBtn = document.getElementsByClassName("btn")[3];
    divBtn.style.width = "60px";
    divBtn.style.height = "45px";
    divBtn.style.borderRadius = "10px";
    divBtn.style.backgroundColor = "#AF005F";
    divBtn.style.color = "white";
    divBtn.style.fontSize="20px";

let switchBtn = document.getElementsByClassName("btn")[4];
    switchBtn.style.width = "90px";
    switchBtn.style.height = "40px";
    switchBtn.style.borderRadius = "10px";
    switchBtn.style.backgroundColor = "#191919";
    switchBtn.style.color = "white";
    switchBtn.style.marginLeft = "100px";
    switchBtn.style.marginTop = "50px";

let outcome = document.getElementsByClassName("res")[0];
    result.style.textAlign = "center";
    result.style.fontSize = "20px";
    result.style.color = "black";
    result.style.fontWeight = "bold";
    result.style.fontFamily = "serif";

switchBtn.addEventListener("click", function()
    {
        if(bodyMain.style.backgroundColor == "#DDD6CE")
        {
            bodyMain.style.backgroundColor = "black";
            title.style.backgroundColor = "black";
            switchBtn.style.backgroundColor = "white";
            switchBtn.style.innerHTML = "Light Mode";
            switchBtn.style.color = "black";
        }
        else if(bodyMain.style.backgroundColor == "black")
        {
            bodyMain.style.backgroundColor = "#DDD6CE";
            title.style.backgroundColor = "white";
            switchBtn.style.backgroundColor = "black";
            switchBtn.style.innerHTML = "Dark Mode";
            switchBtn.style.color = "white";
        }
    })

function toAdd(){
    var n1 = parseInt(document.getElementsByClassName("text")[0].value);
    var n2 = parseInt(document.getElementsByClassName("text")[1].value);
    outcome.innerHTML = n1+n2;
}

function toSubtract(){
    var n1 = parseInt(document.getElementsByClassName("text")[0].value);
    var n2 = parseInt(document.getElementsByClassName("text")[1].value);
    outcome.innerHTML = n1-n2;
}

function toMultiply(){
    var n1 = parseInt(document.getElementsByClassName("text")[0].value);
    var n2 = parseInt(document.getElementsByClassName("text")[1].value);
    outcome.innerHTML = n1*n2;
}

function toDivide(){
    var n1 = parseInt(document.getElementsByClassName("text")[0].value);
    var n2 = parseInt(document.getElementsByClassName("text")[1].value);
    outcome.innerHTML = n1/n2;
}
