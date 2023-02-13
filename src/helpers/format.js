export default function format(x) {
  return isNaN(x) ? '' : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
