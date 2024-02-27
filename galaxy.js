
const one =  "dddd";
const two = new Promise ((resolve)=>{
return resolve(2)
})

Promise.all(one, two).then((bb)=>console.log(bb))
