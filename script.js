
const questions = [
  "What did one wall say to the other wall? 🧱👋", // 0
  "What did one plate say to the other plate? 🍽️🗨️", // 1
  "Why did the math book look sad? 📚😢", // 2
  "Why don't scientists trust atoms? ⚛️❌", // 3
  "What did the ocean say to the beach? 🌊🏖️", // 4
  "What did the fish say when it hit the wall? 🐟💥", // 5
  "What do you call an alligator in a vest? 🐊👔", // 6
  "What did the green grape say to the purple grape? 🍇💬", // 7
  "What did the blanket say to the bed? 🛌🗨️", // 8
  "What did the clock say to the watch? ⏰🕰️", // 9
  "What did one hat say to the other hat? 👒👋", // 10
  "Why footballers are so cool? ⚽❄️", // 11
  "Why did the chicken join a band? 🐔🎵", // 12
  "What do you call a sleeping bull? 🐂😴", // 13
  "What do you call a factory that makes okay products? 🏭🤔", // 14
  "What did one elevator say to the other elevator? 🛗🗨️", // 15
  "Why don't skeletons fight each other? 💀🤝", // 16
  "Why don't scientists trust stairs? 🚶‍♂️❌🧪", // 17
  "What did the grape say when it got stepped on? 🍇😫", // 18
  "What did the traffic light say to the car? 🚦🚗", // 19
  "What did the stamp say to the envelope? 💌🗨️", // 20
  "What did the pencil say to the paper? ✏️📝", // 21
  "What did the book say to the reader? 📖🗣️", // 22
  "What did the computer say to the printer? 💻🖨️", // 23
  "What did one potato chip say to the other? 🥔🗨️", // 24
  "What did the tea bag say to the kettle? ☕🫖", // 25
  "What did the door say to the doormat? 🚪👋", // 26
  "What did the calendar say to the days? 📅🗣️", // 27
  "What did the tree say to the lumberjack? 🌳👋", // 28
  "What did the bicycle say to the motorcycle? 🚴🏍️", // 29
  "What did the mailbox say to the letter? 📮🗨️", // 30
  "What did the road say to the pedestrian? 🛤️🚶‍♂️", // 31
  "What did the elevator say to the people? 🛗👋", // 32
  "What did the light bulb say to the switch? 💡🧠", // 33
  "What did the camera say to the photographer? 📷🗣️", // 34
  "What did the mirror say to the other mirror? 🪞🗣️", // 35
  "What did the chair say to the table? 🪑👋", // 36
  "What did the painting say to the artist? 🎨🗣️", // 37
  "What did the shoe say to the other shoe? 👟👋", // 38 
  "What did the salt say to the pepper? 🧂❤️", // 39
  "What did the cloud say to the rain? ☁️🌧️", // 40
  "What did the mountain say to the hill? ⛰️🗣️", // 41
  "What did the snowflake say to the other snowflake? ❄️❄️", // 42
  "What did the flower say to the bee? 🌼🐝", // 43
  "What did the car say to the garage? 🚗🏠", // 44
  "What did the oven mitt say to the hot pan? 🧤🔥", // 45
  "What did the remote control say to the TV? 📺🗣️", // 46
  "What did the balloon say to the pin? 🎈🗨️", // 47
  "What did the spoon say to the fork? 🥄🍴", // 48
  "What did the lock say to the key? 🔒🗝️", // 49
  "What did the wallet say to the money? 👛💰", // 50
  "What did the shoe say to the sock? 👟🧦", // 51
  "What did the toothpaste say to the toothbrush? 🦷🧼", // 52
  "What did the broom say to the dustpan? 🧹🗨️", // 53
  "What did the shampoo say to the conditioner? 🧴💬", // 54
  "What did the cellphone say to the charger? 📱🔌", // 55
  "What did the hammer say to the nail? 🔨🗨️", // 56
  "What did the sun say to the moon? ☀️🌙", // 57
  "What did the star say to the sky? ⭐🌌", // 58
  "What did the cloud say to the sun? ☁️🌞", // 59
  "Did you hear about the claustrophobic astronaut? 🚀😱", // 60
  "What do you call a can opener that doesn't work? 🥫🔧", // 61
  "Why did the bicycle fall over? 🚴‍♂️🤕", // 62
  "How do you make a tissue dance? 💃🤣", // 63
  "Did you really enjoy the puns? 🐄🎭😂", // 64
];

