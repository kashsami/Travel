 
    // ********** side menu bar js*********** 
  
 let menuItems = document.getElementById("menuItems");

 menuItems.style.maxHeight = "0px";

 function menutoggle() {
  if (menuItems.style.maxHeight == "0px")
     {
      menuItems.style.maxHeight = "200px";
  }
  else {
    menuItems.style.maxHeight = "0px";
  }
 }

    //  **** place gallery all place details ****

    let Placeimg = document.getElementById("Placeimg");
    let smallimg = document.getElementsByClassName("small-img");

    smallimg[0].onclick = function() 
    {
     Placeimg.src = smallimg[0].src;
    }
   smallimg[1].onclick = function() 
    {
     Placeimg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function() 
    {
     Placeimg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function() 
    {
     Placeimg.src = smallimg[3].src;
    }


    // *****contact form js toggle form****


    let loginForm = document.getElementById("loginForm");
  let Indicator = document.getElementById("Indicator");

  function login(){
    loginForm.style.transform = "translateX(300px)"
  }
   