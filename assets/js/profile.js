document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#profile-modal')

  const openModal = () => {
    modal.classList.add('active')
    document.documentElement.style.overflow = 'hidden'
  }

  const closeModal = () => {
    modal.classList.remove('active')
    document.documentElement.style.overflow = 'visible'
  }

  modal.querySelector('.modal-close')?.addEventListener('click', closeModal)
  document.querySelector('.profile-btn')?.addEventListener('click', openModal)

  let modalState = 'default'
  const profileModalForm = document.querySelector('.profile-form')
  profileModalForm?.addEventListener('submit', (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const input = form.querySelector('.cta-input')
    const button = form.querySelector('.btn-cta-submit')
    const alert = form.querySelector('.modal-alert')

    if (modalState === 'success') {
      closeModal()
      resetModal(input, button)
      modalState = 'default'
      return
    }

    input.classList.remove('alert')
    alert.style.display = 'none'

    if (input.value.trim().length === 0) {
      input.classList.add('alert')
      alert.style.display = 'block'
      return
    }

    showSuccessState(input, button)
    modalState = 'success'
  })

  const resetModal = (input, button) => {
    input.value = ''
    input.style.display = 'block'
    modal.querySelector('.cta-notices').style.display = 'block'
    modal.querySelector('.modal-content__title').textContent = 'Оставить заявĸу'
    modal.querySelector('.modal-profile__sub').textContent =
      'Исполнитель свяжется с вами напрямую'

    button.textContent = 'Отправить заявку'
  }

  const showSuccessState = (input, button) => {
    input.style.display = 'none'
    modal.querySelector('.cta-notices').style.display = 'none'
    modal.querySelector('.modal-profile__sub').textContent =
      'Исполнитель свяжется с вами в ближайшее время'
    modal.querySelector('.modal-content__title').textContent =
      'Заявка отправлена!'

    button.textContent = 'Вернуться'
  }
})
