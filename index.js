 let capsOn = false;
 let shiftOn = false;
 let currentLanguage;
 if (localStorage.getItem('lang')) {
  currentLanguage = localStorage.getItem('lang');
 } else { 
   currentLanguage = 'ru'
   localStorage.setItem('lang', 'ru')
}
 console.log(localStorage.getItem)

 const keyList = {
  Backquote: {ru:'ё', RU:'Ё', en:'`', EN:'~', ruLetter: true, enLetter: false, code: 'Backquote'},
  Digit1: {ru: '1', RU: '!', en: '1', EN:'!', ruLetter: false, enLetter: false, code: 'Digit1'},
  Digit2: {ru: '2', RU: '"', en: '2', EN:'@', ruLetter: false, enLetter: false, code: 'Digit2'},
  Digit3: {ru: '3', RU: '№', en: '3', EN:'#', ruLetter: false, enLetter: false, code: 'Digit3'},
  Digit4: {ru: '4', RU: ';', en: '4', EN:'$', ruLetter: false, enLetter: false, code: 'Digit4'},
  Digit5: {ru: '5', RU: '%', en: '5', EN:'%', ruLetter: false, enLetter: false, code: 'Digit5'},
  Digit6: {ru: '6', RU: ':', en: '6', EN:'^', ruLetter: false, enLetter: false, code: 'Digit6'},
  Digit7: {ru: '7', RU: '?', en: '7', EN:'&', ruLetter: false, enLetter: false, code: 'Digit7'},
  Digit8: {ru: '8', RU: '*', en: '8', EN:'*', ruLetter: false, enLetter: false, code: 'Digit8'},
  Digit9: {ru: '9', RU: '(', en: '9', EN:'(', ruLetter: false, enLetter: false, code: 'Digit9'},
  Digit0: {ru: '0', RU: ')', en: '0', EN:')', ruLetter: false, enLetter: false, code: 'Digit0'},
  Minus: {ru: '-', RU: '_', en: '-', EN:'_', ruLetter: false, enLetter: false, code: 'Minus'},
  Equal: {ru: '=', RU: '+', en: '=', EN:'+', ruLetter: false, enLetter: false, code: 'Equal'},
  Backspace: {ru: 'Bcksp', RU: 'Bcksp', en: 'Bcksp', EN: 'Bcksp', ruLetter: false, enLetter: false, code: 'Backspace'},

  Tab: {ru: 'Tab', RU: 'Tab', en: 'Tab', EN: 'Tab', ruLetter: false, enLetter: false, code: 'Tab'},
  KeyQ: {ru: 'й', RU: 'Й', en: 'q', EN:'Q', ruLetter: true, enLetter: true, code: 'KeyQ'},
  KeyW: {ru: 'ц', RU: 'Ц', en: 'w', EN:'W', ruLetter: true, enLetter: true, code: 'KeyW'},
  KeyE: {ru: 'у', RU: 'У', en: 'e', EN:'E', ruLetter: true, enLetter: true, code: 'KeyE'},
  KeyR: {ru: 'к', RU: 'К', en: 'r', EN:'R', ruLetter: true, enLetter: true, code: 'KeyR'},
  KeyT: {ru: 'е', RU: 'Е', en: 't', EN:'T', ruLetter: true, enLetter: true, code: 'KeyT'},
  KeyY: {ru: 'н', RU: 'Н', en: 'y', EN:'Y', ruLetter: true, enLetter: true, code: 'KeyY'},
  KeyU: {ru: 'г', RU: 'Г', en: 'u', EN:'U', ruLetter: true, enLetter: true, code: 'KeyU'},
  KeyI: {ru: 'ш', RU: 'Ш', en: 'i', EN:'I', ruLetter: true, enLetter: true, code: 'KeyI'},
  KeyO: {ru: 'щ', RU: 'Щ', en: 'o', EN:'O', ruLetter: true, enLetter: true, code: 'KeyO'},
  KeyP: {ru: 'з', RU: 'З', en: 'p', EN:'P', ruLetter: true, enLetter: true, code: 'KeyP'},
  BracketLeft: {ru: 'х', RU: 'Х', en: '[', EN:'{', ruLetter: true, enLetter: false, code: 'BracketLeft'},
  BracketRight: {ru: 'ъ', RU: 'Ъ', en: ']', EN:'}', ruLetter: true, enLetter: false, code: 'BracketRight'},
  Backslash:{ru: '\\', RU: '/', en: '\\', EN:'|', ruLetter: false, enLetter: false, code: 'Backslash'},
  Delete: {ru: 'Del', RU: 'Del', en: 'Del', EN: 'Del', ruLetter: false, enLetter: false, code: 'Delete'},

  CapsLock: {ru: 'CapsLock', RU: 'CapsLock', en: 'CapsLock', EN: 'CapsLock', ruLetter: false, enLetter: false, code: 'CapsLock'},
  KeyA: {ru: 'ф', RU: 'Ф', en: 'a', EN:'A', ruLetter: true, enLetter: true, code: 'KeyA'},
  KeyS: {ru: 'ы', RU: 'Ы', en: 's', EN:'S', ruLetter: true, enLetter: true, code: 'KeyS'},
  KeyD: {ru: 'в', RU: 'В', en: 'd', EN:'D', ruLetter: true, enLetter: true, code: 'KeyD'},
  KeyF: {ru: 'а', RU: 'А', en: 'f', EN:'F', ruLetter: true, enLetter: true, code: 'KeyF'},
  KeyG: {ru: 'п', RU: 'П', en: 'g', EN:'G', ruLetter: true, enLetter: true, code: 'KeyG'},
  KeyH: {ru: 'р', RU: 'Р', en: 'h', EN:'H', ruLetter: true, enLetter: true, code: 'KeyH'},
  KeyJ: {ru: 'о', RU: 'О', en: 'j', EN:'J', ruLetter: true, enLetter: true, code: 'KeyJ'},
  KeyK: {ru: 'л', RU: 'Л', en: 'k', EN:'K', ruLetter: true, enLetter: true, code: 'KeyK'},
  KeyL: {ru: 'д', RU: 'Д', en: 'l', EN:'L', ruLetter: true, enLetter: true, code: 'KeyL'},
  Semicolon: {ru: 'ж', RU: 'Ж', en: ';', EN:':', ruLetter: true, enLetter: false, code: 'Semicolon'},
  Quote: {ru: 'э', RU: 'Э', en: "'", EN:'"', ruLetter: true, enLetter: false, code: 'Quote'},
  Enter: {ru: 'Enter', RU: 'Enter', en: 'Enter', EN:'Enter', ruLetter: false, enLetter: false, code: 'Enter'},

  ShiftLeft: {ru: 'Shift', RU: 'Shift', en: 'Shift', EN: 'Shift', ruLetter: false, enLetter: false, code: 'ShiftLeft'},
  KeyZ: {ru: 'я', RU: 'Я', en: 'z', EN:'Z', ruLetter: true, enLetter: true, code: 'KeyZ'},
  KeyX: {ru: 'ч', RU: 'Ч', en: 'x', EN:'X', ruLetter: true, enLetter: true, code: 'KeyX'},
  KeyC: {ru: 'с', RU: 'С', en: 'c', EN:'C', ruLetter: true, enLetter: true, code: 'KeyC'},
  KeyV: {ru: 'м', RU: 'М', en: 'v', EN:'V', ruLetter: true, enLetter: true, code: 'KeyV'},
  KeyB: {ru: 'и', RU: 'И', en: 'b', EN:'B', ruLetter: true, enLetter: true, code: 'KeyB'},
  KeyN: {ru: 'т', RU: 'Т', en: 'n', EN:'N', ruLetter: true, enLetter: true, code: 'KeyN'},
  KeyM: {ru: 'ь', RU: 'Ь', en: 'm', EN:'M', ruLetter: true, enLetter: true, code: 'KeyM'},
  Comma: {ru: 'б', RU: 'Б', en: ',', EN:'<', ruLetter: true, enLetter: true, code: 'Comma'},
  Period: {ru: 'ю', RU: 'Ю', en: '.', EN:'>',  ruLetter: true, enLetter: true, code: 'Period'},
  Slash: {ru: '.', RU: ',', en: '/', EN:'?', ruLetter: false, enLetter: false, code: 'Slash'},
  ArrowUp: {ru: 'Up', RU: 'Up', en: 'Up', EN: 'Up', ruLetter: false, code: 'ArrowUp'},
  ShiftRight: {ru: 'Shift', RU: 'Shift', en: 'Shift', EN: 'Shift', ruLetter: false, enLetter: false, code: 'ShiftRight'},

  ControlLeft: {ru: 'Ctrl', RU: 'Ctrl', en: 'Ctrl', EN: 'Ctrl', ruLetter: false, enLetter: false, code: 'ControlLeft'},
  Win: {ru: 'Win', RU: 'Win', en: 'Win', EN: 'Win', ruLetter: false, enLetter: false, code: 'Win'},
  AltLeft: {ru: 'Alt', RU: 'Alt', en: 'Alt', EN: 'Alt', ruLetter: false, enLetter: false, code: 'AltLeft'},
  Space: {ru: ' ', RU: ' ', en: ' ', EN: ' ', ruLetter: false, enLetter: false, code: 'Space'},
  AltRight: {ru: 'Alt', RU: 'Alt', en: 'Alt', EN: 'Alt', ruLetter: false, enLetter: false, code: 'AltRight'},
  ArrowLeft: {ru: 'Lt', RU: 'Lt', en: 'Lt', EN: 'Lt', ruLetter: false, enLetter: false, code: 'ArrowLeft'},
  ArrowDown: {ru: 'Dn', RU: 'Dn', en: 'Dn', EN: 'Dn', ruLetter: false, enLetter: false, code: 'ArrowDown'},
  ArrowRight: {ru: 'Rt', RU: 'Rt', en: 'Rt', EN: 'Rt', ruLetter: false, enLetter: false, code: 'ArrowRight'},
  ControlRight: {ru: 'Ctrl', RU: 'Ctrl', en: 'Ctrl', EN: 'Ctrl', ruLetter: false, enLetter: false, code: 'ControlRight'},
 }


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
  setCaret(caretPosition.start + 1);
}

