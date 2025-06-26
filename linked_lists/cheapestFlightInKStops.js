function findCheapestPrice(n, flights, src, dst, k) {

    //create prices array 
    //init all items to Infinity

    let prices = new Array(n).fill(Infinity);

    //assign price of source = 0 
    prices[src] = 0

    //loop over k+1 times
    for (let i = 0; i < k + 1; i++) {

        let tempPrices = [...prices];

        for( let item of flights){
            let [source,destination,price] = item;

            if(prices[source] === Infinity) continue;

            if(prices[source] + price < tempPrices[destination]){
                tempPrices[destination] = prices[source] + price;
            }
        }
        prices = tempPrices;
    }

    return prices[dst] !== Infinity ? prices[dst] : -1
}