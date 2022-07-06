import BaseScene from "./BaseScene";

class AccessoryScene extends BaseScene {
    constructor(config) {
        super('AccessoryScene', config);

        this.buttons = [
            {scene: 'MakeupScene', image: 'glassesIcon'},
            {scene: 'MakeupScene', image: 'collarIcon'},
            {progress: 'progressBar2'}
        ]
    }

    create(data) {
        super.create();
        this.createProgressBar(this.buttons);
        this.graphicsBackground.setVisible(false);

        if (data.buttons[3].clothes === 'dress') {
            if (data.buttonGo.texture.key === 'brownBagIcon') {
                this.buttons.push({clothes: 'dress', head: 'sadlyHead', bag: 'brownBag'});
                this.createWoman(this.buttons);
            }else {
                this.buttons.push({clothes: 'dress', head: 'sadlyHead', bag: 'blueBag'});
                this.buttons[1].image = 'necklaceIcon';
                this.createWoman(this.buttons);
            }
        }

        if (data.buttons[3].clothes === 'suit') {
            if (data.buttonGo.texture.key === 'brownBagIcon') {
                this.buttons.push({clothes: 'suit', head: 'sadlyHead', bag: 'brownBag'});
                this.createWoman(this.buttons);
            }else {
                this.buttons.push({clothes: 'suit', head: 'sadlyHead', bag: 'blueBag'});
                this.buttons[1].image = 'necklaceIcon';
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

export default AccessoryScene;