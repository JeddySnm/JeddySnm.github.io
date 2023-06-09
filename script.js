function mostrarImagen(event) {
    var imagen = document.getElementById('preview');
    var imagenOriginal;

    imagen.src = URL.createObjectURL(event.target.files[0]);
    imagen.onload = function() {
        imagen.style.display = 'inline'; 
        URL.revokeObjectURL(imagen.src);
        recurso.style.display = 'none';

        aplicarFiltroYFondo(imagen);
    }
  }
  
  function aplicarFiltroYFondo(imagen) {
    var seccion = document.getElementById('storieSeccion');
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    
    canvas.width = imagen.width;
    canvas.height = imagen.height;
    
    context.filter = 'blur(10px)';
    context.drawImage(imagen, 0, 0, canvas.width, canvas.height);
    
    seccion.style.backgroundImage = 'url(' + canvas.toDataURL() + ')';
  }