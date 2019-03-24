const canvas = document.querySelector('canvas');
canvas.width = 350;
canvas.height = 350;

const ctx = canvas.getContext('2d');
let player_x = 20;
let player_y = 20;
let base_x = Math.floor(Math.random() * 300);
let base_y = Math.floor(Math.random() * 300);

ctx.fillStyle = 'red';
ctx.fillRect(player_x, player_y, 15, 15); // ctx.fillRect(x, y, width, height)

ctx.strokeRect(base_x, base_y, 50, 50);