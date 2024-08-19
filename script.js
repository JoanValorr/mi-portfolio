function toggleTexto(boton) {
    const contenidoMas = boton.previousElementSibling;
  
    if (contenidoMas.style.display === "none" || contenidoMas.style.display === "") {
      contenidoMas.style.display = "block";
      boton.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'; // Cambia a flecha hacia arriba
    } else {
      contenidoMas.style.display = "none";
      boton.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'; // Cambia a flecha hacia abajo
    }
  }