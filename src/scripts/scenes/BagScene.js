import BaseScene from "./BaseScene";

class BagScene extends BaseScene {
    constructor(config) {
        super('BagScene', config);

        this.buttons = [
            {scene: 'AccessoryScene', image: 'brownBagIcon'},
            {scene: 'AccessoryScene', image: 'blueBagIcon'},
            {progress: 'progressBar1'}
        ]
    }

    create(data) {
        super.create();
        this.createProgressBar(this.buttons);
        this.graphicsBackground.setVisible(false);
        if (data.buttonGo.texture.key === 'dressIcon') {
            this.buttons.push({clothes: 'dress', head: 'joyHead'});
            this.createWoman(this.buttons);
        } else {
            this.buttons.push({clothes: 'suit', head: 'joyHead'});
            this.createWoman(this.buttons);
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

export default BagScene;
