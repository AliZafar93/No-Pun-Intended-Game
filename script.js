
const questions = [
  "What did one wall say to the other wall? 🧱👋",
  "What did one plate say to the other plate? 🍽️🗨️",
  "Why did the math book look sad? 📚😢",
  "Why don't scientists trust atoms? ⚛️❌",
  "What did the ocean say to the beach? 🌊🏖️",
  "What did the fish say when it hit the wall? 🐟💥",
  "What do you call an alligator in a vest? 🐊👔",
  "What did the green grape say to the purple grape? 🍇💬",
  "What did the blanket say to the bed? 🛌🗨️",
  "What did the clock say to the watch? ⏰🕰️",
  "What did one hat say to the other hat? 👒👋",
  "Why footballers are so cool? ⚽❄️",
  "Why did the chicken join a band? 🐔🎵",
  "What do you call a sleeping bull? 🐂😴",
  "What do you call a factory that makes okay products? 🏭🤔",
  "What did one elevator say to the other elevator? 🛗🗨️",
  "Why don't skeletons fight each other? 💀🤝",
  "Why don't scientists trust stairs? 🚶‍♂️❌🧪",
  "What did the grape say when it got stepped on? 🍇😫",
  "What did the traffic light say to the car? 🚦🚗",
  "What did the stamp say to the envelope? 💌🗨️",
  "What did the pencil say to the paper? ✏️📝",
  "What did the book say to the reader? 📖🗣️",
  "What did the computer say to the printer? 💻🖨️",
  "What did one potato chip say to the other? 🥔🗨️",
  "What did the tea bag say to the kettle? ☕🫖",
  "What did the door say to the doormat? 🚪👋",
  "What did the calendar say to the days? 📅🗣️",
  "What did the tree say to the lumberjack? 🌳👋",
  "What did the bicycle say to the motorcycle? 🚴🏍️",
  "What did the mailbox say to the letter? 📮🗨️",
  "What did the road say to the pedestrian? 🛤️🚶‍♂️",
  "What did the elevator say to the people? 🛗👋",
  "What did the light bulb say to the switch? 💡🧠",
  "What did the camera say to the photographer? 📷🗣️",
  "What did the bread say to the toaster? 🍞🗨️",
  "What did the mirror say to the other mirror? 🪞🗣️",
  "What did the chair say to the table? 🪑👋",
  "What did the painting say to the artist? 🎨🗣️",
  "What did the shoe say to the other shoe? 👟👋",
  "What did the salt say to the pepper? 🧂❤️",
  "What did the cloud say to the rain? ☁️🌧️",
  "What did the mountain say to the hill? ⛰️🗣️",
  "What did the snowflake say to the other snowflake? ❄️❄️",
  "What did the flower say to the bee? 🌼🐝",
  "What did the car say to the garage? 🚗🏠",
  "What did the oven mitt say to the hot pan? 🧤🔥",
  "What did the remote control say to the TV? 📺🗣️",
  "What did the balloon say to the pin? 🎈🗨️",
  "What did the spoon say to the fork? 🥄🍴",
  "What did the lock say to the key? 🔒🗝️",
  "What did the wallet say to the money? 👛💰",
  "What did the shoe say to the sock? 👟🧦",
  "What did the toothpaste say to the toothbrush? 🦷🧼",
  "What did the broom say to the dustpan? 🧹🗨️",
  "What did the shampoo say to the conditioner? 🧴💬",
  "What did the cellphone say to the charger? 📱🔌",
  "What did the hammer say to the nail? 🔨🗨️",
  "What did the sun say to the moon? ☀️🌙",
  "What did the star say to the sky? ⭐🌌",
  "What did the cloud say to the sun? ☁️🌞",
  "Did you hear about the claustrophobic astronaut? 🚀😱",
  "What do you call a can opener that doesn't work? 🥫🔧",
  "Why did the bicycle fall over? 🚴‍♂️🤕",
  "How do you make a tissue dance? 💃🤣",
  "did you really enjoyed the puns🐄🎭😂",
    // Add more questions here
  ];
  
  const puns = [
    "I'll meet you at the corner! 😄👋",
  "Dinner's on me! 😄🍽️👍",
  "Because it had too many problems! 😄🤷‍♂️",
  "Because they make up everything! 😄🔍",
  "Nothing, it just waved. 😄👋",
  "Dam! 😄🌊",
  "An investigator! 😄🔍",
  "Breathe you idiot. 😄💨",
  "I've got you covered. 😄👍",
  "You tick, I'll tock. 😄⏰",
  "You stay here, I'll go on ahead. 😄🚶‍♂️👍",
  "Because they have so many fans! 😄🎤",
  "Because it had the drumsticks. 😄🍗",
  "Sheet music! 😄🎼",
  "A bulldozer! 😄🚜",
  "A satisfactory! 😄👌",
  "I think I'm coming down with something... 😄🤒👍",
  "Because they don't have the guts! 😄🦠",
  "Because they're always up to something! 😄🕵️‍♂️",
  "Nothing, it just let out a little wine. 😄🍷",
  "Don't look, I'm changing. 😄🙈",
  "Stick with me and we'll go places. 😄🚀",
  "Write on! 😄📝",
  "I'm bound to make a good impression. 😄🤝",
  "You're so paper-ly! 😄📄",
  "I'm totally crushed! 😄😬",
  "You're steeping up the game! 😄🍵👍",
  "You're really stepping on me. 😄👟",
  "Let's just go with the flow. 😄🌊",
  "I'm falling for you. 😄🍂",
  "Let's roll together. 😄🎲👍",
  "You've got mail! 😄📬",
  "You're crossing the line. 😄🚧👍",
  "I'll take you up. 😄🤝",
  "Let's brighten things up! 😄☀️",
  "You've got a good frame of mind. 😄🖼️",
  "You're the reflection of perfection. 😄🌟",
  "I've got a leg up on you. 😄🦵",
  "We make a great pair. 😄👫",
  "You're my masterpiece. 😄🎨👍",
  "You sock it to me! 😄🧦",
  "We're a perfect match. 😄💑",
  "You spice up my life. 😄🌶️",
  "Let's make it rain. 😄☔",
  "We're reaching new heights. 😄🏞️",
  "I'm really flaky! 😄❄️",
  "You're the bee's knees! 😄🐝",
  "I'm driven to be with you. 😄🚗",
  "I've got you covered. 😄🤗",
  "I'm in hot water! 😄🌊",
  "You've got the remote control over me. 😄📺",
  "You're a real pop! 😄🎈👍",
  "You're stirring up my emotions. 😄🍴",
  "We're a cutlery dream team. 😄🍽️",
  "You unlock my heart. 😄🔐",
  "You make cents to me. 😄💰",
  "You really pull me together. 😄🛠️",
  "You brush away my worries. 😄🖌️",
  "You sweep me off my feet. 😄🧹",
  "You make my hair stand on end. 😄💇",
  "You're my electrifying match. 😄⚡",
  "You nail it every time. 😄🔨",
  "You light up my nights. 😄🌃",
  "You're the star of my show. 😄🌟",
  "You're my sky high companion. 😄☁️",
  "He just needed a little space! 😄🚀",
  "A can't opener! 😄🥫",
  "It was two-tired! 😄🚴‍♂️",
  "You put a little boogie in it! 😄💃🕺",
  "Thankyou👍 for playing!🎮",

    
    // Add corresponding puns here
  ];
  
  const chatbox = document.querySelector(".Chatbox");
  const textarea = document.querySelector(".chat-input textarea");
  const sendButton = document.querySelector("#send-btn");
  const chatbotToggler = document.querySelector(".chatbot-toggler");

  let currentQuestionIndex = 0;
  let askingForEnjoyment = false;
  
  function displayMessage(message, className) {

    const li = document.createElement("li");
    li.classList.add("chat",className);

    li.innerHTML = className==="outgoing" ? `<p>${message}</p>` :`  <span class="fa-solid fa-robot"></span><p>${message}</p>`;
    chatbox.appendChild(li);
    chatbox.scrollTop = chatbox.scrollHeight;
  }
  
  function askQuestion() {
    if (currentQuestionIndex < questions.length) {
      displayMessage(questions[currentQuestionIndex], "incoming");
    }
  }


  function processResponse(response){
    const correctAnswer = puns[currentQuestionIndex].toLowerCase();
      if (response.toLowerCase() === correctAnswer) {
        displayMessage("Oooh, you've got a good sense of humor!", "user");
      } else if (correctAnswer.includes(response.toLowerCase())) {
        displayMessage("you are aslmost right,you got this.", "incoming");
         return;
      } else {
         displayMessage(puns[currentQuestionIndex], "incoming");
      }
      currentQuestionIndex++;
      setTimeout(askQuestion, 3000);    
}

setTimeout(askQuestion, 3000); 
 
  sendButton.addEventListener("click", () => {
    const userMessage = textarea.value;
    if (userMessage.trim() !== "") {
      displayMessage(userMessage, "outgoing");
      processResponse(userMessage);
      textarea.value = "";
    }
  });
  
  chatbotToggler.addEventListener("click",()=>document.body.classList.toggle("show-chatbot"));

  textarea.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendButton.click();
    }
  });
  
  