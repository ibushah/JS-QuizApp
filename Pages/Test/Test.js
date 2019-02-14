
// ******************VARIABLES****************
let proctKey=document.getElementById("proctKey");
let key=document.getElementById("key");
let testDiv=document.getElementById("testDiv");
let proctDiv=document.getElementById("proctDiv")
let data=[];


// ******************LISTENERS**************

window.addEventListener("load",load);
proctKey.addEventListener("click",check);

//******************* */FUNCTIONS************************

// *****************WINDOW ONLOAD***********

function load()
{
let testCat=JSON.parse(localStorage.getItem("test"));

firebase.database().ref("myQns").child(testCat).once("value",(snap)=>
{
   
    let a=snap.val();

    for(var key in a)
    {
        data.push(a[key]);
    }
    console.log(data)
})

console.log(testCat);
}


// *************PROCTORING KEY*************

function check()
{

    if(key.value==="saylani")
    {
        proctDiv.style.display="none";
        testDiv.style.display="block";

    }
    else
    {
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
  
  