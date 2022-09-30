class Circle {
	constructor(r){
		this.radius = r;
		}
	getArea(){
		return Math.PI*Math.pow(this.radius, 2)
	}
	getPerimeter(){
		return 2*Math.PI*this.radius
	}
}



let circle = new Circle(3.32);
console.log(circle.getArea());
console.log(circle.getPerimeter());
