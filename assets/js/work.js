document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('.work-slider-main__image')
  const thumbs = document.querySelectorAll('.work-slider-thumb')
  const prevBtn = document.querySelector('.work-slide-prev')
  const nextBtn = document.querySelector('.work-slide-next')

  let currentIndex = 0

  // Массив картинок
  const images = [
    './assets/img/work/1.png',
    './assets/img/work/2.png',
    './assets/img/work/3.png',
    './assets/img/work/4.png',
  ]

  function showSlide(index) {
    currentIndex = index

    console.log(mainImage)
    mainImage.src = images[currentIndex]
    console.log(mainImage)

    thumbs.forEach((thumb) => {
      thumb.classList.remove('active')
    })

    // Добавляем active текущему
    thumbs[currentIndex].classList.add('active')
  }

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      showSlide(index)
    })
  })

  nextBtn.addEventListener('click', () => {
    currentIndex++

    // Если последний — идем в начало
    if (currentIndex >= images.length) {
      currentIndex = 0
    }

    showSlide(currentIndex)
  })

  prevBtn.addEventListener('click', () => {
    currentIndex--

    if (currentIndex < 0) {
      currentIndex = images.length - 1
    }

    showSlide(currentIndex)
  })
})
