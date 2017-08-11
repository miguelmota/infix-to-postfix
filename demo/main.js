var input = document.querySelector('#input')
var output = document.querySelector('#output')
var form = document.querySelector('#form')

var defaultInput = '((3 * 4) / (2 + 5)) * (3 + 4)'

input.value = localStorage.getItem('itp_input') || defaultInput

form.addEventListener('submit', function(event) {
  event.preventDefault()

  calculate()
})

function calculate() {
  var value = input.value
  var result = infixToPostfix(value)
  output.innerHTML = ''

  if (result) {
    output.innerHTML = result
  }

  localStorage.setItem('itp_input', value)
}

calculate()
