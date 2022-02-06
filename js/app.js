+function cambiarclase(){
  let sidebarnav = document.getElementsByClassName('sidebar-nav');
      sidebarnav.classlist.toggle('sidebar-nav-open');
  let menuopen = document.getElementsByClassName('menu-toggle');
      menuopen.classlist.toggle('menu-open');
}