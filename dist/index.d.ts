import { Pt, Pts } from '@daeinc/geom';

/**
 * Draw a circle with diameter
 * @param ctx -
 * @param pt - `[x, y]`
 * @param diam - diameter
 */
declare const drawCircle: (ctx: CanvasRenderingContext2D, pt: Pt, diam: number) => void;
/**
 * Draw fill text. Make sure to set [`context.font`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font)
 * @param ctx -
 * @param msg - If number, use `toString()`
 * @param pt - `[x, y]`
 */
declare const drawFillText: (ctx: CanvasRenderingContext2D, msg: string, pt: Pt) => void;
/**
 * Draw a line
 * @param ctx -
 * @param pt1 - `[x, y]`
 * @param pt2 - `[x, y]`
 */
declare const drawLine: (ctx: CanvasRenderingContext2D, pt1: Pt, pt2: Pt) => void;
/**
 * Draw a 2d path. need to manually stroke/fill afterwards.
 * @param ctx -
 * @param path - array of `[x, y]` points
 * @param close - close path or not. default is `false`
 */
declare const drawPath: (ctx: CanvasRenderingContext2D, path: Pts, close?: boolean) => void;
/**
 * Draw a rectangle
 * @param pt - `[x, y]`
 * @param size - `[width, height]`
 * @param mode - Draw from top-left `corner` or `center`. Default is `corner`
 */
declare const drawRect: (ctx: CanvasRenderingContext2D, pt: Pt, size: Pt, mode?: "corner" | "center") => void;
/**
 * Draw a rectangle with rounded corner(s).
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/roundRect)
 *
 * @param pt - `[x, y]`
 * @param size - `[width, height]`
 * @param radii - Corner radius/radii. Can be a single value or multiple values.
 * @param mode - Draw from top-left `corner` or `center`. Default is `corner`
 */
declare const drawRoundRect: (ctx: CanvasRenderingContext2D, pt: Pt, size: Pt, radii?: number | DOMPointInit | Iterable<number | DOMPointInit> | null, mode?: "corner" | "center") => void;
/**
 * Use quadratic curve to smoothen hard edges of path. use with `geom.generateSmoothPath()`
 * @param ctx -
 * @param path - Array of `[x, y]` points
 * @param close - close path. default is `false`
 */
declare const drawSmoothPath: (ctx: CanvasRenderingContext2D, path: Pts, close?: boolean) => void;

export { drawCircle, drawFillText, drawLine, drawPath, drawRect, drawRoundRect, drawSmoothPath };
