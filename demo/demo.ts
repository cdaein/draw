import {
  drawCircle,
  drawFillText,
  drawLine,
  drawPath,
  drawRect,
  drawSmoothPath,
} from "../index";

import { createCanvas } from "@daeinc/canvas";

const {
  canvas,
  context: ctx,
  width,
  height,
} = createCanvas({
  width: 600,
  height: 600,
  pixelRatio: window.devicePixelRatio,
}) as {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
};

drawRect(ctx, [0, 0], [width, height]);
ctx.fillStyle = `gray`;
ctx.fill();

drawCircle(ctx, [width / 2, height / 2], width / 2);
ctx.fillStyle = `white`;
ctx.fill();
