const myPromise = new Promise((resolve, reject) => {
  let result = true;

  if (result) {
    resolve('Success');
  } else {
    reject('Error');
  }
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
