# Workshop VueJS 行前安裝
- NodeJS 環境安裝 （Win & Mac）
- IDE安裝
- REPO專案初始化


## 工具必備安裝

- [VSCode](https://code.visualstudio.com/) 


## Windows node 環境設定

推薦使用：
vscode：https://code.visualstudio.com/Download

node js 安裝下載:
32bit：https://nodejs.org/dist/v10.13.0/node-v10.13.0-x86.msi
64bit：https://nodejs.org/dist/v10.13.0/node-v10.13.0-x64.msi

### step
* 下載 node 安裝檔後點擊安裝
* 下載 vscode 安裝檔後點擊安裝
* 開啟 vscode 開啟資料夾 (建議放在 C：\\ 底下)
* [Ctrl + `] (~號位置) 開啟 終端機
* node -v  確認 node 版本為 8 以上
* npm install 安裝相依套件

ref：
[Node.js tutorial in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)

----

## Mac 環境安裝

### 裝法 1

1. 下載安裝 nvm

    - ` curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash` 

2. 設定環境變數 （此步驟若 shell 是 zsh 請改成  `source ~/.zshrc`）

    - `vim ~/.bashrc`
    - 按下 `i` 進入編輯模式
    - 在最下面貼上 `export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm`


3. 使改動生效 （此步驟若 shell 是 zsh 請改成  `source ~/.zshrc`）

    - `source ~/.bashrc`

4. 試試看有無安裝完成

    - `nvm -v`

5. 用 nvm 安裝 node 環境

    - `nvm install 8`

    - `nvm use 8`

6. 安裝 相關套件

    - `npm install`


7. 重新建構 `node-sass`


    - `npm rebuild node-sass`



### 裝法 2

完整來說，可以直接參考官網上的說明： https://cn.vuejs.org/v2/guide/installation.html
以下也提供分開的步驟

1. 安裝 Node.js 以及 npm 套件管理工具- https://nodejs.org/en/
    - 如果你裝 v10.13.0 LTS 版本
        - *Node.js v10.13.0 to /usr/local/bin/node
        - npm v6.4.1 to /usr/local/bin/npm*

    - 檢查是否安裝成功： 打開終端機(Terminal) 輸入圖示內的指令檢查回傳內容是否有相關的資訊
        - ![](https://i.imgur.com/Sxfxb99.png)
2. 安裝 Vue.js 框架 (指令於終端機內執行)
```
npm install vue
```

3. 檢查是否有安裝完成 (指令於終端機內執行)
```
vue --version
```
![](https://i.imgur.com/Gl2BmiN.png)






---


### 當您遇到以下畫面時即表示您環境建置完成囉！

![](https://i.imgur.com/2WIg403.png)

