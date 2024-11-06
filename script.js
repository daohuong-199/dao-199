
var StateManager = {
    isFullScreen: false,
    bgColor: "#fff",
    textColor: "#000"
  };

  function toggleFullScreen() {var elem = document.documentElement;
    var requestFullScreen = elem.requestFullscreen || elem.mozRequestFullScreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
    var fullscreenDiv = document.getElementById("full-screen");
    var fullscreenIcon = document.getElementById("fullscreen-icon");

    if (!StateManager.isFullScreen) {
      // Chuyển vào chế độ toàn màn hình
      if (requestFullScreen) {
        requestFullScreen.call(elem);
      }
      fullscreenDiv.classList.add("active");
      fullscreenIcon.classList.remove("fa-expand");
      fullscreenIcon.classList.add("fa-compress");
      StateManager.isFullScreen = true;
    } else {
      // Thoát khỏi chế độ toàn màn hình
      var exitFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
      if (exitFullScreen) {
        exitFullScreen.call(document);
      }
      fullscreenIcon.classList.remove("fa-compress");
      fullscreenIcon.classList.add("fa-expand");
      StateManager.isFullScreen = false;
    }

    // Cập nhật màu chữ trong chế độ fullscreen
    if (StateManager.isFullScreen) {
      document.getElementById("fullscreen-text-content").style.backgroundColor = StateManager.bgColor; 
      document.getElementById("fullscreen-text-content").style.color = StateManager.textColor; 
    } else {
      document.body.style.backgroundColor = StateManager.bgColor; 
      document.body.style.color = StateManager.textColor; 
    }
  }

/**********/

  function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("BODY")[0].style. backgroundColor=b;
  }



  /*******************/

  function changeSize(x){
    var font = window.getComputedStyle(document.getElementById("text")). fontSize; // getting font size
    font = font.replace(/\D/g,''); // removing 'px' from font size
    font = Number (font) ;
    if(x == 1) {
    font = font+1;
    document.getElementById('text').style.fontSize = font + 'px';
    }
  else{
    font = font-1;
    document.getElementById('text').style.fontSize = font + 'px';
  }
}


function myFunction(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("text").style.fontFamily = listValue;
}