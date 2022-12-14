function openForm1() {
  document.getElementById("myForm1").style.display = "block";
  document.getElementById("myForm2").style.display = "none";
}

function openForm2() {
  if (document.getElementById("button2").innerHTML === "Delogare")
    window.location.reload();

  else {
    document.getElementById("myForm1").style.display = "none";
    document.getElementById("myForm2").style.display = "block";
  }
}

function modifyLabels() {
  event.preventDefault();
  document.getElementById("myForm1").style.display = "none";
  document.getElementById("button2").innerHTML = "Delogare";
  document.getElementById("button1").style.display = "none";
}

function closeCreateForm() {
  document.getElementById("myForm2").style.display = "none";
}

function giveUpCompletion1() {
  document.getElementById("myForm1").style.display = "none";
}

function giveUpCompletion2() {
  document.getElementById("myForm2").style.display = "none";
}

function alertNotLoggedIn() {
  if (document.getElementById("button2").innerHTML === "Creare cont")
    alert("Te rugăm să te autentifici înainte să trimiți un meme!");
  else
    alert("Meme-ul a fost trimis cu succes!");
}
