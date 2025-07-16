function exclusiveTime(n, logs) {

    let res = new Array(n).fill(0);
    let prev = 0;
    let stack = [];

    for (let log of logs) {
        let [id, type, time] = log.split(":");
        id = Number(id);
        time = Number(time);
        if (type == "start") {
            if (stack.length > 0) {
                let lastLog = stack[stack.length - 1];
                res[lastLog.id] = res[lastLog.id] + time - prev;
            }
            prev = time
            stack.push({ id, startTime: time });
        } else {
            let currLogEndTime = time;
            let currLogStartTime = stack.pop().startTime;
            let currLogDuration = currLogEndTime + 1 - currLogStartTime;
            res[id] = res[id] + currLogDuration;
            prev = currLogEndTime + 1;
        }
    }
    return res;

}