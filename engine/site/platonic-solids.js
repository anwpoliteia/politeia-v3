/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
(function () {
  'use strict';

  // All edges come from the shortest pairwise distance between regular vertices.
  // Faces are supporting planes of the convex hull, so rear edges remain accurate.
  const phi = (1 + Math.sqrt(5)) / 2;
  const signs = [-1, 1];
  const vertices = {
    tetrahedron: [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]],
    cube: signs.flatMap(x => signs.flatMap(y => signs.map(z => [x, y, z]))),
    octahedron: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
    icosahedron: signs.flatMap(a => signs.flatMap(b => [[0, a, b * phi], [a, b * phi, 0], [b * phi, 0, a]])),
    dodecahedron: [
      ...signs.flatMap(x => signs.flatMap(y => signs.map(z => [x, y, z]))),
      ...signs.flatMap(a => signs.flatMap(b => [[0, a / phi, b * phi], [a / phi, b * phi, 0], [b * phi, 0, a / phi]]))
    ]
  };
  const subtract = (a, b) => a.map((value, i) => value - b[i]);
  const dot = (a, b) => a.reduce((sum, value, i) => sum + value * b[i], 0);
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const epsilon = 1e-7;

  function buildGeometry(points) {
    const pairs = [];
    for (let a = 0; a < points.length; a++) {
      for (let b = a + 1; b < points.length; b++) {
        const delta = subtract(points[a], points[b]);
        pairs.push({ a, b, distance: dot(delta, delta) });
      }
    }
    const edgeLength = Math.min(...pairs.map(pair => pair.distance));
    const edges = pairs.filter(pair => Math.abs(pair.distance - edgeLength) < epsilon).map(pair => [pair.a, pair.b]);
    const faceMap = new Map();
    for (let a = 0; a < points.length - 2; a++) {
      for (let b = a + 1; b < points.length - 1; b++) {
        for (let c = b + 1; c < points.length; c++) {
          let normal = cross(subtract(points[b], points[a]), subtract(points[c], points[a]));
          const length = Math.sqrt(dot(normal, normal));
          if (length < epsilon) continue;
          normal = normal.map(value => value / length);
          const distances = points.map(point => dot(normal, subtract(point, points[a])));
          if (distances.some(value => value > epsilon) && distances.some(value => value < -epsilon)) continue;
          const indices = distances.flatMap((value, index) => Math.abs(value) < epsilon ? [index] : []);
          const key = indices.join(',');
          if (dot(normal, points[a]) < 0) normal = normal.map(value => -value);
          faceMap.set(key, { vertices: indices, normal });
        }
      }
    }
    return { vertices: points, edges, faces: [...faceMap.values()] };
  }

  const geometry = Object.fromEntries(Object.entries(vertices).map(([kind, points]) => [kind, buildGeometry(points)]));
  const metadata = Object.fromEntries(Object.entries(geometry).map(([kind, shape]) => [kind, {
    kind,
    vertices: shape.vertices.length,
    edges: shape.edges.length,
    faces: shape.faces.length
  }]));

  // Orthographic projection keeps every symbol legible at navigation sizes.
  const angles = {
    tetrahedron: [-0.18, 0.52, -0.05],
    cube: [-0.42, 0.60, 0],
    octahedron: [-0.25, 0.40, 0],
    icosahedron: [-0.18, 0.31, 0.08],
    dodecahedron: [-0.26, 0.37, -0.05]
  };
  function rotate(point, rotation) {
    const [ax, ay, az] = rotation;
    const [x, y, z] = point;
    const y1 = y * Math.cos(ax) - z * Math.sin(ax);
    const z1 = y * Math.sin(ax) + z * Math.cos(ax);
    const x2 = x * Math.cos(ay) + z1 * Math.sin(ay);
    const z2 = -x * Math.sin(ay) + z1 * Math.cos(ay);
    return [x2 * Math.cos(az) - y1 * Math.sin(az), x2 * Math.sin(az) + y1 * Math.cos(az), z2];
  }
  const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const round = value => Number(value.toFixed(3));
  const paths = Object.fromEntries(Object.entries(geometry).map(([kind, shape]) => {
    const rotation = angles[kind];
    const rotated = shape.vertices.map(point => rotate(point, rotation));
    const xs = rotated.map(point => point[0]);
    const ys = rotated.map(point => point[1]);
    const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
    const scale = 76 / Math.max(maxX - minX, maxY - minY);
    const projected = rotated.map(point => [round(50 + (point[0] - (minX + maxX) / 2) * scale), round(50 - (point[1] - (minY + maxY) / 2) * scale)]);
    const visibleFaces = shape.faces.filter(face => rotate(face.normal, rotation)[2] > epsilon);
    const front = [], back = [];
    shape.edges.forEach(([a, b]) => {
      const visible = visibleFaces.some(face => face.vertices.includes(a) && face.vertices.includes(b));
      (visible ? front : back).push(`M${projected[a].join(' ')}L${projected[b].join(' ')}`);
    });
    return [kind, { front: front.join(''), back: back.join('') }];
  }));

  function svg(kind, className = '') {
    if (!paths[kind]) return '';
    const path = paths[kind];
    return `<svg class="platonic-solid${className ? ` ${escape(className)}` : ''}" data-solid="${kind}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path class="solid-rear" d="${path.back}" opacity=".23"/><path class="solid-front" d="${path.front}"/></g></svg>`;
  }

  window.PoliteiaSolids = { svg, metadata, geometry };
})();
