const quizContainer = document.querySelector(".quiz-container");
const questionElement = document.querySelector("#question");
const choicesElement = document.querySelector("#choices");
const submitButton = document.querySelector("#submit");

// Define the quiz data as an array of objects
const quizData = [
  {
    question: "Question 1: I enjoy being in large groups of people.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 2: I feel energized after interacting with many people.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question: "Question 3: I find it easy to approach and talk to strangers.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 4: I like being the center of attention in social situations.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 5: I prefer spending time alone over being with others.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 6: I feel drained after spending a lot of time around people and need alone time to recharge.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 7: I prefer to work independently and avoid group projects if possible.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 8: I prefer to listen and observe in social situations, rather than being the one to initiate conversation.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 9: I prefer to focus on the facts and concrete information when making decisions.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 10: I am more concerned with the present moment and practical realities than future possibilities.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 11: I rely on past experiences to guide my decisions and actions.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 12: I often see patterns and connections in things that others don't.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 13: I trust my instincts and rely on my gut feeling when making decisions.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 14: I am highly imaginative and enjoy exploring new ideas and possibilities.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 15: I am more interested in the theoretical and abstract aspects of a situation.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 16: I like to have a detailed plan before taking action.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 17: We should make decisions based on logical reasoning and facts.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 18: The best decision is the one that maximizes efficiency and productivity.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 19: Objectivity should be the primary consideration when making decisions.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 20: The most important factor in decision making is the analysis of available data.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 21: I believe that we should prioritize our personal values in decision making.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 22: I think we should consider how our actions will affect others before making a decision.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 23: I feel that relationships and emotional connections should play a role in decision making.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 24: I believe that intuition should guide our decisions in certain situations.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question: "Question 25: I like to have a clear plan and stick to it.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 26: I enjoy having a structured and organized approach to tasks",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 27: I feel most comfortable when I know what to expect in a situation.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 28: I believe in making decisions and sticking to them.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 29: I prefer to stay flexible and adapt to changing situations.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 30: I like to keep my options open and explore different possibilities.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question: "Question 31: I enjoy going with the flow and being spontaneous.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 32: I think it's important to remain open to new ideas and possibilities.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question:
      "Question 32: I think it's important to remain open to new ideas and possibilities.",
    choices: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
  },
  {
    question: "Question 33: How do you prefer to spend your free time?",
    choices: [
      "I prefer to spend my free time with others, going out with friends or trying new activities. I find it energizing and fun to be around people and have new experiences. I recharge my batteries by being with others.",
      "I prefer to spend my free time alone, reading a book or watching a movie. I find it relaxing and rejuvenating to be in my own space and not have to socialize. I recharge my batteries by being alone.sagree",
    ],
  },
  {
    question: "Question 34: How do you prefer to approach problem-solving?",
    choices: [
      "I prefer to approach problem-solving by using my practical knowledge and experience. I like to focus on the concrete facts and details and come up with a solution that is based on tangible evidence. I find it more satisfying when I can find a solution that is tried and true.",
      "I prefer to approach problem-solving by using my imagination and creativity. I like to focus on the big picture and the possibilities, and come up with a solution that is unique and innovative. I find it more satisfying when I can find a solution that is novel and unexpected.",
    ],
  },
  {
    question: "Question 35: When making important decisions, how do you prioritize your values and beliefs?",
    choices: [
      "When making important decisions, I prioritize logic and objectivity. I try to consider the consequences of my actions objectively and make decisions based on what is fair and just. I find it more important to maintain a logical and consistent decision-making process, rather than basing my decisions on my emotions or personal values.",
      "When making important decisions, I prioritize my personal values and beliefs. I try to consider the impact of my actions on the people involved and make decisions based on what is in line with my heart. I find it more important to maintain a consistent set of values and beliefs, rather than basing my decisions on pure logic."
    ],
  },
  {
    question: "Question 36: How do you typically approach your daily schedule and tasks?",
    choices: [
      "I prefer to have a structured and organized approach to my daily tasks. I like to have a plan for my day and follow it as closely as possible. I feel more comfortable when I have completed my tasks and my schedule is in order. I find that having a structured routine helps me to be more productive and achieve my goals.",
      "I prefer a flexible and spontaneous approach to my daily tasks. I like to leave room for surprises and unexpected opportunities. I feel more comfortable when I have the freedom to change my plans if something more interesting or exciting comes up. I find that having a flexible and spontaneous approach helps me to be more adaptable and go with the flow."
    ],
  },
  {
    question: "Describe a challenging situation you have faced in the past and how you overcame it.",
    choices: "text"
  },
];


