window.addEventListener("keydown", (event) => {
  if (player.preventInput) return;

  if (
    event.key === "w" ||
    event.key === "W" ||
    event.key === "ц" ||
    event.key === "Ц" ||
    event.key === " "
  ) {
    for (let i = 0; i < doors.length; i++) {
      const door = doors[i];

      if (
        player.hitBox.position.x + player.hitBox.width <=
          door.position.x + door.width &&
        player.hitBox.position.x >= door.position.x &&
        player.hitBox.position.y + player.hitBox.height >= door.position.y &&
        player.hitBox.position.y <= door.position.y + door.height
      ) {
        player.velocity.x = 0;
        player.velocity.y = 0;
        player.preventInput = true;
        player.switchSprite("enterDoor");
        door.play();
        return;
      }
    }
    if (player.velocity.y === 0) {
      player.velocity.y = -20;
    }
  } else if (
    event.key === "a" ||
    event.key === "A" ||
    event.key === "ф" ||
    event.key === "Ф"
  ) {
    keys.a.pressed = true;
  } else if (
    event.key === "d" ||
    event.key === "D" ||
    event.key === "в" ||
    event.key === "В"
  ) {
    keys.d.pressed = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (
    event.key === "a" ||
    event.key === "A" ||
    event.key === "ф" ||
    event.key === "Ф"
  ) {
    keys.a.pressed = false;
  } else if (
    event.key === "d" ||
    event.key === "D" ||
    event.key === "в" ||
    event.key === "В"
  ) {
    keys.d.pressed = false;
  }
});
