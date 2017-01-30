var a;

class Base {
	width:number = 0;
	length:number = 0;
	constructor() {

	}
}

class Rectangle extends Base {
	constructor(public width:number, public length: number) {
		super();
	}

	calcSize():number {
		return this.width * this.length;
	}
}
let rectangle = new Rectangle(5,2);
console.log(rectangle.calcSize());