window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar1").style.padding = "1.5%";
    document.getElementById("navbar2").style.padding = "0.5% 2%";
    
  } else {
    document.getElementById("navbar1").style.padding = "4.5%";
    document.getElementById("navbar2").style.padding = "2.5% 3%";

  }
}