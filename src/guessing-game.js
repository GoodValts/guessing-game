class GuessingGame {
    constructor() {}
    
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.x = this.min + Math.round((this.max - this.min) / 2);
        return this.x;
    }

    lower() {
        this.max = this.x;
        return this.max;
    }

    greater() {
        this.min = this.x;
        return this.min;
    }
}

module.exports = GuessingGame;
