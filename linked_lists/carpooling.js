function carpooling(trips, capacity) {

    //sort the trips
    trips.sort((a, b) => a[1] - b[1]);

    let currPass = 0;
    let min_heap = new PriorityQueue((a, b) => a[2] - b[2]);
    min_heap.enqueue(trips[0]);


    for (let trip of trips) {
        let [passengers, start, end] = trip;

        while (!min_heap.isEmpty() && min_heap.front()[2] <= start) {
            let removedTrip = min_heap.dequeue();
            currPass = currPass - removedTrip[0];
        }

        //pick up new Passengers

        currPass = currPass + passengers;

        min_heap.enqueue(trip);
        if (currPass > capacity) {
            return false
        }
    }
    return true
}


function carpoolingOofN(trips, capacity) {

    let passChanges = new Array(1001).fill(0);

    for (let trip of trips) {
        let startPoint = trip[1]; let endPoint = trip[2];
        passChanges[startPoint] += trip[0];
        passChanges[endPoint] -= trip[0];
    }

    let totalPass = 0 
    for (let i = 0; i < 1001; i++) {
        totalPass += passChanges[i];
        if(totalPass > capacity){
            return false
        }
    }
    return true

}