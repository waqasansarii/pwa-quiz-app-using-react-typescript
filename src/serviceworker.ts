export default function swDev (){
    let serviceW = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(serviceW).then((result)=>{
           console.log('result',result)
    }).catch((err)=>{
    console.log('err',err)
    })
}