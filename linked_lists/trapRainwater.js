function trap(height) {

    let n = height.length;
    let l = 0;
    let r = n - 1;
    let maxLeft = height[l];
    let maxRight = height[r];
    let res = 0;
    while (l < r){
        if(maxLeft < maxRight){
            l++
            maxLeft = Math.max(maxLeft, height[l]);
            res = res +((maxLeft) - height[l]);
        }else{
            r--
            maxRight = Math.max(maxRight,height[r]);
            res = res +((maxRight) - height[r]);
        }
    }
return res;

}
trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1])


//Output: 9
