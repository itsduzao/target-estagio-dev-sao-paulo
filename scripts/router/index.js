export function router() {
  const links = document.querySelectorAll('.question-link')
  const questions = document.querySelectorAll('.question-container')
  const initialContent = document.querySelector('.initial-content')
  const companyBrand = document.querySelector('.company-brand-container')
  const questionsOutput = document.querySelectorAll('.output-wrapper')

  function showContent(contentToShow) {
    if (contentToShow.classList.contains('hidden')) {
      for (const q of questions) {
        q.classList.add('hidden')
      }
      initialContent.classList.add('hidden')
      for (const qOutput of questionsOutput) {
        qOutput.classList.add('hidden')
      }
      contentToShow.classList.remove('hidden')
    }
  }

  for (const link of links) {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetQuestion = e.target.textContent

      for (const l of links) {
        l.classList.remove('active')
      }
      e.target.classList.add('active')

      const questionToShow = document.querySelector(`.question-container:nth-child(${targetQuestion.slice(1)})`)
      if (questionToShow) {
        showContent(questionToShow)
      }
    })
  }

  companyBrand.addEventListener('click', () => {
    for (const link of links) {
      link.classList.remove('active')
    }
    showContent(initialContent)
  })
}