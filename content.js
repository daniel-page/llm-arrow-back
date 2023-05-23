chat_gpt_text_input = document.getElementById('prompt-textarea')

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) { // 38 is the key code for the up arrow key
      console.log("Up key pressed");
      chat_gpt_text_input.innerText = "Up key pressed"
    }
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 40) { // 40 is the key code for the up arrow key
    console.log("Down key pressed");
    chat_gpt_text_input.innerText = "Down key pressed"
  }
});  
