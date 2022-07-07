import Phaser from "phaser";

class BaseScene extends Phaser.Scene {
    constructor(key, config) {
        super(key);
        this.config = config;
        this.fontOptions = {fontSize: '30px NinitoSans', fill: '#303052'};
        this.positions = [160, 700];
        this.paddingRight = 280;
        this.progressPosition = [300, 30];
        this.womanPosition = [106, 31];
    }

    create(data) {
        this.createBackground();
    }

    //----------BG----------//
    createBackground(data) {
        if (data === 'partyIcon') {
            this.party = this.add.sprite(-360, -6, 'party').setOrigin(0);
        } else if(data === 'clubIcon') {
            this.add.sprite(-360, -6, 'club').setOrigin(0);
        } else {
            this.background = this.add.sprite(-360, -6, 'bg').setOrigin(0);
            this.graphicsBackground = this.add.graphics()
            .fillStyle(0x000000, 0.8)
            .fillRect(0, 0, 600, 900); 
        }
    }

    //---------- Woman ----------//
    createWoman(buttons) {
        buttons.forEach(buttonsItem => {
            const womanPosition = [this.womanPosition[0], this.womanPosition[1]];
            buttonsItem.woman = this.add.image(...womanPosition, buttonsItem.clothes).setOrigin(0);
            buttonsItem.head = this.add.image(...womanPosition, buttonsItem.head).setOrigin(0);
            buttonsItem.bag = this.add.image(...womanPosition, buttonsItem.bag).setOrigin(0);
            buttonsItem.accessory = this.add.image(...womanPosition, buttonsItem.accessory).setOrigin(0);
        })
    }

    //----------Buttons----------//
    createButtons(buttons, setupButtonsEvents) {
        let lastButtonPositionX = 0;

        buttons.forEach(buttonsItem => {
            const buttonPosition = [this.positions[0] + lastButtonPositionX, this.positions[1]];
            buttonsItem.buttonGo = this.add.sprite(...buttonPosition, buttonsItem.image).setScale(0); 
            lastButtonPositionX += this.paddingRight;

            setupButtonsEvents(buttonsItem);           
        })
        this.input.on('gameobjectover', this.onButtonsOver, this);
        this.createHand();
    }
    onButtonsOver(pointer, gameObject) {
        if (this.graphicsChoose && this.text) {
            this.graphicsChoose.destroy()
            this.text.destroy();
        }
        this.graphicsBackground.setVisible(false);
        this.createHover(gameObject);

        if (this.graphicsChoose) {
            this.createProgressBar(this.buttons);
        }
    }

    //----------BlockChoose----------//
    creatChooseAppearance() {
        this.graphicsChoose = this.add.graphics();
        this.graphicsChoose.lineStyle(2, 16759875, 1);
        this.graphicsChoose.strokeRoundedRect(70, 10, 474, 42, 16);

        const textTitle = 'Choose your appearance';
        const textStyle = {
            font: '33px NunitoSans',
            fill: '#ffffff'
        };
        this.text = this.add.text(140, 13, textTitle, textStyle).setOrigin(0);  
    }

    //----------ProgressBar----------//
    createProgressBar(buttons) {
            buttons.forEach(buttonsItem => {
                const progressPosition = [this.progressPosition[0], this.progressPosition[1]];
                buttonsItem.progressBar= this.add.image(...progressPosition, buttonsItem.progress).setScale(1);
            })
    }

    //----------Hand----------//
    createHand() {
        this.hand = this.add.image(220, 1020, 'hand'); 
        this.tweens.timeline({
            targets: this.hand,
            ease: 'Power1',
            totalDuration: 2000,
            loop: -1,
            tweens: [{
                y: 820,
                delay: 2000
            },
            {
                x: 500
            },
            {
                x: 220
            },
            {
                y: 1020
            }]
        });
        this.hand.setDepth(1);
    }

    //----------Hover----------//
    createHover(gameObject) {
        this.hover = this.add.image(gameObject.x, gameObject.y, 'hover',).setScale(0.5);

        this.input.on('gameobjectout', () => {
            this.hover.destroy();
        });
    }
}

export default BaseScene;