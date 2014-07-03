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
  alt: {
    '<math><msqrt><mi>x</mi></msqrt></math>': [
        { value: '<math><mroot><mi>x</mi><mi>n</mi></mroot></math>', compositeKey: '\\sqrt[]{}', className: 'math' }
    ],
    '<math><mo>&lt;</mo></math>': [
        { value: '<math><mo>≤</mo></math>', compositeKey: '\\leq', className: 'math' },
        { value: '<math><mo>≦</mo></math>', compositeKey: '\\leqq', className: 'math' },
        { value: '<math><mo>≪</mo></math>', compositeKey: '\\ll', className: 'math' }
    ],
    '<math><mo>&gt;</mo></math>': [
        { value: '<math><mo>≥</mo></math>', compositeKey: '\\geq', className: 'math' },
        { value: '<math><mo>≧</mo></math>', compositeKey: '\\geqq', className: 'math' },
        { value: '<math><mo>≫</mo></math>', compositeKey: '\\gg', className: 'math' }
    ],
    '<math><mo>=</mo></math>': [
        { value: '<math><mo>≡</mo></math>', compositeKey: '\\equiv', className: 'math' },
        { value: '<math><mo>≠</mo></math>', compositeKey: '\\neq', className: 'math' },
        { value: '<math><mo>~</mo></math>', compositeKey: '\\sim', className: 'math' },
        { value: '<math><mo>≈</mo></math>', compositeKey: '\\approx', className: 'math' }
    ],
    '<math><mrow><mo>|</mo><mi>x</mi><mo>|</mo></mrow></math>': [
        { value: '<math><mrow><mo>‖</mo><mi>x</mi><mo>‖</mo></mrow></math>', compositeKey: '\\|\\|', className: 'math' },
    ],
    '<math><mo>∫</mo></math>': [
        { value: '<math><mo>∬</mo></math>', compositeKey: '\\iint', className: 'math' },
        { value: '<math><mo>∭</mo></math>', compositeKey: '\\iiint', className: 'math' },
        { value: '<math><mo>∮</mo></math>', compositeKey: '\\oint', className: 'math' },
        { value: '<math><mo>∯</mo></math>', compositeKey: '\\oiint', className: 'math' },
        { value: '<math><mo>∰</mo></math>', compositeKey: '\\oiiint', className: 'math' },
        { value: '<math><mo>∲</mo></math>', compositeKey: '\\ointclockwise', className: 'math' },
        { value: '<math><mo>∳</mo></math>', compositeKey: '\\ointctrclockwise', className: 'math' }
    ],
    '<math><mo>(</mo></math>': [
        { value: '<math><mo>[</mo></math>', compositeKey: '[', className: 'math' },
        { value: '<math><mo>{</mo></math>', compositeKey: '\\{', className: 'math' },
        { value: '<math><mo>⟨</mo></math>', compositeKey: '\\langle', className: 'math' },
        { value: '<math><mo>⟪</mo></math>', compositeKey: '\\lang', className: 'math' },
        { value: '<math><mo>⌈</mo></math>', compositeKey: '\\lceil', className: 'math' },
        { value: '<math><mo>⌊</mo></math>', compositeKey: '\\lfloor', className: 'math' }
    ],
    '<math><mo>)</mo></math>': [
        { value: '<math><mo>]</mo></math>', compositeKey: ']', className: 'math' },
        { value: '<math><mo>}</mo></math>', compositeKey: '\\}', className: 'math' },
        { value: '<math><mo>⟩</mo></math>', compositeKey: '\\rangle', className: 'math' },
        { value: '<math><mo>⟫</mo></math>', compositeKey: '\\rang', className: 'math' },
        { value: '<math><mo>⌉</mo></math>', compositeKey: '\\rceil', className: 'math' },
        { value: '<math><mo>⌋</mo></math>', compositeKey: '\\rfloor', className: 'math' }
    ],
    '<math><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></math>': [
        { value: '<math><mfenced open="(" close=")"><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{pmatrix}\\end{pmatrix}', className: 'math' },
        { value: '<math><mfenced open="[" close="]"><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{bmatrix}\\end{bmatrix}', className: 'math' },
        { value: '<math><mfenced open="{" close="}"><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{Bmatrix}\\end{Bmatrix}', className: 'math' },
        { value: '<math><mfenced open="|" close="|"><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{vmatrix}\\end{vmatrix}', className: 'math' },
        { value: '<math><mfenced> open="‖" close="‖"<mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{Vmatrix}\\end{Vmatrix}', className: 'math' },
        { value: '<math><mfenced open="{" close=""><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></mfenced></math>',
            compositeKey: '\\begin{cases}\\end{cases}', className: 'math' }
    ],
    '<math><mover><mi>x</mi><mo>^</mo></mover></math>': [
        { value: '<math><mover><mi>x</mi><mo>ˇ</mo></mover></math>', compositeKey: '\\check{x}', className: 'math' },
        { value: '<math><mover><mi>x</mi><mo>`</mo></mover></math>', compositeKey: '\\grave{x}', className: 'math' },
        { value: '<math><mover><mi>x</mi><mo>ˊ</mo></mover></math>', compositeKey: '\\acute{x}', className: 'math' },
        { value: '<math><mover><mi>x</mi><mo>~</mo></mover></math>', compositeKey: '\\tilde{x}', className: 'math' },
        { value: '<math><mover><mi>x</mi><mo>-</mo></mover></math>', compositeKey: '\\bar{x}', className: 'math' },
        { value: '<math><mover><mi>x</mi><mo>˘</mo></mover></math>', compositeKey: '\\breve{x}', className: 'math' },
        { value: '<math><mover><mi>x</mi><mo>˳</mo></mover></math>', compositeKey: '\\mathring{x}', className: 'math' },
        { value: '<math><mover><mi>x</mi><mo>˙</mo></mover></math>', compositeKey: '\\dot{x}', className: 'math' },
        { value: '<math><mover><mi>x</mi><mo>˙˙</mo></mover></math>', compositeKey: '\\ddot{x}', className: 'math' },
        { value: '<math><mover><mi>x</mi><mo>→</mo></mover></math>', compositeKey: '\\vec{x}', className: 'math' },
    ],
    '<math><mo>ℕ</mo></math>': [
        { value: '<math><mo>ℤ</mo></math>', compositeKey: '\\mathbb{Z}', className: 'math' },
        { value: '<math><mo>ℚ</mo></math>', compositeKey: '\\mathbb{Q}', className: 'math' },
        { value: '<math><mo>ℝ</mo></math>', compositeKey: '\\mathbb{R}', className: 'math' },
        { value: '<math><mo>ℂ</mo></math>', compositeKey: '\\mathbb{C}', className: 'math' },
        { value: '<math><mo>ℙ</mo></math>', compositeKey: '\\mathbb{P}', className: 'math' },
        { value: '<math><mo>ℍ</mo></math>', compositeKey: '\\mathbb{H}', className: 'math' },
        { value: '<math><mo>ℜ</mo></math>', compositeKey: '\\Re', className: 'math' },
        { value: '<math><mo>ℑ</mo></math>', compositeKey: '\\Im', className: 'math' }
    ],
    '<math><mo>←</mo></math>': [
        { value: '<math><mo>↚</mo></math>', compositeKey: '\\nleftarrow', className: 'math' },
        { value: '<math><mo>⟵</mo></math>', compositeKey: '\\longleftarrow', className: 'math' },
        { value: '<math><mo>⇐</mo></math>', compositeKey: '\\Leftarrow', className: 'math' },
        { value: '<math><mo>⇍</mo></math>', compositeKey: '\\nLeftarrow', className: 'math' },
        { value: '<math><mo>⟸</mo></math>', compositeKey: '\\Longleftarrow', className: 'math' }
    ],
    '<math><mo>↔</mo></math>': [
        { value: '<math><mo>↮</mo></math>', compositeKey: '\\nleftrightarrow', className: 'math' },
        { value: '<math><mo>⟷</mo></math>', compositeKey: '\\longleftrightarrow', className: 'math' },
        { value: '<math><mo>⇔</mo></math>', compositeKey: '\\Leftrightarrow', className: 'math' },
        { value: '<math><mo>⇎</mo></math>', compositeKey: '\\nLeftrightarrow', className: 'math' },
        { value: '<math><mo>⟺</mo></math>', compositeKey: '\\Longleftrightarrow', className: 'math' }
    ],
    '<math><mo>→</mo></math>': [
        { value: '<math><mo>↛</mo></math>', compositeKey: '\\nrightarrow', className: 'math' },
        { value: '<math><mo>⟶</mo></math>', compositeKey: '\\longrightarrow', className: 'math' },
        { value: '<math><mo>⇒</mo></math>', compositeKey: '\\Rightarrow', className: 'math' },
        { value: '<math><mo>⇏</mo></math>', compositeKey: '\\nRightarrow', className: 'math' },
        { value: '<math><mo>⟹</mo></math>', compositeKey: '\\Longrightarrow', className: 'math' }
    ]
  },
  keys: [
      [
        { value: 'CTRL', ratio: 10, keyCode: KeyboardEvent.DOM_VK_CONTROL }
      ],
    [
      { value: '<math><msub><mi>x</mi><mi>y</mi></msub></math>', compositeKey: '{}_{}', className: 'math' },
      { value: '<math><msqrt><mi>x</mi></msqrt></math>', compositeKey: '\\sqrt{}', className: 'math' },
      { value: '<math><mo>&lt;</mo></math>', compositeKey: '<', className: 'math' },
      { value: '<math><mo>&gt;</mo></math>', compositeKey: '>', className: 'math' },
      { value: '<math><mo>=</mo></math>', compositeKey: '=', className: 'math' },
      { value: '<math><mrow><mo>|</mo><mi>x</mi><mo>|</mo></mrow></math>', compositeKey: '||', className: 'math' },
      { value: '<math><mfrac><mi>x</mi><mi>y</mi></mfrac>', compositeKey: '\\frac{}{}', className: 'math' },
      { value: '<math><mo>×</mo></math>', compositeKey: '\\times', className: 'math' },
      { value: '<math><msubsup><mi>x</mi><mi>y</mi><mi>z</mi></msubsup></math>', compositeKey: '{}_{}^{}', className: 'math' },
      { value: '<math><msup><mi>x</mi><mi>y</mi></msup></math>', compositeKey: '{}^{}', className: 'math' }
    ], [
      { value: '<math><munder><mi>x</mi><mi>y</mi></munder></math>', compositeKey: '\\underset{}{}', className: 'math' },
      { value: '<math><mo>∫</mo></math>', compositeKey: '\\int', className: 'math' },
      { value: '<math><mo>(</mo></math>', compositeKey: '\\left(', className: 'math' },
      { value: '<math><mo>)</mo></math>', compositeKey: '\\right)', className: 'math' },
      { value: '<math><mo>∂</mo></math>', compositeKey: '\\partial', className: 'math' },
      { value: '<math><mo>∇</mo></math>', compositeKey: '\\nabla', className: 'math' },
      { value: '<math><mo>+</mo></math>', compositeKey: '+', className: 'math' },
      { value: '<math><mo>-</mo></math>', compositeKey: '-', className: 'math' },
      { value: '<math><munderover><mi>x</mi><mi>y</mi><mi>z</mi></munderover></math>', compositeKey: '\\underset{}{\\overset{}{}}', className: 'math' },
      { value: '<math><mover><mi>x</mi><mi>y</mi></mover></math>', compositeKey: '\\overset{}{}', className: 'math' },
    ], [
      { value: '<math><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></math>', compositeKey: '\\begin{matrix}\\end{matrix}', ratio: 1.5, className: 'math' },
      { value: '<math><mover><mi>x</mi><mo>^</mo></mover></math>', compositeKey: '\\hat{}', className: 'math' },
      { value: '<math><mo>ℕ</mo></math>', compositeKey: '\\mathbb{N}', className: 'math' },
      { value: '<math><mo>∏</mo></math>', compositeKey: '\\prod', className: 'math' },
      { value: '<math><mo>∑</mo></math>', compositeKey: '\\sum', className: 'math' },
      { value: '<math><mo>←</mo></math>', compositeKey: '\\leftarrow', className: 'math' },
      { value: '<math><mo>↔</mo></math>', compositeKey: '\\leftrightarrow', className: 'math' },
      { value: '<math><mo>→</mo></math>', compositeKey: '\\rightarrow', className: 'math' },
      { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ]
  },
  latexFunctionsLayout: {
  keys: [
      [
        { value: 'CTRL', ratio: 10, keyCode: KeyboardEvent.DOM_VK_CONTROL }
      ],
    [
      { value: '<math><mo>min</mo></math>', compositeKey: '\\min', ratio:2, className: 'math' },
      { value: '<math><mo>sin</mo></math>', compositeKey: '\\sin', ratio:2, className: 'math' },
      { value: '<math><mo>cos</mo></math>', compositeKey: '\\cos', ratio:2, className: 'math' },
      { value: '<math><mo>tan</mo></math>', compositeKey: '\\tan', ratio:2, className: 'math' },
      { value: '<math><mo>max</mo></math>', compositeKey: '\\max', ratio:2, className: 'math' }
    ], [
      { value: '<math><mo>inf</mo></math>', compositeKey: '\\inf', ratio:2, className: 'math' },
      { value: '<math><mo>arg</mo></math>', compositeKey: '\\arg', ratio:2, className: 'math' },
      { value: '<math><mo>mod</mo></math>', compositeKey: '\\mod', ratio:2, className: 'math' },
      { value: '<math><mfenced><mfrac linethickness="0"><mi>x</mi><mi>y</mi></mfrac></mfenced></math>', compositeKey: '\\binom{}{}', ratio:2 },
      { value: '<math><mo>sup</mo></math>', compositeKey: '\\sup', ratio:2, className: 'math' }
    ], [
      { value: '<math><mo>det</mo></math>', compositeKey: '\\det', ratio:2, className: 'math' },
      { value: '<math><mo>deg</mo></math>', compositeKey: '\\deg', ratio:2, className: 'math' },
      { value: '<math><mo>dim</mo></math>', compositeKey: '\\dim', ratio:2, className: 'math' },
      { value: '<math><mo>ker</mo></math>', compositeKey: '\\ker', ratio:2, className: 'math' },
      { value: '⌫', ratio: 2, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ]
  }
};
