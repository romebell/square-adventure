const canvas = document.querySelector('canvas');
canvas.width = 350;
canvas.height = 350;

const ctx = canvas.getContext('2d');
let player_x = 20;
let player_y = 20;
let base_x = Math.floor(Math.random() * 300);
let base_y = Math.floor(Math.random() * 300);

let score = document.querySelector('span');
let value = Number(score.innerHTML);



function step() {
  ctx.clearRect(0, 0, 350, 350); // clears the screen on each iteration of the step
  ctx.fillStyle = 'red';
  // player_x += 1; // experiment where player_x runs across the screen
  ctx.fillRect(player_x, player_y, 15, 15); // ctx.fillRect(x, y, width, height)
  ctx.strokeRect(base_x, base_y, 50, 50);

  if (player_x >= base_x && player_y >= base_y && 
    player_x <= base_x + 50 && player_y <= base_y + 50){
      base_x = Math.floor(Math.random() * 300);
      base_y = Math.floor(Math.random() * 300);
      value++;
      score.textContent = `${value}`; // change the score
  }

  requestAnimationFrame(step);
}

requestAnimationFrame(step);

function handleInput(event){
  const key = event.key;
  switch(key){
    case 'a':
      player_x -= 5;
      break;
      case 'w':
      player_y -= 5;
      break;
      case 'd':
      player_x += 5;
      break;
      case 's': 
      player_y += 5;
      break;
    default:
      return;
  }
}

document.addEventListener('keypress', handleInput);