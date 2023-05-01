const keyboardSymbols = {
  Backquote: ['`', '~', 'ё', 'Ё'],
  Digit1: ['1', '!', '1', '!'],
  Digit2: ['2', '@', '2', '"'],
  Digit3: ['3', '#', '3', '№'],
  Digit4: ['4', '$', '4', ';'],
  Digit5: ['5', '%', '5', '%'],
  Digit6: ['6', '^', '6', ':'],
  Digit7: ['7', '&', '7', '?'],
  Digit8: ['8', '*', '8', '*'],
  Digit9: ['9', '(', '9', '('],
  Digit0: ['0', ')', '0', ')'],
  Minus: ['-', '_', '-', '_'],
  Equal: ['=', '+', '=', '+'],
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: ['q', 'Q', 'й', 'Й'],
  KeyW: ['w', 'W', 'ц', 'Ц'],
  KeyE: ['e', 'E', 'у', 'У'],
  KeyR: ['r', 'R', 'к', 'К'],
  KeyT: ['t', 'T', 'е', 'Е'],
  KeyY: ['y', 'Y', 'н', 'Н'],
  KeyU: ['u', 'U', 'г', 'Г'],
  KeyI: ['i', 'I', 'ш', 'Ш'],
  KeyO: ['o', 'O', 'щ', 'Щ'],
  KeyP: ['p', 'P', 'з', 'З'],
  BracketLeft: ['[', '{', 'х', 'Х'],
  BracketRight: [']', '}', 'ъ', 'Ъ'],
  Backslash: ['\\', '|', '\\', '/'],
  Delete: 'Del',
  CapsLock: 'Caps Lock',
  KeyA: ['a', 'A', 'ф', 'Ф'],
  KeyS: ['s', 'S', 'ы', 'Ы'],
  KeyD: ['d', 'D', 'в', 'В'],
  KeyF: ['f', 'F', 'а', 'А'],
  KeyG: ['g', 'G', 'п', 'П'],
  KeyH: ['h', 'H', 'р', 'Р'],
  KeyJ: ['j', 'J', 'о', 'О'],
  KeyK: ['k', 'K', 'л', 'Л'],
  KeyL: ['l', 'L', 'д', 'Д'],
  Semicolon: [';', ':', 'ж', 'Ж'],
  Quote: ["'", '"', 'э', 'Э'],
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  KeyZ: ['z', 'Z', 'я', 'Я'],
  KeyX: ['x', 'X', 'ч', 'Ч'],
  KeyC: ['c', 'C', 'с', 'С'],
  KeyV: ['v', 'V', 'м', 'М'],
  KeyB: ['b', 'B', 'и', 'И'],
  KeyN: ['n', 'N', 'т', 'Т'],
  KeyM: ['m', 'M', 'ь', 'Ь'],
  Comma: [',', '<', 'б', 'Б'],
  Period: ['.', '>', 'ю', 'Ю'],
  Slash: ['/', '?', '.', ','],
  ArrowUp: '&#9650;',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  MetaLeft: 'Win',
  AltLeft: 'Alt',
  Space: '',
  AltRight: 'Alt',
  ArrowLeft: '&#9668;',
  ArrowDown: '&#9660;',
  ArrowRight: '&#9658;',
  ControlRight: 'Ctrl',
};

const body = document.querySelector('body');

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
body.append(keyboard);

const title = document.createElement('p');
title.className = 'title';
title.innerHTML = 'RSS Virtual-keyboard';
body.append(title);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
body.append(textarea);

