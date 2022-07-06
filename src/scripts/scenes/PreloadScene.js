import Phaser from "phaser";

import badroomPng from '../../assets/sprites/badroom.png';
import club from '../../assets/sprites/club.png';
import party from '../../assets/sprites/party.png';

import man from '../../assets/sprites/man.png';

import womanIdeaPng from '../../assets/sprites/goodIdeaAnimation.png';
import womanIdeaJson from '../../assets/sprites/goodIdeaAnimation.json';
import mainBody from '../../assets/sprites/mainBody.png';
import dress from '../../assets/sprites/dress.png';
import suit from '../../assets/sprites/suit.png';
import sadlyHead from '../../assets/sprites/sadlyHead.png';
import joyHead from '../../assets/sprites/joyHead.png';

import textBlock from '../../assets/sprites/textBlock.png';
import textBlockPaul from '../../assets/sprites/textBlockPaul.png';
import button from '../../assets/sprites/button.png';
import blockChoose from '../../assets/sprites/blockChoose.png';
import hand from '../../assets/sprites/hand.png';
import hover from '../../assets/sprites/hover.png';

import progressBar from '../../assets/sprites/progressBar.png';
import progressBar1 from '../../assets/sprites/progressBar1.png';
import progressBar2 from '../../assets/sprites/progressBar2.png';
import progressBar3 from '../../assets/sprites/progressBar3.png';

import brownBag from '../../assets/sprites/brownBag.png';
import blueBag from '../../assets/sprites/blueBag.png';
import glasses from '../../assets/sprites/glasses.png';
import collar from '../../assets/sprites/collar.png';
import necklace from '../../assets/sprites/necklace.png';

import dressIcon from '../../assets/sprites/dressIcon.png';
import suitIcon from '../../assets/sprites/suitIcon.png';
import brownBagIcon from '../../assets/sprites/brownBagIcon.png';
import blueBagIcon from '../../assets/sprites/blueBagIcon.png';
import glassesIcon from '../../assets/sprites/glassesIcon.png';
import collarIcon from '../../assets/sprites/collarIcon.png';
import necklaceIcon from '../../assets/sprites/necklaceIcon.png';
import partyIcon from '../../assets/sprites/partyIcon.png';
import clubIcon from '../../assets/sprites/clubIcon.png';

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super("Preload");
    }

    preload() {
        this.add.sprite(-360, -30, 'bg').setOrigin(0);
        this.preloadAssets();
    }

    preloadAssets() {     
        this.load.image('bg', badroomPng);
        this.load.image('club', club);
        this.load.image('party', party);

        this.load.image('man', man);

        this.load.image('textBlock', textBlock);
        this.load.image('textBlockPaul', textBlockPaul);
        this.load.image('button', button);
        this.load.image('mainBody', mainBody);
        this.load.image('dress', dress);
        this.load.image('suit', suit);
        this.load.image('sadlyHead', sadlyHead);
        this.load.image('joyHead', joyHead);
        this.load.image('blockChoose', blockChoose);
        this.load.image('hand', hand);
        this.load.image('hover', hover);

        this.load.image('progressBar', progressBar);
        this.load.image('progressBar1', progressBar1);
        this.load.image('progressBar2', progressBar2);
        this.load.image('progressBar3', progressBar3);

        this.load.image('brownBag', brownBag);
        this.load.image('blueBag', blueBag);
        this.load.image('glasses', glasses); 
        this.load.image('collar', collar);
        this.load.image('necklace', necklace);

        this.load.image('dressIcon', dressIcon);
        this.load.image('suitIcon', suitIcon);
        this.load.image('brownBagIcon', brownBagIcon);
        this.load.image('blueBagIcon', blueBagIcon);
        this.load.image('glassesIcon', glassesIcon);
        this.load.image('collarIcon', collarIcon);
        this.load.image('necklaceIcon', necklaceIcon);
        this.load.image('partyIcon', partyIcon);
        this.load.image('clubIcon', clubIcon);

        this.load.atlas('womanIntro', womanIdeaPng,  womanIdeaJson);
    }

    create() {
        this.scene.start('GameScene');
    }
}