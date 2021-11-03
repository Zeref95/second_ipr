const pageList = ['gallery', 'about', 'big-photo'];
let currentPage = 'about';

const closeClasses = {
  'show-image-about' : 'hide-image-about',
  'get-from-top' : 'hide-to-top',
  'show-footer': 'hide-footer',
  'get-from-bottom': 'hide-to-bottom',
  'need-hide-momentarily': 'hide-momentarily'
}

function $All(str) {
  return document.querySelectorAll(str);
}

function goToPage(pageName) {
  if (pageList.includes(pageName)
  && pageName !== currentPage) {
    manageCloseClasses('add')

    setTimeout(() => {
      $All('.page-' + currentPage).forEach(el => {
        el.classList.add('d-none')
      });
      currentPage = pageName;
      $All('.page-' + currentPage).forEach(el => {
        el.classList.remove('d-none')
      });

      manageCloseClasses('remove')
    }, 500)
  }
}

function manageCloseClasses(doing) {
  for (let className in closeClasses) {
    $All('.'+className).forEach(el => {
      if (doing === 'add') {
        let delay = el.dataset.delayHide ?? 0;
        setTimeout(() => {
          el.classList.add(closeClasses[className]);
        }, delay * 100)

      } else if (doing === 'remove') {
          el.classList.remove(closeClasses[className]);
      }
    })
  }
}