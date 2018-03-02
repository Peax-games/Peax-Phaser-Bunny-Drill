export default function bootState() {
    return {
        preload: function () {
            this.game.load.image('preloader', 'img/preloader.png');
        },
        create: function () {
            this.game.physics.startSystem(window.Phaser.Physics.ARCADE);
            this.game.input.maxPointers = 1;
            this.game.state.start('load');
        }
    }
}