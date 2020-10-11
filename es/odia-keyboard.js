'use strict';

const ascii$1 = {
  TAB:    9,
  SPACE:  32,

  ZERO:   48,
  ONE:    49,
  TWO:    50,
  THREE:  51,
  FOUR:   52,
  FIVE:   53,
  SIX:    54,
  SEVEN:  55,
  EIGHT:  56,
  NINE:   57,

  COLON:  58,
  CAP:    94,
  TICK:   96,
  TILDE:  126,

  A: 65, B: 66, C: 67, D: 68, E: 69,
  F: 70, G: 71, H: 72, I: 73, J: 74,
  K: 75, L: 76, M: 77, N: 78, O: 79,
  P: 80, Q: 81, R: 82, S: 83, T: 84,
  U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,

  a:  97, b:  98, c:  99, d: 100, e: 101,
  f: 102, g: 103, h: 104, i: 105, j: 106,
  k: 107, l: 108, m: 109, n: 110, o: 111,
  p: 112, q: 113, r: 114, s: 115, t: 116,
  u: 117, v: 118, w: 119, x: 120, y: 121, z: 122,
};

const abstract = {
  VIRAM: 1,
  VRU: 2,
  RU: 3,
  ZWJ: 4,
  ZWNJ: 5,
};

const special = {
  [ascii$1.SPACE]:  ' ',
  [ascii$1.COLON]:  '\u0b03', // VISARGA
  [ascii$1.CAP]:    '\u0b01', // CHANDRA BINDU
  [ascii$1.M]:      '\u0b02', // ANUSWAR
  [ascii$1.TICK]:   '\u0b4d', // HALANT
  [ascii$1.E]:      '\u0b3d', // ABAGRAHA
  [ascii$1.V]:      '\u0b70', // ISSHAR
  [ascii$1.Q]:      '\u0950', // OMM
  [ascii$1.q]:      '\u20b9', // RUPEE

  [abstract.VIRAM]: '\u0b4d',
  [abstract.ZWJ]: '\u200d',
  [abstract.ZWNJ]: '\u200c',
};

const numeric = {
  [ascii$1.ZERO]:   '\u0b66',
  [ascii$1.ONE]:    '\u0b67',
  [ascii$1.TWO]:    '\u0b68',
  [ascii$1.THREE]:  '\u0b69',
  [ascii$1.FOUR]:   '\u0b6a',
  [ascii$1.FIVE]:   '\u0b6b',
  [ascii$1.SIX]:    '\u0b6c',
  [ascii$1.SEVEN]:  '\u0b6d',
  [ascii$1.EIGHT]:  '\u0b6e',
  [ascii$1.NINE]:   '\u0b6f',
};

const vowel = {
  [ascii$1.a]: '\u0b05',
  [ascii$1.A]: '\u0b06',
  [ascii$1.i]: '\u0b07',
  [ascii$1.I]: '\u0b08',
  [ascii$1.u]: '\u0b09',
  [ascii$1.U]: '\u0b0a',
  [ascii$1.R]: '\u0b0b',
  [ascii$1.O]: '\u0b0c',
  [ascii$1.e]: '\u0b0f',
  [ascii$1.o]: '\u0b13',
};

const vowelCombination = [
  [ascii$1.a, ascii$1.a, '\u0b06'],
  [ascii$1.e, ascii$1.e, '\u0b08'],
  [ascii$1.o, ascii$1.o, '\u0b0a'],
  [ascii$1.R, ascii$1.U, '\u0b60'],
  [ascii$1.a, ascii$1.i, '\u0b10'],
  [ascii$1.a, ascii$1.u, '\u0b14'],
];

const consonant = {
  ...special,

  [ascii$1.k]: '\u0b15',
  [ascii$1.g]: '\u0b17',
  [ascii$1.c]: '\u0b1a',
  [ascii$1.C]: '\u0b1b',
  [ascii$1.j]: '\u0b1c',
  [ascii$1.z]: '\u0b1d',
  [ascii$1.T]: '\u0b1f',
  [ascii$1.D]: '\u0b21',
  [ascii$1.N]: '\u0b23',
  [ascii$1.t]: '\u0b24',
  [ascii$1.d]: '\u0b26',
  [ascii$1.n]: '\u0b28',
  [ascii$1.p]: '\u0b2a',
  [ascii$1.f]: '\u0b2b',
  [ascii$1.b]: '\u0b2c',
  [ascii$1.v]: '\u0b2d',
  [ascii$1.m]: '\u0b2e',
  [ascii$1.y]: '\u0b2f',
  [ascii$1.r]: '\u0b30',
  [ascii$1.l]: '\u0b32',
  [ascii$1.L]: '\u0b33',
  [ascii$1.w]: '\u0b35',
  [ascii$1.W]: '\u0b71',
  [ascii$1.s]: '\u0b38',
  [ascii$1.S]: '\u0b37',
  [ascii$1.x]: '\u0b15\u0b4d\u0b37',
  [ascii$1.h]: '\u0b39',
  [ascii$1.Y]: '\u0b5f',

  [ascii$1.a]: '',
  [ascii$1.A]: '\u0b3e',
  [ascii$1.i]: '\u0b3f',
  [ascii$1.I]: '\u0b40',
  [ascii$1.u]: '\u0b41',
  [ascii$1.U]: '\u0b42',
  [ascii$1.e]: '\u0b47',
  [ascii$1.O]: '\u0b62',
  [ascii$1.o]: '\u0b4b',
  [ascii$1.R]: '\u0b43',
};

