//funtion to open the side menu if closed and close if open (toggle effect)
let openCloseMenu = () => {
  if (document.getElementById("menu_box").style.marginLeft == "270px"){ //if side menu already open:
    document.getElementById("myMenu").style.width = "0"; //hide side menu by decreasing width to zero
    document.getElementById("menu_box").style.marginLeft = "20px"; //move the menu box back to starting position
  } else {
    document.getElementById("myMenu").style.width = "250px"; //otherwise display side menu by changing the wisth to 250px
    document.getElementById("menu_box").style.marginLeft = "270px"; // menu box stays at 20px distance from the left as well as the menu when it opens
  }
}

document.getElementById("menu_box").addEventListener('click', openCloseMenu) //run the openCloseMenu function when mouse is clicked on menu_box
