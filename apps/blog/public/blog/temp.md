## 1. 폰트
`ipm plex mono`를 설치한다.
``` 
yay -S nerd-fonts-ibm-plex-mono
```
## 2. 필요 패키지 
```lua 
use 'tjdevries/colorbuddy.vim' -- 색상 변경 

use 'mhinz/vim-startify' -- 시작 화면 
use {'nvim-lualine/lualine.nvim', requires = { 'kyazdani42/nvim-web-devicons', opt = true }} --상태창 
```
## 3. 컬러셋
이전 까지는 [gruvbox](https://github.com/morhetz/gruvbox)를 썼다,
### 1. gruvbox
```lua
use  { "ellisonleao/gruvbox.nvim" } -- 컬러 테마 
```
<img src="https://camo.githubusercontent.com/a05028ef4dae5865098c508fc9f686b211f510198f07e6a5636734dbac618b30/687474703a2f2f692e696d6775722e636f6d2f476b496c38466e2e706e67">

### 2. everforest
 `210216` 부터 [everforest]([everforest](https://github.com/sainnhe/everforest) 을 사용하도록 한다 
 ```lua
use {'sainnhe/everforest'}

vim.cmd('colorscheme everforest')
 vim.g["everforest_background"] = 'hard'     ■ Undefined global `vim`.
 vim.o.background="dark"
```
### 3. rose-pine
`230106` 부터는 [rosepine](https://github.com/rose-pine/neovim/wiki#supported-plugins) 을 사용하도록 한다 
```lua
use({
    'rose-pine/neovim',
    as = 'rose-pine',
})
```
설정 후 `lualine` 같은 테마를 따로 변경해준다 
```lua
config = function()
        vim.cmd('colorscheme rose-pine')
    end
```
`light` 모드의 경우는 `background`를 변경하면 된다 
```lua
vim.o.background="light"
```
### 4. zen-bone
 [zen-bone](https://github.com/mcchrish/zenbones.nvim) 대비가 강한 테마다.
### 5. melange-nvim
1. [melange](https://github.com/savq/melange-nvim)현재 사용하고 있는 버젼이다. 
2. 다 좋은데 `comment` 가 `italic`이 적용이 되어있어서 화면상 짤리는 일이 발생한다.  그래서 다음처럼 설정을 추가한다
```bash
vim.api.nvim_set_hl(0, 'Comment', { fg = '#a8a491' })
vim.api.nvim_set_hl(0, 'String', { fg = '#465AA4' })
vim.api.nvim_set_hl(0,'DiagnosticHint',{fg='#acbfb0'})
```
## 4. 탭 
[barbar.nvim](https://github.com/romgrk/barbar.nvim)을 사용한다
```lua
use {
  'romgrk/barbar.nvim',
  requires = {'kyazdani42/nvim-web-devicons'}
}
```

