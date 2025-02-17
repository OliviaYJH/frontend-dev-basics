/*
    promise 지원 비동기 함수 사용 II: async ~ await
*/

const {fn02} = require('./fns');

// test: success
const fn = async () => {
    const result = await fn02('params~');
    console.log(result);
}

fn('params~~');
fn(null);

console.log('wait...');