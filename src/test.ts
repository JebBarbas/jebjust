import assert from 'assert'
import {just} from '.'

const test = "Test Ended In"

console.time(test)
console.log('Starting tests ...')

for(let i = 0; i < 100000000000; i++){
    just(i)
}

console.timeEnd(test)
console.log('Tests finished :)')

assert.ok(true)