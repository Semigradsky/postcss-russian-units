# PostCSS Russian Units [![Build Status][ci-img]][ci]

![image](https://cloud.githubusercontent.com/assets/1198848/9138302/8f6e5f08-3d2b-11e5-9f8b-e8f38b057d6e.png)

[PostCSS] plugin to support lengths in russian units.

Inspired by [PostCSS Imperial](https://github.com/cbas/postcss-imperial).

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/Semigradsky/postcss-russian-units.svg
[ci]:      https://travis-ci.org/Semigradsky/postcss-russian-units

## Input
```css
.poster {
  height: 2linii;
  width: 1perst;
}

/* or */

.poster {
  height: 2линии;
  width: 1перст;
}
```


## Output
```css
.poster {
  height: 0.2in;
  width: 0.787402in;
}
```

## Usage
```js
postcss([ require('postcss-russian-units') ])
```

See [PostCSS] docs for examples for your environment.

## Supported Units
- tochka
- liniya
- nogot
- perst
- sotka
- dyuim
- vershok
- piad
- fut
- arshin
- sazhen
- versta
- milia

### Notes
- Plurals are supported for convenience.

## References
- https://en.wikipedia.org/wiki/Obsolete_Russian_units_of_measurement#Length
