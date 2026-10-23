/*! © 2026 ΑΝΩ ΠΟΛΙΤΕΙΑ · ipoliteia.gr · SPDX-License-Identifier: AGPL-3.0-or-later · Κείμενα: CC BY-NC-ND 4.0 · Όνομα και Δωδεκάπλευρο: με επιφύλαξη παντός δικαιώματος · βλ. /COPYRIGHT.md */
// Directed, source-node routing. No geometric junction snapping or off-road shortcuts.
export function createRoadGraph(data) {
  if (!Array.isArray(data.nodes) || !Array.isArray(data.edges)) throw new Error('Missing road network.');
  const outgoing = Array.from(data.nodes, () => []);
  data.edges.forEach((edge, index) => {
    if (!outgoing[edge.from] || !outgoing[edge.to] || !Number.isFinite(edge.length) || edge.length <= 0) throw new Error('Invalid road edge.');
    outgoing[edge.from].push(index);
  });
  const restrictions = new Map();
  for (const r of data.restrictions || []) {
    const key = `${r.via}|${r.fromWay}`;
    if (!restrictions.has(key)) restrictions.set(key, []);
    restrictions.get(key).push(r);
  }
  return { ...data, outgoing, turnRules: restrictions };
}

class MinHeap {
  items = [];
  push(item) {
    let i = this.items.length;
    this.items.push(item);
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.items[p].score <= item.score) break;
      this.items[i] = this.items[p]; i = p;
    }
    this.items[i] = item;
  }
  pop() {
    const first = this.items[0], last = this.items.pop();
    if (!this.items.length) return first;
    let i = 0;
    while (2 * i + 1 < this.items.length) {
      let c = 2 * i + 1;
      if (c + 1 < this.items.length && this.items[c + 1].score < this.items[c].score) c++;
      if (last.score <= this.items[c].score) break;
      this.items[i] = this.items[c]; i = c;
    }
    this.items[i] = last;
    return first;
  }
}

export function findRoute(graph, from, to) {
  if (!graph.nodes[from] || !graph.nodes[to]) throw new Error('Invalid route endpoint.');
  if (from === to) return { edges: [], length: 0, nodes: [from] };
  const target = graph.nodes[to];
  const heuristic = n => Math.hypot(graph.nodes[n].x - target.x, graph.nodes[n].z - target.z);
  const keyOf = (node, way) => `${node}|${way}`;
  const startKey = keyOf(from, '');
  const queue = new MinHeap(), costs = new Map([[startKey, 0]]), previous = new Map();
  queue.push({ node: from, way: '', key: startKey, cost: 0, score: heuristic(from) });
  while (queue.items.length) {
    const current = queue.pop();
    if (current.cost !== costs.get(current.key)) continue;
    if (current.node === to) {
      const edges = []; let key = current.key;
      while (previous.has(key)) { const p = previous.get(key); edges.push(p.edge); key = p.key; }
      edges.reverse();
      return { edges, length: current.cost, nodes: [from, ...edges.map(i => graph.edges[i].to)] };
    }
    const rules = graph.turnRules.get(keyOf(current.node, current.way)) || [];
    const only = rules.filter(r => r.only);
    for (const index of graph.outgoing[current.node]) {
      const edge = graph.edges[index], way = String(edge.wayId ?? index);
      if (only.length && !only.some(r => String(r.toWay) === way)) continue;
      if (rules.some(r => !r.only && String(r.toWay) === way)) continue;
      const key = keyOf(edge.to, way), cost = current.cost + edge.length;
      if (cost >= (costs.get(key) ?? Infinity)) continue;
      costs.set(key, cost); previous.set(key, { key: current.key, edge: index });
      queue.push({ node: edge.to, way, key, cost, score: cost + heuristic(edge.to) });
    }
  }
  return null;
}

export function routeSegments(graph, route) {
  let distance = 0;
  return route.edges.map(index => {
    const edge = graph.edges[index], a = graph.nodes[edge.from], b = graph.nodes[edge.to];
    const length = Math.hypot(b.x - a.x, b.z - a.z);
    const segment = { a, b, edge, length, start: distance, end: distance + length };
    distance += length;
    return segment;
  });
}

export function sampleRoute(segments, distance) {
  if (!segments.length) return null;
  let low = 0, high = segments.length - 1;
  while (low < high) { const mid = (low + high) >> 1; if (segments[mid].end < distance) low = mid + 1; else high = mid; }
  const s = segments[low], t = Math.max(0, Math.min(1, (distance - s.start) / s.length));
  return { x: s.a.x + (s.b.x - s.a.x) * t, z: s.a.z + (s.b.z - s.a.z) * t, dx: (s.b.x - s.a.x) / s.length, dz: (s.b.z - s.a.z) / s.length, segment: low, edge: s.edge, t };
}
