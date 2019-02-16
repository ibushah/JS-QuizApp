
// ******************VARIABLES****************

let dataBelow = document.getElementById("dataBelow");
let loader=document.getElementById("load");



// ******************LISTENERS**************

window.addEventListener("load", loadCategories);



//******************* */FUNCTIONS************************


function loadCategories() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

      dataBelow.innerHTML = "";
      firebase.database().ref('myQns').once("value", (snap) => {
        loader.style.display="none";
        dataBelow.style.display="block";
        for (var key in snap.val()) {
          console.log(key)
          
          dataBelow.innerHTML += ` <div class="col m6 l6 s6 btnDiv">
      <button onClick="local(this)" class="btn upBtns hoverable" id="showTest">${key}</button>
  </div>`
  
        }
      })
      console.log("user is signed in")
    } else {
      loader.style.display="none";
      dataBelow.innerHTML="No user is signed in";
      console.log("no user is signed in")
    }
  });
}

// ***********LOAD CATEGORY TO LOCALSTORAGE*********** 

function local(e) {
  console.log(e.innerHTML)
  localStorage.setItem("category", JSON.stringify(e.innerHTML));

  location.assign("../Test/Test.html");
}


// ****************LOGOUT********************

function fbLogout() {
  firebase.auth().signOut().then(function () {
    location.assign('../../index.html')

  }).catch(function (error) {
    // An error happened.
  });

}

