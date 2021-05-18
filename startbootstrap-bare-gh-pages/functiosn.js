
function submit_rittes() {

    var database = firebase.database();

   // var userId=Math.random();
   
    var rittes = document.getElementById('myrittes_html').value;
    //alert(rittes);
    firebase.database().ref('data/').push({name:rittes});

    
  }