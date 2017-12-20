const rucksack = require('rucksack-css')
const cssnext = require('postcss-cssnext')
const cssnested = require('postcss-nested')
const mixins = require('postcss-mixins')
const lost = require('lost')
const atImport = require('postcss-import')
const csswring = require('csswring')
const mqpacker = require('css-mqpacker')

module.exports = {
    plugins: [
        atImport(),
        mixins(),
        cssnested,
        lost(),
        rucksack(),
        cssnext({
            browsers: ['> 5%', 'ie 8']
        }),
        mqpacker(),
        csswring()
    ]
}