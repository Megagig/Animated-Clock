const clock = () => {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  //setup canvas
  ctx.save(); //save the default state
  ctx.clearRect(0, 0, 500, 500); //clear the canvas
  ctx.translate(250, 250); //put 0,0 on the center of the canvas
  ctx.rotate(-Math.PI / 2); //rotate -90 degrees

  //set default styles
  ctx.strokeStyle = '000000';
  ctx.fillStyle = 'f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCcap = 'round';

  //draw the clock face/border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#800000';
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.restore();
  ctx.restore(); //restore default state
};

clock();
