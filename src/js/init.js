const width = 500;
const height = 100;

const dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];;

const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 20)
  .attr('height', 100);