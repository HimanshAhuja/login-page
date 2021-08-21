var scriptURL = "https://script.google.com/macros/s/AKfycbyyDo-ItUWX2W_zZflBJVwgxaj_GV8fTyD2OlPCO5WfrSgrlTQbptPyAI9HMiRKJ2_p/exec"

var form = document.forms['google-sheet']

form.addEventListener('submit'), e=>{
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)}).then(response => document.getElementById('form_alert').innerHTML = "Data was stored").catch(error => document.getElementById("form_alert").innerHTML = "Data was not stored")
}