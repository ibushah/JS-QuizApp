    
    // ******************VARIABLES****************




    // ******************LISTENERS**************





    //******************* */FUNCTIONS************************


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
            let obj=
            {
              name:user.displayName,
              email:user.email,
              url:user.photoURL,
              uid:user.uid
            }
            firebase.database().ref('students').child(user.uid).set(obj);
            localStorage.setItem("user",JSON.stringify(obj));
            // ...
            console.log(user)
           location.assign('./Pages/StudentDashboard/StudentDashboard.html')
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

    