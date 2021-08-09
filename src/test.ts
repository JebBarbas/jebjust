import assert from 'assert'
import just from '.'

console.log('Starting tests ...')

for(let i = 0; i < Number.MAX_VALUE; i++){
    just(i)
}

console.log('Tests finished :)')

assert.ok(true)