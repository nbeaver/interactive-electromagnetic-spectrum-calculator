function formatExp(number) {
  var rounded = number.toPrecision(4);
  var scientificNotation = Number.parseFloat(rounded).toExponential();
  return scientificNotation;
}
function formatNum(number) {
  var rounded = number.toPrecision(4);
  return rounded;
}

function updateValue(id, string) {
  var element = document.getElementById(id);
  element.value = string;
}

function K_to_C(temp_K) {
  return temp_K - 273.15;
}
function C_to_F(temp_C) {
  return (temp_C * 1.8) + 32.0;
}

function getClassification(wavelength_m) {
  if        (wavelength_m < 1e-11 ) {
    return 'Gamma ray'
  } else if (wavelength_m < 1e-8 ) {
    return 'X-ray'
  } else if (wavelength_m < 4e-7 ) {
    return 'Ultraviolet (UV)'
  } else if (wavelength_m < 7e-7 ) {
    return 'Visible'
  } else if (wavelength_m < 1e-3 ) {
    return 'Infrared (IR)'
  } else if (wavelength_m < 1e0 ) {
    return 'Microwave'
  } else if (wavelength_m >= 1e0 ) {
    return 'Radio wave'
  } else {
    return 'Unknown'
  }
}

function calculate() {
  var slider_value = parseFloat(document.getElementById('slider').value);

  var wavelength = Math.pow(10.0, slider_value);
  updateValue('wavelength', formatExp(wavelength));

  const m_to_nm = 1e+9;
  var wavelength_nm = wavelength * m_to_nm;
  updateValue('wavelength_nm', formatNum(wavelength_nm));

  const m_to_angstrom = 1e+10;
  var wavelength_angstrom = wavelength * m_to_angstrom;
  updateValue('wavelength_angstrom', formatNum(wavelength_angstrom));

  const c = 299792458; // m/s

  var frequency = c / wavelength;
  updateValue('frequency', formatExp(frequency));

  const h = 6.62607e-34; // kg m^2 / s
  var energy_J = h * frequency;
  updateValue('energy_J', formatExp(energy_J));

  const J_to_eV = 6.2415091e+18;
  var energy_eV = energy_J * J_to_eV;
  updateValue('energy_eV', formatNum(energy_eV));

  var momentum = h / wavelength;
  updateValue('momentum', formatExp(momentum));

  const kg_m_s_to_eV_c = 1.8711574e+27;

  // Same as eV, but still good to know.
  var momentum_eV_c = momentum * kg_m_s_to_eV_c;
  updateValue('momentum_eV_c', formatNum(momentum_eV_c));

  var wavenumber = 2 * Math.PI / wavelength;
  updateValue('wavenumber', formatExp(wavenumber));

  const inv_m_to_inv_cm = 0.01;
  var wavenumber_inv_cm = wavenumber * inv_m_to_inv_cm;
  updateValue('wavenumber_inv_cm', formatExp(wavenumber_inv_cm));

  // https://physics.nist.gov/cgi-bin/cuu/Value?bwien
  const b = 2.8977729e-3; // m K
  var temp_blackbody_peak = b / wavelength;
  updateValue('temp_blackbody_peak', formatNum(temp_blackbody_peak));

  var temp_blackbody_peak_C = K_to_C(temp_blackbody_peak);
  updateValue('temp_blackbody_peak_C', formatNum(temp_blackbody_peak_C));

  var temp_blackbody_peak_F = C_to_F(temp_blackbody_peak_C);
  updateValue('temp_blackbody_peak_F', formatNum(temp_blackbody_peak_F));

  // https://physics.nist.gov/cgi-bin/cuu/Value?k
  var k_b = 1.38064852e-23 // J/K
  var temp_ideal_gas = (2.0/3.0)*h*c/(wavelength*k_b);
  updateValue('temp_ideal_gas', formatNum(temp_ideal_gas));

  var temp_ideal_gas_C = K_to_C(temp_ideal_gas);
  updateValue('temp_ideal_gas_C', formatNum(temp_ideal_gas_C));

  var temp_ideal_gas_F = C_to_F(temp_ideal_gas_C);
  updateValue('temp_ideal_gas_F', formatNum(temp_ideal_gas_F));

  updateValue('classification', getClassification(wavelength));
}

window.onload = function() {
  calculate();
  document.getElementById('slider').addEventListener('input', calculate);
}
