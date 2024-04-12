<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# drev

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Reverse a double-precision floating-point strided array in-place.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-drev
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var drev = require( '@stdlib/blas-ext-base-drev' );
```

#### drev( N, x, stride )

Reverses a double-precision floating-point strided array `x` in-place.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

drev( x.length, x, 1 );
// x => <Float64Array>[ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **stride**: index increment.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to reverse every other element

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

drev( 4, x, 2 );
// x => <Float64Array>[ -1.0, 1.0, 4.0, -5.0, 3.0, 0.0, -2.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Reverse every other element...
drev( 3, x1, 2 );
// x0 => <Float64Array>[ 1.0, -6.0, 3.0, -4.0, 5.0, -2.0 ]
```

#### drev.ndarray( N, x, stride, offset )

Reverses a double-precision floating-point strided array `x` in-place using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

drev.ndarray( x.length, x, 1, 0 );
// x => <Float64Array>[ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of the strided array

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

drev.ndarray( 3, x, 1, x.length-3 );
// x => <Float64Array>[ 1.0, -2.0, 3.0, -6.0, 5.0, -4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return the strided array unchanged.
-   Where possible, one should "reverse" a strided array by negating its stride, which is an `O(1)` operation, in contrast to performing an in-place reversal, which is `O(N)`. However, in certain circumstances, this is not tenable, particularly when interfacing with libraries which assume and/or expect a specific memory layout (e.g., strided array elements arranged in memory in ascending order). In general, when working with strided arrays, only perform an in-place reversal when strictly necessary.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array-filled-by' );
var drev = require( '@stdlib/blas-ext-base-drev' );

var x = filledarrayBy( 10, 'float64', discreteUniform( -100.0, 100.0 ) );
console.log( x );

drev( x.length, x, 1 );
console.log( x );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-ext/base/grev`][@stdlib/blas/ext/base/grev]</span><span class="delimiter">: </span><span class="description">reverse a strided array in-place.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/srev`][@stdlib/blas/ext/base/srev]</span><span class="delimiter">: </span><span class="description">reverse a single-precision floating-point strided array in-place.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-drev.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-drev

[test-image]: https://github.com/stdlib-js/blas-ext-base-drev/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-drev/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-drev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-drev?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-drev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-drev/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-drev/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-drev/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-drev/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-drev/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-drev/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-drev/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-drev/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-drev/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/grev]: https://github.com/stdlib-js/blas-ext-base-grev

[@stdlib/blas/ext/base/srev]: https://github.com/stdlib-js/blas-ext-base-srev

<!-- </related-links> -->

</section>

<!-- /.links -->
