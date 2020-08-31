import { Sprite, TileEngine } from "kontra";

import { Direction } from "./config";
import { TILE_SIZE, MOVE_SPEED } from "./constants";

export const createPlayer = (
  context: CanvasRenderingContext2D,
  map: TileEngine
): Sprite => {
  return Sprite({
    width: TILE_SIZE,
    height: TILE_SIZE,

    x: 300,
    y: 100,

    color: "red",
    radius: 20,

    render() {
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(0, 0, this.radius, 0, 2 * Math.PI);
      context.fill();
    },

    move(dir: Direction) {
      switch (dir) {
        case Direction.Up:
          this.y -= MOVE_SPEED;
          break;
        case Direction.Right:
          this.x += MOVE_SPEED;
          break;
        case Direction.Down:
          this.y += MOVE_SPEED;
          break;
        case Direction.Left:
          this.x -= MOVE_SPEED;
          break;
      }
    },

    checkCollision() {
      const bounds = {
        x: this.x,
        y: this.y,
        height: this.height,
        width: this.width,
      };
      return map.layerCollidesWith("walls", bounds);
    },
  });
};
