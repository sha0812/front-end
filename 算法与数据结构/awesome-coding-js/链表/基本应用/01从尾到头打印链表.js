// 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList

function ListNode(x){
  this.val = x;
  this.next = null;
}

// 使用头部插入即可
function printListFromTialToHead(head){
  const array = [];
  while(head){
    array.unshift(head.val);
    head = head.next;
  }
  return array;
}