// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        d3: "http://d3js.org/d3.v3.min",
        Hexlib: "_compiled_hexlib"
    },
    shim: {
        // original from http://www.redblobgames.com/grids/hexagons/_compiled_hexlib.js
        'Hexlib': {
            // no deps:
            exports: 'Hexlib'
        },
        'hexagons' : {
            // no deps:
            exports: 'hexagons'
        }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
