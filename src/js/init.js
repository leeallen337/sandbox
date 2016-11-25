const width = 500;
const height = 100;

const dataset = [
  [ 5,     20 ],
  [ 480,   90 ],
  [ 250,   50 ],
  [ 100,   33 ],
  [ 330,   95 ],
  [ 410,   12 ],
  [ 475,   44 ],
  [ 25,    67 ],
  [ 85,    21 ],
  [ 220,   88 ]
];

const scale = d3.scaleLinear()
  .domain([100, 500])
  .range([10, 350]);