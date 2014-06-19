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
  const PERIOD = 46;

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

    case PERIOD:
      handlePeriod();
      break

    default:
      keyCode = keyboard.isCapitalized() && upperKeyCode ? upperKeyCode :
        keyCode;
      keyboard.sendKey(keyCode, repeat);
      keyboard.setUpperCase({
        isUpperCase: false
      });
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
    var regex = /(}|]|\||\$)/;
    var selectionRange;
    //var regex = /(}+|]|\||$)({\\\w+|_|\^)?[{$]?/;
    var textAfterCursor = keyboard.app.inputContext.textAfterCursor;
    // Avoid jump to next paragraph
    textAfterCursor = textAfterCursor.split('\n')[0];
    // Allow only small jumps
    textAfterCursor = textAfterCursor.slice(0, 70);
    var match = textAfterCursor.match(regex);
    if (match) {
      // If match start at the begin of textAfterCursor we need to do something
      // otherwise the cursor will not move.
      if (match.index === 0) {
        if (textAfterCursor.length === 1) {
          selectionRange = 1;
        } else {
          if (textAfterCursor[1] === ' ') {
            selectionRange = 2;
          } else {
            textAfterCursor = textAfterCursor.slice(1);
            match = textAfterCursor.match(regex);
            selectionRange = 1 + match.index;
          }
        }
      } else {
        selectionRange = match.index;
      }
      keyboard.app.inputContext.setSelectionRange(keyboard.app.inputContext.selectionStart +
          selectionRange, 0);
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
    var backspaceSize = 1;

    var wordsBeforeCursor = keyboard.app.inputContext.textBeforeCursor.split(' ');
    var lastWord = wordsBeforeCursor[wordsBeforeCursor.length - 1];
    // Normally people don't use space at the begin of math environment.
    // If we are at the begin or end of an math environment let split the word.
    lastWord = lastWord.split('$');
    lastWord = lastWord[lastWord.length - 1];

    // If the text before cursor ends with white space the length of last word
    // is 0 and we don't need to do anything.
    if (lastWord.length > 0) {
      switch (lastWord[0]) {
        case '\\':
          // For '\foo\bar' we want to only remove '\bar'.
          var wordsWithSlash = lastWord.split('\\');
          lastWord = '\\' + wordsWithSlash[wordsWithSlash.length - 1];

          // For '\foo{bar}' we want to only remove the last character.
          if (lastWord.search('{') == -1) {
            backspaceSize = lastWord.length;
          }
          break;
      }
    }

    for (var i = 0; i < backspaceSize; i++) {
      keyboard.sendKey(BACKSPACE);
    }
  }

  /*
   * Tree periods must be convert to \dots
   *
   */
  function handlePeriod() {
    var wordsBeforeCursor = keyboard.app.inputContext.textBeforeCursor.split(' ');
    var lastWord = wordsBeforeCursor[wordsBeforeCursor.length - 1];

    if (lastWord === '..') {
      // Remove ..
      keyboard.sendKey(BACKSPACE);
      keyboard.sendKey(BACKSPACE);
      // Insert /dots
      compositeKeyClick('\\dots');
    } else {
      keyboard.sendKey(PERIOD);
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
    var selectionStart = keyboard.app.inputContext.selectionStart;
    var numberSpacesBack = 0;

    if (keyboard.app.inputContext.textBeforeCursor.length === 0 ||
        keyboard.app.inputContext.textBeforeCursor.endsWith(' ') ||
        keyboard.app.inputContext.textBeforeCursor.endsWith('$')) {
      startingNewToken = true;
    } else {
      startingNewToken = false;
    }

    // For '$$' and '||' the place holder is between the symbols.
    if (compositeKey[0] === '$' || compositeKey[0] === '|') {
      numberSpacesBack = compositeKey.length / 2;
    } else {
      // For LaTeX environments
      var match = compositeKey.match(/\\begin{\w+}/);
      if (match) {
        numberSpacesBack = compositeKey.length - match[0].length;
      } else {
        // For LaTeX commands
        match = compositeKey.match(/[}\]]/);
        if (match) {
          // If insert subscript or superscript maybe we want to skip the one of
          // the parameters.
          if (match.index === 1 && match[0] === '}' && !startingNewToken) {
            compositeKey = compositeKey.substr(2);
            numberSpacesBack = compositeKey.length - compositeKey.search('{') - 1;
          }
          else {
            numberSpacesBack = compositeKey.length - match.index;
          }
        }
      }
    }

    for (var i = 0; i < compositeKey.length; i++) {
      keyboard.sendKey(compositeKey.charCodeAt(i));
    }

    // Reset upper case for Greek letters
    keyboard.setUpperCase({
      isUpperCase: false
    });

    selectionStart += compositeKey.length - numberSpacesBack;
    keyboard.app.inputContext.setSelectionRange(selectionStart, 0);
  }

}());
