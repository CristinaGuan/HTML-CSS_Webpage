function Cell(row,col,img){
	this.row=row;
	this.col=col;
	this.img=img;
	if(!Cell.prototype.drop){
		Cell.prototype.drop=function(){
			this.row++;
		}
	}
	if(!Cell.prototype.moveR){
		Cell.prototype.moveR=function(){
			this.col++;
		}
	}
	if(!Cell.prototype.moveL){
		Cell.prototype.moveL=function(){
			this.col--;
		}
	}
}
function Shape(img){
	this.img=img;
	if(!Shape.prototype.drop){
		Shape.prototype.drop=function(){
			//遍历当前对象的cells中的每个cell对象
			for(var i=0;i<this.cells.length;i++){
			//    调用当前cell对象的drop方法
				this.cells[i].drop();
			}
		}
	}
	if(!Shape.prototype.moveR){
		Shape.prototype.moveR=function(){
			//遍历当前对象的cells中的每个cell对象
			for(var i=0;i<this.cells.length;i++){
			//    调用当前cell对象的drop方法
				this.cells[i].moveR();
			}
		}
	}
	if(!Shape.prototype.moveL){
		Shape.prototype.moveL=function(){
			//遍历当前对象的cells中的每个cell对象
			for(var i=0;i<this.cells.length;i++){
			//    调用当前cell对象的drop方法
				this.cells[i].moveL();
			}
		}
	}
}
function O(){
	Shape.call(this,"img/O.png");
	if(!Shape.prototype.isPrototypeOf(O.prototype)){
Object.setPrototypeOf(O.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,4,this.img),new Cell(0,5,this.img),
		new Cell(1,4,this.img),new Cell(1,5,this.img)
	];
}
function T(){
	Shape.call(this,"img/T.png");
	if(!Shape.prototype.isPrototypeOf(T.prototype)){
Object.setPrototypeOf(T.prototype,Shape.prototype);
	}
	this.cells=[
new Cell(0,3,this.img),new Cell(0,4,this.img),new Cell(0,5,this.img),
					   new Cell(1,4,this.img)
	];
}
function I(){//03 04 05 06
	Shape.call(this,"img/I.png");
	if(!Shape.prototype.isPrototypeOf(I.prototype)){
Object.setPrototypeOf(I.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,3,this.img),
		new Cell(0,4,this.img),
		new Cell(0,5,this.img),
		new Cell(0,6,this.img)
	];
}
function S(){//04 05 13 14
	Shape.call(this,"img/S.png");
	if(!Shape.prototype.isPrototypeOf(S.prototype)){
Object.setPrototypeOf(S.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,4,this.img),
		new Cell(0,5,this.img),
		new Cell(1,3,this.img),
		new Cell(1,4,this.img)
	];
}
function Z(){//03 04 14 15
	Shape.call(this,"img/Z.png");
	if(!Shape.prototype.isPrototypeOf(Z.prototype)){
Object.setPrototypeOf(Z.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,3,this.img),
		new Cell(0,4,this.img),
		new Cell(1,4,this.img),
		new Cell(1,5,this.img)
	];
}
function L(){//03 04 05 13
	Shape.call(this,"img/L.png");
	if(!Shape.prototype.isPrototypeOf(L.prototype)){
Object.setPrototypeOf(L.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,3,this.img),
		new Cell(0,4,this.img),
		new Cell(0,5,this.img),
		new Cell(1,3,this.img)
	];
}
function J(){//03 04 05 15
	Shape.call(this,"img/J.png");
	if(!Shape.prototype.isPrototypeOf(J.prototype)){
Object.setPrototypeOf(J.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,3,this.img),
		new Cell(0,4,this.img),
		new Cell(0,5,this.img),
		new Cell(1,5,this.img)
	];
}
