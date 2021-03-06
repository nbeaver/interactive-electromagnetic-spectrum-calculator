function formatExp(number) {
  var nSigFig = document.getElementById('significant_figures').value;
  var scientificNotation = number.toExponential(nSigFig - 1);
  return scientificNotation;
}
function formatNum(number) {
  var nSigFig = document.getElementById('significant_figures').value;
  if (Math.abs(number) > 1e-3 && Math.abs(number) < 1e4) {
    var rounded = number.toPrecision(nSigFig);
  } else {
    var rounded = number.toExponential(nSigFig - 1);
  }
  return rounded;
}
function doNothing(input) {
  return input;
}

function K_to_C(temp_K) {
  return temp_K - 273.15;
}
function C_to_K(temp_C) {
  return temp_C + 273.15;
}
function F_to_K(tempF) {
  return ((tempF - 32.0) / 1.8) + 273.15;
}
function C_to_F(temp_C) {
  return (temp_C * 1.8) + 32.0;
}

function getClassification(wavelength_m) {
  if (wavelength_m < 1e-11) {
    return 'Gamma ray';
  } else if (wavelength_m < 1e-8) {
    return 'X-ray';
  } else if (wavelength_m < 3.8e-7) {
    return 'Ultraviolet (UV)';
  } else if (wavelength_m < 7.4e-7) {
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
  } else if (wavelength_m < 3.8e-7) {
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
  } else if (wavelength_m < 7.4e-7) {
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

function get_SI_prefix() {
  var radio_inputs = document.getElementsByName('si_prefix');
  for (var i = 0; i < radio_inputs.length; i++) {
    if (radio_inputs[i].checked) {
      return radio_inputs[i].value;
    }
  }
}

// https://physics.nist.gov/cgi-bin/cuu/Value?na
const N_A = 6.022140857e23; // 1/mol
const c = 299792458; // m/s
// https://physics.nist.gov/cgi-bin/cuu/Value?c
const h = 6.626070040e-34; // kg m^2 / s
// https://physics.nist.gov/cgi-bin/cuu/Value?h
const eV_to_J = 1.6021766208e-19;
// https://physics.nist.gov/cgi-bin/cuu/Value?tevj
const b = 2.8977729e-3; // m K
// https://physics.nist.gov/cgi-bin/cuu/Value?bwien
const b_freq = 5.8789238e10; // Hz / K
// https://physics.nist.gov/cgi-bin/cuu/Value?bpwien
const k_b = 1.38064852e-23; // J/K
// https://physics.nist.gov/cgi-bin/cuu/Value?k

const a_0 = 0.52917721067e-10; // m
// https://physics.nist.gov/cgi-bin/cuu/Value?bohrrada0

const prefix_value = {
  yotta: 1e24,
  zetta: 1e21,
  exa: 1e18,
  peta: 1e15,
  tera: 1e12,
  giga: 1e9,
  mega: 1e6,
  kilo: 1e3,
  hecto: 1e2,
  deca: 1e1,
  deci: 1e-1,
  centi: 1e-2,
  milli: 1e-3,
  micro: 1e-6,
  nano: 1e-9,
  pico: 1e-12,
  femto: 1e-15,
  atto: 1e-18,
  zepto: 1e-21,
  yocto: 1e-24
};

var LAST_SENDER = null;

function inputHandler(e) {
  var sender = e.srcElement;
  LAST_SENDER = sender;
  var wavelength = getWavelength(sender);
  updateValues(sender, wavelength);
}

function getWavelength(sender) {
  var sender_val = parseFloat(sender.value);
  if (sender.id === 'slider') {
    var slider_value = sender_val;
    var wavelength = Math.pow(10.0, slider_value);
  } else if (sender.id === 'wavelength') {
    var wavelength = sender_val;
  } else if (sender.id === 'wavelength_nm') {
    var wavelength_nm = sender_val;
    const nm_to_m = 1e-9;
    var wavelength = wavelength_nm * nm_to_m;
  } else if (sender.id === 'wavelength_angstrom') {
    var wavelength_angstrom = sender_val;
    const angstrom_to_m = 1e-10;
    var wavelength = wavelength_angstrom * angstrom_to_m;
  } else if (sender.id === 'wavelength_bohr_radius') {
    var wavelength_bohr_radius = sender_val;
    var wavelength = wavelength_bohr_radius * a_0;
  } else if (sender.id === 'wavelength_adjustable') {
    var wavelength_adjustable = sender_val;
    var prefix = document.getElementById('wavelength_prefix').value;
    var wavelength = wavelength_adjustable * prefix_value[prefix];
  } else if (sender.id === 'frequency') {
    var frequency = sender_val;
    var wavelength = c / frequency;
  } else if (sender.id === 'frequency_kilohertz') {
    var frequency_kHz = sender_val;
    const kHz_to_Hz = 1e3;
    var frequency = frequency_kHz * kHz_to_Hz;
    var wavelength = c / frequency;
  } else if (sender.id === 'frequency_megahertz') {
    var frequency_MHz = sender_val;
    const MHz_to_Hz = 1e6;
    var frequency = frequency_MHz * MHz_to_Hz;
    var wavelength = c / frequency;
  } else if (sender.id === 'frequency_gigahertz') {
    var frequency_GHz = sender_val;
    const GHz_to_Hz = 1e9;
    var frequency = frequency_GHz * GHz_to_Hz;
    var wavelength = c / frequency;
  } else if (sender.id === 'frequency_adjustable') {
    var frequency_adjustable = sender_val;
    var prefix = document.getElementById('frequency_prefix').value;
    var frequency = frequency_adjustable * prefix_value[prefix];
    var wavelength = c / frequency;
  } else if (sender.id === 'period') {
    var period = sender_val;
    var wavelength = period * c;
  } else if (sender.id === 'period_ns') {
    var period_ns = sender_val;
    const ns_to_s = 1e-9;
    var period = period_ns * ns_to_s;
    var wavelength = period * c;
  } else if (sender.id === 'period_fs') {
    var period_fs = sender_val;
    const fs_to_s = 1e-15;
    var period = period_fs * fs_to_s;
    var wavelength = period * c;
  } else if (sender.id === 'period_adjustable') {
    var period_adjustable = sender_val;
    var prefix = document.getElementById('period_prefix').value;
    var period = period_adjustable * prefix_value[prefix];
    var wavelength = period * c;
  } else if (sender.id === 'energy_J') {
    var energy_J = sender_val;
    var wavelength = h * c / energy_J;
  } else if (sender.id === 'energy_eV') {
    var energy_eV = sender_val;
    var energy_J = energy_eV * eV_to_J;
    var wavelength = h * c / energy_J;
  } else if (sender.id === 'energy_keV') {
    var energy_keV = sender_val;
    var energy_eV = energy_keV * 1e3;
    var energy_J = energy_eV * eV_to_J;
    var wavelength = h * c / energy_J;
  } else if (sender.id === 'energy_MeV') {
    var energy_MeV = sender_val;
    var energy_eV = energy_MeV * 1e6;
    var energy_J = energy_eV * eV_to_J;
    var wavelength = h * c / energy_J;
  } else if (sender.id === 'energy_ev_adjustable') {
    var energy_ev_adjustable = sender_val;
    var prefix = document.getElementById('energy_ev_prefix').value;
    var energy_eV = energy_ev_adjustable * prefix_value[prefix];
    var energy_J = energy_eV * eV_to_J;
    var wavelength = h * c / energy_J;
  } else if (sender.id === 'energy_rydberg') {
    var energy_rydberg = sender_val;
    const rydberg_to_J = 2.179872325e-18;
    // https://physics.nist.gov/cgi-bin/cuu/Value?rydhcj
    var energy_J = energy_rydberg * rydberg_to_J;
    var wavelength = h * c / energy_J;
    // TODO: use rdyberg constant directly?
    // https://physics.nist.gov/cgi-bin/cuu/Value?ryd
  } else if (sender.id === 'energy_hartree') {
    var energy_hartree = sender_val;
    const hartree_to_J = 4.3597446e-18;
    // https://physics.nist.gov/cgi-bin/cuu/Value?hrj
    var energy_J = energy_hartree * hartree_to_J;
    var wavelength = h * c / energy_J;
  } else if (sender.id === 'energy_amu') {
    var energy_amu = sender_val;
    const amu_to_J = 1.492418062e-10;
    // https://physics.nist.gov/cgi-bin/cuu/Value?uj
    var energy_J = energy_amu * amu_to_J;
    var wavelength = h * c / energy_J;
  } else if (sender.id === 'energy_kj_per_mol') {
    var energy_kj_per_mol = sender_val;
    var energy_kJ = energy_kj_per_mol / N_A;
    var energy_J = energy_kJ * 1e3;
    var wavelength = h * c / energy_J;
  } else if (sender.id === 'momentum') {
    var momentum = sender_val;
    var wavelength = h / momentum;
  } else if (sender.id === 'momentum_eV_c') {
    var momentum_eV_c = sender_val;
    var momentum = momentum_eV_c * 5.3442859e-28;
    // TODO: is this sufficiently precise?
    var wavelength = h / momentum;
  } else if (sender.id === 'wavenumber_angular') {
    var wavenumber_angular = sender_val;
    var wavelength = 2 * Math.PI / wavenumber_angular;
  } else if (sender.id === 'wavenumber_spectroscopic') {
    var wavenumber_linear_inv_cm = sender_val;
    var wavenumber_linear = wavenumber_linear_inv_cm * 100;
    var wavelength = 1.0 / wavenumber_linear;
  } else if (sender.id === 'temp_lambda_peak') {
    var temp_lambda_peak = sender_val;
    var wavelength = b / temp_lambda_peak;
  } else if (sender.id === 'temp_lambda_peak_C') {
    var temp_lambda_peak_C = sender_val;
    var temp_lambda_peak = C_to_K(temp_lambda_peak_C);
    var wavelength = b / temp_lambda_peak;
  } else if (sender.id === 'temp_lambda_peak_F') {
    var temp_lambda_peak_F = sender_val;
    var temp_lambda_peak = F_to_K(temp_lambda_peak_F);
    var wavelength = b / temp_lambda_peak;
  } else if (sender.id === 'temp_freq_peak') {
    var temp_freq_peak = sender_val;
    var frequency = b_freq * temp_freq_peak;
    var wavelength = c / frequency;
  } else if (sender.id === 'temp_freq_peak_C') {
    var temp_freq_peak_C = sender_val;
    var temp_freq_peak = C_to_K(temp_freq_peak_C);
    var frequency = b_freq * temp_freq_peak;
    var wavelength = c / frequency;
  } else if (sender.id === 'temp_freq_peak_F') {
    var temp_freq_peak_F = sender_val;
    var temp_freq_peak = F_to_K(temp_freq_peak_F);
    var frequency = b_freq * temp_freq_peak;
    var wavelength = c / frequency;
  } else if (sender.id === 'temp_ideal_gas') {
    var temp_ideal_gas = sender_val;
    var wavelength = (2.0 / 3.0) * h * c / (temp_ideal_gas * k_b);
  } else if (sender.id === 'temp_ideal_gas_C') {
    var temp_ideal_gas_C = sender_val;
    var temp_ideal_gas = C_to_K(temp_ideal_gas_C);
    var wavelength = (2.0 / 3.0) * h * c / (temp_ideal_gas * k_b);
  } else if (sender.id === 'temp_ideal_gas_F') {
    var temp_ideal_gas_F = sender_val;
    var temp_ideal_gas = F_to_K(temp_ideal_gas_F);
    var wavelength = (2.0 / 3.0) * h * c / (temp_ideal_gas * k_b);
  } else if (sender.id === 'temp_vibrational') {
    var temp_vibrational = sender_val;
    var wavelength = h * c / (temp_vibrational * k_b);
  } else if (sender.id === 'temp_vibrational_C') {
    var temp_vibrational_C = sender_val;
    var temp_vibrational = C_to_K(temp_vibrational_C);
    var wavelength = h * c / (temp_vibrational * k_b);
  } else if (sender.id === 'temp_vibrational_F') {
    var temp_vibrational_F = sender_val;
    var temp_vibrational = F_to_K(temp_vibrational_F);
    var wavelength = h * c / (temp_vibrational * k_b);
  } else {
    console.log('Error: unknown ID: ' + sender.id);
  }
  return wavelength;
}

function optionChangeHandler(e) {
  var sender = e.srcElement;
  updateAdjustableUnit(sender);
}

function updateAdjustableUnit(optionElement) {
  var option_to_output = {
    wavelength_prefix: 'wavelength_adjustable_units',
    frequency_prefix: 'frequency_adjustable_units',
    period_prefix: 'period_adjustable_units',
    energy_ev_prefix: 'energy_ev_adjustable_units'
  };
  var option_to_input = {
    wavelength_prefix: 'wavelength_adjustable',
    frequency_prefix: 'frequency_adjustable',
    period_prefix: 'period_adjustable',
    energy_ev_prefix: 'energy_ev_adjustable'
  };
  var output_id = option_to_output[optionElement.id];
  var output_element = document.getElementById(output_id);
  var unit = getUnit(optionElement);
  output_element.value = unit;
  // TODO: is there a better way than recalculating everything?
  recalculate();
}

function getUnit(optionElement) {
  var prefix_symbol = {
    yotta: 'Y',
    zetta: 'Z',
    exa: 'E',
    peta: 'P',
    tera: 'T',
    giga: 'G',
    mega: 'M',
    kilo: 'k',
    hecto: 'h',
    deca: 'da',
    deci: 'd',
    centi: 'c',
    milli: 'm',
    micro: 'μ',
    nano: 'n',
    pico: 'p',
    femto: 'f',
    atto: 'a',
    zepto: 'z',
    yocto: 'y'
  };
  base_unit = {
    wavelength_prefix: 'm',
    frequency_prefix: 'Hz',
    period_prefix: 's',
    energy_ev_prefix: 'eV'
  };
  var prefix = optionElement.value;
  var unit = prefix_symbol[prefix] + base_unit[optionElement.id];
  return unit;
}

function updateValues(senderElement, wavelength) {

  var slider_value = Math.log10(wavelength);

  var adjustable_prefix = get_SI_prefix();

  const m_to_nm = 1e+9;
  var wavelength_nm = wavelength * m_to_nm;

  const m_to_angstrom = 1e+10;
  var wavelength_angstrom = wavelength * m_to_angstrom;

  var wavelength_bohr_radius = wavelength / a_0;

  var wavelength_prefix = document.getElementById('wavelength_prefix').value;
  var wavelength_adjustable = wavelength / prefix_value[wavelength_prefix];

  var frequency = c / wavelength;

  var frequency_kHz = frequency * 1e-3;

  var frequency_MHz = frequency * 1e-6;

  var frequency_GHz = frequency * 1e-9;

  var frequency_prefix = document.getElementById('frequency_prefix').value;
  var frequency_adjustable = frequency / prefix_value[frequency_prefix];

  var period = wavelength / c;

  var period_fs = period * 1e+15;

  var period_ns = period * 1e+9;

  var period_prefix = document.getElementById('period_prefix').value;
  var period_adjustable = period / prefix_value[period_prefix];

  var energy_J = h * frequency;

  const J_to_eV = 6.2415091e+18;
  var energy_eV = energy_J * J_to_eV;

  var energy_keV = energy_eV * 1e-3;

  var energy_MeV = energy_eV * 1e-6;

  var energy_ev_prefix = document.getElementById('energy_ev_prefix').value;
  var energy_ev_adjustable = energy_eV / prefix_value[energy_ev_prefix];

  const eV_to_rydberg = 1.0 / (13.605693009);
  // https://physics.nist.gov/cgi-bin/cuu/Value?rydhcev
  var energy_rydberg = energy_eV * eV_to_rydberg;

  const eV_to_hartree = 1.0 / (27.21138602);
  // https://physics.nist.gov/cgi-bin/cuu/Value?hrev
  var energy_hartree = energy_eV * eV_to_hartree;

  const eV_to_amu = 1.0735441105e-9;
  // https://physics.nist.gov/cgi-bin/cuu/Value?evu
  var energy_amu = energy_eV * eV_to_amu;

  var energy_kj_per_mol = energy_J * N_A * 1e-3;

  var momentum = h / wavelength;

  const kg_m_s_to_eV_c = 1.8711574e+27;
  // TODO: is this sufficiently precise?

  // Same as eV, but still good to know.
  var momentum_eV_c = momentum * kg_m_s_to_eV_c;

  var wavenumber_angular = 2 * Math.PI / wavelength;

  var wavenumber_linear = 1.0 / wavelength;
  const inv_m_to_inv_cm = 0.01;
  var wavenumber_linear_inv_cm = wavenumber_linear * inv_m_to_inv_cm;

  var temp_lambda_peak = b / wavelength;

  var temp_lambda_peak_C = K_to_C(temp_lambda_peak);

  var temp_lambda_peak_F = C_to_F(temp_lambda_peak_C);

  var temp_freq_peak = frequency / b_freq;

  var temp_freq_peak_C = K_to_C(temp_freq_peak);

  var temp_freq_peak_F = C_to_F(temp_freq_peak_C);

  var temp_ideal_gas = (2.0 / 3.0) * h * c / (wavelength * k_b);

  var temp_ideal_gas_C = K_to_C(temp_ideal_gas);

  var temp_ideal_gas_F = C_to_F(temp_ideal_gas_C);

  var temp_vibrational = h * c / (wavelength * k_b);

  var temp_vibrational_C = K_to_C(temp_vibrational);

  var temp_vibrational_F = C_to_F(temp_vibrational_C);

  var classification = getClassification(wavelength);

  var subclassification = getSubClassification(wavelength);

  var map = {};
  map['slider'] = slider_value;
  map['wavelength'] = wavelength;
  map['wavelength_nm'] = wavelength_nm;
  map['wavelength_angstrom'] = wavelength_angstrom;
  map['wavelength_bohr_radius'] = wavelength_bohr_radius;
  map['wavelength_adjustable'] = wavelength_adjustable;
  map['frequency'] = frequency;
  map['frequency_kilohertz'] = frequency_kHz;
  map['frequency_megahertz'] = frequency_MHz;
  map['frequency_gigahertz'] = frequency_GHz;
  map['frequency_adjustable'] = frequency_adjustable;
  map['period'] = period;
  map['period_fs'] = period_fs;
  map['period_ns'] = period_ns;
  map['period_adjustable'] = period_adjustable;
  map['energy_J'] = energy_J;
  map['energy_eV'] = energy_eV;
  map['energy_keV'] = energy_keV;
  map['energy_MeV'] = energy_MeV;
  map['energy_ev_adjustable'] = energy_ev_adjustable;
  map['energy_rydberg'] = energy_rydberg;
  map['energy_hartree'] = energy_hartree;
  map['energy_amu'] = energy_amu;
  map['energy_kj_per_mol'] = energy_kj_per_mol;
  map['momentum'] = momentum;
  map['momentum_eV_c'] = momentum_eV_c;
  map['wavenumber_angular'] = wavenumber_angular;
  map['wavenumber_spectroscopic'] = wavenumber_linear_inv_cm;
  map['temp_lambda_peak'] = temp_lambda_peak;
  map['temp_lambda_peak_C'] = temp_lambda_peak_C;
  map['temp_lambda_peak_F'] = temp_lambda_peak_F;
  map['temp_freq_peak'] = temp_freq_peak;
  map['temp_freq_peak_C'] = temp_freq_peak_C;
  map['temp_freq_peak_F'] = temp_freq_peak_F;
  map['temp_ideal_gas'] = temp_ideal_gas;
  map['temp_ideal_gas_C'] = temp_ideal_gas_C;
  map['temp_ideal_gas_F'] = temp_ideal_gas_F;
  map['temp_vibrational'] = temp_vibrational;
  map['temp_vibrational_C'] = temp_vibrational_C;
  map['temp_vibrational_F'] = temp_vibrational_F;
  map['classification'] = classification;
  map['subclassification'] = subclassification;

  var formatChoice = {};
  formatChoice['slider'] = doNothing;
  formatChoice['wavelength'] = formatExp;
  formatChoice['wavelength_nm'] = formatNum;
  formatChoice['wavelength_angstrom'] = formatNum;
  formatChoice['wavelength_bohr_radius'] = formatNum;
  formatChoice['wavelength_adjustable'] = formatNum;
  formatChoice['frequency'] = formatExp;
  formatChoice['frequency_kilohertz'] = formatNum;
  formatChoice['frequency_megahertz'] = formatNum;
  formatChoice['frequency_gigahertz'] = formatNum;
  formatChoice['frequency_adjustable'] = formatNum;
  formatChoice['period'] = formatExp;
  formatChoice['period_fs'] = formatNum;
  formatChoice['period_ns'] = formatNum;
  formatChoice['period_adjustable'] = formatNum;
  formatChoice['energy_J'] = formatExp;
  formatChoice['energy_eV'] = formatNum;
  formatChoice['energy_keV'] = formatNum;
  formatChoice['energy_MeV'] = formatNum;
  formatChoice['energy_ev_adjustable'] = formatNum;
  formatChoice['energy_rydberg'] = formatNum;
  formatChoice['energy_hartree'] = formatNum;
  formatChoice['energy_amu'] = formatNum;
  formatChoice['energy_kj_per_mol'] = formatNum;
  formatChoice['momentum'] = formatExp;
  formatChoice['momentum_eV_c'] = formatNum;
  formatChoice['wavenumber_angular'] = formatExp;
  formatChoice['wavenumber_spectroscopic'] = formatNum;
  formatChoice['temp_lambda_peak'] = formatNum;
  formatChoice['temp_lambda_peak_C'] = formatNum;
  formatChoice['temp_lambda_peak_F'] = formatNum;
  formatChoice['temp_freq_peak'] = formatNum;
  formatChoice['temp_freq_peak_C'] = formatNum;
  formatChoice['temp_freq_peak_F'] = formatNum;
  formatChoice['temp_ideal_gas'] = formatNum;
  formatChoice['temp_ideal_gas_C'] = formatNum;
  formatChoice['temp_ideal_gas_F'] = formatNum;
  formatChoice['temp_vibrational'] = formatNum;
  formatChoice['temp_vibrational_C'] = formatNum;
  formatChoice['temp_vibrational_F'] = formatNum;
  formatChoice['classification'] = doNothing;
  formatChoice['subclassification'] = doNothing;

  var rounding_on = document.getElementById('rounding_on').checked;

  for (var elementID in map) {
    if (elementID !== senderElement.id) {
      var element = document.getElementById(elementID);
      var formatFunc = formatChoice[elementID];
      var rawValue = map[elementID];
      if (rounding_on === true) {
        element.value = formatFunc(rawValue);
      } else {
        element.value = rawValue;
      }
    }
  }
}

function recalculate() {
  var sender = LAST_SENDER;
  if (sender == null) {
    sender = document.getElementById('wavelength');
  }
  var wavelength = getWavelength(sender);
  updateValues(sender, wavelength);
}

function dragstart_handler(ev) {
  var dragDiv = ev.currentTarget;
  ev.dataTransfer.setData('text/plain', dragDiv.id);
  ev.dataTransfer.setData('application/x-moz-node', dragDiv);
}
function dragover_handler(ev) {
  var targetTR = ev.currentTarget;
  // Prevent default to allow drop.
  ev.preventDefault();
}
function dragenter_handler(ev) {
  ev.preventDefault();
  var targetTR = ev.currentTarget;
  // Highlight potential drop target when the draggable element enters it.
  targetTR.style.background = 'yellow';
}
function dragleave_handler(ev) {
  ev.preventDefault();
  var targetTR = ev.currentTarget;
  // Reset background of drop target when the draggable element leaves it.
  targetTR.style.background = '';
}
function drop_handler(ev) {
  // Prevent default action (open as link for some elements).
  ev.preventDefault();
  // Get the target row.
  var targetTR = ev.currentTarget;
  // Reset background of drop target.
  targetTR.style.background = '';
  var tbody = targetTR.parentElement;
  var sourceId = ev.dataTransfer.getData('text/plain');
  var sourceDiv = document.getElementById(sourceId);
  var sourceTD = sourceDiv.parentElement;
  var sourceTR = sourceTD.parentElement;
  if (sourceTR === targetTR) {
    // Do nothing.
    return;
  } else {
    // Move the row.
    tbody.insertBefore(sourceTR, targetTR);
  }
}

function initialize() {
  var slider = document.getElementById('slider');
  var initial_wavelength = 1; // meter
  updateValues(slider, initial_wavelength);
}

window.onload = function() {
  initialize();

  var input_elements = document.getElementsByClassName('quantity-input');
  for (var i = 0; i < input_elements.length; i++) {
    var input_element = input_elements[i];
    input_element.addEventListener('input', inputHandler);
  }
  var slider_element = document.getElementById('slider');
  slider_element.addEventListener('input', inputHandler);

  rounding_element = document.getElementById('rounding_on');
  rounding_element.addEventListener('change', recalculate);
  rounding_element = document.getElementById('significant_figures');
  rounding_element.addEventListener('change', recalculate);

  var radio_inputs = document.getElementsByName('si_prefix');
  var prefix_option_ids = new Array();
  prefix_option_ids.push('wavelength_prefix');
  prefix_option_ids.push('frequency_prefix');
  prefix_option_ids.push('period_prefix');
  prefix_option_ids.push('energy_ev_prefix');
  for (var i = 0; i < prefix_option_ids.length; i++) {
    var prefix_option = document.getElementById(prefix_option_ids[i]);
    updateAdjustableUnit(prefix_option);
    prefix_option.addEventListener('input', optionChangeHandler);
  }

  var drag_handles = document.getElementsByClassName('drag_handle');
  for (var i = 0; i < drag_handles.length; i++) {
    var drag_handle = drag_handles[i];
    drag_handle.ondragstart = dragstart_handler;
  }
  var dropzones = document.getElementsByClassName('dropzone');
  for (var i = 0; i < dropzones.length; i++) {
    var dropzone = dropzones[i];
    dropzone.ondragover = dragover_handler;
    dropzone.ondragenter = dragenter_handler;
    dropzone.ondragleave = dragleave_handler;
    dropzone.ondrop = drop_handler;
  }
}
