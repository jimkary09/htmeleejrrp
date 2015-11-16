define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:

    // Load library/vendor modules using
    // full IDs, like:
//    var print = require('print');
    var hexagons = require('hexagons');



makeGridDiagram(d3.select('#grid-offset-odd-q'),
                Grid.trapezoidalShape(0, 7, 0, 5, Grid.oddQToCube))
    .addHexCoordinates(Grid.cubeToOddQ, true)
    .update(40, false);
makeGridDiagram(d3.select('#grid-offset-even-q'),
                Grid.trapezoidalShape(0, 7, 0, 5, Grid.evenQToCube))
    .addHexCoordinates(Grid.cubeToEvenQ, true)
    .update(40, false);
makeGridDiagram(d3.select('#grid-offset-odd-r'),
                Grid.trapezoidalShape(0, 6, 0, 6, Grid.oddRToCube))
    .addHexCoordinates(Grid.cubeToOddR, true)
    .update(40, true);
makeGridDiagram(d3.select('#grid-offset-even-r'),
                Grid.trapezoidalShape(0, 6, 0, 6, Grid.evenRToCube))
    .addHexCoordinates(Grid.cubeToEvenR, true)
    .update(40, true);

});
