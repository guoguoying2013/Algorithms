/*
properties: 
  capacity: size, positive int
  cache: {} // save key-value pair
  // how to track which k-v is lru?

methods:
  get: 
    input 
      key, int
    output val or -1
  put: 
    input 
      key, int
      val, int
    output:
      update or add key - value to cache


   If the number of keys exceeds the capacity from this operation, evict the least recently    used key.

   Follow up:
   Could you do get and put in O(1) time complexity?
*/

class LRUCache {
    constructor(size) {
      this.capacity = size;
      this.cache = {};
      this.events = [];
    }
    
    get(key) {
      if(this.cache[key] !== undefined) {
        if(this.events[this.capacity - 1] !== key) {
          this.events.push(key);
        }
  
        if (this.events.length > this.capacity) {
          this.events.shift();
        }
        return this.cache[key];
      } else {
        return -1;
      }
    }
    
    put(key, val) {
      if (this.cache[key] !== undefined) {
        // update
        this.cache[key] = val;
      } else {
        // add new
        if (Object.keys(this.cache).length >= this.capacity) {
          let lru = this.events[0];
          delete this.cache[lru];
        }
        this.cache[key] = val;
      }
      if(this.events[this.capacity - 1] !== key) {
              this.events.push(key);
      }
  
      if (this.events.length > this.capacity) {
          this.events.shift();
      }
    }
  }
  
  let lRUCache = new LRUCache(2);
  lRUCache.put(1, 1); // cache is {1=1}
  // console.log('cach: ', lRUCache.cache);
  // console.log('events: ', lRUCache.events);
  lRUCache.put(2, 2); // cache is {1=1, 2=2}
  console.log('cach: ', lRUCache.cache);
  console.log('events: ', lRUCache.events);
  console.log(lRUCache.get(1), 'should be 1');
  console.log(lRUCache.put(3, 3))
  console.log('cach: ', lRUCache.cache);
  console.log('events: ', lRUCache.events);