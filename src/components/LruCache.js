
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

export const clear = () => {
    cache.reset();
}

export const isCacheEmpty = (key) => {
    var isEmpty=false;
    if(cache.get(key).length == 0 ){
        isEmpty = true;
    }
    return isEmpty;
}