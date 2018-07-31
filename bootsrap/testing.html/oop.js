// // // // // // // // for oop

// // // // // // // // function Circle (radius){
// // // // // // // //     this.radius = radius;
// // // // // // // //     let defaultLocation ={x:0, y:0};
// // // // // // // //     this.getDefaultLocation = function(){
// // // // // // // //         return defaultLocation;
// // // // // // // //     };

// // // // // // // //     this.draw= function (){
// // // // // // // //         this.computeOptimumLocation(0.1);
// // // // // // // //         console.log("draw");

// // // // // // // //     };

// // // // // // // //     Object.defineProperty(this, 'defaultLocation', {
// // // // // // // //     get: function(){
// // // // // // // //         return defaultLocation;
// // // // // // // //     },
// // // // // // // //      set: function(value){
// // // // // // // //          if (!value.x || !value.y)
// // // // // // // //          throw new Error("invalid Location");
// // // // // // // //         defaultLocation = value;

// // // // // // // //      }
// // // // // // // //     });

// // // // // // // // }

// // // // // // // // const circle = new Circle(10);
// // // // // // // // circle.defaultLocation;

// // // // // // // bg iggirgruuo

// // // // // // // // for stopwatch
// // // // // // // function StopWatch (){
// // // // // // //     let startTime, endTime, running, duration= 0;
// // // // // // //     this.startTime = function(){
// // // // // // //         if (running)
// // // // // // //         throw new Error("stopwatch running");

// // // // // // //         running= true;
// // // // // // //         startTime = new Date();

// // // // // // //     };

// // // // // // //     this.endTime = function(){
// // // // // // //         if (!running)
// // // // // // //         throw new Error("Stopwatch is not started");

// // // // // // //         endtime= false;
// // // // // // //         endTime= new Date();
// // // // // // //         const seconds = (endTime.getTime() - startTime.getTime())- (1000);
// // // // // // //         duration = duration + seconds;

// // // // // // //     };
// // // // // // //     this.reset = function (){
// // // // // // //         startTime = null;
// // // // // // //         endtime = null;
// // // // // // //         running= false;
// // // // // // //         duration=  0;

// // // // // // //     };

// // // // // // //     Object.defineProperty(this, 'duration', {  // exposure
// // // // // // //            get: function(){
// // // // // // //              return duration;
// // // // // // //            }

// // // // // // //         });

// // // // // // //         const sw = new StopWatch();

// // // // // // // }

// // // // // // // prototypes

// // // // // // // function Person(radius,  circle){
// // // // // // //     this.radius= radius;
// // // // // // //     this.circle = circle;
// // // // // // //     this.draw = function(){
// // // // // // //         console.log("draw");
// // // // // // //     }

// // // // // // // }
// // // // // // // const app = new Person(10,20);
// // // // // // // const ap = new Person(5,10);

// // // // // // // let person={
// // // // // // //     firstname: "mosh",
// // // // // // //     class: 100,
// // // // // // //     state: "oyo",
// // // // // // //     level: 500
// // // // // // // };
// // // // // // // let objectBase =Object.getPrototypeOf(person);
// // // // // // // let descriptor =Object.getOwnPropertyDescriptor(objectBase, "tostring");
// // // // // // // console.log(descriptor);

// // // // // // // shifting similar methods using prototypical inheritance
// // // // // // // we have two function and we are trying to make   circle base inherit from the shape base
// // // // // //  function  Shape(){

// // // // // //  }

// // // // // //  Shape.prototype.duplicate = function(){
// // // // // //      console.log("duplicate")
// // // // // //  }

// // // // // // function Circle (radius){
// // // // // //     this.radius = radius;

// // // // // // }
// // // // // // Circle.prototype= Object.create(Shape.prototype);
// // // // // // Circle.prototype.draw = function (){  // here   circle.drae
// // // // // //     console.log("draw");

// // // // // // }
// // // // // // //Circle.prototype.toString = function(){  // circle.tostring
// // // // // //  //   return "circle with radius " + this.radius;

// // // // // // const c1 = new Circle(10);
// // // // // // const s1 = new Shape();

// // // // // //     //and
// // // // // //     // for (let key in Circle )
// // // // // //     //console.log(key,Circle[key]);

// // // // // // intermediate function inheritance
// // // // // function extend(Child, Parent){
// // // // //     Child.prototype = Object.create(Parent.prototype);
// // // // //     Child.prototype.constructor= Child;
// // // // // }

// // // // // function Shape(color){
// // // // //     this.color = color;

// // // // // }
// // // // // Shape.prototype.duplicate = function(){
// // // // //     console.log("duplicate");

// // // // // }

// // // // // function  Circle (radius, color){
// // // // //     Shape.call(this, color);
// // // // //     this.radius = radius;
// // // // // }

