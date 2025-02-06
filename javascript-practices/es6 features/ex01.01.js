/*
    let & const I
*/

// let 의 블록 범위

try {
    if(true) {
        var i = 0;
        let j = 0;
        j = 20;
    }

    console.log(i);
    console.log(j);

} catch(e) {
    console.error('error:' + e);
}