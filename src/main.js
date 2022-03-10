"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.GameScene = void 0;
var Phaser = require("phaser");
var models = require("./models");
var models_1 = require("./models");
var gameState = {};
var sceneConfig = {
    active: false,
    visible: false,
    key: "Game",
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this, sceneConfig) || this;
    }
    GameScene.prototype.preload = function () {
        var e_1, _a;
        console.log('preload imageMap', models_1.imageMap);
        console.log('imageMap.entries.length: ' + models_1.imageMap.entries.length);
        try {
            for (var _b = __values(models_1.imageMap.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                var image = entry[1];
                console.log(image.name + ' loading.');
                image.load(this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ;
    };
    GameScene.prototype.create = function () {
        this.square = this.add.rectangle(400, 400, 100, 100, 0xffffff);
        this.physics.add.existing(this.square);
        console.log('create imageMap.length: ' + models_1.imageMap.size);
        var background = models_1.imageMap.get("background").create(this);
        background.scale = 1.5;
        /*let background: models.Image = imageMap.get("background");
        let backgroundTile: Phaser.GameObjects.TileSprite =
            new Phaser.GameObjects.TileSprite(this, background.x, background.y, 0, 0, "background");*/
        this.room = models.getRoom();
        console.log('this.room', this.room);
        if (this.room.exit) {
            this.exitImage = this.room.exit.image.create(this);
        }
        this.enemyImage = this.room.enemy.image.create(this);
        var bard = models_1.imageMap.get("bard").create(this);
    };
    GameScene.prototype.update = function () {
        var cursorKeys = this.input.keyboard.createCursorKeys();
        if (cursorKeys.up.isDown) {
            this.square.body.setVelocityY(-500);
        }
        else if (cursorKeys.down.isDown) {
            this.square.body.setVelocityY(500);
        }
        else {
            this.square.body.setVelocityY(0);
        }
        if (cursorKeys.right.isDown) {
            this.square.body.setVelocityX(500);
        }
        else if (cursorKeys.left.isDown) {
            this.square.body.setVelocityX(-500);
        }
        else {
            this.square.body.setVelocityX(0);
        }
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;
/*function renderRoom(scene: GameScene, room: models.Room): void {
    renderEnemy(scene, room.enemy)
}

function renderEnemy(scene: GameScene, enemy: models.Character): void {
    if (gameState.enemy) {
        gameState.enemy.destroy();
    }
    gameState.enemy = scene.add.image(270, 340, enemy.image.name);
    gameState.enemy.setOrigin(0.5, 1);
    gameState.enemy.setScale(0.7);
}*/
var gameConfig = {
    title: "Sample",
    scene: GameScene,
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        },
    },
    parent: "game",
    backgroundColor: "#000000",
};
exports.game = new Phaser.Game(gameConfig);
//# sourceMappingURL=main.js.map