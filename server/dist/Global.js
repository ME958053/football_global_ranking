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
}
export default Global;
//# sourceMappingURL=Global.js.map