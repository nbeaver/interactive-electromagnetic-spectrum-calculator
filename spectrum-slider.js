function formatNumber(number) {
  var rounded = number.toPrecision(4);
  var scientificNotation = Number.parseFloat(rounded).toExponential();
  return scientificNotation;
}

function calculate() {
  var slider_value = parseFloat(document.getElementById("slider").value);

  var wavelength = Math.pow(10.0, slider_value);
  document.getElementById("wavelength").value = formatNumber(wavelength);

  const c = 299792458; // m/s

  var frequency = c / wavelength;
  document.getElementById("frequency").value = formatNumber(frequency);

}

window.onload = function() {
  calculate();
  document.getElementById("slider").addEventListener("input", calculate);
}
