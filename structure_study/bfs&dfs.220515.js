class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        // FIXME: left, right가 잘못 들어가고 있음. 그래서 BFS 순서도 이상함
        while(true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                } 

                current = current.left;
            } 
            if (!current.right) {
                current.right = newNode;
                return this;
            } 

            current = current.right;   
        }
    }

    find(value) {
        if (!this.root) return undefined;

        let current = this.root;

        while(true) {
            if (value === current.value) {
                return current;
            }

            if (value <  current.value) {
                if (!current.left) return undefined;
                current = current.left;
            } else {
                if (!current.right) return undefined;
                current = current.right;
            }
        }
    }

    isContain(value) {
        if (!this.root) return false;

        let current = this.root;
        let found = false;

        while(current && !found) {
            if (value === current.value) {
                return true;
            } else if (value <  current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    BFS() {
        const queue = [];
        const visited = [];
        let node = null;
    
        queue.push(this.root);
    
        while(queue.length) {
            node = queue.shift();
            visited.push(node);
    
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    
        return visited
    }

    // 전위 탐색
    DFSPreOrder() {
        const visited = [];

        const traverse = (node) => {
            visited.push(node.value);

            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);

        return visited;
    }

    // 후위 탐색 - 얜 어느 상황에서 쓰게 될까?
    DFSPostOrder() {
        const visited = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            
            visited.push(node.value);
        }

        traverse(this.root);
        return visited;
    }

    // 중위 탐색
    DFSPostOrder() {
        const visited = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return visited;
    }
}

// TODO: 
//  1. queue 구현
//  2. visited list 생성
//  3. tree를 순회하면서 queue와 visited에 차곡차곡 쌓는 방식으로 bfs 구현

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder()); // [6, 3, 8, 10, 15, 20] -> 8, 3, 6이 나와야할 것 같은데
