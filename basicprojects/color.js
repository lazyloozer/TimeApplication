let color = document.getElementById("color");
// color.oninput = function () {
//     //console.log(this.value);
//     let val = this.value;
//     console.log(val);
//     document.body.style.backgroundColor = val;
//   };
color.onclick = function () {
  let s = "0123456789abcdef";
  let a = "#";
  for (let i = 0; i < 6; i++) {
    let ran = Math.floor(Math.random() * 16);
    a = a + s[ran];
  }
  document.body.style.backgroundColor = a;
  console.log(a);
};
