export default class MathCalc {
    constructor(name) {
        this.name = name;
        this.distance = undefined;
    }

    set attack(value) {
        this._attack = value;
    }

    get attack () {
        let attack = this._attack; 
        attack -= attack * ((this.distance - 1) / 10);

        if (this._stoned) {
            attack = attack - Math.log2(this.distance) * 5;
        }

        return Number(attack.toFixed(3));
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

}