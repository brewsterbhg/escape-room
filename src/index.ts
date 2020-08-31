import { init, GameLoop, initKeys, keyPressed, Sprite } from "kontra";

import { createPlayer } from "./player";
import { tree } from "./sprites";
import { createMap } from "./tileEngine";
import { Direction, Keys } from "./config";
import { MOVE_SPEED } from "./constants";

let { context } = init();

initKeys();

(async () => {
  const map = await createMap();
  const player = createPlayer(context, map);
  const t = tree(context);

  const loop = GameLoop({
    update() {
      if (keyPressed(Keys.Left)) {
        if (checkCollision(player, "walls")) {
          player.move(Direction.Left);
        }
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
      if (keyPressed(Keys.Action)) {
        // add action logic
      }
    },

    render() {
      map.render();
      player.render();
      t.render();
    },
  });

  loop.start();
})();