let state = {};

  // if (sessionStorage.getItem("state")){
  //   state = JSON.parse(sessionStorage.getItem("state"));
  //   var currentQuestion = Object.keys(state)[Object.keys(state).length-1];
  //   console.log("first" , state)
  // }
  // else{
  //   var currentQuestion = 0;
  // }
let currentQuestion = 0

// handling States



// window.onload = function() {
  // state = JSON.parse(sessionStorage.getItem("state"));
  // if (sessionStorage.getItem("state")){
  //   state = JSON.parse(sessionStorage.getItem("state"));
  //   currentQuestion = Object.keys(state)[Object.keys(state).length-1];
  //   console.log("first" , state)
  // }
  // else{
  //   var currentQuestion = 0;
  // }
// };


function setState(newState) {

  
  // if(sessionStorage.getItem("state")){
  //   // const jsonparse = JSON.parse(sessionStorage.getItem("state"));
  //   state = {...jsonparse,...newState}
    
  // }
  // else{
  //   state = { ...state, ...newState };

  // }
  state = Object.assign(state,newState);

  const setInSessionStorage = (key, value) => {
    return new Promise((resolve, reject) => {
      try {
        const valueStr = JSON.stringify(value);
        sessionStorage.setItem(key, valueStr);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  setInSessionStorage("state", state)
  .then(() => {
    // const jsonparse = JSON.parse(sessionStorage.getItem("state"));
    // console.log("jsonparse", jsonparse)
    // console.log(sessionStorage.getItem("state"));
    // console.log(Object.keys(jsonparse)[Object.keys(jsonparse).length-1]);
  })
  .catch(error => console.error(error));
}

function restart(){
  location.reload();
  sessionStorage.setItem("state", "")

}


function setTimeoutFunct (data){
  return setTimeout(function () {
    let newState = {};

    newState[currentQuestion+1] = data;


    setState(newState);

    currentQuestion++;

    // If there are more questions, show the next one
    if (currentQuestion < quizData.length) {
      showQuestion();

    } else {
      // If there are no more questions, show the score
      quizContainer.innerHTML = `
      <h2>You scored points!</h2>
      <button class="end-button" onclick="restart()">Try Again</button>
    `;
    }
  }, 1000);
}



// Function to display the current question and choices
 function showQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionElement.innerText =  currentQuiz.question;
  choicesElement.innerHTML = "";

  // Loop through the choices and create a button for each one
  if (currentQuiz.choices != "text") {
    submitButton.innerHTML = "";

    for (let i = 0; i < currentQuiz.choices.length; i++) {
        const choice = currentQuiz.choices[i];
        const choiceButton = document.createElement("button");
        choiceButton.classList.add("button-style");
        choiceButton.innerText = choice;

        // Add event listener to check the answer when the button is clicked
        choiceButton.addEventListener("click",  function () {

            // console.log("STATE: ", state);
            // Wait for 1 second and move on to the next question
            setTimeoutFunct( choice);
            
          });

        choicesElement.appendChild(choiceButton);
      }
  } else {
    choicesElement.innerHTML = "";
    submitButton.innerHTML = "";

    const textBox = document.createElement("input");
    textBox.type = "text";
    textBox.placeholder = "Enter text here";
    textBox.classList.add("textbox");
    textBox.setAttribute("id", "textbox");

    const sendButton = document.createElement("button");
    sendButton.innerText = "Send";

    sendButton.classList.add("button-style1");

    sendButton.addEventListener("click", function () {

      // Wait for 1 second and move on to the next question
      setTimeoutFunct(document.getElementById("textbox").value)
    
    });
    choicesElement.appendChild(textBox);
    submitButton.appendChild(sendButton);
  }




}

// Call the showQuestion function to start the quiz
showQuestion();
