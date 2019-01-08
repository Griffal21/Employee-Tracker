// init firebase
var config = {
  apiKey: "AIzaSyBv3bP5jX0v9sSdQtPtsvzMJKRLtuILWx8",
  authDomain: "classwork-6401f.firebaseapp.com",
  databaseURL: "https://classwork-6401f.firebaseio.com",
  projectId: "classwork-6401f",
  storageBucket: "classwork-6401f.appspot.com",
  messagingSenderId: "964588687299"
};
firebase.initializeApp(config);
// save firebase database reference
db = firebase.database();
// add event listener for form submit
$("#submit-btn").on("click", function (event) {
  event.preventDefault();
  var employeeData = {
    name: $("#name-input").val().trim(),
    role: $("#role-input").val().trim(),
    startDate: $("#start-input").val(),
    rate: parseInt($("#rate-input").val())
  };
  db.ref().push({
    employeeData: employeeData
  });
  console.log(employeeData);
});