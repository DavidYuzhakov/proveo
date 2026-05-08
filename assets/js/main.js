document.addEventListener('DOMContentLoaded', () => {
  const searchTabs = document.querySelector('.verification-tabs')
  const executorTabs = document.querySelector('.filter-executor')
  const cityTabs = document.querySelector('.filter-city')
  const jobTabs = document.querySelector('.filter-job')

  changeFilterTab(searchTabs)
  changeFilterTab(jobTabs)
  changeFilterTab(cityTabs)
  changeFilterTab(executorTabs)

  const showMore = document.querySelector('.show-more-btn')
  if (showMore) {
    showMore.addEventListener('click', () => {
      document.querySelector('.cards-list').insertAdjacentHTML(
        'beforeend',
        `
      <article class="card">
            <div class="card-img-container">
              <div class="card-slider">
                <img src="./assets/img/cards/1.jpg" />
                <img src="./assets/img/cards/2.jpg" />
                <img src="./assets/img/cards/3.jpg" />
              </div>
              <div class="card-badge-verified">
                <img src="./assets/icons/check.svg" alt="" />
                <span>Подтверждено заказчиком</span>
              </div>
              <div class="card-badge-photos">
                <span>+ 5 фото</span>
              </div>
              <button type="button" class="card-slide card-slide--back">
                <img src="./assets/icons/arrow-slide.svg" alt="назад" />
              </button>
              <button type="button" class="card-slide card-slide--forward">
                <img src="./assets/icons/arrow-slide.svg" alt="вперед" />
              </button>
            </div>

            <div class="card-content">
              <h3 class="card-title">
                Готовый бассейн 8×4 с подогревом <br />и подсветкой • 45 дней •
                3,2 млн ₽
              </h3>

              <div class="card-divider"></div>
              <div class="card-stats">
                <div class="stat-item">
                  <div class="stat-value">24</div>
                  <span class="stat-label">работ</span>
                </div>
                <span class="stat-dot">·</span>
                <div class="stat-item">
                  <div class="stat-value">9</div>
                  <span class="stat-label">подтверждено</span>
                </div>
                <span class="stat-dot">·</span>
                <button class="card-owner" type="button">
                  <span class="card-owner-name">Юрий Мишут</span>
                  <svg
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.48375 6.90433L13 0.977215L11.9299 -8.11411e-07L6.48294 4.95388L1.07331 0.0385556L7.026e-08 1.01245L6.48375 6.90433Z"
                    />
                  </svg>
                </button>
              </div>
              <div class="card-owner-details">
                <img src="./assets/img/avatar.png" alt="аватар" />
                <div>
                  <h5>
                    Юрий Мишут <img src="./assets/img/profi.png" alt="профи" />
                  </h5>
                  <a href="#">Перейти в профиль</a>
                  <p>
                    Занимаюсь строительством и ремонтом под ключ. Работаю с
                    проверенными материалами...
                  </p>
                </div>
              </div>
              <div class="card-tags">
                <span class="card-tag primary">Строительство</span>
                <span class="card-tag secondary">Санкт-Петербург</span>
              </div>
            </div>
          </article>
          <article class="card">
            <div class="card-img-container">
              <div class="card-slider">
                <img src="./assets/img/cards/1.jpg" />
                <img src="./assets/img/cards/2.jpg" />
                <img src="./assets/img/cards/3.jpg" />
              </div>
              <div class="card-badge-verified">
                <img src="./assets/icons/check.svg" alt="" />
                <span>Подтверждено заказчиком</span>
              </div>
              <div class="card-badge-photos">
                <span>+ 5 фото</span>
              </div>
              <button type="button" class="card-slide card-slide--back">
                <img src="./assets/icons/arrow-slide.svg" alt="назад" />
              </button>
              <button type="button" class="card-slide card-slide--forward">
                <img src="./assets/icons/arrow-slide.svg" alt="вперед" />
              </button>
            </div>

            <div class="card-content">
              <h3 class="card-title">
                Готовый бассейн 8×4 с подогревом <br />и подсветкой • 45 дней •
                3,2 млн ₽
              </h3>

              <div class="card-divider"></div>
              <div class="card-stats">
                <div class="stat-item">
                  <div class="stat-value">24</div>
                  <span class="stat-label">работ</span>
                </div>
                <span class="stat-dot">·</span>
                <div class="stat-item">
                  <div class="stat-value">9</div>
                  <span class="stat-label">подтверждено</span>
                </div>
                <span class="stat-dot">·</span>
                <button class="card-owner" type="button">
                  <span class="card-owner-name">Юрий Мишут</span>
                  <svg
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.48375 6.90433L13 0.977215L11.9299 -8.11411e-07L6.48294 4.95388L1.07331 0.0385556L7.026e-08 1.01245L6.48375 6.90433Z"
                    />
                  </svg>
                </button>
              </div>
              <div class="card-owner-details">
                <img src="./assets/img/avatar.png" alt="аватар" />
                <div>
                  <h5>
                    Юрий Мишут <img src="./assets/img/profi.png" alt="профи" />
                  </h5>
                  <a href="#">Перейти в профиль</a>
                  <p>
                    Занимаюсь строительством и ремонтом под ключ. Работаю с
                    проверенными материалами...
                  </p>
                </div>
              </div>
              <div class="card-tags">
                <span class="card-tag primary">Строительство</span>
                <span class="card-tag secondary">Санкт-Петербург</span>
              </div>
            </div>
          </article>
          <article class="card">
            <div class="card-img-container">
              <div class="card-slider">
                <img src="./assets/img/cards/1.jpg" />
                <img src="./assets/img/cards/2.jpg" />
                <img src="./assets/img/cards/3.jpg" />
              </div>
              <div class="card-badge-verified">
                <img src="./assets/icons/check.svg" alt="" />
                <span>Подтверждено заказчиком</span>
              </div>
              <div class="card-badge-photos">
                <span>+ 5 фото</span>
              </div>
              <button type="button" class="card-slide card-slide--back">
                <img src="./assets/icons/arrow-slide.svg" alt="назад" />
              </button>
              <button type="button" class="card-slide card-slide--forward">
                <img src="./assets/icons/arrow-slide.svg" alt="вперед" />
              </button>
            </div>

            <div class="card-content">
              <h3 class="card-title">
                Готовый бассейн 8×4 с подогревом <br />и подсветкой • 45 дней •
                3,2 млн ₽
              </h3>

              <div class="card-divider"></div>
              <div class="card-stats">
                <div class="stat-item">
                  <div class="stat-value">24</div>
                  <span class="stat-label">работ</span>
                </div>
                <span class="stat-dot">·</span>
                <div class="stat-item">
                  <div class="stat-value">9</div>
                  <span class="stat-label">подтверждено</span>
                </div>
                <span class="stat-dot">·</span>
                <button class="card-owner" type="button">
                  <span class="card-owner-name">Юрий Мишут</span>
                  <svg
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.48375 6.90433L13 0.977215L11.9299 -8.11411e-07L6.48294 4.95388L1.07331 0.0385556L7.026e-08 1.01245L6.48375 6.90433Z"
                    />
                  </svg>
                </button>
              </div>
              <div class="card-owner-details">
                <img src="./assets/img/avatar.png" alt="аватар" />
                <div>
                  <h5>
                    Юрий Мишут <img src="./assets/img/profi.png" alt="профи" />
                  </h5>
                  <a href="#">Перейти в профиль</a>
                  <p>
                    Занимаюсь строительством и ремонтом под ключ. Работаю с
                    проверенными материалами...
                  </p>
                </div>
              </div>
              <div class="card-tags">
                <span class="card-tag primary">Строительство</span>
                <span class="card-tag secondary">Санкт-Петербург</span>
              </div>
            </div>
          </article>
        `,
      )
      showMore.style.display = 'none'
    })
  }

  // Input
  const searchBars = document.querySelectorAll('.search-bar')

  searchBars.forEach((searchBar) => {
    const input = searchBar.querySelector('.search-bar-input')
    const clearBtn = searchBar.querySelector('.clear-btn')

    input.addEventListener('input', () => {
      clearBtn.hidden = !input.value
    })

    clearBtn.addEventListener('click', () => {
      input.value = ''
      clearBtn.hidden = true
      input.focus()
    })
  })

  // Cards
  document.querySelectorAll('.card').forEach((card) => {
    const showOwner = card.querySelector('.card-owner')
    const slider = card.querySelector('.card-slider')
    const slides = slider?.querySelectorAll('img')
    const btnNext = card.querySelector('.card-slide--forward')
    const btnPrev = card.querySelector('.card-slide--back')

    card.addEventListener('click', () => console.log('crd'))

    if (showOwner) {
      showOwner.addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()
        card.classList.toggle('owner-active')
      })
    }

    let index = 0
    const total = slides?.length

    function update() {
      slider.style.transform = `translateX(-${index * 100}%)`
    }

    btnNext?.addEventListener('click', (e) => {
      e.stopPropagation()
      e.preventDefault()
      index = (index + 1) % total
      update()
    })

    btnPrev?.addEventListener('click', (e) => {
      e.stopPropagation()
      e.preventDefault()
      index = (index - 1 + total) % total
      update()
    })
  })

  // Menu
  document.querySelector('.header-menu')?.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active')
  })

  // Filters
  const modal = document.querySelector('.modal-overlay')
  document.querySelector('.modal-close')?.addEventListener('click', () => {
    modal.classList.remove('active')
    document.body.style.overflow = 'visible'
  })

  document.querySelector('.filter-btn')?.addEventListener('click', () => {
    modal.classList.add('active')
    document.body.style.overflow = 'hidden'
  })
})

function changeFilterTab(container) {
  container.addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-chip')
    container
      .querySelectorAll('.filter-chip')
      .forEach((item) => item.classList.remove('active'))
    tab.classList.add('active')
  })
}
