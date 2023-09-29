class Global {
    rank;
    name;
    association;
    off;
    def;
    spi;
    constructor(rank, name, off, def, spi, association) {
        this.rank = rank;
        this.name = name;
        this.association = association;
        this.off = off;
        this.def = def;
        this.spi = spi;
    }
    getRank() {
        return this.rank;
    }
    getName() {
        return this.name;
    }
    getAssociation() {
        return this.association;
    }
    getOff() {
        return this.off;
    }
    getDef() {
        return this.def;
    }
    getSpi() {
        return this.spi;
    }
    setAvg(arr) {
        let divident = 0;
        for (const i in arr) {
            divident += arr[i];
        }
        const divisor = arr.length;
        const quotient = divident / divisor;
        // const remainder = divident % divisor; use Later I guess
        return quotient.toFixed(2);
    }
}
export default Global;
//# sourceMappingURL=Global.js.map