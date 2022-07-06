import BaseScene from "./BaseScene";

class MakeupScene extends BaseScene {
    constructor(config) {
        super('MakeupScene', config);

        this.buttons = [
            {scene: 'FinishScene', image: 'partyIcon'},
            {scene: 'FinishScene', image: 'clubIcon'},
            {progress: 'progressBar3'}
        ]
    }

    create(data) {
        super.create();
        this.createProgressBar(this.buttons);
        this.graphicsBackground.setVisible(false);
      
        if (data.buttons[3].clothes === 'dress' && data.buttons[3].bag.texture.key === 'brownBag') {
            if (data.buttonGo.texture.key === 'glassesIcon') {
                this.buttons.push({clothes: 'dress', head: 'joyHead', bag: 'brownBag', accessory: 'glasses'});
                this.createWoman(this.buttons);
            }
            if (data.buttonGo.texture.key === 'collarIcon') {
                this.buttons.push({clothes: 'dress', head: 'joyHead', bag: 'brownBag', accessory: 'collar'});
                this.createWoman(this.buttons);
            }
        } else if (data.buttons[3].clothes === 'dress' && data.buttons[3].bag.texture.key === 'blueBag') {
            if (data.buttonGo.texture.key === 'glassesIcon') {
                this.buttons.push({clothes: 'dress', head: 'joyHead', bag: 'blueBag', accessory: 'glasses'});
                this.createWoman(this.buttons);
            }
            if (data.buttonGo.texture.key === 'necklaceIcon') {
                this.buttons.push({clothes: 'dress', head: 'joyHead', bag: 'blueBag', accessory: 'necklace'});
                this.createWoman(this.buttons);
            }
        }
        
        if (data.buttons[3].clothes === 'suit' && data.buttons[3].bag.texture.key === 'brownBag') {
            if (data.buttonGo.texture.key === 'glassesIcon') {
                this.buttons.push({clothes: 'suit', head: 'joyHead', bag: 'brownBag', accessory: 'glasses'});
                this.createWoman(this.buttons);
            }
            if (data.buttonGo.texture.key === 'collarIcon') {
                this.buttons.push({clothes: 'suit', head: 'joyHead', bag: 'brownBag', accessory: 'collar'});
                this.createWoman(this.buttons);
            }
        } else if (data.buttons[3].clothes === 'suit' && data.buttons[3].bag.texture.key === 'blueBag') {
            if (data.buttonGo.texture.key === 'glassesIcon') {
                this.buttons.push({clothes: 'suit', head: 'joyHead', bag: 'blueBag', accessory: 'glasses'});
                this.createWoman(this.buttons);
            }
            if (data.buttonGo.texture.key === 'necklaceIcon') {
                this.buttons.push({clothes: 'suit', head: 'joyHead', bag: 'blueBag', accessory: 'necklace'});
                this.createWoman(this.buttons);
            }
        }
        this.createButtons(this.buttons, this.setupButtonsEvents.bind(this));
    }

    //---------- Buttons ----------//
    setupButtonsEvents(buttonsItem) {
        const buttonGo = buttonsItem.buttonGo;
        buttonGo.setInteractive();

            this.tweens.add({
                targets: buttonGo,
                duration: 450,
                scaleX: 1,
                scaleY: 1,
                ease: 'Sine.easeInOut',
                repeat: 0
            });

        buttonGo.on('pointerup', (pointer, gameObject) => {
            buttonsItem.scene && this.scene.start(buttonsItem.scene, {
                buttonGo,
                buttons: this.buttons
            });
        })
    }
}

export default MakeupScene;