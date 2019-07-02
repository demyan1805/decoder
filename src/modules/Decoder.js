import Dict from './Dict';


export default class Decoder {
    constructor(key, source) {
        this.key = key;
        this.source = source;
    }

    dict = new Dict().dictCyr;
    result = [];
    
    codeWord(key, source, action) {
        let tempRes = [];

        for (let i = 0; i < source.length; i++) {
            let k = i % key.length;
            let t = 0;
            if (action) {t = this.getIndex(source[i]) + this.getIndex(key[k])}
            else {t = this.getIndex(source[i]) - this.getIndex(key[k])};
            t < 0 ? t = this.dict.length + t : t = t;
            tempRes.push(this.getSymbol(t % this.dict.length));
        }
        return tempRes.join('');
    }
    encodeWord(key, source) {
        return this.codeWord(key, source, true)
    }
    decodeWord(key, source) {
        return this.codeWord(key, source, false)
    }

    getSymbol(i) {
        return this.dict[i];
    }

    getIndex(s) {
        return this.dict.indexOf(s);
    }

}