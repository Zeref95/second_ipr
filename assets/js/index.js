const pageList = {
  'about': {
    title: {
      left: {
        h1: 'Project concept'
      },
      right: {
        p: 'The prestigious location, author\'s architecture, well-maintained closed territory and its own branched infrastructure create a unique atmosphere and the most comfortable conditions to live, create&nbsp;ad&nbsp;love.'
      }
    },
    showBlock: '#about'
  },
  'gallery': {
    title: {
      left: {
        h1: 'Gallery',
        p: 'Gallery is divided into sections according to their residences'
      },
      right: {
        p: ''
      }
    },
    showBlock: '#gallery'
  },
};
let currentPage = 'gallery';

function goToPage(pageName) {
  if (Object.prototype.hasOwnProperty.call(pageList, pageName)
  && pageName !== currentPage) {
    document.querySelector(pageList[currentPage].showBlock).style.display = 'none';
    currentPage = pageName;
    updatePage(currentPage);
  }
}

function updatePage(pageName) {
  document.querySelector('#main-title div:first-child h1').textContent
    = pageList[pageName].title.left.h1 ?? '';
  document.querySelector('#main-title div:first-child p').textContent
    = pageList[pageName].title.left.p ?? '';
  document.querySelector('#main-title div:last-child p').innerHTML
    = pageList[pageName].title.right.p ?? '';

  document.querySelector(pageList[pageName].showBlock).style.display = 'flex';

}