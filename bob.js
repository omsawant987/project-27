class Bob{
    constructor(){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.ellipse(x,y,radius,options);
        
    }
};