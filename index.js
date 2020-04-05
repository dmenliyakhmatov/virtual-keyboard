 let capsOn = false;

 const keyList = {
  Backquote: {ru:'ё', RU:'Ё', en:'`', EN:'~', keyCode: 192, ruLetter: true, enLetter: false},
  Digit1: {ru: '1', RU: '!', en: '1', EN:'!', keyCode: 49, ruLetter: false, enLetter: false},
  Digit2: {ru: '2', RU: '"', en: '2', EN:'@', keyCode: 50, ruLetter: false, enLetter: false},
  Digit3: {ru: '3', RU: '№', en: '3', EN:'#', keyCode: 51, ruLetter: false, enLetter: false},
  Digit4: {ru: '4', RU: ';', en: '4', EN:'$', keyCode: 52, ruLetter: false, enLetter: false},
  Digit5: {ru: '5', RU: '%', en: '5', EN:'%', keyCode: 53, ruLetter: false, enLetter: false},
  Digit6: {ru: '6', RU: ':', en: '6', EN:'^', keyCode: 54, ruLetter: false, enLetter: false},
  Digit7: {ru: '7', RU: '?', en: '7', EN:'&', keyCode: 55, ruLetter: false, enLetter: false},
  Digit8: {ru: '8', RU: '*', en: '8', EN:'*', keyCode: 56, ruLetter: false, enLetter: false},
  Digit9: {ru: '9', RU: '(', en: '9', EN:'(', keyCode: 57, ruLetter: false, enLetter: false},
  Digit0: {ru: '0', RU: ')', en: '0', EN:')', keyCode: 48, ruLetter: false, enLetter: false},
  Minus: {ru: '-', RU: '_', en: '-', EN:'_', keyCode: 189, ruLetter: false, enLetter: false},
  Equal: {ru: '=', RU: '+', en: '=', EN:'+', keyCode: 187, ruLetter: false, enLetter: false},
  Backspace: {ru: 'Bcksp', RU: 'Bcksp', en: 'Bcksp', EN: 'Bcksp', keyCode: 8, ruLetter: false, enLetter: false},

  Tab: {ru: 'Tab', RU: 'Tab', en: 'Tab', EN: 'Tab', keyCode: 9, ruLetter: false, enLetter: false},
  KeyQ: {ru: 'й', RU: 'Й', en: 'q', EN:'Q', keyCode: 81, ruLetter: true, enLetter: true},
  KeyW: {ru: 'ц', RU: 'Ц', en: 'w', EN:'W', keyCode: 87, ruLetter: true, enLetter: true},
  KeyE: {ru: 'у', RU: 'У', en: 'e', EN:'E', keyCode: 69, ruLetter: true, enLetter: true},
  KeyR: {ru: 'к', RU: 'К', en: 'r', EN:'R', keyCode: 82, ruLetter: true, enLetter: true},
  KeyT: {ru: 'е', RU: 'Е', en: 't', EN:'T', keyCode: 84, ruLetter: true, enLetter: true},
  KeyY: {ru: 'н', RU: 'Н', en: 'y', EN:'Y', keyCode: 89, ruLetter: true, enLetter: true},
  KeyU: {ru: 'г', RU: 'Г', en: 'u', EN:'U', keyCode: 85, ruLetter: true, enLetter: true},
  KeyI: {ru: 'ш', RU: 'Ш', en: 'i', EN:'I', keyCode: 73, ruLetter: true, enLetter: true},
  KeyO: {ru: 'щ', RU: 'Щ', en: 'o', EN:'O', keyCode: 79, ruLetter: true, enLetter: true},
  KeyP: {ru: 'з', RU: 'З', en: 'p', EN:'P', keyCode: 80, ruLetter: true, enLetter: true},
  BracketLeft: {ru: 'х', RU: 'Х', en: '[', EN:'{', keyCode: 219, ruLetter: true, enLetter: false},
  BracketRight: {ru: 'ъ', RU: 'Ъ', en: ']', EN:'}', keyCode: 221, ruLetter: true, enLetter: false},
  Backslash:{ru: '\\', RU: '/', en: '\\', EN:'|', keyCode: 220, ruLetter: false, enLetter: false},
  Delete: {ru: 'Del', RU: 'Del', en: 'Del', EN: 'Del', keyCode: 46, ruLetter: false, enLetter: false},

  CapsLock: {ru: 'CapsLock', RU: 'CapsLock', en: 'CapsLock', EN: 'CapsLock', keyCode: 20, ruLetter: false, enLetter: false},
  KeyA: {ru: 'ф', RU: 'Ф', en: 'a', EN:'A', keyCode: 65, ruLetter: true, enLetter: true},
  KeyS: {ru: 'ы', RU: 'Ы', en: 's', EN:'S', keyCode: 83, ruLetter: true, enLetter: true},
  KeyD: {ru: 'в', RU: 'В', en: 'd', EN:'D', keyCode: 68, ruLetter: true, enLetter: true},
  KeyF: {ru: 'а', RU: 'А', en: 'f', EN:'F', keyCode: 70, ruLetter: true, enLetter: true},
  KeyG: {ru: 'п', RU: 'П', en: 'g', EN:'G', keyCode: 71, ruLetter: true, enLetter: true},
  KeyH: {ru: 'р', RU: 'Р', en: 'h', EN:'H', keyCode: 72, ruLetter: true, enLetter: true},
  KeyJ: {ru: 'о', RU: 'О', en: 'j', EN:'J', keyCode: 74, ruLetter: true, enLetter: true},
  KeyK: {ru: 'л', RU: 'Л', en: 'k', EN:'K', keyCode: 75, ruLetter: true, enLetter: true},
  KeyL: {ru: 'д', RU: 'Д', en: 'l', EN:'L', keyCode: 76, ruLetter: true, enLetter: true},
  Semicolon: {ru: 'ж', RU: 'Ж', en: ';', EN:':', keyCode: 186, ruLetter: true, enLetter: false},
  Quote: {ru: 'э', RU: 'Э', en: "'", EN:'"', keyCode: 222, ruLetter: true, enLetter: false},
  Enter: {ru: 'Enter', RU: 'Enter', en: 'Enter', EN:'Enter', keyCode: 13, ruLetter: false, enLetter: false},

  ShiftLeft: {ru: 'Shift', RU: 'Shift', en: 'Shift', EN: 'Shift', keyCode: 16, ruLetter: false, enLetter: false},
  KeyZ: {ru: 'я', RU: 'Я', en: 'z', EN:'Z', keyCode: 90, ruLetter: true, enLetter: true},
  KeyX: {ru: 'ч', RU: 'Ч', en: 'x', EN:'X', keyCode: 88, ruLetter: true, enLetter: true},
  KeyC: {ru: 'с', RU: 'С', en: 'c', EN:'C', keyCode: 67, ruLetter: true, enLetter: true},
  KeyV: {ru: 'м', RU: 'М', en: 'v', EN:'V', keyCode: 86, ruLetter: true, enLetter: true},
  KeyB: {ru: 'и', RU: 'И', en: 'b', EN:'B', keyCode: 66, ruLetter: true, enLetter: true},
  KeyN: {ru: 'т', RU: 'Т', en: 'n', EN:'N', keyCode: 78, ruLetter: true, enLetter: true},
  KeyM: {ru: 'ь', RU: 'Ь', en: 'm', EN:'M', keyCode: 77, ruLetter: true, enLetter: true},
  Comma: {ru: 'б', RU: 'Б', en: ',', EN:'<', keyCode: 188, ruLetter: true, enLetter: true},
  Period: {ru: 'ю', RU: 'Ю', en: '.', EN:'>', keyCode: 190, ruLetter: true, enLetter: true},
  Slash: {ru: '.', RU: ',', en: '/', EN:'?', keyCode: 191, ruLetter: false, enLetter: false},
  ShiftRight: {ru: 'Shift', RU: 'Shift', en: 'Shift', EN: 'Shift', keyCode: 16, ruLetter: false, enLetter: false},
  ArrowUp: {ru: 'Up', RU: 'Up', en: 'Up', EN: 'Up', keyCode: 38, ruLetter: false},

  ControlLeft: {ru: 'Ctrl', RU: 'Ctrl', en: 'Ctrl', EN: 'Ctrl', keyCode: 17, ruLetter: false, enLetter: false},
  Win: {ru: 'Win', RU: 'Win', en: 'Win', EN: 'Win', keyCode: 91, ruLetter: false, enLetter: false},
  AltLeft: {ru: 'Alt', RU: 'Alt', en: 'Alt', EN: 'Alt', keyCode: 18, ruLetter: false, enLetter: false},
  Space: {ru: ' ', RU: ' ', en: ' ', EN: ' ', keyCode: 32, ruLetter: false, enLetter: false},
  AltRight: {ru: 'Alt', RU: 'Alt', en: 'Alt', EN: 'Alt', keyCode: 18, ruLetter: false, enLetter: false},
  ControlRight: {ru: 'Ctrl', RU: 'Ctrl', en: 'Ctrl', EN: 'Ctrl', keyCode: 17, ruLetter: false, enLetter: false},
  ArrowLeft: {ru: 'Lt', RU: 'Lt', en: 'Lt', EN: 'Lt', keyCode: 37, ruLetter: false, enLetter: false},
  ArrowDown: {ru: 'Dn', RU: 'Dn', en: 'Dn', EN: 'Dn', keyCode: 40, ruLetter: false, enLetter: false},
  ArrowRight: {ru: 'Rt', RU: 'Rt', en: 'Rt', EN: 'Rt', keyCode: 39, ruLetter: false, enLetter: false},
 }

 let currentLanguage = 'ru';

