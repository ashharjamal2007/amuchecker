const questions = [
  { qno: 1, answer: 'C' }, { qno: 2, answer: 'B' }, { qno: 3, answer: 'A' },
  { qno: 4, answer: 'D' }, { qno: 5, answer: 'D' }, { qno: 6, answer: 'A' },
  { qno: 7, answer: 'B' }, { qno: 8, answer: 'C' }, { qno: 9, answer: 'B' },
  { qno: 10, answer: 'B' }, { qno: 11, answer: 'C' }, { qno: 12, answer: 'A' },
  { qno: 13, answer: 'D' }, { qno: 14, answer: 'D' }, { qno: 15, answer: 'A' },
  { qno: 16, answer: 'B' }, { qno: 17, answer: 'B' }, { qno: 18, answer: 'D' },
  { qno: 19, answer: 'B' }, { qno: 20, answer: 'C' }, { qno: 21, answer: 'B' },
  { qno: 22, answer: 'C' }, { qno: 23, answer: 'A' }, { qno: 24, answer: 'A' },
  { qno: 25, answer: 'B' }, { qno: 26, answer: 'B' }, { qno: 27, answer: 'B' },
  { qno: 28, answer: 'B' }, { qno: 29, answer: 'A' }, { qno: 30, answer: 'A' },
  { qno: 31, answer: 'B' }, { qno: 32, answer: 'B' }, { qno: 33, answer: 'C' },
  { qno: 34, answer: 'C' }, { qno: 35, answer: 'B' }, { qno: 36, answer: 'A' },
  { qno: 37, answer: 'C' }, { qno: 38, answer: 'C' }, { qno: 39, answer: 'B' },
  { qno: 40, answer: 'D' }, { qno: 41, answer: 'B' }, { qno: 42, answer: 'C' },
  { qno: 43, answer: 'A' }, { qno: 44, answer: 'D' }, { qno: 45, answer: 'A' },
  { qno: 46, answer: 'A' }, { qno: 47, answer: 'D' }, { qno: 48, answer: 'A' },
  { qno: 49, answer: 'C' }, { qno: 50, answer: 'C' }, { qno: 51, answer: 'C' },
  { qno: 52, answer: 'A' }, { qno: 53, answer: 'D' }, { qno: 54, answer: 'B' },
  { qno: 55, answer: 'C' }, { qno: 56, answer: 'C' }, { qno: 57, answer: 'B' },
  { qno: 58, answer: 'B' }, { qno: 59, answer: 'B' }, { qno: 60, answer: 'D' },
  { qno: 61, answer: 'B' }, { qno: 62, answer: 'C' }, { qno: 63, answer: 'B' },
  { qno: 64, answer: 'B' }, { qno: 65, answer: 'C' }, { qno: 66, answer: 'D' },
  { qno: 67, answer: 'C' }, { qno: 68, answer: 'A' }, { qno: 69, answer: 'C' },
  { qno: 70, answer: 'C' }, { qno: 71, answer: 'D' }, { qno: 72, answer: 'A' },
  { qno: 73, answer: 'C' }, { qno: 74, answer: 'B' }, { qno: 75, answer: 'A' },
  { qno: 76, answer: 'A' }, { qno: 77, answer: 'D' }, { qno: 78, answer: 'A' },
  { qno: 79, answer: 'C' }, { qno: 80, answer: 'D' }, { qno: 81, answer: 'B' },
  { qno: 82, answer: 'C' }, { qno: 83, answer: 'C' }, { qno: 84, answer: 'B' },
  { qno: 85, answer: 'D' }, { qno: 86, answer: 'D' }, { qno: 87, answer: 'C' },
  { qno: 88, answer: 'B' }, { qno: 89, answer: 'C' }, { qno: 90, answer: 'D' },
  { qno: 91, answer: 'C' }, { qno: 92, answer: 'B' }, { qno: 93, answer: 'C' },
  { qno: 94, answer: 'D' }, { qno: 95, answer: 'D' }, { qno: 96, answer: 'C' },
  { qno: 97, answer: 'B' }, { qno: 98, answer: 'C' }, { qno: 99, answer: 'C' },
  { qno: 100, answer: 'C' }
];

function createQuestions() {
  const questionContainer = document.getElementById('questions');
  questions.forEach((question) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `
      <p><b>Question ${question.qno}:</b></p>
      <label><input type="radio" name="q${question.qno}" value="A" > A</label>
      <label><input type="radio" name="q${question.qno}" value="B" > B</label>
      <label><input type="radio" name="q${question.qno}" value="C" > C</label>
      <label><input type="radio" name="q${question.qno}" value="D" > D</label>
    `;
    questionContainer.appendChild(questionElement);
  });
}

function calculateMarks() {
  let totalMarks = 0;
  questions.forEach((question) => {
    const selectedOption = document.querySelector(`input[name="q${question.qno}"]:checked`);
    if (selectedOption) {
      const userAnswer = selectedOption.value;
      if (userAnswer === question.answer) {
        totalMarks += 1; // 1 mark for correct answer
      } else {
        totalMarks -= 0.25; // -0.25 for incorrect answer
      }
    }
  });
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Your total marks: ${totalMarks}`;
}

createQuestions();
