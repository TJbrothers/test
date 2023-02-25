const firebaseConfig = {
    apiKey: "AIzaSyBraVtM5y08WI7o9V5nW7FVkC9Pszt4-no",
    authDomain: "schoole-chat.firebaseapp.com",
    databaseURL: "https://schoole-chat-default-rtdb.firebaseio.com",
    projectId: "schoole-chat",
    storageBucket: "schoole-chat.appspot.com",
    messagingSenderId: "97603208363",
    appId: "1:97603208363:web:547d6ce3553f813835a3ee"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
      function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();