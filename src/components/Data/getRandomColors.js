function getRandomColor() {
  let value = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += value[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default getRandomColor;
