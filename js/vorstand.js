/**
 * vorstand.js – Imkerverein Herdecke-Ende e.V.
 * Liest data/vorstand.txt und zeigt die Vorstandsmitglieder in [data-vorstand] an.
 *
 * Die Angaben stehen bewusst nicht im HTML: Die Datei ist per robots.txt und
 * .htaccess für Suchmaschinen gesperrt, und E-Mail-Adressen werden erst im
 * Browser zu Links zusammengesetzt (erschwert das Auslesen durch Spam-Bots).
 */

(function () {
  'use strict';

  var container = document.querySelector('[data-vorstand]');
  if (!container || !window.fetch) return;

  var FELDER = {
    amt: 'amt', posten: 'amt', funktion: 'amt',
    name: 'name',
    'e-mail': 'email', email: 'email', mail: 'email',
    telefon: 'telefon', tel: 'telefon', handy: 'telefon'
  };

  function parse(text) {
    var liste = [];
    var aktuell = null;

    function abschliessen() {
      if (aktuell && aktuell.amt) liste.push(aktuell);
      aktuell = null;
    }

    String(text).replace(/\r/g, '').split('\n').forEach(function (zeile) {
      var t = zeile.trim();
      if (t.charAt(0) === '#') return;
      if (t === '') { abschliessen(); return; }
      var m = t.match(/^([A-Za-zÄÖÜäöü-]+)\s*:\s*(.*)$/);
      var feld = m && FELDER[m[1].toLowerCase()];
      if (!feld) return;
      if (feld === 'amt' && aktuell && aktuell.amt) abschliessen(); // fehlende Leerzeile
      aktuell = aktuell || {};
      aktuell[feld] = m[2].trim();
    });
    abschliessen();
    return liste;
  }

  function el(tag, klasse, text) {
    var e = document.createElement(tag);
    if (klasse) e.className = klasse;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function karte(p) {
    var card = el('div', 'vorstand-karte');
    card.setAttribute('role', 'listitem');
    card.appendChild(el('span', 'vorstand-karte__amt', p.amt));
    card.appendChild(el('span', 'vorstand-karte__name' + (p.name ? '' : ' vorstand-karte__name--leer'),
      p.name || 'wird ergänzt'));

    /* "name (at) domain" ebenfalls akzeptieren */
    var mail = (p.email || '').replace(/\s*\(at\)\s*/i, '@').replace(/\s/g, '');
    if (/^[^@]+@[^@]+\.[^@]+$/.test(mail)) {
      var a = el('a', 'vorstand-karte__kontakt', mail);
      a.href = 'mailto:' + mail;
      card.appendChild(a);
    }

    var tel = p.telefon || '';
    if (tel) {
      var t = el('a', 'vorstand-karte__kontakt', tel);
      t.href = 'tel:' + tel.replace(/[^\d+]/g, '');
      card.appendChild(t);
    }
    return card;
  }

  fetch('data/vorstand.txt', { cache: 'no-cache' })
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.text();
    })
    .then(function (text) {
      var liste = parse(text);
      if (!liste.length) return;
      container.textContent = '';
      liste.forEach(function (p) { container.appendChild(karte(p)); });
    })
    .catch(function () { /* Hinweistext im HTML bleibt stehen */ });
})();
