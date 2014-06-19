Keyboards.latex = {
  label: 'LaTeX',
  shortLabel: 'TeX',
  imEngine: 'latex',
  types: ['text', 'url', 'email'],
  menuLabel: 'LaTeX',
  alt: {
    a: 'áàâäåãāæ',
    c: 'çćč',
    e: 'éèêëēę€ɛ',
    i: 'ïíìîīį',
    o: 'öóòôōœøɵ',
    u: 'üúùûū',
    s: 'ßśš$',
    S: 'ŚŠ$',
    n: 'ñń',
    l: 'ł£',
    y: 'ÿ¥',
    z: 'žźż',
    '.': ',?!;:'
  },
  keys: [
    [
      { value: 'CTRL', ratio: 10, keyCode: KeyboardEvent.DOM_VK_CONTROL }
    ],
    [
      { value: 'q' }, { value: 'w' }, { value: 'e' } , { value: 'r' },
      { value: 't' } , { value: 'y' }, { value: 'u' } , { value: 'i' },
      { value: 'o' }, { value: 'p' }
    ], [
      { value: 'a' }, { value: 's' }, { value: 'd' }, { value: 'f' },
      { value: 'g' } , { value: 'h' }, { value: 'j' }, { value: 'k' },
      { value: 'l' },
      { value: ':', visible: ['url']}, { value: '_', visible: ['email']}
    ], [
      { value: '⇪', ratio: 1.5, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: 'z' }, { value: 'x' }, { value: 'c' }, { value: 'v' },
      { value: 'b' }, { value: 'n' }, { value: 'm' },
      { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ],
  alternateLayout: {
    alt: {
      '0': 'º',
      '1': '1st ',
      '2': '2nd ',
      '3': '3rd ',
      '4': '4th ',
      '5': '5th ',
      '6': '6th ',
      '7': '7th ',
      '8': '8th ',
      '9': '9th ',
      '$': '€ £ ¥',
      '?': '¿',
      '!': '¡'
    },
    keys: [
      [
        { value: 'CTRL', ratio: 10, keyCode: KeyboardEvent.DOM_VK_CONTROL }
      ],
      [
        { value: '1' }, { value: '2' }, { value: '3' } , { value: '4' },
        { value: '5' } , { value: '6' }, { value: '7' } , { value: '8' },
        { value: '9' }, { value: '0' }
      ], [
        { value: '@', hidden: ['email'] }, { value: '#' }, { value: '$' },
        { value: '%' }, { value: '&' } , { value: '*' }, { value: '-' },
        { value: '+' }, { value: '(' }, { value: ')' },
        { value: '_', visible: ['email'] }
      ], [
        { value: 'ALT', ratio: 1.5, keyCode: KeyEvent.DOM_VK_ALT },
        { value: '!' }, { value: '\"' }, { value: "'" }, { value: ':' },
        { value: ';' }, { value: '/' }, { value: '?' },
        { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
      ], [
        { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
        { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
      ]
    ]
  },
  symbolLayout: {
    keys: [
      [
        { value: 'CTRL', ratio: 10, keyCode: KeyboardEvent.DOM_VK_CONTROL }
      ],
      [
        { value: '`' }, { value: '~' }, { value: '_' }, { value: '^' },
        { value: '±' }, { value: '|' }, { value: '[' }, { value: ']' },
        { value: '{' }, { value: '}' }
      ], [
        { value: '°' }, { value: '²' }, { value: '³' }, { value: '©' },
        { value: '®' }, { value: '§' }, { value: '<' }, { value: '>' },
        { value: '«' }, { value: '»' }
      ],
      [
        { value: 'ALT', ratio: 1.5, keyCode: KeyEvent.DOM_VK_ALT },
        { value: '¥' }, { value: '€' }, { value: '£' }, { value: '$' },
        { value: '¢' }, { value: '\\' }, { value: '=' },
        { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
      ], [
        { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
        { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
      ]
    ]
  },
  latexGreekLayout: {
    keys: [
      [
        { value: 'CTRL', ratio: 10, keyCode: KeyboardEvent.DOM_VK_CONTROL }
      ],
      [
        { value: 'ς', compositeKey: '\\varsigma', upperCompositeKey: 'S' },
        { value: 'ε', compositeKey: '\\epsilon', upperCompositeKey: 'E' },
        { value: 'ρ', compositeKey: '\\rho', upperCompositeKey: 'P' },
        { value: 'τ', compositeKey: '\\tau', upperCompositeKey: 'T' },
        { value: 'υ', compositeKey: '\\upsilon', upperCompositeKey: '\\Upsilon' },
        { value: 'θ', compositeKey: '\\theta', upperCompositeKey: '\\Theta' },
        { value: 'ι', compositeKey: '\\iota', upperCompositeKey: 'I' },
        { value: 'ο', compositeKey: '\\omicron', uppercase: 'O' },
        { value: 'π', compositeKey: '\\pi', upperCompositeKey: '\\Pi' }
      ], [
        { value: 'α', compositeKey: '\\alpha', upperCompositeKey: '\\Alpha' },
        { value: 'σ', compositeKey: '\\sigma', upperCompositeKey: '\\Sigma' },
        { value: 'δ', compositeKey: '\\delta', upperCompositeKey: '\\Delta' },
        { value: 'φ', compositeKey: '\\varphi', upperCompositeKey: 'P' },
        { value: 'γ', compositeKey: '\\gamma', upperCompositeKey: '\\Gamma' },
        { value: 'η', compositeKey: '\\eta', upperCompositeKey: 'H' },
        { value: 'ξ', compositeKey: '\\xi', upperCompositeKey: '\\Xi' },
        { value: 'κ', compositeKey: '\\kappa', upperCompositeKey: 'K' },
        { value: 'λ', compositeKey: '\\lambda', upperCompositeKey: '\\Lambda' },
      ], [
        { value: '⇪', ratio: 1.5, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
        { value: 'ζ', compositeKey: '\\zeta', upperCompositeKey: 'Z' },
        { value: 'χ', compositeKey: '\\chi', upperCompositeKey: 'χ' },
        { value: 'ψ', compositeKey: '\\psi', upperCompositeKey: '\\Psi' },
        { value: 'ω', compositeKey: '\\omega', upperCompositeKey: '\\Omega' },
        { value: 'β', compositeKey: '\\beta', upperCompositeKey: 'B' },
        { value: 'ν', compositeKey: '\\nu', upperCompositeKey: 'N' },
        { value: 'μ', compositeKey: '\\mu', upperCompositeKey: 'M' },
        { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
      ], [
        { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
        { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
      ]
    ]
  },
  latexSymbolsLayout: {
  keyClassName: 'math',
  alt: {
    '<math><msqrt><mi>x</mi></msqrt></math>': [
        { value: '<math><mroot><mi>x</mi><mi>n</mi></mroot></math>', compositeKey: '\\sqrt[]{}' }
    ],
    '<math><mo>&lt;</mo></math>': [
        { value: '<math><mo>≤</mo></math>', compositeKey: '\\leq' },
        { value: '<math><mo>≦</mo></math>', compositeKey: '\\leqq' },
        { value: '<math><mo>≪</mo></math>', compositeKey: '\\ll' }
    ],
    '<math><mo>&gt;</mo></math>': [
        { value: '<math><mo>≥</mo></math>', compositeKey: '\\geq' },
        { value: '<math><mo>≧</mo></math>', compositeKey: '\\geqq' },
        { value: '<math><mo>≫</mo></math>', compositeKey: '\\gg' }
    ],
    '<math><mo>=</mo></math>': [
        { value: '<math><mo>≡</mo></math>', compositeKey: '\\equiv' },
        { value: '<math><mo>≠</mo></math>', compositeKey: '\\neq' },
        { value: '<math><mo>~</mo></math>', compositeKey: '\\sim' },
        { value: '<math><mo>≈</mo></math>', compositeKey: '\\approx' }
    ],
    '<math><mrow><mo>|</mo><mi>x</mi><mo>|</mo></mrow></math>': [
        { value: '<math><mrow><mo>‖</mo><mi>x</mi><mo>‖</mo></mrow></math>', compositeKey: '\\|\\|' },
    ],
    '<math><mo>∫</mo></math>': [
        { value: '<math><mo>∬</mo></math>', compositeKey: '\\iint' },
        { value: '<math><mo>∭</mo></math>', compositeKey: '\\iiint' },
        { value: '<math><mo>∮</mo></math>', compositeKey: '\\oint' },
        { value: '<math><mo>∯</mo></math>', compositeKey: '\\oiint' },
        { value: '<math><mo>∰</mo></math>', compositeKey: '\\oiiint' },
        { value: '<math><mo>∲</mo></math>', compositeKey: '\\ointclockwise' },
        { value: '<math><mo>∳</mo></math>', compositeKey: '\\ointctrclockwise' }
    ],
    '<math><mo>(</mo></math>': [
        { value: '<math><mo>[</mo></math>', compositeKey: '[' },
        { value: '<math><mo>{</mo></math>', compositeKey: '\\{' },
        { value: '<math><mo>⟨</mo></math>', compositeKey: '\\langle' },
        { value: '<math><mo>⟪</mo></math>', compositeKey: '\\lang' },
        { value: '<math><mo>⌈</mo></math>', compositeKey: '\\lceil' },
        { value: '<math><mo>⌊</mo></math>', compositeKey: '\\lfloor' }
    ],
    '<math><mo>)</mo></math>': [
        { value: '<math><mo>]</mo></math>', compositeKey: ']' },
        { value: '<math><mo>}</mo></math>', compositeKey: '\\}' },
        { value: '<math><mo>⟩</mo></math>', compositeKey: '\\rangle' },
        { value: '<math><mo>⟫</mo></math>', compositeKey: '\\rang' },
        { value: '<math><mo>⌉</mo></math>', compositeKey: '\\rceil' },
        { value: '<math><mo>⌋</mo></math>', compositeKey: '\\rfloor' }
    ],
    '<math><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></math>': [
        { value: '<math><mfenced open="(" close=")"><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{pmatrix}\\end{pmatrix}' },
        { value: '<math><mfenced open="[" close="]"><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{bmatrix}\\end{bmatrix}' },
        { value: '<math><mfenced open="{" close="}"><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{Bmatrix}\\end{Bmatrix}' },
        { value: '<math><mfenced open="|" close="|"><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{vmatrix}\\end{vmatrix}' },
        { value: '<math><mfenced> open="‖" close="‖"<mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{Vmatrix}\\end{Vmatrix}' },
        { value: '<math><mfenced open="{" close=""><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{cases}\\end{cases}' }
    ],
    '<math><mover><mi>x</mi><mo>^</mo></mover></math>': [
        { value: '<math><mover><mi>x</mi><mo>ˇ</mo></mover></math>', compositeKey: '\\check{x}' },
        { value: '<math><mover><mi>x</mi><mo>`</mo></mover></math>', compositeKey: '\\grave{x}' },
        { value: '<math><mover><mi>x</mi><mo>ˊ</mo></mover></math>', compositeKey: '\\acute{x}' },
        { value: '<math><mover><mi>x</mi><mo>~</mo></mover></math>', compositeKey: '\\tilde{x}' },
        { value: '<math><mover><mi>x</mi><mo>-</mo></mover></math>', compositeKey: '\\bar{x}' },
        { value: '<math><mover><mi>x</mi><mo>˘</mo></mover></math>', compositeKey: '\\breve{x}' },
        { value: '<math><mover><mi>x</mi><mo>˳</mo></mover></math>', compositeKey: '\\mathring{x}' },
        { value: '<math><mover><mi>x</mi><mo>˙</mo></mover></math>', compositeKey: '\\dot{x}' },
        { value: '<math><mover><mi>x</mi><mo>˙˙</mo></mover></math>', compositeKey: '\\ddot{x}' },
        { value: '<math><mover><mi>x</mi><mo>→</mo></mover></math>', compositeKey: '\\vec{x}' },
    ],
    '<math><mo>ℕ</mo></math>': [
        { value: '<math><mo>ℤ</mo></math>', compositeKey: '\\mathbb{Z}' },
        { value: '<math><mo>ℚ</mo></math>', compositeKey: '\\mathbb{Q}' },
        { value: '<math><mo>ℝ</mo></math>', compositeKey: '\\mathbb{R}' },
        { value: '<math><mo>ℂ</mo></math>', compositeKey: '\\mathbb{C}' },
        { value: '<math><mo>ℙ</mo></math>', compositeKey: '\\mathbb{P}' },
        { value: '<math><mo>ℍ</mo></math>', compositeKey: '\\mathbb{H}' },
        { value: '<math><mo>ℜ</mo></math>', compositeKey: '\\Re' },
        { value: '<math><mo>ℑ</mo></math>', compositeKey: '\\Im' }
    ],
    '<math><mo>←</mo></math>': [
        { value: '<math><mo>↚</mo></math>', compositeKey: '\\nleftarrow' },
        { value: '<math><mo>⟵</mo></math>', compositeKey: '\\longleftarrow' },
        { value: '<math><mo>⇐</mo></math>', compositeKey: '\\Leftarrow' },
        { value: '<math><mo>⇍</mo></math>', compositeKey: '\\nLeftarrow' },
        { value: '<math><mo>⟸</mo></math>', compositeKey: '\\Longleftarrow' }
    ],
    '<math><mo>↔</mo></math>': [
        { value: '<math><mo>↮</mo></math>', compositeKey: '\\nleftrightarrow' },
        { value: '<math><mo>⟷</mo></math>', compositeKey: '\\longleftrightarrow' },
        { value: '<math><mo>⇔</mo></math>', compositeKey: '\\Leftrightarrow' },
        { value: '<math><mo>⇎</mo></math>', compositeKey: '\\nLeftrightarrow' },
        { value: '<math><mo>⟺</mo></math>', compositeKey: '\\Longleftrightarrow' }
    ],
    '<math><mo>→</mo></math>': [
        { value: '<math><mo>↛</mo></math>', compositeKey: '\\nrightarrow' },
        { value: '<math><mo>⟶</mo></math>', compositeKey: '\\longrightarrow' },
        { value: '<math><mo>⇒</mo></math>', compositeKey: '\\Rightarrow' },
        { value: '<math><mo>⇏</mo></math>', compositeKey: '\\nRightarrow' },
        { value: '<math><mo>⟹</mo></math>', compositeKey: '\\Longrightarrow' }
    ]
  },
  keys: [
      [
        { value: 'CTRL', ratio: 10, keyCode: KeyboardEvent.DOM_VK_CONTROL }
      ],
    [
      { value: '<math><msub><mi>x</mi><mi>y</mi></msub></math>', compositeKey: '{}_{}' },
      { value: '<math><msqrt><mi>x</mi></msqrt></math>', compositeKey: '\\sqrt{}' },
      { value: '<math><mo>&lt;</mo></math>', compositeKey: '<' },
      { value: '<math><mo>&gt;</mo></math>', compositeKey: '>' },
      { value: '<math><mo>=</mo></math>', compositeKey: '=' },
      { value: '<math><mrow><mo>|</mo><mi>x</mi><mo>|</mo></mrow></math>', compositeKey: '||' },
      { value: '<math><mfrac><mi>x</mi><mi>y</mi></mfrac>', compositeKey: '\\frac{}{}' },
      { value: '<math><mo>×</mo></math>', compositeKey: '\\times' },
      { value: '<math><msubsup><mi>x</mi><mi>y</mi><mi>z</mi></msubsup></math>', compositeKey: '{}_{}^{}' },
      { value: '<math><msup><mi>x</mi><mi>y</mi></msup></math>', compositeKey: '{}^{}' }
    ], [
      { value: '<math><munder><mi>x</mi><mi>y</mi></munder></math>', compositeKey: '\\underset{}{}' },
      { value: '<math><mo>∫</mo></math>', compositeKey: '\\int' },
      { value: '<math><mo>(</mo></math>', compositeKey: '\\left(' },
      { value: '<math><mo>)</mo></math>', compositeKey: '\\right)' },
      { value: '<math><mo>∂</mo></math>', compositeKey: '\\partial' },
      { value: '<math><mo>∇</mo></math>', compositeKey: '\\nabla' },
      { value: '<math><mo>+</mo></math>', compositeKey: '+' },
      { value: '<math><mo>-</mo></math>', compositeKey: '-' },
      { value: '<math><munderover><mi>x</mi><mi>y</mi><mi>z</mi></munderover></math>', compositeKey: '\\underset{}{\\overset{}{}}' },
      { value: '<math><mover><mi>x</mi><mi>y</mi></mover></math>', compositeKey: '\\overset{}{}' },
    ], [
      { value: '<math><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></math>', compositeKey: '\\begin{matrix}\\end{matrix}', ratio: 1.5 },
      { value: '<math><mover><mi>x</mi><mo>^</mo></mover></math>', compositeKey: '\\hat{}' },
      { value: '<math><mo>ℕ</mo></math>', compositeKey: '\\mathbb{N}' },
      { value: '<math><mo>∏</mo></math>', compositeKey: '\\prod' },
      { value: '<math><mo>∑</mo></math>', compositeKey: '\\sum' },
      { value: '<math><mo>←</mo></math>', compositeKey: '\\leftarrow' },
      { value: '<math><mo>↔</mo></math>', compositeKey: '\\leftrightarrow' },
      { value: '<math><mo>→</mo></math>', compositeKey: '\\rightarrow' },
      { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ]
  },
  latexFunctionsLayout: {
  keyClassName: 'math',
  keys: [
      [
        { value: 'CTRL', ratio: 10, keyCode: KeyboardEvent.DOM_VK_CONTROL }
      ],
    [
      { value: '<math><mo>min</mo></math>', compositeKey: '\\min', ratio:2 },
      { value: '<math><mo>sin</mo></math>', compositeKey: '\\sin', ratio:2 },
      { value: '<math><mo>cos</mo></math>', compositeKey: '\\cos', ratio:2 },
      { value: '<math><mo>tan</mo></math>', compositeKey: '\\tan', ratio:2 },
      { value: '<math><mo>max</mo></math>', compositeKey: '\\max', ratio:2 }
    ], [
      { value: '<math><mo>inf</mo></math>', compositeKey: '\\inf', ratio:2 },
      { value: '<math><mo>arg</mo></math>', compositeKey: '\\arg', ratio:2 },
      { value: '<math><mo>mod</mo></math>', compositeKey: '\\mod', ratio:2 },
      { value: '<math><mfenced><mfrac linethickness="0"><mi>x</mi><mi>y</mi></mfrac></mfenced></math>', compositeKey: '\\binom{}{}', ratio:2 },
      { value: '<math><mo>sup</mo></math>', compositeKey: '\\sup', ratio:2 }
    ], [
      { value: '<math><mo>det</mo></math>', compositeKey: '\\det', ratio:2 },
      { value: '<math><mo>deg</mo></math>', compositeKey: '\\deg', ratio:2 },
      { value: '<math><mo>dim</mo></math>', compositeKey: '\\dim', ratio:2 },
      { value: '<math><mo>ker</mo></math>', compositeKey: '\\ker', ratio:2 },
      { value: '⌫', ratio: 2, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ]
  }
};
