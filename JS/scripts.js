const clock = () => {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  //setup canvas
  ctx.save(); //save the default state
  ctx.clearRect(0, 0, 500, 500); //clear the canvas
  ctx.translate(250, 250); //put 0,0 on the center of the canvas
  ctx.rotate(-Math.PI / 2); //rotate -90 degrees

  // Set default styles
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  //draw the clock face/border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#800000';
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw hour lines
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();
  ctx.restore(); //restore default state
};

clock();
