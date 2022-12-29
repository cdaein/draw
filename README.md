# @daeinc/draw

drawing utilities for HTML5 Canvas.

## Install

```sh
npm i @daeinc/draw
```

then,

```ts
import { ... } from "@daeinc/draw"
```

## Functions

It uses two custom types, `Pt` and `Pts`, each representing `number[]` and `Pt[]`.

```ts
import type { Pt, Pts } from "@daeinc/geom";
```

### drawCircle

```ts
const drawCircle: (ctx: CanvasRenderingContext2D, pt: Pt, diam: number) => void;
```

### drawFillText

```ts
const drawFillText: (
  ctx: CanvasRenderingContext2D,
  msg: string,
  pt: Pt
) => void;
```

### drawLine

```ts
const drawLine: (ctx: CanvasRenderingContext2D, pt1: Pt, pt2: Pt) => void;
```

### drawPath

```ts
const drawPath: (
  ctx: CanvasRenderingContext2D,
  path: Pts,
  close?: boolean
) => void;
```

### drawSmoothPath

```ts
const drawSmoothPath: (ctx: CanvasRenderingContext2D, path: Pts) => void;
```

Uses quadratic curves to smoothen hard edges of path. The input path is expected to be generated with `generateSmoothPath()` from another package `@daeinc/geom`.

## License

MIT
