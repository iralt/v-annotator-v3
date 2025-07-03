var i0 = Object.defineProperty;
var r0 = (r, x, n) => x in r ? i0(r, x, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[x] = n;
var U = (r, x, n) => r0(r, typeof x != "symbol" ? x + "" : x, n);
import { defineComponent as vt, computed as k, createElementBlock as G, openBlock as R, withModifiers as l0, createElementVNode as y, toDisplayString as Q, createBlock as xt, createCommentVNode as Ct, Fragment as Bt, renderList as At, ref as I, watch as tt, nextTick as nt, onMounted as zt, createVNode as g, resolveComponent as Y, withCtx as m, createTextVNode as P, normalizeStyle as Mt, unref as j } from "vue";
var e0 = typeof global == "object" && global && global.Object === Object && global, a0 = typeof self == "object" && self && self.Object === Object && self, Ut = e0 || a0 || Function("return this")(), mt = Ut.Symbol, Gt = Object.prototype, s0 = Gt.hasOwnProperty, u0 = Gt.toString, ft = mt ? mt.toStringTag : void 0;
function f0(r) {
  var x = s0.call(r, ft), n = r[ft];
  try {
    r[ft] = void 0;
    var i = !0;
  } catch {
  }
  var l = u0.call(r);
  return i && (x ? r[ft] = n : delete r[ft]), l;
}
var C0 = Object.prototype, B0 = C0.toString;
function h0(r) {
  return B0.call(r);
}
var D0 = "[object Null]", g0 = "[object Undefined]", Rt = mt ? mt.toStringTag : void 0;
function A0(r) {
  return r == null ? r === void 0 ? g0 : D0 : Rt && Rt in Object(r) ? f0(r) : h0(r);
}
function m0(r) {
  return r != null && typeof r == "object";
}
var F0 = "[object Symbol]";
function p0(r) {
  return typeof r == "symbol" || m0(r) && A0(r) == F0;
}
var v0 = /\s/;
function E0(r) {
  for (var x = r.length; x-- && v0.test(r.charAt(x)); )
    ;
  return x;
}
var y0 = /^\s+/;
function w0(r) {
  return r && r.slice(0, E0(r) + 1).replace(y0, "");
}
function Ot(r) {
  var x = typeof r;
  return r != null && (x == "object" || x == "function");
}
var Tt = NaN, b0 = /^[-+]0x[0-9a-f]+$/i, _0 = /^0b[01]+$/i, O0 = /^0o[0-7]+$/i, L0 = parseInt;
function It(r) {
  if (typeof r == "number")
    return r;
  if (p0(r))
    return Tt;
  if (Ot(r)) {
    var x = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = Ot(x) ? x + "" : x;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = w0(r);
  var n = _0.test(r);
  return n || O0.test(r) ? L0(r.slice(2), n ? 2 : 8) : b0.test(r) ? Tt : +r;
}
var wt = function() {
  return Ut.Date.now();
}, k0 = "Expected a function", S0 = Math.max, $0 = Math.min;
function W0(r, x, n) {
  var i, l, e, a, s, f, C = 0, B = !1, h = !1, A = !0;
  if (typeof r != "function")
    throw new TypeError(k0);
  x = It(x) || 0, Ot(n) && (B = !!n.leading, h = "maxWait" in n, e = h ? S0(It(n.maxWait) || 0, x) : e, A = "trailing" in n ? !!n.trailing : A);
  function L(E) {
    var N = i, o = l;
    return i = l = void 0, C = E, a = r.apply(o, N), a;
  }
  function u(E) {
    return C = E, s = setTimeout(W, x), B ? L(E) : a;
  }
  function v(E) {
    var N = E - f, o = E - C, it = x - N;
    return h ? $0(it, e - o) : it;
  }
  function b(E) {
    var N = E - f, o = E - C;
    return f === void 0 || N >= x || N < 0 || h && o >= e;
  }
  function W() {
    var E = wt();
    if (b(E))
      return J(E);
    s = setTimeout(W, v(E));
  }
  function J(E) {
    return s = void 0, A && i ? L(E) : (i = l = void 0, a);
  }
  function X() {
    s !== void 0 && clearTimeout(s), C = 0, i = f = l = s = void 0;
  }
  function F() {
    return s === void 0 ? a : J(wt());
  }
  function T() {
    var E = wt(), N = b(E);
    if (i = arguments, l = this, f = E, N) {
      if (s === void 0)
        return u(f);
      if (h)
        return clearTimeout(s), s = setTimeout(W, x), L(f);
    }
    return s === void 0 && (s = setTimeout(W, x)), a;
  }
  return T.cancel = X, T.flush = F, T;
}
const z = [];
for (let r = 0; r < 256; ++r)
  z.push((r + 256).toString(16).slice(1));
function M0(r, x = 0) {
  return (z[r[x + 0]] + z[r[x + 1]] + z[r[x + 2]] + z[r[x + 3]] + "-" + z[r[x + 4]] + z[r[x + 5]] + "-" + z[r[x + 6]] + z[r[x + 7]] + "-" + z[r[x + 8]] + z[r[x + 9]] + "-" + z[r[x + 10]] + z[r[x + 11]] + z[r[x + 12]] + z[r[x + 13]] + z[r[x + 14]] + z[r[x + 15]]).toLowerCase();
}
let bt;
const R0 = new Uint8Array(16);
function T0() {
  if (!bt) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    bt = crypto.getRandomValues.bind(crypto);
  }
  return bt(R0);
}
const _t = {};
function qt(r, x, n) {
  let i;
  {
    const l = Date.now(), e = T0();
    I0(_t, l, e), i = N0(e, _t.msecs, _t.seq, x, n);
  }
  return M0(i);
}
function I0(r, x, n) {
  return r.msecs ?? (r.msecs = -1 / 0), r.seq ?? (r.seq = 0), x > r.msecs ? (r.seq = n[6] << 23 | n[7] << 16 | n[8] << 8 | n[9], r.msecs = x) : (r.seq = r.seq + 1 | 0, r.seq === 0 && r.msecs++), r;
}
function N0(r, x, n, i, l = 0) {
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (!i)
    i = new Uint8Array(16), l = 0;
  else if (l < 0 || l + 16 > i.length)
    throw new RangeError(`UUID byte range ${l}:${l + 15} is out of buffer bounds`);
  return x ?? (x = Date.now()), n ?? (n = r[6] * 127 << 24 | r[7] << 16 | r[8] << 8 | r[9]), i[l++] = x / 1099511627776 & 255, i[l++] = x / 4294967296 & 255, i[l++] = x / 16777216 & 255, i[l++] = x / 65536 & 255, i[l++] = x / 256 & 255, i[l++] = x & 255, i[l++] = 112 | n >>> 28 & 15, i[l++] = n >>> 20 & 255, i[l++] = 128 | n >>> 14 & 63, i[l++] = n >>> 6 & 255, i[l++] = n << 2 & 255 | r[10] & 3, i[l++] = r[11], i[l++] = r[12], i[l++] = r[13], i[l++] = r[14], i[l++] = r[15], i;
}
const P0 = ["r", "fill", "cx", "cy"], j0 = ["x", "y", "dx", "textContent"], V0 = /* @__PURE__ */ vt({
  __name: "BaseEntityText",
  props: {
    r: {
      type: Number,
      required: !0
    },
    x: {
      type: Number,
      required: !0
    },
    y: {
      type: Number,
      required: !0
    },
    dx: {
      type: Number,
      required: !0
    },
    color: {
      type: String,
      required: !0
    },
    text: {
      type: String,
      required: !0
    },
    rtl: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click:entity", "contextmenu:entity"],
  setup(r, { emit: x }) {
    const n = r, i = k(() => n.rtl ? n.x - n.r : n.x + n.r);
    return (l, e) => (R(), G("g", {
      style: { cursor: "pointer", "user-select": "none" },
      onClick: e[0] || (e[0] = (a) => l.$emit("click:entity", a)),
      onContextmenu: e[1] || (e[1] = l0((a) => l.$emit("contextmenu:entity"), ["prevent"]))
    }, [
      y("circle", {
        r: r.r,
        fill: r.color,
        cx: i.value,
        cy: r.y
      }, null, 8, P0),
      y("text", {
        x: r.x,
        y: r.y,
        fill: "currentColor",
        dx: r.dx,
        dy: "0.35em",
        textContent: Q(r.text)
      }, null, 8, j0)
    ], 32));
  }
}), z0 = ["x1", "y1", "x2", "y2", "stroke", "stroke-width"], U0 = /* @__PURE__ */ vt({
  __name: "BaseEntityLine",
  props: {
    x1: {
      type: Number,
      required: !0
    },
    x2: {
      type: Number,
      required: !0
    },
    y: {
      type: Number,
      required: !0
    },
    height: {
      type: Number,
      default: 5
    },
    color: {
      type: String,
      required: !0
    }
  },
  setup(r) {
    const x = r, n = k(() => Math.min(x.x1, x.x2) + x.height / 2), i = k(() => Math.max(x.x1, x.x2) - x.height / 2);
    return (l, e) => (R(), G("line", {
      x1: n.value,
      y1: r.y,
      x2: i.value,
      y2: r.y,
      stroke: r.color,
      "stroke-width": r.height,
      "stroke-linecap": "round"
    }, null, 8, z0));
  }
}), G0 = class Lt {
  /**
   * Accept two comparable values and creates new instance of interval
   * Predicate Interval.comparable_less(low, high) supposed to return true on these values
   * @param low
   * @param high
   */
  constructor(x, n) {
    this.low = x, this.high = n;
  }
  /**
   * Clone interval
   * @returns {Interval}
   */
  clone() {
    return new Lt(this.low, this.high);
  }
  /**
   * Propery max returns clone of this interval
   * @returns {Interval}
   */
  get max() {
    return this.clone();
  }
  /**
   * Predicate returns true is this interval less than other interval
   * @param other_interval
   * @returns {boolean}
   */
  less_than(x) {
    return this.low < x.low || this.low === x.low && this.high < x.high;
  }
  /**
   * Predicate returns true is this interval equals to other interval
   * @param other_interval
   * @returns {boolean}
   */
  equal_to(x) {
    return this.low === x.low && this.high === x.high;
  }
  /**
   * Predicate returns true if this interval intersects other interval
   * @param other_interval
   * @returns {boolean}
   */
  intersect(x) {
    return !this.not_intersect(x);
  }
  /**
   * Predicate returns true if this interval does not intersect other interval
   * @param other_interval
   * @returns {boolean}
   */
  not_intersect(x) {
    return this.high < x.low || x.high < this.low;
  }
  /**
   * Returns new interval merged with other interval
   * @param {Interval} other_interval - Other interval to merge with
   * @returns {Interval}
   */
  merge(x) {
    return new Lt(
      this.low === void 0 ? x.low : this.low < x.low ? this.low : x.low,
      this.high === void 0 ? x.high : this.high > x.high ? this.high : x.high
    );
  }
  /**
   * Returns how key should return
   */
  output() {
    return [this.low, this.high];
  }
  /**
   * Function returns maximum between two comparable values
   * @param interval1
   * @param interval2
   * @returns {Interval}
   */
  static comparable_max(x, n) {
    return x.merge(n);
  }
  /**
   * Predicate returns true if first value less than second value
   * @param val1
   * @param val2
   * @returns {boolean}
   */
  static comparable_less_than(x, n) {
    return x < n;
  }
}, V = 0, S = 1;
class c {
  constructor(x = void 0, n = void 0, i = null, l = null, e = null, a = S) {
    if (this.left = i, this.right = l, this.parent = e, this.color = a, this.item = { key: x, value: n }, x && x instanceof Array && x.length === 2 && !Number.isNaN(x[0]) && !Number.isNaN(x[1])) {
      let [s, f] = x;
      s > f && ([s, f] = [f, s]), this.item.key = new G0(s, f);
    }
    this.max = this.item.key ? this.item.key.max : void 0;
  }
  isNil() {
    return this.item.key === void 0 && this.item.value === void 0 && this.left === null && this.right === null && this.color === S;
  }
  _value_less_than(x) {
    return this.item.value && x.item.value && this.item.value.less_than ? this.item.value.less_than(x.item.value) : this.item.value < x.item.value;
  }
  less_than(x) {
    return this.item.value === this.item.key && x.item.value === x.item.key ? this.item.key.less_than(x.item.key) : this.item.key.less_than(x.item.key) || this.item.key.equal_to(x.item.key) && this._value_less_than(x);
  }
  _value_equal(x) {
    return this.item.value && x.item.value && this.item.value.equal_to ? this.item.value.equal_to(x.item.value) : this.item.value === x.item.value;
  }
  equal_to(x) {
    return this.item.value === this.item.key && x.item.value === x.item.key ? this.item.key.equal_to(x.item.key) : this.item.key.equal_to(x.item.key) && this._value_equal(x);
  }
  intersect(x) {
    return this.item.key.intersect(x.item.key);
  }
  copy_data(x) {
    this.item.key = x.item.key, this.item.value = x.item.value;
  }
  update_max() {
    if (this.max = this.item.key ? this.item.key.max : void 0, this.right && this.right.max) {
      const x = this.item.key.constructor.comparable_max;
      this.max = x(this.max, this.right.max);
    }
    if (this.left && this.left.max) {
      const x = this.item.key.constructor.comparable_max;
      this.max = x(this.max, this.left.max);
    }
  }
  // Other_node does not intersect any node of left subtree, if this.left.max < other_node.item.key.low
  not_intersect_left_subtree(x) {
    const n = this.item.key.constructor.comparable_less_than;
    let i = this.left.max.high !== void 0 ? this.left.max.high : this.left.max;
    return n(i, x.item.key.low);
  }
  // Other_node does not intersect right subtree if other_node.item.key.high < this.right.key.low
  not_intersect_right_subtree(x) {
    const n = this.item.key.constructor.comparable_less_than;
    let i = this.right.max.low !== void 0 ? this.right.max.low : this.right.item.key.low;
    return n(x.item.key.high, i);
  }
}
class ht {
  /**
   * Construct new empty instance of IntervalTree
   */
  constructor() {
    this.root = null, this.nil_node = new c();
  }
  /**
   * Returns number of items stored in the interval tree
   * @returns {number}
   */
  get size() {
    let x = 0;
    return this.tree_walk(this.root, () => x++), x;
  }
  /**
   * Returns array of sorted keys in the ascending order
   * @returns {Array}
   */
  get keys() {
    let x = [];
    return this.tree_walk(this.root, (n) => x.push(
      n.item.key.output ? n.item.key.output() : n.item.key
    )), x;
  }
  /**
   * Return array of values in the ascending keys order
   * @returns {Array}
   */
  get values() {
    let x = [];
    return this.tree_walk(this.root, (n) => x.push(n.item.value)), x;
  }
  /**
   * Returns array of items (<key,value> pairs) in the ascended keys order
   * @returns {Array}
   */
  get items() {
    let x = [];
    return this.tree_walk(this.root, (n) => x.push({
      key: n.item.key.output ? n.item.key.output() : n.item.key,
      value: n.item.value
    })), x;
  }
  /**
   * Returns true if tree is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.root == null || this.root === this.nil_node;
  }
  /**
   * Clear tree
   */
  clear() {
    this.root = null;
  }
  /**
   * Insert new item into interval tree
   * @param {Interval} key - interval object or array of two numbers [low, high]
   * @param {any} value - value representing any object (optional)
   * @returns {Node} returns reference to inserted node as an object {key:interval, value: value}
   */
  insert(x, n = x) {
    if (x === void 0) return;
    let i = new c(x, n, this.nil_node, this.nil_node, null, V);
    return this.tree_insert(i), this.recalc_max(i), i;
  }
  /**
   * Returns true if item {key,value} exist in the tree
   * @param {Interval} key - interval correspondent to keys stored in the tree
   * @param {any} value - value object to be checked
   * @returns {boolean} true if item {key, value} exist in the tree, false otherwise
   */
  exist(x, n = x) {
    let i = new c(x, n);
    return !!this.tree_search(this.root, i);
  }
  /**
   * Remove entry {key, value} from the tree
   * @param {Interval} key - interval correspondent to keys stored in the tree
   * @param {any} value - value object
   * @returns {boolean} true if item {key, value} deleted, false if not found
   */
  remove(x, n = x) {
    let i = new c(x, n), l = this.tree_search(this.root, i);
    return l && this.tree_delete(l), l;
  }
  /**
   * Returns array of entry values which keys intersect with given interval <br/>
   * If no values stored in the tree, returns array of keys which intersect given interval
   * @param {Interval} interval - search interval, or tuple [low, high]
   * @param outputMapperFn(value,key) - optional function that maps (value, key) to custom output
   * @returns {Array}
   */
  search(x, n = (i, l) => i === l ? l.output() : i) {
    let i = new c(x), l = [];
    return this.tree_search_interval(this.root, i, l), l.map((e) => n(e.item.value, e.item.key));
  }
  /**
   * Returns true if intersection between given and any interval stored in the tree found
   * @param {Interval} interval - search interval or tuple [low, high]
   * @returns {boolean}
   */
  intersect_any(x) {
    let n = new c(x);
    return this.tree_find_any_interval(this.root, n);
  }
  /**
   * Tree visitor. For each node implement a callback function. <br/>
   * Method calls a callback function with two parameters (key, value)
   * @param visitor(key,value) - function to be called for each tree item
   */
  forEach(x) {
    this.tree_walk(this.root, (n) => x(n.item.key, n.item.value));
  }
  /**
   * Value Mapper. Walk through every node and map node value to another value
   * @param callback(value,key) - function to be called for each tree item
   */
  map(x) {
    const n = new ht();
    return this.tree_walk(this.root, (i) => n.insert(i.item.key, x(i.item.value, i.item.key))), n;
  }
  /**
   * @param {Interval} interval - optional if the iterator is intended to start from the beginning
   * @param outputMapperFn(value,key) - optional function that maps (value, key) to custom output
   * @returns {Iterator}
   */
  *iterate(x, n = (i, l) => i === l ? l.output() : i) {
    let i;
    for (x ? i = this.tree_search_nearest_forward(this.root, new c(x)) : this.root && (i = this.local_minimum(this.root)); i; )
      yield n(i.item.value, i.item.key), i = this.tree_successor(i);
  }
  recalc_max(x) {
    let n = x;
    for (; n.parent != null; )
      n.parent.update_max(), n = n.parent;
  }
  tree_insert(x) {
    let n = this.root, i = null;
    if (this.root == null || this.root === this.nil_node)
      this.root = x;
    else {
      for (; n !== this.nil_node; )
        i = n, x.less_than(n) ? n = n.left : n = n.right;
      x.parent = i, x.less_than(i) ? i.left = x : i.right = x;
    }
    this.insert_fixup(x);
  }
  // After insertion insert_node may have red-colored parent, and this is a single possible violation
  // Go upwords to the root and re-color until violation will be resolved
  insert_fixup(x) {
    let n, i;
    for (n = x; n !== this.root && n.parent.color === V; )
      n.parent === n.parent.parent.left ? (i = n.parent.parent.right, i.color === V ? (n.parent.color = S, i.color = S, n.parent.parent.color = V, n = n.parent.parent) : (n === n.parent.right && (n = n.parent, this.rotate_left(n)), n.parent.color = S, n.parent.parent.color = V, this.rotate_right(n.parent.parent))) : (i = n.parent.parent.left, i.color === V ? (n.parent.color = S, i.color = S, n.parent.parent.color = V, n = n.parent.parent) : (n === n.parent.left && (n = n.parent, this.rotate_right(n)), n.parent.color = S, n.parent.parent.color = V, this.rotate_left(n.parent.parent)));
    this.root.color = S;
  }
  tree_delete(x) {
    let n, i;
    x.left === this.nil_node || x.right === this.nil_node ? n = x : n = this.tree_successor(x), n.left !== this.nil_node ? i = n.left : i = n.right, i.parent = n.parent, n === this.root ? this.root = i : (n === n.parent.left ? n.parent.left = i : n.parent.right = i, n.parent.update_max()), this.recalc_max(i), n !== x && (x.copy_data(n), x.update_max(), this.recalc_max(x)), /*fix_node != this.nil_node && */
    n.color === S && this.delete_fixup(i);
  }
  delete_fixup(x) {
    let n = x, i;
    for (; n !== this.root && n.parent != null && n.color === S; )
      n === n.parent.left ? (i = n.parent.right, i.color === V && (i.color = S, n.parent.color = V, this.rotate_left(n.parent), i = n.parent.right), i.left.color === S && i.right.color === S ? (i.color = V, n = n.parent) : (i.right.color === S && (i.color = V, i.left.color = S, this.rotate_right(i), i = n.parent.right), i.color = n.parent.color, n.parent.color = S, i.right.color = S, this.rotate_left(n.parent), n = this.root)) : (i = n.parent.left, i.color === V && (i.color = S, n.parent.color = V, this.rotate_right(n.parent), i = n.parent.left), i.left.color === S && i.right.color === S ? (i.color = V, n = n.parent) : (i.left.color === S && (i.color = V, i.right.color = S, this.rotate_left(i), i = n.parent.left), i.color = n.parent.color, n.parent.color = S, i.left.color = S, this.rotate_right(n.parent), n = this.root));
    n.color = S;
  }
  tree_search(x, n) {
    if (!(x == null || x === this.nil_node))
      return n.equal_to(x) ? x : n.less_than(x) ? this.tree_search(x.left, n) : this.tree_search(x.right, n);
  }
  tree_search_nearest_forward(x, n) {
    let i, l = x;
    for (; l && l !== this.nil_node; )
      l.less_than(n) ? l.intersect(n) ? (i = l, l = l.left) : l = l.right : ((!i || l.less_than(i)) && (i = l), l = l.left);
    return i || null;
  }
  // Original search_interval method; container res support push() insertion
  // Search all intervals intersecting given one
  tree_search_interval(x, n, i) {
    x != null && x !== this.nil_node && (x.left !== this.nil_node && !x.not_intersect_left_subtree(n) && this.tree_search_interval(x.left, n, i), x.intersect(n) && i.push(x), x.right !== this.nil_node && !x.not_intersect_right_subtree(n) && this.tree_search_interval(x.right, n, i));
  }
  tree_find_any_interval(x, n) {
    let i = !1;
    return x != null && x !== this.nil_node && (x.left !== this.nil_node && !x.not_intersect_left_subtree(n) && (i = this.tree_find_any_interval(x.left, n)), i || (i = x.intersect(n)), !i && x.right !== this.nil_node && !x.not_intersect_right_subtree(n) && (i = this.tree_find_any_interval(x.right, n))), i;
  }
  local_minimum(x) {
    let n = x;
    for (; n.left != null && n.left !== this.nil_node; )
      n = n.left;
    return n;
  }
  // not in use
  local_maximum(x) {
    let n = x;
    for (; n.right != null && n.right !== this.nil_node; )
      n = n.right;
    return n;
  }
  tree_successor(x) {
    let n, i, l;
    if (x.right !== this.nil_node)
      n = this.local_minimum(x.right);
    else {
      for (i = x, l = x.parent; l != null && l.right === i; )
        i = l, l = l.parent;
      n = l;
    }
    return n;
  }
  //           |            right-rotate(T,y)       |
  //           y            ---------------.       x
  //          / \                                  / \
  //         x   c          left-rotate(T,x)      a   y
  //        / \             <---------------         / \
  //       a   b                                    b   c
  rotate_left(x) {
    let n = x.right;
    x.right = n.left, n.left !== this.nil_node && (n.left.parent = x), n.parent = x.parent, x === this.root ? this.root = n : x === x.parent.left ? x.parent.left = n : x.parent.right = n, n.left = x, x.parent = n, x != null && x !== this.nil_node && x.update_max(), n = x.parent, n != null && n !== this.nil_node && n.update_max();
  }
  rotate_right(x) {
    let n = x.left;
    x.left = n.right, n.right !== this.nil_node && (n.right.parent = x), n.parent = x.parent, x === this.root ? this.root = n : x === x.parent.left ? x.parent.left = n : x.parent.right = n, n.right = x, x.parent = n, x !== null && x !== this.nil_node && x.update_max(), n = x.parent, n != null && n !== this.nil_node && n.update_max();
  }
  tree_walk(x, n) {
    x != null && x !== this.nil_node && (this.tree_walk(x.left, n), n(x), this.tree_walk(x.right, n));
  }
  /* Return true if all red nodes have exactly two black child nodes */
  testRedBlackProperty() {
    let x = !0;
    return this.tree_walk(this.root, function(n) {
      n.color === V && (n.left.color === S && n.right.color === S || (x = !1));
    }), x;
  }
  /* Throw error if not every path from root to bottom has same black height */
  testBlackHeightProperty(x) {
    let n = 0, i = 0, l = 0;
    if (x.color === S && n++, x.left !== this.nil_node ? i = this.testBlackHeightProperty(x.left) : i = 1, x.right !== this.nil_node ? l = this.testBlackHeightProperty(x.right) : l = 1, i !== l)
      throw new Error("Red-black height property violated");
    return n += i, n;
  }
}
class Ht {
  constructor() {
    U(this, "intervalPerLevel", []);
    U(this, "id2level", /* @__PURE__ */ new Map());
  }
  // <id, level>
  update(x, n) {
    for (const [l, e] of this.intervalPerLevel.entries())
      if (n.every((a) => !this.intersectAny(e, a))) {
        n.forEach((a) => {
          e.insert(a);
        }), this.id2level.set(x.id, l);
        return;
      }
    this.id2level.set(x.id, this.intervalPerLevel.length);
    const i = new ht();
    n.forEach((l) => {
      i.insert(l);
    }), this.intervalPerLevel.push(i);
  }
  intersectAny(x, n) {
    return x.search(n).filter((l) => !(l[0] === n[1] || l[1] === n[0])).length > 0;
  }
  fetchLevel(x) {
    return this.id2level.get(x.id);
  }
  clear() {
    this.intervalPerLevel = [], this.id2level.clear();
  }
}
class q0 {
  constructor(x, n, i) {
    this.entity = x, this.ranges = n, this.level = i;
  }
  get center() {
    return this.ranges.center;
  }
}
class H0 {
  constructor(x, n) {
    if (this.x1 = x, this.x2 = n, x > n)
      throw new RangeError("The argument must be x1 <= x2.");
  }
  get center() {
    return this.x1 + (this.x2 - this.x1) / 2;
  }
  getInterval(x = !1, n = 0) {
    return x ? [Math.min(this.x1, this.x2 - n), this.x2] : [this.x1, Math.max(this.x2, this.x1 + n)];
  }
}
class X0 {
  constructor(x = !1) {
    U(this, "_items", []);
    this.rtl = x;
  }
  get items() {
    return this._items;
  }
  add(x, n) {
    const i = new H0(x, n);
    this.rtl ? this._items.unshift(i) : this._items.push(i);
  }
  get first() {
    return this.items[0];
  }
  get center() {
    return this.first.center;
  }
  getIntervals(x, n) {
    return this.items.map((i, l) => l === 0 && x ? i.getInterval(this.rtl, n) : i.getInterval());
  }
}
class Y0 {
  constructor(x, n = !1) {
    U(this, "levelManager", new Ht());
    this.textLine = x, this.rtl = n;
  }
  render(x, n, i) {
    if (x.getNumberOfChars() === 0)
      return [];
    const l = [];
    this.levelManager.clear();
    for (const e of n) {
      const a = this.createRanges(x, e), s = e.startsAfter(this.textLine.startOffset), f = i.getWidth(e.label), C = a.getIntervals(s, f);
      this.levelManager.update(e, C);
      const B = this.levelManager.fetchLevel(e);
      l.push(new q0(e, a, B));
    }
    return l;
  }
  createRanges(x, n) {
    const i = new X0(this.rtl), l = x.firstChild, e = Math.max(n.startOffset, this.textLine.startOffset) - this.textLine.startOffset, a = Math.min(n.endOffset, this.textLine.endOffset) - this.textLine.startOffset;
    if (l.textContent && l.textContent.length < a)
      return i.add(0, 0), i;
    const s = document.createRange();
    s.setStart(l, e), s.setEnd(l, a);
    const f = s.getClientRects();
    for (const C of f)
      i.add(C.left, C.right);
    return i;
  }
}
const Z = Object.freeze({
  radius: 3,
  lineWidth: 5,
  maxLabelLength: 12,
  get labelMargin() {
    return 5 + this.radius;
  },
  get diameter() {
    return this.radius * 2;
  }
}), Z0 = {
  __name: "BaseEntity",
  props: {
    ranges: {
      // type: Object as PropType<Ranges>,
      type: Object,
      required: !0
    },
    // initialRanges: Array, // Vue 2でのRangesオブジェクトに相当
    color: String,
    noText: {
      type: Boolean,
      default: !1
    },
    label: String,
    rtl: {
      type: Boolean,
      default: !1
    },
    margin: {
      type: Number,
      default: 0
    },
    level: {
      type: Number,
      default: 0
    },
    fontSize: {
      type: Number,
      default: 17
    },
    selected: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["mouseover", "mouseleave", "click:entity", "contextmenu:entity"],
  setup(r, { emit: x }) {
    const n = r, i = k(() => n.rtl ? -Z.labelMargin : Z.labelMargin), l = k(() => Z.radius), e = k(() => n.selected ? Z.lineWidth * 1.5 : Z.lineWidth), a = k(() => n.rtl ? B(n.ranges.first.x2) : B(n.ranges.first.x1)), s = k(() => Z.lineWidth + (Z.lineWidth + n.fontSize + 8) * n.level + n.fontSize / 2 + 5), f = k(() => Z.lineWidth + (Z.lineWidth + n.fontSize + 8) * n.level), C = k(() => n.ranges.items.map((h) => [B(h.x1), B(h.x2)]));
    function B(h) {
      return h - n.margin;
    }
    return (h, A) => (R(), G("g", {
      onMouseover: A[2] || (A[2] = (L) => h.$emit("mouseover")),
      onMouseleave: A[3] || (A[3] = (L) => h.$emit("mouseleave"))
    }, [
      (R(!0), G(Bt, null, At(C.value, ([L, u], v) => (R(), xt(U0, {
        key: v,
        x1: L,
        x2: u,
        y: f.value,
        color: r.color,
        height: e.value
      }, null, 8, ["x1", "x2", "y", "color", "height"]))), 128)),
      r.noText ? Ct("", !0) : (R(), xt(V0, {
        key: 0,
        r: l.value,
        x: a.value,
        y: s.value,
        dx: i.value,
        rtl: r.rtl,
        text: r.label,
        color: r.color,
        "onClick:entity": A[0] || (A[0] = (L) => h.$emit("click:entity", L)),
        "onContextmenu:entity": A[1] || (A[1] = (L) => h.$emit("contextmenu:entity"))
      }, null, 8, ["r", "x", "y", "dx", "rtl", "text", "color"]))
    ], 32));
  }
}, kt = (r, x) => {
  const n = r.__vccOpts || r;
  for (const [i, l] of x)
    n[i] = l;
  return n;
}, K0 = ["id", "textContent"], J0 = {
  key: 1,
  style: { "font-size": "6px" },
  fill: "currentColor"
}, Q0 = {
  __name: "BaseText",
  props: {
    text: {
      type: String,
      default: "",
      required: !0
    },
    textLine: {
      type: Object,
      required: !0
    },
    id: {
      type: String,
      required: !0
    }
  },
  setup(r) {
    const x = r, n = I(null), i = k(() => x.text.substring(
      x.textLine.startOffset,
      x.textLine.endOffset
    ));
    return tt(
      () => x.textLine,
      () => {
        nt(() => {
          n.value && (n.value.annotatorElement = x.textLine);
        });
      },
      { immediate: !0 }
    ), (l, e) => i.value ? (R(), G("text", {
      key: 0,
      id: r.id,
      textContent: Q(i.value),
      fill: "currentColor",
      style: { "white-space": "pre" },
      ref_key: "textElement",
      ref: n
    }, null, 8, K0)) : (R(), G("text", J0, "⮐"));
  }
}, o0 = /* @__PURE__ */ kt(Q0, [["__scopeId", "data-v-72684c03"]]);
class d0 {
  constructor(x, n, i, l) {
    this.id = x, this.labelId = n, this.fromEntity = i, this.toEntity = l;
  }
  /**
   * Return true if the relation and start/end offset has some overlapping.
   * @param {number} startOffset - start offset of something(maybe entity or relation)
   * @param {number} endOffset - end offset of something(maybe entity or relation)
   * @returns {boolean} - true if there is an overlapping, otherwise false.
   */
  isIn(x, n) {
    return x <= this.startOffset && this.startOffset < n || x < this.endOffset && this.endOffset <= n || this.startOffset < x && n < this.endOffset;
  }
  /**
   * Return true if entity is a part of the relation.
   * @param {Entity} entity - an entity.
   * @returns {boolean} - true if the entity is a part of the relation, otherwise false.
   */
  consistOf(x) {
    return this.fromEntity.equalTo(x) || this.toEntity.equalTo(x);
  }
  /**
   * Return true if the left side is open, otherwise return false.
   * If the start offset of the relation is smaller than that of text line,
   *   this should return true because I assume that
   *   the vertical line of the relation starts with the first line of the entity.
   * This may be in trouble when the first line is smaller than the second line.
   * @param {number} startOffset - start offset of a text line.
   * @returns {boolean} - the result.
   */
  isOpenOnLeft(x) {
    return this.startOffset < x;
  }
  /**
   * Return true if the right side is open, otherwise return false.
   * If the start offset of the entity1 which appears after the another entity
   *   is larger than the end offset of text line,
   *   this should return true because I assume that the vertical line of the
   *   relation starts with the entity1.
   * @param {number} endOffset - end offset of a text line.
   * @returns {boolean} - the result.
   */
  isOpenOnRight(x) {
    return Math.max(
      this.fromEntity.startOffset,
      this.toEntity.startOffset
    ) >= x;
  }
  /**
   * Return true if the relation is visible, otherwise return false.
   * If the start offset of either entity is after the start offset of
   *   the TextLine, it should be visible.
   * @param {number} startOffset - start offset of a text line.
   * @returns {boolean} - the result.
   */
  isVisible(x) {
    const n = Math.max(
      this.fromEntity.startOffset,
      this.toEntity.startOffset
    );
    return x <= n;
  }
  /**
   * Return width between centers of each entity.
   * @returns {number} - the width between each entity.
   */
  get width() {
    return Math.abs(this.fromEntity.center - this.toEntity.center);
  }
  /**
   * Return start offset of the relation.
   * The value is a smaller value of the two entities.
   * @returns {number} - the start offset.
   */
  get startOffset() {
    return Math.min(this.fromEntity.startOffset, this.toEntity.startOffset);
  }
  /**
   * Return end offset of the relation.
   * The value is a bigger value of the two entities.
   * @returns {number} - the end offset.
   */
  get endOffset() {
    return Math.max(this.fromEntity.endOffset, this.toEntity.endOffset);
  }
}
class c0 {
  constructor(x, n) {
    U(this, "tree", new ht());
    for (const i of x) {
      const l = n.findById(i.fromId), e = n.findById(i.toId), a = new d0(
        i.id,
        i.labelId,
        l,
        e
      );
      this.tree.insert([a.startOffset, a.endOffset], a);
    }
  }
  /**
   * Filter relations by the provided start/end offsets.
   * @param {number} startOffset - the start offset.
   * @param {number} endOffset - the end offset.
   * @returns {RelationListItem[]} - An array with the filtered relations.
   */
  filterByRange(x, n) {
    return this.tree.search([x, n]).filter((i) => i.isIn(x, n));
  }
}
async function Xt(r = {}) {
  const { timeout: x = 5e3 } = r;
  if (!(typeof document > "u" || !document.fonts))
    try {
      await Promise.race([
        document.fonts.ready,
        new Promise((n) => setTimeout(n, x))
      ]);
    } catch (n) {
      console.warn("Font loading detection failed:", n);
    }
}
async function Un(r, x = {}) {
  const { timeout: n = 5e3, retryCount: i = 3, retryDelay: l = 100 } = x;
  if (typeof document > "u" || !document.fonts)
    return;
  const e = r.map(async (a) => {
    let s = 0;
    for (; s < i; )
      try {
        const f = new FontFace(a, "url()");
        await Promise.race([
          f.loaded,
          new Promise((C) => setTimeout(C, n))
        ]);
        return;
      } catch {
        if (s++, s >= i) {
          console.warn(`Failed to load font ${a} after ${i} attempts`);
          return;
        }
        await new Promise((C) => setTimeout(C, l));
      }
  });
  await Promise.all(e);
}
function Gn(r) {
  if (typeof document > "u" || !document.fonts)
    return !0;
  try {
    return document.fonts.check(`16px ${r}`);
  } catch (x) {
    return console.warn(`Error checking font ${r}:`, x), !1;
  }
}
function qn(r, x = "normal") {
  if (typeof document > "u")
    return;
  const n = document.createElement("link");
  n.rel = "preload", n.as = "font", n.type = "font/woff2", n.crossOrigin = "anonymous", n.href = "data:font/woff2;base64,", document.head.appendChild(n);
}
function Hn(r, x = "swap") {
  if (typeof document > "u")
    return;
  const n = document.createElement("style");
  n.textContent = `
    @font-face {
      font-family: "${r}";
      font-display: ${x};
      src: local("${r}");
    }
  `, document.head.appendChild(n);
}
function tn(r, x = 16) {
  const n = /[\u3000-\u9fff\uac00-\ud7af]/.test(r), i = /[iIjl1\|\!\.\,\;\:]/.test(r), l = /[mMwW@]/.test(r), e = /[0-9]/.test(r);
  return /\s/.test(r) ? x * 0.25 : n ? x * 1 : i ? x * 0.3 : l ? x * 0.8 : e ? x * 0.55 : x * 0.6;
}
async function nn(r, x, n = {}) {
  const { retryCount: i = 3, retryDelay: l = 100 } = n;
  typeof document < "u" && document.fonts && !document.fonts.check("16px serif") && await Xt(n);
  const e = new Set(r), a = /* @__PURE__ */ new Map();
  e.delete(`
`);
  const s = Array.from(e);
  s.sort(), x.textContent = s.join("");
  let f = 0, C = !1;
  for (; f < i && !C; )
    try {
      if (x.getNumberOfChars() > 0) {
        for (let B = 0; B < x.getNumberOfChars(); B++) {
          const h = x.textContent.charAt(B), A = x.getExtentOfChar(B).width;
          if (A > 0.1)
            a.set(h, A);
          else
            throw new Error(`Invalid character width: ${A} for character: ${h}`);
        }
        C = !0;
      } else
        throw new Error("No characters to measure");
    } catch (B) {
      if (f++, console.warn(`Font measurement attempt ${f} failed:`, B), f >= i) {
        console.warn("Font measurement failed after retries, using fallback");
        const h = parseFloat(window.getComputedStyle(x).fontSize) || 16;
        for (const A of s)
          a.set(A, tn(A, h));
        break;
      }
      await new Promise((h) => setTimeout(h, l));
    }
  return a.set(`
`, 0), x.textContent = "", a;
}
async function xn(r, x = {}) {
  const { timeout: n = 5e3, retryCount: i = 5, retryDelay: l = 200 } = x;
  if (typeof document > "u" || !document.fonts)
    return !0;
  const e = rn(r), a = "ABCabc123漢字";
  await Xt({ timeout: n / 2 });
  let s = 0;
  for (; s < i; ) {
    if (await ln(r, a, e))
      return !0;
    s++, s < i && await new Promise((f) => setTimeout(f, l));
  }
  return console.warn(`SVG font loading verification failed after ${i} attempts`), !1;
}
function rn(r) {
  const x = window.getComputedStyle(r);
  return {
    fontSize: parseFloat(x.fontSize) || 16,
    fontFamily: x.fontFamily || "serif",
    fontWeight: x.fontWeight || "normal"
  };
}
async function ln(r, x, n) {
  const i = r.textContent;
  try {
    if (r.textContent = x, r.getNumberOfChars() === 0)
      return !1;
    let l = 0, e = 0;
    for (let h = 0; h < Math.min(r.getNumberOfChars(), x.length); h++)
      try {
        const A = r.getExtentOfChar(h).width;
        A > 0.1 && (l += A, e++);
      } catch {
        continue;
      }
    const a = e / Math.min(r.getNumberOfChars(), x.length), s = e > 0 ? l / e : 0, f = n.fontSize * 0.2, C = n.fontSize * 2, B = a >= 0.7 && s >= f && s <= C;
    return B || console.debug(`SVG font not ready: successRate=${a}, avgWidth=${s}, expected range=[${f}, ${C}]`), B;
  } catch (l) {
    return console.warn("SVG font readiness check failed:", l), !1;
  } finally {
    r.textContent = i;
  }
}
function Xn() {
  if (typeof document > "u")
    throw new Error("Cannot create SVG element in non-browser environment");
  const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  r.style.position = "absolute", r.style.left = "-9999px", r.style.top = "-9999px", r.style.width = "1px", r.style.height = "1px", r.style.visibility = "hidden";
  const x = document.createElementNS("http://www.w3.org/2000/svg", "text");
  return x.setAttribute("x", "0"), x.setAttribute("y", "0"), r.appendChild(x), document.body.appendChild(r), x;
}
function Yn(r) {
  r.parentNode && r.parentNode.parentNode && r.parentNode.parentNode.removeChild(r.parentNode);
}
class lt {
  constructor(x, n, i, l, e) {
    this.fontSize = x, this.fontFamily = n, this.fontWeight = i, this.lineHeight = l, this.width = e;
  }
  widthOf(x, n = !1) {
    return n ? Math.max(
      ...Array.from(x).map((i) => this.widthOfChar(i)),
      20
    ) : Array.from(x).map((i) => this.widthOfChar(i)).reduce((i, l) => i + l, 0);
  }
  widthOfChar(x) {
    return this.width.get(x) || 0;
  }
  static async create(x, n) {
    try {
      if (console.log("Starting optimized SVG font loading process..."), !await Promise.race([
        xn(n, {
          timeout: 1e3,
          // Reduced from 5000 
          retryCount: 2,
          // Reduced from 5
          retryDelay: 100
          // Reduced from 200
        }),
        new Promise((C) => setTimeout(() => C(!1), 1500))
        // Overall timeout
      ]))
        return console.warn("SVG font loading verification timeout, using sync fallback immediately"), lt.createSync(x, n);
      const l = await nn(x, n, {
        timeout: 1e3,
        // Reduced from 3000
        retryCount: 1,
        // Reduced from 3
        retryDelay: 50
        // Reduced from 150
      }), e = parseFloat(window.getComputedStyle(n).fontSize), a = window.getComputedStyle(n).fontFamily, s = window.getComputedStyle(n).fontWeight, f = n.getBoundingClientRect().height;
      return console.log(`✅ Fast SVG font measurement completed: ${a} ${e}px`), new lt(e, a, s, f, l);
    } catch (i) {
      return console.warn("❌ Font creation failed, using synchronous fallback:", i), lt.createSync(x, n);
    }
  }
  static createSync(x, n) {
    const i = new Set(x), l = /* @__PURE__ */ new Map();
    i.delete(`
`);
    const e = Array.from(i);
    e.sort(), n.textContent = e.join("");
    for (let B = 0; B < n.getNumberOfChars(); B++) {
      const h = n.textContent.charAt(B);
      try {
        const A = n.getExtentOfChar(B).width;
        l.set(h, A);
      } catch {
        console.warn(`Font measurement failed for character '${h}', using fallback`), l.set(h, 10);
      }
    }
    l.set(`
`, 0);
    const a = parseFloat(window.getComputedStyle(n).fontSize), s = window.getComputedStyle(n).fontFamily, f = window.getComputedStyle(n).fontWeight, C = n.getBoundingClientRect().height;
    return n.textContent = "", new lt(a, s, f, C, l);
  }
}
class Yt {
  constructor(x, n, i, l, e = Z.maxLabelLength) {
    this.id = x, this.text = n, this.color = i, this.textWidth = l, this.maxLength = e;
  }
  get width() {
    return this.textWidth;
  }
  get truncatedText() {
    return this.text.length <= this.maxLength ? this.text : `${this.text.slice(0, this.maxLength)}...`;
  }
  get truncatedWidth() {
    return this.textWidth / this.text.length * Math.min(this.text.length, this.maxLength);
  }
}
class en extends Yt {
  get width() {
    return Z.diameter + Z.labelMargin + this.textWidth;
  }
}
class an extends Yt {
}
class Ft {
  constructor(x) {
    U(this, "id2Label", {});
    this.labels = x;
    for (const n of x)
      this.id2Label[n.id] = n;
  }
  getById(x) {
    return this.id2Label[x];
  }
  getColor(x) {
    var n;
    return (n = this.getById(x)) == null ? void 0 : n.color;
  }
  getText(x) {
    var n;
    return (n = this.getById(x)) == null ? void 0 : n.truncatedText;
  }
  getWidth(x) {
    var n;
    return (n = this.getById(x)) == null ? void 0 : n.truncatedWidth;
  }
  get maxLabelWidth() {
    return Math.max(...this.labels.map((x) => x.truncatedWidth), 0);
  }
  static valueOf(x, n, i, l) {
    return new Ft(
      n.map(
        (e, a) => new l(
          e.id,
          e.text,
          e.color || e.backgroundColor,
          i[a],
          x
        )
      )
    );
  }
}
class Nt {
  constructor(x, n) {
    this.startOffset = x, this.endOffset = n;
  }
}
class sn {
  constructor(x, n, i, l, e) {
    U(this, "levelManager", new Ht());
    this.relations = x, this.relationLabels = n, this.textLine = i, this.left = l, this.right = e;
  }
  render(x, n) {
    const i = [];
    this.levelManager.clear();
    const l = /* @__PURE__ */ new Map();
    x.forEach((e) => {
      l.set(e.entity.id, e);
    }), this.relations.sort((e, a) => e.width - a.width);
    for (const e of this.relations) {
      if (!e.isVisible(this.textLine.startOffset))
        continue;
      let a = this.left, s = this.right, f = "";
      const C = l.get(e.fromEntity.id), B = l.get(e.toEntity.id), h = this.relationLabels.getById(e.labelId);
      let A = e.isOpenOnLeft(this.textLine.startOffset), L = e.isOpenOnRight(this.textLine.endOffset);
      if (A && L ? (a = this.left, s = this.right) : A ? n ? C ? a = C.center : B && (a = B.center) : C ? s = C.center : B && (s = B.center) : L ? n ? C ? s = C.center : B && (s = B.center) : C ? a = C.center : B && (a = B.center) : B && C && (a = Math.min(B.center, C.center), s = Math.max(B.center, C.center)), B && a === B.center ? f = "start" : B && s === B.center && (f = "end"), a > s && ([a, s] = [s, a]), n && ([A, L] = [L, A]), s - a < h.truncatedWidth) {
        const v = a + (s - a) / 2, b = h.truncatedWidth / 2;
        this.levelManager.update(e, [[v - b, v + b]]);
      } else
        this.levelManager.update(e, [[a, s]]);
      const u = this.levelManager.fetchLevel(e);
      i.push({
        x1: a,
        x2: s,
        level: u,
        label: h.truncatedText,
        labelWidth: h.truncatedWidth,
        relation: e,
        marker: f,
        openLeft: A,
        openRight: L
      });
    }
    return i;
  }
}
const un = ["direction", "id", "height"], fn = ["transform"], Cn = {
  __name: "Vline",
  props: {
    annotatorUuid: String,
    entities: Array,
    relations: Array,
    textLine: Object,
    dark: Boolean,
    font: Object,
    text: String,
    entityLabels: Object,
    relationLabels: Object,
    rtl: Boolean,
    baseX: Number,
    left: Number,
    right: Number,
    selectedEntities: Array,
    selectedRelation: Object
  },
  emits: ["click:entity", "click:relation", "contextmenu:entity", "contextmenu:relation", "setSelectedEntity", "setSelectedRelation", "update:height"],
  setup(r, { emit: x }) {
    const n = r, i = x, l = I(null);
    zt(() => {
      u();
    }), tt(() => n.textLine, () => {
      u();
    }, { deep: !0 }), tt(() => [n.entities, n.text], () => {
      nt(() => {
        v();
      });
    }, { deep: !0, immediate: !0 });
    const e = I("500px"), a = k(() => `translate(0, ${n.font.lineHeight})`), s = k(() => l.value ? new Y0(n.textLine, n.rtl).render(l.value, n.entities, n.entityLabels) : []), f = k(() => new sn(n.relations, n.relationLabels, n.textLine, n.left, n.right).render(s.value, n.rtl));
    k(() => Math.max(...f.value.map((F) => F.level), 0));
    const C = k(() => {
      const F = Math.max(...f.value.map((T) => T.level));
      return F < 0 ? 0 : 20 + n.font.fontSize * (F + 1.5);
    });
    k(() => `translate(0, ${C.value})`);
    const B = k(() => n.rtl ? "rtl" : "ltr"), h = k(() => `${n.textLine.startOffset}:${n.textLine.endOffset}`), A = k(() => `basetext-${n.annotatorUuid}-${h.value}`), L = k(() => `svg-${n.annotatorUuid}-${h.value}`);
    function u() {
      nt(() => {
        l.value = document.getElementById(A.value);
      });
    }
    function v() {
      const F = document.getElementById(L.value);
      if (F) {
        const T = F.getBBox().height + 30;
        F.style.height = `${T}px`, i("update:height", h.value, T);
      }
    }
    function b(F) {
      return F.startOffset < n.textLine.startOffset;
    }
    function W(F) {
      return n.entityLabels.getColor(F.label);
    }
    function J(F) {
      return n.entityLabels.getText(F.label);
    }
    function X(F) {
      return n.selectedRelation ? n.selectedRelation.consistOf(F) : n.selectedEntities.some((T) => T.id === F.id);
    }
    return (F, T) => (R(), G("svg", {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      direction: B.value,
      id: L.value,
      width: "100%",
      height: e.value
    }, [
      y("g", { transform: a.value }, [
        g(o0, {
          id: A.value,
          "text-line": r.textLine,
          text: r.text,
          x: r.baseX
        }, null, 8, ["id", "text-line", "text", "x"]),
        (R(!0), G(Bt, null, At(s.value, (E) => (R(), xt(Z0, {
          key: E.entity.id,
          ranges: E.ranges,
          color: W(E.entity),
          label: J(E.entity),
          "no-text": b(E.entity),
          rtl: r.rtl,
          margin: r.left,
          level: E.level,
          "font-size": r.font.fontSize,
          selected: X(E.entity),
          "onClick:entity": (N) => F.$emit("click:entity", N, E.entity),
          "onContextmenu:entity": (N) => F.$emit("contextmenu:entity", E.entity),
          onMouseover: (N) => F.$emit("setSelectedEntity", E.entity),
          onMouseleave: T[0] || (T[0] = (N) => F.$emit("setSelectedEntity", null))
        }, null, 8, ["ranges", "color", "label", "no-text", "rtl", "margin", "level", "font-size", "selected", "onClick:entity", "onContextmenu:entity", "onMouseover"]))), 128))
      ], 8, fn)
    ], 8, un));
  }
}, Bn = /* @__PURE__ */ kt(Cn, [["__scopeId", "data-v-7b0dff92"]]), hn = { class: "ma-3" }, Dn = { class: "text-h5 text-indigo ml-5" }, gn = { class: "ma-3" }, An = { class: "text-h5 text-indigo ml-5" }, mn = { class: "d-flex justify-space-around my-3" }, Fn = { class: "ma-3" }, pn = { class: "text-h5 text-indigo ml-5" }, vn = /* @__PURE__ */ vt({
  __name: "EntityDialogs",
  props: {
    candidateEntity: {},
    entityLabels: {},
    dialog4Adding: { type: Boolean },
    dialog4Updating: { type: Boolean },
    dialog4Deleting: { type: Boolean }
  },
  emits: ["cancel", "confirm", "updateEntityAddPrefix", "updateEntitySubtractPrefix", "updateEntityAddSuffix", "updateEntitySubtractSuffix", "updateCandidateEntityLabel"],
  setup(r) {
    return (x, n) => {
      const i = Y("v-card-title"), l = Y("v-btn"), e = Y("v-card-subtitle"), a = Y("v-card"), s = Y("v-radio"), f = Y("v-radio-group"), C = Y("v-card-text"), B = Y("v-spacer"), h = Y("v-card-actions"), A = Y("v-dialog"), L = Y("v-icon");
      return R(), G(Bt, null, [
        g(A, {
          "model-value": x.dialog4Adding,
          "max-width": "500"
        }, {
          default: m(() => [
            g(a, { class: "ma-3" }, {
              default: m(() => [
                g(i, { class: "text-h5" }, {
                  default: m(() => n[12] || (n[12] = [
                    P(" 追加しますか？ ")
                  ])),
                  _: 1,
                  __: [12]
                }),
                g(e, null, {
                  default: m(() => [
                    n[14] || (n[14] = P(" 追加する場合は、ラベルを選んで、")),
                    g(l, {
                      color: "primary",
                      variant: "flat",
                      size: "small"
                    }, {
                      default: m(() => n[13] || (n[13] = [
                        y("b", null, "追加", -1)
                      ])),
                      _: 1,
                      __: [13]
                    }),
                    n[15] || (n[15] = P(" してください "))
                  ]),
                  _: 1,
                  __: [14, 15]
                }),
                g(C, null, {
                  default: m(() => [
                    g(a, { variant: "outlined" }, {
                      default: m(() => [
                        y("div", hn, [
                          n[16] || (n[16] = y("span", null, [
                            y("small", null, "選択したテキスト:")
                          ], -1)),
                          y("span", Dn, [
                            y("b", null, Q(x.candidateEntity.text), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    g(f, {
                      "model-value": x.candidateEntity.label,
                      "onUpdate:modelValue": n[0] || (n[0] = (u) => u !== null && x.$emit("updateCandidateEntityLabel", u)),
                      row: "",
                      class: "mt-5"
                    }, {
                      default: m(() => [
                        (R(!0), G(Bt, null, At(x.entityLabels, (u) => (R(), xt(s, {
                          key: u.id,
                          label: `${u.id}: ${u.text}`,
                          value: u.id,
                          color: u.color || "#000000",
                          class: "radio-button-custom"
                        }, {
                          label: m(() => [
                            y("span", {
                              class: "radio-label",
                              style: Mt({ color: u.color || "#000000" })
                            }, Q(u.id) + ": " + Q(u.text), 5)
                          ]),
                          _: 2
                        }, 1032, ["label", "value", "color"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                g(h, null, {
                  default: m(() => [
                    g(B),
                    g(l, {
                      color: "grey darken-1",
                      text: "",
                      onClick: n[1] || (n[1] = (u) => x.$emit("cancel"))
                    }, {
                      default: m(() => n[17] || (n[17] = [
                        P(" キャンセル ")
                      ])),
                      _: 1,
                      __: [17]
                    }),
                    g(l, {
                      color: "primary",
                      variant: "flat",
                      onClick: n[2] || (n[2] = (u) => x.$emit("confirm", "add"))
                    }, {
                      default: m(() => n[18] || (n[18] = [
                        P(" 追加 ")
                      ])),
                      _: 1,
                      __: [18]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model-value"]),
        g(A, {
          "model-value": x.dialog4Updating,
          "max-width": "500"
        }, {
          default: m(() => [
            g(a, {
              color: "rgba(255, 255, 255, 1.0)",
              class: "ma-3"
            }, {
              default: m(() => [
                g(i, { class: "text-h5" }, {
                  default: m(() => n[19] || (n[19] = [
                    P(" 修正しますか？ ")
                  ])),
                  _: 1,
                  __: [19]
                }),
                g(e, null, {
                  default: m(() => [
                    n[21] || (n[21] = P(" 修正する場合は、範囲指定をし直すか、ラベルを選んで、")),
                    g(l, {
                      color: "green",
                      variant: "tonal",
                      size: "small"
                    }, {
                      default: m(() => n[20] || (n[20] = [
                        y("b", null, "アップデート", -1)
                      ])),
                      _: 1,
                      __: [20]
                    }),
                    n[22] || (n[22] = P(" してください "))
                  ]),
                  _: 1,
                  __: [21, 22]
                }),
                g(C, null, {
                  default: m(() => [
                    g(a, { variant: "outlined" }, {
                      default: m(() => [
                        y("div", gn, [
                          n[23] || (n[23] = y("span", null, [
                            y("small", null, "選択したテキスト:")
                          ], -1)),
                          y("span", An, [
                            y("b", null, Q(x.candidateEntity.text), 1)
                          ])
                        ]),
                        n[30] || (n[30] = y("hr", { class: "mx-10" }, null, -1)),
                        y("div", mn, [
                          g(B),
                          y("div", null, [
                            g(l, {
                              onClick: n[3] || (n[3] = (u) => x.$emit("updateEntityAddPrefix")),
                              size: "small",
                              color: "indigo"
                            }, {
                              default: m(() => [
                                g(L, null, {
                                  default: m(() => n[24] || (n[24] = [
                                    P("mdi-plus")
                                  ])),
                                  _: 1,
                                  __: [24]
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          n[28] || (n[28] = y("div", { class: "mx-2 mt-1" }, "前", -1)),
                          y("div", null, [
                            g(l, {
                              onClick: n[4] || (n[4] = (u) => x.$emit("updateEntitySubtractPrefix")),
                              size: "small",
                              color: "indigo"
                            }, {
                              default: m(() => [
                                g(L, null, {
                                  default: m(() => n[25] || (n[25] = [
                                    P("mdi-minus")
                                  ])),
                                  _: 1,
                                  __: [25]
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          g(B),
                          y("div", null, [
                            g(l, {
                              onClick: n[5] || (n[5] = (u) => x.$emit("updateEntitySubtractSuffix")),
                              size: "small",
                              color: "indigo"
                            }, {
                              default: m(() => [
                                g(L, null, {
                                  default: m(() => n[26] || (n[26] = [
                                    P("mdi-minus")
                                  ])),
                                  _: 1,
                                  __: [26]
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          n[29] || (n[29] = y("div", { class: "mx-2 mt-1" }, "後", -1)),
                          y("div", null, [
                            g(l, {
                              onClick: n[6] || (n[6] = (u) => x.$emit("updateEntityAddSuffix")),
                              size: "small",
                              color: "indigo"
                            }, {
                              default: m(() => [
                                g(L, null, {
                                  default: m(() => n[27] || (n[27] = [
                                    P("mdi-plus")
                                  ])),
                                  _: 1,
                                  __: [27]
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          g(B)
                        ])
                      ]),
                      _: 1,
                      __: [30]
                    }),
                    g(f, {
                      "model-value": x.candidateEntity.label,
                      "onUpdate:modelValue": n[7] || (n[7] = (u) => u !== null && x.$emit("updateCandidateEntityLabel", u)),
                      row: "",
                      class: "mt-5"
                    }, {
                      default: m(() => [
                        (R(!0), G(Bt, null, At(x.entityLabels, (u) => (R(), xt(s, {
                          key: u.id,
                          label: `${u.id}: ${u.text}`,
                          value: u.id,
                          color: u.color || "#000000",
                          class: "radio-button-custom"
                        }, {
                          label: m(() => [
                            y("span", {
                              class: "radio-label",
                              style: Mt({ color: u.color || "#000000" })
                            }, Q(u.id) + ": " + Q(u.text), 5)
                          ]),
                          _: 2
                        }, 1032, ["label", "value", "color"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                g(h, null, {
                  default: m(() => [
                    g(B),
                    g(l, {
                      color: "grey darken-1",
                      text: "",
                      onClick: n[8] || (n[8] = (u) => x.$emit("cancel"))
                    }, {
                      default: m(() => n[31] || (n[31] = [
                        P(" キャンセル ")
                      ])),
                      _: 1,
                      __: [31]
                    }),
                    g(l, {
                      color: "green darken-1",
                      variant: "tonal",
                      onClick: n[9] || (n[9] = (u) => x.$emit("confirm", "update"))
                    }, {
                      default: m(() => n[32] || (n[32] = [
                        P(" アップデート ")
                      ])),
                      _: 1,
                      __: [32]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model-value"]),
        g(A, {
          "model-value": x.dialog4Deleting,
          "max-width": "500"
        }, {
          default: m(() => [
            g(a, {
              color: "rgba(255, 255, 255, 0.85)",
              class: "ma-3"
            }, {
              default: m(() => [
                g(i, { class: "text-h5" }, {
                  default: m(() => n[33] || (n[33] = [
                    P(" 削除しますか？ ")
                  ])),
                  _: 1,
                  __: [33]
                }),
                g(e, null, {
                  default: m(() => [
                    n[35] || (n[35] = P(" 削除する場合は、")),
                    g(l, {
                      color: "red",
                      variant: "tonal",
                      size: "small"
                    }, {
                      default: m(() => n[34] || (n[34] = [
                        y("b", null, "削除", -1)
                      ])),
                      _: 1,
                      __: [34]
                    }),
                    n[36] || (n[36] = P(" をクリックしてください "))
                  ]),
                  _: 1,
                  __: [35, 36]
                }),
                g(C, null, {
                  default: m(() => [
                    g(a, { variant: "outlined" }, {
                      default: m(() => [
                        y("div", Fn, [
                          n[37] || (n[37] = y("span", null, [
                            y("small", null, "選択したテキスト:")
                          ], -1)),
                          y("span", pn, [
                            y("b", null, Q(x.candidateEntity.text), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                g(h, null, {
                  default: m(() => [
                    g(B),
                    g(l, {
                      color: "grey darken-1",
                      text: "",
                      onClick: n[10] || (n[10] = (u) => x.$emit("cancel"))
                    }, {
                      default: m(() => n[38] || (n[38] = [
                        P(" キャンセル ")
                      ])),
                      _: 1,
                      __: [38]
                    }),
                    g(l, {
                      color: "red darken-1",
                      variant: "tonal",
                      onClick: n[11] || (n[11] = (u) => x.$emit("confirm", "delete"))
                    }, {
                      default: m(() => n[39] || (n[39] = [
                        P(" 削除 ")
                      ])),
                      _: 1,
                      __: [39]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model-value"])
      ], 64);
    };
  }
}), Zt = /* @__PURE__ */ kt(vn, [["__scopeId", "data-v-cc04ca7c"]]);
function En(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Kt = { exports: {} };
(function(r) {
  function x() {
    var n = 0, i = 1, l = 2, e = 3, a = 4, s = 5, f = 6, C = 7, B = 8, h = 9, A = 10, L = 11, u = 12, v = 13, b = 14, W = 15, J = 16, X = 17, F = 0, T = 1, E = 2, N = 3, o = 4;
    function it(t, p) {
      return 55296 <= t.charCodeAt(p) && t.charCodeAt(p) <= 56319 && 56320 <= t.charCodeAt(p + 1) && t.charCodeAt(p + 1) <= 57343;
    }
    function Dt(t, p) {
      p === void 0 && (p = 0);
      var $ = t.charCodeAt(p);
      if (55296 <= $ && $ <= 56319 && p < t.length - 1) {
        var w = $, _ = t.charCodeAt(p + 1);
        return 56320 <= _ && _ <= 57343 ? (w - 55296) * 1024 + (_ - 56320) + 65536 : w;
      }
      if (56320 <= $ && $ <= 57343 && p >= 1) {
        var w = t.charCodeAt(p - 1), _ = $;
        return 55296 <= w && w <= 56319 ? (w - 55296) * 1024 + (_ - 56320) + 65536 : _;
      }
      return $;
    }
    function Et(t, p, $) {
      var w = [t].concat(p).concat([$]), _ = w[w.length - 2], M = $, et = w.lastIndexOf(b);
      if (et > 1 && w.slice(1, et).every(function(K) {
        return K == e;
      }) && [e, v, X].indexOf(t) == -1)
        return E;
      var at = w.lastIndexOf(a);
      if (at > 0 && w.slice(1, at).every(function(K) {
        return K == a;
      }) && [u, a].indexOf(_) == -1)
        return w.filter(function(K) {
          return K == a;
        }).length % 2 == 1 ? N : o;
      if (_ == n && M == i)
        return F;
      if (_ == l || _ == n || _ == i)
        return M == b && p.every(function(K) {
          return K == e;
        }) ? E : T;
      if (M == l || M == n || M == i)
        return T;
      if (_ == f && (M == f || M == C || M == h || M == A))
        return F;
      if ((_ == h || _ == C) && (M == C || M == B))
        return F;
      if ((_ == A || _ == B) && M == B)
        return F;
      if (M == e || M == W)
        return F;
      if (M == s)
        return F;
      if (_ == u)
        return F;
      var d = w.indexOf(e) != -1 ? w.lastIndexOf(e) - 1 : w.length - 2;
      return [v, X].indexOf(w[d]) != -1 && w.slice(d + 1, -1).every(function(K) {
        return K == e;
      }) && M == b || _ == W && [J, X].indexOf(M) != -1 ? F : p.indexOf(a) != -1 ? E : _ == a && M == a ? F : T;
    }
    this.nextBreak = function(t, p) {
      if (p === void 0 && (p = 0), p < 0)
        return 0;
      if (p >= t.length - 1)
        return t.length;
      for (var $ = gt(Dt(t, p)), w = [], _ = p + 1; _ < t.length; _++)
        if (!it(t, _ - 1)) {
          var M = gt(Dt(t, _));
          if (Et($, w, M))
            return _;
          w.push(M);
        }
      return t.length;
    }, this.splitGraphemes = function(t) {
      for (var p = [], $ = 0, w; (w = this.nextBreak(t, $)) < t.length; )
        p.push(t.slice($, w)), $ = w;
      return $ < t.length && p.push(t.slice($)), p;
    }, this.iterateGraphemes = function(t) {
      var p = 0, $ = {
        next: (function() {
          var w, _;
          return (_ = this.nextBreak(t, p)) < t.length ? (w = t.slice(p, _), p = _, { value: w, done: !1 }) : p < t.length ? (w = t.slice(p), p = t.length, { value: w, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && ($[Symbol.iterator] = function() {
        return $;
      }), $;
    }, this.countGraphemes = function(t) {
      for (var p = 0, $ = 0, w; (w = this.nextBreak(t, $)) < t.length; )
        $ = w, p++;
      return $ < t.length && p++, p;
    };
    function gt(t) {
      return 1536 <= t && t <= 1541 || // Cf   [6] ARABIC NUMBER SIGN..ARABIC NUMBER MARK ABOVE
      t == 1757 || // Cf       ARABIC END OF AYAH
      t == 1807 || // Cf       SYRIAC ABBREVIATION MARK
      t == 2274 || // Cf       ARABIC DISPUTED END OF AYAH
      t == 3406 || // Lo       MALAYALAM LETTER DOT REPH
      t == 69821 || // Cf       KAITHI NUMBER SIGN
      70082 <= t && t <= 70083 || // Lo   [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
      t == 72250 || // Lo       ZANABAZAR SQUARE CLUSTER-INITIAL LETTER RA
      72326 <= t && t <= 72329 || // Lo   [4] SOYOMBO CLUSTER-INITIAL LETTER RA..SOYOMBO CLUSTER-INITIAL LETTER SA
      t == 73030 ? u : t == 13 ? n : t == 10 ? i : 0 <= t && t <= 9 || // Cc  [10] <control-0000>..<control-0009>
      11 <= t && t <= 12 || // Cc   [2] <control-000B>..<control-000C>
      14 <= t && t <= 31 || // Cc  [18] <control-000E>..<control-001F>
      127 <= t && t <= 159 || // Cc  [33] <control-007F>..<control-009F>
      t == 173 || // Cf       SOFT HYPHEN
      t == 1564 || // Cf       ARABIC LETTER MARK
      t == 6158 || // Cf       MONGOLIAN VOWEL SEPARATOR
      t == 8203 || // Cf       ZERO WIDTH SPACE
      8206 <= t && t <= 8207 || // Cf   [2] LEFT-TO-RIGHT MARK..RIGHT-TO-LEFT MARK
      t == 8232 || // Zl       LINE SEPARATOR
      t == 8233 || // Zp       PARAGRAPH SEPARATOR
      8234 <= t && t <= 8238 || // Cf   [5] LEFT-TO-RIGHT EMBEDDING..RIGHT-TO-LEFT OVERRIDE
      8288 <= t && t <= 8292 || // Cf   [5] WORD JOINER..INVISIBLE PLUS
      t == 8293 || // Cn       <reserved-2065>
      8294 <= t && t <= 8303 || // Cf  [10] LEFT-TO-RIGHT ISOLATE..NOMINAL DIGIT SHAPES
      55296 <= t && t <= 57343 || // Cs [2048] <surrogate-D800>..<surrogate-DFFF>
      t == 65279 || // Cf       ZERO WIDTH NO-BREAK SPACE
      65520 <= t && t <= 65528 || // Cn   [9] <reserved-FFF0>..<reserved-FFF8>
      65529 <= t && t <= 65531 || // Cf   [3] INTERLINEAR ANNOTATION ANCHOR..INTERLINEAR ANNOTATION TERMINATOR
      113824 <= t && t <= 113827 || // Cf   [4] SHORTHAND FORMAT LETTER OVERLAP..SHORTHAND FORMAT UP STEP
      119155 <= t && t <= 119162 || // Cf   [8] MUSICAL SYMBOL BEGIN BEAM..MUSICAL SYMBOL END PHRASE
      t == 917504 || // Cn       <reserved-E0000>
      t == 917505 || // Cf       LANGUAGE TAG
      917506 <= t && t <= 917535 || // Cn  [30] <reserved-E0002>..<reserved-E001F>
      917632 <= t && t <= 917759 || // Cn [128] <reserved-E0080>..<reserved-E00FF>
      918e3 <= t && t <= 921599 ? l : 768 <= t && t <= 879 || // Mn [112] COMBINING GRAVE ACCENT..COMBINING LATIN SMALL LETTER X
      1155 <= t && t <= 1159 || // Mn   [5] COMBINING CYRILLIC TITLO..COMBINING CYRILLIC POKRYTIE
      1160 <= t && t <= 1161 || // Me   [2] COMBINING CYRILLIC HUNDRED THOUSANDS SIGN..COMBINING CYRILLIC MILLIONS SIGN
      1425 <= t && t <= 1469 || // Mn  [45] HEBREW ACCENT ETNAHTA..HEBREW POINT METEG
      t == 1471 || // Mn       HEBREW POINT RAFE
      1473 <= t && t <= 1474 || // Mn   [2] HEBREW POINT SHIN DOT..HEBREW POINT SIN DOT
      1476 <= t && t <= 1477 || // Mn   [2] HEBREW MARK UPPER DOT..HEBREW MARK LOWER DOT
      t == 1479 || // Mn       HEBREW POINT QAMATS QATAN
      1552 <= t && t <= 1562 || // Mn  [11] ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM..ARABIC SMALL KASRA
      1611 <= t && t <= 1631 || // Mn  [21] ARABIC FATHATAN..ARABIC WAVY HAMZA BELOW
      t == 1648 || // Mn       ARABIC LETTER SUPERSCRIPT ALEF
      1750 <= t && t <= 1756 || // Mn   [7] ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA..ARABIC SMALL HIGH SEEN
      1759 <= t && t <= 1764 || // Mn   [6] ARABIC SMALL HIGH ROUNDED ZERO..ARABIC SMALL HIGH MADDA
      1767 <= t && t <= 1768 || // Mn   [2] ARABIC SMALL HIGH YEH..ARABIC SMALL HIGH NOON
      1770 <= t && t <= 1773 || // Mn   [4] ARABIC EMPTY CENTRE LOW STOP..ARABIC SMALL LOW MEEM
      t == 1809 || // Mn       SYRIAC LETTER SUPERSCRIPT ALAPH
      1840 <= t && t <= 1866 || // Mn  [27] SYRIAC PTHAHA ABOVE..SYRIAC BARREKH
      1958 <= t && t <= 1968 || // Mn  [11] THAANA ABAFILI..THAANA SUKUN
      2027 <= t && t <= 2035 || // Mn   [9] NKO COMBINING SHORT HIGH TONE..NKO COMBINING DOUBLE DOT ABOVE
      2070 <= t && t <= 2073 || // Mn   [4] SAMARITAN MARK IN..SAMARITAN MARK DAGESH
      2075 <= t && t <= 2083 || // Mn   [9] SAMARITAN MARK EPENTHETIC YUT..SAMARITAN VOWEL SIGN A
      2085 <= t && t <= 2087 || // Mn   [3] SAMARITAN VOWEL SIGN SHORT A..SAMARITAN VOWEL SIGN U
      2089 <= t && t <= 2093 || // Mn   [5] SAMARITAN VOWEL SIGN LONG I..SAMARITAN MARK NEQUDAA
      2137 <= t && t <= 2139 || // Mn   [3] MANDAIC AFFRICATION MARK..MANDAIC GEMINATION MARK
      2260 <= t && t <= 2273 || // Mn  [14] ARABIC SMALL HIGH WORD AR-RUB..ARABIC SMALL HIGH SIGN SAFHA
      2275 <= t && t <= 2306 || // Mn  [32] ARABIC TURNED DAMMA BELOW..DEVANAGARI SIGN ANUSVARA
      t == 2362 || // Mn       DEVANAGARI VOWEL SIGN OE
      t == 2364 || // Mn       DEVANAGARI SIGN NUKTA
      2369 <= t && t <= 2376 || // Mn   [8] DEVANAGARI VOWEL SIGN U..DEVANAGARI VOWEL SIGN AI
      t == 2381 || // Mn       DEVANAGARI SIGN VIRAMA
      2385 <= t && t <= 2391 || // Mn   [7] DEVANAGARI STRESS SIGN UDATTA..DEVANAGARI VOWEL SIGN UUE
      2402 <= t && t <= 2403 || // Mn   [2] DEVANAGARI VOWEL SIGN VOCALIC L..DEVANAGARI VOWEL SIGN VOCALIC LL
      t == 2433 || // Mn       BENGALI SIGN CANDRABINDU
      t == 2492 || // Mn       BENGALI SIGN NUKTA
      t == 2494 || // Mc       BENGALI VOWEL SIGN AA
      2497 <= t && t <= 2500 || // Mn   [4] BENGALI VOWEL SIGN U..BENGALI VOWEL SIGN VOCALIC RR
      t == 2509 || // Mn       BENGALI SIGN VIRAMA
      t == 2519 || // Mc       BENGALI AU LENGTH MARK
      2530 <= t && t <= 2531 || // Mn   [2] BENGALI VOWEL SIGN VOCALIC L..BENGALI VOWEL SIGN VOCALIC LL
      2561 <= t && t <= 2562 || // Mn   [2] GURMUKHI SIGN ADAK BINDI..GURMUKHI SIGN BINDI
      t == 2620 || // Mn       GURMUKHI SIGN NUKTA
      2625 <= t && t <= 2626 || // Mn   [2] GURMUKHI VOWEL SIGN U..GURMUKHI VOWEL SIGN UU
      2631 <= t && t <= 2632 || // Mn   [2] GURMUKHI VOWEL SIGN EE..GURMUKHI VOWEL SIGN AI
      2635 <= t && t <= 2637 || // Mn   [3] GURMUKHI VOWEL SIGN OO..GURMUKHI SIGN VIRAMA
      t == 2641 || // Mn       GURMUKHI SIGN UDAAT
      2672 <= t && t <= 2673 || // Mn   [2] GURMUKHI TIPPI..GURMUKHI ADDAK
      t == 2677 || // Mn       GURMUKHI SIGN YAKASH
      2689 <= t && t <= 2690 || // Mn   [2] GUJARATI SIGN CANDRABINDU..GUJARATI SIGN ANUSVARA
      t == 2748 || // Mn       GUJARATI SIGN NUKTA
      2753 <= t && t <= 2757 || // Mn   [5] GUJARATI VOWEL SIGN U..GUJARATI VOWEL SIGN CANDRA E
      2759 <= t && t <= 2760 || // Mn   [2] GUJARATI VOWEL SIGN E..GUJARATI VOWEL SIGN AI
      t == 2765 || // Mn       GUJARATI SIGN VIRAMA
      2786 <= t && t <= 2787 || // Mn   [2] GUJARATI VOWEL SIGN VOCALIC L..GUJARATI VOWEL SIGN VOCALIC LL
      2810 <= t && t <= 2815 || // Mn   [6] GUJARATI SIGN SUKUN..GUJARATI SIGN TWO-CIRCLE NUKTA ABOVE
      t == 2817 || // Mn       ORIYA SIGN CANDRABINDU
      t == 2876 || // Mn       ORIYA SIGN NUKTA
      t == 2878 || // Mc       ORIYA VOWEL SIGN AA
      t == 2879 || // Mn       ORIYA VOWEL SIGN I
      2881 <= t && t <= 2884 || // Mn   [4] ORIYA VOWEL SIGN U..ORIYA VOWEL SIGN VOCALIC RR
      t == 2893 || // Mn       ORIYA SIGN VIRAMA
      t == 2902 || // Mn       ORIYA AI LENGTH MARK
      t == 2903 || // Mc       ORIYA AU LENGTH MARK
      2914 <= t && t <= 2915 || // Mn   [2] ORIYA VOWEL SIGN VOCALIC L..ORIYA VOWEL SIGN VOCALIC LL
      t == 2946 || // Mn       TAMIL SIGN ANUSVARA
      t == 3006 || // Mc       TAMIL VOWEL SIGN AA
      t == 3008 || // Mn       TAMIL VOWEL SIGN II
      t == 3021 || // Mn       TAMIL SIGN VIRAMA
      t == 3031 || // Mc       TAMIL AU LENGTH MARK
      t == 3072 || // Mn       TELUGU SIGN COMBINING CANDRABINDU ABOVE
      3134 <= t && t <= 3136 || // Mn   [3] TELUGU VOWEL SIGN AA..TELUGU VOWEL SIGN II
      3142 <= t && t <= 3144 || // Mn   [3] TELUGU VOWEL SIGN E..TELUGU VOWEL SIGN AI
      3146 <= t && t <= 3149 || // Mn   [4] TELUGU VOWEL SIGN O..TELUGU SIGN VIRAMA
      3157 <= t && t <= 3158 || // Mn   [2] TELUGU LENGTH MARK..TELUGU AI LENGTH MARK
      3170 <= t && t <= 3171 || // Mn   [2] TELUGU VOWEL SIGN VOCALIC L..TELUGU VOWEL SIGN VOCALIC LL
      t == 3201 || // Mn       KANNADA SIGN CANDRABINDU
      t == 3260 || // Mn       KANNADA SIGN NUKTA
      t == 3263 || // Mn       KANNADA VOWEL SIGN I
      t == 3266 || // Mc       KANNADA VOWEL SIGN UU
      t == 3270 || // Mn       KANNADA VOWEL SIGN E
      3276 <= t && t <= 3277 || // Mn   [2] KANNADA VOWEL SIGN AU..KANNADA SIGN VIRAMA
      3285 <= t && t <= 3286 || // Mc   [2] KANNADA LENGTH MARK..KANNADA AI LENGTH MARK
      3298 <= t && t <= 3299 || // Mn   [2] KANNADA VOWEL SIGN VOCALIC L..KANNADA VOWEL SIGN VOCALIC LL
      3328 <= t && t <= 3329 || // Mn   [2] MALAYALAM SIGN COMBINING ANUSVARA ABOVE..MALAYALAM SIGN CANDRABINDU
      3387 <= t && t <= 3388 || // Mn   [2] MALAYALAM SIGN VERTICAL BAR VIRAMA..MALAYALAM SIGN CIRCULAR VIRAMA
      t == 3390 || // Mc       MALAYALAM VOWEL SIGN AA
      3393 <= t && t <= 3396 || // Mn   [4] MALAYALAM VOWEL SIGN U..MALAYALAM VOWEL SIGN VOCALIC RR
      t == 3405 || // Mn       MALAYALAM SIGN VIRAMA
      t == 3415 || // Mc       MALAYALAM AU LENGTH MARK
      3426 <= t && t <= 3427 || // Mn   [2] MALAYALAM VOWEL SIGN VOCALIC L..MALAYALAM VOWEL SIGN VOCALIC LL
      t == 3530 || // Mn       SINHALA SIGN AL-LAKUNA
      t == 3535 || // Mc       SINHALA VOWEL SIGN AELA-PILLA
      3538 <= t && t <= 3540 || // Mn   [3] SINHALA VOWEL SIGN KETTI IS-PILLA..SINHALA VOWEL SIGN KETTI PAA-PILLA
      t == 3542 || // Mn       SINHALA VOWEL SIGN DIGA PAA-PILLA
      t == 3551 || // Mc       SINHALA VOWEL SIGN GAYANUKITTA
      t == 3633 || // Mn       THAI CHARACTER MAI HAN-AKAT
      3636 <= t && t <= 3642 || // Mn   [7] THAI CHARACTER SARA I..THAI CHARACTER PHINTHU
      3655 <= t && t <= 3662 || // Mn   [8] THAI CHARACTER MAITAIKHU..THAI CHARACTER YAMAKKAN
      t == 3761 || // Mn       LAO VOWEL SIGN MAI KAN
      3764 <= t && t <= 3769 || // Mn   [6] LAO VOWEL SIGN I..LAO VOWEL SIGN UU
      3771 <= t && t <= 3772 || // Mn   [2] LAO VOWEL SIGN MAI KON..LAO SEMIVOWEL SIGN LO
      3784 <= t && t <= 3789 || // Mn   [6] LAO TONE MAI EK..LAO NIGGAHITA
      3864 <= t && t <= 3865 || // Mn   [2] TIBETAN ASTROLOGICAL SIGN -KHYUD PA..TIBETAN ASTROLOGICAL SIGN SDONG TSHUGS
      t == 3893 || // Mn       TIBETAN MARK NGAS BZUNG NYI ZLA
      t == 3895 || // Mn       TIBETAN MARK NGAS BZUNG SGOR RTAGS
      t == 3897 || // Mn       TIBETAN MARK TSA -PHRU
      3953 <= t && t <= 3966 || // Mn  [14] TIBETAN VOWEL SIGN AA..TIBETAN SIGN RJES SU NGA RO
      3968 <= t && t <= 3972 || // Mn   [5] TIBETAN VOWEL SIGN REVERSED I..TIBETAN MARK HALANTA
      3974 <= t && t <= 3975 || // Mn   [2] TIBETAN SIGN LCI RTAGS..TIBETAN SIGN YANG RTAGS
      3981 <= t && t <= 3991 || // Mn  [11] TIBETAN SUBJOINED SIGN LCE TSA CAN..TIBETAN SUBJOINED LETTER JA
      3993 <= t && t <= 4028 || // Mn  [36] TIBETAN SUBJOINED LETTER NYA..TIBETAN SUBJOINED LETTER FIXED-FORM RA
      t == 4038 || // Mn       TIBETAN SYMBOL PADMA GDAN
      4141 <= t && t <= 4144 || // Mn   [4] MYANMAR VOWEL SIGN I..MYANMAR VOWEL SIGN UU
      4146 <= t && t <= 4151 || // Mn   [6] MYANMAR VOWEL SIGN AI..MYANMAR SIGN DOT BELOW
      4153 <= t && t <= 4154 || // Mn   [2] MYANMAR SIGN VIRAMA..MYANMAR SIGN ASAT
      4157 <= t && t <= 4158 || // Mn   [2] MYANMAR CONSONANT SIGN MEDIAL WA..MYANMAR CONSONANT SIGN MEDIAL HA
      4184 <= t && t <= 4185 || // Mn   [2] MYANMAR VOWEL SIGN VOCALIC L..MYANMAR VOWEL SIGN VOCALIC LL
      4190 <= t && t <= 4192 || // Mn   [3] MYANMAR CONSONANT SIGN MON MEDIAL NA..MYANMAR CONSONANT SIGN MON MEDIAL LA
      4209 <= t && t <= 4212 || // Mn   [4] MYANMAR VOWEL SIGN GEBA KAREN I..MYANMAR VOWEL SIGN KAYAH EE
      t == 4226 || // Mn       MYANMAR CONSONANT SIGN SHAN MEDIAL WA
      4229 <= t && t <= 4230 || // Mn   [2] MYANMAR VOWEL SIGN SHAN E ABOVE..MYANMAR VOWEL SIGN SHAN FINAL Y
      t == 4237 || // Mn       MYANMAR SIGN SHAN COUNCIL EMPHATIC TONE
      t == 4253 || // Mn       MYANMAR VOWEL SIGN AITON AI
      4957 <= t && t <= 4959 || // Mn   [3] ETHIOPIC COMBINING GEMINATION AND VOWEL LENGTH MARK..ETHIOPIC COMBINING GEMINATION MARK
      5906 <= t && t <= 5908 || // Mn   [3] TAGALOG VOWEL SIGN I..TAGALOG SIGN VIRAMA
      5938 <= t && t <= 5940 || // Mn   [3] HANUNOO VOWEL SIGN I..HANUNOO SIGN PAMUDPOD
      5970 <= t && t <= 5971 || // Mn   [2] BUHID VOWEL SIGN I..BUHID VOWEL SIGN U
      6002 <= t && t <= 6003 || // Mn   [2] TAGBANWA VOWEL SIGN I..TAGBANWA VOWEL SIGN U
      6068 <= t && t <= 6069 || // Mn   [2] KHMER VOWEL INHERENT AQ..KHMER VOWEL INHERENT AA
      6071 <= t && t <= 6077 || // Mn   [7] KHMER VOWEL SIGN I..KHMER VOWEL SIGN UA
      t == 6086 || // Mn       KHMER SIGN NIKAHIT
      6089 <= t && t <= 6099 || // Mn  [11] KHMER SIGN MUUSIKATOAN..KHMER SIGN BATHAMASAT
      t == 6109 || // Mn       KHMER SIGN ATTHACAN
      6155 <= t && t <= 6157 || // Mn   [3] MONGOLIAN FREE VARIATION SELECTOR ONE..MONGOLIAN FREE VARIATION SELECTOR THREE
      6277 <= t && t <= 6278 || // Mn   [2] MONGOLIAN LETTER ALI GALI BALUDA..MONGOLIAN LETTER ALI GALI THREE BALUDA
      t == 6313 || // Mn       MONGOLIAN LETTER ALI GALI DAGALGA
      6432 <= t && t <= 6434 || // Mn   [3] LIMBU VOWEL SIGN A..LIMBU VOWEL SIGN U
      6439 <= t && t <= 6440 || // Mn   [2] LIMBU VOWEL SIGN E..LIMBU VOWEL SIGN O
      t == 6450 || // Mn       LIMBU SMALL LETTER ANUSVARA
      6457 <= t && t <= 6459 || // Mn   [3] LIMBU SIGN MUKPHRENG..LIMBU SIGN SA-I
      6679 <= t && t <= 6680 || // Mn   [2] BUGINESE VOWEL SIGN I..BUGINESE VOWEL SIGN U
      t == 6683 || // Mn       BUGINESE VOWEL SIGN AE
      t == 6742 || // Mn       TAI THAM CONSONANT SIGN MEDIAL LA
      6744 <= t && t <= 6750 || // Mn   [7] TAI THAM SIGN MAI KANG LAI..TAI THAM CONSONANT SIGN SA
      t == 6752 || // Mn       TAI THAM SIGN SAKOT
      t == 6754 || // Mn       TAI THAM VOWEL SIGN MAI SAT
      6757 <= t && t <= 6764 || // Mn   [8] TAI THAM VOWEL SIGN I..TAI THAM VOWEL SIGN OA BELOW
      6771 <= t && t <= 6780 || // Mn  [10] TAI THAM VOWEL SIGN OA ABOVE..TAI THAM SIGN KHUEN-LUE KARAN
      t == 6783 || // Mn       TAI THAM COMBINING CRYPTOGRAMMIC DOT
      6832 <= t && t <= 6845 || // Mn  [14] COMBINING DOUBLED CIRCUMFLEX ACCENT..COMBINING PARENTHESES BELOW
      t == 6846 || // Me       COMBINING PARENTHESES OVERLAY
      6912 <= t && t <= 6915 || // Mn   [4] BALINESE SIGN ULU RICEM..BALINESE SIGN SURANG
      t == 6964 || // Mn       BALINESE SIGN REREKAN
      6966 <= t && t <= 6970 || // Mn   [5] BALINESE VOWEL SIGN ULU..BALINESE VOWEL SIGN RA REPA
      t == 6972 || // Mn       BALINESE VOWEL SIGN LA LENGA
      t == 6978 || // Mn       BALINESE VOWEL SIGN PEPET
      7019 <= t && t <= 7027 || // Mn   [9] BALINESE MUSICAL SYMBOL COMBINING TEGEH..BALINESE MUSICAL SYMBOL COMBINING GONG
      7040 <= t && t <= 7041 || // Mn   [2] SUNDANESE SIGN PANYECEK..SUNDANESE SIGN PANGLAYAR
      7074 <= t && t <= 7077 || // Mn   [4] SUNDANESE CONSONANT SIGN PANYAKRA..SUNDANESE VOWEL SIGN PANYUKU
      7080 <= t && t <= 7081 || // Mn   [2] SUNDANESE VOWEL SIGN PAMEPET..SUNDANESE VOWEL SIGN PANEULEUNG
      7083 <= t && t <= 7085 || // Mn   [3] SUNDANESE SIGN VIRAMA..SUNDANESE CONSONANT SIGN PASANGAN WA
      t == 7142 || // Mn       BATAK SIGN TOMPI
      7144 <= t && t <= 7145 || // Mn   [2] BATAK VOWEL SIGN PAKPAK E..BATAK VOWEL SIGN EE
      t == 7149 || // Mn       BATAK VOWEL SIGN KARO O
      7151 <= t && t <= 7153 || // Mn   [3] BATAK VOWEL SIGN U FOR SIMALUNGUN SA..BATAK CONSONANT SIGN H
      7212 <= t && t <= 7219 || // Mn   [8] LEPCHA VOWEL SIGN E..LEPCHA CONSONANT SIGN T
      7222 <= t && t <= 7223 || // Mn   [2] LEPCHA SIGN RAN..LEPCHA SIGN NUKTA
      7376 <= t && t <= 7378 || // Mn   [3] VEDIC TONE KARSHANA..VEDIC TONE PRENKHA
      7380 <= t && t <= 7392 || // Mn  [13] VEDIC SIGN YAJURVEDIC MIDLINE SVARITA..VEDIC TONE RIGVEDIC KASHMIRI INDEPENDENT SVARITA
      7394 <= t && t <= 7400 || // Mn   [7] VEDIC SIGN VISARGA SVARITA..VEDIC SIGN VISARGA ANUDATTA WITH TAIL
      t == 7405 || // Mn       VEDIC SIGN TIRYAK
      t == 7412 || // Mn       VEDIC TONE CANDRA ABOVE
      7416 <= t && t <= 7417 || // Mn   [2] VEDIC TONE RING ABOVE..VEDIC TONE DOUBLE RING ABOVE
      7616 <= t && t <= 7673 || // Mn  [58] COMBINING DOTTED GRAVE ACCENT..COMBINING WIDE INVERTED BRIDGE BELOW
      7675 <= t && t <= 7679 || // Mn   [5] COMBINING DELETION MARK..COMBINING RIGHT ARROWHEAD AND DOWN ARROWHEAD BELOW
      t == 8204 || // Cf       ZERO WIDTH NON-JOINER
      8400 <= t && t <= 8412 || // Mn  [13] COMBINING LEFT HARPOON ABOVE..COMBINING FOUR DOTS ABOVE
      8413 <= t && t <= 8416 || // Me   [4] COMBINING ENCLOSING CIRCLE..COMBINING ENCLOSING CIRCLE BACKSLASH
      t == 8417 || // Mn       COMBINING LEFT RIGHT ARROW ABOVE
      8418 <= t && t <= 8420 || // Me   [3] COMBINING ENCLOSING SCREEN..COMBINING ENCLOSING UPWARD POINTING TRIANGLE
      8421 <= t && t <= 8432 || // Mn  [12] COMBINING REVERSE SOLIDUS OVERLAY..COMBINING ASTERISK ABOVE
      11503 <= t && t <= 11505 || // Mn   [3] COPTIC COMBINING NI ABOVE..COPTIC COMBINING SPIRITUS LENIS
      t == 11647 || // Mn       TIFINAGH CONSONANT JOINER
      11744 <= t && t <= 11775 || // Mn  [32] COMBINING CYRILLIC LETTER BE..COMBINING CYRILLIC LETTER IOTIFIED BIG YUS
      12330 <= t && t <= 12333 || // Mn   [4] IDEOGRAPHIC LEVEL TONE MARK..IDEOGRAPHIC ENTERING TONE MARK
      12334 <= t && t <= 12335 || // Mc   [2] HANGUL SINGLE DOT TONE MARK..HANGUL DOUBLE DOT TONE MARK
      12441 <= t && t <= 12442 || // Mn   [2] COMBINING KATAKANA-HIRAGANA VOICED SOUND MARK..COMBINING KATAKANA-HIRAGANA SEMI-VOICED SOUND MARK
      t == 42607 || // Mn       COMBINING CYRILLIC VZMET
      42608 <= t && t <= 42610 || // Me   [3] COMBINING CYRILLIC TEN MILLIONS SIGN..COMBINING CYRILLIC THOUSAND MILLIONS SIGN
      42612 <= t && t <= 42621 || // Mn  [10] COMBINING CYRILLIC LETTER UKRAINIAN IE..COMBINING CYRILLIC PAYEROK
      42654 <= t && t <= 42655 || // Mn   [2] COMBINING CYRILLIC LETTER EF..COMBINING CYRILLIC LETTER IOTIFIED E
      42736 <= t && t <= 42737 || // Mn   [2] BAMUM COMBINING MARK KOQNDON..BAMUM COMBINING MARK TUKWENTIS
      t == 43010 || // Mn       SYLOTI NAGRI SIGN DVISVARA
      t == 43014 || // Mn       SYLOTI NAGRI SIGN HASANTA
      t == 43019 || // Mn       SYLOTI NAGRI SIGN ANUSVARA
      43045 <= t && t <= 43046 || // Mn   [2] SYLOTI NAGRI VOWEL SIGN U..SYLOTI NAGRI VOWEL SIGN E
      43204 <= t && t <= 43205 || // Mn   [2] SAURASHTRA SIGN VIRAMA..SAURASHTRA SIGN CANDRABINDU
      43232 <= t && t <= 43249 || // Mn  [18] COMBINING DEVANAGARI DIGIT ZERO..COMBINING DEVANAGARI SIGN AVAGRAHA
      43302 <= t && t <= 43309 || // Mn   [8] KAYAH LI VOWEL UE..KAYAH LI TONE CALYA PLOPHU
      43335 <= t && t <= 43345 || // Mn  [11] REJANG VOWEL SIGN I..REJANG CONSONANT SIGN R
      43392 <= t && t <= 43394 || // Mn   [3] JAVANESE SIGN PANYANGGA..JAVANESE SIGN LAYAR
      t == 43443 || // Mn       JAVANESE SIGN CECAK TELU
      43446 <= t && t <= 43449 || // Mn   [4] JAVANESE VOWEL SIGN WULU..JAVANESE VOWEL SIGN SUKU MENDUT
      t == 43452 || // Mn       JAVANESE VOWEL SIGN PEPET
      t == 43493 || // Mn       MYANMAR SIGN SHAN SAW
      43561 <= t && t <= 43566 || // Mn   [6] CHAM VOWEL SIGN AA..CHAM VOWEL SIGN OE
      43569 <= t && t <= 43570 || // Mn   [2] CHAM VOWEL SIGN AU..CHAM VOWEL SIGN UE
      43573 <= t && t <= 43574 || // Mn   [2] CHAM CONSONANT SIGN LA..CHAM CONSONANT SIGN WA
      t == 43587 || // Mn       CHAM CONSONANT SIGN FINAL NG
      t == 43596 || // Mn       CHAM CONSONANT SIGN FINAL M
      t == 43644 || // Mn       MYANMAR SIGN TAI LAING TONE-2
      t == 43696 || // Mn       TAI VIET MAI KANG
      43698 <= t && t <= 43700 || // Mn   [3] TAI VIET VOWEL I..TAI VIET VOWEL U
      43703 <= t && t <= 43704 || // Mn   [2] TAI VIET MAI KHIT..TAI VIET VOWEL IA
      43710 <= t && t <= 43711 || // Mn   [2] TAI VIET VOWEL AM..TAI VIET TONE MAI EK
      t == 43713 || // Mn       TAI VIET TONE MAI THO
      43756 <= t && t <= 43757 || // Mn   [2] MEETEI MAYEK VOWEL SIGN UU..MEETEI MAYEK VOWEL SIGN AAI
      t == 43766 || // Mn       MEETEI MAYEK VIRAMA
      t == 44005 || // Mn       MEETEI MAYEK VOWEL SIGN ANAP
      t == 44008 || // Mn       MEETEI MAYEK VOWEL SIGN UNAP
      t == 44013 || // Mn       MEETEI MAYEK APUN IYEK
      t == 64286 || // Mn       HEBREW POINT JUDEO-SPANISH VARIKA
      65024 <= t && t <= 65039 || // Mn  [16] VARIATION SELECTOR-1..VARIATION SELECTOR-16
      65056 <= t && t <= 65071 || // Mn  [16] COMBINING LIGATURE LEFT HALF..COMBINING CYRILLIC TITLO RIGHT HALF
      65438 <= t && t <= 65439 || // Lm   [2] HALFWIDTH KATAKANA VOICED SOUND MARK..HALFWIDTH KATAKANA SEMI-VOICED SOUND MARK
      t == 66045 || // Mn       PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE
      t == 66272 || // Mn       COPTIC EPACT THOUSANDS MARK
      66422 <= t && t <= 66426 || // Mn   [5] COMBINING OLD PERMIC LETTER AN..COMBINING OLD PERMIC LETTER SII
      68097 <= t && t <= 68099 || // Mn   [3] KHAROSHTHI VOWEL SIGN I..KHAROSHTHI VOWEL SIGN VOCALIC R
      68101 <= t && t <= 68102 || // Mn   [2] KHAROSHTHI VOWEL SIGN E..KHAROSHTHI VOWEL SIGN O
      68108 <= t && t <= 68111 || // Mn   [4] KHAROSHTHI VOWEL LENGTH MARK..KHAROSHTHI SIGN VISARGA
      68152 <= t && t <= 68154 || // Mn   [3] KHAROSHTHI SIGN BAR ABOVE..KHAROSHTHI SIGN DOT BELOW
      t == 68159 || // Mn       KHAROSHTHI VIRAMA
      68325 <= t && t <= 68326 || // Mn   [2] MANICHAEAN ABBREVIATION MARK ABOVE..MANICHAEAN ABBREVIATION MARK BELOW
      t == 69633 || // Mn       BRAHMI SIGN ANUSVARA
      69688 <= t && t <= 69702 || // Mn  [15] BRAHMI VOWEL SIGN AA..BRAHMI VIRAMA
      69759 <= t && t <= 69761 || // Mn   [3] BRAHMI NUMBER JOINER..KAITHI SIGN ANUSVARA
      69811 <= t && t <= 69814 || // Mn   [4] KAITHI VOWEL SIGN U..KAITHI VOWEL SIGN AI
      69817 <= t && t <= 69818 || // Mn   [2] KAITHI SIGN VIRAMA..KAITHI SIGN NUKTA
      69888 <= t && t <= 69890 || // Mn   [3] CHAKMA SIGN CANDRABINDU..CHAKMA SIGN VISARGA
      69927 <= t && t <= 69931 || // Mn   [5] CHAKMA VOWEL SIGN A..CHAKMA VOWEL SIGN UU
      69933 <= t && t <= 69940 || // Mn   [8] CHAKMA VOWEL SIGN AI..CHAKMA MAAYYAA
      t == 70003 || // Mn       MAHAJANI SIGN NUKTA
      70016 <= t && t <= 70017 || // Mn   [2] SHARADA SIGN CANDRABINDU..SHARADA SIGN ANUSVARA
      70070 <= t && t <= 70078 || // Mn   [9] SHARADA VOWEL SIGN U..SHARADA VOWEL SIGN O
      70090 <= t && t <= 70092 || // Mn   [3] SHARADA SIGN NUKTA..SHARADA EXTRA SHORT VOWEL MARK
      70191 <= t && t <= 70193 || // Mn   [3] KHOJKI VOWEL SIGN U..KHOJKI VOWEL SIGN AI
      t == 70196 || // Mn       KHOJKI SIGN ANUSVARA
      70198 <= t && t <= 70199 || // Mn   [2] KHOJKI SIGN NUKTA..KHOJKI SIGN SHADDA
      t == 70206 || // Mn       KHOJKI SIGN SUKUN
      t == 70367 || // Mn       KHUDAWADI SIGN ANUSVARA
      70371 <= t && t <= 70378 || // Mn   [8] KHUDAWADI VOWEL SIGN U..KHUDAWADI SIGN VIRAMA
      70400 <= t && t <= 70401 || // Mn   [2] GRANTHA SIGN COMBINING ANUSVARA ABOVE..GRANTHA SIGN CANDRABINDU
      t == 70460 || // Mn       GRANTHA SIGN NUKTA
      t == 70462 || // Mc       GRANTHA VOWEL SIGN AA
      t == 70464 || // Mn       GRANTHA VOWEL SIGN II
      t == 70487 || // Mc       GRANTHA AU LENGTH MARK
      70502 <= t && t <= 70508 || // Mn   [7] COMBINING GRANTHA DIGIT ZERO..COMBINING GRANTHA DIGIT SIX
      70512 <= t && t <= 70516 || // Mn   [5] COMBINING GRANTHA LETTER A..COMBINING GRANTHA LETTER PA
      70712 <= t && t <= 70719 || // Mn   [8] NEWA VOWEL SIGN U..NEWA VOWEL SIGN AI
      70722 <= t && t <= 70724 || // Mn   [3] NEWA SIGN VIRAMA..NEWA SIGN ANUSVARA
      t == 70726 || // Mn       NEWA SIGN NUKTA
      t == 70832 || // Mc       TIRHUTA VOWEL SIGN AA
      70835 <= t && t <= 70840 || // Mn   [6] TIRHUTA VOWEL SIGN U..TIRHUTA VOWEL SIGN VOCALIC LL
      t == 70842 || // Mn       TIRHUTA VOWEL SIGN SHORT E
      t == 70845 || // Mc       TIRHUTA VOWEL SIGN SHORT O
      70847 <= t && t <= 70848 || // Mn   [2] TIRHUTA SIGN CANDRABINDU..TIRHUTA SIGN ANUSVARA
      70850 <= t && t <= 70851 || // Mn   [2] TIRHUTA SIGN VIRAMA..TIRHUTA SIGN NUKTA
      t == 71087 || // Mc       SIDDHAM VOWEL SIGN AA
      71090 <= t && t <= 71093 || // Mn   [4] SIDDHAM VOWEL SIGN U..SIDDHAM VOWEL SIGN VOCALIC RR
      71100 <= t && t <= 71101 || // Mn   [2] SIDDHAM SIGN CANDRABINDU..SIDDHAM SIGN ANUSVARA
      71103 <= t && t <= 71104 || // Mn   [2] SIDDHAM SIGN VIRAMA..SIDDHAM SIGN NUKTA
      71132 <= t && t <= 71133 || // Mn   [2] SIDDHAM VOWEL SIGN ALTERNATE U..SIDDHAM VOWEL SIGN ALTERNATE UU
      71219 <= t && t <= 71226 || // Mn   [8] MODI VOWEL SIGN U..MODI VOWEL SIGN AI
      t == 71229 || // Mn       MODI SIGN ANUSVARA
      71231 <= t && t <= 71232 || // Mn   [2] MODI SIGN VIRAMA..MODI SIGN ARDHACANDRA
      t == 71339 || // Mn       TAKRI SIGN ANUSVARA
      t == 71341 || // Mn       TAKRI VOWEL SIGN AA
      71344 <= t && t <= 71349 || // Mn   [6] TAKRI VOWEL SIGN U..TAKRI VOWEL SIGN AU
      t == 71351 || // Mn       TAKRI SIGN NUKTA
      71453 <= t && t <= 71455 || // Mn   [3] AHOM CONSONANT SIGN MEDIAL LA..AHOM CONSONANT SIGN MEDIAL LIGATING RA
      71458 <= t && t <= 71461 || // Mn   [4] AHOM VOWEL SIGN I..AHOM VOWEL SIGN UU
      71463 <= t && t <= 71467 || // Mn   [5] AHOM VOWEL SIGN AW..AHOM SIGN KILLER
      72193 <= t && t <= 72198 || // Mn   [6] ZANABAZAR SQUARE VOWEL SIGN I..ZANABAZAR SQUARE VOWEL SIGN O
      72201 <= t && t <= 72202 || // Mn   [2] ZANABAZAR SQUARE VOWEL SIGN REVERSED I..ZANABAZAR SQUARE VOWEL LENGTH MARK
      72243 <= t && t <= 72248 || // Mn   [6] ZANABAZAR SQUARE FINAL CONSONANT MARK..ZANABAZAR SQUARE SIGN ANUSVARA
      72251 <= t && t <= 72254 || // Mn   [4] ZANABAZAR SQUARE CLUSTER-FINAL LETTER YA..ZANABAZAR SQUARE CLUSTER-FINAL LETTER VA
      t == 72263 || // Mn       ZANABAZAR SQUARE SUBJOINER
      72273 <= t && t <= 72278 || // Mn   [6] SOYOMBO VOWEL SIGN I..SOYOMBO VOWEL SIGN OE
      72281 <= t && t <= 72283 || // Mn   [3] SOYOMBO VOWEL SIGN VOCALIC R..SOYOMBO VOWEL LENGTH MARK
      72330 <= t && t <= 72342 || // Mn  [13] SOYOMBO FINAL CONSONANT SIGN G..SOYOMBO SIGN ANUSVARA
      72344 <= t && t <= 72345 || // Mn   [2] SOYOMBO GEMINATION MARK..SOYOMBO SUBJOINER
      72752 <= t && t <= 72758 || // Mn   [7] BHAIKSUKI VOWEL SIGN I..BHAIKSUKI VOWEL SIGN VOCALIC L
      72760 <= t && t <= 72765 || // Mn   [6] BHAIKSUKI VOWEL SIGN E..BHAIKSUKI SIGN ANUSVARA
      t == 72767 || // Mn       BHAIKSUKI SIGN VIRAMA
      72850 <= t && t <= 72871 || // Mn  [22] MARCHEN SUBJOINED LETTER KA..MARCHEN SUBJOINED LETTER ZA
      72874 <= t && t <= 72880 || // Mn   [7] MARCHEN SUBJOINED LETTER RA..MARCHEN VOWEL SIGN AA
      72882 <= t && t <= 72883 || // Mn   [2] MARCHEN VOWEL SIGN U..MARCHEN VOWEL SIGN E
      72885 <= t && t <= 72886 || // Mn   [2] MARCHEN SIGN ANUSVARA..MARCHEN SIGN CANDRABINDU
      73009 <= t && t <= 73014 || // Mn   [6] MASARAM GONDI VOWEL SIGN AA..MASARAM GONDI VOWEL SIGN VOCALIC R
      t == 73018 || // Mn       MASARAM GONDI VOWEL SIGN E
      73020 <= t && t <= 73021 || // Mn   [2] MASARAM GONDI VOWEL SIGN AI..MASARAM GONDI VOWEL SIGN O
      73023 <= t && t <= 73029 || // Mn   [7] MASARAM GONDI VOWEL SIGN AU..MASARAM GONDI VIRAMA
      t == 73031 || // Mn       MASARAM GONDI RA-KARA
      92912 <= t && t <= 92916 || // Mn   [5] BASSA VAH COMBINING HIGH TONE..BASSA VAH COMBINING HIGH-LOW TONE
      92976 <= t && t <= 92982 || // Mn   [7] PAHAWH HMONG MARK CIM TUB..PAHAWH HMONG MARK CIM TAUM
      94095 <= t && t <= 94098 || // Mn   [4] MIAO TONE RIGHT..MIAO TONE BELOW
      113821 <= t && t <= 113822 || // Mn   [2] DUPLOYAN THICK LETTER SELECTOR..DUPLOYAN DOUBLE MARK
      t == 119141 || // Mc       MUSICAL SYMBOL COMBINING STEM
      119143 <= t && t <= 119145 || // Mn   [3] MUSICAL SYMBOL COMBINING TREMOLO-1..MUSICAL SYMBOL COMBINING TREMOLO-3
      119150 <= t && t <= 119154 || // Mc   [5] MUSICAL SYMBOL COMBINING FLAG-1..MUSICAL SYMBOL COMBINING FLAG-5
      119163 <= t && t <= 119170 || // Mn   [8] MUSICAL SYMBOL COMBINING ACCENT..MUSICAL SYMBOL COMBINING LOURE
      119173 <= t && t <= 119179 || // Mn   [7] MUSICAL SYMBOL COMBINING DOIT..MUSICAL SYMBOL COMBINING TRIPLE TONGUE
      119210 <= t && t <= 119213 || // Mn   [4] MUSICAL SYMBOL COMBINING DOWN BOW..MUSICAL SYMBOL COMBINING SNAP PIZZICATO
      119362 <= t && t <= 119364 || // Mn   [3] COMBINING GREEK MUSICAL TRISEME..COMBINING GREEK MUSICAL PENTASEME
      121344 <= t && t <= 121398 || // Mn  [55] SIGNWRITING HEAD RIM..SIGNWRITING AIR SUCKING IN
      121403 <= t && t <= 121452 || // Mn  [50] SIGNWRITING MOUTH CLOSED NEUTRAL..SIGNWRITING EXCITEMENT
      t == 121461 || // Mn       SIGNWRITING UPPER BODY TILTING FROM HIP JOINTS
      t == 121476 || // Mn       SIGNWRITING LOCATION HEAD NECK
      121499 <= t && t <= 121503 || // Mn   [5] SIGNWRITING FILL MODIFIER-2..SIGNWRITING FILL MODIFIER-6
      121505 <= t && t <= 121519 || // Mn  [15] SIGNWRITING ROTATION MODIFIER-2..SIGNWRITING ROTATION MODIFIER-16
      122880 <= t && t <= 122886 || // Mn   [7] COMBINING GLAGOLITIC LETTER AZU..COMBINING GLAGOLITIC LETTER ZHIVETE
      122888 <= t && t <= 122904 || // Mn  [17] COMBINING GLAGOLITIC LETTER ZEMLJA..COMBINING GLAGOLITIC LETTER HERU
      122907 <= t && t <= 122913 || // Mn   [7] COMBINING GLAGOLITIC LETTER SHTA..COMBINING GLAGOLITIC LETTER YATI
      122915 <= t && t <= 122916 || // Mn   [2] COMBINING GLAGOLITIC LETTER YU..COMBINING GLAGOLITIC LETTER SMALL YUS
      122918 <= t && t <= 122922 || // Mn   [5] COMBINING GLAGOLITIC LETTER YO..COMBINING GLAGOLITIC LETTER FITA
      125136 <= t && t <= 125142 || // Mn   [7] MENDE KIKAKUI COMBINING NUMBER TEENS..MENDE KIKAKUI COMBINING NUMBER MILLIONS
      125252 <= t && t <= 125258 || // Mn   [7] ADLAM ALIF LENGTHENER..ADLAM NUKTA
      917536 <= t && t <= 917631 || // Cf  [96] TAG SPACE..CANCEL TAG
      917760 <= t && t <= 917999 ? e : 127462 <= t && t <= 127487 ? a : t == 2307 || // Mc       DEVANAGARI SIGN VISARGA
      t == 2363 || // Mc       DEVANAGARI VOWEL SIGN OOE
      2366 <= t && t <= 2368 || // Mc   [3] DEVANAGARI VOWEL SIGN AA..DEVANAGARI VOWEL SIGN II
      2377 <= t && t <= 2380 || // Mc   [4] DEVANAGARI VOWEL SIGN CANDRA O..DEVANAGARI VOWEL SIGN AU
      2382 <= t && t <= 2383 || // Mc   [2] DEVANAGARI VOWEL SIGN PRISHTHAMATRA E..DEVANAGARI VOWEL SIGN AW
      2434 <= t && t <= 2435 || // Mc   [2] BENGALI SIGN ANUSVARA..BENGALI SIGN VISARGA
      2495 <= t && t <= 2496 || // Mc   [2] BENGALI VOWEL SIGN I..BENGALI VOWEL SIGN II
      2503 <= t && t <= 2504 || // Mc   [2] BENGALI VOWEL SIGN E..BENGALI VOWEL SIGN AI
      2507 <= t && t <= 2508 || // Mc   [2] BENGALI VOWEL SIGN O..BENGALI VOWEL SIGN AU
      t == 2563 || // Mc       GURMUKHI SIGN VISARGA
      2622 <= t && t <= 2624 || // Mc   [3] GURMUKHI VOWEL SIGN AA..GURMUKHI VOWEL SIGN II
      t == 2691 || // Mc       GUJARATI SIGN VISARGA
      2750 <= t && t <= 2752 || // Mc   [3] GUJARATI VOWEL SIGN AA..GUJARATI VOWEL SIGN II
      t == 2761 || // Mc       GUJARATI VOWEL SIGN CANDRA O
      2763 <= t && t <= 2764 || // Mc   [2] GUJARATI VOWEL SIGN O..GUJARATI VOWEL SIGN AU
      2818 <= t && t <= 2819 || // Mc   [2] ORIYA SIGN ANUSVARA..ORIYA SIGN VISARGA
      t == 2880 || // Mc       ORIYA VOWEL SIGN II
      2887 <= t && t <= 2888 || // Mc   [2] ORIYA VOWEL SIGN E..ORIYA VOWEL SIGN AI
      2891 <= t && t <= 2892 || // Mc   [2] ORIYA VOWEL SIGN O..ORIYA VOWEL SIGN AU
      t == 3007 || // Mc       TAMIL VOWEL SIGN I
      3009 <= t && t <= 3010 || // Mc   [2] TAMIL VOWEL SIGN U..TAMIL VOWEL SIGN UU
      3014 <= t && t <= 3016 || // Mc   [3] TAMIL VOWEL SIGN E..TAMIL VOWEL SIGN AI
      3018 <= t && t <= 3020 || // Mc   [3] TAMIL VOWEL SIGN O..TAMIL VOWEL SIGN AU
      3073 <= t && t <= 3075 || // Mc   [3] TELUGU SIGN CANDRABINDU..TELUGU SIGN VISARGA
      3137 <= t && t <= 3140 || // Mc   [4] TELUGU VOWEL SIGN U..TELUGU VOWEL SIGN VOCALIC RR
      3202 <= t && t <= 3203 || // Mc   [2] KANNADA SIGN ANUSVARA..KANNADA SIGN VISARGA
      t == 3262 || // Mc       KANNADA VOWEL SIGN AA
      3264 <= t && t <= 3265 || // Mc   [2] KANNADA VOWEL SIGN II..KANNADA VOWEL SIGN U
      3267 <= t && t <= 3268 || // Mc   [2] KANNADA VOWEL SIGN VOCALIC R..KANNADA VOWEL SIGN VOCALIC RR
      3271 <= t && t <= 3272 || // Mc   [2] KANNADA VOWEL SIGN EE..KANNADA VOWEL SIGN AI
      3274 <= t && t <= 3275 || // Mc   [2] KANNADA VOWEL SIGN O..KANNADA VOWEL SIGN OO
      3330 <= t && t <= 3331 || // Mc   [2] MALAYALAM SIGN ANUSVARA..MALAYALAM SIGN VISARGA
      3391 <= t && t <= 3392 || // Mc   [2] MALAYALAM VOWEL SIGN I..MALAYALAM VOWEL SIGN II
      3398 <= t && t <= 3400 || // Mc   [3] MALAYALAM VOWEL SIGN E..MALAYALAM VOWEL SIGN AI
      3402 <= t && t <= 3404 || // Mc   [3] MALAYALAM VOWEL SIGN O..MALAYALAM VOWEL SIGN AU
      3458 <= t && t <= 3459 || // Mc   [2] SINHALA SIGN ANUSVARAYA..SINHALA SIGN VISARGAYA
      3536 <= t && t <= 3537 || // Mc   [2] SINHALA VOWEL SIGN KETTI AEDA-PILLA..SINHALA VOWEL SIGN DIGA AEDA-PILLA
      3544 <= t && t <= 3550 || // Mc   [7] SINHALA VOWEL SIGN GAETTA-PILLA..SINHALA VOWEL SIGN KOMBUVA HAA GAYANUKITTA
      3570 <= t && t <= 3571 || // Mc   [2] SINHALA VOWEL SIGN DIGA GAETTA-PILLA..SINHALA VOWEL SIGN DIGA GAYANUKITTA
      t == 3635 || // Lo       THAI CHARACTER SARA AM
      t == 3763 || // Lo       LAO VOWEL SIGN AM
      3902 <= t && t <= 3903 || // Mc   [2] TIBETAN SIGN YAR TSHES..TIBETAN SIGN MAR TSHES
      t == 3967 || // Mc       TIBETAN SIGN RNAM BCAD
      t == 4145 || // Mc       MYANMAR VOWEL SIGN E
      4155 <= t && t <= 4156 || // Mc   [2] MYANMAR CONSONANT SIGN MEDIAL YA..MYANMAR CONSONANT SIGN MEDIAL RA
      4182 <= t && t <= 4183 || // Mc   [2] MYANMAR VOWEL SIGN VOCALIC R..MYANMAR VOWEL SIGN VOCALIC RR
      t == 4228 || // Mc       MYANMAR VOWEL SIGN SHAN E
      t == 6070 || // Mc       KHMER VOWEL SIGN AA
      6078 <= t && t <= 6085 || // Mc   [8] KHMER VOWEL SIGN OE..KHMER VOWEL SIGN AU
      6087 <= t && t <= 6088 || // Mc   [2] KHMER SIGN REAHMUK..KHMER SIGN YUUKALEAPINTU
      6435 <= t && t <= 6438 || // Mc   [4] LIMBU VOWEL SIGN EE..LIMBU VOWEL SIGN AU
      6441 <= t && t <= 6443 || // Mc   [3] LIMBU SUBJOINED LETTER YA..LIMBU SUBJOINED LETTER WA
      6448 <= t && t <= 6449 || // Mc   [2] LIMBU SMALL LETTER KA..LIMBU SMALL LETTER NGA
      6451 <= t && t <= 6456 || // Mc   [6] LIMBU SMALL LETTER TA..LIMBU SMALL LETTER LA
      6681 <= t && t <= 6682 || // Mc   [2] BUGINESE VOWEL SIGN E..BUGINESE VOWEL SIGN O
      t == 6741 || // Mc       TAI THAM CONSONANT SIGN MEDIAL RA
      t == 6743 || // Mc       TAI THAM CONSONANT SIGN LA TANG LAI
      6765 <= t && t <= 6770 || // Mc   [6] TAI THAM VOWEL SIGN OY..TAI THAM VOWEL SIGN THAM AI
      t == 6916 || // Mc       BALINESE SIGN BISAH
      t == 6965 || // Mc       BALINESE VOWEL SIGN TEDUNG
      t == 6971 || // Mc       BALINESE VOWEL SIGN RA REPA TEDUNG
      6973 <= t && t <= 6977 || // Mc   [5] BALINESE VOWEL SIGN LA LENGA TEDUNG..BALINESE VOWEL SIGN TALING REPA TEDUNG
      6979 <= t && t <= 6980 || // Mc   [2] BALINESE VOWEL SIGN PEPET TEDUNG..BALINESE ADEG ADEG
      t == 7042 || // Mc       SUNDANESE SIGN PANGWISAD
      t == 7073 || // Mc       SUNDANESE CONSONANT SIGN PAMINGKAL
      7078 <= t && t <= 7079 || // Mc   [2] SUNDANESE VOWEL SIGN PANAELAENG..SUNDANESE VOWEL SIGN PANOLONG
      t == 7082 || // Mc       SUNDANESE SIGN PAMAAEH
      t == 7143 || // Mc       BATAK VOWEL SIGN E
      7146 <= t && t <= 7148 || // Mc   [3] BATAK VOWEL SIGN I..BATAK VOWEL SIGN O
      t == 7150 || // Mc       BATAK VOWEL SIGN U
      7154 <= t && t <= 7155 || // Mc   [2] BATAK PANGOLAT..BATAK PANONGONAN
      7204 <= t && t <= 7211 || // Mc   [8] LEPCHA SUBJOINED LETTER YA..LEPCHA VOWEL SIGN UU
      7220 <= t && t <= 7221 || // Mc   [2] LEPCHA CONSONANT SIGN NYIN-DO..LEPCHA CONSONANT SIGN KANG
      t == 7393 || // Mc       VEDIC TONE ATHARVAVEDIC INDEPENDENT SVARITA
      7410 <= t && t <= 7411 || // Mc   [2] VEDIC SIGN ARDHAVISARGA..VEDIC SIGN ROTATED ARDHAVISARGA
      t == 7415 || // Mc       VEDIC SIGN ATIKRAMA
      43043 <= t && t <= 43044 || // Mc   [2] SYLOTI NAGRI VOWEL SIGN A..SYLOTI NAGRI VOWEL SIGN I
      t == 43047 || // Mc       SYLOTI NAGRI VOWEL SIGN OO
      43136 <= t && t <= 43137 || // Mc   [2] SAURASHTRA SIGN ANUSVARA..SAURASHTRA SIGN VISARGA
      43188 <= t && t <= 43203 || // Mc  [16] SAURASHTRA CONSONANT SIGN HAARU..SAURASHTRA VOWEL SIGN AU
      43346 <= t && t <= 43347 || // Mc   [2] REJANG CONSONANT SIGN H..REJANG VIRAMA
      t == 43395 || // Mc       JAVANESE SIGN WIGNYAN
      43444 <= t && t <= 43445 || // Mc   [2] JAVANESE VOWEL SIGN TARUNG..JAVANESE VOWEL SIGN TOLONG
      43450 <= t && t <= 43451 || // Mc   [2] JAVANESE VOWEL SIGN TALING..JAVANESE VOWEL SIGN DIRGA MURE
      43453 <= t && t <= 43456 || // Mc   [4] JAVANESE CONSONANT SIGN KERET..JAVANESE PANGKON
      43567 <= t && t <= 43568 || // Mc   [2] CHAM VOWEL SIGN O..CHAM VOWEL SIGN AI
      43571 <= t && t <= 43572 || // Mc   [2] CHAM CONSONANT SIGN YA..CHAM CONSONANT SIGN RA
      t == 43597 || // Mc       CHAM CONSONANT SIGN FINAL H
      t == 43755 || // Mc       MEETEI MAYEK VOWEL SIGN II
      43758 <= t && t <= 43759 || // Mc   [2] MEETEI MAYEK VOWEL SIGN AU..MEETEI MAYEK VOWEL SIGN AAU
      t == 43765 || // Mc       MEETEI MAYEK VOWEL SIGN VISARGA
      44003 <= t && t <= 44004 || // Mc   [2] MEETEI MAYEK VOWEL SIGN ONAP..MEETEI MAYEK VOWEL SIGN INAP
      44006 <= t && t <= 44007 || // Mc   [2] MEETEI MAYEK VOWEL SIGN YENAP..MEETEI MAYEK VOWEL SIGN SOUNAP
      44009 <= t && t <= 44010 || // Mc   [2] MEETEI MAYEK VOWEL SIGN CHEINAP..MEETEI MAYEK VOWEL SIGN NUNG
      t == 44012 || // Mc       MEETEI MAYEK LUM IYEK
      t == 69632 || // Mc       BRAHMI SIGN CANDRABINDU
      t == 69634 || // Mc       BRAHMI SIGN VISARGA
      t == 69762 || // Mc       KAITHI SIGN VISARGA
      69808 <= t && t <= 69810 || // Mc   [3] KAITHI VOWEL SIGN AA..KAITHI VOWEL SIGN II
      69815 <= t && t <= 69816 || // Mc   [2] KAITHI VOWEL SIGN O..KAITHI VOWEL SIGN AU
      t == 69932 || // Mc       CHAKMA VOWEL SIGN E
      t == 70018 || // Mc       SHARADA SIGN VISARGA
      70067 <= t && t <= 70069 || // Mc   [3] SHARADA VOWEL SIGN AA..SHARADA VOWEL SIGN II
      70079 <= t && t <= 70080 || // Mc   [2] SHARADA VOWEL SIGN AU..SHARADA SIGN VIRAMA
      70188 <= t && t <= 70190 || // Mc   [3] KHOJKI VOWEL SIGN AA..KHOJKI VOWEL SIGN II
      70194 <= t && t <= 70195 || // Mc   [2] KHOJKI VOWEL SIGN O..KHOJKI VOWEL SIGN AU
      t == 70197 || // Mc       KHOJKI SIGN VIRAMA
      70368 <= t && t <= 70370 || // Mc   [3] KHUDAWADI VOWEL SIGN AA..KHUDAWADI VOWEL SIGN II
      70402 <= t && t <= 70403 || // Mc   [2] GRANTHA SIGN ANUSVARA..GRANTHA SIGN VISARGA
      t == 70463 || // Mc       GRANTHA VOWEL SIGN I
      70465 <= t && t <= 70468 || // Mc   [4] GRANTHA VOWEL SIGN U..GRANTHA VOWEL SIGN VOCALIC RR
      70471 <= t && t <= 70472 || // Mc   [2] GRANTHA VOWEL SIGN EE..GRANTHA VOWEL SIGN AI
      70475 <= t && t <= 70477 || // Mc   [3] GRANTHA VOWEL SIGN OO..GRANTHA SIGN VIRAMA
      70498 <= t && t <= 70499 || // Mc   [2] GRANTHA VOWEL SIGN VOCALIC L..GRANTHA VOWEL SIGN VOCALIC LL
      70709 <= t && t <= 70711 || // Mc   [3] NEWA VOWEL SIGN AA..NEWA VOWEL SIGN II
      70720 <= t && t <= 70721 || // Mc   [2] NEWA VOWEL SIGN O..NEWA VOWEL SIGN AU
      t == 70725 || // Mc       NEWA SIGN VISARGA
      70833 <= t && t <= 70834 || // Mc   [2] TIRHUTA VOWEL SIGN I..TIRHUTA VOWEL SIGN II
      t == 70841 || // Mc       TIRHUTA VOWEL SIGN E
      70843 <= t && t <= 70844 || // Mc   [2] TIRHUTA VOWEL SIGN AI..TIRHUTA VOWEL SIGN O
      t == 70846 || // Mc       TIRHUTA VOWEL SIGN AU
      t == 70849 || // Mc       TIRHUTA SIGN VISARGA
      71088 <= t && t <= 71089 || // Mc   [2] SIDDHAM VOWEL SIGN I..SIDDHAM VOWEL SIGN II
      71096 <= t && t <= 71099 || // Mc   [4] SIDDHAM VOWEL SIGN E..SIDDHAM VOWEL SIGN AU
      t == 71102 || // Mc       SIDDHAM SIGN VISARGA
      71216 <= t && t <= 71218 || // Mc   [3] MODI VOWEL SIGN AA..MODI VOWEL SIGN II
      71227 <= t && t <= 71228 || // Mc   [2] MODI VOWEL SIGN O..MODI VOWEL SIGN AU
      t == 71230 || // Mc       MODI SIGN VISARGA
      t == 71340 || // Mc       TAKRI SIGN VISARGA
      71342 <= t && t <= 71343 || // Mc   [2] TAKRI VOWEL SIGN I..TAKRI VOWEL SIGN II
      t == 71350 || // Mc       TAKRI SIGN VIRAMA
      71456 <= t && t <= 71457 || // Mc   [2] AHOM VOWEL SIGN A..AHOM VOWEL SIGN AA
      t == 71462 || // Mc       AHOM VOWEL SIGN E
      72199 <= t && t <= 72200 || // Mc   [2] ZANABAZAR SQUARE VOWEL SIGN AI..ZANABAZAR SQUARE VOWEL SIGN AU
      t == 72249 || // Mc       ZANABAZAR SQUARE SIGN VISARGA
      72279 <= t && t <= 72280 || // Mc   [2] SOYOMBO VOWEL SIGN AI..SOYOMBO VOWEL SIGN AU
      t == 72343 || // Mc       SOYOMBO SIGN VISARGA
      t == 72751 || // Mc       BHAIKSUKI VOWEL SIGN AA
      t == 72766 || // Mc       BHAIKSUKI SIGN VISARGA
      t == 72873 || // Mc       MARCHEN SUBJOINED LETTER YA
      t == 72881 || // Mc       MARCHEN VOWEL SIGN I
      t == 72884 || // Mc       MARCHEN VOWEL SIGN O
      94033 <= t && t <= 94078 || // Mc  [46] MIAO SIGN ASPIRATION..MIAO VOWEL SIGN NG
      t == 119142 || // Mc       MUSICAL SYMBOL COMBINING SPRECHGESANG STEM
      t == 119149 ? s : 4352 <= t && t <= 4447 || // Lo  [96] HANGUL CHOSEONG KIYEOK..HANGUL CHOSEONG FILLER
      43360 <= t && t <= 43388 ? f : 4448 <= t && t <= 4519 || // Lo  [72] HANGUL JUNGSEONG FILLER..HANGUL JUNGSEONG O-YAE
      55216 <= t && t <= 55238 ? C : 4520 <= t && t <= 4607 || // Lo  [88] HANGUL JONGSEONG KIYEOK..HANGUL JONGSEONG SSANGNIEUN
      55243 <= t && t <= 55291 ? B : t == 44032 || // Lo       HANGUL SYLLABLE GA
      t == 44060 || // Lo       HANGUL SYLLABLE GAE
      t == 44088 || // Lo       HANGUL SYLLABLE GYA
      t == 44116 || // Lo       HANGUL SYLLABLE GYAE
      t == 44144 || // Lo       HANGUL SYLLABLE GEO
      t == 44172 || // Lo       HANGUL SYLLABLE GE
      t == 44200 || // Lo       HANGUL SYLLABLE GYEO
      t == 44228 || // Lo       HANGUL SYLLABLE GYE
      t == 44256 || // Lo       HANGUL SYLLABLE GO
      t == 44284 || // Lo       HANGUL SYLLABLE GWA
      t == 44312 || // Lo       HANGUL SYLLABLE GWAE
      t == 44340 || // Lo       HANGUL SYLLABLE GOE
      t == 44368 || // Lo       HANGUL SYLLABLE GYO
      t == 44396 || // Lo       HANGUL SYLLABLE GU
      t == 44424 || // Lo       HANGUL SYLLABLE GWEO
      t == 44452 || // Lo       HANGUL SYLLABLE GWE
      t == 44480 || // Lo       HANGUL SYLLABLE GWI
      t == 44508 || // Lo       HANGUL SYLLABLE GYU
      t == 44536 || // Lo       HANGUL SYLLABLE GEU
      t == 44564 || // Lo       HANGUL SYLLABLE GYI
      t == 44592 || // Lo       HANGUL SYLLABLE GI
      t == 44620 || // Lo       HANGUL SYLLABLE GGA
      t == 44648 || // Lo       HANGUL SYLLABLE GGAE
      t == 44676 || // Lo       HANGUL SYLLABLE GGYA
      t == 44704 || // Lo       HANGUL SYLLABLE GGYAE
      t == 44732 || // Lo       HANGUL SYLLABLE GGEO
      t == 44760 || // Lo       HANGUL SYLLABLE GGE
      t == 44788 || // Lo       HANGUL SYLLABLE GGYEO
      t == 44816 || // Lo       HANGUL SYLLABLE GGYE
      t == 44844 || // Lo       HANGUL SYLLABLE GGO
      t == 44872 || // Lo       HANGUL SYLLABLE GGWA
      t == 44900 || // Lo       HANGUL SYLLABLE GGWAE
      t == 44928 || // Lo       HANGUL SYLLABLE GGOE
      t == 44956 || // Lo       HANGUL SYLLABLE GGYO
      t == 44984 || // Lo       HANGUL SYLLABLE GGU
      t == 45012 || // Lo       HANGUL SYLLABLE GGWEO
      t == 45040 || // Lo       HANGUL SYLLABLE GGWE
      t == 45068 || // Lo       HANGUL SYLLABLE GGWI
      t == 45096 || // Lo       HANGUL SYLLABLE GGYU
      t == 45124 || // Lo       HANGUL SYLLABLE GGEU
      t == 45152 || // Lo       HANGUL SYLLABLE GGYI
      t == 45180 || // Lo       HANGUL SYLLABLE GGI
      t == 45208 || // Lo       HANGUL SYLLABLE NA
      t == 45236 || // Lo       HANGUL SYLLABLE NAE
      t == 45264 || // Lo       HANGUL SYLLABLE NYA
      t == 45292 || // Lo       HANGUL SYLLABLE NYAE
      t == 45320 || // Lo       HANGUL SYLLABLE NEO
      t == 45348 || // Lo       HANGUL SYLLABLE NE
      t == 45376 || // Lo       HANGUL SYLLABLE NYEO
      t == 45404 || // Lo       HANGUL SYLLABLE NYE
      t == 45432 || // Lo       HANGUL SYLLABLE NO
      t == 45460 || // Lo       HANGUL SYLLABLE NWA
      t == 45488 || // Lo       HANGUL SYLLABLE NWAE
      t == 45516 || // Lo       HANGUL SYLLABLE NOE
      t == 45544 || // Lo       HANGUL SYLLABLE NYO
      t == 45572 || // Lo       HANGUL SYLLABLE NU
      t == 45600 || // Lo       HANGUL SYLLABLE NWEO
      t == 45628 || // Lo       HANGUL SYLLABLE NWE
      t == 45656 || // Lo       HANGUL SYLLABLE NWI
      t == 45684 || // Lo       HANGUL SYLLABLE NYU
      t == 45712 || // Lo       HANGUL SYLLABLE NEU
      t == 45740 || // Lo       HANGUL SYLLABLE NYI
      t == 45768 || // Lo       HANGUL SYLLABLE NI
      t == 45796 || // Lo       HANGUL SYLLABLE DA
      t == 45824 || // Lo       HANGUL SYLLABLE DAE
      t == 45852 || // Lo       HANGUL SYLLABLE DYA
      t == 45880 || // Lo       HANGUL SYLLABLE DYAE
      t == 45908 || // Lo       HANGUL SYLLABLE DEO
      t == 45936 || // Lo       HANGUL SYLLABLE DE
      t == 45964 || // Lo       HANGUL SYLLABLE DYEO
      t == 45992 || // Lo       HANGUL SYLLABLE DYE
      t == 46020 || // Lo       HANGUL SYLLABLE DO
      t == 46048 || // Lo       HANGUL SYLLABLE DWA
      t == 46076 || // Lo       HANGUL SYLLABLE DWAE
      t == 46104 || // Lo       HANGUL SYLLABLE DOE
      t == 46132 || // Lo       HANGUL SYLLABLE DYO
      t == 46160 || // Lo       HANGUL SYLLABLE DU
      t == 46188 || // Lo       HANGUL SYLLABLE DWEO
      t == 46216 || // Lo       HANGUL SYLLABLE DWE
      t == 46244 || // Lo       HANGUL SYLLABLE DWI
      t == 46272 || // Lo       HANGUL SYLLABLE DYU
      t == 46300 || // Lo       HANGUL SYLLABLE DEU
      t == 46328 || // Lo       HANGUL SYLLABLE DYI
      t == 46356 || // Lo       HANGUL SYLLABLE DI
      t == 46384 || // Lo       HANGUL SYLLABLE DDA
      t == 46412 || // Lo       HANGUL SYLLABLE DDAE
      t == 46440 || // Lo       HANGUL SYLLABLE DDYA
      t == 46468 || // Lo       HANGUL SYLLABLE DDYAE
      t == 46496 || // Lo       HANGUL SYLLABLE DDEO
      t == 46524 || // Lo       HANGUL SYLLABLE DDE
      t == 46552 || // Lo       HANGUL SYLLABLE DDYEO
      t == 46580 || // Lo       HANGUL SYLLABLE DDYE
      t == 46608 || // Lo       HANGUL SYLLABLE DDO
      t == 46636 || // Lo       HANGUL SYLLABLE DDWA
      t == 46664 || // Lo       HANGUL SYLLABLE DDWAE
      t == 46692 || // Lo       HANGUL SYLLABLE DDOE
      t == 46720 || // Lo       HANGUL SYLLABLE DDYO
      t == 46748 || // Lo       HANGUL SYLLABLE DDU
      t == 46776 || // Lo       HANGUL SYLLABLE DDWEO
      t == 46804 || // Lo       HANGUL SYLLABLE DDWE
      t == 46832 || // Lo       HANGUL SYLLABLE DDWI
      t == 46860 || // Lo       HANGUL SYLLABLE DDYU
      t == 46888 || // Lo       HANGUL SYLLABLE DDEU
      t == 46916 || // Lo       HANGUL SYLLABLE DDYI
      t == 46944 || // Lo       HANGUL SYLLABLE DDI
      t == 46972 || // Lo       HANGUL SYLLABLE RA
      t == 47e3 || // Lo       HANGUL SYLLABLE RAE
      t == 47028 || // Lo       HANGUL SYLLABLE RYA
      t == 47056 || // Lo       HANGUL SYLLABLE RYAE
      t == 47084 || // Lo       HANGUL SYLLABLE REO
      t == 47112 || // Lo       HANGUL SYLLABLE RE
      t == 47140 || // Lo       HANGUL SYLLABLE RYEO
      t == 47168 || // Lo       HANGUL SYLLABLE RYE
      t == 47196 || // Lo       HANGUL SYLLABLE RO
      t == 47224 || // Lo       HANGUL SYLLABLE RWA
      t == 47252 || // Lo       HANGUL SYLLABLE RWAE
      t == 47280 || // Lo       HANGUL SYLLABLE ROE
      t == 47308 || // Lo       HANGUL SYLLABLE RYO
      t == 47336 || // Lo       HANGUL SYLLABLE RU
      t == 47364 || // Lo       HANGUL SYLLABLE RWEO
      t == 47392 || // Lo       HANGUL SYLLABLE RWE
      t == 47420 || // Lo       HANGUL SYLLABLE RWI
      t == 47448 || // Lo       HANGUL SYLLABLE RYU
      t == 47476 || // Lo       HANGUL SYLLABLE REU
      t == 47504 || // Lo       HANGUL SYLLABLE RYI
      t == 47532 || // Lo       HANGUL SYLLABLE RI
      t == 47560 || // Lo       HANGUL SYLLABLE MA
      t == 47588 || // Lo       HANGUL SYLLABLE MAE
      t == 47616 || // Lo       HANGUL SYLLABLE MYA
      t == 47644 || // Lo       HANGUL SYLLABLE MYAE
      t == 47672 || // Lo       HANGUL SYLLABLE MEO
      t == 47700 || // Lo       HANGUL SYLLABLE ME
      t == 47728 || // Lo       HANGUL SYLLABLE MYEO
      t == 47756 || // Lo       HANGUL SYLLABLE MYE
      t == 47784 || // Lo       HANGUL SYLLABLE MO
      t == 47812 || // Lo       HANGUL SYLLABLE MWA
      t == 47840 || // Lo       HANGUL SYLLABLE MWAE
      t == 47868 || // Lo       HANGUL SYLLABLE MOE
      t == 47896 || // Lo       HANGUL SYLLABLE MYO
      t == 47924 || // Lo       HANGUL SYLLABLE MU
      t == 47952 || // Lo       HANGUL SYLLABLE MWEO
      t == 47980 || // Lo       HANGUL SYLLABLE MWE
      t == 48008 || // Lo       HANGUL SYLLABLE MWI
      t == 48036 || // Lo       HANGUL SYLLABLE MYU
      t == 48064 || // Lo       HANGUL SYLLABLE MEU
      t == 48092 || // Lo       HANGUL SYLLABLE MYI
      t == 48120 || // Lo       HANGUL SYLLABLE MI
      t == 48148 || // Lo       HANGUL SYLLABLE BA
      t == 48176 || // Lo       HANGUL SYLLABLE BAE
      t == 48204 || // Lo       HANGUL SYLLABLE BYA
      t == 48232 || // Lo       HANGUL SYLLABLE BYAE
      t == 48260 || // Lo       HANGUL SYLLABLE BEO
      t == 48288 || // Lo       HANGUL SYLLABLE BE
      t == 48316 || // Lo       HANGUL SYLLABLE BYEO
      t == 48344 || // Lo       HANGUL SYLLABLE BYE
      t == 48372 || // Lo       HANGUL SYLLABLE BO
      t == 48400 || // Lo       HANGUL SYLLABLE BWA
      t == 48428 || // Lo       HANGUL SYLLABLE BWAE
      t == 48456 || // Lo       HANGUL SYLLABLE BOE
      t == 48484 || // Lo       HANGUL SYLLABLE BYO
      t == 48512 || // Lo       HANGUL SYLLABLE BU
      t == 48540 || // Lo       HANGUL SYLLABLE BWEO
      t == 48568 || // Lo       HANGUL SYLLABLE BWE
      t == 48596 || // Lo       HANGUL SYLLABLE BWI
      t == 48624 || // Lo       HANGUL SYLLABLE BYU
      t == 48652 || // Lo       HANGUL SYLLABLE BEU
      t == 48680 || // Lo       HANGUL SYLLABLE BYI
      t == 48708 || // Lo       HANGUL SYLLABLE BI
      t == 48736 || // Lo       HANGUL SYLLABLE BBA
      t == 48764 || // Lo       HANGUL SYLLABLE BBAE
      t == 48792 || // Lo       HANGUL SYLLABLE BBYA
      t == 48820 || // Lo       HANGUL SYLLABLE BBYAE
      t == 48848 || // Lo       HANGUL SYLLABLE BBEO
      t == 48876 || // Lo       HANGUL SYLLABLE BBE
      t == 48904 || // Lo       HANGUL SYLLABLE BBYEO
      t == 48932 || // Lo       HANGUL SYLLABLE BBYE
      t == 48960 || // Lo       HANGUL SYLLABLE BBO
      t == 48988 || // Lo       HANGUL SYLLABLE BBWA
      t == 49016 || // Lo       HANGUL SYLLABLE BBWAE
      t == 49044 || // Lo       HANGUL SYLLABLE BBOE
      t == 49072 || // Lo       HANGUL SYLLABLE BBYO
      t == 49100 || // Lo       HANGUL SYLLABLE BBU
      t == 49128 || // Lo       HANGUL SYLLABLE BBWEO
      t == 49156 || // Lo       HANGUL SYLLABLE BBWE
      t == 49184 || // Lo       HANGUL SYLLABLE BBWI
      t == 49212 || // Lo       HANGUL SYLLABLE BBYU
      t == 49240 || // Lo       HANGUL SYLLABLE BBEU
      t == 49268 || // Lo       HANGUL SYLLABLE BBYI
      t == 49296 || // Lo       HANGUL SYLLABLE BBI
      t == 49324 || // Lo       HANGUL SYLLABLE SA
      t == 49352 || // Lo       HANGUL SYLLABLE SAE
      t == 49380 || // Lo       HANGUL SYLLABLE SYA
      t == 49408 || // Lo       HANGUL SYLLABLE SYAE
      t == 49436 || // Lo       HANGUL SYLLABLE SEO
      t == 49464 || // Lo       HANGUL SYLLABLE SE
      t == 49492 || // Lo       HANGUL SYLLABLE SYEO
      t == 49520 || // Lo       HANGUL SYLLABLE SYE
      t == 49548 || // Lo       HANGUL SYLLABLE SO
      t == 49576 || // Lo       HANGUL SYLLABLE SWA
      t == 49604 || // Lo       HANGUL SYLLABLE SWAE
      t == 49632 || // Lo       HANGUL SYLLABLE SOE
      t == 49660 || // Lo       HANGUL SYLLABLE SYO
      t == 49688 || // Lo       HANGUL SYLLABLE SU
      t == 49716 || // Lo       HANGUL SYLLABLE SWEO
      t == 49744 || // Lo       HANGUL SYLLABLE SWE
      t == 49772 || // Lo       HANGUL SYLLABLE SWI
      t == 49800 || // Lo       HANGUL SYLLABLE SYU
      t == 49828 || // Lo       HANGUL SYLLABLE SEU
      t == 49856 || // Lo       HANGUL SYLLABLE SYI
      t == 49884 || // Lo       HANGUL SYLLABLE SI
      t == 49912 || // Lo       HANGUL SYLLABLE SSA
      t == 49940 || // Lo       HANGUL SYLLABLE SSAE
      t == 49968 || // Lo       HANGUL SYLLABLE SSYA
      t == 49996 || // Lo       HANGUL SYLLABLE SSYAE
      t == 50024 || // Lo       HANGUL SYLLABLE SSEO
      t == 50052 || // Lo       HANGUL SYLLABLE SSE
      t == 50080 || // Lo       HANGUL SYLLABLE SSYEO
      t == 50108 || // Lo       HANGUL SYLLABLE SSYE
      t == 50136 || // Lo       HANGUL SYLLABLE SSO
      t == 50164 || // Lo       HANGUL SYLLABLE SSWA
      t == 50192 || // Lo       HANGUL SYLLABLE SSWAE
      t == 50220 || // Lo       HANGUL SYLLABLE SSOE
      t == 50248 || // Lo       HANGUL SYLLABLE SSYO
      t == 50276 || // Lo       HANGUL SYLLABLE SSU
      t == 50304 || // Lo       HANGUL SYLLABLE SSWEO
      t == 50332 || // Lo       HANGUL SYLLABLE SSWE
      t == 50360 || // Lo       HANGUL SYLLABLE SSWI
      t == 50388 || // Lo       HANGUL SYLLABLE SSYU
      t == 50416 || // Lo       HANGUL SYLLABLE SSEU
      t == 50444 || // Lo       HANGUL SYLLABLE SSYI
      t == 50472 || // Lo       HANGUL SYLLABLE SSI
      t == 50500 || // Lo       HANGUL SYLLABLE A
      t == 50528 || // Lo       HANGUL SYLLABLE AE
      t == 50556 || // Lo       HANGUL SYLLABLE YA
      t == 50584 || // Lo       HANGUL SYLLABLE YAE
      t == 50612 || // Lo       HANGUL SYLLABLE EO
      t == 50640 || // Lo       HANGUL SYLLABLE E
      t == 50668 || // Lo       HANGUL SYLLABLE YEO
      t == 50696 || // Lo       HANGUL SYLLABLE YE
      t == 50724 || // Lo       HANGUL SYLLABLE O
      t == 50752 || // Lo       HANGUL SYLLABLE WA
      t == 50780 || // Lo       HANGUL SYLLABLE WAE
      t == 50808 || // Lo       HANGUL SYLLABLE OE
      t == 50836 || // Lo       HANGUL SYLLABLE YO
      t == 50864 || // Lo       HANGUL SYLLABLE U
      t == 50892 || // Lo       HANGUL SYLLABLE WEO
      t == 50920 || // Lo       HANGUL SYLLABLE WE
      t == 50948 || // Lo       HANGUL SYLLABLE WI
      t == 50976 || // Lo       HANGUL SYLLABLE YU
      t == 51004 || // Lo       HANGUL SYLLABLE EU
      t == 51032 || // Lo       HANGUL SYLLABLE YI
      t == 51060 || // Lo       HANGUL SYLLABLE I
      t == 51088 || // Lo       HANGUL SYLLABLE JA
      t == 51116 || // Lo       HANGUL SYLLABLE JAE
      t == 51144 || // Lo       HANGUL SYLLABLE JYA
      t == 51172 || // Lo       HANGUL SYLLABLE JYAE
      t == 51200 || // Lo       HANGUL SYLLABLE JEO
      t == 51228 || // Lo       HANGUL SYLLABLE JE
      t == 51256 || // Lo       HANGUL SYLLABLE JYEO
      t == 51284 || // Lo       HANGUL SYLLABLE JYE
      t == 51312 || // Lo       HANGUL SYLLABLE JO
      t == 51340 || // Lo       HANGUL SYLLABLE JWA
      t == 51368 || // Lo       HANGUL SYLLABLE JWAE
      t == 51396 || // Lo       HANGUL SYLLABLE JOE
      t == 51424 || // Lo       HANGUL SYLLABLE JYO
      t == 51452 || // Lo       HANGUL SYLLABLE JU
      t == 51480 || // Lo       HANGUL SYLLABLE JWEO
      t == 51508 || // Lo       HANGUL SYLLABLE JWE
      t == 51536 || // Lo       HANGUL SYLLABLE JWI
      t == 51564 || // Lo       HANGUL SYLLABLE JYU
      t == 51592 || // Lo       HANGUL SYLLABLE JEU
      t == 51620 || // Lo       HANGUL SYLLABLE JYI
      t == 51648 || // Lo       HANGUL SYLLABLE JI
      t == 51676 || // Lo       HANGUL SYLLABLE JJA
      t == 51704 || // Lo       HANGUL SYLLABLE JJAE
      t == 51732 || // Lo       HANGUL SYLLABLE JJYA
      t == 51760 || // Lo       HANGUL SYLLABLE JJYAE
      t == 51788 || // Lo       HANGUL SYLLABLE JJEO
      t == 51816 || // Lo       HANGUL SYLLABLE JJE
      t == 51844 || // Lo       HANGUL SYLLABLE JJYEO
      t == 51872 || // Lo       HANGUL SYLLABLE JJYE
      t == 51900 || // Lo       HANGUL SYLLABLE JJO
      t == 51928 || // Lo       HANGUL SYLLABLE JJWA
      t == 51956 || // Lo       HANGUL SYLLABLE JJWAE
      t == 51984 || // Lo       HANGUL SYLLABLE JJOE
      t == 52012 || // Lo       HANGUL SYLLABLE JJYO
      t == 52040 || // Lo       HANGUL SYLLABLE JJU
      t == 52068 || // Lo       HANGUL SYLLABLE JJWEO
      t == 52096 || // Lo       HANGUL SYLLABLE JJWE
      t == 52124 || // Lo       HANGUL SYLLABLE JJWI
      t == 52152 || // Lo       HANGUL SYLLABLE JJYU
      t == 52180 || // Lo       HANGUL SYLLABLE JJEU
      t == 52208 || // Lo       HANGUL SYLLABLE JJYI
      t == 52236 || // Lo       HANGUL SYLLABLE JJI
      t == 52264 || // Lo       HANGUL SYLLABLE CA
      t == 52292 || // Lo       HANGUL SYLLABLE CAE
      t == 52320 || // Lo       HANGUL SYLLABLE CYA
      t == 52348 || // Lo       HANGUL SYLLABLE CYAE
      t == 52376 || // Lo       HANGUL SYLLABLE CEO
      t == 52404 || // Lo       HANGUL SYLLABLE CE
      t == 52432 || // Lo       HANGUL SYLLABLE CYEO
      t == 52460 || // Lo       HANGUL SYLLABLE CYE
      t == 52488 || // Lo       HANGUL SYLLABLE CO
      t == 52516 || // Lo       HANGUL SYLLABLE CWA
      t == 52544 || // Lo       HANGUL SYLLABLE CWAE
      t == 52572 || // Lo       HANGUL SYLLABLE COE
      t == 52600 || // Lo       HANGUL SYLLABLE CYO
      t == 52628 || // Lo       HANGUL SYLLABLE CU
      t == 52656 || // Lo       HANGUL SYLLABLE CWEO
      t == 52684 || // Lo       HANGUL SYLLABLE CWE
      t == 52712 || // Lo       HANGUL SYLLABLE CWI
      t == 52740 || // Lo       HANGUL SYLLABLE CYU
      t == 52768 || // Lo       HANGUL SYLLABLE CEU
      t == 52796 || // Lo       HANGUL SYLLABLE CYI
      t == 52824 || // Lo       HANGUL SYLLABLE CI
      t == 52852 || // Lo       HANGUL SYLLABLE KA
      t == 52880 || // Lo       HANGUL SYLLABLE KAE
      t == 52908 || // Lo       HANGUL SYLLABLE KYA
      t == 52936 || // Lo       HANGUL SYLLABLE KYAE
      t == 52964 || // Lo       HANGUL SYLLABLE KEO
      t == 52992 || // Lo       HANGUL SYLLABLE KE
      t == 53020 || // Lo       HANGUL SYLLABLE KYEO
      t == 53048 || // Lo       HANGUL SYLLABLE KYE
      t == 53076 || // Lo       HANGUL SYLLABLE KO
      t == 53104 || // Lo       HANGUL SYLLABLE KWA
      t == 53132 || // Lo       HANGUL SYLLABLE KWAE
      t == 53160 || // Lo       HANGUL SYLLABLE KOE
      t == 53188 || // Lo       HANGUL SYLLABLE KYO
      t == 53216 || // Lo       HANGUL SYLLABLE KU
      t == 53244 || // Lo       HANGUL SYLLABLE KWEO
      t == 53272 || // Lo       HANGUL SYLLABLE KWE
      t == 53300 || // Lo       HANGUL SYLLABLE KWI
      t == 53328 || // Lo       HANGUL SYLLABLE KYU
      t == 53356 || // Lo       HANGUL SYLLABLE KEU
      t == 53384 || // Lo       HANGUL SYLLABLE KYI
      t == 53412 || // Lo       HANGUL SYLLABLE KI
      t == 53440 || // Lo       HANGUL SYLLABLE TA
      t == 53468 || // Lo       HANGUL SYLLABLE TAE
      t == 53496 || // Lo       HANGUL SYLLABLE TYA
      t == 53524 || // Lo       HANGUL SYLLABLE TYAE
      t == 53552 || // Lo       HANGUL SYLLABLE TEO
      t == 53580 || // Lo       HANGUL SYLLABLE TE
      t == 53608 || // Lo       HANGUL SYLLABLE TYEO
      t == 53636 || // Lo       HANGUL SYLLABLE TYE
      t == 53664 || // Lo       HANGUL SYLLABLE TO
      t == 53692 || // Lo       HANGUL SYLLABLE TWA
      t == 53720 || // Lo       HANGUL SYLLABLE TWAE
      t == 53748 || // Lo       HANGUL SYLLABLE TOE
      t == 53776 || // Lo       HANGUL SYLLABLE TYO
      t == 53804 || // Lo       HANGUL SYLLABLE TU
      t == 53832 || // Lo       HANGUL SYLLABLE TWEO
      t == 53860 || // Lo       HANGUL SYLLABLE TWE
      t == 53888 || // Lo       HANGUL SYLLABLE TWI
      t == 53916 || // Lo       HANGUL SYLLABLE TYU
      t == 53944 || // Lo       HANGUL SYLLABLE TEU
      t == 53972 || // Lo       HANGUL SYLLABLE TYI
      t == 54e3 || // Lo       HANGUL SYLLABLE TI
      t == 54028 || // Lo       HANGUL SYLLABLE PA
      t == 54056 || // Lo       HANGUL SYLLABLE PAE
      t == 54084 || // Lo       HANGUL SYLLABLE PYA
      t == 54112 || // Lo       HANGUL SYLLABLE PYAE
      t == 54140 || // Lo       HANGUL SYLLABLE PEO
      t == 54168 || // Lo       HANGUL SYLLABLE PE
      t == 54196 || // Lo       HANGUL SYLLABLE PYEO
      t == 54224 || // Lo       HANGUL SYLLABLE PYE
      t == 54252 || // Lo       HANGUL SYLLABLE PO
      t == 54280 || // Lo       HANGUL SYLLABLE PWA
      t == 54308 || // Lo       HANGUL SYLLABLE PWAE
      t == 54336 || // Lo       HANGUL SYLLABLE POE
      t == 54364 || // Lo       HANGUL SYLLABLE PYO
      t == 54392 || // Lo       HANGUL SYLLABLE PU
      t == 54420 || // Lo       HANGUL SYLLABLE PWEO
      t == 54448 || // Lo       HANGUL SYLLABLE PWE
      t == 54476 || // Lo       HANGUL SYLLABLE PWI
      t == 54504 || // Lo       HANGUL SYLLABLE PYU
      t == 54532 || // Lo       HANGUL SYLLABLE PEU
      t == 54560 || // Lo       HANGUL SYLLABLE PYI
      t == 54588 || // Lo       HANGUL SYLLABLE PI
      t == 54616 || // Lo       HANGUL SYLLABLE HA
      t == 54644 || // Lo       HANGUL SYLLABLE HAE
      t == 54672 || // Lo       HANGUL SYLLABLE HYA
      t == 54700 || // Lo       HANGUL SYLLABLE HYAE
      t == 54728 || // Lo       HANGUL SYLLABLE HEO
      t == 54756 || // Lo       HANGUL SYLLABLE HE
      t == 54784 || // Lo       HANGUL SYLLABLE HYEO
      t == 54812 || // Lo       HANGUL SYLLABLE HYE
      t == 54840 || // Lo       HANGUL SYLLABLE HO
      t == 54868 || // Lo       HANGUL SYLLABLE HWA
      t == 54896 || // Lo       HANGUL SYLLABLE HWAE
      t == 54924 || // Lo       HANGUL SYLLABLE HOE
      t == 54952 || // Lo       HANGUL SYLLABLE HYO
      t == 54980 || // Lo       HANGUL SYLLABLE HU
      t == 55008 || // Lo       HANGUL SYLLABLE HWEO
      t == 55036 || // Lo       HANGUL SYLLABLE HWE
      t == 55064 || // Lo       HANGUL SYLLABLE HWI
      t == 55092 || // Lo       HANGUL SYLLABLE HYU
      t == 55120 || // Lo       HANGUL SYLLABLE HEU
      t == 55148 || // Lo       HANGUL SYLLABLE HYI
      t == 55176 ? h : 44033 <= t && t <= 44059 || // Lo  [27] HANGUL SYLLABLE GAG..HANGUL SYLLABLE GAH
      44061 <= t && t <= 44087 || // Lo  [27] HANGUL SYLLABLE GAEG..HANGUL SYLLABLE GAEH
      44089 <= t && t <= 44115 || // Lo  [27] HANGUL SYLLABLE GYAG..HANGUL SYLLABLE GYAH
      44117 <= t && t <= 44143 || // Lo  [27] HANGUL SYLLABLE GYAEG..HANGUL SYLLABLE GYAEH
      44145 <= t && t <= 44171 || // Lo  [27] HANGUL SYLLABLE GEOG..HANGUL SYLLABLE GEOH
      44173 <= t && t <= 44199 || // Lo  [27] HANGUL SYLLABLE GEG..HANGUL SYLLABLE GEH
      44201 <= t && t <= 44227 || // Lo  [27] HANGUL SYLLABLE GYEOG..HANGUL SYLLABLE GYEOH
      44229 <= t && t <= 44255 || // Lo  [27] HANGUL SYLLABLE GYEG..HANGUL SYLLABLE GYEH
      44257 <= t && t <= 44283 || // Lo  [27] HANGUL SYLLABLE GOG..HANGUL SYLLABLE GOH
      44285 <= t && t <= 44311 || // Lo  [27] HANGUL SYLLABLE GWAG..HANGUL SYLLABLE GWAH
      44313 <= t && t <= 44339 || // Lo  [27] HANGUL SYLLABLE GWAEG..HANGUL SYLLABLE GWAEH
      44341 <= t && t <= 44367 || // Lo  [27] HANGUL SYLLABLE GOEG..HANGUL SYLLABLE GOEH
      44369 <= t && t <= 44395 || // Lo  [27] HANGUL SYLLABLE GYOG..HANGUL SYLLABLE GYOH
      44397 <= t && t <= 44423 || // Lo  [27] HANGUL SYLLABLE GUG..HANGUL SYLLABLE GUH
      44425 <= t && t <= 44451 || // Lo  [27] HANGUL SYLLABLE GWEOG..HANGUL SYLLABLE GWEOH
      44453 <= t && t <= 44479 || // Lo  [27] HANGUL SYLLABLE GWEG..HANGUL SYLLABLE GWEH
      44481 <= t && t <= 44507 || // Lo  [27] HANGUL SYLLABLE GWIG..HANGUL SYLLABLE GWIH
      44509 <= t && t <= 44535 || // Lo  [27] HANGUL SYLLABLE GYUG..HANGUL SYLLABLE GYUH
      44537 <= t && t <= 44563 || // Lo  [27] HANGUL SYLLABLE GEUG..HANGUL SYLLABLE GEUH
      44565 <= t && t <= 44591 || // Lo  [27] HANGUL SYLLABLE GYIG..HANGUL SYLLABLE GYIH
      44593 <= t && t <= 44619 || // Lo  [27] HANGUL SYLLABLE GIG..HANGUL SYLLABLE GIH
      44621 <= t && t <= 44647 || // Lo  [27] HANGUL SYLLABLE GGAG..HANGUL SYLLABLE GGAH
      44649 <= t && t <= 44675 || // Lo  [27] HANGUL SYLLABLE GGAEG..HANGUL SYLLABLE GGAEH
      44677 <= t && t <= 44703 || // Lo  [27] HANGUL SYLLABLE GGYAG..HANGUL SYLLABLE GGYAH
      44705 <= t && t <= 44731 || // Lo  [27] HANGUL SYLLABLE GGYAEG..HANGUL SYLLABLE GGYAEH
      44733 <= t && t <= 44759 || // Lo  [27] HANGUL SYLLABLE GGEOG..HANGUL SYLLABLE GGEOH
      44761 <= t && t <= 44787 || // Lo  [27] HANGUL SYLLABLE GGEG..HANGUL SYLLABLE GGEH
      44789 <= t && t <= 44815 || // Lo  [27] HANGUL SYLLABLE GGYEOG..HANGUL SYLLABLE GGYEOH
      44817 <= t && t <= 44843 || // Lo  [27] HANGUL SYLLABLE GGYEG..HANGUL SYLLABLE GGYEH
      44845 <= t && t <= 44871 || // Lo  [27] HANGUL SYLLABLE GGOG..HANGUL SYLLABLE GGOH
      44873 <= t && t <= 44899 || // Lo  [27] HANGUL SYLLABLE GGWAG..HANGUL SYLLABLE GGWAH
      44901 <= t && t <= 44927 || // Lo  [27] HANGUL SYLLABLE GGWAEG..HANGUL SYLLABLE GGWAEH
      44929 <= t && t <= 44955 || // Lo  [27] HANGUL SYLLABLE GGOEG..HANGUL SYLLABLE GGOEH
      44957 <= t && t <= 44983 || // Lo  [27] HANGUL SYLLABLE GGYOG..HANGUL SYLLABLE GGYOH
      44985 <= t && t <= 45011 || // Lo  [27] HANGUL SYLLABLE GGUG..HANGUL SYLLABLE GGUH
      45013 <= t && t <= 45039 || // Lo  [27] HANGUL SYLLABLE GGWEOG..HANGUL SYLLABLE GGWEOH
      45041 <= t && t <= 45067 || // Lo  [27] HANGUL SYLLABLE GGWEG..HANGUL SYLLABLE GGWEH
      45069 <= t && t <= 45095 || // Lo  [27] HANGUL SYLLABLE GGWIG..HANGUL SYLLABLE GGWIH
      45097 <= t && t <= 45123 || // Lo  [27] HANGUL SYLLABLE GGYUG..HANGUL SYLLABLE GGYUH
      45125 <= t && t <= 45151 || // Lo  [27] HANGUL SYLLABLE GGEUG..HANGUL SYLLABLE GGEUH
      45153 <= t && t <= 45179 || // Lo  [27] HANGUL SYLLABLE GGYIG..HANGUL SYLLABLE GGYIH
      45181 <= t && t <= 45207 || // Lo  [27] HANGUL SYLLABLE GGIG..HANGUL SYLLABLE GGIH
      45209 <= t && t <= 45235 || // Lo  [27] HANGUL SYLLABLE NAG..HANGUL SYLLABLE NAH
      45237 <= t && t <= 45263 || // Lo  [27] HANGUL SYLLABLE NAEG..HANGUL SYLLABLE NAEH
      45265 <= t && t <= 45291 || // Lo  [27] HANGUL SYLLABLE NYAG..HANGUL SYLLABLE NYAH
      45293 <= t && t <= 45319 || // Lo  [27] HANGUL SYLLABLE NYAEG..HANGUL SYLLABLE NYAEH
      45321 <= t && t <= 45347 || // Lo  [27] HANGUL SYLLABLE NEOG..HANGUL SYLLABLE NEOH
      45349 <= t && t <= 45375 || // Lo  [27] HANGUL SYLLABLE NEG..HANGUL SYLLABLE NEH
      45377 <= t && t <= 45403 || // Lo  [27] HANGUL SYLLABLE NYEOG..HANGUL SYLLABLE NYEOH
      45405 <= t && t <= 45431 || // Lo  [27] HANGUL SYLLABLE NYEG..HANGUL SYLLABLE NYEH
      45433 <= t && t <= 45459 || // Lo  [27] HANGUL SYLLABLE NOG..HANGUL SYLLABLE NOH
      45461 <= t && t <= 45487 || // Lo  [27] HANGUL SYLLABLE NWAG..HANGUL SYLLABLE NWAH
      45489 <= t && t <= 45515 || // Lo  [27] HANGUL SYLLABLE NWAEG..HANGUL SYLLABLE NWAEH
      45517 <= t && t <= 45543 || // Lo  [27] HANGUL SYLLABLE NOEG..HANGUL SYLLABLE NOEH
      45545 <= t && t <= 45571 || // Lo  [27] HANGUL SYLLABLE NYOG..HANGUL SYLLABLE NYOH
      45573 <= t && t <= 45599 || // Lo  [27] HANGUL SYLLABLE NUG..HANGUL SYLLABLE NUH
      45601 <= t && t <= 45627 || // Lo  [27] HANGUL SYLLABLE NWEOG..HANGUL SYLLABLE NWEOH
      45629 <= t && t <= 45655 || // Lo  [27] HANGUL SYLLABLE NWEG..HANGUL SYLLABLE NWEH
      45657 <= t && t <= 45683 || // Lo  [27] HANGUL SYLLABLE NWIG..HANGUL SYLLABLE NWIH
      45685 <= t && t <= 45711 || // Lo  [27] HANGUL SYLLABLE NYUG..HANGUL SYLLABLE NYUH
      45713 <= t && t <= 45739 || // Lo  [27] HANGUL SYLLABLE NEUG..HANGUL SYLLABLE NEUH
      45741 <= t && t <= 45767 || // Lo  [27] HANGUL SYLLABLE NYIG..HANGUL SYLLABLE NYIH
      45769 <= t && t <= 45795 || // Lo  [27] HANGUL SYLLABLE NIG..HANGUL SYLLABLE NIH
      45797 <= t && t <= 45823 || // Lo  [27] HANGUL SYLLABLE DAG..HANGUL SYLLABLE DAH
      45825 <= t && t <= 45851 || // Lo  [27] HANGUL SYLLABLE DAEG..HANGUL SYLLABLE DAEH
      45853 <= t && t <= 45879 || // Lo  [27] HANGUL SYLLABLE DYAG..HANGUL SYLLABLE DYAH
      45881 <= t && t <= 45907 || // Lo  [27] HANGUL SYLLABLE DYAEG..HANGUL SYLLABLE DYAEH
      45909 <= t && t <= 45935 || // Lo  [27] HANGUL SYLLABLE DEOG..HANGUL SYLLABLE DEOH
      45937 <= t && t <= 45963 || // Lo  [27] HANGUL SYLLABLE DEG..HANGUL SYLLABLE DEH
      45965 <= t && t <= 45991 || // Lo  [27] HANGUL SYLLABLE DYEOG..HANGUL SYLLABLE DYEOH
      45993 <= t && t <= 46019 || // Lo  [27] HANGUL SYLLABLE DYEG..HANGUL SYLLABLE DYEH
      46021 <= t && t <= 46047 || // Lo  [27] HANGUL SYLLABLE DOG..HANGUL SYLLABLE DOH
      46049 <= t && t <= 46075 || // Lo  [27] HANGUL SYLLABLE DWAG..HANGUL SYLLABLE DWAH
      46077 <= t && t <= 46103 || // Lo  [27] HANGUL SYLLABLE DWAEG..HANGUL SYLLABLE DWAEH
      46105 <= t && t <= 46131 || // Lo  [27] HANGUL SYLLABLE DOEG..HANGUL SYLLABLE DOEH
      46133 <= t && t <= 46159 || // Lo  [27] HANGUL SYLLABLE DYOG..HANGUL SYLLABLE DYOH
      46161 <= t && t <= 46187 || // Lo  [27] HANGUL SYLLABLE DUG..HANGUL SYLLABLE DUH
      46189 <= t && t <= 46215 || // Lo  [27] HANGUL SYLLABLE DWEOG..HANGUL SYLLABLE DWEOH
      46217 <= t && t <= 46243 || // Lo  [27] HANGUL SYLLABLE DWEG..HANGUL SYLLABLE DWEH
      46245 <= t && t <= 46271 || // Lo  [27] HANGUL SYLLABLE DWIG..HANGUL SYLLABLE DWIH
      46273 <= t && t <= 46299 || // Lo  [27] HANGUL SYLLABLE DYUG..HANGUL SYLLABLE DYUH
      46301 <= t && t <= 46327 || // Lo  [27] HANGUL SYLLABLE DEUG..HANGUL SYLLABLE DEUH
      46329 <= t && t <= 46355 || // Lo  [27] HANGUL SYLLABLE DYIG..HANGUL SYLLABLE DYIH
      46357 <= t && t <= 46383 || // Lo  [27] HANGUL SYLLABLE DIG..HANGUL SYLLABLE DIH
      46385 <= t && t <= 46411 || // Lo  [27] HANGUL SYLLABLE DDAG..HANGUL SYLLABLE DDAH
      46413 <= t && t <= 46439 || // Lo  [27] HANGUL SYLLABLE DDAEG..HANGUL SYLLABLE DDAEH
      46441 <= t && t <= 46467 || // Lo  [27] HANGUL SYLLABLE DDYAG..HANGUL SYLLABLE DDYAH
      46469 <= t && t <= 46495 || // Lo  [27] HANGUL SYLLABLE DDYAEG..HANGUL SYLLABLE DDYAEH
      46497 <= t && t <= 46523 || // Lo  [27] HANGUL SYLLABLE DDEOG..HANGUL SYLLABLE DDEOH
      46525 <= t && t <= 46551 || // Lo  [27] HANGUL SYLLABLE DDEG..HANGUL SYLLABLE DDEH
      46553 <= t && t <= 46579 || // Lo  [27] HANGUL SYLLABLE DDYEOG..HANGUL SYLLABLE DDYEOH
      46581 <= t && t <= 46607 || // Lo  [27] HANGUL SYLLABLE DDYEG..HANGUL SYLLABLE DDYEH
      46609 <= t && t <= 46635 || // Lo  [27] HANGUL SYLLABLE DDOG..HANGUL SYLLABLE DDOH
      46637 <= t && t <= 46663 || // Lo  [27] HANGUL SYLLABLE DDWAG..HANGUL SYLLABLE DDWAH
      46665 <= t && t <= 46691 || // Lo  [27] HANGUL SYLLABLE DDWAEG..HANGUL SYLLABLE DDWAEH
      46693 <= t && t <= 46719 || // Lo  [27] HANGUL SYLLABLE DDOEG..HANGUL SYLLABLE DDOEH
      46721 <= t && t <= 46747 || // Lo  [27] HANGUL SYLLABLE DDYOG..HANGUL SYLLABLE DDYOH
      46749 <= t && t <= 46775 || // Lo  [27] HANGUL SYLLABLE DDUG..HANGUL SYLLABLE DDUH
      46777 <= t && t <= 46803 || // Lo  [27] HANGUL SYLLABLE DDWEOG..HANGUL SYLLABLE DDWEOH
      46805 <= t && t <= 46831 || // Lo  [27] HANGUL SYLLABLE DDWEG..HANGUL SYLLABLE DDWEH
      46833 <= t && t <= 46859 || // Lo  [27] HANGUL SYLLABLE DDWIG..HANGUL SYLLABLE DDWIH
      46861 <= t && t <= 46887 || // Lo  [27] HANGUL SYLLABLE DDYUG..HANGUL SYLLABLE DDYUH
      46889 <= t && t <= 46915 || // Lo  [27] HANGUL SYLLABLE DDEUG..HANGUL SYLLABLE DDEUH
      46917 <= t && t <= 46943 || // Lo  [27] HANGUL SYLLABLE DDYIG..HANGUL SYLLABLE DDYIH
      46945 <= t && t <= 46971 || // Lo  [27] HANGUL SYLLABLE DDIG..HANGUL SYLLABLE DDIH
      46973 <= t && t <= 46999 || // Lo  [27] HANGUL SYLLABLE RAG..HANGUL SYLLABLE RAH
      47001 <= t && t <= 47027 || // Lo  [27] HANGUL SYLLABLE RAEG..HANGUL SYLLABLE RAEH
      47029 <= t && t <= 47055 || // Lo  [27] HANGUL SYLLABLE RYAG..HANGUL SYLLABLE RYAH
      47057 <= t && t <= 47083 || // Lo  [27] HANGUL SYLLABLE RYAEG..HANGUL SYLLABLE RYAEH
      47085 <= t && t <= 47111 || // Lo  [27] HANGUL SYLLABLE REOG..HANGUL SYLLABLE REOH
      47113 <= t && t <= 47139 || // Lo  [27] HANGUL SYLLABLE REG..HANGUL SYLLABLE REH
      47141 <= t && t <= 47167 || // Lo  [27] HANGUL SYLLABLE RYEOG..HANGUL SYLLABLE RYEOH
      47169 <= t && t <= 47195 || // Lo  [27] HANGUL SYLLABLE RYEG..HANGUL SYLLABLE RYEH
      47197 <= t && t <= 47223 || // Lo  [27] HANGUL SYLLABLE ROG..HANGUL SYLLABLE ROH
      47225 <= t && t <= 47251 || // Lo  [27] HANGUL SYLLABLE RWAG..HANGUL SYLLABLE RWAH
      47253 <= t && t <= 47279 || // Lo  [27] HANGUL SYLLABLE RWAEG..HANGUL SYLLABLE RWAEH
      47281 <= t && t <= 47307 || // Lo  [27] HANGUL SYLLABLE ROEG..HANGUL SYLLABLE ROEH
      47309 <= t && t <= 47335 || // Lo  [27] HANGUL SYLLABLE RYOG..HANGUL SYLLABLE RYOH
      47337 <= t && t <= 47363 || // Lo  [27] HANGUL SYLLABLE RUG..HANGUL SYLLABLE RUH
      47365 <= t && t <= 47391 || // Lo  [27] HANGUL SYLLABLE RWEOG..HANGUL SYLLABLE RWEOH
      47393 <= t && t <= 47419 || // Lo  [27] HANGUL SYLLABLE RWEG..HANGUL SYLLABLE RWEH
      47421 <= t && t <= 47447 || // Lo  [27] HANGUL SYLLABLE RWIG..HANGUL SYLLABLE RWIH
      47449 <= t && t <= 47475 || // Lo  [27] HANGUL SYLLABLE RYUG..HANGUL SYLLABLE RYUH
      47477 <= t && t <= 47503 || // Lo  [27] HANGUL SYLLABLE REUG..HANGUL SYLLABLE REUH
      47505 <= t && t <= 47531 || // Lo  [27] HANGUL SYLLABLE RYIG..HANGUL SYLLABLE RYIH
      47533 <= t && t <= 47559 || // Lo  [27] HANGUL SYLLABLE RIG..HANGUL SYLLABLE RIH
      47561 <= t && t <= 47587 || // Lo  [27] HANGUL SYLLABLE MAG..HANGUL SYLLABLE MAH
      47589 <= t && t <= 47615 || // Lo  [27] HANGUL SYLLABLE MAEG..HANGUL SYLLABLE MAEH
      47617 <= t && t <= 47643 || // Lo  [27] HANGUL SYLLABLE MYAG..HANGUL SYLLABLE MYAH
      47645 <= t && t <= 47671 || // Lo  [27] HANGUL SYLLABLE MYAEG..HANGUL SYLLABLE MYAEH
      47673 <= t && t <= 47699 || // Lo  [27] HANGUL SYLLABLE MEOG..HANGUL SYLLABLE MEOH
      47701 <= t && t <= 47727 || // Lo  [27] HANGUL SYLLABLE MEG..HANGUL SYLLABLE MEH
      47729 <= t && t <= 47755 || // Lo  [27] HANGUL SYLLABLE MYEOG..HANGUL SYLLABLE MYEOH
      47757 <= t && t <= 47783 || // Lo  [27] HANGUL SYLLABLE MYEG..HANGUL SYLLABLE MYEH
      47785 <= t && t <= 47811 || // Lo  [27] HANGUL SYLLABLE MOG..HANGUL SYLLABLE MOH
      47813 <= t && t <= 47839 || // Lo  [27] HANGUL SYLLABLE MWAG..HANGUL SYLLABLE MWAH
      47841 <= t && t <= 47867 || // Lo  [27] HANGUL SYLLABLE MWAEG..HANGUL SYLLABLE MWAEH
      47869 <= t && t <= 47895 || // Lo  [27] HANGUL SYLLABLE MOEG..HANGUL SYLLABLE MOEH
      47897 <= t && t <= 47923 || // Lo  [27] HANGUL SYLLABLE MYOG..HANGUL SYLLABLE MYOH
      47925 <= t && t <= 47951 || // Lo  [27] HANGUL SYLLABLE MUG..HANGUL SYLLABLE MUH
      47953 <= t && t <= 47979 || // Lo  [27] HANGUL SYLLABLE MWEOG..HANGUL SYLLABLE MWEOH
      47981 <= t && t <= 48007 || // Lo  [27] HANGUL SYLLABLE MWEG..HANGUL SYLLABLE MWEH
      48009 <= t && t <= 48035 || // Lo  [27] HANGUL SYLLABLE MWIG..HANGUL SYLLABLE MWIH
      48037 <= t && t <= 48063 || // Lo  [27] HANGUL SYLLABLE MYUG..HANGUL SYLLABLE MYUH
      48065 <= t && t <= 48091 || // Lo  [27] HANGUL SYLLABLE MEUG..HANGUL SYLLABLE MEUH
      48093 <= t && t <= 48119 || // Lo  [27] HANGUL SYLLABLE MYIG..HANGUL SYLLABLE MYIH
      48121 <= t && t <= 48147 || // Lo  [27] HANGUL SYLLABLE MIG..HANGUL SYLLABLE MIH
      48149 <= t && t <= 48175 || // Lo  [27] HANGUL SYLLABLE BAG..HANGUL SYLLABLE BAH
      48177 <= t && t <= 48203 || // Lo  [27] HANGUL SYLLABLE BAEG..HANGUL SYLLABLE BAEH
      48205 <= t && t <= 48231 || // Lo  [27] HANGUL SYLLABLE BYAG..HANGUL SYLLABLE BYAH
      48233 <= t && t <= 48259 || // Lo  [27] HANGUL SYLLABLE BYAEG..HANGUL SYLLABLE BYAEH
      48261 <= t && t <= 48287 || // Lo  [27] HANGUL SYLLABLE BEOG..HANGUL SYLLABLE BEOH
      48289 <= t && t <= 48315 || // Lo  [27] HANGUL SYLLABLE BEG..HANGUL SYLLABLE BEH
      48317 <= t && t <= 48343 || // Lo  [27] HANGUL SYLLABLE BYEOG..HANGUL SYLLABLE BYEOH
      48345 <= t && t <= 48371 || // Lo  [27] HANGUL SYLLABLE BYEG..HANGUL SYLLABLE BYEH
      48373 <= t && t <= 48399 || // Lo  [27] HANGUL SYLLABLE BOG..HANGUL SYLLABLE BOH
      48401 <= t && t <= 48427 || // Lo  [27] HANGUL SYLLABLE BWAG..HANGUL SYLLABLE BWAH
      48429 <= t && t <= 48455 || // Lo  [27] HANGUL SYLLABLE BWAEG..HANGUL SYLLABLE BWAEH
      48457 <= t && t <= 48483 || // Lo  [27] HANGUL SYLLABLE BOEG..HANGUL SYLLABLE BOEH
      48485 <= t && t <= 48511 || // Lo  [27] HANGUL SYLLABLE BYOG..HANGUL SYLLABLE BYOH
      48513 <= t && t <= 48539 || // Lo  [27] HANGUL SYLLABLE BUG..HANGUL SYLLABLE BUH
      48541 <= t && t <= 48567 || // Lo  [27] HANGUL SYLLABLE BWEOG..HANGUL SYLLABLE BWEOH
      48569 <= t && t <= 48595 || // Lo  [27] HANGUL SYLLABLE BWEG..HANGUL SYLLABLE BWEH
      48597 <= t && t <= 48623 || // Lo  [27] HANGUL SYLLABLE BWIG..HANGUL SYLLABLE BWIH
      48625 <= t && t <= 48651 || // Lo  [27] HANGUL SYLLABLE BYUG..HANGUL SYLLABLE BYUH
      48653 <= t && t <= 48679 || // Lo  [27] HANGUL SYLLABLE BEUG..HANGUL SYLLABLE BEUH
      48681 <= t && t <= 48707 || // Lo  [27] HANGUL SYLLABLE BYIG..HANGUL SYLLABLE BYIH
      48709 <= t && t <= 48735 || // Lo  [27] HANGUL SYLLABLE BIG..HANGUL SYLLABLE BIH
      48737 <= t && t <= 48763 || // Lo  [27] HANGUL SYLLABLE BBAG..HANGUL SYLLABLE BBAH
      48765 <= t && t <= 48791 || // Lo  [27] HANGUL SYLLABLE BBAEG..HANGUL SYLLABLE BBAEH
      48793 <= t && t <= 48819 || // Lo  [27] HANGUL SYLLABLE BBYAG..HANGUL SYLLABLE BBYAH
      48821 <= t && t <= 48847 || // Lo  [27] HANGUL SYLLABLE BBYAEG..HANGUL SYLLABLE BBYAEH
      48849 <= t && t <= 48875 || // Lo  [27] HANGUL SYLLABLE BBEOG..HANGUL SYLLABLE BBEOH
      48877 <= t && t <= 48903 || // Lo  [27] HANGUL SYLLABLE BBEG..HANGUL SYLLABLE BBEH
      48905 <= t && t <= 48931 || // Lo  [27] HANGUL SYLLABLE BBYEOG..HANGUL SYLLABLE BBYEOH
      48933 <= t && t <= 48959 || // Lo  [27] HANGUL SYLLABLE BBYEG..HANGUL SYLLABLE BBYEH
      48961 <= t && t <= 48987 || // Lo  [27] HANGUL SYLLABLE BBOG..HANGUL SYLLABLE BBOH
      48989 <= t && t <= 49015 || // Lo  [27] HANGUL SYLLABLE BBWAG..HANGUL SYLLABLE BBWAH
      49017 <= t && t <= 49043 || // Lo  [27] HANGUL SYLLABLE BBWAEG..HANGUL SYLLABLE BBWAEH
      49045 <= t && t <= 49071 || // Lo  [27] HANGUL SYLLABLE BBOEG..HANGUL SYLLABLE BBOEH
      49073 <= t && t <= 49099 || // Lo  [27] HANGUL SYLLABLE BBYOG..HANGUL SYLLABLE BBYOH
      49101 <= t && t <= 49127 || // Lo  [27] HANGUL SYLLABLE BBUG..HANGUL SYLLABLE BBUH
      49129 <= t && t <= 49155 || // Lo  [27] HANGUL SYLLABLE BBWEOG..HANGUL SYLLABLE BBWEOH
      49157 <= t && t <= 49183 || // Lo  [27] HANGUL SYLLABLE BBWEG..HANGUL SYLLABLE BBWEH
      49185 <= t && t <= 49211 || // Lo  [27] HANGUL SYLLABLE BBWIG..HANGUL SYLLABLE BBWIH
      49213 <= t && t <= 49239 || // Lo  [27] HANGUL SYLLABLE BBYUG..HANGUL SYLLABLE BBYUH
      49241 <= t && t <= 49267 || // Lo  [27] HANGUL SYLLABLE BBEUG..HANGUL SYLLABLE BBEUH
      49269 <= t && t <= 49295 || // Lo  [27] HANGUL SYLLABLE BBYIG..HANGUL SYLLABLE BBYIH
      49297 <= t && t <= 49323 || // Lo  [27] HANGUL SYLLABLE BBIG..HANGUL SYLLABLE BBIH
      49325 <= t && t <= 49351 || // Lo  [27] HANGUL SYLLABLE SAG..HANGUL SYLLABLE SAH
      49353 <= t && t <= 49379 || // Lo  [27] HANGUL SYLLABLE SAEG..HANGUL SYLLABLE SAEH
      49381 <= t && t <= 49407 || // Lo  [27] HANGUL SYLLABLE SYAG..HANGUL SYLLABLE SYAH
      49409 <= t && t <= 49435 || // Lo  [27] HANGUL SYLLABLE SYAEG..HANGUL SYLLABLE SYAEH
      49437 <= t && t <= 49463 || // Lo  [27] HANGUL SYLLABLE SEOG..HANGUL SYLLABLE SEOH
      49465 <= t && t <= 49491 || // Lo  [27] HANGUL SYLLABLE SEG..HANGUL SYLLABLE SEH
      49493 <= t && t <= 49519 || // Lo  [27] HANGUL SYLLABLE SYEOG..HANGUL SYLLABLE SYEOH
      49521 <= t && t <= 49547 || // Lo  [27] HANGUL SYLLABLE SYEG..HANGUL SYLLABLE SYEH
      49549 <= t && t <= 49575 || // Lo  [27] HANGUL SYLLABLE SOG..HANGUL SYLLABLE SOH
      49577 <= t && t <= 49603 || // Lo  [27] HANGUL SYLLABLE SWAG..HANGUL SYLLABLE SWAH
      49605 <= t && t <= 49631 || // Lo  [27] HANGUL SYLLABLE SWAEG..HANGUL SYLLABLE SWAEH
      49633 <= t && t <= 49659 || // Lo  [27] HANGUL SYLLABLE SOEG..HANGUL SYLLABLE SOEH
      49661 <= t && t <= 49687 || // Lo  [27] HANGUL SYLLABLE SYOG..HANGUL SYLLABLE SYOH
      49689 <= t && t <= 49715 || // Lo  [27] HANGUL SYLLABLE SUG..HANGUL SYLLABLE SUH
      49717 <= t && t <= 49743 || // Lo  [27] HANGUL SYLLABLE SWEOG..HANGUL SYLLABLE SWEOH
      49745 <= t && t <= 49771 || // Lo  [27] HANGUL SYLLABLE SWEG..HANGUL SYLLABLE SWEH
      49773 <= t && t <= 49799 || // Lo  [27] HANGUL SYLLABLE SWIG..HANGUL SYLLABLE SWIH
      49801 <= t && t <= 49827 || // Lo  [27] HANGUL SYLLABLE SYUG..HANGUL SYLLABLE SYUH
      49829 <= t && t <= 49855 || // Lo  [27] HANGUL SYLLABLE SEUG..HANGUL SYLLABLE SEUH
      49857 <= t && t <= 49883 || // Lo  [27] HANGUL SYLLABLE SYIG..HANGUL SYLLABLE SYIH
      49885 <= t && t <= 49911 || // Lo  [27] HANGUL SYLLABLE SIG..HANGUL SYLLABLE SIH
      49913 <= t && t <= 49939 || // Lo  [27] HANGUL SYLLABLE SSAG..HANGUL SYLLABLE SSAH
      49941 <= t && t <= 49967 || // Lo  [27] HANGUL SYLLABLE SSAEG..HANGUL SYLLABLE SSAEH
      49969 <= t && t <= 49995 || // Lo  [27] HANGUL SYLLABLE SSYAG..HANGUL SYLLABLE SSYAH
      49997 <= t && t <= 50023 || // Lo  [27] HANGUL SYLLABLE SSYAEG..HANGUL SYLLABLE SSYAEH
      50025 <= t && t <= 50051 || // Lo  [27] HANGUL SYLLABLE SSEOG..HANGUL SYLLABLE SSEOH
      50053 <= t && t <= 50079 || // Lo  [27] HANGUL SYLLABLE SSEG..HANGUL SYLLABLE SSEH
      50081 <= t && t <= 50107 || // Lo  [27] HANGUL SYLLABLE SSYEOG..HANGUL SYLLABLE SSYEOH
      50109 <= t && t <= 50135 || // Lo  [27] HANGUL SYLLABLE SSYEG..HANGUL SYLLABLE SSYEH
      50137 <= t && t <= 50163 || // Lo  [27] HANGUL SYLLABLE SSOG..HANGUL SYLLABLE SSOH
      50165 <= t && t <= 50191 || // Lo  [27] HANGUL SYLLABLE SSWAG..HANGUL SYLLABLE SSWAH
      50193 <= t && t <= 50219 || // Lo  [27] HANGUL SYLLABLE SSWAEG..HANGUL SYLLABLE SSWAEH
      50221 <= t && t <= 50247 || // Lo  [27] HANGUL SYLLABLE SSOEG..HANGUL SYLLABLE SSOEH
      50249 <= t && t <= 50275 || // Lo  [27] HANGUL SYLLABLE SSYOG..HANGUL SYLLABLE SSYOH
      50277 <= t && t <= 50303 || // Lo  [27] HANGUL SYLLABLE SSUG..HANGUL SYLLABLE SSUH
      50305 <= t && t <= 50331 || // Lo  [27] HANGUL SYLLABLE SSWEOG..HANGUL SYLLABLE SSWEOH
      50333 <= t && t <= 50359 || // Lo  [27] HANGUL SYLLABLE SSWEG..HANGUL SYLLABLE SSWEH
      50361 <= t && t <= 50387 || // Lo  [27] HANGUL SYLLABLE SSWIG..HANGUL SYLLABLE SSWIH
      50389 <= t && t <= 50415 || // Lo  [27] HANGUL SYLLABLE SSYUG..HANGUL SYLLABLE SSYUH
      50417 <= t && t <= 50443 || // Lo  [27] HANGUL SYLLABLE SSEUG..HANGUL SYLLABLE SSEUH
      50445 <= t && t <= 50471 || // Lo  [27] HANGUL SYLLABLE SSYIG..HANGUL SYLLABLE SSYIH
      50473 <= t && t <= 50499 || // Lo  [27] HANGUL SYLLABLE SSIG..HANGUL SYLLABLE SSIH
      50501 <= t && t <= 50527 || // Lo  [27] HANGUL SYLLABLE AG..HANGUL SYLLABLE AH
      50529 <= t && t <= 50555 || // Lo  [27] HANGUL SYLLABLE AEG..HANGUL SYLLABLE AEH
      50557 <= t && t <= 50583 || // Lo  [27] HANGUL SYLLABLE YAG..HANGUL SYLLABLE YAH
      50585 <= t && t <= 50611 || // Lo  [27] HANGUL SYLLABLE YAEG..HANGUL SYLLABLE YAEH
      50613 <= t && t <= 50639 || // Lo  [27] HANGUL SYLLABLE EOG..HANGUL SYLLABLE EOH
      50641 <= t && t <= 50667 || // Lo  [27] HANGUL SYLLABLE EG..HANGUL SYLLABLE EH
      50669 <= t && t <= 50695 || // Lo  [27] HANGUL SYLLABLE YEOG..HANGUL SYLLABLE YEOH
      50697 <= t && t <= 50723 || // Lo  [27] HANGUL SYLLABLE YEG..HANGUL SYLLABLE YEH
      50725 <= t && t <= 50751 || // Lo  [27] HANGUL SYLLABLE OG..HANGUL SYLLABLE OH
      50753 <= t && t <= 50779 || // Lo  [27] HANGUL SYLLABLE WAG..HANGUL SYLLABLE WAH
      50781 <= t && t <= 50807 || // Lo  [27] HANGUL SYLLABLE WAEG..HANGUL SYLLABLE WAEH
      50809 <= t && t <= 50835 || // Lo  [27] HANGUL SYLLABLE OEG..HANGUL SYLLABLE OEH
      50837 <= t && t <= 50863 || // Lo  [27] HANGUL SYLLABLE YOG..HANGUL SYLLABLE YOH
      50865 <= t && t <= 50891 || // Lo  [27] HANGUL SYLLABLE UG..HANGUL SYLLABLE UH
      50893 <= t && t <= 50919 || // Lo  [27] HANGUL SYLLABLE WEOG..HANGUL SYLLABLE WEOH
      50921 <= t && t <= 50947 || // Lo  [27] HANGUL SYLLABLE WEG..HANGUL SYLLABLE WEH
      50949 <= t && t <= 50975 || // Lo  [27] HANGUL SYLLABLE WIG..HANGUL SYLLABLE WIH
      50977 <= t && t <= 51003 || // Lo  [27] HANGUL SYLLABLE YUG..HANGUL SYLLABLE YUH
      51005 <= t && t <= 51031 || // Lo  [27] HANGUL SYLLABLE EUG..HANGUL SYLLABLE EUH
      51033 <= t && t <= 51059 || // Lo  [27] HANGUL SYLLABLE YIG..HANGUL SYLLABLE YIH
      51061 <= t && t <= 51087 || // Lo  [27] HANGUL SYLLABLE IG..HANGUL SYLLABLE IH
      51089 <= t && t <= 51115 || // Lo  [27] HANGUL SYLLABLE JAG..HANGUL SYLLABLE JAH
      51117 <= t && t <= 51143 || // Lo  [27] HANGUL SYLLABLE JAEG..HANGUL SYLLABLE JAEH
      51145 <= t && t <= 51171 || // Lo  [27] HANGUL SYLLABLE JYAG..HANGUL SYLLABLE JYAH
      51173 <= t && t <= 51199 || // Lo  [27] HANGUL SYLLABLE JYAEG..HANGUL SYLLABLE JYAEH
      51201 <= t && t <= 51227 || // Lo  [27] HANGUL SYLLABLE JEOG..HANGUL SYLLABLE JEOH
      51229 <= t && t <= 51255 || // Lo  [27] HANGUL SYLLABLE JEG..HANGUL SYLLABLE JEH
      51257 <= t && t <= 51283 || // Lo  [27] HANGUL SYLLABLE JYEOG..HANGUL SYLLABLE JYEOH
      51285 <= t && t <= 51311 || // Lo  [27] HANGUL SYLLABLE JYEG..HANGUL SYLLABLE JYEH
      51313 <= t && t <= 51339 || // Lo  [27] HANGUL SYLLABLE JOG..HANGUL SYLLABLE JOH
      51341 <= t && t <= 51367 || // Lo  [27] HANGUL SYLLABLE JWAG..HANGUL SYLLABLE JWAH
      51369 <= t && t <= 51395 || // Lo  [27] HANGUL SYLLABLE JWAEG..HANGUL SYLLABLE JWAEH
      51397 <= t && t <= 51423 || // Lo  [27] HANGUL SYLLABLE JOEG..HANGUL SYLLABLE JOEH
      51425 <= t && t <= 51451 || // Lo  [27] HANGUL SYLLABLE JYOG..HANGUL SYLLABLE JYOH
      51453 <= t && t <= 51479 || // Lo  [27] HANGUL SYLLABLE JUG..HANGUL SYLLABLE JUH
      51481 <= t && t <= 51507 || // Lo  [27] HANGUL SYLLABLE JWEOG..HANGUL SYLLABLE JWEOH
      51509 <= t && t <= 51535 || // Lo  [27] HANGUL SYLLABLE JWEG..HANGUL SYLLABLE JWEH
      51537 <= t && t <= 51563 || // Lo  [27] HANGUL SYLLABLE JWIG..HANGUL SYLLABLE JWIH
      51565 <= t && t <= 51591 || // Lo  [27] HANGUL SYLLABLE JYUG..HANGUL SYLLABLE JYUH
      51593 <= t && t <= 51619 || // Lo  [27] HANGUL SYLLABLE JEUG..HANGUL SYLLABLE JEUH
      51621 <= t && t <= 51647 || // Lo  [27] HANGUL SYLLABLE JYIG..HANGUL SYLLABLE JYIH
      51649 <= t && t <= 51675 || // Lo  [27] HANGUL SYLLABLE JIG..HANGUL SYLLABLE JIH
      51677 <= t && t <= 51703 || // Lo  [27] HANGUL SYLLABLE JJAG..HANGUL SYLLABLE JJAH
      51705 <= t && t <= 51731 || // Lo  [27] HANGUL SYLLABLE JJAEG..HANGUL SYLLABLE JJAEH
      51733 <= t && t <= 51759 || // Lo  [27] HANGUL SYLLABLE JJYAG..HANGUL SYLLABLE JJYAH
      51761 <= t && t <= 51787 || // Lo  [27] HANGUL SYLLABLE JJYAEG..HANGUL SYLLABLE JJYAEH
      51789 <= t && t <= 51815 || // Lo  [27] HANGUL SYLLABLE JJEOG..HANGUL SYLLABLE JJEOH
      51817 <= t && t <= 51843 || // Lo  [27] HANGUL SYLLABLE JJEG..HANGUL SYLLABLE JJEH
      51845 <= t && t <= 51871 || // Lo  [27] HANGUL SYLLABLE JJYEOG..HANGUL SYLLABLE JJYEOH
      51873 <= t && t <= 51899 || // Lo  [27] HANGUL SYLLABLE JJYEG..HANGUL SYLLABLE JJYEH
      51901 <= t && t <= 51927 || // Lo  [27] HANGUL SYLLABLE JJOG..HANGUL SYLLABLE JJOH
      51929 <= t && t <= 51955 || // Lo  [27] HANGUL SYLLABLE JJWAG..HANGUL SYLLABLE JJWAH
      51957 <= t && t <= 51983 || // Lo  [27] HANGUL SYLLABLE JJWAEG..HANGUL SYLLABLE JJWAEH
      51985 <= t && t <= 52011 || // Lo  [27] HANGUL SYLLABLE JJOEG..HANGUL SYLLABLE JJOEH
      52013 <= t && t <= 52039 || // Lo  [27] HANGUL SYLLABLE JJYOG..HANGUL SYLLABLE JJYOH
      52041 <= t && t <= 52067 || // Lo  [27] HANGUL SYLLABLE JJUG..HANGUL SYLLABLE JJUH
      52069 <= t && t <= 52095 || // Lo  [27] HANGUL SYLLABLE JJWEOG..HANGUL SYLLABLE JJWEOH
      52097 <= t && t <= 52123 || // Lo  [27] HANGUL SYLLABLE JJWEG..HANGUL SYLLABLE JJWEH
      52125 <= t && t <= 52151 || // Lo  [27] HANGUL SYLLABLE JJWIG..HANGUL SYLLABLE JJWIH
      52153 <= t && t <= 52179 || // Lo  [27] HANGUL SYLLABLE JJYUG..HANGUL SYLLABLE JJYUH
      52181 <= t && t <= 52207 || // Lo  [27] HANGUL SYLLABLE JJEUG..HANGUL SYLLABLE JJEUH
      52209 <= t && t <= 52235 || // Lo  [27] HANGUL SYLLABLE JJYIG..HANGUL SYLLABLE JJYIH
      52237 <= t && t <= 52263 || // Lo  [27] HANGUL SYLLABLE JJIG..HANGUL SYLLABLE JJIH
      52265 <= t && t <= 52291 || // Lo  [27] HANGUL SYLLABLE CAG..HANGUL SYLLABLE CAH
      52293 <= t && t <= 52319 || // Lo  [27] HANGUL SYLLABLE CAEG..HANGUL SYLLABLE CAEH
      52321 <= t && t <= 52347 || // Lo  [27] HANGUL SYLLABLE CYAG..HANGUL SYLLABLE CYAH
      52349 <= t && t <= 52375 || // Lo  [27] HANGUL SYLLABLE CYAEG..HANGUL SYLLABLE CYAEH
      52377 <= t && t <= 52403 || // Lo  [27] HANGUL SYLLABLE CEOG..HANGUL SYLLABLE CEOH
      52405 <= t && t <= 52431 || // Lo  [27] HANGUL SYLLABLE CEG..HANGUL SYLLABLE CEH
      52433 <= t && t <= 52459 || // Lo  [27] HANGUL SYLLABLE CYEOG..HANGUL SYLLABLE CYEOH
      52461 <= t && t <= 52487 || // Lo  [27] HANGUL SYLLABLE CYEG..HANGUL SYLLABLE CYEH
      52489 <= t && t <= 52515 || // Lo  [27] HANGUL SYLLABLE COG..HANGUL SYLLABLE COH
      52517 <= t && t <= 52543 || // Lo  [27] HANGUL SYLLABLE CWAG..HANGUL SYLLABLE CWAH
      52545 <= t && t <= 52571 || // Lo  [27] HANGUL SYLLABLE CWAEG..HANGUL SYLLABLE CWAEH
      52573 <= t && t <= 52599 || // Lo  [27] HANGUL SYLLABLE COEG..HANGUL SYLLABLE COEH
      52601 <= t && t <= 52627 || // Lo  [27] HANGUL SYLLABLE CYOG..HANGUL SYLLABLE CYOH
      52629 <= t && t <= 52655 || // Lo  [27] HANGUL SYLLABLE CUG..HANGUL SYLLABLE CUH
      52657 <= t && t <= 52683 || // Lo  [27] HANGUL SYLLABLE CWEOG..HANGUL SYLLABLE CWEOH
      52685 <= t && t <= 52711 || // Lo  [27] HANGUL SYLLABLE CWEG..HANGUL SYLLABLE CWEH
      52713 <= t && t <= 52739 || // Lo  [27] HANGUL SYLLABLE CWIG..HANGUL SYLLABLE CWIH
      52741 <= t && t <= 52767 || // Lo  [27] HANGUL SYLLABLE CYUG..HANGUL SYLLABLE CYUH
      52769 <= t && t <= 52795 || // Lo  [27] HANGUL SYLLABLE CEUG..HANGUL SYLLABLE CEUH
      52797 <= t && t <= 52823 || // Lo  [27] HANGUL SYLLABLE CYIG..HANGUL SYLLABLE CYIH
      52825 <= t && t <= 52851 || // Lo  [27] HANGUL SYLLABLE CIG..HANGUL SYLLABLE CIH
      52853 <= t && t <= 52879 || // Lo  [27] HANGUL SYLLABLE KAG..HANGUL SYLLABLE KAH
      52881 <= t && t <= 52907 || // Lo  [27] HANGUL SYLLABLE KAEG..HANGUL SYLLABLE KAEH
      52909 <= t && t <= 52935 || // Lo  [27] HANGUL SYLLABLE KYAG..HANGUL SYLLABLE KYAH
      52937 <= t && t <= 52963 || // Lo  [27] HANGUL SYLLABLE KYAEG..HANGUL SYLLABLE KYAEH
      52965 <= t && t <= 52991 || // Lo  [27] HANGUL SYLLABLE KEOG..HANGUL SYLLABLE KEOH
      52993 <= t && t <= 53019 || // Lo  [27] HANGUL SYLLABLE KEG..HANGUL SYLLABLE KEH
      53021 <= t && t <= 53047 || // Lo  [27] HANGUL SYLLABLE KYEOG..HANGUL SYLLABLE KYEOH
      53049 <= t && t <= 53075 || // Lo  [27] HANGUL SYLLABLE KYEG..HANGUL SYLLABLE KYEH
      53077 <= t && t <= 53103 || // Lo  [27] HANGUL SYLLABLE KOG..HANGUL SYLLABLE KOH
      53105 <= t && t <= 53131 || // Lo  [27] HANGUL SYLLABLE KWAG..HANGUL SYLLABLE KWAH
      53133 <= t && t <= 53159 || // Lo  [27] HANGUL SYLLABLE KWAEG..HANGUL SYLLABLE KWAEH
      53161 <= t && t <= 53187 || // Lo  [27] HANGUL SYLLABLE KOEG..HANGUL SYLLABLE KOEH
      53189 <= t && t <= 53215 || // Lo  [27] HANGUL SYLLABLE KYOG..HANGUL SYLLABLE KYOH
      53217 <= t && t <= 53243 || // Lo  [27] HANGUL SYLLABLE KUG..HANGUL SYLLABLE KUH
      53245 <= t && t <= 53271 || // Lo  [27] HANGUL SYLLABLE KWEOG..HANGUL SYLLABLE KWEOH
      53273 <= t && t <= 53299 || // Lo  [27] HANGUL SYLLABLE KWEG..HANGUL SYLLABLE KWEH
      53301 <= t && t <= 53327 || // Lo  [27] HANGUL SYLLABLE KWIG..HANGUL SYLLABLE KWIH
      53329 <= t && t <= 53355 || // Lo  [27] HANGUL SYLLABLE KYUG..HANGUL SYLLABLE KYUH
      53357 <= t && t <= 53383 || // Lo  [27] HANGUL SYLLABLE KEUG..HANGUL SYLLABLE KEUH
      53385 <= t && t <= 53411 || // Lo  [27] HANGUL SYLLABLE KYIG..HANGUL SYLLABLE KYIH
      53413 <= t && t <= 53439 || // Lo  [27] HANGUL SYLLABLE KIG..HANGUL SYLLABLE KIH
      53441 <= t && t <= 53467 || // Lo  [27] HANGUL SYLLABLE TAG..HANGUL SYLLABLE TAH
      53469 <= t && t <= 53495 || // Lo  [27] HANGUL SYLLABLE TAEG..HANGUL SYLLABLE TAEH
      53497 <= t && t <= 53523 || // Lo  [27] HANGUL SYLLABLE TYAG..HANGUL SYLLABLE TYAH
      53525 <= t && t <= 53551 || // Lo  [27] HANGUL SYLLABLE TYAEG..HANGUL SYLLABLE TYAEH
      53553 <= t && t <= 53579 || // Lo  [27] HANGUL SYLLABLE TEOG..HANGUL SYLLABLE TEOH
      53581 <= t && t <= 53607 || // Lo  [27] HANGUL SYLLABLE TEG..HANGUL SYLLABLE TEH
      53609 <= t && t <= 53635 || // Lo  [27] HANGUL SYLLABLE TYEOG..HANGUL SYLLABLE TYEOH
      53637 <= t && t <= 53663 || // Lo  [27] HANGUL SYLLABLE TYEG..HANGUL SYLLABLE TYEH
      53665 <= t && t <= 53691 || // Lo  [27] HANGUL SYLLABLE TOG..HANGUL SYLLABLE TOH
      53693 <= t && t <= 53719 || // Lo  [27] HANGUL SYLLABLE TWAG..HANGUL SYLLABLE TWAH
      53721 <= t && t <= 53747 || // Lo  [27] HANGUL SYLLABLE TWAEG..HANGUL SYLLABLE TWAEH
      53749 <= t && t <= 53775 || // Lo  [27] HANGUL SYLLABLE TOEG..HANGUL SYLLABLE TOEH
      53777 <= t && t <= 53803 || // Lo  [27] HANGUL SYLLABLE TYOG..HANGUL SYLLABLE TYOH
      53805 <= t && t <= 53831 || // Lo  [27] HANGUL SYLLABLE TUG..HANGUL SYLLABLE TUH
      53833 <= t && t <= 53859 || // Lo  [27] HANGUL SYLLABLE TWEOG..HANGUL SYLLABLE TWEOH
      53861 <= t && t <= 53887 || // Lo  [27] HANGUL SYLLABLE TWEG..HANGUL SYLLABLE TWEH
      53889 <= t && t <= 53915 || // Lo  [27] HANGUL SYLLABLE TWIG..HANGUL SYLLABLE TWIH
      53917 <= t && t <= 53943 || // Lo  [27] HANGUL SYLLABLE TYUG..HANGUL SYLLABLE TYUH
      53945 <= t && t <= 53971 || // Lo  [27] HANGUL SYLLABLE TEUG..HANGUL SYLLABLE TEUH
      53973 <= t && t <= 53999 || // Lo  [27] HANGUL SYLLABLE TYIG..HANGUL SYLLABLE TYIH
      54001 <= t && t <= 54027 || // Lo  [27] HANGUL SYLLABLE TIG..HANGUL SYLLABLE TIH
      54029 <= t && t <= 54055 || // Lo  [27] HANGUL SYLLABLE PAG..HANGUL SYLLABLE PAH
      54057 <= t && t <= 54083 || // Lo  [27] HANGUL SYLLABLE PAEG..HANGUL SYLLABLE PAEH
      54085 <= t && t <= 54111 || // Lo  [27] HANGUL SYLLABLE PYAG..HANGUL SYLLABLE PYAH
      54113 <= t && t <= 54139 || // Lo  [27] HANGUL SYLLABLE PYAEG..HANGUL SYLLABLE PYAEH
      54141 <= t && t <= 54167 || // Lo  [27] HANGUL SYLLABLE PEOG..HANGUL SYLLABLE PEOH
      54169 <= t && t <= 54195 || // Lo  [27] HANGUL SYLLABLE PEG..HANGUL SYLLABLE PEH
      54197 <= t && t <= 54223 || // Lo  [27] HANGUL SYLLABLE PYEOG..HANGUL SYLLABLE PYEOH
      54225 <= t && t <= 54251 || // Lo  [27] HANGUL SYLLABLE PYEG..HANGUL SYLLABLE PYEH
      54253 <= t && t <= 54279 || // Lo  [27] HANGUL SYLLABLE POG..HANGUL SYLLABLE POH
      54281 <= t && t <= 54307 || // Lo  [27] HANGUL SYLLABLE PWAG..HANGUL SYLLABLE PWAH
      54309 <= t && t <= 54335 || // Lo  [27] HANGUL SYLLABLE PWAEG..HANGUL SYLLABLE PWAEH
      54337 <= t && t <= 54363 || // Lo  [27] HANGUL SYLLABLE POEG..HANGUL SYLLABLE POEH
      54365 <= t && t <= 54391 || // Lo  [27] HANGUL SYLLABLE PYOG..HANGUL SYLLABLE PYOH
      54393 <= t && t <= 54419 || // Lo  [27] HANGUL SYLLABLE PUG..HANGUL SYLLABLE PUH
      54421 <= t && t <= 54447 || // Lo  [27] HANGUL SYLLABLE PWEOG..HANGUL SYLLABLE PWEOH
      54449 <= t && t <= 54475 || // Lo  [27] HANGUL SYLLABLE PWEG..HANGUL SYLLABLE PWEH
      54477 <= t && t <= 54503 || // Lo  [27] HANGUL SYLLABLE PWIG..HANGUL SYLLABLE PWIH
      54505 <= t && t <= 54531 || // Lo  [27] HANGUL SYLLABLE PYUG..HANGUL SYLLABLE PYUH
      54533 <= t && t <= 54559 || // Lo  [27] HANGUL SYLLABLE PEUG..HANGUL SYLLABLE PEUH
      54561 <= t && t <= 54587 || // Lo  [27] HANGUL SYLLABLE PYIG..HANGUL SYLLABLE PYIH
      54589 <= t && t <= 54615 || // Lo  [27] HANGUL SYLLABLE PIG..HANGUL SYLLABLE PIH
      54617 <= t && t <= 54643 || // Lo  [27] HANGUL SYLLABLE HAG..HANGUL SYLLABLE HAH
      54645 <= t && t <= 54671 || // Lo  [27] HANGUL SYLLABLE HAEG..HANGUL SYLLABLE HAEH
      54673 <= t && t <= 54699 || // Lo  [27] HANGUL SYLLABLE HYAG..HANGUL SYLLABLE HYAH
      54701 <= t && t <= 54727 || // Lo  [27] HANGUL SYLLABLE HYAEG..HANGUL SYLLABLE HYAEH
      54729 <= t && t <= 54755 || // Lo  [27] HANGUL SYLLABLE HEOG..HANGUL SYLLABLE HEOH
      54757 <= t && t <= 54783 || // Lo  [27] HANGUL SYLLABLE HEG..HANGUL SYLLABLE HEH
      54785 <= t && t <= 54811 || // Lo  [27] HANGUL SYLLABLE HYEOG..HANGUL SYLLABLE HYEOH
      54813 <= t && t <= 54839 || // Lo  [27] HANGUL SYLLABLE HYEG..HANGUL SYLLABLE HYEH
      54841 <= t && t <= 54867 || // Lo  [27] HANGUL SYLLABLE HOG..HANGUL SYLLABLE HOH
      54869 <= t && t <= 54895 || // Lo  [27] HANGUL SYLLABLE HWAG..HANGUL SYLLABLE HWAH
      54897 <= t && t <= 54923 || // Lo  [27] HANGUL SYLLABLE HWAEG..HANGUL SYLLABLE HWAEH
      54925 <= t && t <= 54951 || // Lo  [27] HANGUL SYLLABLE HOEG..HANGUL SYLLABLE HOEH
      54953 <= t && t <= 54979 || // Lo  [27] HANGUL SYLLABLE HYOG..HANGUL SYLLABLE HYOH
      54981 <= t && t <= 55007 || // Lo  [27] HANGUL SYLLABLE HUG..HANGUL SYLLABLE HUH
      55009 <= t && t <= 55035 || // Lo  [27] HANGUL SYLLABLE HWEOG..HANGUL SYLLABLE HWEOH
      55037 <= t && t <= 55063 || // Lo  [27] HANGUL SYLLABLE HWEG..HANGUL SYLLABLE HWEH
      55065 <= t && t <= 55091 || // Lo  [27] HANGUL SYLLABLE HWIG..HANGUL SYLLABLE HWIH
      55093 <= t && t <= 55119 || // Lo  [27] HANGUL SYLLABLE HYUG..HANGUL SYLLABLE HYUH
      55121 <= t && t <= 55147 || // Lo  [27] HANGUL SYLLABLE HEUG..HANGUL SYLLABLE HEUH
      55149 <= t && t <= 55175 || // Lo  [27] HANGUL SYLLABLE HYIG..HANGUL SYLLABLE HYIH
      55177 <= t && t <= 55203 ? A : t == 9757 || // So       WHITE UP POINTING INDEX
      t == 9977 || // So       PERSON WITH BALL
      9994 <= t && t <= 9997 || // So   [4] RAISED FIST..WRITING HAND
      t == 127877 || // So       FATHER CHRISTMAS
      127938 <= t && t <= 127940 || // So   [3] SNOWBOARDER..SURFER
      t == 127943 || // So       HORSE RACING
      127946 <= t && t <= 127948 || // So   [3] SWIMMER..GOLFER
      128066 <= t && t <= 128067 || // So   [2] EAR..NOSE
      128070 <= t && t <= 128080 || // So  [11] WHITE UP POINTING BACKHAND INDEX..OPEN HANDS SIGN
      t == 128110 || // So       POLICE OFFICER
      128112 <= t && t <= 128120 || // So   [9] BRIDE WITH VEIL..PRINCESS
      t == 128124 || // So       BABY ANGEL
      128129 <= t && t <= 128131 || // So   [3] INFORMATION DESK PERSON..DANCER
      128133 <= t && t <= 128135 || // So   [3] NAIL POLISH..HAIRCUT
      t == 128170 || // So       FLEXED BICEPS
      128372 <= t && t <= 128373 || // So   [2] MAN IN BUSINESS SUIT LEVITATING..SLEUTH OR SPY
      t == 128378 || // So       MAN DANCING
      t == 128400 || // So       RAISED HAND WITH FINGERS SPLAYED
      128405 <= t && t <= 128406 || // So   [2] REVERSED HAND WITH MIDDLE FINGER EXTENDED..RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS
      128581 <= t && t <= 128583 || // So   [3] FACE WITH NO GOOD GESTURE..PERSON BOWING DEEPLY
      128587 <= t && t <= 128591 || // So   [5] HAPPY PERSON RAISING ONE HAND..PERSON WITH FOLDED HANDS
      t == 128675 || // So       ROWBOAT
      128692 <= t && t <= 128694 || // So   [3] BICYCLIST..PEDESTRIAN
      t == 128704 || // So       BATH
      t == 128716 || // So       SLEEPING ACCOMMODATION
      129304 <= t && t <= 129308 || // So   [5] SIGN OF THE HORNS..RIGHT-FACING FIST
      129310 <= t && t <= 129311 || // So   [2] HAND WITH INDEX AND MIDDLE FINGERS CROSSED..I LOVE YOU HAND SIGN
      t == 129318 || // So       FACE PALM
      129328 <= t && t <= 129337 || // So  [10] PREGNANT WOMAN..JUGGLING
      129341 <= t && t <= 129342 || // So   [2] WATER POLO..HANDBALL
      129489 <= t && t <= 129501 ? v : 127995 <= t && t <= 127999 ? b : t == 8205 ? W : t == 9792 || // So       FEMALE SIGN
      t == 9794 || // So       MALE SIGN
      9877 <= t && t <= 9878 || // So   [2] STAFF OF AESCULAPIUS..SCALES
      t == 9992 || // So       AIRPLANE
      t == 10084 || // So       HEAVY BLACK HEART
      t == 127752 || // So       RAINBOW
      t == 127806 || // So       EAR OF RICE
      t == 127859 || // So       COOKING
      t == 127891 || // So       GRADUATION CAP
      t == 127908 || // So       MICROPHONE
      t == 127912 || // So       ARTIST PALETTE
      t == 127979 || // So       SCHOOL
      t == 127981 || // So       FACTORY
      t == 128139 || // So       KISS MARK
      128187 <= t && t <= 128188 || // So   [2] PERSONAL COMPUTER..BRIEFCASE
      t == 128295 || // So       WRENCH
      t == 128300 || // So       MICROSCOPE
      t == 128488 || // So       LEFT SPEECH BUBBLE
      t == 128640 || // So       ROCKET
      t == 128658 ? J : 128102 <= t && t <= 128105 ? X : L;
    }
    return this;
  }
  r.exports && (r.exports = x);
})(Kt);
var yn = Kt.exports;
const wn = /* @__PURE__ */ En(yn);
class bn {
  constructor(x) {
    U(this, "graphemes", []);
    U(this, "g2c", /* @__PURE__ */ new Map());
    U(this, "c2g", /* @__PURE__ */ new Map());
    U(this, "idx2len", /* @__PURE__ */ new Map());
    this.text = x, this.setGraphemeMapping(), this.setCodePointMapping(), this.setWordBoundary();
  }
  setCodePointMapping() {
    for (const [x, n] of this.g2c)
      this.c2g.set(n, x);
  }
  setGraphemeMapping() {
    const x = new wn();
    this.graphemes = x.splitGraphemes(this.text);
    let n = 0;
    for (let i = 0; i < this.graphemeLength; i++)
      this.g2c.set(i, n), n += this.graphemeAt(i).length;
    this.g2c.set(this.graphemeLength, n);
  }
  setWordBoundary() {
    let x = 0;
    const n = this.text.split(/\s/);
    for (let i = 0; i < n.length; i++)
      if (n[i] === "") {
        x++;
        continue;
      } else
        this.idx2len.set(x, n[i].length), x += n[i].length + 1;
  }
  /**
   * Returns the word of the specified index.
   *   If there is no word at the index, returns undefined.
   * @param {number} index  - An integer between 0 and this.codePointLength.
   * @returns {(string | undefined)} - a word or undefined.
   */
  getWord(x) {
    const n = this.idx2len.get(x);
    return n ? this.text.substr(x, n) : void 0;
  }
  /**
   * Converts the given codePointOffset to the graphemeOffset.
   *   If there is no corresponding offset, returns undefined.
   * @param {number} codePointOffset - An integer between 0 and this.codePointLength.
   * @returns {(number | undefined)} - A graphemeOffset or undefined.
   */
  toGraphemeOffset(x) {
    return this.c2g.get(x);
  }
  /**
   * Converts the given graphemeOffset to the codePointOffset.
   * @param {number} graphemeOffset - An integer between 0 and this.graphemeLength.
   * @returns {(number | undefined)} - A codePointOffset or undefined.
   */
  toCodePointOffset(x) {
    return this.g2c.get(x);
  }
  /**
   * The index of the graphemes to be returned.
   *   If index is out of range, this returns empty string;
   * @param {number} index - An integer between 0 and this.graphemeLength.
   * @returns {string} - A grapheme.
   */
  graphemeAt(x) {
    return 0 <= x && x < this.graphemeLength ? this.graphemes[x] : "";
  }
  /**
   * Returns a new string consisting of the single UTF-16 code unit.
   *   If index is out of range, this returns empty string.
   * @param {number} index - An integer between 0 and this.codePointLength.
   * @returns {string} - A character.
   */
  charAt(x) {
    return this.text.charAt(x);
  }
  /**
   * Return text length by grapheme clusters.
   * @returns {number} - text length.
   */
  get graphemeLength() {
    return this.graphemes.length;
  }
  /**
   * Return text length by CodePoints.
   * @returns {number} - text length.
   */
  get codePointLength() {
    return this.text.length;
  }
  /**
   * Return substring of the text.
   * @param {number} from - The Unicode CodePoint offset.
   * @param {number} length - The length. The unit is per CodePoint.
   * @returns {string} - text.
   */
  substr(x, n) {
    return this.text.substr(x, n);
  }
}
class Jt {
  constructor(x, n, i, l, e) {
    U(this, "text");
    if (this.id = x, this.label = n, this.startOffset = i, this.endOffset = l, this.text = e, i > l)
      throw new RangeError(
        `The startOffset(${i}) must be smaller than endOffset(${l}).`
      );
  }
  /**
   * Return true if the entity and start/end offset has some overlapping.
   * @param {number} startOffset - start offset of something(maybe entity or relation)
   * @param {number} endOffset - end offset of something(maybe entity or relation)
   * @returns {boolean} - true if there is an overlapping, otherwise false.
   */
  isIn(x, n) {
    return x <= this.startOffset && this.startOffset < n || x < this.endOffset && this.endOffset <= n || this.startOffset < x && n < this.endOffset;
  }
  /**
   * Return true if the provided entity equals to the entity.
   * @param {Entity} other - the provided entity.
   * @returns {boolean}
   */
  equalTo(x) {
    return this.id === x.id;
  }
  /**
   * Return true if the entity is located after the given offset.
   * @param {number} offset - The offset.
   * @returns {boolean} - true if offset <= this.startOffset.
   */
  startsAfter(x) {
    return x <= this.startOffset;
  }
  /**
   * Return the center offset of the entity.
   * This is used to calculate the width of the relation.
   */
  get center() {
    return this.startOffset + (this.endOffset - this.startOffset) / 2;
  }
  /**
   * Get the text content. Returns stored text if available, otherwise extracts from source text.
   * @param {string} sourceText - The source text to extract from (optional if text is stored).
   * @returns {string} - The text content.
   */
  getText(x) {
    if (this.text)
      return this.text;
    if (!x)
      throw new Error("Source text is required when entity text is not stored");
    return x.substring(this.startOffset, this.endOffset);
  }
}
class pt {
  constructor(x) {
    U(this, "tree", new ht());
    U(this, "id2entity", /* @__PURE__ */ new Map());
    for (const n of x)
      this.tree.insert([n.startOffset, n.endOffset], n), this.id2entity.set(n.id, n);
  }
  static valueOf(x, n) {
    return new pt(
      x.map(
        (i) => new Jt(
          i.id,
          i.label,
          n ? n.toCodePointOffset(i.startOffset) : i.startOffset,
          n ? n.toCodePointOffset(i.endOffset) : i.endOffset
        )
      )
    );
  }
  /**
   * Returns the number of entities.
   * @returns {number} - The number of entities.
   */
  get size() {
    return this.tree.size;
  }
  /**
   * Returns the entity that matches the provided id.
   *   If no match is found, undefined is returned.
   * @param {number | string} id - the entity id.
   * @returns {(Entity | undefined)} - Entity if match is found, otherwise undefined.
   */
  findById(x) {
    return this.id2entity.get(x);
  }
  /**
   * Filter entities by the provided start/end offsets.
   * @param {number} startOffset - the start offset.
   * @param {number} endOffset - the end offset.
   * @returns {RelationListItem[]} - An array with the filtered entities.
   */
  filterByRange(x, n) {
    return this.tree.search([x, n]).filter((i) => i.isIn(x, n));
  }
  /**
   * Returns true if intersection between given offsets and entities found.
   * @param {number} startOffset - the start offset.
   * @param {number} endOffset - the end offset.
   * @returns {boolean} - true if intersection found, otherwise false.
   */
  intersectAny(x, n) {
    return this.filterByRange(x, n).length > 0;
  }
}
function Pt(r, x) {
  let n = 0;
  x.textContent = r;
  for (let i = 0; i < r.length; i++)
    n += x.getExtentOfChar(i).width;
  return x.textContent = "", n;
}
function jt(r) {
  return r === `
`;
}
function Vt(r) {
  return r === "\r";
}
function _n(r) {
  return r === `\r
`;
}
class On {
  constructor(x, n) {
    this.widthManager = x, this.font = n;
  }
  split(x) {
    this.widthManager.reset();
    let n = 0, i = n;
    const l = [];
    for (let e = 0; e < x.graphemeLength; e++) {
      const a = x.graphemeAt(e);
      this.needsNewline(i, x, a) ? (l.push(new Nt(n, i)), this.widthManager.reset(), _n(x.substr(i, 2)) ? n = i + 2 : jt(a) || Vt(a) ? n = i + 1 : (n = i, this.widthManager.add(this.font.widthOf(a, a.length > 1)))) : this.widthManager.add(this.font.widthOf(a, a.length > 1)), i += a.length;
    }
    return this.widthManager.isEmpty() || l.push(new Nt(n, x.codePointLength)), l;
  }
  needsNewline(x, n, i) {
    const l = n.charAt(x);
    if (jt(l) || Vt(l) || !this.widthManager.canAdd(this.font.widthOf(i, i.length > 1)))
      return !0;
    const e = this.calculateWordLength(x, n);
    return !!(e <= this.widthManager.maxWidth && this.widthManager.isFull(e));
  }
  calculateWordLength(x, n) {
    const i = n.getWord(x);
    if (i) {
      let l = 0;
      for (let e = x; e < x + i.length; e++) {
        const a = n.graphemeAt(e);
        l += a ? this.font.widthOf(a, a.length > 1) : 0;
      }
      return l;
    } else
      return 0;
  }
}
class Ln {
  constructor(x, n) {
    U(this, "totalWidth", 0);
    this.maxLineWidth = x, this.maxLabelWidth = n;
  }
  get width() {
    return this.totalWidth;
  }
  get maxWidth() {
    return this.maxLineWidth - this.maxLabelWidth;
  }
  add(x) {
    this.totalWidth += x;
  }
  reset() {
    this.totalWidth = 0;
  }
  isFull(x = 0) {
    return this.maxWidth < this.totalWidth + x;
  }
  canAdd(x) {
    return this.totalWidth + x <= this.maxWidth;
  }
  isEmpty() {
    return this.totalWidth === 0;
  }
}
class kn {
  constructor(x, n) {
    this.allowOverlapping = x, this.graphemeMode = n;
  }
  /**
   * Returns the offsets of the selected text.
   * @param {Entities} entities - To decide whether or not the offsets overlap the entities.
   * @param {Text} text - To convert the code point offsets to the grapheme offsets.
   * @returns {[number, number]} - The offsets of the selected text.
   */
  getOffsets(x, n) {
    const [i, l] = this.getRange();
    if (console.log("Range received:", i, l), this.validate(i, l, x))
      return this.convert(i, l, n);
    throw new RangeError(`[${i}, ${l}] is invalid.`);
  }
  getRange() {
    var f, C;
    const x = window.getSelection();
    if (!x || x.rangeCount === 0)
      return [0, 0];
    const n = (f = x.anchorNode) == null ? void 0 : f.parentNode, i = (C = x.focusNode) == null ? void 0 : C.parentNode;
    if (!n || !i)
      return [0, 0];
    const l = n.annotatorElement, e = i.annotatorElement;
    if (!l || !e)
      return [0, 0];
    const a = l.startOffset + x.anchorOffset, s = e.startOffset + x.focusOffset;
    return x.removeAllRanges(), a > s ? [s, a] : [a, s];
  }
  validate(x, n, i) {
    return x >= n ? !1 : this.allowOverlapping ? !0 : !i.intersectAny(x, n);
  }
  convert(x, n, i) {
    return this.graphemeMode ? [
      i.toGraphemeOffset(x),
      i.toGraphemeOffset(n)
    ] : [x, n];
  }
}
function Sn() {
  const r = I(!1), x = I(!1), n = I(!1);
  return {
    dialog4Adding: r,
    dialog4Updating: x,
    dialog4Deleting: n,
    openAddingDialog: () => {
      r.value = !0;
    },
    closeAddingDialog: () => {
      r.value = !1;
    },
    openUpdatingDialog: () => {
      x.value = !0;
    },
    closeUpdatingDialog: () => {
      x.value = !1;
    },
    openDeletingDialog: () => {
      n.value = !0;
    },
    closeDeletingDialog: () => {
      n.value = !1;
    },
    closeAllDialogs: () => {
      r.value = !1, x.value = !1, n.value = !1;
    }
  };
}
function $n(r, x) {
  const n = Sn(), i = I({
    id: 0,
    startOffset: 0,
    endOffset: 0,
    label: 1,
    user: 1,
    text: ""
  });
  return {
    entities: k(
      () => r.value.map(
        (u) => new Jt(
          u.id,
          u.label,
          u.startOffset,
          u.endOffset,
          u.text
        )
      )
    ),
    candidateEntity: i,
    addEntityWithDialog: (u, v, b, W) => {
      console.log("addEntity", v, b, W), i.value = {
        id: qt(),
        startOffset: v,
        endOffset: b,
        label: 1,
        text: W.substring(v, b)
      }, n.openAddingDialog();
    },
    updateEntityWithDialog: (u, v) => {
      console.log("updateEntity", v);
      const b = r.value.find((W) => W.id == v);
      b && (i.value = {
        id: b.id,
        startOffset: b.startOffset,
        endOffset: b.endOffset,
        label: b.label,
        user: b.user,
        text: b.text
      }), n.openUpdatingDialog();
    },
    deleteEntityWithDialog: (u) => {
      console.log("deleteEntity");
      const v = r.value.find((b) => b.id == u.id);
      v && (i.value = {
        id: v.id,
        startOffset: v.startOffset,
        endOffset: v.endOffset,
        label: v.label,
        user: v.user,
        text: v.text
      }), n.openDeletingDialog();
    },
    updateEntityAddPrefix: () => {
      console.log("updateEntityAddPrefix"), i.value.startOffset !== void 0 && i.value.endOffset !== void 0 && (i.value.startOffset -= 1, i.value.text = x.value.substring(
        i.value.startOffset,
        i.value.endOffset
      ));
    },
    updateEntitySubtractPrefix: () => {
      console.log("updateEntitySubtractPrefix"), i.value.startOffset !== void 0 && i.value.endOffset !== void 0 && (i.value.startOffset += 1, i.value.text = x.value.substring(
        i.value.startOffset,
        i.value.endOffset
      ));
    },
    updateEntityAddSuffix: () => {
      console.log("updateEntityAddSuffix"), i.value.startOffset !== void 0 && i.value.endOffset !== void 0 && (i.value.endOffset += 1, i.value.text = x.value.substring(
        i.value.startOffset,
        i.value.endOffset
      ));
    },
    updateEntitySubtractSuffix: () => {
      console.log("updateEntitySubtractSuffix"), i.value.startOffset !== void 0 && i.value.endOffset !== void 0 && (i.value.endOffset -= 1, i.value.text = x.value.substring(
        i.value.startOffset,
        i.value.endOffset
      ));
    },
    confirmAction: (u) => {
      switch (console.log(`confirm${u}Entity`), u) {
        case "add":
          if (i.value.startOffset !== void 0 && i.value.endOffset !== void 0 && i.value.label !== void 0) {
            const v = {
              id: i.value.id,
              label: i.value.label,
              startOffset: i.value.startOffset,
              endOffset: i.value.endOffset,
              user: i.value.user || 1,
              text: i.value.text || ""
            };
            r.value.push(v);
          }
          n.closeAddingDialog();
          break;
        case "update":
          if (i.value.id !== void 0 && i.value.startOffset !== void 0 && i.value.endOffset !== void 0 && i.value.label !== void 0) {
            const v = r.value.findIndex(
              (b) => b.id == i.value.id
            );
            if (v !== -1) {
              const b = {
                id: i.value.id,
                label: i.value.label,
                startOffset: i.value.startOffset,
                endOffset: i.value.endOffset,
                user: i.value.user || 1,
                text: i.value.text || ""
              };
              r.value.splice(v, 1, b);
            }
          }
          n.closeUpdatingDialog();
          break;
        case "delete":
          console.log("Before delete - entitiesData:", r.value.length, "items"), console.log("Deleting entity with id:", i.value.id), r.value = r.value.filter(
            (v) => v.id !== i.value.id
          ), console.log("After delete - entitiesData:", r.value.length, "items"), n.closeDeletingDialog(), console.log("deleted");
          break;
      }
      i.value = {};
    },
    cancelAction: () => {
      console.log("cancelAction"), i.value = {}, n.closeAllDialogs();
    },
    ...n
  };
}
const Wn = ["id"], Mn = {
  key: 0,
  class: "v-annotator-font-status",
  style: { "margin-bottom": "8px", "font-size": "12px", opacity: "0.8" }
}, Rn = {
  key: 0,
  class: "v-annotator-loading-indicator"
}, Tn = {
  key: 1,
  class: "v-annotator-font-error"
}, In = { class: "v-annotator-font-error-message" }, Nn = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  style: { position: "absolute", opacity: "0", "pointer-events": "none" }
}, Pn = ["id"], jn = /* @__PURE__ */ vt({
  __name: "VAnnotator",
  props: {
    record: { default: void 0 },
    maxLabelLength: { default: () => 10 },
    text: { default: "" },
    entitiesData: { default: () => [] },
    entityLabels: { default: () => [] },
    relations: { default: () => [] },
    relationLabels: { default: () => [] },
    allowOverlapping: { type: Boolean, default: !1 },
    rtl: { type: Boolean, default: !1 },
    graphemeMode: { type: Boolean, default: !1 },
    dark: { type: Boolean, default: !1 },
    selectedEntities: { default: () => [] },
    editFlag: { type: Boolean, default: !1 },
    rightOffeset: { default: 50 }
  },
  emits: [
    "click:entity",
    "click:relation",
    "contextmenu:entity",
    "contextmenu:relation",
    "add:entity",
    "rendered",
    "update:entitiesData"
  ],
  setup(r, { expose: x, emit: n }) {
    const i = r;
    x({
      updateFlag: (D) => {
        console.log("Flag updated to:", D), console.log(
          `%c*** newFlag *** ${D}`,
          "background-color:#de6; padding:6px; border-radius:4px;"
        );
      }
    });
    const e = n, a = qt(), s = I(null), f = I(!1), C = I(null), B = I({}), h = I(-1), A = I(0), L = I(0), u = I(0), v = I(null), b = I(null), W = I(null), J = () => {
      if (!(!W.value || !i.text)) {
        f.value = !0, C.value = null;
        try {
          s.value = lt.createSync(i.text, W.value), console.log("✅ SVG font loaded:", {
            fontFamily: s.value.fontFamily,
            fontSize: s.value.fontSize,
            characterCount: s.value.width.size
          });
        } catch (D) {
          const O = D instanceof Error ? D.message : "Unknown font loading error";
          console.error("❌ Font loading failed:", D), C.value = `Font loading failed: ${O}`;
        } finally {
          f.value = !1;
        }
      }
    }, X = I([...i.entitiesData]), F = I(i.text), T = I(!1), {
      entities: E,
      candidateEntity: N,
      addEntityWithDialog: o,
      updateEntityWithDialog: it,
      deleteEntityWithDialog: Dt,
      updateEntityAddPrefix: Et,
      updateEntitySubtractPrefix: gt,
      updateEntityAddSuffix: t,
      updateEntitySubtractSuffix: p,
      confirmAction: $,
      cancelAction: w,
      dialog4Adding: _,
      dialog4Updating: M,
      dialog4Deleting: et
    } = $n(X, F);
    tt(
      () => i.entitiesData,
      (D) => {
        T.value = !0, X.value = [...D], nt(() => {
          T.value = !1;
        });
      },
      { deep: !0, immediate: !0 }
    ), tt(
      () => i.text,
      (D) => {
        F.value = D;
      }
    ), tt(
      X,
      (D) => {
        T.value || e("update:entitiesData", [...D]);
      },
      { deep: !0 }
    ), zt(() => {
      const D = document.getElementById(`text-${a}`);
      W.value = D, window.addEventListener("resize", St), St(), console.log("Received text in VAnnotator:", i.text), console.log("Virtual scroll items:", at.value);
    }), tt(
      () => i.text,
      () => {
        B.value = {}, nt(() => {
          console.log("watch text nextTick ----------"), W.value && J(), console.log("Font x:", s.value, "*****************");
        });
      },
      { immediate: !0 }
    );
    const at = k(() => !yt.value || yt.value.length === 0 ? [] : yt.value.map((D, O) => {
      const q = `${D.startOffset}:${D.endOffset}`, H = B.value[q] || 64;
      return {
        id: q,
        textLine: D,
        size: H
      };
    })), d = k(() => {
      $t(), console.log(
        "Computing entityList...",
        E.value,
        "entitiesDataRef:",
        X.value
      );
      const D = Array.isArray(E.value) ? E.value : [];
      return console.log("Entity array to process:", D), i.graphemeMode ? pt.valueOf(D, rt.value) : pt.valueOf(D);
    }), K = k(() => ($t(), new c0(i.relations, d.value))), yt = k(() => {
      if (console.log("Computing textLines..."), console.log("Font:", s.value), !s.value)
        return f.value ? (console.log("Font is loading, waiting..."), []) : (console.warn("Font is null, attempting to initialize."), nt(() => {
          W.value && (J(), console.log("Font initialized:", s.value));
        }), []);
      if (console.log("Entity Label List:", st.value), console.log("Max Width:", h.value), !s.value || !st.value || h.value === -1)
        return console.log("One or more dependencies are not ready:", {
          font: s.value,
          entityLabelList: st.value,
          maxWidth: h.value
        }), [];
      {
        const D = st.value.maxLabelWidth, O = new Ln(
          h.value + i.rightOffeset,
          D
        );
        return new On(O, s.value).split(rt.value);
      }
    }), rt = k(() => new bn(i.text)), st = k(() => {
      if (W.value) {
        const D = i.entityLabels.map(
          (O) => Pt(O.text, W.value)
        );
        return Ft.valueOf(
          i.maxLabelLength,
          i.entityLabels,
          D,
          en
        );
      }
      return null;
    }), Qt = k(() => {
      if (W.value) {
        const D = i.relationLabels.map(
          (O) => Pt(O.text, W.value)
        );
        return Ft.valueOf(
          i.maxLabelLength,
          i.relationLabels,
          D,
          an
        );
      }
      return null;
    }), ot = k(() => b.value ? i.selectedEntities.concat(b.value) : i.selectedEntities);
    function St() {
      nt(
        W0(() => {
          console.log(`Setting max width for container-${a}: ${h.value}`);
          const D = document.getElementById(`container-${a}`);
          if (D) {
            const O = D.clientWidth, q = D.getBoundingClientRect();
            console.log(
              `Container found: clientWidth = ${O}, rect =`,
              q
            ), h.value = O, L.value = q.left, u.value = q.right - q.left, A.value = i.rtl ? u.value : 0;
          } else
            console.log(`Container element for container-${a} not found`);
        }, 500)
      );
    }
    function dt(D, O) {
      it(D, O.id), e("click:entity", D, O.id, i.record);
    }
    function ct(D, O) {
      e("click:relation", D, O);
    }
    function t0(D) {
      Dt(D), e("contextmenu:entity", D, i.record);
    }
    function n0(D, O) {
      B.value[D] = O;
    }
    function $t() {
      v.value = null, b.value = null;
    }
    function Wt(D) {
      try {
        console.log("entityList:", d.value);
        const O = new kn(
          i.allowOverlapping,
          i.graphemeMode
        ), [q, H] = O.getOffsets(
          d.value,
          rt.value
        );
        console.log(
          "Calling addEntityWithDialog:",
          q,
          H,
          rt.value.text,
          i.record
        ), o(D, q, H, rt.value.text), e(
          "add:entity",
          D,
          q,
          H,
          rt.value.text,
          i.record
        );
      } catch (O) {
        console.log("Error while selecting text:", O);
        return;
      }
    }
    return (D, O) => {
      const q = Y("v-virtual-scroll");
      return R(), G("div", {
        id: `container-${j(a)}`,
        onClick: Wt,
        onTouchend: Wt
      }, [
        f.value || C.value ? (R(), G("div", Mn, [
          f.value ? (R(), G("div", Rn, " ⏳ Loading fonts for SVG text... ")) : Ct("", !0),
          C.value ? (R(), G("div", Tn, [
            y("div", In, " ⚠️ Font loading error: " + Q(C.value), 1)
          ])) : Ct("", !0)
        ])) : Ct("", !0),
        O[4] || (O[4] = y("svg", {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          width: "0",
          height: "0"
        }, [
          y("defs", null, [
            y("marker", {
              id: "v-annotator-arrow",
              viewBox: "0 0 10 10",
              refX: "5",
              refY: "5",
              markerWidth: "6",
              markerHeight: "6",
              orient: "auto-start-reverse"
            }, [
              y("path", {
                d: "M 0 0 L 10 5 L 0 10 z",
                stroke: "#74b8dc",
                fill: "#74b8dc"
              })
            ])
          ])
        ], -1)),
        g(q, {
          items: at.value,
          "item-height": "64"
        }, {
          default: m(({ item: H, index: x0 }) => [
            (R(), xt(Bn, {
              key: `${x0}:${D.rtl}`,
              "annotator-uuid": j(a),
              dark: D.dark,
              entities: d.value.filterByRange(
                H.textLine.startOffset,
                H.textLine.endOffset
              ),
              entityLabels: st.value,
              relations: K.value.filterByRange(
                H.textLine.startOffset,
                H.textLine.endOffset
              ),
              maxLabelLength: D.maxLabelLength,
              relationLabels: Qt.value,
              font: s.value,
              rtl: D.rtl,
              "selected-entities": ot.value,
              "selected-relation": v.value,
              text: D.text,
              textLine: H.textLine,
              "base-x": A.value,
              left: L.value,
              right: u.value,
              "onClick:entity": dt,
              "onClick:relation": ct,
              "onContextmenu:entity": t0,
              "onContextmenu:relation": O[0] || (O[0] = (ut) => D.$emit("contextmenu:relation", ut)),
              "onUpdate:height": n0,
              onSetSelectedEntity: O[1] || (O[1] = (ut) => b.value = ut),
              onSetSelectedRelation: O[2] || (O[2] = (ut) => v.value = ut)
            }, null, 8, ["annotator-uuid", "dark", "entities", "entityLabels", "relations", "maxLabelLength", "relationLabels", "font", "rtl", "selected-entities", "selected-relation", "text", "textLine", "base-x", "left", "right"]))
          ]),
          _: 1
        }, 8, ["items"]),
        (R(), G("svg", Nn, [
          y("text", {
            id: `text-${j(a)}`,
            style: { "white-space": "pre" }
          }, null, 8, Pn)
        ])),
        j(N) && (j(_) || j(M) || j(et)) ? (R(), xt(Zt, {
          key: 1,
          "candidate-entity": j(N),
          "entity-labels": D.entityLabels,
          "dialog4-adding": j(_),
          "dialog4-updating": j(M),
          "dialog4-deleting": j(et),
          onCancel: j(w),
          onConfirm: j($),
          onUpdateEntityAddPrefix: j(Et),
          onUpdateEntitySubtractPrefix: j(gt),
          onUpdateEntityAddSuffix: j(t),
          onUpdateEntitySubtractSuffix: j(p),
          onUpdateCandidateEntityLabel: O[3] || (O[3] = (H) => j(N).label = H)
        }, null, 8, ["candidate-entity", "entity-labels", "dialog4-adding", "dialog4-updating", "dialog4-deleting", "onCancel", "onConfirm", "onUpdateEntityAddPrefix", "onUpdateEntitySubtractPrefix", "onUpdateEntityAddSuffix", "onUpdateEntitySubtractSuffix"])) : Ct("", !0)
      ], 40, Wn);
    };
  }
}), Zn = {
  install(r, x) {
    r.component("VAnnotator", jn), r.component("EntityDialogs", Zt), x && r.provide("vAnnotatorOptions", x);
  }
};
export {
  Zt as EntityDialogs,
  jn as VAnnotator,
  Zn as VAnnotatorV3,
  Hn as addFontDisplay,
  Xn as createSVGFontTestElement,
  Zn as default,
  tn as getFallbackCharWidth,
  rn as getSVGFontInfo,
  Gn as isFontLoaded,
  ln as isSVGFontReady,
  nn as measureTextWithFallback,
  qn as preloadFont,
  Yn as removeSVGFontTestElement,
  Xt as waitForFonts,
  xn as waitForSVGFonts,
  Un as waitForSpecificFonts
};