function getContent(position) {

  let text = document.querySelector('textarea').value;
  let textAfter = text.slice(position.end);
  let textBefore = text.slice(0, position.start);
  let content = {
    Before: textBefore,
    After: textAfter
  }
  return content;
}

function insertSymbol(symbol) {
  let caretPosition = getCaretPos();

  let content = getContent(caretPosition);
  let changeContent = content.Before + symbol + content.After;
  document.querySelector('textarea').value = changeContent;
  setCaret(caretPosition.start + 1);
  document.querySelector('textarea').focus();
}

function getCaretPos() {
  let caretStart = document.querySelector('textarea').selectionStart;
  let caretEnd = document.querySelector('textarea').selectionEnd;
  let caretPos = {
    start: caretStart,
    end: caretEnd
  }
  return caretPos;
}

function setCaret(position) {
  document.querySelector('textarea').selectionStart = position;
  document.querySelector('textarea').selectionEnd = position;
}

function tabAction() {
  let caretPosition = getCaretPos();
  let content = getContent(caretPosition);
  let changeContent = content.Before + "\t" + content.After;
  document.querySelector('textarea').value = changeContent;
}

function backspaceAction() {
  console.log('!!!')
  let caretPosition = getCaretPos();
  let content = getContent(caretPosition);
  let newPosition;
  let changeContent;
  if (caretPosition.start !== caretPosition.end) {
    changeContent = content.Before.slice(0,caretPosition.start) + content.After;
    newPosition = caretPosition.start;
  } else {
    changeContent = content.Before.slice(0,caretPosition.start - 1) + content.After;
    newPosition = caretPosition.start - 1;
  }
  document.querySelector('textarea').value = changeContent;
  setCaret(newPosition);
}

