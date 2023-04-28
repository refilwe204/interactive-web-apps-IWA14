// script.js

function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function internal() {
    const added = this.add(this.internal.a, this.internal.b);
    const multiplied = this.multiply(added, this.internal.c);
    console.log(multiplied);
  }

  // Not allowed to change below this
  
  const example1 = {
    internal: {
      a: 2,
      b: 4,
      c: 8,
    },
    add,
    multiply,
    calculate: internal //(2+4)* 8 = 48
  };
  
  const example2 = {
    internal: {
      a: 2,
      b: 2,
      c: 3,
    },
    add,
    multiply,
    calculate: internal //(2+2)*3 = 12
  };
  
  example1.calculate();
  example2.calculate();
  