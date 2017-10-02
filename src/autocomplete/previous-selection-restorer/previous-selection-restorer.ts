export default function() {
  setTimeout(() => {
    if(this.inputEl.value !== this.previousSelection) {
      this.inputEl.value = this.previousSelection;
    }      
  }, 100);
  
  this.loading = false;  
}
