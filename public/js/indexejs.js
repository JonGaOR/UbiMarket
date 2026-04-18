document.addEventListener('DOMContentLoaded', () => {

  const btnAmburguesa = document.getElementById('menu-amburguesa');
  const menuMovil = document.getElementById('menu-movil');

  const iconoAmburguesa = document.getElementById('hamburger-icon');
  const cerrarIcono = document.getElementById('close-icon');

  function abrirMenu() {
    const menuAbierto = menuMovil.classList.toggle('show');
    
    // Alternar iconos SVG
    if (menuAbierto) {
      btnAmburguesa.classList.add('active');
    } else {
      btnAmburguesa.classList.remove('active');
    }
  }

  // Click en hamburguesa
  btnAmburguesa.addEventListener('click', abrirMenu);

  // Cerrar menú al pulsar un enlace
  document.querySelectorAll('.pag-movil').forEach(link => {
    link.addEventListener('click', () => {
      if (menuMovil.classList.contains('show')) {
        abrirMenu();
      }
    });
  });

  // Cerrar menú al hacer clic fuera del header
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && menuMovil.classList.contains('show')) {
      abrirMenu();
    }
  });

});
