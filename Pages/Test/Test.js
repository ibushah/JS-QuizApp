
// ******************VARIABLES****************
let proctKey = document.getElementById("proctKey");
let key = document.getElementById("key");
let testDiv = document.getElementById("testDiv");
let proctDiv = document.getElementById("proctDiv")
let dataFlow = document.getElementById("dataFlow");
let loader=document.getElementById("load");
let testScore=document.getElementById("scoreShow");


let correctAns = "";
let score = 0;
let count = 0;
let uid="";
let data = [];


// ******************LISTENERS**************

window.addEventListener("load", load);
proctKey.addEventListener("click", check);

//******************* */FUNCTIONS************************

// *****************WINDOW ONLOAD***********

function load() {

    let testCat = JSON.parse(localStorage.getItem("category"));
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            uid=user.uid;
            console.log(user.uid)
            firebase.database().ref("myQns").child(testCat).once("value", (snap) => {

                let a = snap.val();

                for (var key in a) {
                    data.push(a[key]);
                }
                correctAns = data[count].correct;
                dataFlow.innerHTML = qns(data[count])
                loader.style.display="none";
                proctDiv.style.display="block";

                console.log(data)
            })
            console.log("user is signed in")
        } else {
            loader.style.display="none";

            proctDiv.innerHTML=`<h1 style="text-align:center;">No user is signed in</h1>`;
            proctDiv.style.display="block";

            console.log("no user is signed in")
        }
    });

    console.log(testCat);
}

// *************QUESTION FLOW*************

function qns(a) {
    return (
        `<div class="head"></div>
        <h5>Q${count + 1}) ${a.qn}</h5>
        <p class="radio">
            <label >
                <input name="group1" type="radio" value="${a.opt1}" checked />
                <span>${a.opt1}</span>
            </label>
        </p>
        <p class="radio">
            <label>
                <input name="group1" value="${a.opt2}" type="radio" />
                <span>${a.opt2}</span>
            </label>
        </p>
        <p class="radio">
            <label >
                <input  name="group1" value="${a.opt3}" type="radio" />
                <span>${a.opt3}</span>
            </label>
        </p>
        <p class="radio">
            <label >
                <input name="group1" value="${a.opt4}" type="radio"  />
                <span>${a.opt4}</span>
            </label>
        </p>
        <button class="btn next hoverable" onClick="submit()">Submit</button>`
    )
}


// ***************QUESTION CHANGE************

function submit() {
    if (data.length - 1 > count) {
        count++;

        console.log("count", count);

        if (radiobtn() === correctAns) {
            score++;
        }
        console.log("scoreeee", score)
        dataFlow.innerHTML = qns(data[count]);
        correctAns = data[count].correct;
    }
    else {
        if (radiobtn() === correctAns) {
            score++;
        }
        loader.style.display="block";
        dataFlow.style.display="none";
        let percent=(score/data.length)*100;
        percent=percent.toFixed(2);
        console.log(percent);
        let obj=
        {
            qns:data.length,
            score,
            percent

        }
        let testCat = JSON.parse(localStorage.getItem("category"));
        firebase.database().ref("Scores").child(uid).child(testCat).set(obj)
        .then(()=>
        {
            loader.style.display="none";
            testScore.innerHTML=` <div class="head">
            <h3>TEST CATEGORY:${testCat}</h3>
            <p>No of Questions:${data.length}</p>
            <h4>Percentage:${percent}%</h4>
        </div>`
        
        testScore.style.display="block";
            
            alert("test submitted")
        })
        
       
    }

}


// ********************RADIO BUTTON VALUE PICKER****************

function radiobtn() {
    var rates = document.getElementsByName('group1');
    var rate_value;
    for (var i = 0; i < rates.length; i++) {
        if (rates[i].checked) {
            rate_value = rates[i].value;

        }
    }
    return rate_value;
}


// *************PROCTORING KEY*************

function check() {

    if (key.value === "saylani") {
        proctDiv.style.display = "none";
        testDiv.style.display = "block";

    }
    else {
        alert("wrong proctoring key")
    }
}








// ****************LOGOUT********************

function fbLogout() {
    firebase.auth().signOut().then(function () {
        location.assign('../../index.html')

    }).catch(function (error) {
        // An error happened.
    });

}

