// 705.484.450-52   070.987.720-03

/*
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0   =   237

11 - (237 % 11) = 5 (primeiro dígito)
se o dígito for maior que 9 é considerado 0.

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10  =   284

11 - (284 % 11) = 2 (primeiro dígito)
se o dígito for maior que 9 é considerado 0.
*/


function ValidateCPF(sentCPF){
    Object.defineProperty(this, 'cleanCPF', {
        enumerable: true,

        get: function(){
            return sentCPF.replace(/\D+/g, '');
        }
    });
}

ValidateCPF.prototype.validate = function(){
    if(typeof this.cleanCPF === 'undefined') return false;
    if(this.cleanCPF.length !== 11) return false;

    const cpfPartial = this.cleanCPF.slice(0, -2);
    const digit1 = this.createDigit(cpfPartial);
    const digit2 = this.createDigit(cpfPartial + digit1);

    console.log(digit1, digit2);

    return true;
};

ValidateCPF.prototype.createDigit = function(cpfPartial){
    const cpfArray = Array.from(cpfPartial);
    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, value) => {
        ac += (regressive * Number(value));
        regressive--;
        return ac;
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? 0 : digit;
};

const cpf = new ValidateCPF('705.484.450-52');
console.log(cpf.validate());