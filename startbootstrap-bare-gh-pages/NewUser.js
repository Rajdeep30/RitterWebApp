
document.getElementById('logBtn').addEventListener('click', function(){
var userid=document.getElementById('fname_x').value;
var secretkey=document.getElementById('key').value;

firebase.auth().signInWithEmailAndPassword(userid, secretkey);
alert('You are signed in with user id'+ userid);

})

document.getElementById('submitBtn').addEventListener('click', function(){
    var email=document.getElementById('email').value;
    var name=document.getElementById('fname_y').value;
    var pass=document.getElementById('password').value;
    var confirmpass=document.getElementById('confirmpass').value;

    firebase.auth().createUserWithEmailAndPassword(email, pass);
    push2db(email, name, pass, confirmpass);
    alert('Name Entered is'+ name +','+ email +','+ pass +','+ confirmpass);
})

function push2db(email_, name_, pass_, confirm_)
{
   
        firebase.database().ref('users/' + name).push({
          username_db: name_,
          email_db: email_,
          password_db : pass_
        });
     
}
