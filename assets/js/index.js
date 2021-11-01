const pageList = ['gallery', 'about'];
let currentPage = 'about';

function goToPage(pageName) {
  if (pageList.includes(pageName)
  && pageName !== currentPage) {
    document.querySelectorAll('.page-' + currentPage).forEach(el => {
      el.classList.add('d-none')
    });
    currentPage = pageName;
    document.querySelectorAll('.page-' + currentPage).forEach(el => {
      el.classList.remove('d-none')
    });
  }
}