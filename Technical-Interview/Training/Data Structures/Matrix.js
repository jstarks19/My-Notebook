class Matrix {
    constructor(height, width) {
        
        this.matrix = new Array(height);
        this.height = height;
        this.width = width;

        for (let i = 0; i < height; i++) {
            this.matrix[i] = new Array(width).fill(0);
        }
    
    }

    get(row,col) {
        return this.matrix[row][col];
    }

    set(row,col,value) {
        this.matrix[row][col] = value;
    }

    printMatrix() {
        console.log('[');
        for (let i = 0; i < this.height; i++) {
            process.stdout.write('\t[');
            for (let j = 0; j < this.width; j++) {
                process.stdout.write(`${this.matrix[i][j]}\t`);
            }
            console.log(']');
        }    
        console.log(']');
    }

}

let m = new Matrix(3,3);
m.set(0,0,1);
m.set(0,1,2);
m.set(0,2,3);
m.set(1,0,4);
m.set(1,1,5);
m.set(1,2,6);
m.set(2,0,7);
m.set(2,1,8);
m.set(2,2,9);
m.printMatrix();