class Node {
    constructor(char) {
        this.char = char;
        this.next = new Map(); // Map<string, Node>
    }
}

const WordDictionary = function () {
    this.root = new Node('^');
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let layer = this.root.next;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if (!layer.has(char)) layer.set(char, new Node(char));

        layer = layer.get(char).next;
    }

    layer.set(';', 1) // why set $ ?
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    // BFS way

    const queue = [this.root.next]; // Array<Map<string, Node>>

    for (let i = 0; i < word.length; i++) {
        queue.push(null);

        const char = word[i];
        let head;

        while (head = queue.shift()) {
            if (char === '.') {
                for (let [key, node] of head) {
                    if (key !== ';') queue.push(node.next); // $ means the end of trie
                }
            } else {
                if (head.has(char)) queue.push(head.get(char).next);
            }
        }

        if (!queue.length) break;
    }

    if (queue.length) {
        for (let nextMap of queue) {
            if (nextMap.has(';')) return true;
        }
    }

    return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */