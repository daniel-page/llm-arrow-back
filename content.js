const chat_gpt_url = 'https://chat.openai.com/';
const bard_url = 'https://bard.google.com/';

var prev_prompt_index = -1
var prev_prompts = []

function updateChatGPT() {
  prev_prompts = [];

  text_blocks = document.getElementsByClassName("empty:hidden");

  for (let i = 0; i < text_blocks.length; i++) { 
    if (text_blocks[i]["firstElementChild"] == null) {
      prev_prompts.push(text_blocks[i].innerText)
    }
  }
  prev_prompts.reverse();
}

function updateBard() {

  prev_prompts = [];

  text_blocks = document.getElementsByClassName("query-text");

  for (let i = 0; i < text_blocks.length; i++) { 
    if (text_blocks[i]["firstElementChild"] == null) {
      prev_prompts.push(text_blocks[i].innerText)
    }
  }
  prev_prompts.reverse();
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) { // 38 is the key code for the up arrow key
      if (chat_gpt_url.includes(window.location.hostname)) {
        event.preventDefault();
        updateChatGPT();
        chat_gpt_text_input = document.getElementById('prompt-textarea')
        chat_gpt_text_input.select();
        if (prev_prompt_index + 1 < prev_prompts.length) {
          prev_prompt_index++;
          chat_gpt_text_input.value = prev_prompts[prev_prompt_index];
        }
        chat_gpt_text_input.dispatchEvent(
          new Event("input", { bubbles: true, cancelable: true })
        );
      } else if (bard_url.includes(window.location.hostname)) {
        event.preventDefault();
        updateBard();
        bard_text_input = document.getElementById('mat-input-0');
        bard_text_input.select();
        if (prev_prompt_index + 1 < prev_prompts.length) {
          prev_prompt_index++;
          bard_text_input.value = prev_prompts[prev_prompt_index];
        }
        const end = bard_text_input.value.length;
        bard_text_input.setSelectionRange(end, end);
        bard_text_input.dispatchEvent(
          new Event("input", { bubbles: true, cancelable: true })
        );
      }
    }
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 40) { // 40 is the key code for the down arrow key
    if (chat_gpt_url.includes(window.location.hostname)) {
      event.preventDefault();
      updateChatGPT();
      chat_gpt_text_input = document.getElementById('prompt-textarea')
      chat_gpt_text_input.select();
      if (prev_prompt_index - 1 >= 0) {
        prev_prompt_index--;
        chat_gpt_text_input.value = prev_prompts[prev_prompt_index];
      } else {
        chat_gpt_text_input.value = "";
        prev_prompt_index = -1;
      }
      chat_gpt_text_input.dispatchEvent(
        new Event("input", { bubbles: true, cancelable: true })
      );
    } else if (bard_url.includes(window.location.hostname)) {
      event.preventDefault();
      updateBard();
      bard_text_input = document.getElementById('mat-input-0');
      bard_text_input.select();
      if (prev_prompt_index - 1 >= 0) {
        prev_prompt_index--;
        bard_text_input.value = prev_prompts[prev_prompt_index];
      } else {
        bard_text_input.value = "";
        prev_prompt_index = -1;
      }
      bard_text_input.dispatchEvent(
        new Event("input", { bubbles: true, cancelable: true })
      );
    }
  }
});
