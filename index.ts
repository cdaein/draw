import type { Pt, Pts } from "@daeinc/geom";

/**
 * draw a circle with diameter
 * @param ctx
 * @param pt [x, y]
 * @param diam diameter
 */
export const drawCircle = (
  ctx: CanvasRenderingContext2D,
  pt: Pt,
  diam: number
) => {
  ctx.beginPath();
  ctx.arc(pt[0], pt[1], diam * 0.5, 0, Math.PI * 2);
};

/**
 *
 * @param ctx
 * @param msg
 * @param x
 * @param y
 */
export const drawFillText = (
  ctx: CanvasRenderingContext2D,
  msg: string,
  pt: Pt
  // options?: { font: string }
) => {
  // ctx.font = options?.font ? (ctx.font = options.font) : "8px Helvetica";
  ctx.fillText(msg, pt[0], pt[1]);
};

/**
 * draw a line
 * @param ctx
 * @param pt1 [x, y]
 * @param pt2 [x, y]
 */
export const drawLine = (ctx: CanvasRenderingContext2D, pt1: Pt, pt2: Pt) => {
  ctx.beginPath();
  ctx.moveTo(pt1[0], pt1[1]);
  ctx.lineTo(pt2[0], pt2[1]);
};

/**
 * draw a 2d path. need to manually stroke/fill afterwards.
 * @param ctx canvas context 2d
 * @param path array of [ x, y ] point pairs
 * @param close close path or not. default is false
 */
export const drawPath = (
  ctx: CanvasRenderingContext2D,
  path: Pts,
  close: boolean = false
) => {
  ctx.beginPath();
  ctx.moveTo(path[0][0], path[0][1]);
  for (let i = 1; i < path.length; i++) ctx.lineTo(path[i][0], path[i][1]);
  if (close) ctx.closePath();
};

/**
 * draw a rectangle
 * @param pt [ x, y ]
 * @param size [ width, height ]
 * @param mode "corner" or "center"
 */
export const drawRect = (
  ctx: CanvasRenderingContext2D,
  pt: Pt,
  size: Pt,
  mode: "corner" | "center" = "corner"
) => {
  ctx.beginPath();
  if (mode === "corner") ctx.rect(pt[0], pt[1], size[0], size[1]);
  else if (mode === "center")
    ctx.rect(pt[0] - size[0] / 2, pt[1] - size[1] / 2, size[0], size[1]);
  else throw new Error(`drawRect() does not support mode: ${mode}`);
};

/**
 * use quadratic curve to smoothen hard edges of path. use with geom.generateSmoothPath()
 * @param ctx
 * @param path array of [ x, y ]
 * @param close close path. default=false
 */
export const drawSmoothPath = (
  ctx: CanvasRenderingContext2D,
  path: Pts,
  close: boolean = false
) => {
  ctx.beginPath();
  ctx.moveTo(path[0][0], path[0][1]);
  ctx.lineTo(path[1][0], path[1][1]);
  ctx.lineTo(path[2][0], path[2][1]);
  for (let i = 3; i < path.length - 3; i += 3) {
    ctx.quadraticCurveTo(
      path[i][0],
      path[i][1],
      path[i + 1][0],
      path[i + 1][1]
    );
    ctx.lineTo(path[i + 2][0], path[i + 2][1]);
  }
  const lastPt = path[path.length - 1];
  ctx.lineTo(lastPt[0], lastPt[1]);
  if (close) ctx.closePath();
};