function createKeyboardButton() {
  const arrayOfKeyObj = Object.keys(keyboardSymbols);
  let rowKeyboard;
  for (let i = 0; i < arrayOfKeyObj.length; i += 1) {
    if (i === 0 || i === 14 || i === 29 || i === 42 || i === 55) {
      rowKeyboard = document.createElement('div');
      rowKeyboard.className = 'row-keyboard';
      keyboard.append(rowKeyboard);
    }
    const buttonKeyboard = document.createElement('div');
    buttonKeyboard.className = `button ${arrayOfKeyObj[i]}`;
    rowKeyboard.append(buttonKeyboard);
    if (Array.isArray(keyboardSymbols[arrayOfKeyObj[i]])) {
      const enLowChar = document.createElement('span');
      enLowChar.innerHTML = `${keyboardSymbols[arrayOfKeyObj[i]][0]}`;
      enLowChar.className = 'en-low';
      buttonKeyboard.append(enLowChar);
      const enUpChar = document.createElement('span');
      enUpChar.innerHTML = `${keyboardSymbols[arrayOfKeyObj[i]][1]}`;
      enUpChar.className = 'en-up hidden';
      buttonKeyboard.append(enUpChar);
      const ruLowChar = document.createElement('span');
      ruLowChar.innerHTML = `${keyboardSymbols[arrayOfKeyObj[i]][2]}`;
      ruLowChar.className = 'ru-low hidden';
      buttonKeyboard.append(ruLowChar);
      const ruUpChar = document.createElement('span');
      ruUpChar.innerHTML = `${keyboardSymbols[arrayOfKeyObj[i]][3]}`;
      ruUpChar.className = 'ru-up hidden';
      buttonKeyboard.append(ruUpChar);
    } else {
      const fixChar = document.createElement('span');
      fixChar.innerHTML = `${keyboardSymbols[arrayOfKeyObj[i]]}`;
      buttonKeyboard.append(fixChar);
    }
  }
}
createKeyboardButton();

let shift = 'en';
let flagCaps = 'low';

const arrayOfEnLow = document.querySelectorAll('.en-low');
const arrayOfEnUp = document.querySelectorAll('.en-up');
const arrayOfRuLow = document.querySelectorAll('.ru-low');
const arrayOfRuUp = document.querySelectorAll('.ru-up');

const arrOfLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я', 'ь', 'ъ', 'ы', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я', 'Ь', 'Ъ', 'Ы'];
const arrOfspecSymb = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', ':', '"', '<', '>', '?', '№', ';', '|', '/', ','];

const changeLang = new Set();

