
// Funcion Para activar barra lateral 

document.addEventListener('DOMContentLoaded', function () {
    // Obtén el div clickeable
    var detonador = document.getElementById('menuResponsive');
  
    // Agrega un evento de clic al div clickeable
    detonador.addEventListener('click', function () {
      // Obtén el div objetivo
      var barralateral = document.getElementById('sideNavBar');
  
      // Inyecta propiedades CSS sobre el div objetivo
      barralateral.style.left = '0px';
      
    });
  });

// Funcion para desactivar barra lateral 

document.addEventListener('DOMContentLoaded', function () {
    // Obtén el div clickeable
    var detonador = document.getElementById('closeNavBar');
  
    // Agrega un evento de clic al div clickeable
    detonador.addEventListener('click', function () {
      // Obtén el div objetivo
      var barralateral = document.getElementById('sideNavBar');
  
      // Inyecta propiedades CSS sobre el div objetivo
      barralateral.style.left = '100vw';
      
    });
  });


  
// function esconderHeader () {

//   let ubicacionPrincipal = window.pageYOffset;
//   window.onscroll = function () {
//       let desplazamiento = window.pageYOffset; 
//       if (ubicacionPrincipal >= desplazamiento) {
//           document.getElementById('header').style.top = "0";
          
//       }
//       else {
//           document.getElementById('header').style.top = "-110px";
//       }

//       ubicacionPrincipal = desplazamiento;
// }
// } 
