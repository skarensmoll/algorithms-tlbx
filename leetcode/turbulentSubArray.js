const compFunctions = {
    0: (current, next) => current > next,
    1: (current, next) => current < next
}


const TurbulentArray = (array) => {
    
    const greatestChain = {
        max: 0,
        chain: []
    };

    const checkTurbulent = (start) => {
        let temporaryChain = [];
        let pivot = 0;
        let status = start;
        let size = array.length - 1;

        while(pivot <= array.length) {
            const current = array[pivot];
            
            if(pivot == size) {
                if(temporaryChain.length === 0)
                    temporaryChain = [current];
                checkGreatestChain(temporaryChain);
                pivot += 1;
                return;
            }

            const compFunc = compFunctions[status];
            const next = array[pivot + 1];

            if(compFunc(current, next)) {
                temporaryChain.length === 0 ? 
                    temporaryChain = [current, next]:
                    temporaryChain.push(next);

                checkGreatestChain(temporaryChain);
            } else {
                temporaryChain = [];
            }

            pivot += 1;
            status = status === 0 ? 1 : 0;
        }

    }

    const checkGreatestChain = (tempChain) => {
        if(tempChain.length > greatestChain.max) {
            greatestChain.max = tempChain.length;
            greatestChain.chain = tempChain;
        }
    }

    checkTurbulent(1);
    checkTurbulent(0);

    return greatestChain.max;
}

console.log()