const consonantCombination = [
  [ascii$1.k, ascii$1.h, '\u0b16'],
  [ascii$1.g, ascii$1.h, '\u0b18'],
  [ascii$1.c, ascii$1.h, '\u0b1a'],
  [ascii$1.C, ascii$1.h, '\u0b1b'],
  [ascii$1.j, ascii$1.h, '\u0b1d'],
  [ascii$1.T, ascii$1.h, '\u0b20'],
  [ascii$1.D, ascii$1.h, '\u0b22'],
  [ascii$1.t, ascii$1.h, '\u0b25'],
  [ascii$1.d, ascii$1.h, '\u0b27'],
  [ascii$1.p, ascii$1.h, '\u0b2b'],
  [ascii$1.b, ascii$1.h, '\u0b2d'],
  [ascii$1.s, ascii$1.h, '\u0b36'],
  [ascii$1.S, ascii$1.h, '\u0b37'],

  [ascii$1.a, ascii$1.a, '\u0b3e'],
  [ascii$1.e, ascii$1.e, '\u0b40'],
  [ascii$1.o, ascii$1.o, '\u0b42'],
  [ascii$1.a, ascii$1.i, '\u0b48'],
  [ascii$1.a, ascii$1.u, '\u0b4c'],
  [ascii$1.R, ascii$1.U, '\u0b43'],

  [ascii$1.N, ascii$1.G, '\u0b19'],
  [ascii$1.N, ascii$1.Y, '\u0b1e'],
  [ascii$1.D, ascii$1.D, '\u0b5c'],
  [ascii$1.D, ascii$1.H, '\u0b5d'],
  [ascii$1.J, ascii$1.n, '\u0b1c\u0b4d\u0b1e'],
];

class FSM {
  constructor () {
    this.isNative = false;
    this.reset();
  }

  reset () {
    this.prevKey = ascii$1.SPACE;
    this.prevCons = false;
    this.prevPrevCons = false;

    this.hidden = false;
    this.posChanged = true;
  }

  toggleLang () {
    this.reset();
    this.isNative = !this.isNative;
    return this.isNative ? 'native' : 'odia';
  }

  input (char) {
    const noModifications = [0, char];
    if (this.isNative) return noModifications;

    let dist = 0;
    let str = '';
    let keycode = char.charCodeAt(0);

    if (!this.isAllowedKey(keycode)) {
      this.reset();
      return noModifications;
    }

    if (this.posChanged) {
      this.prevKey = ascii$1.SPACE;
      this.hidden = false;
      this.prevCons = false;
      this.prevPrevCons = false;
    }

    let x, y;
    switch (char) {
      case 'a':
        x = this.getConsonantCombination(this.prevKey, keycode);
        y = this.getVowelCombination(this.prevKey, keycode);
        if (this.prevCons) {
          dist = 0;
          str = consonant[keycode];
        } else {
          if (y) {
            if (this.prevPrevCons) {
              dist = 0;
              str = x;
            } else {
              dist -= 1;
              str = y;
            }
          } else {
            dist = 0;
            str = vowel[keycode];
          }
        }
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'I':
      case 'O':
      case 'U':
        x = this.getConsonantCombination(this.prevKey, keycode);
        y = this.getVowelCombination(this.prevKey, keycode);
        if (this.prevCons) {
          dist = 0;
          str = consonant[keycode];
        } else {
          if (y) {
            if (this.prevPrevCons) {
              dist = this.prevKey === keycode ? dist - 1 : 0;
              str = x;
            } else {
              dist -= 1;
              str = y;
            }
          } else {
            dist = 0;
            str = vowel[keycode];
          }
        }
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case 'R':
        dist = 0;
        str = this.prevCons ? consonant[keycode] : vowel[keycode];
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case 'M':
      case '^':
      case ':':
      case 'E':
      case 'V':
      case 'q':
      case 'Q':
        str = consonant[keycode];
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case '`':
        str = this.prevCons ? consonant[abstract.VIRAM] : '`';
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case '~':
        str = this.prevCons ? consonant[abstract.VIRAM] + consonant[abstract.ZWJ] : '~';
        this.prevPrevCons = this.prevCons;
        this.prevCons = false;
        this.hidden = false;
        break;

      case ' ':
        dist = 0;
        str = ' ';
        this.prevPrevCons = false;
        this.prevCons = false;
        this.hidden = false;
        break;

      default:
        x = this.getConsonantCombination(this.prevKey, keycode);
        if (this.hidden) {
          if (x) {
            dist = 0;
            str = this.prevPrevCons ? consonant[abstract.VIRAM] + x : x;
            this.reset();
            this.prevPrevCons = false;
            this.prevCons = true;
          } else {
            if (consonant[keycode]) {
              dist = 0;
              str = (this.prevCons && !this.prevPrevCons) ?
                consonant[abstract.VIRAM] + consonant[keycode] : consonant[keycode];
              this.reset();
              this.prevPrevCons = this.prevCons;
              this.prevCons = true;
              this.hidden = false;
            } else {
              dist = 0;
              this.prevPrevCons = this.prevCons;
              this.prevCons = false;
            }
          }
        } else {
          if (x) {
            dist -= 1;
            str = x;
            this.reset();
            this.prevPrevCons = false;
            this.prevCons = true;
          } else {
            if (consonant[keycode]) {
              dist = 0;
              str = (this.prevCons && !this.prevPrevCons) ?
                consonant[abstract.VIRAM] + consonant[keycode] : consonant[keycode];
              this.reset();
              this.prevPrevCons = this.prevCons;
              this.prevCons = true;
            } else {
              if (numeric[keycode]) {
                dist = 0;
                str = numeric[keycode];
                this.prevPrevCons = this.prevCons;
                this.prevCons = false;
              } else {
                this.prevPrevCons = this.prevCons;
                this.prevCons = true;
                this.hidden = true;
              }
            }
          }
        }
        break;
    }

    this.prevKey = keycode;
    this.posChanged = false;
    return [dist, str];
  }

