interface Statistics {
    getRank() : number;
    getName(): string;
    getAssociation(): string;
    getOff(): number;
    getDef(): number;
    getSpi(): number;
  }
  
  class Global implements  Statistics {
    protected rank: number;
    private name: string;
    private association: string;
    private off: number;
    private def: number;
    private spi: number;
  
  
    public constructor( 
      rank: number,  
      name: string, 
      off: number,  
      def: number, 
      spi: number,
      association: string) 
    {
      this.rank = rank;
      this.name = name;
      this.association = association;
      this.off = off;
      this.def = def;
      this.spi = spi;
    }
  
    public getRank() {
      return this.rank;
    }
    public getName() {
      return this.name;
    }
    public getAssociation() {
      return this.association;
    }
    public getOff() {
      return this.off;
    }
    public getDef() {
      return this.def;
    }
    public getSpi() {
      return this.spi;
    }  
    public setAvg(arr : number[]) {
      let divident: number = 0;
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
  
  