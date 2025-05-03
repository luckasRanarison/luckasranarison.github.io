const tags = {
  rust: "rust",
  typescript: "typescript",
  lua: "lua",
  kotlin: "kotlin",
  javascript: "javascript",
  scheme: "scheme",
  react: "react",
  nextjs: "nextjs",
  cli: "cli",
  web: "web",
  wasm: "wasm",
  tailwindcss: "tailwindcss",
  android: "android",
  emulator: "emulator",
  neovim: "neovim",
  treesitter: "treesitter",
  keyboard: "keyboard",
  cubing: "cubing",
  japanese: "japanese",
  nlp: "nlp",
  linux: "linux",
  crate: "crate",
};

export default [
  {
    name: "MES",
    source: "https://github.com/luckasRanarison/mes",
    preview: "https://luckasranarison.github.io/mes",
    description: [
      "A decent multi-plateform NES emulator written in Rust, available for the Web and Android.",
    ],
    tags: [
      tags.rust,
      tags.typescript,
      tags.kotlin,
      tags.web,
      tags.wasm,
      tags.tailwindcss,
      tags.android,
      tags.emulator,
    ],
  },
  {
    name: "okey",
    source: "https://github.com/luckasRanarison/okey",
    description: [
      "An advanced, easy-to-use key remapper for Linux written in Rust, inspired by QMK.",
    ],
    article:
      "https://medium.com/@luckasranarison/using-a-non-ergonomic-keyboard-more-ergonomically-with-okey-0a92cb658ea5",
    tags: [tags.rust, tags.keyboard, tags.linux],
  },
  {
    name: "tailwind-tools.nvim",
    source: "https://github.com/luckasRanarison/tailwind-tools.nvim",
    description: [
      "Unofficial Tailwind CSS integration and tooling for Neovim.",
    ],
    tags: [tags.lua, tags.scheme, tags.neovim, tags.treesitter],
  },
  {
    name: "kewb",
    source: "https://github.com/luckasRanarison/kewb",
    description: [
      "A Rubik's cube library and solver using Kociemba's two-phase algorithm.",
    ],
    tags: [tags.rust, tags.cli, tags.crate, tags.cubing],
    dependants: [
      {
        name: "Seliaste/mindsolver",
        source: "https://github.com/Seliaste/mindsolver",
        description:
          "Alternative software for the Mindcuber-style robots using the ev3dev OS.",
      },
      {
        name: "vmiklos/vmexam/js/rubik",
        source: "https://share.vmiklos.hu/pages/rubik/",
        description: "Online 3x3 Rubik's cube solver using three.js and kewb.",
      },
    ],
  },
  {
    name: "nvim-devdocs",
    archived: true,
    source: "https://github.com/luckasRanarison/nvim-devdocs",
    description: [
      "DevDocs plugin for Neovim, making possible to browse docs in Neovim using Markdown.",
    ],
    tags: [tags.lua, tags.neovim, tags.treesitter],
  },
  {
    name: "tree-sitter-hyprlang",
    source:
      "https://github.com/tree-sitter-grammars/tree-sitter-hyprlang/tree/master",
    description: ["Treesitter grammar for Hyprland's configuration language."],
    tags: [tags.javascript, tags.scheme, tags.treesitter],
  },
  {
    name: "icelang",
    source: "https://github.com/luckasRanarison/icelang",
    preview: "https://luckasranarison.github.io/icelang",
    description: [
      "A minimal programming language inspired by Lua and Rust.",
      "It has a CLI and online interpreter using WebAssembly.",
    ],
    tags: [
      tags.rust,
      tags.cli,
      tags.web,
      tags.wasm,
      tags.react,
      tags.tailwindcss,
    ],
  },
  {
    name: "kaiseki",
    source: "https://github.com/luckasRanarison/kaiseki",
    description: [
      "A morphological analyzer and tokenizer for the japanese language using mecab-ipadic.",
    ],
    tags: [tags.rust, tags.japanese, tags.nlp],
  },
  {
    name: "japidic",
    source: "https://github.com/luckasRanarison/japidic",
    preview: "https://japidic.vercel.app",
    description: [
      "Free online japanese dictionary using Jotoba APIs, Kanji Alive, and KanjiVG data.",
    ],
    tags: [
      tags.typescript,
      tags.web,
      tags.nextjs,
      tags.tailwindcss,
      tags.japanese,
    ],
  },
  {
    name: "three-style",
    source: "https://github.com/luckasRanarison/three-style",
    description: [
      "Rubik's cube 3-style commutator library and finder.",
      "It has also a standalone CLI.",
    ],
    tags: [tags.rust, tags.cli, tags.crate, tags.cubing],
  },
  {
    name: "regex-potata",
    source: "https://github.com/luckasRanarison/regex-potata",
    preview: "https://luckasranarison.github.io/regex-potata",
    description: [
      "A basic regex engine written in Rust. It has an online playground using codemirror and graphviz.",
    ],
    tags: [
      tags.rust,
      tags.typescript,
      tags.web,
      tags.wasm,
      tags.react,
      tags.tailwindcss,
    ],
  },
  {
    name: "yace",
    source: "https://github.com/luckasRanarison/yace",
    preview: "https://luckasranarison.github.io/yace",
    description: [
      "Yet another CHIP-8 emulator with a CLI and web interface. It also runs on mobile devices.",
    ],
    tags: [tags.rust, tags.typescript, tags.web, tags.wasm, tags.emulator],
  },
];
