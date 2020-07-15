class Css{
    static moveForward(target){
        Css.move(target, 50, Direction.RIGHT);
    }

    static moveBack(target){
        Css.move(target, -50, Direction.LEFT);
    }

    static move(target, pixels, direction){
        let marginLeft = target.style.marginLeft;
        let newPixels = parseInt(marginLeft) + pixels;

        if(Css.isPossibleToMove(target, newPixels, direction)){
            target.style.marginLeft = newPixels + "px";
        }
    }

    static isPossibleToMove(target, newPixels, direction){
        return true;
    }
}