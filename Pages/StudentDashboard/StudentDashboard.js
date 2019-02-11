    
    // ******************VARIABLES****************




    // ******************LISTENERS**************





    //******************* */FUNCTIONS************************


    function fbLogout()
    {
        firebase.auth().signOut().then(function() {
            location.assign('../../index.html')
            
          }).catch(function(error) {
            // An error happened.
          });

    }

    