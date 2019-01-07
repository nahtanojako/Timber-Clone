(function(){
  let navbarToggler = document.querySelector('.navbar-toggler');
  let navbarCollapse = document.querySelector('.navbar-collapse');

  function navbarCollapseShow() {
    navbarCollapse.classList.toggle('show');
  }

  navbarToggler.addEventListener('click', navbarCollapseShow);
  window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');
    let offsetTop = window.pageYOffset;
    if (offsetTop >= 200) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  })
})()