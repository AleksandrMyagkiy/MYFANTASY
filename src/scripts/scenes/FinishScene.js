import BaseScene from "./BaseScene";

class FinishScene extends BaseScene {
    constructor(config) {
        super('FinishScene', config);
        this.timeout = 1;
        this.womanPosition = [5, 55];
        this.buttons = []  
    }

    create(data) {
        this.createBackground(data.buttonGo.texture.key);
        this.createMan();

        //----------DRESS----------//
        if (data.buttons[3].clothes === 'dress' && data.buttons[3].bag.texture.key === 'brownBag') {
            if (data.buttons[3].accessory.texture.key === 'glasses') {
                this.buttons.push({clothes: 'dress', head: 'joyHead', bag: 'brownBag', accessory: 'glasses'});
            }
            if (data.buttons[3].accessory.texture.key === 'collar') {
                this.buttons.push({clothes: 'dress', head: 'joyHead', bag: 'brownBag', accessory: 'collar'});
            }
            this.createWoman(this.buttons);
        }

        if (data.buttons[3].clothes === 'dress' && data.buttons[3].bag.texture.key === 'blueBag') {
            if (data.buttons[3].accessory.texture.key === 'glasses') {
                this.buttons.push({clothes: 'dress', head: 'joyHead', bag: 'blueBag', accessory: 'glasses'});
            }
            if (data.buttons[3].accessory.texture.key === 'necklace') {
                this.buttons.push({clothes: 'dress', head: 'joyHead', bag: 'blueBag', accessory: 'necklace'});
            }
            this.createWoman(this.buttons);
        }

        //----------SUIT----------//
        if (data.buttons[3].clothes === 'suit' && data.buttons[3].bag.texture.key === 'brownBag') {
            if (data.buttons[3].accessory.texture.key === 'glasses') {
                this.buttons.push({clothes: 'suit', head: 'joyHead', bag: 'brownBag', accessory: 'glasses'});
            }
            if (data.buttons[3].accessory.texture.key === 'collar') {
                this.buttons.push({clothes: 'suit', head: 'joyHead', bag: 'brownBag', accessory: 'collar'});
            }
            this.createWoman(this.buttons);
        }

        if (data.buttons[3].clothes === 'suit' && data.buttons[3].bag.texture.key === 'blueBag') {
            if (data.buttons[3].accessory.texture.key === 'glasses') {
                this.buttons.push({clothes: 'suit', head: 'joyHead', bag: 'blueBag', accessory: 'glasses'});
            }
            if (data.buttons[3].accessory.texture.key === 'necklace') {
                this.buttons.push({clothes: 'suit', head: 'joyHead', bag: 'blueBag', accessory: 'necklace'});
            }
            this.createWoman(this.buttons);
        }
        
        this.createTextBlockPaul();

        if (data.buttons[3].clothes === 'dress') {
            this.text = this.text = this.add.text(200, 480, "You are beautiful!", {  
                font: '30px NinitoSans',
                fill: '#303052'
            }).setOrigin(0).setScale(0);
            this.createText(this.text);
        }
        if (data.buttons[3].clothes === 'suit') {
            this.text = this.add.text(150, 480, "What a weird appearance!", {  
                font: '30px NinitoSans',
                fill: '#303052'
            }).setOrigin(0).setScale(0);
            this.createText(this.text);
        }
        this.creatTimer();
    }

    //----------Man----------//
    createMan() {
        this.man = this.add.image(600, 20, 'man').setOrigin(0).setInteractive();
        this.tweens.timeline({
            targets: this.man,
            ease: 'Power1',
            totalDuration: 500,
            
            tweens: [{
                x: 100
            }]
        });
    }

    //----------TextBlockPaul----------//
    createTextBlockPaul() {
        this.textBlockPaul = this.add.image(70, 395, 'textBlockPaul').setOrigin(0).setScale(0);

        this.tweens.add({
            targets: this.textBlockPaul,
            duration: 350,
            scaleX: 0.5,
            scaleY: 0.5,
            ease: 'Sine.easeInOut',
            repeat: 0,
        });
    }
    createText(text) {
        this.tweens.add({
            targets: this.text,
            duration: 450,
            scaleX: 1,
            scaleY: 1,
            ease: 'Sine.easeInOut',
            repeat: 0,
        });
    }

    //----------END----------//
    createEnd() {
        this.text.destroy();
        this.textBlockPaul.destroy();
        this.createButton();
        this.timer.remove();
    }

    //----------Timer----------//
    onTimerTick() {
        this.createEnd();;
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

    //----------BUTTON----------//
    createButton() {
        this.button = this.add.image(110, 750, 'button').setOrigin(0).setInteractive().setScale(1); 

        if (this.buttons[0].clothes === 'dress') {
            const x = 215;
            const y = 770;
            const text = "Swipe to play!";
            this.createButtonText(x, y, text); 
        }
        if (this.buttons[0].clothes === 'suit') {
            const x = 260;
            const y = 770;
            const text = "Retry!";
            this.createButtonText(x, y, text); 
        }

        this.button.once('pointerdown', this.onIconClickedButton, this);
    }
    createButtonText(x, y, text) {
        this.buttonText = this.add.text(x, y, text, {
            font: '30px NinitoSans',
            fill: '#FFFFFF'
        }).setOrigin(0).setScale(1);
    }
    onIconClickedButton(pointer) {
        this.scene.stop();
        this.scene.start('GameScene');
    }
}

export default FinishScene;