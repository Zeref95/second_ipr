let oneStep = 500; // if you gonna change this, change --one-step in animation.css as well

const pageList = {
    'about': {
        mainPageName: 'about',
        index: 0
    },
    'gallery': {
        mainPageName: 'gallery',
        index: 1
    },
    'big-photo': {
        mainPageName: 'gallery',
        index: 1
    },
}
let currentPage = 'about';
let canChangePage = true;

const closeClasses = {
    'show-image-about': 'hide-image-about',
    'get-from-top': 'hide-to-top',
    'show-footer': 'hide-footer',
    'get-from-bottom': 'hide-to-bottom',
    'need-hide-momentarily': 'hide-momentarily',
    'show-big-photo': 'hide-big-photo'
}

function $All(str) {
    return document.querySelectorAll(str);
}

function goToPage(pageName) {
    if (pageList.hasOwnProperty(pageName)
        && pageName !== currentPage
        && canChangePage) {
        if (pageName === pageList[pageName].mainPageName) {
            manageNavAnimation(currentPage, pageName);
        }
        manageCloseClasses('add');

        setTimeout(() => {
            $All('.page-' + currentPage).forEach(el => {
                el.classList.add('d-none')
            });
            currentPage = pageName;
            $All('.page-' + currentPage).forEach(el => {
                el.classList.remove('d-none')
            });

            manageCloseClasses('remove')
        }, oneStep)
    }
}

function manageCloseClasses(doing) {
    for (let className in closeClasses) {
        $All('.' + className).forEach(el => {
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

async function manageNavAnimation(currentPage, targetPage) {
    let currentIndex = pageList[currentPage].index;
    let targetIndex = pageList[targetPage].index;

    if (currentIndex < targetIndex) {
        let currentNav = document.querySelector(`nav ul li:nth-child(${currentIndex + 1})`);
        let targetNav = document.querySelector(`nav ul li:nth-child(${currentIndex + 1 + 1})`);
        currentNav.classList.add('nav-active-hide-to-right');
        targetNav.classList.add('nav-active')
        targetNav.classList.add('nav-active-show-from-left');
        setTimeout(() => {
            currentNav.classList.remove('nav-active')
            targetNav.classList.remove('nav-active-show-from-left');
            currentNav.classList.remove('nav-active-hide-to-right');
            canChangePage = true;
        }, oneStep)

    } else if (currentIndex > targetIndex) {
        let currentNav = document.querySelector(`nav ul li:nth-child(${currentIndex + 1})`);
        let targetNav = document.querySelector(`nav ul li:nth-child(${currentIndex + 1 - 1})`);
        currentNav.classList.add('nav-active-hide-to-left');
        targetNav.classList.add('nav-active')
        targetNav.classList.add('nav-active-show-from-right');
        setTimeout(() => {
            currentNav.classList.remove('nav-active-hide-to-left');
            currentNav.classList.remove('nav-active')
            targetNav.classList.remove('nav-active-show-from-right');
            canChangePage = true;
        }, oneStep)
    }
}