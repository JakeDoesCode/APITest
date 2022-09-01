function doubleafter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
  const a = await doubleafter2Seconds(10);
  const b = await doubleafter2Seconds(20);
  const c = await doubleafter2Seconds(30);
  return x + a + b + c;
}

addAsync(10).then((sum) => {
  console.log(sum);
});
