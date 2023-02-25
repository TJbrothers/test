function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location="index.html";
}
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
    localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_name);
       row = "<div class = room_name' id =" + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}

      getData();

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location = "kwitter_page.html";
      }