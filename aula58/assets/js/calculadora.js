function Calculator(){
    this.display = document.querySelector('.display');

    this.start = () => {
        this.clickButtons();
        this.pressEnter();
    };

    this.btnForDisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    }

    this.clearDisplay = () => {
        this.display.value = '';
        this.display.focus();
    }

    this.deleteLast = () => this.display.value = this.display.value.slice(0, -1);

    this.performCount = () => {
        try {
            const count = eval(this.display.value);

            if(!count){
                alert('conta inválida');
                return;
            }

            this.display.value = count;
        } catch(e){
            alert('conta inválida');
            return;
        }
    };

    this.pressEnter = () => {
        document.addEventListener('keyup', (event) => {
            if(event.keyCode === 13){
                this.performCount();
            }
        });
    };

    this.clickButtons = function(){
        document.addEventListener('click', (event) => {
            const element = event.target;

            if(element.classList.contains('btn-num')) this.btnForDisplay(element);

            if(element.classList.contains('btn-clear')) this.clearDisplay();
            
            if(element.classList.contains('btn-del')) this.deleteLast();
            
            if(element.classList.contains('btn-eq')) this.performCount();
        });
    };
}

const calculator = new Calculator();
calculator.start();