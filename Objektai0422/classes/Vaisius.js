
class Vaisius {
    constructor() {
        this.dydis = rand(5, 25);
        this.id = rand(1000000, 9999999);
        this.prakastas = false
        
    }
    rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    prakasti() {
        this.prakastas = true
    }
}

class Krepsys extends Vaisius {
    constructor() {
        this.vaisiai = []
    }
    static pripildyti(vaisiai) {
        vaisiai.length = 20

    }
    filterVisius() {
        return this.vaisiai.sort((a, b) => a.dydis - b.dydis)
    }
    isimti(dydis) {
        this.vaisiai.shift(this.dydis)
        return this.vaisiai

    }
}

export {Vaisius, Krepsys}