const chat_gpt_url = 'https://chat.openai.com/';
const bard_url = 'https://bard.google.com/';

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) { // 38 is the key code for the up arrow key
      console.log("Up key pressed");
      console.log(window.location.hostname)
      if (chat_gpt_url.includes(window.location.hostname)) {
        event.preventDefault();
        chat_gpt_text_input = document.getElementById('prompt-textarea')
        chat_gpt_text_input.select();
        chat_gpt_text_input.value = "Up key pressed GPT";
        chat_gpt_text_input.dispatchEvent(
          new Event("input", { bubbles: true, cancelable: true })
        );
      } else if (bard_url.includes(window.location.hostname)) {
        event.preventDefault();
        bard_text_input = document.getElementById('mat-input-0');
        bard_text_input.select();
        bard_text_input.value = "Up key pressed Bard";
        const end = bard_text_input.value.length;
        bard_text_input.setSelectionRange(end, end);
        bard_text_input.dispatchEvent(
          new Event("input", { bubbles: true, cancelable: true })
        );
      }
    }
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 40) { // 40 is the key code for the up arrow key
    console.log("Down key pressed");
    console.log(window.location.hostname)
    if (chat_gpt_url.includes(window.location.hostname)) {
      event.preventDefault();
      chat_gpt_text_input = document.getElementById('prompt-textarea')
      chat_gpt_text_input.select();
      chat_gpt_text_input.value = "Down key pressed GPT";
      chat_gpt_text_input.dispatchEvent(
        new Event("input", { bubbles: true, cancelable: true })
      );
    } else if (bard_url.includes(window.location.hostname)) {
      event.preventDefault();
      bard_text_input = document.getElementById('mat-input-0');
      bard_text_input.select();
      bard_text_input.value = "Down key pressed Bard";
      bard_text_input.dispatchEvent(
        new Event("input", { bubbles: true, cancelable: true })
      );
    }
  }
});



