// index.ts
var drawCircle = (ctx, pt, diam) => {
  ctx.beginPath();
  ctx.arc(pt[0], pt[1], diam * 0.5, 0, Math.PI * 2);
};
var drawFillText = (ctx, msg, pt) => {
  ctx.fillText(msg, pt[0], pt[1]);
};
var drawLine = (ctx, pt1, pt2) => {
  ctx.beginPath();
  ctx.moveTo(pt1[0], pt1[1]);
  ctx.lineTo(pt2[0], pt2[1]);
};
var drawPath = (ctx, path, close = false) => {
  ctx.beginPath();
  ctx.moveTo(path[0][0], path[0][1]);
  for (let i = 1; i < path.length; i++)
    ctx.lineTo(path[i][0], path[i][1]);
  if (close)
    ctx.closePath();
};
var drawRect = (ctx, pt, size, mode = "corner") => {
  ctx.beginPath();
  if (mode === "corner")
    ctx.rect(pt[0], pt[1], size[0], size[1]);
  else if (mode === "center")
    ctx.rect(pt[0] - size[0] / 2, pt[1] - size[1] / 2, size[0], size[1]);
  else
    throw new Error(`drawRect() does not support mode: ${mode}`);
};
var drawRoundRect = (ctx, pt, size, radii, mode = "corner") => {
  ctx.beginPath();
  if (mode === "corner")
    ctx.roundRect(pt[0], pt[1], size[0], size[1], radii || 0);
  else if (mode === "center")
    ctx.roundRect(
      pt[0] - size[0] / 2,
      pt[1] - size[1] / 2,
      size[0],
      size[1],
      radii || 0
    );
};
var drawSmoothPath = (ctx, path, close = false) => {
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
  if (close)
    ctx.closePath();
};

export { drawCircle, drawFillText, drawLine, drawPath, drawRect, drawRoundRect, drawSmoothPath };
