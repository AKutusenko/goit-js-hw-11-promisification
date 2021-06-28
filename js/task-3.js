const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve("OK");
    }
    reject("NotGood");
  }, 2000);
});

promise
  .then(
    (result) => {
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  )
  .finally(() => {
    console.log("FINAL");
  });
