export function router() {
  const links = document.querySelectorAll('.question-link')
  const questions = document.querySelectorAll('.question-container')
  const initialContent = document.querySelector('.initial-content')
  const companyBrand = document.querySelector('.company-brand-container')
  const questionsOutput = document.querySelectorAll('.output-wrapper')

  function showContent(contentToShow) {
    if (contentToShow.classList.contains('hidden')) {
      questions.forEach(q => q.classList.add('hidden'))
      initialContent.classList.add('hidden')
      questionsOutput.forEach(qOutput => qOutput.classList.add('hidden'))
      contentToShow.classList.remove('hidden')
    }
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetQuestion = e.target.textContent

      links.forEach(l => l.classList.remove('active'))
      e.target.classList.add('active')

      const questionToShow = document.querySelector(`.question-container:nth-child(${targetQuestion.slice(1)})`)
      if (questionToShow) {
        showContent(questionToShow)
      }
    })
  })

  companyBrand.addEventListener('click', () => {
    links.forEach(link => link.classList.remove('active'))
    showContent(initialContent)
  })
}