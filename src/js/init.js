const width = 500;
const height = 100;
const barPadding = 1;

const dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];;

const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', function (d, i) {
    return i * (width / dataset.length);
  })
  .attr('y', function (d, i) {
    return height - (d * 4);
  })
  .attr('width', width / dataset.length - barPadding)
  .attr('height', function (d, i) {
    return d * 4;
  })
  .attr('fill', function (d, i) {
    return `rgb(0, 0, ${d * 10})`;
  });

svg.selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text(function (d) {
    return d;
  })
  .attr('x', function (d, i) {
    return i * (width / dataset.length) + (width / dataset.length - barPadding) / 2;
  })
  .attr('y', function (d, i) {
    return height - (d * 4) + 14;
  })
  .attr('font-family', 'sans-serif')
  .attr('font-size', '11px')
  .attr('fill', 'white')
  .attr('text-anchor', 'middle');