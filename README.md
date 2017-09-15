# cal-sedra

[![npm version](https://badge.fury.io/js/cal-sedra.svg)](https://badge.fury.io/js/cal-sedra)
[![npm module downloads](http://img.shields.io/npm/dt/cal-sedra.svg)](https://www.npmjs.org/package/cal-sedra)
[![Build Status](https://travis-ci.org/peshitta/cal-sedra.svg?branch=master)](https://travis-ci.org/peshitta/cal-sedra)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/cal-sedra/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/cal-sedra.svg)](https://david-dm.org/peshitta/cal-sedra)
[![devDependencies Status](https://david-dm.org/peshitta/cal-sedra/dev-status.svg)](https://david-dm.org/peshitta/cal-sedra?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/cal-sedra/badge.svg?branch=master)](https://coveralls.io/github/peshitta/cal-sedra?branch=master)

Convert from CAL code to Sedra 3 ASCII transliteration

## Installation
In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install cal-sedra --save
```

Following bundles are available:
* `cal-sedra.js` - UMD ES5 version for use in browser, node, etc.
* `cal-sedra.min.js` - minified version of `cal-sedra.js`
* `cal-sedra.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/cal-sedra/-/cal-sedra-1.0.2.tgz](https://registry.npmjs.org/cal-sedra/-/cal-sedra-1.0.2.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

For Sedra 3 to CAL conversion see:
[sedra-cal](https://github.com/peshitta/sedra-cal)

## License

[MIT](https://github.com/peshitta/cal-sedra/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/cal-sedra/issues).
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [cal](#module_cal)
    * [.toSedraMap](#module_cal.toSedraMap) : <code>Object.&lt;string, string&gt;</code>
    * [.toSedra(word)](#module_cal.toSedra) ⇒ <code>string</code>

<a name="module_cal.toSedraMap"></a>

### cal.toSedraMap : <code>Object.&lt;string, string&gt;</code>
CAL to Sedra map

**Kind**: static constant of [<code>cal</code>](#module_cal)  
<a name="module_cal.toSedra"></a>

### cal.toSedra(word) ⇒ <code>string</code>
Convert from CAL to Sedra 3 transliteration

**Kind**: static method of [<code>cal</code>](#module_cal)  
**Returns**: <code>string</code> - the input word converted to Sedra 3 representation  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in CAL code transliteration |

