import BaseScene from "./BaseScene";

class GameScene extends BaseScene {
    constructor(config) {
        super('GameScene', config);
        this.timeout = 1;    

        this.buttons = [
            {scene: 'BagScene', image: 'dressIcon'},
            {scene: 'BagScene', image: 'suitIcon'},
            {progress: 'progressBar'},
            {clothes: 'mainBody', head: 'sadlyHead'}
        ]
    }

    create() {
        super.create();
        this.creatTimer();
        this.createIntroWoman();
        this.createTextBlock();

        this.positionTextX = 90;
        this.positionTextY = 480;
        this.text = "I received an invitation to the party!";
        this.createText(this.positionTextX, this.positionTextY, this.text);
    }

    //---------- IntroAnime ----------//
    createIntroWoman() {
        this.anims.create({
        key: 'preparation',
        frames: 'womanIntro',
        frameRate: 3,
        repeat: 5
        });
        this.introWoman = this.add.sprite(70, 0, 'womanIntro', 'goodIdea1').setOrigin(0).play('preparation');
    }

    //---------- Text Blocks ----------//
    createTextBlock() {
        this.textBlock = this.add.image(70, 395, 'textBlock').setOrigin(0).setScale(0);
        this.tweens.add({
            targets: this.textBlock,
            duration: 250,
            scaleX: 1,
            scaleY: 1,
            ease: 'Sine.easeInOut',
            repeat: 0,
        });
    }
    createText(x, y, text) {
        this.text = this.add.text(x, y, text, this.fontOptions).setOrigin(0).setScale(0);

        this.tweens.add({
            targets: this.text,
            duration: 350,
            scaleX: 1,
            scaleY: 1,
            ease: 'Sine.easeInOut',
            repeat: 0,
        });
    }

    //---------- Timer ----------//
    onTimerTick() {
        if (this.timeout <= 1) {
            this.textBlock.destroy();
            this.text.destroy();
            this.createTextBlock();
            
            this.positionTextX = 110;
            this.positionTextY = 480;
            this.text = "I need to prepare my appearance";
            this.createText(this.positionTextX, this.positionTextY, this.text);
        }

        if (this.timeout === 2) {
            this.textBlock.destroy();
            this.text.destroy();
            this.introWoman.destroy();
            this.createWoman(this.buttons);
            this.createButtons(this.buttons, this.setupButtonsEvents.bind(this));
            this.creatChooseAppearance();
        } 

        if (this.timeout >= 3) {
            this.timer.remove();
        }
        
        this.timeout++;
    }
    creatTimer() {
        this.timer = this.time.addEvent({
            delay: 2000,
            callback: this.onTimerTick,
            callbackScope: this,
            loop: true
        });
    }

    //---------- Buttons ----------//
    setupButtonsEvents(buttonsItem) {
        const buttonGo = buttonsItem.buttonGo;
        buttonGo.setInteractive();

        if (buttonGo.texture.key === 'dressIcon') {
            this.tweens.add({
                targets: buttonGo,
                duration: 250,
                scaleX: 1,
                scaleY: 1,
                ease: 'Sine.easeInOut',
                repeat: 0
            });

        } else {
            this.tweens.add({
                targets: buttonGo,
                duration: 750,
                scaleX: 1,
                scaleY: 1,
                ease: 'Sine.easeInOut',
                repeat: 0
            });
        }
        buttonGo.on('pointerup', (pointer, gameObject) => {
            buttonsItem.scene && this.scene.start(buttonsItem.scene, {
                buttonGo,
                buttons: this.buttons
            });
        })
    }
}

export default GameScene;