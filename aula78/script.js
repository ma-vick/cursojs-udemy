// SuperClass

function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        this.verSaldo();
        console.log('você não tem saldo suficiente.');
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | saldo: R$${this.saldo.toFixed(2)}`);
};

// const conta1 = new Conta(11, 22, 10);
// conta1.depositar(20);
// conta1.depositar(15);
// conta1.sacar(100);
// console.log(conta1);

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        this.verSaldo();
        console.log('você não tem saldo suficiente.');
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
};

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(90);

console.log();

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);