import Phaser from 'phaser';

import PreloadScene from './scripts/scenes/PreloadScene';
import GameScene from './scripts/scenes/GameScene';
import BagScene from './scripts/scenes/BagScene';
import AccessoryScene from './scripts/scenes/AccessoryScene';
import MakeupScene from './scripts/scenes/MakeupScene';
import FinishScene from './scripts/scenes/FinishScene';

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    scene: [
        PreloadScene, 
        GameScene,
        BagScene,
        AccessoryScene,
        MakeupScene,
        FinishScene
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);
