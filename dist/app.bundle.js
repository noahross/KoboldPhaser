/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./log\": \"./node_modules/webpack/hot/log.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\";\n\n//# sourceURL=webpack:///(webpack)/hot_sync_nonrecursive_^\\.\\/log$?");

/***/ }),

/***/ "./src/dice.ts":
/*!*********************!*\
  !*** ./src/dice.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getRandomNumber = exports.roll = exports.Dice = void 0;\nvar Dice;\n(function (Dice) {\n    Dice[Dice[\"d4\"] = 4] = \"d4\";\n    Dice[Dice[\"d6\"] = 6] = \"d6\";\n    Dice[Dice[\"d8\"] = 8] = \"d8\";\n    Dice[Dice[\"d10\"] = 10] = \"d10\";\n    Dice[Dice[\"d12\"] = 12] = \"d12\";\n    Dice[Dice[\"d20\"] = 20] = \"d20\";\n    Dice[Dice[\"d100\"] = 100] = \"d100\";\n})(Dice = exports.Dice || (exports.Dice = {}));\nfunction roll(amount, dice) {\n    return getRandomNumber(amount, amount * dice);\n}\nexports.roll = roll;\nfunction getRandomNumber(min, max) {\n    var amount;\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nexports.getRandomNumber = getRandomNumber;\n\n\n//# sourceURL=webpack:///./src/dice.ts?");

/***/ }),

