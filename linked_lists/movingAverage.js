class MovingAverage {

    constructor(size) {
        this.size = size;
        this.q = [];
        this.slidingWindowSum = 0;
    }

    next(num) {

        if (this.q.length < this.size) {
            this.slidingWindowSum = this.slidingWindowSum + num;
        } else {
            this.slidingWindowSum = this.slidingWindowSum - this.q[0] + num;
            this.q.shift();
        }
        this.q.push(num);

        return this.slidingWindowSum / this.q.length;
    }
}

let ma = new MovingAverage(3);
console.log('ma5', ma.next(5));
console.log('ma2', ma.next(2));
console.log('ma8', ma.next(8));
console.log('ma578', ma.next(10));

