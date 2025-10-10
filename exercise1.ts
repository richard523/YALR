let a = 1 + 2;
let b = a + "4" + 5;
let c = {
    apple: a,
    banana: b
}
let d = c.apple * 4;
let e = { ...c, cherry: d };



console.log(d);