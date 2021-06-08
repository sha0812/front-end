// 输入一个链表，反转链表后，输出新链表的表头

var reverseList = function(head){
  let prev = null;
  let currentNode = head;
  while(currentNode){
    let nextNode = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = nextNode;
  }
  return currentNode;
}