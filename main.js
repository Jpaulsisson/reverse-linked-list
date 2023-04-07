/// this is an object manipulation sequence attempting to show how this code works on the list
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const testObj = {
  prev: 9,
  current: 10,
  next: 10,
  currentNext: null
}

console.log(testObj);
//while current !== null
//LOOP STARTING POINT {prev:null  current:1   next:null  currentNext: 2}
//SECOND LOOP START   {prev: 1, current: 2, next: 2, currentNext: 3}
//THIRD LOOP START    {prev: 2, current: 3, next: 3, currentNext: 4}
testObj.next = testObj.currentNext;
console.log(testObj);
//next = current.next

testObj.currentNext = testObj.prev;
console.log(testObj);
//current.next = prev

testObj.prev = testObj.current;
console.log(testObj);
//prev = current

testObj.current = testObj.next;
console.log(testObj);
//current = next
//   L O O P   O N E   P R O C E S S    S T E P S
//{prev: null, current: 1, next: null, currentNext: 2}
//{prev: null, current: 1, next: 2, currentNext: 2}
//{prev: null, current: 1, next: 2, currentNext: null}
//{prev: 1, current: 1, next: 2, currentNext: null}
//{prev: 1, current: 2, next: 2, currentNext: null}
//currentNext auto-updates on next loop to be 3
//    L O O P   T W 0   P R O C E S S    S T E P S
//{prev: 1, current: 2, next: 2, currentNext: 3}
//{prev: 1, current: 2, next: 3, currentNext: 3}
//{prev: 1, current: 2, next: 3, currentNext: 1}
//{prev: 2, current: 2, next: 3, currentNext: 1}
//{prev: 2, current: 3, next: 3, currentNext: 1}
//currentNext auto-updates on next loop to be 4
// L O O P   T H R E E   P R O C E S S    S T E P S
//{prev: 2, current: 3, next: 3, currentNext: 4}
//{prev: 2, current: 3, next: 4, currentNext: 4}
//{prev: 2, current: 3, next: 4, currentNext: 2}
//{prev: 3, current: 3, next: 4, currentNext: 2}
//{prev: 3, current: 4, next: 4, currentNext: 2}
/////THIS CONTINUES UNTIL CURRENTNEXT AUTO-UPDATES TO NULL
////........///////......../////////......////////
//{prev: 9, current: 10, next: 10, currentNext: null}
//{prev: 9, current: 10, next: null, currentNext: null}
//{prev: 9, current: 10, next: null, currentNext: 9}
//{prev: 10, current: 10, next: null, currentNext: 9}
//{prev: 10, current: null, next: null, currentNext: 9}
/// and now with prev as the finished product we can return it as the answer


var reverseList = function(head) {
    let prev = null;
    let current = head;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
};
