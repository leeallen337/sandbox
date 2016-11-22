let dataset = [];

for (let i = 0; i < 25; i++) {
  let randomNumber = Math.random() * 30;
  dataset.push(randomNumber);
}

d3.select('body').selectAll('div')
  .data(dataset)
  .enter()
  .append('div')
  .attr('class', 'bar')
  .style('height', function (d) {
    let barHeight = d * 5;
    return barHeight + 'px';
  });