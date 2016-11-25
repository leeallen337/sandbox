const width = 500;
const height = 300;
const padding = 20;

const dataset = [
  [ 5, 20 ],
  [ 480, 90 ],
  [ 250, 50 ],
  [ 100, 33 ],
  [ 330, 95 ],
  [ 410, 12 ],
  [ 475, 44 ],
  [ 25, 67 ],
  [ 85, 21 ],
  [ 220, 88 ],
  [ 600, 150]
];

const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function (d) {
    return d[0];
  })])
  .range([padding, width - padding * 2]);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function (d) {
    return d[1];
  })])
  .range([height - padding, padding]);

const rScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function (d) {
    return d[1];
  })])
  .range([2, 5]);

const xAxis = d3.axisBottom()
  .scale(xScale)
  .ticks(5);

svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', function (d) {
    return xScale(d[0]);
  })
  .attr('cy', function (d) {
    return yScale(d[1]);
  })
  .attr('r', function (d) {
    return rScale(d[1]);
  })

svg.selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text(function (d) {
    return `${d[0]}, ${d[1]}}`;
  })
  .attr('x', function (d) {
    return xScale(d[0]);
  })
  .attr('y', function (d) {
    return yScale(d[1]);
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "red");

svg.append('g')
  .attr('class', 'axis')
  .attr('transform', `translate(0, ${height - padding})`)
  .call(xAxis)