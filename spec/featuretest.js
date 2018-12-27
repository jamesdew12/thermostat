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
    expect(thermostat.higher).toEqual(1)
  });

  it('lowers temp by 1 degrees', function(){
    expect(thermostat.lower).toEqual(-1)
  });

  it('min temp is 10 degrees', function() {
    expect(thermostat.min).toEqual(10)
  });

  it('if power saving mode is on max temp is 25 degrees', function() {
    expect(thermostat.psmmaxtemp).toEqual(25)
  });

  it('if power saving mode is not on max temp is 32', function() {
    expect(thermostat.maxtemp).toEqual(32)
  });

  it('returns current temp with up', function() {
    expect(thermostat.getCurrentTemparature()).toEqual(20)
  });

  it('increases the temp', function() {
    thermostat.up(2)
    expect(thermostat.temp).toEqual(22);
  });
  it('decreases the temp', function() {
    thermostat.down(2)
    expect(thermostat.temp).toEqual(18);
  });
  it('resets the temp to 20 degrees', function() {
    thermostat.reset
    expect(thermostat.temp).toEqual(20);
  });
  it('checks the current energy usage, medium usage', function(){
    expect(thermostat.currentEnergyUsage()).toEqual('Medium Usage')
  });
  it('has power saving mode on by default', function() {
  expect(thermostat.powersaver).toBe(true);
  });
  it('checks currentEnergyUsage, Low usage', function(){
    thermostat.down(4)
    expect(thermostat.currentEnergyUsage()).toEqual('Low usage')
  });
  it('checks currentEnergyUsage, High usage', function(){
    thermostat.up(6)
    expect(thermostat.currentEnergyUsage()).toEqual('High usage')
  });
  it('checks to see if power save mode is turned off', function(){
    thermostat.isPowerSavingMode()
  expect(thermostat.powersaver).toBe(false);
  });
  it('thows an error if temp is over 32', function(){
    thermostat.up(20)
    expect(function() {
      thermostat.powerSavingOnExceedsMaxTemp() }).toThrowError('Max temp of 25 degrees on power saver mode has been reached');
  });
  it('thows an error if temp is over 32', function(){
    thermostat.isPowerSavingMode();
    thermostat.up(20);
    expect(function() {
      thermostat.powerSavingOffExceedsMaxTemp() }).toThrowError('Max temp of 32 degrees not on power saver mode has been reached');
  });

});


//
// it('blocks takeoff when weather is stormy', function(){
// plane.land(airport)
// spyOn(airport,'isStormy').and.returnValue(true);
// expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
// expect(airport.planes()).toContain(plane);
// });
