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

const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', function (d) {
    return d[0];
  })
  .attr('cy', function (d) {
    return d[1];
  })
  .attr('r', 5);