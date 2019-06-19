const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },

    _content: ["item_a", "item_b", "item_c"],

    get content() {
       if (this.locked) throw new Error("Locked!");
       return this._content;
    }
 };

function withBoxUnlocked(body) {
 let locked = box.locked;
 if (!locked) {
   return body();
 }

 box.unlock();
 try {
   return body();
 } finally {
   box.lock();
 }
}


function runBox() { 

box.unlock();
console.log(box.locked);

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

//box.lock();
//console.log(box.locked);

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}


console.log(box.locked);

//console.log(withBoxUnlocked('b'));

}