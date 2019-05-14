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


Examples
--------

Cosmic background microwave radiation:

    **I'm looking at the physical properties of blackbodies. The graph shows the
    max of the CMB curve at about 2mm. The Wien displacement law claims T =
    k/λ, so T(Kelvin) ≃ 2.9/λ(mm). Therefore the CMB Temperature is 1.4 Kelvin.
    What's the trick here?**

    [ . . . ]

    What Wien's law tells you explicitly is where the energy emitted per unit
    time per unit area *per unit wavelength* peaks. This quantity is usually
    called "intensity". When you deal with intensity you are free decide
    whether you want to use wavelength units or frequency units

http://www.astro.ubc.ca/people/scott/faq_email.html

Similar websites
----------------

- http://halas.rice.edu/conversions
- http://scienceprimer.com/electromagnetic-spectrum
- http://www.ilpi.com/msds/ref/energyunits.html
- https://acswebcontent.acs.org/chemistry-in-context/suite/applets/ElectromagneticSpectrum/photonEMWapplet3.html
- https://convert.impopen.com/index.php
- https://www.olympus-lifescience.com/en/microscope-resource/primer/java/wavebasics/
- https://www.powertechnology.com/calculators