function backspaceAction() {
  let caretPosition = getCaretPos();
  let content = getContent(caretPosition);
  let newPosition;
  let changeContent;
  if (caretPosition.start ===0 && caretPosition.end === 0) {
    return;
  }
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

function capsLockAction() {
  switch (capsOn) {
    case false:
      for (let key in keyList) {
        if (keyList[key][currentLanguage+'Letter']){
        document.getElementById(`${keyList[key].code}`).innerHTML = keyList[key][currentLanguage.toUpperCase()];
        }
        capsOn = true;
      }
      break;
    case true:
      for (let key in keyList) {
        document.getElementById(`${keyList[key].code}`).innerHTML = keyList[key][currentLanguage.toLowerCase()];
      }
      capsOn = false;
  }

}

function mouseShift() {
  switch (shiftOn) {
    case false:
    for (let key in keyList) {
      document.getElementById(`${keyList[key].code}`).innerHTML = keyList[key][currentLanguage.toUpperCase()];
    }
    shiftOn = true;
    break;
    case true:
      for (let key in keyList) {
        document.getElementById(`${keyList[key].code}`).innerHTML = keyList[key][currentLanguage.toLowerCase()];
      }
      shiftOn = false;
      break;
  }
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
  for (let key in keyList) {
    document.getElementById(`${keyList[key].code}`).innerHTML = keyList[key][currentLanguage];
  }
  localStorage.setItem('lang', currentLanguage);
}

function pressKey(code) {

  switch (code) {
    case 'Backspace':
      backspaceAction();
      break;
    case 'ArrowLeft':
      leftArrowAction();
      break;
    case 'Enter':
      enterAction();
      break;
    case 'ArrowRight':
      rightArrowAction()
      break;
    case 'ArrowUp':
      upArrowAction();
      break;
    case 'ArrowDown':
      downArrowAction();
      break;
    case 'Delete':
      deleteAction();
      break;
    case 'Tab':
      tabAction();
      break;
    case 'CapsLock':
      capsLockAction();
    default:
      console.log(code);
      if (!document.getElementById(`${code}`).classList.contains('functional-key')) {
        let symbol = document.getElementById(`${code}`).textContent;
        insertSymbol(symbol);
      }
  }
}

function generateKeys() {
  let textarea =  '<textarea name="textarea" id="area" cols="30" rows="10"></textarea>';
  let legend = '<div class="legend"> Смена языка ввода - Ctrl + Shift </br>Написано на Windows</div>'
  let out ='';
  for (let key in keyList) { 
        if (keyList[key][currentLanguage].length === 1) {
          out += `<div class=key id=${keyList[key].code} >` + keyList[key][currentLanguage] + '</div>';
        } else {
          out += `<div class="functional-key" id=${keyList[key].code} >` + keyList[key][currentLanguage] + '</div>';
        }
  document.querySelector('body').innerHTML = textarea + '<div class="keyboard">' + out + '</div>'+ legend ;
}}

generateKeys();

document.addEventListener('keydown', event => {
  event.preventDefault();
  document.querySelector('textarea').focus();
  document.getElementById(`${event.code}`).classList.add('active');

  pressKey(event.code);

  if (event.key === 'Shift') {
    for (let key in keyList) {
      document.getElementById(`${keyList[key].code}`).innerHTML = keyList[key][currentLanguage.toUpperCase()];
    }
    shiftOn = true;
  }

  if (event.ctrlKey === true && event.shiftKey === true) {
    changeLanguage();
  }
})

document.addEventListener('keyup', event => {
  document.getElementById(`${event.code}`).classList.remove('active');
  if (event.key === 'Shift') {
    for (let key in keyList) {
      document.getElementById(`${keyList[key].code}`).innerHTML = keyList[key][currentLanguage.toLowerCase()];
    }
    shiftOn = true;
    return 
  }
})

document.querySelector('.keyboard').addEventListener('mousedown', event => {
  event.preventDefault();
  event.target.classList.add('active');

  if (document.getElementById(`${event.target.id}`).textContent === 'Ctrl'  && shiftOn === true) {
    changeLanguage();
  }

  if (document.getElementById(`${event.target.id}`).textContent === 'Shift' || shiftOn === true) {
    pressKey(event.target.id);
    mouseShift();
    return;
  }
  pressKey(event.target.id);
  document.querySelector('textarea').focus();

})

document.querySelector('.keyboard').addEventListener('mouseup', event => {
  event.preventDefault();  event.target.classList.remove('active');

})