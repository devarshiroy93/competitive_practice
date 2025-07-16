class InMemoryDb {
    constructor() {
        this.map = new Map();          // key → value
        this.countMap = new Map();     // value → frequency
        this.transactions = [];        // stack of { map, countMap } snapshots
    }

    // Stage 1: Basic set/get
    set(key, value) {
        const prev = this.map.get(key);
        if (this.inTransaction()) {
            this.snapshotIfNeeded(key);
        }

        if (prev !== undefined) {
            this._decrementCount(prev);
        }
        this.map.set(key, value);
        this._incrementCount(value);
    }

    get(key) {
        return this.map.has(key) ? this.map.get(key) : null;
    }

    // Stage 2: delete
    delete(key) {
        if (!this.map.has(key)) return;
        if (this.inTransaction()) {
            this.snapshotIfNeeded(key);
        }

        const oldVal = this.map.get(key);
        this._decrementCount(oldVal);
        this.map.delete(key);
    }

    // Stage 3: count
    count(value) {
        return this.countMap.get(value) || 0;
    }

    // Stage 4: Transactions

    begin() {
        // Push new layer of key/value snapshots
        this.transactions.push({
            mapSnapshot: new Map(),
            countSnapshot: new Map()
        });
    }

    rollback() {
        if (!this.inTransaction()) return false;

        const { mapSnapshot, countSnapshot } = this.transactions.pop();

        for (let [key, value] of mapSnapshot.entries()) {
            const current = this.map.get(key);
            if (current !== undefined) {
                this._decrementCount(current);
            }
            if (value === undefined) {
                this.map.delete(key);
            } else {
                this.map.set(key, value);
                this._incrementCount(value);
            }
        }

        for (let [value, freq] of countSnapshot.entries()) {
            this.countMap.set(value, freq);
        }

        return true;
    }

    commit() {
        if (!this.inTransaction()) return false;

        // Collapse all transactions
        this.transactions = [];
        return true;
    }

    // --- Helper Functions ---

    _incrementCount(value) {
        this.countMap.set(value, (this.countMap.get(value) || 0) + 1);
    }

    _decrementCount(value) {
        const curr = this.countMap.get(value);
        if (!curr) return;
        if (curr === 1) this.countMap.delete(value);
        else this.countMap.set(value, curr - 1);
    }

    inTransaction() {
        return this.transactions.length > 0;
    }

    snapshotIfNeeded(key) {
        const txn = this.transactions[this.transactions.length - 1];
        if (!txn.mapSnapshot.has(key)) {
            txn.mapSnapshot.set(key, this.map.has(key) ? this.map.get(key) : undefined);
        }
        // Snapshot countMap once per transaction
        if (txn.countSnapshot.size === 0) {
            for (let [val, count] of this.countMap.entries()) {
                txn.countSnapshot.set(val, count);
            }
        }
    }
}
