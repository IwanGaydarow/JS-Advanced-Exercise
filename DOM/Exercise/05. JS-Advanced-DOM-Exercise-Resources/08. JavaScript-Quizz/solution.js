function solve() {
  let rightAnswer = 0;
  let curStep = 0;

  let answer = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  let quizzie = document.getElementById('quizzie');
  let sections = document.getElementsByTagName('section');
  let resulSection = document.querySelector('#results');
  let resultFild = document.querySelector('.results-inner h1');

  quizzie.addEventListener('click', (e) => {
    if(e.target.className === 'answer-text'){
      if(answer.includes(e.target.innerHTML)){
        rightAnswer++;
      }

      sections[curStep].style.display = 'none';

      curStep++;
      if (curStep < sections.length) {
        sections[curStep].style.display = 'block';
      } else {
          resultFild.textContent = rightAnswer === answer.length ? 'You are recognized as top JavaScript fan!' :
          'You have ' + rightAnswer + ' right answers';
          resulSection.style.display = 'block';
      }
    }
  })
}
