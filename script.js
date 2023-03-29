const quizContainer = document.querySelector(".quiz-container");
const questionElement = document.querySelector("#question");
const choicesElement = document.querySelector("#choices");
const submitButton = document.querySelector("#submit");
let state = {};

// handling States
function setState(newState) {
  state = {...state, ...newState};
}

// Define the quiz data as an array of objects
const quizData = [
  {
    question:"4. What is the currency of Japan?",
    choices : "text"
  },
  {
    question:"4. Where is the currency of Japan?",
    choices : "text"
  },
  {
    question:"4. Whhy is the currency of Japan?",
    choices : "text"
  },
  {
    question: "1. What is the capital of France?",
    choices: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    ],
  },
  {
    question: "2. What is the largest country in the world?",
    choices: ["USA", "China", "Russia"],
  },
  {
    question: "3. What is the currency of Japan?",
    choices: ["Yen", "Dollar", "Euro"],
  }
  
];

let currentQuestion = 0;

// Function to display the current question and choices
function showQuestion() {

  

  console.log("STATE: ",state);
  const currentQuiz = quizData[currentQuestion];
  questionElement.innerText = currentQuiz.question;
  choicesElement.innerHTML = "";

 


  // Loop through the choices and create a button for each one
  if (currentQuiz.choices != "text"){
    submitButton.innerHTML = "";

    for (let i = 0; i < currentQuiz.choices.length; i++) {
      if (currentQuiz.choices != "text"){
      const choice = currentQuiz.choices[i];
      const choiceButton = document.createElement("button");
      choiceButton.classList.add("button-style");
      choiceButton.innerText = choice;
  
      // Add event listener to check the answer when the button is clicked
        choiceButton.addEventListener("click", function () {
          let newState = {};
          newState[currentQuestion+1] = choice;
          setState(newState);
          // console.log("STATE :",state);
          // Wait for 1 second and move on to the next question
          setTimeout(function () {
            currentQuestion++;
  
            // If there are more questions, show the next one
            if (currentQuestion < quizData.length) {
              showQuestion();
              new TypeIt("#question", {
                speed: 5,
                waitUntilVisible: true,
              }).go();
            } else {
              // If there are no more questions, show the score
              quizContainer.innerHTML = `
                <h2>You scored points!</h2>
                <button class="end-button" onclick="location.reload()">Try Again</button>
              `;
            }
          }, 500);
        }); 
        choicesElement.appendChild(choiceButton);
      }
  }}
 
      else{
        choicesElement.innerHTML = "";
        submitButton.innerHTML = "";

        const textBox = document.createElement("input");
        textBox.type =  "text";
        textBox.placeholder = 'Enter text here';
        textBox.classList.add("textbox");
        textBox.setAttribute("id","textbox");

        const sendButton = document.createElement("button");
        sendButton.innerText = "Send"
        
        sendButton.classList.add("button-style1");
        


        sendButton.addEventListener("click", function () {
          let newState = {};
          newState[currentQuestion+1] = document.getElementById("textbox").value;
          setState(newState);


          // Wait for 1 second and move on to the next question
          setTimeout(function () {
            currentQuestion++;
            // If there are more questions, show the next one
            if (currentQuestion < quizData.length) {
              showQuestion();
              new TypeIt("#question", {
                speed: 5,
                waitUntilVisible: true,
              }).go();
            } else {
              // If there are no more questions, show the score
              quizContainer.innerHTML = `
                <h2>You scored points!</h2>
                <button class="end-button" onclick="location.reload()">Try Again</button>
              `;
            }
          }, 500);

         
        });
        choicesElement.appendChild(textBox);
        submitButton.appendChild(sendButton);
      
      }


    
    


    
    
  

}

// Call the showQuestion function to start the quiz
showQuestion();
