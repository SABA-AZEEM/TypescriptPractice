// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number; z?:string }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    console.log("The coordinate's z value is " + pt.z); //undefine
  }
  printCoord({ x: 3, y: 7 });