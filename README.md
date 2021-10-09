<h1 align="center">Welcome 😀</h1>

![example branch parameter](https://github.com/activeguild/classnames-generics/actions/workflows/main.yml/badge.svg?branch=master)

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
classNames<'foo' | 'bar'>(null, false, 'bar', undefined, 0, 1, '');

import {classNamesFunc } from 'classnames-generics';

const classNames = classNames<'foo' | 'bar'>();

classNames('foo', 'bar');
classNames('foo', { bar: true });

```
