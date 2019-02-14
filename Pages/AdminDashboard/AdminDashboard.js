
// ********************VARIABLES***************

let cat = document.getElementById("cat");
let qn = document.getElementById("qn");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let select = document.getElementById("select");
let time=document.getElementById("time");

let hdTxt = document.getElementById("hdTxt");

let next = document.getElementById("next");
let submit = document.getElementById("submit");

let arr = []
let category = "";





// ***********************EVENT LISTENERS*********************
next.addEventListener("click", nextQn);
submit.addEventListener("click", submitQns);


// ************************FUNCTIONS******************

function nextQn() {
    let dropDown = parseInt(select.options[select.selectedIndex].value - 1);
    let inputs = [
        opt1.value,
        opt2.value,
        opt3.value,
        opt4.value]
    let correct = inputs[dropDown]
    // console.log(inputs,"  ",dropDown)
    if (cat.value.trim() !== "" && qn.value.trim() !== "" && opt1.value.trim() !== "" && opt2.value.trim() !== "" && opt3.value.trim() !== ""
        && opt4.value.trim() !== "" && time.value.trim() !=="") {
        let obj =
        {
            cat: cat.value,
            qn: qn.value,
            opt1: opt1.value,
            opt2: opt2.value,
            opt3: opt3.value,
            opt4: opt4.value,
            time:time.value,
            correct

        }


        category = cat.value;



        qn.value = "";
        opt1.value = "";
        opt2.value = "";
        opt3.value = "";
        opt4.value = "";
       select.options[0].selected = 'selected';

        arr.push(obj)

        hdTxt.innerText = "QUESTION NO: " + parseInt(arr.length + 1);


        if (arr.length) {

            cat.disabled = true;
            time.disabled=true;


        }

        console.log(arr)

    }
    else {
        console.log("naaat done empty")
    }
}


 function submitQns() {

    let counter=0;
    if (arr.length) {
       for(let i=0;i<arr.length;i++)
       {
           firebase.database().ref('myQns').child(category).push(arr[i])
           .then(()=>
           {
               console.log("firebase database")
               counter++;
               if(counter===arr.length)
               {
                arr=[];
                hdTxt.innerText = "QUESTION NO: " + parseInt(arr.length + 1);
                   alert("Test Successfully Developed");
                   
               }
           })
           .catch((error)=>
           {

            alert(error.message);
            arr=[]


           })
          

       }
    }
}







// ***************LOGOUT*******************    


function logout()
{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.

    location.assign("../../index.html")
  }).catch(function(error) {
    // An error happened.
  });
}


// *************JQUERY*****************


$(document).ready(function () {
    $('select').formSelect();
});




$('.dropdown-trigger').dropdown();

$(document).ready(function () {
    $('.sidenav').sidenav();
});

