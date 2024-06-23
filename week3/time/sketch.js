function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  background(220);

  let s = second();
  let m = minute();
  let h = hour();

  // Calculate the sizes
  let secondSize = map(s, 0, 59, 0, 400); // Grow from 0 to 200 pixels for 59 seconds
  let minuteSize = map(m, 0, 59, 0, 200); // Grow from 0 to 100 pixels for 59 minutes
  let hourSize = map(h % 12, 0, 11, 0, 100); // Grow from 0 to 50 pixels for 11 hours

  // Draw the second circle
  fill(173, 216, 230, 150); // Light Blue with alpha(150)
  ellipse(width / 2, height / 2, secondSize, secondSize);

  // Draw the minute circle
  fill(0, 0, 205, 150); // Medium Blue with alpha(150)
  ellipse(width / 2, height / 2, minuteSize, minuteSize);

  // Draw the hour circle
  fill(0, 0, 139, 150); // Dark Blue with alpha(150)
  ellipse(width / 2, height / 2, hourSize, hourSize);
}
