import { init, GameLoop, initKeys, keyPressed } from "kontra";

import { createPlayer } from "./player";
import { Direction, Keys } from "./config";

let { context } = init();

initKeys();

const player = createPlayer(context);

const loop = GameLoop({
  update() {
    if (keyPressed(Keys.Left)) {
      player.move(Direction.Left);
    }
    if (keyPressed(Keys.Right)) {
      player.move(Direction.Right);
    }
    if (keyPressed(Keys.Up)) {
      player.move(Direction.Up);
    }
    if (keyPressed(Keys.Down)) {
      player.move(Direction.Down);
    }
  },

  render() {
    player.render();
  },
});

loop.start();
