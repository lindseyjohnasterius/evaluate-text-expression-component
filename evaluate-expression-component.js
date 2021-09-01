
/*

This is an implementation of the HTML Custom Element API: https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements

" Living code explains itself, somewhat, but the real value is in having a haunted town full of horror stories."
  --𝙙𝙙𝙖𝙮

Only other programmers believe that below this comment lies several John Grisham novels worth of code.

A demo:

https://codepen.io/lindseymysse/pen/ExWZEEr

*/


class EvaluateExpression extends HTMLElement {  
  getNewID() {
    return 'dtrm-xxxxxxxxxxxxxxxx-'
      .replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16)
    }) + Date.now()
  }

  connectedCallback() {


    this.id = this.getAttribute('id')
    if(this.id === null){
      this.id = getNewID()
    }
    this.expression = this.innerText
    setInterval(()=>{this.checkForChanges()},
      Math.floor(Math.random() * 1000))
    this.worker = new Worker('evaluate-expression-web-workers.js')
    this.worker.onmessage = (e) => this.handleEval(e)
  }

  handleEval(message){
    this.setAttribute('value', message.data)
    let detail = new Object()
    detail[this.id] = message.data
    const new_event = new CustomEvent('UPDATED', {detail})
    this.dispatchEvent(new_event)
    console.log(message.data, this.getAttribute('value'))

  }

  checkForChanges(){
    if(this.expression !== this.innerText){
      this.expression = this.innerText
      this.worker.postMessage(this.expression)
    }
  }

  disconnectedCallback() {

  }

}

customElements.define('evaluate-expression', EvaluateExpression)