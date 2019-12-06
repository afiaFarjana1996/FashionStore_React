
import lru from 'lru-cache'

const cache = new lru({
    maxAge: 300000,
    max: 5000000000,
    length: (n) =>{
       return n.length;
    }
});

export const set = (key, value) => {
    cache.set(key,value);
};

export const get = (key) => {
   return cache.get(key);
};