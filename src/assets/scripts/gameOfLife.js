/* general HTML selectors */
const canv = document.querySelector("#game__screen");
const ctx = canv.getContext("2d");
const ticks = document.querySelector("#game__stats-ticks");
const births = document.querySelector("#game__stats-births");
const deaths = document.querySelector("#game__stats-deaths");
const growth = document.querySelector("#game__stats-growth");
const alive = document.querySelector("#game__stats-alive");
const density = document.querySelector("#game__stats-density");

class Game {
  constructor() {
    this.params = {
      width: undefined,
      height: undefined,
      hcells: undefined,
      vcells: undefined,
      gridCell: 15,
      timeInt: 150,
      preventOverflow: true,
      overflowLimit: 450,
      styleBackgroundBorn: "#0f0",
      styleBackgroundAlive: "#c1f30c",
      styleBackgroundDead: "#061424",
      styleBackgroundDying: "#546908",
      styleMesh: "#206020",
      mesh: false,
      matrixAlphabet:
        'むかしむかし月の上を飛ぶ猫がいた彼は軽いスピードで旅行できる熟練した哲学者でした子猫の知識の根源でありその翼は柔軟でしたЛюдирешилиотправитьсвиньювдальнийкосмосвкачествесвоегопослаàaáèeéìiíòoóùuúâêîôûäëïöüqwertyuiopasdfghjklñzxcvbnmç{}[]^`".:;,-_¨()/&%$·!¿?¿ºª1234567890העוגיותבצנצנתהימתוקותעבורהמדען竹子像风一样流淌着甜美根茎坚固叶绿किसीदिनसमययात्रासंभवहोसकतीहै।ومنثم،فإناللونالطبيعيللدقةيتضاءلبسببالتقعسElataquedeloskoalasempezóel23deseptiembrede2346,cuando1548293animaleshicieronestragosenNuevaYorkΟΣωκράτηςδενέτρωγεφασόλιακάθεΚυριακήσύμφωναμεπρόσφαταευρήματαειδικών',
      matrixStyle: [],
      matrixLength: 0,
    };

    this.state = {
      started: false,
      tickCount: 0,
      gameStart: undefined,
      gameEnd: undefined,
      endType: undefined,
      board: undefined,
      nextBoard: undefined,
      births: 0,
      deaths: 0,
      growth: 0,
      alive: 0,
      density: "",
      fade: 0,
    };

    this.matrixize = function matrixea() {
      this.params.matrixStyle = this.params.matrixAlphabet.split("");
      this.params.matrixLength = this.params.matrixStyle.length;
    };

    this.init = function inicia() {
      this.matrixize();
      if (this.state.started === true) {
        return this.game();
      }
      this.state.started = true;
      this.state.gameStart = new Date();
      this.params.width = parseInt(
        Math.floor(
          window.innerWidth - (window.innerWidth % this.params.gridCell)
        ),
        10
      );
      this.params.height = parseInt(
        Math.floor(
          window.innerHeight * 0.8 -
            ((window.innerHeight * 0.8) % this.params.gridCell)
        ),
        10
      );
      canv.width = this.params.width;
      canv.height = this.params.height;
      this.params.hcells = this.params.width / this.params.gridCell;
      this.params.vcells = this.params.height / this.params.gridCell;
      this.state.board = this.createBoard();
      this.state.nextBoard = this.createBoard();
      this.seedRandom();
      this.drawBoard();
      return setTimeout(() => {
        this.game();
      }, this.params.timeInt);
    };

    this.calculateDensity = function calculaDensidad() {
      const boardSize = this.params.hcells * this.params.vcells;
      return `${((this.state.alive / boardSize) * 100).toFixed(2)} %`;
    };

    this.createBoard = function creaTablero() {
      const board = [];
      for (let i = 0; i < this.params.vcells; i++) {
        const row = [];
        for (let j = 0; j < this.params.hcells; j++) {
          row.push(0);
        }
        board.push(row);
      }

      return board;
    };

    this.seedRandom = function puebla() {
      function randomProbability(value) {
        let probability;
        if (value < 0) {
          probability = -value;
        }
        if (value < 1 && value > 0) {
          probability = value * 100;
        }
        if (value > 100) {
          const divisorToTargetRange = 10 ** (String(probability).length - 1);
          probability = Math.floor(probability / divisorToTargetRange);
        }
        const notRandom = [];
        for (let i = 0; i < probability; i++) {
          notRandom.push(1);
        }
        for (let i = 0; i < 100 - probability; i++) {
          notRandom.push(0);
        }
        return notRandom;
      }

      for (let i = 0; i < this.params.vcells; i++) {
        for (let j = 0; j < this.params.hcells; j++) {
          const temp = randomProbability(20);
          const index = Math.floor(this.getRandomNumber() * temp.length);
          const value = temp[index];
          if (value === 1) {
            this.state.births++;
          }
          this.state.nextBoard[i][j] = value;
        }
      }
    };

    this.drawBoard = function dibujaTablero() {
      this.state.alive = 0;
      ctx.fillStyle = this.params.styleBackgroundDead;
      ctx.fillRect(0, 0, canv.width, canv.height);
      for (let i = 0; i < this.params.height; i += this.params.gridCell) {
        for (let j = 0; j < this.params.width; j += this.params.gridCell) {
          const py = Math.floor(i / this.params.gridCell);
          const px = Math.floor(j / this.params.gridCell);
          if (this.state.nextBoard[py][px] === 1) {
            if (this.state.board[py][px] === 0) {
              ctx.fillStyle = this.params.styleBackgroundBorn;
              this.state.births++;
            } else {
              ctx.fillStyle = this.params.styleBackgroundAlive;
              this.state.alive++;
            }
            ctx.font = "10pt sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const text =
              this.params.matrixStyle[
                Math.floor(this.getRandomNumber() * this.params.matrixLength)
              ];
            const centerOffset = this.params.gridCell / 2;
            ctx.strokeStyle = this.params.styleMesh;
            ctx.strokeRect(j, i, this.params.gridCell, this.params.gridCell);
            ctx.fillText(text, j + centerOffset, i + centerOffset);
          } else if (this.state.nextBoard[py][px] === 0) {
            this.state.deaths++;
            if (this.params.mesh) {
              ctx.fillStyle = this.params.styleMesh;
              ctx.fillRect(j, i, this.params.gridCell, this.params.gridCell);
              ctx.fillStyle = this.params.styleBackgroundDead;
              ctx.fillRect(
                j + 1,
                i + 1,
                this.params.gridCell - 1,
                this.params.gridCell - 1
              );
            } else {
              ctx.fillStyle = this.params.styleBackgroundDead;
              ctx.fillRect(j, i, this.params.gridCell, this.params.gridCell);
            }
          }
        }
      }
      this.state.growth =
        this.state.alive === 0
          ? "0.00 %"
          : `${(
              ((this.state.births - this.state.deaths) /
                (this.state.births + this.state.deaths)) *
              100
            ).toFixed(2)} %`;
      this.state.density = this.calculateDensity();
      this.updateUIinfo();
    };

    this.fadeOut = function desvanece() {
      this.state.fade += 8;
      if (this.state.fade <= 256) {
        setTimeout(() => {
          let hex = this.state.fade.toString(16);
          if (hex.length === 1) {
            hex = `0${hex}`;
          }
          ctx.fillStyle = `${this.params.styleBackgroundDead}${hex}`;
          ctx.fillRect(0, 0, canv.width, canv.height);
          this.fadeOut();
        }, this.params.timeInt);
      }
    };

    this.updateUIinfo = function actualizaInfoIU() {
      ticks.innerHTML = `${this.state.tickCount}`;
      alive.innerHTML = `${this.state.alive}`;
      deaths.innerHTML = `${this.state.deaths}`;
      births.innerHTML = `${this.state.births}`;
      growth.innerHTML = `${this.state.growth}`;
      density.innerHTML = `${this.state.density}`;
    };

    this.nextTick = function proximoTick() {
      this.state.nextBoard = this.createBoard();
      for (let i = 1; i < this.params.vcells - 1; i++) {
        for (let j = 1; j < this.params.hcells - 1; j++) {
          this.state.nextBoard[i][j] = this.checkCell([i, j]);
        }
      }
    };

    this.checkCell = function checkCelula([px, py]) {
      let aliveNeighbours = 0;
      for (let i = px - 1; i < px + 2; i++) {
        for (let j = py - 1; j < py + 2; j++) {
          if (this.state.board[i][j] === 1) {
            aliveNeighbours++;
          }
        }
      }
      if (this.state.board[px][py] === 1) {
        aliveNeighbours--;
      }
      if (aliveNeighbours < 2 || aliveNeighbours > 3) {
        return 0;
      }
      if (this.state.board[px][py] === 0 && aliveNeighbours === 3) {
        return 1;
      }
      if (this.state.board[px][py] === 0 && aliveNeighbours === 2) {
        return 0;
      }
      return 1;
    };

    this.test = function testea(numberOfTicks, board = this.state.board) {
      if (this.state.ticks === 0) {
        this.state.board = this.expand(board);
        this.params.hcells = board[0].length;
        this.params.vcells = board.length;
        this.overflowLimit = numberOfTicks + 1;
        this.state.started = true;
        this.state.gameStart = new Date();
      }
      this.nextTick();
      this.state.ticks++;
      this.state.board = this.state.nextBoard;
      if (this.state.ticks <= numberOfTicks) {
        return this.test(numberOfTicks);
      }
      this.state.endType = "end of test";
      this.state.gameEnd = new Date();
      return this.crop(this.state.board);
    };

    this.expand = function expande(board) {
      const rows = board.length;
      const cols = board[0].length;
      const expandedBoard = Array.from(0);
      const expandedRow = Array.from(0);
      for (let i = 0; i < cols; i++) {
        expandedRow.push(0);
      }
      for (let i = 0; i < rows; i++) {
        expandedBoard.push([0, 0, ...board[i], 0, 0]);
      }
      for (let i = 1; i < 2; i++) {
        expandedBoard.unshift(expandedRow);
        expandedBoard.push(expandedRow);
      }
    };

    this.crop = function recorta(board) {
      const resultBoard = [];
      for (let i = 2; i < board.length - 2; i++) {
        const row = board[i].shift().shift().pop().pop();
        resultBoard.push(row);
      }
      return resultBoard;
    };

    this.game = function juega() {
      this.state.tickCount++;
      this.drawBoard();
      this.state.board = this.state.nextBoard;
      this.nextTick();
      if (this.state.tickCount < this.params.overflowLimit) {
        setTimeout(() => {
          this.game();
        }, this.params.timeInt);
      } else {
        this.state.gameEnd = new Date();
        this.state.endType = "Preset limit of ticks reached";
        this.fadeOut();
      }
    };

    this.getRandomNumber = function numAleatorio() {
      const crypto = window.crypto || window.msCrypto;
      const array = new Uint32Array(1);
      const value = crypto.getRandomValues(array);
      return Number(value).toFixed(17) / (2 ** 32 - 1);
    };
  }
}

/* create & start game */
const juego = new Game();
window.onload = function startGame() {
  juego.init();
};
