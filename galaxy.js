
const one =  "dddd";
const two = new Promise ((resolve)=>{
return resolve(2)
})

Promise.all(one, two).then((bb)=>console.log(bb))
console.log(two);
const twOne =  "eeed";
const two = new Promise ((resolve)=>{
return resolve(2)
});
