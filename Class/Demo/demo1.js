//simple declartion
class test {
    constructor(name) {
        this.name = name;

    }
}
const result = new test("Ankit");
console.log(result);
//op:-test { name: 'Ankit' }


class polygon {
    constructor(height, width) {
        this.area = height * width;
    }
} console.log(new polygon(4, 3).area);
//op:-12

//class expression
let rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;

    }
}
console.log(new rectangle(4, 5));

//Static methods

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);


console.log(Point.distance(p1, p2));