function leftArrowAction() {
  let caretPosition = getCaretPos();
  setCaret(caretPosition.start - 1)
}

function rightArrowAction() {
  let caretPosition = getCaretPos();
  setCaret(caretPosition.start + 1)
}

function upArrowAction() {
  setCaret(0);
}

function downArrowAction() {
  let textEnd = document.querySelector('textarea').value.length;
  setCaret(textEnd);
}

function deleteAction() {
  let caretPosition = getCaretPos();
  let content = getContent(caretPosition);
  let newPosition;
  let changeContent;
  if (caretPosition.start !== caretPosition.end) {
    changeContent = content.Before.slice(0,caretPosition.start) + content.After;
  } else {
    changeContent = content.Before + content.After.slice(1);
  }
  document.querySelector('textarea').value = changeContent;
  setCaret(caretPosition.start);
}

function enterAction() {
  let caretPosition = getCaretPos();

  let content = getContent(caretPosition);
  let changeContent = content.Before + "\n" + content.After;
  document.querySelector('textarea').value = changeContent;
  setCaret(caretPosition.start + 1);
}

function changeLanguage() {
  switch (currentLanguage) {
    case 'ru': 
      currentLanguage = 'en';
      break;
    case 'en': 
      currentLanguage = 'ru';
      break;
  }
}

