    
    // ******************VARIABLES****************

    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let adminForm=document.getElementById("adminForm");
    let loader=document.getElementById("load");



    // ******************LISTENERS**************

    adminForm.addEventListener("submit",submit);



    //******************* */FUNCTIONS************************

    
    function submit(e)
    {
      e.preventDefault();
      loader.style.display="block";
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then(()=>
      {
        console.log("daaan")
        loader.style.display="none";

        location.assign("../AdminDashboard/AdminDashboard.html")
      }
      
      ).catch(error=>{
        // Handle Errors here.
        loader.style.display="none";
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage)
      });
      
    }

    function fbLogin()
    {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.setCustomParameters({
            'display': 'popup'
          });

          firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(user)
           location.assign('../StudentDashboard/StudentDashboard.html')
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });


    }

    