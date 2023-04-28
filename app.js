const keyboardSymbols = {
  Backquote: ['`', '~', 'ё', 'Ё'],
  Digit1: ['1', '!', '1', '!'],
  Digit2: ['2', '@', '2', '"'],
  Digit3: ['3', '#', '3', '№'],
  Digit4: ['4', '$', '4', ';'],
  Digit5: ['5', '%', '5', '%'],
  Digit6: ['6', '^', '6', ':'],
  Digit7: ['7', '&', '&', '?'],
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
      buttonKeyboard.append(enLowChar);
      const enUpChar = document.createElement('span');
      enUpChar.innerHTML = `${keyboardSymbols[arrayOfKeyObj[i]][1]}`;
      buttonKeyboard.append(enUpChar);
      const ruLowChar = document.createElement('span');
      ruLowChar.innerHTML = `${keyboardSymbols[arrayOfKeyObj[i]][2]}`;
      buttonKeyboard.append(ruLowChar);
      const ruUpChar = document.createElement('span');
      ruUpChar.innerHTML = `${keyboardSymbols[arrayOfKeyObj[i]][3]}`;
      buttonKeyboard.append(ruUpChar);
    } else {
      const fixChar = document.createElement('span');
      fixChar.innerHTML = `${keyboardSymbols[arrayOfKeyObj[i]]}`;
      buttonKeyboard.append(fixChar);
    }
  }
}
createKeyboardButton();

const arrayOfButton = document.querySelectorAll('.button');
document.body.addEventListener('keydown', (e) => {
  arrayOfButton.forEach((item) => {
    if (item.classList.contains(`${e.code}`)) item.classList.add('active');
  });
  switch (e.code) {
    case 'Backspace':
      textarea.innerHTML = textarea.innerHTML.slice(0, textarea.innerHTML.length - 1);
      break;

    case 'Enter':
      textarea.innerHTML += '\n';
      break;

    case 'Tab':
      e.preventDefault();
      textarea.innerHTML += '    ';
      break;

    case 'ArrowUp':
      e.preventDefault();
      textarea.innerHTML += '&#9650;';
      break;

    case 'ArrowLeft':
      e.preventDefault();
      textarea.innerHTML += '&#9668;';
      break;

    case 'ArrowDown':
      e.preventDefault();
      textarea.innerHTML += '&#9660;';
      break;

    case 'ArrowRight':
      e.preventDefault();
      textarea.innerHTML += '&#9658;';
      break;

    default:
      textarea.innerHTML += e.key;
  }
});

document.body.addEventListener('keyup', () => {
  arrayOfButton.forEach((item) => {
    if (item.classList.contains('active')) item.classList.remove('active');
  });
});
