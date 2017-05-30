// Initialize Firebase
//  const config = {
//    apiKey: "AIzaSyA2Hj-9in0ZasslwqmrAzD0oNZ0cbNRDt0",
//    authDomain: "thriivewebapp.firebaseapp.com",
//    databaseURL: "https://thriivewebapp.firebaseio.com",
//    storageBucket: "thriivewebapp.appspot.com",
//    messagingSenderId: "900246792937",
//  };
    
  // var config = {
  //   apiKey: "AIzaSyDAUaD4c42VIY4fYh0xY2A2XeLSCGzXMEA",
  //   authDomain: "thriivedev-9673e.firebaseapp.com",
  //   databaseURL: "https://thriivedev-9673e.firebaseio.com",
  //   storageBucket: "thriivedev-9673e.appspot.com",
  //   messagingSenderId: "298345158344"
  // };

  //firebase.initializeApp(config);

    //Get elements
    const btnLogout1 = document.getElementById('btnLogout');
            
    btnLogout1.addEventListener('click', e => {
        firebase.auth().signOut();
        btnLogout1.style.visibility = "hidden";
        document.location="/index.html";
    });