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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoom = exports.calculateDamage = exports.Caster = exports.IronDoor = exports.LockedDoor = exports.Door = exports.Hobgoblin = exports.Goblin = exports.Kobold = exports.Character = exports.Spell = exports.Ability = exports.Exit = exports.Room = exports.imageMap = exports.Image = exports.capitalizeFirstLetter = exports.wait = void 0;
require("phaser");
var dice_1 = require("./dice");
var dice_2 = require("./dice");
var images_1 = require("./images");
function wait() {
    var ms = 1000;
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
exports.wait = wait;
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
var Image = /** @class */ (function () {
    function Image(name, fileName, x, y, scale) {
        this.name = name;
        this.fileName = fileName;
        this.x = x;
        this.y = y;
        this.scale = scale;
    }
    Image.prototype.load = function (scene) {
        console.log(this.name + ' | ' + this.fileName + ' loading.');
        scene.load.image(this.name, this.fileName);
    };
    Image.prototype.create = function (scene) {
        console.log('scene = undefined', scene === undefined);
        console.log(this.name + ' | ' + this.fileName + ' creating.');
        var image = scene.add.image(this.x, this.y, this.name);
        image.scale = this.scale;
        return image;
    };
    return Image;
}());
exports.Image = Image;
function getImageMap() {
    console.log('rawImages.length: ' + images_1.rawImages.length);
    var imageMap = new Map();
    images_1.rawImages.forEach(function (image) {
        console.log('image.length: ' + image.length);
        imageMap.set(image[0], new Image(image[0], image[1], image[2], image[3], image[4]));
        //console.log(imageMap[image[0]]);
    });
    console.log('getImageMap: imageMap.values.length: ', imageMap["background"]);
    return imageMap;
}
exports.imageMap = getImageMap();
var Room = /** @class */ (function () {
    function Room() {
        this.exit = getRandomDoor();
        this.enemy = getRandomEnemy();
    }
    return Room;
}());
exports.Room = Room;
var Exit = /** @class */ (function () {
    function Exit(name, isOpen, isLocked, hitPoints, image) {
        this.name = name;
        this.isOpen = isOpen;
        this.isLocked = isLocked;
        this.hitPoints = hitPoints;
        this.image = image;
    }
    Exit.prototype.interact = function () {
        if (!this.isOpen && this.isLocked) {
            console.log("".concat(capitalizeFirstLetter(this.name), " is locked."));
        }
        if (!this.isLocked) {
            var newState = "open";
            if (this.isOpen) {
                newState = "closed";
            }
            this.isOpen = !this.isOpen;
            console.log("The ".concat(this.name, " is now ").concat(newState, "."));
        }
    };
    Exit.prototype.takeDamage = function (amount) {
        this.hitPoints -= amount;
        if (this.hitPoints <= 0) {
            this.hitPoints = 0;
            this.isLocked = false;
            console.log("".concat(capitalizeFirstLetter(this.name), " has been unlocked."));
            wait();
        }
    };
    return Exit;
}());
exports.Exit = Exit;
var Ability;
(function (Ability) {
    Ability[Ability["STR"] = 0] = "STR";
    Ability[Ability["DEX"] = 1] = "DEX";
    Ability[Ability["CON"] = 2] = "CON";
    Ability[Ability["INT"] = 3] = "INT";
    Ability[Ability["WIS"] = 4] = "WIS";
    Ability[Ability["CHA"] = 5] = "CHA";
})(Ability = exports.Ability || (exports.Ability = {}));
var Spell = /** @class */ (function () {
    function Spell(name, target, range, duration, effect, damage) {
        this.name = name;
        this.target = target;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
        this.damage = damage;
    }
    return Spell;
}());
exports.Spell = Spell;
var Character = /** @class */ (function () {
    function Character(name, race, hitPoints, image, characterClass, abilityScores) {
        this.isAlive = true;
        this.name = name;
        this.race = race;
        this.hitPoints = hitPoints;
        this.image = image;
        (this.characterClass = characterClass), (this.abilityScores = abilityScores);
    }
    Character.prototype.takeDamage = function (amount) {
        this.hitPoints -= amount;
        if (this.hitPoints <= 0) {
            this.hitPoints = 0;
            this.isAlive = false;
            console.log("".concat(capitalizeFirstLetter(this.name), " has perished."));
            wait();
        }
    };
    return Character;
}());
exports.Character = Character;
var Kobold = /** @class */ (function (_super) {
    __extends(Kobold, _super);
    function Kobold() {
        var _this = this;
        var name = 'kobold';
        _this = _super.call(this, name, name, 8, exports.imageMap.get(name)) || this;
        return _this;
    }
    return Kobold;
}(Character));
exports.Kobold = Kobold;
var Goblin = /** @class */ (function (_super) {
    __extends(Goblin, _super);
    function Goblin() {
        var _this = this;
        var name = 'goblin';
        _this = _super.call(this, name, name, 8, exports.imageMap.get(name)) || this;
        return _this;
    }
    return Goblin;
}(Character));
exports.Goblin = Goblin;
var Hobgoblin = /** @class */ (function (_super) {
    __extends(Hobgoblin, _super);
    function Hobgoblin() {
        var _this = this;
        var name = 'hobgoblin';
        _this = _super.call(this, name, name, 8, exports.imageMap.get(name)) || this;
        return _this;
    }
    return Hobgoblin;
}(Character));
exports.Hobgoblin = Hobgoblin;
var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door() {
        var _this = this;
        var name = 'door';
        _this = _super.call(this, name, false, false, 0, exports.imageMap.get(name)) || this;
        return _this;
    }
    return Door;
}(Exit));
exports.Door = Door;
var LockedDoor = /** @class */ (function (_super) {
    __extends(LockedDoor, _super);
    function LockedDoor() {
        return _super.call(this, "locked door", false, true, 10, exports.imageMap.get("door")) || this;
    }
    return LockedDoor;
}(Exit));
exports.LockedDoor = LockedDoor;
var IronDoor = /** @class */ (function (_super) {
    __extends(IronDoor, _super);
    function IronDoor() {
        return _super.call(this, "iron door", false, true, 20, exports.imageMap.get("ironDoor")) || this;
    }
    return IronDoor;
}(Exit));
exports.IronDoor = IronDoor;
var Caster = /** @class */ (function (_super) {
    __extends(Caster, _super);
    function Caster(spellsKnown, spellList, name, race, hitPoints, image, characterClass, abilityScores) {
        var _this = _super.call(this, name, race, hitPoints, image, characterClass, abilityScores) || this;
        _this.spellsKnown = spellsKnown;
        _this.spellList = spellList;
        return _this;
    }
    Caster.prototype.castSpell = function (spell, target) {
        if (spell.damage) {
            var damage = calculateDamage(spell.damage, this.abilityScores);
            var targetName = target.name.charAt(0).toLowerCase() + target.name.slice(1);
            console.log("".concat(spell.name, " does ").concat(damage, " damage to ").concat(targetName, "."));
            wait();
            target.takeDamage(damage);
        }
    };
    Caster.prototype.logSpells = function () {
        var spellString = "Available spells";
        var index = 0;
        this.spellList.forEach(function (spell) {
            spellString += " - " + index + ". " + spell.name;
            index++;
        });
        console.log(spellString);
    };
    return Caster;
}(Character));
exports.Caster = Caster;
function calculateDamage(damage, abilityScores) {
    var amount = 0;
    if (damage.modifierAbility && abilityScores) {
        amount += getModifier(damage.modifierAbility, abilityScores);
    }
    amount += (0, dice_1.roll)(damage.amount, damage.dice);
    return amount;
}
exports.calculateDamage = calculateDamage;
function getModifier(modifierAbility, abilityScores) {
    var amount = 0;
    var modifier = abilityScores.get(modifierAbility);
    if (abilityScores && modifier) {
        amount += modifier;
    }
    return amount;
}
function getRoom() {
    return new Room();
}
exports.getRoom = getRoom;
function getRandomDoor() {
    var randomNumber = (0, dice_2.getRandomNumber)(0, 3);
    if (randomNumber === 1) {
        return new Door();
    }
    else if (randomNumber === 2) {
        return new LockedDoor();
    }
    else if (randomNumber === 3) {
        return new IronDoor();
    }
    else {
        return undefined;
    }
}
function getRandomEnemy() {
    var randomNumber = (0, dice_2.getRandomNumber)(1, 3);
    if (randomNumber === 1) {
        return new Kobold();
    }
    else if (randomNumber === 2) {
        return new Goblin();
    }
    else {
        return new Hobgoblin();
    }
}
//# sourceMappingURL=models.js.map