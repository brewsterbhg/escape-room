import { Sprite } from "kontra";

export interface Player extends Sprite {
  ctx: CanvasRenderingContext2D;
}

export const tree = (
  ctx,
  cx = 400,
  cy = 90,
  outerRadius = 30,
  innerRadius = 25
): Sprite => {
  let rot = (Math.PI / 2) * 3;
  const spikes = 20;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  return Sprite({
    width: 32,
    height: 32,

    color: "green",

    render() {
      ctx.strokeSyle = "#000";
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "darkgreen";
      ctx.stroke();
      ctx.fillStyle = "green";
      ctx.fill();
    },
  });
};
