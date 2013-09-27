# Generator-remark
[![Build Status](https://secure.travis-ci.org/garbados/generator-remark.png?branch=master)](https://travis-ci.org/garbados/generator-remark)

A [Yeoman](http://yeoman.io/) generator for scaffolding [Remark](http://gnab.github.io/remark) presentations.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-remark`
- Run: `yo remark`

To view your presentation: 

    grunt server

To deploy your presentation as a couchapp to a local CouchDB instance under the `remark` database:

    grunt deploy

To configure where your presentation deploys, modify `couchapp.json`.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
