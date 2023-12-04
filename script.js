const targetDate = new Date('2024-01-07T00:00:00').getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}


setInterval(updateCountdown, 1000);

const carouselContent = document.querySelector(".carousel-content");
const images = document.querySelectorAll(".carousel-content img");

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContent.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 3000);


document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.querySelector(".asistencia-select");
    const select2 = document.querySelector(".cantidad-select");
    const labelCanto=document.querySelector(".label-selecCant");
    const button=document.querySelector(".button-confirmacion");
    selectElement.addEventListener("change", function() {
        const selectedIndex = selectElement.selectedIndex;
        console.log("Índice seleccionado: " + selectedIndex);
        if (selectedIndex  === 1) {
            labelCanto.style.display="block";
            select2.style.display = "block";
            button.style.display="block";
          } else {
            labelCanto.style.display="none";
            select2.style.display = "none";
            button.style.display="none";
            invitadosContainer.innerHTML = "";
          }
    });
var invitadosContainer = document.getElementById("invitados-container");
select2.addEventListener("change", function () {
    var cantidadInvitados = parseInt(select2.value);
    // Limpia el contenedor antes de agregar nuevos inputs
    invitadosContainer.innerHTML = "";
    // Agrega los inputs de texto según la cantidad seleccionada
    for (var i = 0; i < cantidadInvitados; i++) {
      var input = document.createElement("input");
      input.type = "text";
      input.name="nombreYapellido";
      input.id="nombreYapellido";
      input.placeholder = "Nombre y Apellido invitado" + (i + 1);
      invitadosContainer.appendChild(input);
    }
    button.style.display="block";
  });
});

const formElement =document.getElementById('saveInvitados');

/*formElement.addEventListener("submit",(event)=>{
  event.preventDefault();
  let invitado
  invitado=document.getElementById("nombreYapellido").value;
  let invitados={NombreYApellido: invitado}
  let invitadoJson=JSON.stringify(invitados)
 

  console.log(invitadoJson);
  fetch('http://localhost:3000/proceso',{
    mode:"no-cors",
    method: 'Post',
    body: invitadoJson
  })
})*/