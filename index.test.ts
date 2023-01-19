import { describe, expect, test } from "@jest/globals";
import "jest-canvas-mock";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { createCanvas } from "@daeinc/canvas";

expect.extend({ toMatchImageSnapshot });

// TODO
describe("test", () => {
  const {
    canvas,
    context: ctx,
    width,
    height,
  } = createCanvas({
    width: 500,
    height: 500,
    pixelRatio: 1,
    scaleContext: true,
  });

  ctx.fillStyle = `gray`;
  ctx.fillRect(0, 0, width, height);

  test("...", () => {
    // Take a snapshot of the canvas
    const image = new Image();
    image.src = canvas.toDataURL();

    // FIX
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir: "__image_snapshots__/reference",
      customSnapshotIdentifier: "reference-image.png",
    });
  });
});
