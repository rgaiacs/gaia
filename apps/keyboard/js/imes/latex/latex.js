/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

/*
 * This LaTeX input method provides two form of input assistance:
 *
 * 1) input place correction
 * 2) backspace composite key
 *
 */

(function() {
  // Register ourselves in the keyboard's set of input methods
  // The functions used here are all defined below
  InputMethods.latex = {
    init: init,
    activate: activate,
    deactivate: deactivate,
    click: click,
    compositeKeyClick: compositeKeyClick
  };

  // This is the object that is passed to init().
  // We use the methods of this object to communicate with the keyboard.
  var keyboard;

  // These variables are the input method's state. Most of them are
  // passed to the activate() method or are derived in that method.
  var cursor;             // The insertion position
  var cursor_correction;  // Are we correcting input place?
  var inputText;          // The input text
  var selection;          // The end of the selection, if there is one, or 0

  // Some keycodes that we use
  const BACKSPACE = KeyEvent.DOM_VK_BACK_SPACE;
  const RETURN = KeyEvent.DOM_VK_RETURN;

  // keyboard.js calls this to pass us the interface object we need
  // to communicate with it
  function init(interfaceObject) {
    keyboard = interfaceObject;
  }

  // This gets called whenever the keyboard pops up to tell us everything
  // we need to provide useful typing assistance. It also gets called whenever
  // the user taps on an input field to move the cursor. That means that there
  // may be multiple calls to activate() without calls to deactivate between
  // them.
  function activate(lang, state, options) {
    inputText = state.value;
    cursor = state.selectionStart;
    if (state.selectionEnd > state.selectionStart) {
      selection = state.selectionEnd;
    } else {
      selection = 0;
    }
  }

  function deactivate() {
    return;
  }

  /*
   * The keyboard calls this method to tell us about user input.
   *
   * What we do with the input depends on various things.
   *
   */
  function click(keyCode, upperKeyCode, repeat) {
    switch (keyCode) {
    case RETURN:
      handleReturn();
      break;

    case BACKSPACE:
      handleBackspace();
      break;

    default:
      keyCode = keyboard.isCapitalized() && upperKeyCode ? upperKeyCode :
        keyCode;
      keyboard.sendKey(keyCode, repeat);
      keyboard.resetUpperCase();
      break;
    }
  }

  /*
   * Return key is used to jump for outside of LaTeX commands and environments.
   * If the cursor is already outside of LaTeX commands and environments we
   * insert a line break.
   *
   */
  function handleReturn() {
    // The following regex don't work for \underset{}{\overset{}{}}
    var regex = /[}\]][_^]?{?/;
    var match = fakeAppObject.inputContext.textAfterCursor.match(regex);
    if (match) {
      fakeAppObject.inputContext.setSelectionRange(fakeAppObject.inputContext.selectionStart +
          match.index + match[0].length, 0);
    } else {
      keyboard.sendKey(RETURN);
    }
  }

  /*
   * Backspace key will remove LaTeX commands but it don't remove its
   * parameters.
   *
   */
  function handleBackspace() {
    var regex = /\\\w+/;
    var wordsBeforeCursor = fakeAppObject.inputContext.textBeforeCursor.split(' ');
    var lastWord = wordsBeforeCursor[wordsBeforeCursor.length - 1];
    var match = lastWord.match(regex);
    if (match) {
      for (var i = 0; i < match[0].length; i++) {
        keyboard.sendKey(BACKSPACE);
      }
    } else {
      keyboard.sendKey(BACKSPACE);
    }
  }

  /*
   * The keyboard calls this method to tell us about user compositeKey input.
   *
   * After input the compositeKey the cursor is moved to where the user will
   * input the next character.
   *
   */
  function compositeKeyClick(compositeKey, repeat) {
    var startingNewToken;
    var selectionStart = fakeAppObject.inputContext.selectionStart;
    var numberSpacesBack;

    if (fakeAppObject.inputContext.textBeforeCursor.length === 0 ||
        fakeAppObject.inputContext.textBeforeCursor.endsWith(' ')) {
      startingNewToken = true;
    } else {
      startingNewToken = false;
    }

    switch (compositeKey) {
    case '{}_{}':
      if (!startingNewToken) {
        compositeKey = '_{}';
        numberSpacesBack = 1;
      } else {
        numberSpacesBack = 4;
      }
      break;

    case '\\sqrt{}':
      numberSpacesBack = 1;
      break;

    case '\\sqrt[]{}':
      numberSpacesBack = 3;
      break;

    case '||':
      numberSpacesBack = 1;
      break;

    case '\\frac{}{}':
      numberSpacesBack = 3;
      break;

    case '{}_{}^{}':
      if (!startingNewToken) {
        compositeKey = '_{}^{}';
        numberSpacesBack = 4;
      } else {
        numberSpacesBack = 7;
      }
      break;

    case '{}^{}':
      if (!startingNewToken) {
        compositeKey = '^{}';
        numberSpacesBack = 1;
      } else {
        numberSpacesBack = 4;
      }
      break;

    case '\\underset{}{}':
      numberSpacesBack = 3;
      break;

    case '\\underset{}{\\overset{}{}}':
      numberSpacesBack = 15;
      break;

    case '\\overset{}{}':
      numberSpacesBack = 3;
      break;

    case '\\begin{matrix}\\end{matrix}':
      numberSpacesBack = 12;
      break;

    case '\\hat{}':
      numberSpacesBack = 1;
      break;

    default:
      numberSpacesBack = 0;
      break;
    }

    for (var i = 0; i < compositeKey.length; i++) {
      keyboard.sendKey(compositeKey.charCodeAt(i));
    }

    // Reset upper case for Greek letters
    keyboard.resetUpperCase();

    selectionStart += compositeKey.length - numberSpacesBack;
    fakeAppObject.inputContext.setSelectionRange(selectionStart, 0);
  }

}());
