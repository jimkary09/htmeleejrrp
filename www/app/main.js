define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:

    // Load library/vendor modules using
    // full IDs, like:
    //    var print = require('print');
    //var hexagons = require('hexagons');
    var ui = require('./ui');
    var d3 = require('d3');
    var Hexlib = require('Hexlib');
    
//    var cubes = Grid.trapezoidalShape(0, 14, 0, 14, Grid.twoAxisToCube);
    var cubes = [];
    
    for (var y = 11; y <= 14; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(0,y)));
    }
    for (var y = 8; y <= 14; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(1,y)));
    }
    for (var y = 7; y <= 13; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(2,y)));
    }
    for (var y = 7; y <= 13; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(3,y)));
    }
    for (var y = 6; y <= 12; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(4,y)));
    }
    for (var y = 5; y <= 11; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(5,y)));
    }
    for (var y = 5; y <= 11; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(6,y)));
    }
    for (var y = 4; y <= 10; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(7,y)));
    }
    for (var y = 3; y <= 9; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(8,y)));
    }
    for (var y = 3; y <= 9; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(9,y)));
    }
    for (var y = 2; y <= 8; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(10,y)));
    }
    for (var y = 1; y <= 7; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(11,y)));
    }
    for (var y = 1; y <= 7; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(12,y)));
    }
    for (var y = 0; y <= 6; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(13,y)));
    }
    for (var y = 0; y <= 3; y++){
        cubes.push(Grid.twoAxisToCube(new Hex(14,y)));
    }
    
    // console.log(" cubes length " + cubes.length);
    // for (var i = 0; i < cubes.length; i++) {
    //      var cube = cubes[i];
    //      if (cube.x == 5 && cube.y == -8 && cube.z == 3) {
    //          console.log(" splicing " + cube + " at " + i);
    //          cubes.splice(i,1);
    //      }
    // }
    // console.log(" cubes length " + cubes.length);

    ui.makeGridDiagram(d3.select('#mainGrid'), cubes)
        .addHexCoordinates(Grid.cubeToTwoAxis, true)
        .update(40, false);
        
        
    // makeGridDiagram(d3.select('#grid-offset-even-q'),
    //                 Grid.trapezoidalShape(0, 7, 0, 5, Grid.evenQToCube))
    //     .addHexCoordinates(Grid.cubeToEvenQ, true)
    //     .update(40, false);
    // makeGridDiagram(d3.select('#grid-offset-odd-r'),
    //                 Grid.trapezoidalShape(0, 6, 0, 6, Grid.oddRToCube))
    //     .addHexCoordinates(Grid.cubeToOddR, true)
    //     .update(40, true);
    // makeGridDiagram(d3.select('#grid-offset-even-r'),
    //                 Grid.trapezoidalShape(0, 6, 0, 6, Grid.evenRToCube))
    //     .addHexCoordinates(Grid.cubeToEvenR, true)
    //     .update(40, true);

});
