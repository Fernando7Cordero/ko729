
document.addEventListener("DOMContentLoaded", function () {


  var idActive = ["banner1", "banner2", "banner3", "banner4"];

  var i = 0;
  function ejecutarBucle() {
    if (i < idActive.length) {
      var bannerOff = document.getElementById(idActive[i]);
      bannerOff.style.opacity = '0';

      if (i == 3) {
        var bannerON = document.getElementById(idActive[0]);

        bannerON.style.opacity = '1';

      }
     
      i++;
    } else {

      var bannerElements = document.querySelectorAll(".banner_element");

      bannerElements.forEach(function (element) {
        element.style.opacity = '1';
      });

      i = 0;
    }
  }


  // Ejecuta el bucle cada 5 segundos
  setInterval(ejecutarBucle, 5000);



});

