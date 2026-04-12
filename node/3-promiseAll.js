/*
🔹 Run Multiple APIs in Parallel → Promise.all

👉 When you have multiple API calls, you should run them in parallel (at the same time) instead of one by one.

*/
//❌ Wrong Way (Sequential → Slow)
const res1 = await fetch('/api/user');
const data1 = await res1.json();

const res2 = await fetch('/api/posts');
const data2 = await res2.json();

const res3 = await fetch('/api/comments');
const data3 = await res3.json();

//correct way (Parallel fast)

const [res6, res4, res5] = await Promise.all([
  fetch('/api/user'),
  fetch('/api/posts'),
  fetch('/api/comments'),
]);

const data6 = await res6.json();
const data4 = await res4.json();
const data5 = await res5.json();

//better way
const [user, posts, comments] = await Promise.all([
  fetch('/api/user').then((res) => res.json()),
  fetch('/api/posts').then((res) => res.json()),
  fetch('/api/comments').then((res) => res.json()),
]);

console.log(user, posts, comments);
