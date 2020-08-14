import { Sprite } from "kontra";

import { Direction } from "./config";

export interface Player extends Sprite {
  context: CanvasRenderingContext2D;
}

const PLAYER_SIZE = 32;
const MOVE_SPEED = 3;

export const createPlayer = (context): Sprite => {
  return Sprite({
    width: PLAYER_SIZE,
    height: PLAYER_SIZE,
    context: context,

    x: 300,
    y: 100,

    color: "red",
    radius: 20,

    render() {
      this.context.fillStyle = this.color;
      this.context.beginPath();
      this.context.arc(0, 0, this.radius, 0, 2 * Math.PI);
      this.context.fill();
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
  });
};
