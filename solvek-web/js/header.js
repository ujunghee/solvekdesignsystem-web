const headerNav = document.querySelector('.header-nav');
const headerDrawer = document.getElementById('header-drawer');
const searchPanel = document.getElementById('header-search-panel');
const searchOpenBtn = document.querySelector('[data-header-search-open]');
const searchInput = document.getElementById('header-search-input');
const searchEmpty = document.querySelector('[data-header-search-empty]');
const searchRecentList = document.querySelector('[data-header-search-recent-list]');
const drawerOpenBtn = document.querySelector('[data-header-drawer-open]');

// GNB
document.querySelectorAll('[data-header-nav-toggle]').forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = trigger.closest('.header-nav__item');
    const isOpen = item.classList.contains('active');
    closeNavItems();
    if (!isOpen) {
      item.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

function closeNavItems() {
  document.querySelectorAll('.header-nav__item.active').forEach((item) => {
    item.classList.remove('active');
    item.querySelector('[data-header-nav-toggle]')?.setAttribute('aria-expanded', 'false');
  });
}

// 통합검색
function openSearch() {
  closeNavItems();
  searchPanel.hidden = false;
  searchOpenBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  searchInput.focus();
}

function closeSearch() {
  searchPanel.hidden = true;
  searchOpenBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  searchOpenBtn.focus();
}

searchOpenBtn?.addEventListener('click', openSearch);
document.querySelectorAll('[data-header-search-close]').forEach((btn) => btn.addEventListener('click', closeSearch));

function syncSearchEmpty() {
  const hasItems = searchRecentList?.children.length > 0;
  searchRecentList?.classList.toggle('hidden', !hasItems);
  searchEmpty?.classList.toggle('hidden', hasItems);
}

document.querySelector('[data-header-search-clear]')?.addEventListener('click', () => {
  searchRecentList.innerHTML = '';
  syncSearchEmpty();
});

searchRecentList?.addEventListener('click', (e) => {
  e.target.closest('[data-header-search-recent-remove]')?.closest('li')?.remove();
  syncSearchEmpty();
});

syncSearchEmpty();

// 드로어
function openDrawer() {
  headerDrawer.classList.add('active');
  drawerOpenBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  headerDrawer.classList.remove('active');
  drawerOpenBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

drawerOpenBtn?.addEventListener('click', openDrawer);
document.querySelectorAll('[data-header-drawer-close]').forEach((btn) => btn.addEventListener('click', closeDrawer));

document.querySelectorAll('.header-drawer__menu-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const item = toggle.closest('.header-drawer__menu-item');
    const isOpen = item.classList.toggle('active');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

// 공통
document.addEventListener('click', (e) => {
  if (headerNav && !headerNav.contains(e.target)) closeNavItems();
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!searchPanel.hidden) { closeSearch(); return; }
  if (headerDrawer.classList.contains('active')) { closeDrawer(); return; }
  closeNavItems();
});
