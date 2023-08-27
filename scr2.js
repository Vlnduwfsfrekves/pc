function delayedPromise(valueOfPr){
    let time = Math.round(Math.random()*2000)
    return new Promise((resolve)=>{
        setInterval(function(){
            resolve(valueOfPr)
        },time)
    })
}
let arrayOfProms = []
for(let i = 0;i<5;i++){
    arrayOfProms.push(delayedPromise(`${i}`))
}
Promise.race(arrayOfProms)
.then(promises => {console.log(`Найшвидший проміс:${promises}`)})
.catch(error => {throw new Error(`Помилка:${error}`)})