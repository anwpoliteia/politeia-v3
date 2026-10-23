/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
// The host page owns the brand; standalone Noesis keeps its own identity.
if (window.self !== window.top && new URLSearchParams(window.location.search).get('embedded') === 'citizen') {
  document.documentElement.classList.add('atlas-embedded');
}
