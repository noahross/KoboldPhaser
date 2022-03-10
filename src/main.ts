import * as Phaser from "phaser";
import * as models from "./models";
import { spells } from "./spells";
import { getRandomNumber } from "./dice";
import { askSpell } from "./input";
import { imageMap } from "./models";
import { path } from "./images";

let gameState: any = {};

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Game",
};

export class GameScene extends Phaser.Scene {
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    private room: models.Room;
    private enemyImage: Phaser.GameObjects.Image;
    private exitImage: Phaser.GameObjects.Image;

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        console.log('preload imageMap', imageMap);
        console.log('imageMap.entries.length: ' + imageMap.entries.length);
        for (let entry of imageMap.entries()){
            let image: models.Image = entry[1];
            console.log(image.name + ' loading.');
            image.load(this);
        };
    }

    public create() {
        this.square = this.add.rectangle(400, 400, 100, 100, 0xffffff) as any;
        this.physics.add.existing(this.square);
        console.log('create imageMap.length: ' + imageMap.size);
        let background: Phaser.GameObjects.Image = imageMap.get("background").create(this);
        background.scale = 1.5;
        /*let background: models.Image = imageMap.get("background");
        let backgroundTile: Phaser.GameObjects.TileSprite = 
            new Phaser.GameObjects.TileSprite(this, background.x, background.y, 0, 0, "background");*/
        this.room = models.getRoom();
        console.log('this.room', this.room);
        if(this.room.exit) {
            this.exitImage = this.room.exit.image.create(this);
        }
        this.enemyImage = this.room.enemy.image.create(this);
        let bard: Phaser.GameObjects.Image = imageMap.get("bard").create(this);
    }

    public update() {
        const cursorKeys = this.input.keyboard.createCursorKeys();

        if (cursorKeys.up.isDown) {
            this.square.body.setVelocityY(-500);
        } else if (cursorKeys.down.isDown) {
            this.square.body.setVelocityY(500);
        } else {
            this.square.body.setVelocityY(0);
        }

        if (cursorKeys.right.isDown) {
            this.square.body.setVelocityX(500);
        } else if (cursorKeys.left.isDown) {
            this.square.body.setVelocityX(-500);
        } else {
            this.square.body.setVelocityX(0);
        }
    }
}

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

const gameConfig: Phaser.Types.Core.GameConfig = {
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

export const game = new Phaser.Game(gameConfig);