const puns = [
  "I'll meet you at the corner! 😄👋", // 0
  "Dinner's on me! 😄🍽️👍", // 1
  "Because it had too many problems! 😄🤷‍♂️", // 2
  "Because they make up everything! 😄🔍", // 3
  "Nothing, it just waved. 😄👋", // 4
  "Dam! 😄🌊", // 5
  "An investigator! 😄🔍", // 6
  "Breathe you idiot. 😄💨", // 7
  "I've got you covered. 😄👍", // 8
  "You tick, I'll tock. 😄⏰", // 9
  "You stay here, I'll go on ahead. 😄🚶‍♂️👍", // 10
  "Because they have so many fans! 😄🎤", // 11
  "Because it had the drumsticks. 😄🍗", // 12
  "A bulldozer! 😄🚜", // 13
  "A satisfactory! 😄👌", // 14
  "I think I'm coming down with something... 😄🤒👍", // 15
  "Because they don't have the guts! 😄🦠", // 16
  "Because they're always up to something! 😄🕵️‍♂️", // 17
  "Nothing, it just let out a little wine. 😄🍷", // 18
  "Don't look, I'm changing. 😄🙈", // 19
  "Stick with me and we'll go places. 😄🚀", // 20
  "Write on! 😄📝", // 21
  "I'm bound to make a good impression. 😄🤝", // 22
  "You're so paper-ly! 😄📄", // 23
  "I'm totally crushed! 😄😬", // 24
  "You're steeping up the game! 😄🍵👍", // 25
  "You're really stepping on me. 😄👟", // 26
  "Let's just go with the flow. 😄🌊", // 27
  "I'm falling for you. 😄🍂", // 28
  "Let's roll together. 😄🎲👍", // 29
  "You've got mail! 😄📬", // 30
  "You're crossing the line. 😄🚧👍", // 31
  "I'll take you up. 😄🤝", // 32
  "Let's brighten things up! 😄☀️", // 33
  "You've got a good frame of mind. 😄🖼️", // 34
  "You're the reflection of perfection. 😄🌟", // 35
  "I've got a leg up on you. 😄🦵", // 36
  "You're my masterpiece. 😄🎨👍", // 37
  "We make a great pair. 😄👫", // 38
  "You sock it to me! 😄🧦", // 39
  "I'm so misty-eyed! ☁️🌧️", // 40
  "You rock! ⛰️🗣️", // 41
  "I'm falling for you. ❄️❄️", // 42
  "You're the bee's knees! 🌼🐝", // 43
  "I've got a lot of mileage on me. 🚗🏠", // 44
  "You're heating things up! 🧤🔥", // 45
  "You're really channeling it. 📺🗣️", // 46
  "You're really popping up! 🎈🗨️", // 47
  "We're a cutlery dream team. 🥄🍴", // 48
  "You unlock my heart. 🔒🗝️", // 49
  "You make cents to me. 👛💰", // 50
  "I'm sock-sited to see you. 👟🧦", // 51
  "You brush away my worries. 🦷🧼", // 52
  "You sweep me off my feet. 🧹🗨️", // 53
  "We're the ultimate hair-raising duo. 🧴💬", // 54
  "I'm really charged up about this. 📱🔌", // 55
  "You really nail it every time. 🔨🗨️", // 56
  "You light up my nights. ☀️🌙", // 57
  "You're my shining star. ⭐🌌", // 58
  "You bring sunshine to my days. ☁️🌞", // 59
  "I just needed a little space. 🚀😱", // 60
  "A can't opener! 🥫🔧", // 61
  "It was two-tired! 🚴‍♂️🤕", // 62
  "You put a little boogie in it! 💃🕺", // 63
  "Yes, I moooved it! 🐄🎭😂", // 64
]
  
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



  