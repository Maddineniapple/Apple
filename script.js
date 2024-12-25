let stars = 0;

// Show page
function showPage(page) {
  document.querySelectorAll('.page').forEach((p) => p.classList.add('hidden'));
  document.getElementById(page).classList.remove('hidden');
}

// Start Quiz
function startQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '';
  quizContainer.classList.remove('hidden');

  let score = 0;
  const questions = [
    { question: '2 + 2 = ?', answer: '4' },
    { question: '5 + 3 = ?', answer: '8' },
    // Add more questions here
  ];

  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      <input type="text" id="answer-${index}" />
    `;
    quizContainer.appendChild(div);
  });

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.onclick = () => {
    questions.forEach((q, index) => {
      const userAnswer = document.getElementById(`answer-${index}`).value;
      if (userAnswer === q.answer) score += 0.5;
    });
    stars += score;
    alert(`You earned ${score} stars!`);
    document.getElementById('stars-count').textContent = stars;
  };
  quizContainer.appendChild(submitBtn);
}

// Redeem Stars
function redeem(type) {
  if (stars <= 0) {
    alert('Not enough stars!');
    return;
  }

  if (type === 'money') {
    alert(`Redeemed ₹${(stars * 0.5).toFixed(2)} as money!`);
  } else if (type === 'voucher') {
    alert(`Redeemed ₹${(stars * 0.5).toFixed(2)} as Amazon voucher!`);
  }

  stars = 0;
  document.getElementById('stars-count').textContent = stars;
}

