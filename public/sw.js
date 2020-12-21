let cacheName = 'quiz'

this.addEventListener('install',(data)=>{
    data.waitUntil(
        caches.open(cacheName).then((data)=>{
            console.log('data',data)
            data.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "index.html",
                "https://jsonplaceholder.opentdb.com/api_category.php",
                "https://jsonplaceholder.opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
                "/",
            ])
        }).catch((err)=>{
            console.log('error',err)
        })
    )
})


this.addEventListener('fetch',(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((result)=>{
              console.log('result2 ', result)
              if(result){
                  return result;
              }
            })
        )
    }
  })