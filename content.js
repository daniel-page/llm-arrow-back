const chat_gpt_url = 'https://chat.openai.com/';
const bard_url = 'https://bard.google.com/';


var prev_prompt_index = -1
var arr = []

function update() {
  arr = [];

  text_blocks = document.getElementsByClassName("min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap break-words");

  for (let i = 0; i < text_blocks.length; i++) { 
    if (text_blocks[i]["firstElementChild"] == null) {
      arr.push(text_blocks[i].innerText)
    }
  }
  arr.reverse();
  console.log(arr);

}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) { // 38 is the key code for the up arrow key
      console.log("Up key pressed");
      console.log(window.location.hostname)
      if (chat_gpt_url.includes(window.location.hostname)) {
        event.preventDefault();
        update();
        chat_gpt_text_input = document.getElementById('prompt-textarea')
        chat_gpt_text_input.select();
        if (prev_prompt_index + 1 < arr.length) {
          prev_prompt_index++;
          console.log(prev_prompt_index);
          chat_gpt_text_input.value = arr[prev_prompt_index];
        }
        chat_gpt_text_input.dispatchEvent(
          new Event("input", { bubbles: true, cancelable: true })
        );
      } else if (bard_url.includes(window.location.hostname)) {
        event.preventDefault();
        update();
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
      update();
      chat_gpt_text_input = document.getElementById('prompt-textarea')
      chat_gpt_text_input.select();
      if (prev_prompt_index - 1 >= 0) {
        prev_prompt_index--;
        console.log(prev_prompt_index);
        chat_gpt_text_input.value = arr[prev_prompt_index];
      } else {
        chat_gpt_text_input.value = "";
        prev_prompt_index = -1;
      }
      chat_gpt_text_input.dispatchEvent(
        new Event("input", { bubbles: true, cancelable: true })
      );
    } else if (bard_url.includes(window.location.hostname)) {
      event.preventDefault();
      update();
      bard_text_input = document.getElementById('mat-input-0');
      bard_text_input.select();
      bard_text_input.value = "Down key pressed Bard";
      bard_text_input.dispatchEvent(
        new Event("input", { bubbles: true, cancelable: true })
      );
    }
  }
});



