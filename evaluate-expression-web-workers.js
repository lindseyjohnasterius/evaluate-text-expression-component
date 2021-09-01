onmessage = function(e){
  try{
    let result = eval(e.data)
    postMessage(result)
  } catch(e) {
    postMessage('error:', e)
  }
}