function Spiral(matrix) {
    this.width = matrix[0].length;
    this.height = matrix.length;
    this.matrix = matrix;

    this.directions = {
        right: {
            findNextItem: (i, j, sides) => {
                j++;
                isNextItem = j < ((this.width - 1) - sides.right);

                if(!isNextItem){
                    sides.top += 1;
                } 
                return [isNextItem, i, j];
            },
            next: 'down'
        },
        left: {
            findNextItem: (i, j, sides) => {
                j--;
                isNextItem = j > sides.left;

                if(!isNextItem){
                    sides.bottom +=1;
                }
                return [isNextItem, i, j];
            },
            next: 'up'
        },
        down: {
            findNextItem: (i, j, sides) => {
                i++;
                isNextItem = i < ((this.height - 1) - sides.bottom);

                if(!isNextItem){
                    sides.right +=1;
                }
                return [isNextItem, i, j];
            },
            next: 'left'
        },
        up: {
            findNextItem: (i, j, sides) => {
                i--;
                isNextItem = i > sides.top;

                if(!isNextItem){
                    sides.left +=1;
                }
                return [isNextItem, i, j];
            },
            next: 'right'
        }
    }


    this.findSpiral = () => {
        let currentItems = 0;
        let numItems = this.width * this.height;
        let sides = { top: 0, right: 0, left: 0, bottom: 0};
        let result = [];
        let status = this.width === 1 ? this.directions.down : this.directions.right;
        let i = 0, j = 0;
        
        while(currentItems < numItems){
            result.push(this.matrix[i][j]);

            const [isNextItem, new_i, new_j] = status.findNextItem(i, j, sides);
            i = new_i;
            j = new_j;
            if(!isNextItem){
                status = this.directions[status.next];
            }
            currentItems +=1;
        }

        console.log(result);
    }
}

const spiral = new Spiral([[1],[5]]) // [1, 2, 3, 4];
spiral.findSpiral();
