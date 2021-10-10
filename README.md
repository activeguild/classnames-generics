<h1 align="center">Welcome 😀</h1>

<p align="left">
  <a href="https://github.com/actions/setup-node"><img alt="GitHub Actions status" src="https://github.com/activeguild/classnames-generics/workflows/automatic%20release/badge.svg" style="max-width:100%;"></a>
</p>

# classnames-generics
Use the classnames library more type-safely.

## Install

```shell
npm i classnames-generics
```

## Usage

```ts

import {classNames } from 'classnames-generics';

classNames<'foo' | 'bar'>('foo', 'bar');
classNames<'foo' | 'bar'>('foo', { bar: true });
classNames<'foo-bar'>({ 'foo-bar': true });
classNames<'foo-bar'>({ 'foo-bar': false });
classNames<'foo' | 'bar'>({ foo: true }, { bar: true });
classNames<'foo' | 'bar'>({ foo: true, bar: true });
classNames<'foo' | 'bar'| 'duck' | 'baz' | 'quux'>('foo', { bar: true, duck: false }, 'baz', { quux: true });

import {classNamesFunc } from 'classnames-generics';

const classNames = classNamesFunc<'foo' | 'bar'>();

classNames('foo', 'bar');
classNames('foo', { bar: true });

```
