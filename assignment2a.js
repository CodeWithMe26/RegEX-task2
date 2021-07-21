function replace() {
  const textArea = document.getElementById('text').value
  console.log(textArea)
  const firstWord = document.getElementById('word1').value
  console.log(firstWord)
  const secondWord = document.getElementById('word2').value
  console.log(secondWord)
  let newStr = textArea.replaceAll(firstWord,secondWord)
  alert(newStr)

}
