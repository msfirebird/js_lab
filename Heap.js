class Heap {    
    constructor(isMax = true) {
        this.heap = [];
        this.isMax = isMax;
    }
    
    size() {
        return this.heap.length;
    }
    
    insert(num) {
        this.heap.push(num);
        let index = this.size() - 1;
        if (index === 0) return;
        
        this.bubbleUp(index);
    }

    bubbleUp(index) {
      let parentIndex = Math.floor((index - 1) / 2);
        
      if (this.isMax) {
        while (this.heap[parentIndex] !== undefined 
          && this.heap[parentIndex] < this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
      } else {
        while (this.heap[parentIndex] !== undefined 
          && this.heap[parentIndex] > this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
      }
      return index;
    }
    
    pop() {
        let parentIndex = 0;
        let lastIndex = this.size() - 1;
        [this.heap[parentIndex], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[parentIndex]];
        let result = this.heap.pop();

        this.bubbleDown(parentIndex);
        
        return result;
    }

    bubbleDown(parentIndex) {
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;

      if (this.isMax) {
        while ((this.heap[leftChildIndex] !== undefined && this.heap[leftChildIndex] > this.heap[parentIndex]) 
          || (this.heap[rightChildIndex] !== undefined && this.heap[rightChildIndex] > this.heap[parentIndex])) {
            let highestChildIndex;
            if (this.heap[leftChildIndex] === undefined || this.heap[rightChildIndex] === undefined) {
                highestChildIndex = leftChildIndex || rightChildIndex;
            } else {
                highestChildIndex = this.heap[leftChildIndex] > this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
            }
            [this.heap[parentIndex], this.heap[highestChildIndex]] = [this.heap[highestChildIndex], this.heap[parentIndex]];
            parentIndex = highestChildIndex;
            leftChildIndex = 2 * parentIndex + 1;
            rightChildIndex = 2 * parentIndex + 2;
        }
      } else {
        while ((this.heap[leftChildIndex] !== undefined && this.heap[leftChildIndex] < this.heap[parentIndex]) 
          || (this.heap[rightChildIndex] !== undefined && this.heap[rightChildIndex] < this.heap[parentIndex])) {
            let highestChildIndex;
            if (this.heap[leftChildIndex] === undefined || this.heap[rightChildIndex] === undefined) {
                highestChildIndex = leftChildIndex || rightChildIndex;
            } else {
                highestChildIndex = this.heap[leftChildIndex] < this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
            }
            [this.heap[parentIndex], this.heap[highestChildIndex]] = [this.heap[highestChildIndex], this.heap[parentIndex]];
            parentIndex = highestChildIndex;
            leftChildIndex = 2 * parentIndex + 1;
            rightChildIndex = 2 * parentIndex + 2;
        }
      }
    }

  peek() {
    return this.heap[0];
  }

  delete(num) {
    let index = 0;
    for (let i = 0; i < this.heap.length; i++) {
      if (this.heap[i] === num) {
        index = i;
      }
    }
    if (index === this.heap.length - 1) {
      return this.heap.pop();
    }
    this.heap[index] = this.heap.pop();
    this.bubbleDown(this.bubbleUp(index));
  }
}
