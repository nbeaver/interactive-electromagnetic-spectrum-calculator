function formatNumber(number) {
  var rounded = number.toPrecision(4);
  var scientificNotation = Number.parseFloat(rounded).toExponential();
  return scientificNotation;
}

function updateValue(id, string) {
  var element = document.getElementById(id);
  element.value = string;
}

function calculate() {
  var slider_value = parseFloat(document.getElementById('slider').value);

  var wavelength = Math.pow(10.0, slider_value);
  updateValue('wavelength', formatNumber(wavelength));

  const m_to_nm = 1e+9;
  var wavelength_nm = wavelength * m_to_nm;
  updateValue('wavelength_nm', wavelength_nm.toPrecision(4));

  const m_to_angstrom = 1e+10;
  var wavelength_angstrom = wavelength * m_to_angstrom;
  updateValue('wavelength_angstrom', wavelength_angstrom.toPrecision(4));

  const c = 299792458; // m/s

  var frequency = c / wavelength;
  updateValue('frequency', formatNumber(frequency));

  const h = 6.62607e-34; // kg m^2 / s
  var energy_J = h * frequency;
  updateValue('energy_J', formatNumber(energy_J));

  const J_to_eV = 6.2415091e+18;
  var energy_eV = energy_J * J_to_eV;
  updateValue('energy_eV', energy_eV.toPrecision(4));

  var momentum = h / wavelength;
  updateValue('momentum', formatNumber(momentum));

  const kg_m_s_to_eV_c = 1.8711574e+27;

  // Same as eV, but still good to know.
  var momentum_eV_c = momentum * kg_m_s_to_eV_c;
  updateValue('momentum_eV_c', momentum_eV_c.toPrecision(4));

  var wavenumber = 2 * Math.PI / wavelength;
  updateValue('wavenumber', formatNumber(wavenumber));

  const inv_m_to_inv_cm = 0.01;
  var wavenumber_inv_cm = wavenumber * inv_m_to_inv_cm;
  updateValue('wavenumber_inv_cm', formatNumber(wavenumber_inv_cm));

}

window.onload = function() {
  calculate();
  document.getElementById('slider').addEventListener('input', calculate);
}
