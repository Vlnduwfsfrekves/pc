function delayedPromise(valueOfPr,time){
    return new Promise((resolve)=>{
        setInterval(function(){
            resolve(valueOfPr)
        },time)
    })
}
let arrayOfProms = []
for(let i = 0;i<5;i++){
    arrayOfProms.push(delayedPromise(`Проміс:${i}`,i+2000))
}
Promise.all(arrayOfProms)
.then(
    promises => {
        promises.forEach((promis,index)=>{
            console.log(`${promis},Індекс:${index}`);
        })
    }
).catch(error=>{
    throw new Error(`Помилка:${error}`)
})