function pressKey(keyCode) {

  switch (keyCode) {
    case 8:
      backspaceAction();
      break;
    case 37:
      leftArrowAction();
      break;
    case 13:
      enterAction();
      break;
    case 39:
      rightArrowAction()
      break;
    case 38:
      upArrowAction();
      break;
    case 40:
      downArrowAction();
      break;
    case 46:
      deleteAction();
      break;
      case 9:
        tabAction();
    default:
      console.log(keyCode);
      if (!document.getElementById(`${keyCode}`).classList.contains('functional-key')) {
        let symbol = document.getElementById(`${keyCode}`).textContent;
        insertSymbol(symbol);
      }
  }
}

function generateKeys() {
  let out ='';
  for (let key in keyList) { 
        if (keyList[key][currentLanguage].length === 1) {
          out += `<div class=key id=${keyList[key].keyCode} >` + keyList[key].ru + '</div>';
        } else {
          out += `<div class="functional-key" id=${keyList[key].keyCode} >` + keyList[key].ru + '</div>';
        }
   }
  document.querySelector('.keyboard').innerHTML = out;
}

generateKeys();

document.addEventListener('keydown', event => {
  event.preventDefault();
  document.querySelector('textarea').focus();
  document.getElementById(`${event.keyCode}`).classList.add('active');

  pressKey(event.keyCode);

   if (event.keyCode === 20 && capsOn === false) {
    for (let key in keyList) {
      if (keyList[key][currentLanguage+'Letter']){
      document.getElementById(`${keyList[key].keyCode}`).innerHTML = keyList[key][currentLanguage.toUpperCase()];
      }
    }
    capsOn = true;
    return 
  }

  if (event.keyCode === 20 && capsOn === true) {
    for (let key in keyList) {
      document.getElementById(`${keyList[key].keyCode}`).innerHTML = keyList[key][currentLanguage.toLowerCase()];
    }
    capsOn = false;
    return
  }
  if (event.keyCode === 16) {
    for (let key in keyList) {
      document.getElementById(`${keyList[key].keyCode}`).innerHTML = keyList[key][currentLanguage.toUpperCase()];
    }
    shiftOn = true;
  }
  if (event.ctrlKey === true && event.shiftKey === true) {
    changeLanguage();
    for (let key in keyList) {
      document.getElementById(`${keyList[key].keyCode}`).innerHTML = keyList[key][currentLanguage];
    }
  }
})

document.addEventListener('keyup', event => {
  document.getElementById(`${event.keyCode}`).classList.remove('active');
  if (event.keyCode === 16) {
    for (let key in keyList) {
      document.getElementById(`${keyList[key].keyCode}`).innerHTML = keyList[key][currentLanguage.toLowerCase()];
    }
    shiftOn = true;
    return 
  }
})

document.querySelector('.keyboard').addEventListener('mousedown', event => {
  event.preventDefault();
  event.target.classList.add('active');
  pressKey(event.target.id);

})

document.querySelector('.keyboard').addEventListener('mouseup', event => {
  event.preventDefault();
  event.target.classList.remove('active');

})