  isAllowedKey (keycode) {
    if (
      keycode < 32
      || keycode >= 33 && keycode <= 47
      || keycode >= 59 && keycode <= 64
      || keycode >= 91 && keycode <= 93
      || keycode === 95
      || keycode >= 123 && keycode <= 125
      || keycode >= 127
    ) return false;

    return true;
  }

  getVowelCombination (x, y) {
    for (const comb of vowelCombination) {
      if (comb[0] === x && comb[1] === y) {
        return comb[2];
      }
    }
  }

  getConsonantCombination (x, y) {
    for (const comb of consonantCombination) {
      if (comb[0] === x && comb[1] === y) {
        return comb[2];
      }
    }
  }

}

const nop = () => true;

class OdiaKeyboardDriver {
  constructor (el, onChange = nop, onLangChange = nop) {
    this.el = el;
    this.fsm = new FSM();

    this.onChange = val => onChange(val);
    this.onLangChange = val => onLangChange(val);
    this.init();
  }

  init () {
    document.body.addEventListener('keydown', (e) => {
      if (this.el.contains(e.target)) {
        if (e.keyCode === ascii.TAB) {
          e.preventDefault();
          this.toggleLang();
          return;
        }
      }
    });
    this.el.addEventListener('keypress', this.handleKeyPress.bind(this));
    this.el.addEventListener('keyup', this.changeCursor.bind(this));
  }

  toggleLang () {
    const lang = this.fsm.toggleLang();
    this.onLangChange(lang);
  }

  handleKeyPress (e) {
    if (!this.isNative) {
      this.modify(e);
    }
    this.onChange(this.el.value);
  }

  changeCursor () {
    if (this.el.createTextRange) {
      this.el.cursorPos = document.selection.createRange().duplicate();
    }
    if (this.el.value.length === 0) this.fsm.reset();
  }

  modify (e) {
    if (e.altKey || e.ctrlKey) return true;
    e.preventDefault();

    const keycode = document.all ? e.keyCode : e.which;
    const char = String.fromCharCode(keycode);

    const [dist, str] = this.fsm.input(char);
    const val = this.el.value;
    const len = val.length;

    if (this.el.setSelectionRange) {
      const start = this.el.selectionStart;
      const left = val.substring(0, start + dist);
      const right = val.substring(start, len);
      const top = this.el.scrollTop;

      const end = str !== undefined ? start + dist + str.length : start + dist;
      this.el.value = left + str + right;
      this.el.scrollTop = top;
      this.el.focus();
      this.el.setSelectionRange(end, end);
    } else if (this.el.createTextRange && this.el.cursorPos) {
      const pos = this.el.cursorPos;
      pos.moveStart('character', dist);
      pos.text = (pos.text.charAt(pos.text.length - 1) === ' ') ?
        str + ' ' : str;
      pos.collapse(false);
      pos.scrollIntoView(true);
    } else {
      if (dist === 0) {
        this.el.value += str;
      } else {
        this.el.value = val.substring(0, len - 1) + str;
      }
    }

    this.el.focus();
    return false;
  }
}

module.exports = OdiaKeyboardDriver;
