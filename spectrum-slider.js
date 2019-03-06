function formatExp(number) {
  var scientificNotation = number.toExponential(4);
  return scientificNotation;
}
function formatNum(number) {
  var rounded = number.toPrecision(5);
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
  if (wavelength_m < 1e-11) {
    return 'Gamma ray';
  } else if (wavelength_m < 1e-8) {
    return 'X-ray';
  } else if (wavelength_m < 4e-7) {
    return 'Ultraviolet (UV)';
  } else if (wavelength_m < 7e-7) {
    return 'Visible';
  } else if (wavelength_m < 1e-3) {
    return 'Infrared (IR)';
  } else if (wavelength_m < 1e0) {
    return 'Microwave';
  } else if (wavelength_m >= 1e0) {
    return 'Radio wave';
  } else {
    return 'Unknown';
  }
}
function getSubClassification(wavelength_m) {
  if (wavelength_m < 1.24e-20) {
    return 'Ultra-high-energy gamma ray (UHEGR)';
  } else if (wavelength_m < 1.24e-17) {
    return 'Very-high-energy gamma ray (VHEGR)';
  } else if (wavelength_m < 1e-11) {
    return 'Gamma ray';
  } else if (wavelength_m < 1e-10) {
    return 'Hard X-ray';
  } else if (wavelength_m < 1e-8) {
    return 'Soft X-ray';
  } else if (wavelength_m < 1e-7) {
    return 'Extreme ultraviolet (EUV)';
  } else if (wavelength_m < 2.8e-7) {
    return 'Ultraviolet C (UVC)';
  } else if (wavelength_m < 3.15e-7) {
    return 'Ultraviolet B (UVB)';
  } else if (wavelength_m < 4e-7) {
    return 'Ultraviolet A (UVA)';
  } else if (wavelength_m < 4.5e-7) {
    return 'Violet';
  } else if (wavelength_m < 4.95e-7) {
    return 'Blue';
  } else if (wavelength_m < 5.7e-7) {
    return 'Green';
  } else if (wavelength_m < 5.9e-7) {
    return 'Yellow';
  } else if (wavelength_m < 6.2e-7) {
    return 'Orange';
  } else if (wavelength_m < 7.5e-7) {
    return 'Red';
  } else if (wavelength_m < 1.4e-6) {
    return 'Near-infrared (NIR)';
  } else if (wavelength_m < 3e-6) {
    return 'Short-wavelength infrared (SWIR)';
  } else if (wavelength_m < 8e-6) {
    return 'Mid-wavelength infrared (MWIR)';
  } else if (wavelength_m < 1.5e-5) {
    return 'Long-wavelength infrared (LWIR)';
  } else if (wavelength_m < 1e-3) {
    return 'Far infrared (FIR)';
  } else if (wavelength_m < 2.7e-3) {
    return 'Microwave (mm band)';
  } else if (wavelength_m < 4.0e-3) {
    return 'W band microwave';
  } else if (wavelength_m < 7.5e-3) {
    return 'V band microwave';
  } else if (wavelength_m < 1.1e-2) {
    return 'Ka band microwave';
  } else if (wavelength_m < 1.7e-2) {
    return 'K band microwave';
  } else if (wavelength_m < 2.5e-2) {
    return 'Ku band microwave';
  } else if (wavelength_m < 3.8e-2) {
    return 'X band microwave';
  } else if (wavelength_m < 7.5e-2) {
    return 'C band microwave';
  } else if (wavelength_m < 1.5e-1) {
    return 'S band microwave';
  } else if (wavelength_m < 3.0e-1) {
    return 'L band microwave';
  } else if (wavelength_m < 1e0) {
    return 'Ultra high frequency (UHF) radio';
  } else if (wavelength_m < 1e1) {
    return 'Very high frequency (VHF) radio';
  } else if (wavelength_m < 1e2) {
    return 'High frequency (HF) radio';
  } else if (wavelength_m < 1e3) {
    return 'Medium frequency (MF) radio';
  } else if (wavelength_m < 1e4) {
    return 'Low frequency (LF) radio';
  } else if (wavelength_m < 1e5) {
    return 'Very low frequency (VLF) radio';
  } else if (wavelength_m < 1e6) {
    return 'Ultra low frequency (ULF) radio';
  } else if (wavelength_m < 1e7) {
    return 'Super low frequency (SLF) radio';
  } else if (wavelength_m < 1e8) {
    return 'Extremely low frequency (ELF) radio';
  } else if (wavelength_m >= 1e8) {
    return 'Undesignated subradio frequency';
  } else {
    return 'Unknown';
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

  var frequency_MHz = frequency * 1e-6;
  updateValue('frequency_mhz', formatNum(frequency_MHz));

  var frequency_GHz = frequency * 1e-9;
  updateValue('frequency_ghz', formatNum(frequency_GHz));

  var period = wavelength / c;
  updateValue('period', formatExp(period));

  var period_fs = frequency * 1e-15;
  updateValue('period_fs', formatNum(period_fs));

  const h = 6.62607e-34; // kg m^2 / s
  var energy_J = h * frequency;
  updateValue('energy_J', formatExp(energy_J));

  const J_to_eV = 6.2415091e+18;
  var energy_eV = energy_J * J_to_eV;
  updateValue('energy_eV', formatNum(energy_eV));

  var energy_keV = energy_eV * 1e-3;
  updateValue('energy_keV', formatNum(energy_keV));

  const eV_to_rydberg = 1.0 / (13.605693009);
  // https://physics.nist.gov/cgi-bin/cuu/Value?rydhcev
  var energy_rydberg = energy_eV * eV_to_rydberg;
  updateValue('energy_rydberg', formatNum(energy_rydberg));

  const eV_to_hartree = 1.0 / (27.21138602);
  // https://physics.nist.gov/cgi-bin/cuu/Value?hrev
  var energy_hartree = energy_eV * eV_to_hartree;
  updateValue('energy_hartree', formatNum(energy_hartree));

  const eV_to_amu = 1.0735441105e-9;
  // https://physics.nist.gov/cgi-bin/cuu/Value?evu
  var energy_amu = energy_eV * eV_to_amu;
  updateValue('energy_amu', formatNum(energy_amu));

  var momentum = h / wavelength;
  updateValue('momentum', formatExp(momentum));

  const kg_m_s_to_eV_c = 1.8711574e+27;

  // Same as eV, but still good to know.
  var momentum_eV_c = momentum * kg_m_s_to_eV_c;
  updateValue('momentum_eV_c', formatNum(momentum_eV_c));

  var wavenumber_angular = 2 * Math.PI / wavelength;
  updateValue('wavenumber_angular', formatExp(wavenumber_angular));

  var wavenumber_linear = 1.0 / wavelength;
  const inv_m_to_inv_cm = 0.01;
  var wavenumber_linear_inv_cm = wavenumber_linear * inv_m_to_inv_cm;
  updateValue('wavenumber_spectroscopic', formatExp(wavenumber_linear_inv_cm));

  // https://physics.nist.gov/cgi-bin/cuu/Value?bwien
  const b = 2.8977729e-3; // m K
  var temp_blackbody_peak = b / wavelength;
  updateValue('temp_blackbody_peak', formatNum(temp_blackbody_peak));

  var temp_blackbody_peak_C = K_to_C(temp_blackbody_peak);
  updateValue('temp_blackbody_peak_C', formatNum(temp_blackbody_peak_C));

  var temp_blackbody_peak_F = C_to_F(temp_blackbody_peak_C);
  updateValue('temp_blackbody_peak_F', formatNum(temp_blackbody_peak_F));

  // https://physics.nist.gov/cgi-bin/cuu/Value?k
  var k_b = 1.38064852e-23; // J/K
  var temp_ideal_gas = (2.0 / 3.0) * h * c / (wavelength * k_b);
  updateValue('temp_ideal_gas', formatNum(temp_ideal_gas));

  var temp_ideal_gas_C = K_to_C(temp_ideal_gas);
  updateValue('temp_ideal_gas_C', formatNum(temp_ideal_gas_C));

  var temp_ideal_gas_F = C_to_F(temp_ideal_gas_C);
  updateValue('temp_ideal_gas_F', formatNum(temp_ideal_gas_F));

  updateValue('classification', getClassification(wavelength));

  updateValue('subclassification', getSubClassification(wavelength));
}

window.onload = function() {
  calculate();
  document.getElementById('slider').addEventListener('input', calculate);
}
