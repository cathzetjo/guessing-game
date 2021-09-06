class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.play = Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.play;
    }

    greater() {
        this.min = this.play;
    }
}

module.exports = GuessingGame;
