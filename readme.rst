Link to the spectrum calculator
-------------------------------

https://nbeaver.github.io/interactive-electromagnetic-spectrum-calculator

What is this useful for?
------------------------

- An interactive version of an `electromagnetic spectrum`_ chart (`nomogram`_).

- Order of magnitude calculations.

- Quickly calculates some scalar quantities for a single photon
  (frequency, wavelength, energy, wavenumber, momentum, and "temperature").

.. _electromagnetic spectrum: https://en.wikipedia.org/wiki/Electromagnetic_spectrum
.. _nomogram: https://en.wikipedia.org/wiki/Nomogram

Why these quantities and not others?
------------------------------------

This is intended to be an extension of the electromagnetic spectrum charts,
so it focuses on spectroscopic quantities of a single photon.
This limits the scope
and avoids the introduction of additional parameters to vary.

For example, another variable of interest for X-ray physics
would be the final wavelength of a photon after `Compton scattering`_:

.. math::
    \lambda - \lambda' = \frac{h}{m_e c} (1 - \cos{\theta})


but would require introducing another variable:
the scattering angle :math:`\theta`.

.. _Compton scattering: https://en.wikipedia.org/wiki/Compton_scattering
