class Tabela{
    constructor(dividendo, divisor, quociente, resto, posicao){
        this.dividendo = dividendo;
        this.divisor = divisor;
        this.quociente = quociente;
        this.resto = resto;
        this.posicao = posicao;
    }
/*
    get dividendo(){
        return this.dividendo;
    }
    
    get divisor(){
        return this.divisor;
    }

    get resto(){
        return this.resto;
    }

    get quociente(){
        return this.quociente;
    }

    get posicao(){
        return this.posicao;
    }

    set dividendo(val){
        this.dividendo = val;
    }
    
    set divisor(val){
        this.divisor = val;
    }

    set resto(val){
        this.resto = val;
    }

    set quociente(val){
        this.quociente = val;
    }

     set posicao(val){
        this.posicao = val;
    }
    */
}

class Tabelas{
    constructor(){
        this.tabelas=[];
    }

    newTabelas(dividendo, divisor, quociente, resto, posicao){
        let p = new Tabela(dividendo, divisor, quociente, resto, posicao);
        this.tabelas.push(p);
        return p;
    }

    get allTabelas(){
        return this.tabelas;
    }

    get numberofTabelas(){
        return this.tabelas.length;
    }

    get dimension_width(){
        return 68.84 * (this.tabelas.length)  + 157.47;
    }
}