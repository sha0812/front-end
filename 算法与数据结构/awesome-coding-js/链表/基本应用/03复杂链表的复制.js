// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。

// 1. 复制
// 2. random赋值
// 3. 拆分链表

function Clone(pHead){
  if(pHead === null){
    return null;
  }
  cloneNodes(pHead);
  cloneRandom(pHead);
  return reconnetNodes(pHead);
}

function cloneNodes(pHead){
  var current = pHead;
  while(current){
    // 1. 新建一个节点
    var cloneNode = {
      val: current.val,
      next: current.next
    };
    // current的next是新建的节点
    current.next = cloneNode;
    // current移动到下一个节点
    current = cloneNode.next;
  }
}

function cloneRandom(pHead){
  var current = pHead;
  while(current){
    var cloneNode = current.next;
    if(current.random){
      cloneNode.random = current.random.next;
    } else {
      cloneNode.random = null;
    }
    current = cloneNode.next;
  } 
}

function reconnetNodes(pHead){
  var cloneHead = pHead.next;
  var cloneNode = pHead.next;
  var current = pHead;
  while(current){
    current.next = cloneNode.next;
    current = cloneNode.next;
    if(current){
      cloneNode.next = current.next;
      cloneNode = current.next;
    } else {
      cloneNode.next = null;
    }
  }
  return cloneHead;
}