class SubrectangleQueries {
    constructor(rec) {
        this.rec = [...rec];
    }
    updateSubrectangle(top, left, bot, right, val) {
        for (let i = top; i <= bot; i++) {
            for (let j = left; j <= right; j++) {
                this.rec[i][j] = val;
            }
        }
    }
    getValue(y, x) {
        return this.rec[y][x];
    }
}
