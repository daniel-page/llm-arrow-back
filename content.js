const chat_gpt_url = 'https://chat.openai.com/';
const bard_url = 'https://bard.google.com/';

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) { // 38 is the key code for the up arrow key
      console.log("Up key pressed");
      console.log(window.location.hostname)
      if (chat_gpt_url.includes(window.location.hostname)) {
        chat_gpt_text_input = document.getElementById('prompt-textarea')
        chat_gpt_text_input.select();
        chat_gpt_text_input.value = "Up key pressed GPT"
      } else if (bard_url.includes(window.location.hostname)) {
        bard_text_input = document.getElementById('mat-input-0');
        bard_text_input.select();
        bard_text_input.value = "Up key pressed Bard";
      }
      
    }
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 40) { // 40 is the key code for the up arrow key
    console.log("Down key pressed");
    console.log(window.location.hostname)
    if (chat_gpt_url.includes(window.location.hostname)) {
      chat_gpt_text_input = document.getElementById('prompt-textarea')
      chat_gpt_text_input.select();
      chat_gpt_text_input.value = "Down key pressed GPT"
    } else if (bard_url.includes(window.location.hostname)) {
      bard_text_input = document.getElementById('mat-input-0');
      bard_text_input.select();
      bard_text_input.value = "Down key pressed Bard";
    }
  }
});



