var express = require('express'),
    app = express(),
    converter = require('./converter'),
    port = 3031;

/* RGB => Hex */
app.get('/rgbToHex', function(req, res) {
    var red = parseInt(req.query.red),
        green = parseInt(req.query.green),
        blue = parseInt(req.query.blue);

    var hex = converter.rgbToHex(red, green, blue);

    res.send(hex);
});

/* Hex => RGB */
app.get('/hexToRgb', function(req, res) {
    var hex = req.query.hex;

    var rgb = converter.hexToRgb(hex);

    res.send(JSON.stringify(rgb));
});

app.listen(port, function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log('\n\n-----------> API running on localhost:' + port + '\n\n');
    }
});
