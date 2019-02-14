

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


function logout()
{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.

    location.assign("../../index.html")
  }).catch(function(error) {
    // An error happened.
  });
}

// ***********LOAD CATEGORY TO LOCALSTORAGE*********** 

function local(e)
{
console.log(e.innerHTML)
localStorage.setItem("test",JSON.stringify(e.innerHTML));
}





  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
        