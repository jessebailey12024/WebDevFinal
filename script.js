function handleVote(button, voteType) {
  const container = button.closest('.vote-container');
  const upBtn = container.querySelector('.upvote');
  const downBtn = container.querySelector('.downvote');
  const scoreDisplay = container.querySelector('.score');
  
  let score = parseInt(scoreDisplay.innerText);
  let currentVote = parseInt(container.getAttribute('data-vote') || 0);

  if (currentVote === voteType) {
    score -= voteType;
    currentVote = 0;
  } else {

    score = score - currentVote + voteType;
    currentVote = voteType;
  }
  scoreDisplay.innerText = score;
  container.setAttribute('data-vote', currentVote);
  upBtn.classList.toggle('upvoted', currentVote === 1);
  downBtn.classList.toggle('downvoted', currentVote === -1);
}