const arrayOfButton = document.querySelectorAll('.button');
document.body.addEventListener('keydown', (e) => {
  const listCharBtn = document.querySelector(`.${e.code}`).children;
  const positionCaret = textarea.selectionStart;
  const textBeforeCaret = textarea.value.slice(0, textarea.selectionStart);
  const textAfterCaret = textarea.value.slice(textarea.selectionStart);
  arrayOfButton.forEach((item) => {
    if (item.classList.contains(`${e.code}`)) item.classList.add('active');
  });
  switch (e.code) {
    case 'Backspace':
      e.preventDefault();
      textarea.value = `${textBeforeCaret.slice(0, textBeforeCaret.length - 1)}${textAfterCaret}`;
      textarea.selectionStart = positionCaret - 1;
      textarea.selectionEnd = positionCaret - 1;
      break;

    case 'Enter':
      e.preventDefault();
      textarea.value += '\n';
      break;

    case 'Tab':
      e.preventDefault();
      textarea.value += '\t';
      break;

    case 'ArrowUp':
      e.preventDefault();
      textarea.value += '▲';
      break;

    case 'ArrowLeft':
      e.preventDefault();
      textarea.value += '◄';
      break;

    case 'ArrowDown':
      e.preventDefault();
      textarea.value += '▼';
      break;

    case 'ArrowRight':
      e.preventDefault();
      textarea.value += '►';
      break;

    case 'Delete':
      e.preventDefault();
      textarea.value = `${textBeforeCaret}${textAfterCaret.slice(1)}`;
      textarea.selectionStart = positionCaret;
      textarea.selectionEnd = positionCaret;
      break;

    case 'Space':
      e.preventDefault();
      textarea.value += ' ';
      break;

    case 'ShiftLeft':
      e.preventDefault();
      if (shift === 'en' && flagCaps === 'low') {
        arrayOfEnUp.forEach((item) => item.classList.remove('hidden'));
        arrayOfEnLow.forEach((item) => item.classList.add('hidden'));
      } else if (shift === 'ru' && flagCaps === 'low') {
        arrayOfRuUp.forEach((item) => item.classList.remove('hidden'));
        arrayOfRuLow.forEach((item) => item.classList.add('hidden'));
      } else if (shift === 'en' && flagCaps === 'up') {
        arrayOfEnLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.remove('hidden');
          else item.classList.add('hidden');
        });
        arrayOfEnUp.forEach((item) => {
          if (arrOfspecSymb.includes(item.textContent)) item.classList.remove('hidden');
          else item.classList.add('hidden');
        });
      } else if (shift === 'ru' && flagCaps === 'up') {
        arrayOfRuLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.remove('hidden');
          else item.classList.add('hidden');
        });
        arrayOfRuUp.forEach((item) => {
          if (arrOfspecSymb.includes(item.textContent)) item.classList.remove('hidden');
          else item.classList.add('hidden');
        });
      }
      break;

    case 'ShiftRight':
      e.preventDefault();
      if (shift === 'en' && flagCaps === 'low') {
        arrayOfEnUp.forEach((item) => item.classList.remove('hidden'));
        arrayOfEnLow.forEach((item) => item.classList.add('hidden'));
      } else if (shift === 'ru' && flagCaps === 'low') {
        arrayOfRuUp.forEach((item) => item.classList.remove('hidden'));
        arrayOfRuLow.forEach((item) => item.classList.add('hidden'));
      } else if (shift === 'en' && flagCaps === 'up') {
        arrayOfEnLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.remove('hidden');
          else item.classList.add('hidden');
        });
        arrayOfEnUp.forEach((item) => {
          if (arrOfspecSymb.includes(item.textContent)) item.classList.remove('hidden');
          else item.classList.add('hidden');
        });
      } else if (shift === 'ru' && flagCaps === 'up') {
        arrayOfRuLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.remove('hidden');
          else item.classList.add('hidden');
        });
        arrayOfRuUp.forEach((item) => {
          if (arrOfspecSymb.includes(item.textContent)) item.classList.remove('hidden');
          else item.classList.add('hidden');
        });
      }
      break;

    case 'CapsLock':
      e.preventDefault();
      if (flagCaps === 'low' && shift === 'en') {
        arrayOfEnUp.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.remove('hidden');
        });
        arrayOfEnLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.add('hidden');
        });
        flagCaps = 'up';
      } else if (flagCaps === 'low' && shift === 'ru') {
        arrayOfRuUp.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.remove('hidden');
        });
        arrayOfRuLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.add('hidden');
        });
        flagCaps = 'up';
      } else if (flagCaps === 'up' && shift === 'en') {
        arrayOfEnUp.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.add('hidden');
        });
        arrayOfEnLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.remove('hidden');
        });
        flagCaps = 'low';
      } else if (flagCaps === 'up' && shift === 'ru') {
        arrayOfRuUp.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.add('hidden');
        });
        arrayOfRuLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.remove('hidden');
        });
        flagCaps = 'low';
      }
      break;

    case 'AltLeft':
      e.preventDefault();
      changeLang.add(e.code);
      if (changeLang.has('AltLeft') && changeLang.has('ControlLeft')) {
        if (shift === 'en') {
          shift = 'ru';
          flagCaps = 'low';
          arrayOfEnUp.forEach((item) => item.classList.add('hidden'));
          arrayOfEnLow.forEach((item) => item.classList.add('hidden'));
          arrayOfRuLow.forEach((item) => item.classList.remove('hidden'));
        } else {
          shift = 'en';
          flagCaps = 'low';
          arrayOfRuLow.forEach((item) => item.classList.add('hidden'));
          arrayOfRuUp.forEach((item) => item.classList.add('hidden'));
          arrayOfEnLow.forEach((item) => item.classList.remove('hidden'));
        }
      }
      break;

    case 'ControlLeft':
      e.preventDefault();
      changeLang.add(e.code);
      if (changeLang.has('AltLeft') && changeLang.has('ControlLeft')) {
        if (shift === 'en') {
          shift = 'ru';
          flagCaps = 'low';
          arrayOfEnUp.forEach((item) => item.classList.add('hidden'));
          arrayOfEnLow.forEach((item) => item.classList.add('hidden'));
          arrayOfRuLow.forEach((item) => item.classList.remove('hidden'));
        } else {
          shift = 'en';
          flagCaps = 'low';
          arrayOfRuLow.forEach((item) => item.classList.add('hidden'));
          arrayOfRuUp.forEach((item) => item.classList.add('hidden'));
          arrayOfEnLow.forEach((item) => item.classList.remove('hidden'));
        }
      }
      break;

    case 'ControlRight':
      e.preventDefault();
      break;

    case 'AltRight':
      e.preventDefault();
      break;

    case 'MetaLeft':
      e.preventDefault();
      break;

    default:
      e.preventDefault();
      for (let i = 0; i < listCharBtn.length; i += 1) {
        if (!listCharBtn[i].classList.contains('hidden')) textarea.value += listCharBtn[i].textContent;
      }
  }
});

