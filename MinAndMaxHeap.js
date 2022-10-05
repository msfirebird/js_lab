 /*
  
  BELOW ARE OUR MIN & MAX HEAP CLASSES
  
  */
  
  class MaxHeap {
    constructor(){
        this.values = [];
    } 
   
    length() {
        return this.values.length;
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){

        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0){

            let parentIndex = Math.floor((index - 1 ) / 2);
            let parent = this.values[parentIndex];

            if(parent >= element) break;

            this.values[index] = parent;
            this.values[parentIndex] = element;

            index = parentIndex;
        }
    }

    remove(){
        let max = this.values[0];
        let end = this.values.pop();

        if (this.values.length > 0){
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown(){
        
        let index = 0;
        const element = this.values[0];
        let length = this.values.length;

        while(true){

            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            let swap = null;
            let leftChild, rightChild;

            if (leftChildIndex < length){
                leftChild = this.values[leftChildIndex];

                if(leftChild > element){
                    swap = leftChildIndex;
                }
            } 

            if (rightChildIndex < length){
                rightChild = this.values[rightChildIndex];

                if(!swap && rightChild > element || swap && rightChild > leftChild){
                    swap = rightChildIndex;
                }
            }

            if (!swap) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;

            index = swap;
        }
    }
}

class MinHeap {
    constructor(){
        this.values = [];
    } 
    
    length() {
        return this.values.length;
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){

        let index = this.values.length - 1;
        const element = this.values[index];


        while( index > 0 ) {
            let parentIndex = Math.floor( (index - 1) / 2);
            let parent = this.values[parentIndex];

            if (parent <= element) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;

            index = parentIndex;
        }
    }

    remove(){
        let min = this.values[0];
        let end = this.values.pop();

        if (this.values.length > 0){
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown(){
        
        let index = 0;
        const element = this.values[0];
        let length = this.values.length;

        while(true){

            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            let swap = null;
            let leftChild, rightChild;

            if (leftChildIndex < length){
                leftChild = this.values[leftChildIndex];

                if(leftChild < element){
                    swap = leftChildIndex;
                }
            } 

            if (rightChildIndex < length){
                rightChild = this.values[rightChildIndex];

                if(!swap && rightChild < element || swap && rightChild < leftChild){
                    swap = rightChildIndex;
                }
            }

            if (!swap) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;

            index = swap;
        }
    }
}
  
