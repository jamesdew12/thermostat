'use strict';

function Thermostat() {
  this.temp = 20
  this.higher = 1
  this.lower = -1
  this.min = 10
  this.psmmaxtemp = 25
  this.maxtemp = 32
  this.powersaver = true
  this.powerSavingOnMax = 25
  this.powerSavingOffMax = 32

};

Thermostat.prototype.getCurrentTemparature = function () {
  return this.temp;
};

Thermostat.prototype.up = function() {
  if (this.temp === 32 && powersaver === false){ }
 else if ( this.temp === 25 && powersaver === true){ }
 else { this.temp += 1 }


};

Thermostat.prototype.down = function (){
  if (this.temp === 10) { }
  else {this.temp -= 1;

  }

};

Thermostat.prototype.reset = function() {
  this.temp - this.temp + 20;

};
Thermostat.prototype.currentEnergyUsage = function () {
  if (this.temp > 17 && this.temp < 25) {
    return 'Medium Usage'
  } else if (this.temp < 18 ) {
    return 'Low usage'
  } else { (this.temp > 24)
    return 'High usage'
  }
};
Thermostat.prototype.isPowerSavingMode = function () {
  if (this.powersaver === true) {
    this.powersaver = false
  } else {
    this.powersaver = true
  }

};
Thermostat.prototype.powerSavingOnExceedsMaxTemp = function() {
  if (this.powersaver === true && (this.temp + 1) > this.powerSavingOnMax) {
    throw new Error('Max temp of 25 degrees on power saver mode has been reached');
  }
};

Thermostat.prototype.powerSavingOffExceedsMaxTemp = function() {
  if (this.powersaver === false && (this.temp + 1) > this.powerSavingOffMax) {
    throw new Error('Max temp of 32 degrees not on power saver mode has been reached');
  }
};
