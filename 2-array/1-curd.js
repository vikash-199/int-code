const arr = [1, 2, 3];

arr.push(4);

arr[0] = 10;

console.log(arr);

console.log(arr.includes(4));

console.log(arr.includes(3));

//Traversing Arrays:-Traversing means going through each element.

arr.forEach((ele) => console.log(ele));
