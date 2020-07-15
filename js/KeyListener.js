class KeyListener{
    addInputTextId(inputTextId){
        this.inputText = document.querySelector("#"+inputTextId);
        this.inputText.style.marginLeft = "0px";
        
        this.inputText.addEventListener('keydown', function(event) {
            if(KeyListener.isShiftTabPressed(event)){
                event.preventDefault();
                Css.moveBack(event.target);
            }else if (KeyListener.isTabPressed(event)) {
                event.preventDefault();
                Css.moveForward(event.target);
            }
        });
    }

    static isTabPressed(event){
        return event.keyCode == 9;
    }

    static isShiftTabPressed(event){
        return (event.which === 9 && event.shiftKey); 
    }
}