document.body.addEventListener('keyup', (e) => {
  arrayOfButton.forEach((item) => {
    if (item.classList.contains('active')) item.classList.remove('active');
  });
  switch (e.code) {
    case 'ShiftLeft':
      e.preventDefault();
      if (shift === 'en' && flagCaps === 'low') {
        arrayOfEnUp.forEach((item) => item.classList.add('hidden'));
        arrayOfEnLow.forEach((item) => item.classList.remove('hidden'));
      } else if (shift === 'ru' && flagCaps === 'low') {
        arrayOfRuUp.forEach((item) => item.classList.add('hidden'));
        arrayOfRuLow.forEach((item) => item.classList.remove('hidden'));
      } else if (shift === 'en' && flagCaps === 'up') {
        arrayOfEnLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.add('hidden');
          else item.classList.remove('hidden');
        });
        arrayOfEnUp.forEach((item) => {
          if (arrOfspecSymb.includes(item.textContent)) item.classList.add('hidden');
          else item.classList.remove('hidden');
        });
      } else if (shift === 'ru' && flagCaps === 'up') {
        arrayOfRuLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.add('hidden');
          else item.classList.remove('hidden');
        });
        arrayOfRuUp.forEach((item) => {
          if (arrOfspecSymb.includes(item.textContent)) item.classList.add('hidden');
          else item.classList.remove('hidden');
        });
      }
      break;

    case 'ShiftRight':
      e.preventDefault();
      if (shift === 'en' && flagCaps === 'low') {
        arrayOfEnUp.forEach((item) => item.classList.add('hidden'));
        arrayOfEnLow.forEach((item) => item.classList.remove('hidden'));
      } else if (shift === 'ru' && flagCaps === 'low') {
        arrayOfRuUp.forEach((item) => item.classList.add('hidden'));
        arrayOfRuLow.forEach((item) => item.classList.remove('hidden'));
      } else if (shift === 'en' && flagCaps === 'up') {
        arrayOfEnLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.add('hidden');
          else item.classList.remove('hidden');
        });
        arrayOfEnUp.forEach((item) => {
          if (arrOfspecSymb.includes(item.textContent)) item.classList.add('hidden');
          else item.classList.remove('hidden');
        });
      } else if (shift === 'ru' && flagCaps === 'up') {
        arrayOfRuLow.forEach((item) => {
          if (arrOfLetter.includes(item.textContent)) item.classList.add('hidden');
          else item.classList.remove('hidden');
        });
        arrayOfRuUp.forEach((item) => {
          if (arrOfspecSymb.includes(item.textContent)) item.classList.add('hidden');
          else item.classList.remove('hidden');
        });
      }
      break;

    case 'AltLeft':
      e.preventDefault();
      changeLang.clear();
      break;

    case 'ControlLeft':
      e.preventDefault();
      changeLang.clear();
      break;

    case 'CapsLock':
      if (flagCaps === 'up') document.querySelector('.CapsLock').classList.add('active');
      else if (flagCaps === 'low') document.querySelector('.CapsLock').classList.remove('active');
      break;

    default:
      textarea.value += '';
  }
});
