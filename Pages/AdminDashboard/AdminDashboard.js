
// ********************VARIABLES***************

let testHead=document.getElementById("testHead");
let showTest=document.getElementById("showTest");
let showScore=document.getElementById("showScore");



// ***********************EVENT LISTENERS*********************

showTest.addEventListener("click",()=>
{
    testHead.style.display="block";
})

showScore.addEventListener("click",()=>
{
    testHead.style.display="none";
})


// ************************FUNCTIONS******************











// *************JQUERY*****************

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
        