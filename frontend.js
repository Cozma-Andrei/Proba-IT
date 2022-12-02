function openForm1() {
    document.getElementById("myForm1").style.display = "block";
    document.getElementById("myForm2").style.display = "none";
  }

function openForm2() {
    if (document.getElementById("button2").innerHTML === "Delogare") {
      document.getElementById("button1").style.display = "block";
      document.getElementById("button1").innerHTML = "Logare";
      document.getElementById("button2").innerHTML = "Creare cont";
    }

    else {
      document.getElementById("myForm1").style.display = "none";
      document.getElementById("myForm2").style.display = "block";
    }
}

function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
    document.getElementById("button2").innerHTML = "Delogare";
    document.getElementById("button1").style.display = "none";
  }

function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
  }

function goToUpload() {
    document.getElementById("uploadMeme").scrollIntoView({behavior: "smooth"});
}

function giveUpCompletion1(){
  document.getElementById("myForm1").style.display = "none";
}

function giveUpCompletion2(){
  document.getElementById("myForm2").style.display = "none";
}
