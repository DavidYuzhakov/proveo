document.addEventListener('DOMContentLoaded', () => {
  // Sorting
  const sortBtn = document.querySelector('.search-sorting button')
  const searchSorting = document.querySelector('.search-sorting')
  const sortingList = document.querySelector('.search-sorting-list')

  sortBtn?.addEventListener('click', (e) => {
    searchSorting.classList.toggle('active')
  })

  sortingList?.addEventListener('click', (e) => {
    const liElement = e.target.closest('li')
    if (liElement) {
      sortBtn.querySelector('span').textContent = liElement.textContent
      searchSorting.classList.remove('active')
    }
  })

  // Not found
  if (window.innerWidth < 768) {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.search-not-found__info')) {
        document
          .querySelector('.search-not-found__message')
          .classList.toggle('active')
      } else {
        document
          .querySelector('.search-not-found__message')
          ?.classList.remove('active')
      }
    })
  }
})
