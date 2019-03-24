const canvas = document.querySelector('canvas');
canvas.width = 350;
canvas.height = 350;

const ctx = canvas.getContext('2d');
let player_x = 20;
let player_y = 20;
let base_x = Math.floor(Math.random() * 300);
let base_y = Math.floor(Math.random() * 300);



function step() {
  ctx.clearRect(0, 0, 350, 350); // clears the screen on each iteration of the step
  ctx.fillStyle = 'red';
  ctx.fillRect(player_x, player_y, 15, 15); // ctx.fillRect(x, y, width, height)
  ctx.strokeRect(base_x, base_y, 50, 50);
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