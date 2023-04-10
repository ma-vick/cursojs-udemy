function createCalculator(){
    return {
        // atributes
        display: document.querySelector('.display'),

        // methods
        start(){
            this.clickButtons();
            this.pressEnter();
        },

        btnForDisplay(value){
            this.display.value += value;
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteLast(){
            this.display.value = this.display.value.slice(0, -1);
        },

        performCount(){
            let count = this.display.value;

            try {
                count = eval(count);

                if(!count){
                    alert('conta inválida');
                    return;
                }

                this.display.value = String(count);
            } catch(e){
                alert('conta inválida');
                return;
            }
        },

        pressEnter(){
            this.display.addEventListener('keyup', (event) => {
                if(event.keyCode === 13){
                    this.performCount();
                }
            });
        },

        clickButtons(){
            document.addEventListener('click', (event) => {
                const element = event.target;

                if(element.classList.contains('btn-num')){
                    this.btnForDisplay(element.innerText);
                }

                if(element.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                
                if(element.classList.contains('btn-del')){
                    this.deleteLast();
                }
                
                if(element.classList.contains('btn-eq')){
                    this.performCount();
                }
            });
        }
    };
}

const calculator = createCalculator();
calculator.start();
