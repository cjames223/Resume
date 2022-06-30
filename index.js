#! /usr/bin/env node

const fs = require('fs')
const colors = require('colors')

colors.setTheme({
    error: 'red',
    data: 'green'
})

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err.error)
    } else {
        JSON.parse(data)
        console.log(data.data)
        return data.data
    }
})