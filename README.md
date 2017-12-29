# cal-sedra

[![npm version](https://badge.fury.io/js/cal-sedra.svg)](https://badge.fury.io/js/cal-sedra)
[![npm module downloads](http://img.shields.io/npm/dt/cal-sedra.svg)](https://www.npmjs.org/package/cal-sedra)
[![Build Status](https://travis-ci.org/peshitta/cal-sedra.svg?branch=master)](https://travis-ci.org/peshitta/cal-sedra)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/cal-sedra/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/cal-sedra.svg)](https://david-dm.org/peshitta/cal-sedra)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/cal-sedra/badge.svg?branch=master)](https://coveralls.io/github/peshitta/cal-sedra?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

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
[https://registry.npmjs.org/cal-sedra/-/cal-sedra-1.1.0.tgz](https://registry.npmjs.org/cal-sedra/-/cal-sedra-1.1.0.tgz)

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
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/cal-sedra/issues).

To read quick updates about Peshitta app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [calSedra](#module_calSedra)
    * [.mapper](#module_calSedra.mapper) : <code>Mapper</code>
    * [.toSedra](#module_calSedra.toSedra) ⇒ <code>string</code>
    * [.toSedraMap](#module_calSedra.toSedraMap) : <code>Object.&lt;string, string&gt;</code>

<a name="module_calSedra.mapper"></a>

### calSedra.mapper : <code>Mapper</code>
CAL to Sedra aramaic mapper

**Kind**: static constant of [<code>calSedra</code>](#module_calSedra)  
<a name="module_calSedra.toSedra"></a>

### calSedra.toSedra ⇒ <code>string</code>
Convert from CAL to Sedra 3 transliteration

**Kind**: static constant of [<code>calSedra</code>](#module_calSedra)  
**Returns**: <code>string</code> - the input word converted to Sedra 3 representation  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in CAL code transliteration |

<a name="module_calSedra.toSedraMap"></a>

### calSedra.toSedraMap : <code>Object.&lt;string, string&gt;</code>
CAL to Sedra map

**Kind**: static constant of [<code>calSedra</code>](#module_calSedra)  
