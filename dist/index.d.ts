import type { Pt, Pts } from "@daeinc/geom";
/**
 * draw a circle with diameter
 * @param ctx
 * @param pt [x, y]
 * @param diam diameter
 */
export declare const drawCircle: (ctx: CanvasRenderingContext2D, pt: Pt, diam: number) => void;
/**
 *
 * @param ctx
 * @param msg
 * @param x
 * @param y
 */
export declare const drawFillText: (ctx: CanvasRenderingContext2D, msg: string, pt: Pt) => void;
/**
 * draw a line
 * @param ctx
 * @param pt1 [x, y]
 * @param pt2 [x, y]
 */
export declare const drawLine: (ctx: CanvasRenderingContext2D, pt1: Pt, pt2: Pt) => void;
/**
 * draw a 2d path. need to manually stroke/fill afterwards.
 * @param ctx canvas context 2d
 * @param path array of [ x, y ] point pairs
 * @param close close path or not. default is false
 */
export declare const drawPath: (ctx: CanvasRenderingContext2D, path: Pts, close?: boolean) => void;
/**
 * draw a rectangle
 * @param pt [ x, y ]
 * @param size [ width, height ]
 * @param mode "corner" or "center"
 */
export declare const drawRect: (ctx: CanvasRenderingContext2D, pt: Pt, size: Pt, mode?: "corner" | "center") => void;
/**
 * use quadratic curve to smoothen hard edges of path. use with geom.generateSmoothPath()
 * @param ctx
 * @param path array of [ x, y ]
 * @param close close path. default=false
 */
export declare const drawSmoothPath: (ctx: CanvasRenderingContext2D, path: Pts, close?: boolean) => void;
//# sourceMappingURL=index.d.ts.map