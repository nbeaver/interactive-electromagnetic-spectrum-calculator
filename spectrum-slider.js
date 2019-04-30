function formatExp(number) {
  var scientificNotation = number.toExponential(4);
  return scientificNotation;
}
function formatNum(number) {
  if (Math.abs(number) > 1e-3 && Math.abs(number) < 1e3) {
    var rounded = number.toPrecision(5);
  } else {
    var rounded = number.toExponential(4);
  }
  return rounded;
}
function doNothing(input) {
  return input;
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

function inputHandler(e) {
  var sender = e.srcElement;
  var sender_val = parseFloat(sender.value);
  if (sender.id === 'slider') {
    var slider_value = sender_val;
    var wavelength = Math.pow(10.0, slider_value);
  } else {
    console.log("Error: unknown ID: " + sender.id);
  }
  updateValues(sender, wavelength)
}

function updateValues(senderElement, wavelength) {
  const m_to_nm = 1e+9;
  var wavelength_nm = wavelength * m_to_nm;

  const m_to_angstrom = 1e+10;
  var wavelength_angstrom = wavelength * m_to_angstrom;

  const c = 299792458; // m/s

  var frequency = c / wavelength;

  var frequency_kHz = frequency * 1e-3;

  var frequency_MHz = frequency * 1e-6;

  var frequency_GHz = frequency * 1e-9;

  var period = wavelength / c;

  var period_fs = period * 1e+15;

  var period_ns = period * 1e+9;

  const h = 6.62607e-34; // kg m^2 / s
  var energy_J = h * frequency;

  const J_to_eV = 6.2415091e+18;
  var energy_eV = energy_J * J_to_eV;

  var energy_keV = energy_eV * 1e-3;

  var energy_MeV = energy_eV * 1e-6;

  const eV_to_rydberg = 1.0 / (13.605693009);
  // https://physics.nist.gov/cgi-bin/cuu/Value?rydhcev
  var energy_rydberg = energy_eV * eV_to_rydberg;

  const eV_to_hartree = 1.0 / (27.21138602);
  // https://physics.nist.gov/cgi-bin/cuu/Value?hrev
  var energy_hartree = energy_eV * eV_to_hartree;

  const eV_to_amu = 1.0735441105e-9;
  // https://physics.nist.gov/cgi-bin/cuu/Value?evu
  var energy_amu = energy_eV * eV_to_amu;

  var momentum = h / wavelength;

  const kg_m_s_to_eV_c = 1.8711574e+27;

  // Same as eV, but still good to know.
  var momentum_eV_c = momentum * kg_m_s_to_eV_c;

  var wavenumber_angular = 2 * Math.PI / wavelength;

  var wavenumber_linear = 1.0 / wavelength;
  const inv_m_to_inv_cm = 0.01;
  var wavenumber_linear_inv_cm = wavenumber_linear * inv_m_to_inv_cm;

  // https://physics.nist.gov/cgi-bin/cuu/Value?bwien
  const b = 2.8977729e-3; // m K
  var temp_blackbody_peak = b / wavelength;

  var temp_blackbody_peak_C = K_to_C(temp_blackbody_peak);

  var temp_blackbody_peak_F = C_to_F(temp_blackbody_peak_C);

  // https://physics.nist.gov/cgi-bin/cuu/Value?k
  var k_b = 1.38064852e-23; // J/K
  var temp_ideal_gas = (2.0 / 3.0) * h * c / (wavelength * k_b);

  var temp_ideal_gas_C = K_to_C(temp_ideal_gas);

  var temp_ideal_gas_F = C_to_F(temp_ideal_gas_C);

  var classification = getClassification(wavelength);

  var subclassification = getSubClassification(wavelength);

  var map = {};
  map['wavelength'] = wavelength;
  map['wavelength_nm'] = wavelength_nm;
  map['wavelength_angstrom'] = wavelength_angstrom;
  map['frequency'] = frequency;
  map['frequency_khz'] = frequency_kHz;
  map['frequency_mhz'] = frequency_MHz;
  map['frequency_ghz'] = frequency_GHz;
  map['period'] = period;
  map['period_fs'] = period_fs;
  map['period_ns'] = period_ns;
  map['energy_J'] = energy_J;
  map['energy_eV'] = energy_eV;
  map['energy_keV'] = energy_keV;
  map['energy_MeV'] = energy_MeV;
  map['energy_rydberg'] = energy_rydberg;
  map['energy_hartree'] = energy_hartree;
  map['energy_amu'] = energy_amu;
  map['momentum'] = momentum;
  map['momentum_eV_c'] = momentum_eV_c;
  map['wavenumber_angular'] = wavenumber_angular;
  map['temp_blackbody_peak'] = temp_blackbody_peak;
  map['temp_blackbody_peak_C'] = temp_blackbody_peak_C;
  map['temp_blackbody_peak_F'] = temp_blackbody_peak_F;
  map['temp_ideal_gas'] = temp_ideal_gas;
  map['temp_ideal_gas_C'] = temp_ideal_gas_C;
  map['temp_ideal_gas_F'] = temp_ideal_gas_F;
  map['wavenumber_spectroscopic'] = wavenumber_linear_inv_cm;
  map['classification'] = classification;
  map['subclassification'] = subclassification;

  var formatChoice = {};
  formatChoice['wavelength'] = formatExp;
  formatChoice['wavelength_nm'] = formatNum;
  formatChoice['wavelength_angstrom'] = formatNum;
  formatChoice['frequency'] = formatExp;
  formatChoice['frequency_khz'] = formatNum;
  formatChoice['frequency_mhz'] = formatNum;
  formatChoice['frequency_ghz'] = formatNum;
  formatChoice['period'] = formatExp;
  formatChoice['period_fs'] = formatNum;
  formatChoice['period_ns'] = formatNum;
  formatChoice['energy_J'] = formatExp;
  formatChoice['energy_eV'] = formatNum;
  formatChoice['energy_keV'] = formatNum;
  formatChoice['energy_MeV'] = formatNum;
  formatChoice['energy_rydberg'] = formatNum;
  formatChoice['energy_hartree'] = formatNum;
  formatChoice['energy_amu'] = formatNum;
  formatChoice['momentum'] = formatExp;
  formatChoice['momentum_eV_c'] = formatNum;
  formatChoice['wavenumber_angular'] = formatExp;
  formatChoice['temp_blackbody_peak'] = formatNum;
  formatChoice['temp_blackbody_peak_C'] = formatNum;
  formatChoice['temp_blackbody_peak_F'] = formatNum;
  formatChoice['temp_ideal_gas'] = formatNum;
  formatChoice['temp_ideal_gas_C'] = formatNum;
  formatChoice['temp_ideal_gas_F'] = formatNum;
  formatChoice['wavenumber_spectroscopic'] = formatNum;
  formatChoice['classification'] = doNothing;
  formatChoice['subclassification'] = doNothing;

  for (var elementID in map) {
    var element = document.getElementById(elementID);
    var formatFunc = formatChoice[elementID];
    var rawValue = map[elementID];
    element.value = formatFunc(rawValue);
  }
}

function initialize() {
  var slider = document.getElementById('slider');
  var initial_wavelength = 1; // meter
  updateValues(slider, initial_wavelength);
}

window.onload = function() {
  initialize();

  var input_ids = new Array();
  input_ids.push('slider');
  for (var i = 0; i < input_ids.length; i++) {
    var input_element = document.getElementById(input_ids[i]);
    input_element.addEventListener('input', inputHandler);
  }
}
