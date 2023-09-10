
function sort(arr) {
    return arr.sort((a, b) => a - b);
  }

  function reverseSort(arr) {
    return arr.sort((a, b) => b - a);
  }

  function unique(arr) {
    return [...new Set(arr)];
  }

  var app = {
    MIN_FLOOR: 0,
    MAX_FLOOR: 10,
    currentElevatorFloor: 1,
    currentElevatorDirection: 'up', // 'down'
    upQueue: [],
    downQueue: [],

    move: function (personCurrentFloor, personNextFloor) {
      if (personNextFloor > this.MAX_FLOOR || personNextFloor < this.MIN_FLOOR || personCurrentFloor === personNextFloor) return;

      if (personCurrentFloor > personNextFloor) {
        this.downQueue = unique(reverseSort([...this.downQueue, personCurrentFloor, personNextFloor]))
      } else {
        this.upQueue = unique(sort([...this.upQueue, personCurrentFloor, personNextFloor]));
      }
      console.log({ downQueue: this.downQueue, upQueue: this.upQueue })
    },

    doSomething: function (floor) {
      console.log(`Mở cửa tầng ${floor}`);
    },

    render: function () {
      if (this.currentElevatorDirection === 'up') {
        if (this.upQueue[this.upQueue.length - 1] === this.downQueue[0]) delete this.downQueue[0];
        [...this.upQueue, ...this.downQueue].filter(item => !!item).forEach(this.doSomething)
      } else {
        [...this.downQueue, ...this.upQueue].filter(item => !!item).forEach(this.doSomething)
      }
    }
  }

  app.currentElevatorFloor = 8; // vị trí hện tại của thang máy
 app.currentElevatorDirection = 'down';

  app.move(4, 5); 
  app.move(10, 5);
  app.move(1, 5);
  app.move(2, 6);
  app.move(6, 5);

  // 8: 6 > 5 > 1 > 2 > 4 > 5 > 6 > 10

  app.render();
