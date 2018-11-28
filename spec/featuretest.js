'use strict';

describe('Thermostat:', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('base temp is 20 degrees', function(){
    expect(thermostat.temp).toEqual(20)
  });

  it('raises temp by 1 degrees', function(){
    expect(thermostat.tempadd).toEqual(1)
  });

  it('lowers temp by 1 degrees', function(){
    expect(thermostat.tempdown).toEqual(-1)
  });

  it('min temp is 10 degrees', function() {
    expect(thermostat.mintemp).toEqual(10)
  });

  it('if power saving mode is on max temp is 25 degrees', function() {
    expect(thermostat.psm.maxtemp).toEqual(25)
  });

});
