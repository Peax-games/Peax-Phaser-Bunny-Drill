export default function laodState() {
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.NO_SCALE;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;

            this.loadbar = this.add.sprite(60, 0, 'preloader');
            this.loadbar.anchor.setTo(0, 0.5);
            this.loadbar.y = this.game.height / 2;
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.load.setPreloadSprite(this.loadbar);

            this.load.atlas('images', 'assets/atlas.png', 'assets/atlas.json');
            this.load.audio('atlas', ['assets/atlas.ogg', 'assets/atlas.mp3'], true);

        },
        create: function () {
            this.loadbar.cropEnabled = false;
        },
        update: function () {
            if (!!this.ready && !this.waiting) {
                // A time delay is necessary to get the google webfonts to work.
                // This is a known issue with Phaser.
                this.game.time.events.add(1000, function () { this.game.state.start('menu'); }, this);
                this.game.add.tween(this.loadbar).to({ alpha: 0 }, 1000, Phaser.Easing.Quadratic.InOut, true);
                this.waiting = true;
            }
        },
        onLoadComplete: function () {
            this.ready = true;
        }
    }
}