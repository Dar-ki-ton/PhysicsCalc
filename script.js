var kineMass = document.getElementById("kine-mass-in");
var veloIn = document.getElementById("velo-in");
var kineCalcBtn = document.getElementById("kine-calc");
var kineOutEl = document.getElementById("kine-out");

var potMass = document.getElementById("pot-mass-in");
var heiIn = document.getElementById("height-in");
var potCalcBtn = document.getElementById("pot-calc");
var potOutEl = document.getElementById("pot-out");

var potIn = document.getElementById("pot-in");
var kineIn = document.getElementById("kine-in");
var mechCalcBtn = document.getElementById("mech-calc");
var mechOutEl = document.getElementById("mech-out");

kineCalcBtn.addEventListener("click", calcKinetic);

function calcKinetic() {
  var massKine = parseInt(kineMass.value);
  var velocity = parseInt(veloIn.value);
  kineMass.value = "";
  veloIn.value = "";

  var kineEnergy = (massKine * velocity ** 2) / 2;
  kineEnergy = kineEnergy.toFixed(1);

  kineOutEl.innerHTML = `${kineEnergy} J`;
}

potCalcBtn.addEventListener("click", calcPotential);

function calcPotential() {
  var massPot = parseInt(potMass.value);
  var height = parseInt(heiIn.value);
  potMass.value = "";
  heiIn.value = "";

  var potEnergy = massPot * 9.8 * height;
  potEnergy = potEnergy.toFixed(1);

  potOutEl.innerHTML = `${potEnergy} J`;
}

mechCalcBtn.addEventListener("click", calcMechanical);

function calcMechanical() {
  var potential = parseInt(potIn.value);
  var kinetic = parseInt(kineIn.value);
  potIn.value = "";
  kineIn.value = "";

  var mechEnergy = kinetic + potential;
  mechEnergy = mechEnergy.toFixed(1);

  mechOutEl.innerHTML = `${mechEnergy} J`;
}
