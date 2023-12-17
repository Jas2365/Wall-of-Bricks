function k(value) {
  let center = [8, 9, 10, 11, 14, 15, 16, 17, 20, 21, 22, 23];
  if (value < 30) {
    for (let i = 0; i < center.length; i++) {
      if (value == center[i]) {
        console.log("kk");
      }
    }
  }
}
k(236);
