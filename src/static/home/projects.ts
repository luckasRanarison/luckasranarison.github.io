export default [
  {
    name: "MES",
    source: "https://github.com/luckasRanarison/mes",
    preview: "https://luckasranarison.github.io/mes",
    description: [
      "A decent NES emulator built using Rust and WebAssembly.",
      "It runs in the browser and also works on mobile devices.",
    ],
    tags: ["rust", "typescript", "web", "wasm", "tailwindcss", "emulator"],
  },
  {
    name: "tailwind-tools.nvim",
    source: "https://github.com/luckasRanarison/tailwind-tools.nvim",
    description: [
      "Unofficial Tailwind CSS integration and tooling for Neovim.",
    ],
    tags: ["lua", "scheme", "neovim", "tailwindcss", "treesitter"],
  },
  {
    name: "kewb",
    source: "https://github.com/luckasRanarison/kewb",
    description: [
      "A Rubik's cube library and solver using Kociemba's two-phase algorithm.",
    ],
    tags: ["rust", "cli", "crate", "cubing"],
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
    tags: ["lua", "neovim", "treesitter"],
  },
  {
    name: "tree-sitter-hyprlang",
    source:
      "https://github.com/tree-sitter-grammars/tree-sitter-hyprlang/tree/master",
    description: ["Treesitter grammar for Hyprland's configuration language."],
    tags: ["javascript", "scheme", "treesitter"],
  },
  {
    name: "icelang",
    source: "https://github.com/luckasRanarison/icelang",
    preview: "https://luckasranarison.github.io/icelang",
    description: [
      "A minimal programming language inspired by Lua and Rust.",
      "It has a CLI and online interpreter using WebAssembly.",
    ],
    tags: ["rust", "cli", "web", "wasm", "react", "tailwindcss"],
  },
  {
    name: "kaiseki",
    source: "https://github.com/luckasRanarison/kaiseki",
    description: [
      "A morphological analyzer and tokenizer for the japanese language using mecab-ipadic.",
    ],
    tags: ["rust", "japanese", "nlp"],
  },
  {
    name: "japidic",
    source: "https://github.com/luckasRanarison/japidic",
    preview: "https://japidic.vercel.app",
    description: [
      "Free online japanese dictionary using Jotoba APIs, Kanji Alive, and KanjiVG data.",
    ],
    tags: ["typescript", "web", "nextjs", "tailwindcss", "japanese"],
  },
  {
    name: "three-style",
    source: "https://github.com/luckasRanarison/three-style",
    description: [
      "Rubik's cube 3-style commutator library and finder with a CLI.",
    ],
    tags: ["rust", "cli", "crate", "cubing"],
  },
  {
    name: "regex-potata",
    source: "https://github.com/luckasRanarison/regex-potata",
    preview: "https://luckasranarison.github.io/regex-potata",
    description: [
      "A basic regex engine written in Rust. It has an online playground using codemirror and graphviz.",
    ],
    tags: ["rust", "typescript", "web", "wasm", "react", "viz", "tailwindcss"],
  },
  {
    name: "yace",
    source: "https://github.com/luckasRanarison/yace",
    preview: "https://luckasranarison.github.io/yace",
    description: [
      "Yet another CHIP-8 emulator with a CLI and web interface. It also runs on mobile devices.",
    ],
    tags: ["rust", "typescript", "web", "wasm", "emulator"],
  },
  {
    name: "website",
    source: "https://github.com/luckasRanarison/luckasranarison.github.io",
    description: ["The current website, built using Astro and Tailwind CSS."],
    tags: ["astro", "typescript", "web", "tailwindcss"],
  },
];
