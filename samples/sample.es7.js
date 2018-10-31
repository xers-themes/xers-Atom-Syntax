var string = 'STRING';
let number = 534;
const object = {};
function bar() {
	// YO!
};

string.substr(1, 5);
Number.isNaN(number);
bar();
Object.defineProperty(object, 'property1', {
  value: 42,
  writable: false
});

object.property1 = 77;
console.log(object.property1);
