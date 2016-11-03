let count = 0;

export function example(){
    return {
        cid: count++,
        instances: [],
        requesting: false,
        error: null
    };
}