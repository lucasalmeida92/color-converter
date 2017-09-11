var expect = require("chai").expect;
var request = require("request");

describe('Color Code Converter', function() {

    /* RGB => Hex */
    describe('RGB to Hex conversion', function() {
        var url = 'http://localhost:3031/rgbToHex?red=255&green=255&blue=255';

        it('should return status 200', function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('should return the color in hex', function(done) {
            request(url, function(error, response, body){
                expect(body).to.equal('ffffff');
                done();
            });

        });
    });

    /* Hex => RGB */
    describe('Hex to RGB conversion', function() {
        var url = 'http://localhost:3031/hexToRgb?hex=00ff00';

        it('should return status 200', function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('should return the color in RGB', function(done) {
            request(url, function(error, response, body){
                expect(body).to.equal('[0,255,0]');
                done();
            });
        });
    });

});