/***/ "./src/images.ts":
/*!***********************!*\
  !*** ./src/images.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n//import { Image } from \"./models\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.rawImages = exports.path = void 0;\nexports.path = \"../assets/\";\n/*export var imageMap: { [key: string]: Image } = {\n    \"bard\": new Image(\"bard\", path + \"bard.jpeg\", 150, 100),\n    \"background\": new Image(\"background\", path + \"background.jpeg\", 150, 100),\n    \"door\": new Image(\"door\", path + \"door.jpg\", 150, 100),\n    \"ironDoor\": new Image(\"ironDoor\", path + \"ironDoor.png\", 150, 100),\n    \"kobold\": new Image(\"kobold\", path + \"kobold.jpeg\", 150, 100),\n    \"goblin\": new Image(\"goblin\", path + \"goblin.jpg\", 150, 100),\n    \"hobgoblin\": new Image(\"hobgoblin\", path + \"hobgoblin.jpg\", 150, 100)\n};\n\nexport var images: Image[]  = [\n    new Image(\"bard\", path + \"bard.jpeg\", 150, 100),\n    new Image(\"background\", path + \"background.jpeg\", 150, 100),\n    new Image(\"door\", path + \"door.jpg\", 150, 100),\n    new Image(\"ironDoor\", path + \"ironDoor.png\", 150, 100),\n    new Image(\"kobold\", path + \"kobold.jpeg\", 150, 100),\n    new Image(\"goblin\", path + \"goblin.jpg\", 150, 100),\n    new Image(\"hobgoblin\", path + \"hobgoblin.jpg\", 150, 100)\n];*/\nexports.rawImages = [\n    [\"bard\", exports.path + \"bard.jpeg\", 150, 450, 1],\n    [\"background\", exports.path + \"background.jpeg\", 150, 100, 1.5],\n    [\"door\", exports.path + \"door.jpg\", 720, 420, .6],\n    [\"ironDoor\", exports.path + \"ironDoor.png\", 750, 400, .5],\n    [\"kobold\", exports.path + \"kobold.jpeg\", 420, 400, .2],\n    [\"goblin\", exports.path + \"goblin.jpg\", 420, 400, .5],\n    [\"hobgoblin\", exports.path + \"hobgoblin.jpg\", 400, 400, .5]\n];\n\n\n//# sourceURL=webpack:///./src/images.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __values = (this && this.__values) || function(o) {\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n    if (m) return m.call(o);\n    if (o && typeof o.length === \"number\") return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.game = exports.GameScene = void 0;\nvar Phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\nvar models = __webpack_require__(/*! ./models */ \"./src/models.ts\");\nvar models_1 = __webpack_require__(/*! ./models */ \"./src/models.ts\");\nvar gameState = {};\nvar sceneConfig = {\n    active: false,\n    visible: false,\n    key: \"Game\",\n};\nvar GameScene = /** @class */ (function (_super) {\n    __extends(GameScene, _super);\n    function GameScene() {\n        return _super.call(this, sceneConfig) || this;\n    }\n    GameScene.prototype.preload = function () {\n        var e_1, _a;\n        console.log('preload imageMap', models_1.imageMap);\n        console.log('imageMap.entries.length: ' + models_1.imageMap.entries.length);\n        try {\n            for (var _b = __values(models_1.imageMap.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {\n                var entry = _c.value;\n                var image = entry[1];\n                console.log(image.name + ' loading.');\n                image.load(this);\n            }\n        }\n        catch (e_1_1) { e_1 = { error: e_1_1 }; }\n        finally {\n            try {\n                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);\n            }\n            finally { if (e_1) throw e_1.error; }\n        }\n        ;\n    };\n    GameScene.prototype.create = function () {\n        this.square = this.add.rectangle(400, 400, 100, 100, 0xffffff);\n        this.physics.add.existing(this.square);\n        console.log('create imageMap.length: ' + models_1.imageMap.size);\n        var background = models_1.imageMap.get(\"background\").create(this);\n        background.scale = 1.5;\n        /*let background: models.Image = imageMap.get(\"background\");\n        let backgroundTile: Phaser.GameObjects.TileSprite =\n            new Phaser.GameObjects.TileSprite(this, background.x, background.y, 0, 0, \"background\");*/\n        this.room = models.getRoom();\n        console.log('this.room', this.room);\n        if (this.room.exit) {\n            this.exitImage = this.room.exit.image.create(this);\n        }\n        this.enemyImage = this.room.enemy.image.create(this);\n        var bard = models_1.imageMap.get(\"bard\").create(this);\n    };\n    GameScene.prototype.update = function () {\n        var cursorKeys = this.input.keyboard.createCursorKeys();\n        if (cursorKeys.up.isDown) {\n            this.square.body.setVelocityY(-500);\n        }\n        else if (cursorKeys.down.isDown) {\n            this.square.body.setVelocityY(500);\n        }\n        else {\n            this.square.body.setVelocityY(0);\n        }\n        if (cursorKeys.right.isDown) {\n            this.square.body.setVelocityX(500);\n        }\n        else if (cursorKeys.left.isDown) {\n            this.square.body.setVelocityX(-500);\n        }\n        else {\n            this.square.body.setVelocityX(0);\n        }\n    };\n    return GameScene;\n}(Phaser.Scene));\nexports.GameScene = GameScene;\n/*function renderRoom(scene: GameScene, room: models.Room): void {\n    renderEnemy(scene, room.enemy)\n}\n\nfunction renderEnemy(scene: GameScene, enemy: models.Character): void {\n    if (gameState.enemy) {\n        gameState.enemy.destroy();\n    }\n    gameState.enemy = scene.add.image(270, 340, enemy.image.name);\n    gameState.enemy.setOrigin(0.5, 1);\n    gameState.enemy.setScale(0.7);\n}*/\nvar gameConfig = {\n    title: \"Sample\",\n    scene: GameScene,\n    type: Phaser.AUTO,\n    scale: {\n        width: window.innerWidth,\n        height: window.innerHeight,\n    },\n    physics: {\n        default: \"arcade\",\n        arcade: {\n            debug: true,\n        },\n    },\n    parent: \"game\",\n    backgroundColor: \"#000000\",\n};\nexports.game = new Phaser.Game(gameConfig);\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/models.ts":
/*!***********************!*\
  !*** ./src/models.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getRoom = exports.calculateDamage = exports.Caster = exports.IronDoor = exports.LockedDoor = exports.Door = exports.Hobgoblin = exports.Goblin = exports.Kobold = exports.Character = exports.Spell = exports.Ability = exports.Exit = exports.Room = exports.imageMap = exports.Image = exports.capitalizeFirstLetter = exports.wait = void 0;\n__webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\nvar dice_1 = __webpack_require__(/*! ./dice */ \"./src/dice.ts\");\nvar dice_2 = __webpack_require__(/*! ./dice */ \"./src/dice.ts\");\nvar images_1 = __webpack_require__(/*! ./images */ \"./src/images.ts\");\nfunction wait() {\n    var ms = 1000;\n    var start = new Date().getTime();\n    var end = start;\n    while (end < start + ms) {\n        end = new Date().getTime();\n    }\n}\nexports.wait = wait;\nfunction capitalizeFirstLetter(string) {\n    return string.charAt(0).toUpperCase() + string.slice(1);\n}\nexports.capitalizeFirstLetter = capitalizeFirstLetter;\nvar Image = /** @class */ (function () {\n    function Image(name, fileName, x, y, scale) {\n        this.name = name;\n        this.fileName = fileName;\n        this.x = x;\n        this.y = y;\n        this.scale = scale;\n    }\n    Image.prototype.load = function (scene) {\n        console.log(this.name + ' | ' + this.fileName + ' loading.');\n        scene.load.image(this.name, this.fileName);\n    };\n    Image.prototype.create = function (scene) {\n        console.log('scene = undefined', scene === undefined);\n        console.log(this.name + ' | ' + this.fileName + ' creating.');\n        var image = scene.add.image(this.x, this.y, this.name);\n        image.scale = this.scale;\n        return image;\n    };\n    return Image;\n}());\nexports.Image = Image;\nfunction getImageMap() {\n    console.log('rawImages.length: ' + images_1.rawImages.length);\n    var imageMap = new Map();\n    images_1.rawImages.forEach(function (image) {\n        console.log('image.length: ' + image.length);\n        imageMap.set(image[0], new Image(image[0], image[1], image[2], image[3], image[4]));\n        //console.log(imageMap[image[0]]);\n    });\n    console.log('getImageMap: imageMap.values.length: ', imageMap[\"background\"]);\n    return imageMap;\n}\nexports.imageMap = getImageMap();\nvar Room = /** @class */ (function () {\n    function Room() {\n        this.exit = getRandomDoor();\n        this.enemy = getRandomEnemy();\n    }\n    return Room;\n}());\nexports.Room = Room;\nvar Exit = /** @class */ (function () {\n    function Exit(name, isOpen, isLocked, hitPoints, image) {\n        this.name = name;\n        this.isOpen = isOpen;\n        this.isLocked = isLocked;\n        this.hitPoints = hitPoints;\n        this.image = image;\n    }\n    Exit.prototype.interact = function () {\n        if (!this.isOpen && this.isLocked) {\n            console.log(\"\".concat(capitalizeFirstLetter(this.name), \" is locked.\"));\n        }\n        if (!this.isLocked) {\n            var newState = \"open\";\n            if (this.isOpen) {\n                newState = \"closed\";\n            }\n            this.isOpen = !this.isOpen;\n            console.log(\"The \".concat(this.name, \" is now \").concat(newState, \".\"));\n        }\n    };\n    Exit.prototype.takeDamage = function (amount) {\n        this.hitPoints -= amount;\n        if (this.hitPoints <= 0) {\n            this.hitPoints = 0;\n            this.isLocked = false;\n            console.log(\"\".concat(capitalizeFirstLetter(this.name), \" has been unlocked.\"));\n            wait();\n        }\n    };\n    return Exit;\n}());\nexports.Exit = Exit;\nvar Ability;\n(function (Ability) {\n    Ability[Ability[\"STR\"] = 0] = \"STR\";\n    Ability[Ability[\"DEX\"] = 1] = \"DEX\";\n    Ability[Ability[\"CON\"] = 2] = \"CON\";\n    Ability[Ability[\"INT\"] = 3] = \"INT\";\n    Ability[Ability[\"WIS\"] = 4] = \"WIS\";\n    Ability[Ability[\"CHA\"] = 5] = \"CHA\";\n})(Ability = exports.Ability || (exports.Ability = {}));\nvar Spell = /** @class */ (function () {\n    function Spell(name, target, range, duration, effect, damage) {\n        this.name = name;\n        this.target = target;\n        this.range = range;\n        this.duration = duration;\n        this.effect = effect;\n        this.damage = damage;\n    }\n    return Spell;\n}());\nexports.Spell = Spell;\nvar Character = /** @class */ (function () {\n    function Character(name, race, hitPoints, image, characterClass, abilityScores) {\n        this.isAlive = true;\n        this.name = name;\n        this.race = race;\n        this.hitPoints = hitPoints;\n        this.image = image;\n        (this.characterClass = characterClass), (this.abilityScores = abilityScores);\n    }\n    Character.prototype.takeDamage = function (amount) {\n        this.hitPoints -= amount;\n        if (this.hitPoints <= 0) {\n            this.hitPoints = 0;\n            this.isAlive = false;\n            console.log(\"\".concat(capitalizeFirstLetter(this.name), \" has perished.\"));\n            wait();\n        }\n    };\n    return Character;\n}());\nexports.Character = Character;\nvar Kobold = /** @class */ (function (_super) {\n    __extends(Kobold, _super);\n    function Kobold() {\n        var _this = this;\n        var name = 'kobold';\n        _this = _super.call(this, name, name, 8, exports.imageMap.get(name)) || this;\n        return _this;\n    }\n    return Kobold;\n}(Character));\nexports.Kobold = Kobold;\nvar Goblin = /** @class */ (function (_super) {\n    __extends(Goblin, _super);\n    function Goblin() {\n        var _this = this;\n        var name = 'goblin';\n        _this = _super.call(this, name, name, 8, exports.imageMap.get(name)) || this;\n        return _this;\n    }\n    return Goblin;\n}(Character));\nexports.Goblin = Goblin;\nvar Hobgoblin = /** @class */ (function (_super) {\n    __extends(Hobgoblin, _super);\n    function Hobgoblin() {\n        var _this = this;\n        var name = 'hobgoblin';\n        _this = _super.call(this, name, name, 8, exports.imageMap.get(name)) || this;\n        return _this;\n    }\n    return Hobgoblin;\n}(Character));\nexports.Hobgoblin = Hobgoblin;\nvar Door = /** @class */ (function (_super) {\n    __extends(Door, _super);\n    function Door() {\n        var _this = this;\n        var name = 'door';\n        _this = _super.call(this, name, false, false, 0, exports.imageMap.get(name)) || this;\n        return _this;\n    }\n    return Door;\n}(Exit));\nexports.Door = Door;\nvar LockedDoor = /** @class */ (function (_super) {\n    __extends(LockedDoor, _super);\n    function LockedDoor() {\n        return _super.call(this, \"locked door\", false, true, 10, exports.imageMap.get(\"door\")) || this;\n    }\n    return LockedDoor;\n}(Exit));\nexports.LockedDoor = LockedDoor;\nvar IronDoor = /** @class */ (function (_super) {\n    __extends(IronDoor, _super);\n    function IronDoor() {\n        return _super.call(this, \"iron door\", false, true, 20, exports.imageMap.get(\"ironDoor\")) || this;\n    }\n    return IronDoor;\n}(Exit));\nexports.IronDoor = IronDoor;\nvar Caster = /** @class */ (function (_super) {\n    __extends(Caster, _super);\n    function Caster(spellsKnown, spellList, name, race, hitPoints, image, characterClass, abilityScores) {\n        var _this = _super.call(this, name, race, hitPoints, image, characterClass, abilityScores) || this;\n        _this.spellsKnown = spellsKnown;\n        _this.spellList = spellList;\n        return _this;\n    }\n    Caster.prototype.castSpell = function (spell, target) {\n        if (spell.damage) {\n            var damage = calculateDamage(spell.damage, this.abilityScores);\n            var targetName = target.name.charAt(0).toLowerCase() + target.name.slice(1);\n            console.log(\"\".concat(spell.name, \" does \").concat(damage, \" damage to \").concat(targetName, \".\"));\n            wait();\n            target.takeDamage(damage);\n        }\n    };\n    Caster.prototype.logSpells = function () {\n        var spellString = \"Available spells\";\n        var index = 0;\n        this.spellList.forEach(function (spell) {\n            spellString += \" - \" + index + \". \" + spell.name;\n            index++;\n        });\n        console.log(spellString);\n    };\n    return Caster;\n}(Character));\nexports.Caster = Caster;\nfunction calculateDamage(damage, abilityScores) {\n    var amount = 0;\n    if (damage.modifierAbility && abilityScores) {\n        amount += getModifier(damage.modifierAbility, abilityScores);\n    }\n    amount += (0, dice_1.roll)(damage.amount, damage.dice);\n    return amount;\n}\nexports.calculateDamage = calculateDamage;\nfunction getModifier(modifierAbility, abilityScores) {\n    var amount = 0;\n    var modifier = abilityScores.get(modifierAbility);\n    if (abilityScores && modifier) {\n        amount += modifier;\n    }\n    return amount;\n}\nfunction getRoom() {\n    return new Room();\n}\nexports.getRoom = getRoom;\nfunction getRandomDoor() {\n    var randomNumber = (0, dice_2.getRandomNumber)(0, 3);\n    if (randomNumber === 1) {\n        return new Door();\n    }\n    else if (randomNumber === 2) {\n        return new LockedDoor();\n    }\n    else if (randomNumber === 3) {\n        return new IronDoor();\n    }\n    else {\n        return undefined;\n    }\n}\nfunction getRandomEnemy() {\n    var randomNumber = (0, dice_2.getRandomNumber)(1, 3);\n    if (randomNumber === 1) {\n        return new Kobold();\n    }\n    else if (randomNumber === 2) {\n        return new Goblin();\n    }\n    else {\n        return new Hobgoblin();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/models.ts?");

/***/ }),

/***/ 0:
/*!*****************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./src/main.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/noaross/Documents/TypeScript/KoboldPhaser/node_modules/webpack-dev-server/client/index.js?http://localhost:8080 */\"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080\");\nmodule.exports = __webpack_require__(/*! ./src/main.ts */\"./src/main.ts\");\n\n\n//# sourceURL=webpack:///multi_(webpack)-dev-server/client?");

/***/ })

/******/ });