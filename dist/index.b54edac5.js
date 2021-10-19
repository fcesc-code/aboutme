// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5Wo4o":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "83267dbcf872fbb749af6526b54edac5"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            });
            // Handle HMR Update
            var handled = false;
            assets.forEach(function(asset) {
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                // Log parcel errors to console
                for(var _iterator = data.diagnostics.ansi[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = diagnostics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var diagnostic = _step.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          🚨 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4PfTw":[function(require,module,exports) {
'use strict';
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var Game = function Game1() {
    _classCallCheck(this, Game1);
    this.params = {
        width: undefined,
        height: undefined,
        hcells: undefined,
        vcells: undefined,
        gridCell: 15,
        timeInt: 150,
        preventOverflow: true,
        overflowLimit: 450,
        styleBackgroundBorn: '#0f0',
        styleBackgroundAlive: '#c1f30c',
        styleBackgroundDead: '#061424',
        styleBackgroundDying: '#546908',
        styleMesh: '#206020',
        mesh: false,
        matrixAlphabet: 'むかしむかし月の上を飛ぶ猫がいた彼は軽いスピードで旅行できる熟練した哲学者でした子猫の知識の根源でありその翼は柔軟でしたЛюдирешилиотправитьсвиньювдальнийкосмосвкачествесвоегопослаàaáèeéìiíòoóùuúâêîôûäëïöüqwertyuiopasdfghjklñzxcvbnmç{}[]^`".:;,-_¨()/&%$·!¿?¿ºª1234567890העוגיותבצנצנתהימתוקותעבורהמדען竹子像风一样流淌着甜美根茎坚固叶绿किसीदिनसमययात्रासंभवहोसकतीहै।ومنثم،فإناللونالطبيعيللدقةيتضاءلبسببالتقعسElataquedeloskoalasempezóel23deseptiembrede2346,cuando1548293animaleshicieronestragosenNuevaYorkΟΣωκράτηςδενέτρωγεφασόλιακάθεΚυριακήσύμφωναμεπρόσφαταευρήματαειδικών',
        matrixStyle: [],
        matrixLength: 0
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
        density: '',
        fade: 0
    };
    this.matrixize = function matrixea() {
        this.params.matrixStyle = this.params.matrixAlphabet.split('');
        this.params.matrixLength = this.params.matrixStyle.length;
    };
    this.init = function inicia() {
        var _this = this;
        this.matrixize();
        if (this.state.started === true) return this.game();
        else {
            this.state.started = true;
            this.state.gameStart = new Date();
            this.params.width = parseInt(Math.floor(window.innerWidth - window.innerWidth % this.params.gridCell));
            this.params.height = parseInt(Math.floor(window.innerHeight * 0.8 - window.innerHeight * 0.8 % this.params.gridCell));
            canv.width = this.params.width;
            canv.height = this.params.height;
            this.params.hcells = this.params.width / this.params.gridCell;
            this.params.vcells = this.params.height / this.params.gridCell;
            this.state.board = this.createBoard();
            this.state.nextBoard = this.createBoard();
            this.seedRandom();
            this.drawBoard();
            setTimeout(function() {
                _this.game();
            }, this.params.timeInt);
            return;
        }
    };
    this.calculateDensity = function calculaDensidad() {
        var boardSize = this.params.hcells * this.params.vcells;
        return "".concat((this.state.alive / boardSize * 100).toFixed(2), " %");
    };
    this.createBoard = function creaTablero() {
        var board = [];
        for(var i = 0; i < this.params.vcells; i++){
            var row = [];
            for(var j = 0; j < this.params.hcells; j++)row.push(0);
            board.push(row);
        }
        return board;
    };
    this.seedRandom = function puebla() {
        for(var i = 0; i < this.params.vcells; i++)for(var j = 0; j < this.params.hcells; j++){
            var temp = randomProbability(20);
            var index = Math.floor(this.getRandomNumber() * temp.length);
            var value = temp[index];
            if (value === 1) this.state.births++;
            this.state.nextBoard[i][j] = value;
        }
        function randomProbability(probability) {
            if (probability < 0) probability = -probability;
            if (probability < 1 && probability > 0) probability = probability * 100;
            if (probability > 100) {
                var divisorToTargetRange = Math.pow(10, String(probability).length - 1);
                probability = Math.floor(probability / divisorToTargetRange);
            }
            var notRandom = [];
            for(var _i = 0; _i < probability; _i++)notRandom.push(1);
            for(var _i2 = 0; _i2 < 100 - probability; _i2++)notRandom.push(0);
            return notRandom;
        }
    };
    this.seedFigures = function pueblaFiguras(figure) {
        var xcenter = Math.floor(this.params.hcells / 2);
        var ycenter = Math.floor(this.params.hcells / 2);
        console.log(xcenter, ycenter);
        var figures = superfigures();
        return figures.figure;
    };
    this.drawBoard = function dibujaTablero() {
        this.state.alive = 0;
        ctx.fillStyle = this.params.styleBackgroundDead;
        ctx.fillRect(0, 0, canv.width, canv.height);
        for(var i = 0; i < this.params.height; i += this.params.gridCell)for(var j = 0; j < this.params.width; j += this.params.gridCell){
            var py = Math.floor(i / this.params.gridCell);
            var px = Math.floor(j / this.params.gridCell);
            if (this.state.nextBoard[py][px] === 1) {
                if (this.state.board[py][px] === 0) {
                    ctx.fillStyle = this.params.styleBackgroundBorn;
                    this.state.births++;
                } else {
                    ctx.fillStyle = this.params.styleBackgroundAlive;
                    this.state.alive++;
                }
                ctx.font = '10pt sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                var text = this.params.matrixStyle[Math.floor(this.getRandomNumber() * this.params.matrixLength)];
                var centerOffset = this.params.gridCell / 2;
                ctx.strokeStyle = this.params.styleMesh;
                ctx.strokeRect(j, i, this.params.gridCell, this.params.gridCell);
                ctx.fillText(text, j + centerOffset, i + centerOffset);
            } else if (this.state.nextBoard[py][px] === 0) {
                this.state.deaths++;
                if (this.params.mesh) {
                    ctx.fillStyle = this.params.styleMesh;
                    ctx.fillRect(j, i, this.params.gridCell, this.params.gridCell);
                    ctx.fillStyle = this.params.styleBackgroundDead;
                    ctx.fillRect(j + 1, i + 1, this.params.gridCell - 1, this.params.gridCell - 1);
                } else {
                    ctx.fillStyle = this.params.styleBackgroundDead;
                    ctx.fillRect(j, i, this.params.gridCell, this.params.gridCell);
                }
            }
        }
        this.state.alive === 0 ? this.state.growth = '0.00 %' : this.state.growth = "".concat(((this.state.births - this.state.deaths) / (this.state.births + this.state.deaths) * 100).toFixed(2), " %");
        this.state.density = this.calculateDensity();
        this.updateUIinfo();
    };
    this.fadeOut = function desvanece() {
        var _this2 = this;
        this.state.fade = this.state.fade + 8;
        if (this.state.fade <= 256) setTimeout(function() {
            var hex = _this2.state.fade.toString(16);
            if (hex.length === 1) hex = '0' + hex;
            ctx.fillStyle = '' + _this2.params.styleBackgroundDead + hex;
            ctx.fillRect(0, 0, canv.width, canv.height);
            _this2.fadeOut();
        }, this.params.timeInt);
    };
    this.updateUIinfo = function actualizaInfoIU() {
        ticks.innerHTML = "".concat(this.state.tickCount);
        alive.innerHTML = "".concat(this.state.alive);
        deaths.innerHTML = "".concat(this.state.deaths);
        births.innerHTML = "".concat(this.state.births);
        growth.innerHTML = "".concat(this.state.growth);
        density.innerHTML = "".concat(this.state.density);
    };
    this.nextTick = function proximoTick() {
        this.state.nextBoard = this.createBoard();
        for(var i = 1; i < this.params.vcells - 1; i++)for(var j = 1; j < this.params.hcells - 1; j++)this.state.nextBoard[i][j] = this.checkCell([
            i,
            j
        ]);
    };
    this.checkCell = function checkCelula(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), px = _ref2[0], py = _ref2[1];
        var aliveNeighbours = 0;
        for(var i = px - 1; i < px + 2; i++){
            for(var j = py - 1; j < py + 2; j++)if (this.state.board[i][j] === 1) aliveNeighbours++;
        }
        if (this.state.board[px][py] === 1) aliveNeighbours--;
        if (aliveNeighbours < 2 || aliveNeighbours > 3) return 0;
        else {
            if (this.state.board[px][py] === 0 && aliveNeighbours === 3) return 1;
            else if (this.state.board[px][py] === 0 && aliveNeighbours === 2) return 0;
            else return 1;
        }
    };
    this.test = function testea(numberOfTicks) {
        var board = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.board;
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
        if (this.state.ticks <= numberOfTicks) return this.test(numberOfTicks);
        else {
            this.state.endType = 'end of test';
            this.state.gameEnd = new Date();
            return this.crop(this.state.board);
        }
    };
    this.expand = function expande(board) {
        var rows = board.length;
        var cols = board[0].length;
        var expandedBoard = Array.from(0);
        var expandedRow = Array.from(0);
        for(var i = 0; i < cols; i++)expandedRow.push(0);
        for(var _i3 = 0; _i3 < rows; _i3++)expanededBoard.push([
            0,
            0
        ].concat(_toConsumableArray(board[_i3]), [
            0,
            0
        ]));
        for(var _i4 = 1; _i4 < 2; _i4++){
            expandedBoard.unshift(epandedRow);
            expandedBoard.push(epandedRow);
        }
    };
    this.crop = function recorta(board) {
        var resultBoard = [];
        for(var i = 2; i < board.length - 2; i++){
            var row = board[i].shift().shift().pop().pop();
            resultBoard.push(row);
        }
        return resultBoard;
    };
    this.game = function juega() {
        var _this3 = this;
        this.state.tickCount++;
        this.drawBoard();
        this.state.board = this.state.nextBoard;
        this.nextTick();
        if (this.state.tickCount < this.params.overflowLimit) {
            setTimeout(function() {
                _this3.game();
            }, this.params.timeInt);
            return;
        } else {
            this.state.gameEnd = new Date();
            this.state.endType = 'Preset limit of ticks reached';
            this.fadeOut();
            return;
        }
    };
    this.getRandomNumber = function numAleatorio() {
        var crypto = window.crypto || window.msCrypto;
        var array = new Uint32Array(1);
        var value = crypto.getRandomValues(array);
        return Number(value).toFixed(17) / (Math.pow(2, 32) - 1);
    };
};
/* general HTML selectors */ var canv = document.querySelector('#gameScreen');
var ctx = canv.getContext('2d');
var ticks = document.querySelector('#ticks');
var births = document.querySelector('#births');
var deaths = document.querySelector('#deaths');
var growth = document.querySelector('#growth');
var alive = document.querySelector('#alive');
var density = document.querySelector('#density');
/* create & start game */ var juego = new Game();
window.onload = function() {
    juego.init();
};

},{}]},["5Wo4o","4PfTw"], "4PfTw", "parcelRequireb0d1")

//# sourceMappingURL=index.b54edac5.js.map
