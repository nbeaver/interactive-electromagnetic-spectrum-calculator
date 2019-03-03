function formatNumber(number) {
  var rounded = number.toPrecision(4);
  var scientificNotation = Number.parseFloat(rounded).toExponential();
  return scientificNotation;
}

function calculate() {
  var slider_value = parseFloat(document.getElementById('slider').value);

  var wavelength = Math.pow(10.0, slider_value);
  document.getElementById('wavelength').value = formatNumber(wavelength);

  const m_to_nm = 1e+9;
  var wavelength_nm = wavelength * m_to_nm;
  document.getElementById('wavelength_nm').value = wavelength_nm.toPrecision(4);

  const m_to_angstrom = 1e+10;
  var wavelength_angstrom = wavelength * m_to_angstrom;
  document.getElementById('wavelength_angstrom').value = wavelength_angstrom.toPrecision(4);

  const c = 299792458; // m/s

  var frequency = c / wavelength;
  document.getElementById('frequency').value = formatNumber(frequency);

  const h = 6.62607e-34; // kg m^2 / s
  var energy_J = h * frequency;
  document.getElementById('energy_J').value = formatNumber(energy_J);

  const J_to_eV = 6.2415091e+18;
  var energy_eV = energy_J * J_to_eV;
  document.getElementById('energy_eV').value = energy_eV.toPrecision(4);

  var momentum = h / wavelength;
  document.getElementById('momentum').value = formatNumber(momentum);

  const kg_m_s_to_eV_c = 1.8711574e+27;

  // Same as eV, but still good to know.
  var momentum_eV_c = momentum * kg_m_s_to_eV_c;
  document.getElementById('momentum_eV_c').value = momentum_eV_c.toPrecision(4);

  var wavenumber = 2 * Math.PI / wavelength;
  document.getElementById('wavenumber').value = formatNumber(wavenumber);

  const inv_m_to_inv_cm = 0.01;
  var wavenumber_inv_cm = wavenumber * inv_m_to_inv_cm;
  document.getElementById('wavenumber_inv_cm').value = formatNumber(wavenumber_inv_cm);

}

window.onload = function() {
  calculate();
  document.getElementById('slider').addEventListener('input', calculate);
}
