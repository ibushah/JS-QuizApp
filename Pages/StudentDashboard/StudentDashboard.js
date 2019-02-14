
// ******************VARIABLES****************

let dataBelow = document.getElementById("dataBelow");



// ******************LISTENERS**************

window.addEventListener("load", loadCategories);



//******************* */FUNCTIONS************************


function loadCategories() {
  dataBelow.innerHTML = "";
  firebase.database().ref('myQns').once("value", (snap) => {

    for (var key in snap.val()) {
      console.log(key)
      dataBelow.innerHTML += ` <div class="col m6 l6 s6 btnDiv">
      <button onClick="local(this)" class="btn upBtns hoverable" id="showTest">${key}</button>
  </div>`
    }
  })
}

// ***********LOAD CATEGORY TO LOCALSTORAGE*********** 

function local(e)
{
console.log(e.innerHTML)
localStorage.setItem("category",JSON.stringify(e.innerHTML));
}


// ****************LOGOUT********************

function fbLogout() {
  firebase.auth().signOut().then(function () {
    location.assign('../../index.html')

  }).catch(function (error) {
    // An error happened.
  });

}