// // // // // extend(Circle, Shape);
// // // // // Circle.prototype.draw = function(){
// // // // //     console.log("draw");
// // // // // }

// // // // // function Square (size,){
// // // // //     this.size = size;
// // // // // }

// // // // // extend(Square, Shape);

// // // // // const c = new Circle(2, 'red');
// // // // // //const s = new Shape("red");

// // // // // polymorphism
// // // // // both  circle and square inheriting from the shape object r

// // // // // function extend(Child, Parent){
// // // // //   Child.prototype = Object.create(Parent.prototype);
// // // // //      Child.prototype.constructor= Child;
// // // // // }

// // // // // function Shape(){

// // // // // }
// // // // // Shape.prototype.duplicate = function(){
// // // // //   console.log("duplicate");
// // // // // }

// // // // // function Circle(){

// // // // // }
// // // // // extend (Circle, Shape);
// // // // // Circle.prototype.duplicate = function(){
// // // // //   console.log("duplicate circle ");
// // // // // }

// // // // // function Square(){

// // // // // }
// // // // // extend (Square, Shape);
// // // // // Square.prototype.duplicate = function(){
// // // // //  console.log("duplicate square");
// // // // // }

// // // // // const Shapes=[

// // // // //     new Circle(),

// // // // //     new Square()
// // // // // ];

// // // // // for (let shape of Shapes)
// // // // // shape.duplicate();

// // // // // const canEat ={
// // // // //     eat: function(){
// // // // //         this.hunger--;
// // // // //         console.log("can eat");
// // // // //     }

// // // // // };

// // // // // const canWalk ={
// // // // //     walk: function (){
// // // // //         this.walk("can walk");
// // // // //     }

// // // // // };

// // // // // const person =Object.assign({}, canEat,canWalk);
// // // // // console.log(person);

// // // // // function extend(Child, Parent){
// // // // //  Child.prototype = Object.create(Parent.prototype);
// // // // //  Child.prototype.constructor= Child;
// // // // // }

// // // // const s = new HtmlElement();
// // // // console.log(s);

// // // // const e = new HtmlElement();
// // // // console.log(e);

// // // // function HtmlSelectedElement (items=[]){

// // // //     this.items = items;
// // // //     this.addItem = function(item){
// // // //         this.items.push(item);
// // // //         console.log("add item");
// // // //     };
// // // //     this.removeItem = function (item){
// // // //         this.item.splice(this.items.indexOf(item), 1);
// // // //         console.log("remove item");
// // // //     };
// // // // }

// // // // HtmlSelectedElement.prototype = Object.create(HtmlElement.prototype);
// // // // HtmlSelectedElement.prototype.constructor= HtmlSelectedElement;

// // // // const p = new HtmlSelectedElement();
// // // // console.log(p);

// // // // pass argument ${}

// // // // function HtmlElement(src){
// // // //     this.src= src;
// // // //     this.render = function(){
// // // //         return `<img src="${this.src}"/>`
// // // //     }
// // // // // }

// // // // function Circle (radius){
// // // //     this.radius= radius;
// // // //     this.draw = function(){
// // // //         console.log("draw");

// // // //     }

// // // // }
// // // // Circle.prototype.now = function(){
// // // //     console.log("checked");
// // // // }
// // // // const a = new Circle(1);
// // // // console.log(a);

// // // 'use strict';
// // // const Circle = function (){
// // //     this.draw = function(){
// // //         console.log(this);

// // //     };
// // //     this.man = function(){
// // //         console.log("draw");
// // //        }
// // // };
// // // const c = new Circle();
// // // c.draw();// calls everything that as this

// // // const _radius = new WeakMap();
// // //  const _move = new WeakMap();

// data abstraction in details

import { Circle } from "./circle.js";

const c = new Circle(1);
c.draw();
// // //class inheritance
// // class Shape {
// //     constructor (color){
// //         this.color = color;
// //     }

// //     move (){
// //         console.log("move");
// //     }
// // }
// // class Circle extends Shape{
// //     constructor(color){
// //         super (color);

// //     }

// //     draw (){
// //         console.log("draw");
// //     }
// // }

// // const c =  new Circle("red");

// // you can also override because the prototype as been changed
// //child to parent

// //super.move(); to call the parent

// //stacking
// const _items = new WeakMap();
// class Stack{
//     constructor(){
//         _items.set(this,[]);

//     }

//     push (obj){
//         _items.get(this).push(obj);

//     }
//     pop (){
//         const items = _items.get(this);

//         if (items.lenght === 0)
//         throw new Error ("stack is empty");
//        return items.pop();
//     }
//     peek (){
//         const items = _items.get(this);
//         if (items.lenght === 0)
//         throw new Error("stack is empty");

//         return items (items.lenght - 1);

//     }

//     get count (){
//         return _items.get(this).lenght
//     }
