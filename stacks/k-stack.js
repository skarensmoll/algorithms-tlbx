function KStack() {
    this.stack = [];
    this.stackEndPoint = [];
}

// Removes the latest item from the stack
KStack.prototype.pop = function (nstack) {
    if(this.stackEndPoint[nstack] === undefined) {
        return;
    }

    let { end } = this.stackEndPoint[nstack];
    const firstPart = this.stack.slice(0, end);
    const secondPart = this.stack.slice(end + 1);

    this.stack = firstPart.concat(secondPart);

    console.log('----------', this.stackEndPoint[nstack]);

    this.stackEndPoint = this.stackEndPoint.map((info)=> {
        if(info === undefined) {
            return;
        }
        if(info.end > end) {
            let newInfo = { start: info.start - 1, end: info.end - 1 };
            return newInfo;
        }

        if(info.end == end) {
            let newInfo = { start: info.start, end: info.end - 1 };
            if(newInfo.start > newInfo.end) return undefined;
            else return newInfo;
        }
        return info;
    });

}

// Inserts item into the stack
KStack.prototype.push = function (value, nstack) {

    // there's no items in our stack
    if(this.stackEndPoint[nstack] === undefined) {
        this.stack.push(value);
        this.stackEndPoint[nstack] = { 
            start: this.stack.length - 1,  
            end: this.stack.length - 1 } ;
        return;
    }

   
    let { end } = this.stackEndPoint[nstack];
    const firstPart = this.stack.slice(0, end + 1);
    const secondPart = this.stack.slice(end + 1);

    this.stack = firstPart.concat(value, secondPart);

    this.stackEndPoint = this.stackEndPoint.map((info) => {
        if(info.end > end) { 
            return { start: info.start + 1, 
                        end: info.end + 1 };
        }
        if(info.end == end) {
            return { start: info.start , 
                end: info.end + 1 };
        }
        return info;
    });
}


const kstack = new KStack();

kstack.push('Karen', 6);
kstack.push('Jose', 10); /// [ 'Karen' , 'Jose' ]   -  6, 10  [ 0, 1]
kstack.push('Elis', 2);  //  [ 'Karen' , 'Jose', 'Elis' ] - 2, 6, 10 [ 2, 0, 1 ]
kstack.push('Karen2', 6);  //  [ 'Karen' , 'Karen2' , 'Jose', 'Elis' ] - 2, 6, 10 [ 3, 1, 2 ]
kstack.push('Jose2', 10); //  [ 'Karen' , 'Karen2' , 'Jose', 'Jose2', 'Elis' ] 
kstack.push('Elis2', 2);
kstack.push('Julia', 3);
kstack.push('Elis3', 2);
console.log(kstack.stack);
console.log(kstack.stackEndPoint);
kstack.pop(2);
kstack.pop(2);
kstack.pop(2);
kstack.pop(2);
kstack.pop(3);
kstack.pop(6);
kstack.pop(6);
kstack.pop(10);
kstack.pop(10);
console.log(kstack.stack);
console.log(kstack.stackEndPoint);
