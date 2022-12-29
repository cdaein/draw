import {
  drawCircle,
  drawFillText,
  drawLine,
  drawPath,
  drawRect,
  drawSmoothPath,
} from "../index";

import { createCanvas } from "@daeinc/canvas";

const canvas = createCanvas({
  width: 600,
  height: 600,
  pixelRatio: window.devicePixelRatio,
});
const ctx = canvas.getContext("2d")!;

const { width, height } = canvas;

drawRect(ctx, [0, 0], [width, height]);
ctx.fillStyle = `gray`;
ctx.fill();

drawCircle(ctx, [width / 2, height / 2], width);
ctx.fillStyle = `white`;
ctx.fill();
