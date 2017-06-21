onmessage = function(e) {
    let ar = []
    // console.group();
    for(let i=0; i<10; i++) {
        ar.push(i)
        // console.log(e.data+i)
    }
    postMessage(e.data)
}