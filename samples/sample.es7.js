var string = 'STRING';
let number = 534;
const object = {};
function bar() {
	// YO!
};

Object.defineProperty(object, 'property1', {
  value: 42,
  writable: false
});

object.property1 = 77;
console.log(object.property1);
