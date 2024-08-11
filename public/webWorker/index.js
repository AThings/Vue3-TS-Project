self.onmessage = function(e) {
    console.log(e, 'self')
    let arr = e.data
    for(var i = 0; i < arr.length; i++) {
        arr[i] = Math.random()
    }
    self.postMessage(arr)
}