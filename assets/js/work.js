document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('.work-slider-main__image')
  const thumbs = [...document.querySelectorAll('.work-slider-thumb')]
  const prevBtn = document.querySelector('.work-slide-prev')
  const nextBtn = document.querySelector('.work-slide-next')

  let currentIndex = thumbs.findIndex((thumb) =>
    thumb.classList.contains('active'),
  )

  if (currentIndex === -1) {
    currentIndex = 0
  }

  function showSlide(index) {
    currentIndex = index

    const currentThumb = thumbs[currentIndex]
    const newImageUrl = currentThumb.dataset.mainUrl
    mainImage.src = newImageUrl

    thumbs.forEach((thumb) => {
      thumb.classList.remove('active')
    })

    currentThumb.classList.add('active')
  }

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      showSlide(index)
    })
  })

  nextBtn.addEventListener('click', () => {
    const nextIndex = currentIndex + 1 >= thumbs.length ? 0 : currentIndex + 1
    showSlide(nextIndex)
  })

  prevBtn.addEventListener('click', () => {
    const prevIndex =
      currentIndex - 1 < 0 ? thumbs.length - 1 : currentIndex - 1

    showSlide(prevIndex)
  })
})
