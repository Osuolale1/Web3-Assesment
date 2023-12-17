const quizData = [
    {
      question: "What does Web3 refer to?",
      options: ["The third version of the World Wide Web", "A decentralized and trustless internet", "The latest web development framework"],
      correctAnswer: "A decentralized and trustless internet"
    },
    {
      question: "Which blockchain is commonly associated with Web3?",
      options: ["Ethereum", "Bitcoin", "Ripple"],
      correctAnswer: "Ethereum"
    },
    {
      question: "What is a smart contract in the context of Web3?",
      options: ["A legally binding document", "A self-executing contract with the terms of the agreement directly written into code", "A contract signed using a digital signature"],
      correctAnswer: "A self-executing contract with the terms of the agreement directly written into code"
    },
    {
      question: "Which programming language is commonly used for writing smart contracts on the Ethereum blockchain?",
      options: ["JavaScript", "Solidity", "Python"],
      correctAnswer: "Solidity"
    },
    {
      question: "What is a decentralized application (DApp) in Web3?",
      options: ["An application that runs on a single centralized server", "An application that uses decentralized technologies like blockchain", "An application with no user interface"],
      correctAnswer: "An application that uses decentralized technologies like blockchain"
    },
    {
      question: "What is the role of a decentralized autonomous organization (DAO) in Web3?",
      options: ["Managing centralized databases", "Facilitating peer-to-peer transactions", "Governance and decision-making through smart contracts"],
      correctAnswer: "Governance and decision-making through smart contracts"
    },
    {
      question: "What is IPFS (InterPlanetary File System) in the context of Web3?",
      options: ["A new internet protocol", "A peer-to-peer hypermedia protocol", "A programming language for smart contracts"],
      correctAnswer: "A peer-to-peer hypermedia protocol"
    },
    {
      question: "What is the primary goal of Web3 technologies?",
      options: ["Enhancing website design", "Decentralizing control and ownership", "Improving internet speed"],
      correctAnswer: "Decentralizing control and ownership"
    },
    {
      question: "What is a wallet address in the context of Web3?",
      options: ["The physical location of a cryptocurrency wallet", "A unique identifier for a wallet on the blockchain", "The password to access a wallet"],
      correctAnswer: "A unique identifier for a wallet on the blockchain"
    },
    {
      question: "What is the role of a blockchain node in Web3?",
      options: ["A user interface for decentralized applications", "A device for storing cryptocurrency", "A participant in the distributed network, validating and storing transactions"],
      correctAnswer: "A participant in the distributed network, validating and storing transactions"
    }
    // Add more questions here...
  ];
  
  let currentQuestion = 0;
  let userAnswers = [];
  let userName; // Variable to store the user's name
  
  const welcomeMessage = document.getElementById("welcome-message");
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const submitButton = document.getElementById("submit-btn");
  
  function askForName() {
    userName = prompt("What is your name?");
    welcomeMessage.innerHTML = `<h1>Welcome to Web3 Assessment, ${userName}!</h1>`;
  }
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    quizContainer.innerHTML = `
      <h3>${currentQuizData.question}</h3>
      <ul>
        ${currentQuizData.options.map(option => `<li><input type="radio" name="answer" value="${option}">${option}</li>`).join('')}
      </ul>
    `;
  }
  
  function submitQuiz() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
  
    if (selectedOption) {
      userAnswers.push(selectedOption.value);
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const score = calculateScore();
    resultContainer.innerHTML = `<p>Dear ${userName}, YOUR SCORE IS: ${score}/${quizData.length}</p>`;

  }
  
  function calculateScore() {
    let score = 0;
    for (let i = 0; i < quizData.length; i++) {
      if (userAnswers[i] === quizData[i].correctAnswer) {
        score++;
      }
    }
    return score;
  }
  
  // Initial load
  askForName();
  loadQuestion();
  