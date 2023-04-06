/*
This algo takes two singly linked list as arguments. Each lists contains nodes containing a digit. 
Need to reverse the order of those digits then add the two numbers you get and then return the sum in the reverse order
example: {
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
}
*/
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class ListNode {
    constructor() {
        this.head = null;
    }
    addFirst(data) {
        const node = new Node(data, this.head);
        this.head = node;
    }
}

const listToArr = (list) => {
    let outPut = [];
    let current = list;
    while (current !== null) {
        outPut.push(current.val);
        current = current.next;
    }
    return outPut;
};
const arrToString = (array) => {
    return array.reverse().join("");
};

var addTwoNumbers = function (l1, l2) {
    const sum =
        BigInt(arrToString(listToArr(l1))) + BigInt(arrToString(listToArr(l2)));
    const sumArr = sum.toString().split("");

    const answer = new ListNode();
    for (let i = 0; i < sumArr.length; i++) {
        answer.addFirst(sumArr[i]);
    }
    return answer.head;
};
