var config = {
    apiKey: "AIzaSyBS7qyqNAIHiPYr587aJX2O9V4EWXICbXw",
    authDomain: "conatcform.firebaseapp.com",
    databaseURL: "https://conatcform.firebaseio.com",
    projectId: "conatcform",
    storageBucket: "conatcform.appspot.com",
    messagingSenderId: "673126568644"
};
firebase.initializeApp(config);

var messageRef = firebase.database().ref('message')




document.getElementById('contactform').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();
    var name = getInputValues('name')
    var company = getInputValues('company')
    var email = getInputValues('email')
    var phone = getInputValues('phone')
    var message = getInputValues('message')

    saveMessage(name, company, email, phone, message)
    document.querySelector('.alert').style.display = 'block'

    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none'
    }, 3000)
    document.getElementById('contactform').reset()
}
//function to get values
function getInputValues(id) {
    return document.getElementById(id).value;

}

function saveMessage(name, company, email, phone, message) {
    var newmessageref = messageRef.push()
    newmessageref.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}