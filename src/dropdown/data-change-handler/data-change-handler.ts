export default function(changes) {
  if('items' in changes) {
    this.init();
  }
}
