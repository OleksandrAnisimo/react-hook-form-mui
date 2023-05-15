import {R as Cr, r as ue, c as fu, g as Gu} from './index-ebeaab24.js'
import {r as cr} from './index-9c09ad76.js'
var Ru = {},
  ee = cr
;(Ru.createRoot = ee.createRoot), (Ru.hydrateRoot = ee.hydrateRoot)
var hu = new Map(),
  lr = ({callback: u, children: e}) => {
    let r = ue.useRef()
    return (
      ue.useLayoutEffect(() => {
        r.current !== u && ((r.current = u), u())
      }, [u]),
      e
    )
  },
  po = async (u, e) => {
    let r = await Er(e)
    return new Promise((t) => {
      r.render(Cr.createElement(lr, {callback: () => t(null)}, u))
    })
  },
  fo = (u, e) => {
    let r = hu.get(u)
    r && (r.unmount(), hu.delete(u))
  },
  Er = async (u) => {
    let e = hu.get(u)
    return e || ((e = Ru.createRoot(u)), hu.set(u, e)), e
  },
  pr = typeof fu == 'object' && fu && fu.Object === Object && fu,
  Oe = pr,
  fr = Oe,
  Br = typeof self == 'object' && self && self.Object === Object && self,
  hr = fr || Br || Function('return this')(),
  H = hr,
  yr = H,
  dr = yr.Symbol,
  mu = dr,
  re = mu,
  Ne = Object.prototype,
  vr = Ne.hasOwnProperty,
  gr = Ne.toString,
  su = re ? re.toStringTag : void 0
function mr(u) {
  var e = vr.call(u, su),
    r = u[su]
  try {
    u[su] = void 0
    var t = !0
  } catch {}
  var a = gr.call(u)
  return t && (e ? (u[su] = r) : delete u[su]), a
}
var _r = mr,
  xr = Object.prototype,
  Tr = xr.toString
function br(u) {
  return Tr.call(u)
}
var Sr = br,
  te = mu,
  $r = _r,
  wr = Sr,
  Or = '[object Null]',
  Nr = '[object Undefined]',
  ae = te ? te.toStringTag : void 0
function Pr(u) {
  return u == null
    ? u === void 0
      ? Nr
      : Or
    : ae && ae in Object(u)
    ? $r(u)
    : wr(u)
}
var Cu = Pr
function Ir(u) {
  var e = typeof u
  return u != null && (e == 'object' || e == 'function')
}
var Ku = Ir,
  Rr = Cu,
  Lr = Ku,
  Mr = '[object AsyncFunction]',
  kr = '[object Function]',
  Ur = '[object GeneratorFunction]',
  jr = '[object Proxy]'
function Gr(u) {
  if (!Lr(u)) return !1
  var e = Rr(u)
  return e == kr || e == Ur || e == Mr || e == jr
}
var Hu = Gr
const Bo = Gu(Hu)
var Kr = H,
  Hr = Kr['__core-js_shared__'],
  Wr = Hr,
  Nu = Wr,
  ne = (function () {
    var u = /[^.]+$/.exec((Nu && Nu.keys && Nu.keys.IE_PROTO) || '')
    return u ? 'Symbol(src)_1.' + u : ''
  })()
function qr(u) {
  return !!ne && ne in u
}
var zr = qr,
  Vr = Function.prototype,
  Jr = Vr.toString
function Qr(u) {
  if (u != null) {
    try {
      return Jr.call(u)
    } catch {}
    try {
      return u + ''
    } catch {}
  }
  return ''
}
var Pe = Qr,
  Xr = Hu,
  Yr = zr,
  Zr = Ku,
  ut = Pe,
  et = /[\\^$.*+?()[\]{}|]/g,
  rt = /^\[object .+?Constructor\]$/,
  tt = Function.prototype,
  at = Object.prototype,
  nt = tt.toString,
  it = at.hasOwnProperty,
  st = RegExp(
    '^' +
      nt
        .call(it)
        .replace(et, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  )
function Dt(u) {
  if (!Zr(u) || Yr(u)) return !1
  var e = Xr(u) ? st : rt
  return e.test(ut(u))
}
var At = Dt
function ot(u, e) {
  return u == null ? void 0 : u[e]
}
var Ft = ot,
  Ct = At,
  ct = Ft
function lt(u, e) {
  var r = ct(u, e)
  return Ct(r) ? r : void 0
}
var X = lt,
  Et = X,
  pt = (function () {
    try {
      var u = Et(Object, 'defineProperty')
      return u({}, '', {}), u
    } catch {}
  })(),
  ft = pt,
  ie = ft
function Bt(u, e, r) {
  e == '__proto__' && ie
    ? ie(u, e, {configurable: !0, enumerable: !0, value: r, writable: !0})
    : (u[e] = r)
}
var ht = Bt
function yt(u) {
  return function (e, r, t) {
    for (var a = -1, s = Object(e), n = t(e), c = n.length; c--; ) {
      var p = n[u ? c : ++a]
      if (r(s[p], p, s) === !1) break
    }
    return e
  }
}
var dt = yt,
  vt = dt,
  gt = vt(),
  mt = gt
function _t(u, e) {
  for (var r = -1, t = Array(u); ++r < u; ) t[r] = e(r)
  return t
}
var xt = _t
function Tt(u) {
  return u != null && typeof u == 'object'
}
var cu = Tt,
  bt = Cu,
  St = cu,
  $t = '[object Arguments]'
function wt(u) {
  return St(u) && bt(u) == $t
}
var Ot = wt,
  se = Ot,
  Nt = cu,
  Ie = Object.prototype,
  Pt = Ie.hasOwnProperty,
  It = Ie.propertyIsEnumerable,
  Rt = se(
    (function () {
      return arguments
    })()
  )
    ? se
    : function (u) {
        return Nt(u) && Pt.call(u, 'callee') && !It.call(u, 'callee')
      },
  Re = Rt,
  Lt = Array.isArray,
  q = Lt,
  yu = {exports: {}}
function Mt() {
  return !1
}
var kt = Mt
yu.exports
;(function (u, e) {
  var r = H,
    t = kt,
    a = e && !e.nodeType && e,
    s = a && !0 && u && !u.nodeType && u,
    n = s && s.exports === a,
    c = n ? r.Buffer : void 0,
    p = c ? c.isBuffer : void 0,
    E = p || t
  u.exports = E
})(yu, yu.exports)
var Le = yu.exports,
  Ut = 9007199254740991,
  jt = /^(?:0|[1-9]\d*)$/
function Gt(u, e) {
  var r = typeof u
  return (
    (e = e ?? Ut),
    !!e &&
      (r == 'number' || (r != 'symbol' && jt.test(u))) &&
      u > -1 &&
      u % 1 == 0 &&
      u < e
  )
}
var Me = Gt,
  Kt = 9007199254740991
function Ht(u) {
  return typeof u == 'number' && u > -1 && u % 1 == 0 && u <= Kt
}
var Wu = Ht,
  Wt = Cu,
  qt = Wu,
  zt = cu,
  Vt = '[object Arguments]',
  Jt = '[object Array]',
  Qt = '[object Boolean]',
  Xt = '[object Date]',
  Yt = '[object Error]',
  Zt = '[object Function]',
  u0 = '[object Map]',
  e0 = '[object Number]',
  r0 = '[object Object]',
  t0 = '[object RegExp]',
  a0 = '[object Set]',
  n0 = '[object String]',
  i0 = '[object WeakMap]',
  s0 = '[object ArrayBuffer]',
  D0 = '[object DataView]',
  A0 = '[object Float32Array]',
  o0 = '[object Float64Array]',
  F0 = '[object Int8Array]',
  C0 = '[object Int16Array]',
  c0 = '[object Int32Array]',
  l0 = '[object Uint8Array]',
  E0 = '[object Uint8ClampedArray]',
  p0 = '[object Uint16Array]',
  f0 = '[object Uint32Array]',
  S = {}
S[A0] = S[o0] = S[F0] = S[C0] = S[c0] = S[l0] = S[E0] = S[p0] = S[f0] = !0
S[Vt] =
  S[Jt] =
  S[s0] =
  S[Qt] =
  S[D0] =
  S[Xt] =
  S[Yt] =
  S[Zt] =
  S[u0] =
  S[e0] =
  S[r0] =
  S[t0] =
  S[a0] =
  S[n0] =
  S[i0] =
    !1
function B0(u) {
  return zt(u) && qt(u.length) && !!S[Wt(u)]
}
var h0 = B0
function y0(u) {
  return function (e) {
    return u(e)
  }
}
var d0 = y0,
  du = {exports: {}}
du.exports
;(function (u, e) {
  var r = Oe,
    t = e && !e.nodeType && e,
    a = t && !0 && u && !u.nodeType && u,
    s = a && a.exports === t,
    n = s && r.process,
    c = (function () {
      try {
        var p = a && a.require && a.require('util').types
        return p || (n && n.binding && n.binding('util'))
      } catch {}
    })()
  u.exports = c
})(du, du.exports)
var v0 = du.exports,
  g0 = h0,
  m0 = d0,
  De = v0,
  Ae = De && De.isTypedArray,
  _0 = Ae ? m0(Ae) : g0,
  ke = _0,
  x0 = xt,
  T0 = Re,
  b0 = q,
  S0 = Le,
  $0 = Me,
  w0 = ke,
  O0 = Object.prototype,
  N0 = O0.hasOwnProperty
function P0(u, e) {
  var r = b0(u),
    t = !r && T0(u),
    a = !r && !t && S0(u),
    s = !r && !t && !a && w0(u),
    n = r || t || a || s,
    c = n ? x0(u.length, String) : [],
    p = c.length
  for (var E in u)
    (e || N0.call(u, E)) &&
      !(
        n &&
        (E == 'length' ||
          (a && (E == 'offset' || E == 'parent')) ||
          (s && (E == 'buffer' || E == 'byteLength' || E == 'byteOffset')) ||
          $0(E, p))
      ) &&
      c.push(E)
  return c
}
var I0 = P0,
  R0 = Object.prototype
function L0(u) {
  var e = u && u.constructor,
    r = (typeof e == 'function' && e.prototype) || R0
  return u === r
}
var M0 = L0
function k0(u, e) {
  return function (r) {
    return u(e(r))
  }
}
var Ue = k0,
  U0 = Ue,
  j0 = U0(Object.keys, Object),
  G0 = j0,
  K0 = M0,
  H0 = G0,
  W0 = Object.prototype,
  q0 = W0.hasOwnProperty
function z0(u) {
  if (!K0(u)) return H0(u)
  var e = []
  for (var r in Object(u)) q0.call(u, r) && r != 'constructor' && e.push(r)
  return e
}
var V0 = z0,
  J0 = Hu,
  Q0 = Wu
function X0(u) {
  return u != null && Q0(u.length) && !J0(u)
}
var Y0 = X0,
  Z0 = I0,
  ua = V0,
  ea = Y0
function ra(u) {
  return ea(u) ? Z0(u) : ua(u)
}
var qu = ra,
  ta = mt,
  aa = qu
function na(u, e) {
  return u && ta(u, e, aa)
}
var ia = na
function sa() {
  ;(this.__data__ = []), (this.size = 0)
}
var Da = sa
function Aa(u, e) {
  return u === e || (u !== u && e !== e)
}
var je = Aa,
  oa = je
function Fa(u, e) {
  for (var r = u.length; r--; ) if (oa(u[r][0], e)) return r
  return -1
}
var _u = Fa,
  Ca = _u,
  ca = Array.prototype,
  la = ca.splice
function Ea(u) {
  var e = this.__data__,
    r = Ca(e, u)
  if (r < 0) return !1
  var t = e.length - 1
  return r == t ? e.pop() : la.call(e, r, 1), --this.size, !0
}
var pa = Ea,
  fa = _u
function Ba(u) {
  var e = this.__data__,
    r = fa(e, u)
  return r < 0 ? void 0 : e[r][1]
}
var ha = Ba,
  ya = _u
function da(u) {
  return ya(this.__data__, u) > -1
}
var va = da,
  ga = _u
function ma(u, e) {
  var r = this.__data__,
    t = ga(r, u)
  return t < 0 ? (++this.size, r.push([u, e])) : (r[t][1] = e), this
}
var _a = ma,
  xa = Da,
  Ta = pa,
  ba = ha,
  Sa = va,
  $a = _a
function uu(u) {
  var e = -1,
    r = u == null ? 0 : u.length
  for (this.clear(); ++e < r; ) {
    var t = u[e]
    this.set(t[0], t[1])
  }
}
uu.prototype.clear = xa
uu.prototype.delete = Ta
uu.prototype.get = ba
uu.prototype.has = Sa
uu.prototype.set = $a
var xu = uu,
  wa = xu
function Oa() {
  ;(this.__data__ = new wa()), (this.size = 0)
}
var Na = Oa
function Pa(u) {
  var e = this.__data__,
    r = e.delete(u)
  return (this.size = e.size), r
}
var Ia = Pa
function Ra(u) {
  return this.__data__.get(u)
}
var La = Ra
function Ma(u) {
  return this.__data__.has(u)
}
var ka = Ma,
  Ua = X,
  ja = H,
  Ga = Ua(ja, 'Map'),
  zu = Ga,
  Ka = X,
  Ha = Ka(Object, 'create'),
  Tu = Ha,
  oe = Tu
function Wa() {
  ;(this.__data__ = oe ? oe(null) : {}), (this.size = 0)
}
var qa = Wa
function za(u) {
  var e = this.has(u) && delete this.__data__[u]
  return (this.size -= e ? 1 : 0), e
}
var Va = za,
  Ja = Tu,
  Qa = '__lodash_hash_undefined__',
  Xa = Object.prototype,
  Ya = Xa.hasOwnProperty
function Za(u) {
  var e = this.__data__
  if (Ja) {
    var r = e[u]
    return r === Qa ? void 0 : r
  }
  return Ya.call(e, u) ? e[u] : void 0
}
var un = Za,
  en = Tu,
  rn = Object.prototype,
  tn = rn.hasOwnProperty
function an(u) {
  var e = this.__data__
  return en ? e[u] !== void 0 : tn.call(e, u)
}
var nn = an,
  sn = Tu,
  Dn = '__lodash_hash_undefined__'
function An(u, e) {
  var r = this.__data__
  return (
    (this.size += this.has(u) ? 0 : 1),
    (r[u] = sn && e === void 0 ? Dn : e),
    this
  )
}
var on = An,
  Fn = qa,
  Cn = Va,
  cn = un,
  ln = nn,
  En = on
function eu(u) {
  var e = -1,
    r = u == null ? 0 : u.length
  for (this.clear(); ++e < r; ) {
    var t = u[e]
    this.set(t[0], t[1])
  }
}
eu.prototype.clear = Fn
eu.prototype.delete = Cn
eu.prototype.get = cn
eu.prototype.has = ln
eu.prototype.set = En
var pn = eu,
  Fe = pn,
  fn = xu,
  Bn = zu
function hn() {
  ;(this.size = 0),
    (this.__data__ = {hash: new Fe(), map: new (Bn || fn)(), string: new Fe()})
}
var yn = hn
function dn(u) {
  var e = typeof u
  return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean'
    ? u !== '__proto__'
    : u === null
}
var vn = dn,
  gn = vn
function mn(u, e) {
  var r = u.__data__
  return gn(e) ? r[typeof e == 'string' ? 'string' : 'hash'] : r.map
}
var bu = mn,
  _n = bu
function xn(u) {
  var e = _n(this, u).delete(u)
  return (this.size -= e ? 1 : 0), e
}
var Tn = xn,
  bn = bu
function Sn(u) {
  return bn(this, u).get(u)
}
var $n = Sn,
  wn = bu
function On(u) {
  return wn(this, u).has(u)
}
var Nn = On,
  Pn = bu
function In(u, e) {
  var r = Pn(this, u),
    t = r.size
  return r.set(u, e), (this.size += r.size == t ? 0 : 1), this
}
var Rn = In,
  Ln = yn,
  Mn = Tn,
  kn = $n,
  Un = Nn,
  jn = Rn
function ru(u) {
  var e = -1,
    r = u == null ? 0 : u.length
  for (this.clear(); ++e < r; ) {
    var t = u[e]
    this.set(t[0], t[1])
  }
}
ru.prototype.clear = Ln
ru.prototype.delete = Mn
ru.prototype.get = kn
ru.prototype.has = Un
ru.prototype.set = jn
var Vu = ru,
  Gn = xu,
  Kn = zu,
  Hn = Vu,
  Wn = 200
function qn(u, e) {
  var r = this.__data__
  if (r instanceof Gn) {
    var t = r.__data__
    if (!Kn || t.length < Wn - 1)
      return t.push([u, e]), (this.size = ++r.size), this
    r = this.__data__ = new Hn(t)
  }
  return r.set(u, e), (this.size = r.size), this
}
var zn = qn,
  Vn = xu,
  Jn = Na,
  Qn = Ia,
  Xn = La,
  Yn = ka,
  Zn = zn
function tu(u) {
  var e = (this.__data__ = new Vn(u))
  this.size = e.size
}
tu.prototype.clear = Jn
tu.prototype.delete = Qn
tu.prototype.get = Xn
tu.prototype.has = Yn
tu.prototype.set = Zn
var Ge = tu,
  ui = '__lodash_hash_undefined__'
function ei(u) {
  return this.__data__.set(u, ui), this
}
var ri = ei
function ti(u) {
  return this.__data__.has(u)
}
var ai = ti,
  ni = Vu,
  ii = ri,
  si = ai
function vu(u) {
  var e = -1,
    r = u == null ? 0 : u.length
  for (this.__data__ = new ni(); ++e < r; ) this.add(u[e])
}
vu.prototype.add = vu.prototype.push = ii
vu.prototype.has = si
var Di = vu
function Ai(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length; ++r < t; )
    if (e(u[r], r, u)) return !0
  return !1
}
var oi = Ai
function Fi(u, e) {
  return u.has(e)
}
var Ci = Fi,
  ci = Di,
  li = oi,
  Ei = Ci,
  pi = 1,
  fi = 2
function Bi(u, e, r, t, a, s) {
  var n = r & pi,
    c = u.length,
    p = e.length
  if (c != p && !(n && p > c)) return !1
  var E = s.get(u),
    T = s.get(e)
  if (E && T) return E == e && T == u
  var x = -1,
    F = !0,
    m = r & fi ? new ci() : void 0
  for (s.set(u, e), s.set(e, u); ++x < c; ) {
    var d = u[x],
      l = e[x]
    if (t) var f = n ? t(l, d, x, e, u, s) : t(d, l, x, u, e, s)
    if (f !== void 0) {
      if (f) continue
      F = !1
      break
    }
    if (m) {
      if (
        !li(e, function (I, L) {
          if (!Ei(m, L) && (d === I || a(d, I, r, t, s))) return m.push(L)
        })
      ) {
        F = !1
        break
      }
    } else if (!(d === l || a(d, l, r, t, s))) {
      F = !1
      break
    }
  }
  return s.delete(u), s.delete(e), F
}
var Ke = Bi,
  hi = H,
  yi = hi.Uint8Array,
  di = yi
function vi(u) {
  var e = -1,
    r = Array(u.size)
  return (
    u.forEach(function (t, a) {
      r[++e] = [a, t]
    }),
    r
  )
}
var gi = vi
function mi(u) {
  var e = -1,
    r = Array(u.size)
  return (
    u.forEach(function (t) {
      r[++e] = t
    }),
    r
  )
}
var _i = mi,
  Ce = mu,
  ce = di,
  xi = je,
  Ti = Ke,
  bi = gi,
  Si = _i,
  $i = 1,
  wi = 2,
  Oi = '[object Boolean]',
  Ni = '[object Date]',
  Pi = '[object Error]',
  Ii = '[object Map]',
  Ri = '[object Number]',
  Li = '[object RegExp]',
  Mi = '[object Set]',
  ki = '[object String]',
  Ui = '[object Symbol]',
  ji = '[object ArrayBuffer]',
  Gi = '[object DataView]',
  le = Ce ? Ce.prototype : void 0,
  Pu = le ? le.valueOf : void 0
function Ki(u, e, r, t, a, s, n) {
  switch (r) {
    case Gi:
      if (u.byteLength != e.byteLength || u.byteOffset != e.byteOffset)
        return !1
      ;(u = u.buffer), (e = e.buffer)
    case ji:
      return !(u.byteLength != e.byteLength || !s(new ce(u), new ce(e)))
    case Oi:
    case Ni:
    case Ri:
      return xi(+u, +e)
    case Pi:
      return u.name == e.name && u.message == e.message
    case Li:
    case ki:
      return u == e + ''
    case Ii:
      var c = bi
    case Mi:
      var p = t & $i
      if ((c || (c = Si), u.size != e.size && !p)) return !1
      var E = n.get(u)
      if (E) return E == e
      ;(t |= wi), n.set(u, e)
      var T = Ti(c(u), c(e), t, a, s, n)
      return n.delete(u), T
    case Ui:
      if (Pu) return Pu.call(u) == Pu.call(e)
  }
  return !1
}
var Hi = Ki
function Wi(u, e) {
  for (var r = -1, t = e.length, a = u.length; ++r < t; ) u[a + r] = e[r]
  return u
}
var qi = Wi,
  zi = qi,
  Vi = q
function Ji(u, e, r) {
  var t = e(u)
  return Vi(u) ? t : zi(t, r(u))
}
var Qi = Ji
function Xi(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length, a = 0, s = []; ++r < t; ) {
    var n = u[r]
    e(n, r, u) && (s[a++] = n)
  }
  return s
}
var Yi = Xi
function Zi() {
  return []
}
var us = Zi,
  es = Yi,
  rs = us,
  ts = Object.prototype,
  as = ts.propertyIsEnumerable,
  Ee = Object.getOwnPropertySymbols,
  ns = Ee
    ? function (u) {
        return u == null
          ? []
          : ((u = Object(u)),
            es(Ee(u), function (e) {
              return as.call(u, e)
            }))
      }
    : rs,
  is = ns,
  ss = Qi,
  Ds = is,
  As = qu
function os(u) {
  return ss(u, As, Ds)
}
var Fs = os,
  pe = Fs,
  Cs = 1,
  cs = Object.prototype,
  ls = cs.hasOwnProperty
function Es(u, e, r, t, a, s) {
  var n = r & Cs,
    c = pe(u),
    p = c.length,
    E = pe(e),
    T = E.length
  if (p != T && !n) return !1
  for (var x = p; x--; ) {
    var F = c[x]
    if (!(n ? F in e : ls.call(e, F))) return !1
  }
  var m = s.get(u),
    d = s.get(e)
  if (m && d) return m == e && d == u
  var l = !0
  s.set(u, e), s.set(e, u)
  for (var f = n; ++x < p; ) {
    F = c[x]
    var I = u[F],
      L = e[F]
    if (t) var z = n ? t(L, I, F, e, u, s) : t(I, L, F, u, e, s)
    if (!(z === void 0 ? I === L || a(I, L, r, t, s) : z)) {
      l = !1
      break
    }
    f || (f = F == 'constructor')
  }
  if (l && !f) {
    var M = u.constructor,
      _ = e.constructor
    M != _ &&
      'constructor' in u &&
      'constructor' in e &&
      !(
        typeof M == 'function' &&
        M instanceof M &&
        typeof _ == 'function' &&
        _ instanceof _
      ) &&
      (l = !1)
  }
  return s.delete(u), s.delete(e), l
}
var ps = Es,
  fs = X,
  Bs = H,
  hs = fs(Bs, 'DataView'),
  ys = hs,
  ds = X,
  vs = H,
  gs = ds(vs, 'Promise'),
  ms = gs,
  _s = X,
  xs = H,
  Ts = _s(xs, 'Set'),
  bs = Ts,
  Ss = X,
  $s = H,
  ws = Ss($s, 'WeakMap'),
  Os = ws,
  Lu = ys,
  Mu = zu,
  ku = ms,
  Uu = bs,
  ju = Os,
  He = Cu,
  au = Pe,
  fe = '[object Map]',
  Ns = '[object Object]',
  Be = '[object Promise]',
  he = '[object Set]',
  ye = '[object WeakMap]',
  de = '[object DataView]',
  Ps = au(Lu),
  Is = au(Mu),
  Rs = au(ku),
  Ls = au(Uu),
  Ms = au(ju),
  Q = He
;((Lu && Q(new Lu(new ArrayBuffer(1))) != de) ||
  (Mu && Q(new Mu()) != fe) ||
  (ku && Q(ku.resolve()) != Be) ||
  (Uu && Q(new Uu()) != he) ||
  (ju && Q(new ju()) != ye)) &&
  (Q = function (u) {
    var e = He(u),
      r = e == Ns ? u.constructor : void 0,
      t = r ? au(r) : ''
    if (t)
      switch (t) {
        case Ps:
          return de
        case Is:
          return fe
        case Rs:
          return Be
        case Ls:
          return he
        case Ms:
          return ye
      }
    return e
  })
var ks = Q,
  Iu = Ge,
  Us = Ke,
  js = Hi,
  Gs = ps,
  ve = ks,
  ge = q,
  me = Le,
  Ks = ke,
  Hs = 1,
  _e = '[object Arguments]',
  xe = '[object Array]',
  Bu = '[object Object]',
  Ws = Object.prototype,
  Te = Ws.hasOwnProperty
function qs(u, e, r, t, a, s) {
  var n = ge(u),
    c = ge(e),
    p = n ? xe : ve(u),
    E = c ? xe : ve(e)
  ;(p = p == _e ? Bu : p), (E = E == _e ? Bu : E)
  var T = p == Bu,
    x = E == Bu,
    F = p == E
  if (F && me(u)) {
    if (!me(e)) return !1
    ;(n = !0), (T = !1)
  }
  if (F && !T)
    return (
      s || (s = new Iu()),
      n || Ks(u) ? Us(u, e, r, t, a, s) : js(u, e, p, r, t, a, s)
    )
  if (!(r & Hs)) {
    var m = T && Te.call(u, '__wrapped__'),
      d = x && Te.call(e, '__wrapped__')
    if (m || d) {
      var l = m ? u.value() : u,
        f = d ? e.value() : e
      return s || (s = new Iu()), a(l, f, r, t, s)
    }
  }
  return F ? (s || (s = new Iu()), Gs(u, e, r, t, a, s)) : !1
}
var zs = qs,
  Vs = zs,
  be = cu
function We(u, e, r, t, a) {
  return u === e
    ? !0
    : u == null || e == null || (!be(u) && !be(e))
    ? u !== u && e !== e
    : Vs(u, e, r, t, We, a)
}
var qe = We,
  Js = Ge,
  Qs = qe,
  Xs = 1,
  Ys = 2
function Zs(u, e, r, t) {
  var a = r.length,
    s = a,
    n = !t
  if (u == null) return !s
  for (u = Object(u); a--; ) {
    var c = r[a]
    if (n && c[2] ? c[1] !== u[c[0]] : !(c[0] in u)) return !1
  }
  for (; ++a < s; ) {
    c = r[a]
    var p = c[0],
      E = u[p],
      T = c[1]
    if (n && c[2]) {
      if (E === void 0 && !(p in u)) return !1
    } else {
      var x = new Js()
      if (t) var F = t(E, T, p, u, e, x)
      if (!(F === void 0 ? Qs(T, E, Xs | Ys, t, x) : F)) return !1
    }
  }
  return !0
}
var uD = Zs,
  eD = Ku
function rD(u) {
  return u === u && !eD(u)
}
var ze = rD,
  tD = ze,
  aD = qu
function nD(u) {
  for (var e = aD(u), r = e.length; r--; ) {
    var t = e[r],
      a = u[t]
    e[r] = [t, a, tD(a)]
  }
  return e
}
var iD = nD
function sD(u, e) {
  return function (r) {
    return r == null ? !1 : r[u] === e && (e !== void 0 || u in Object(r))
  }
}
var Ve = sD,
  DD = uD,
  AD = iD,
  oD = Ve
function FD(u) {
  var e = AD(u)
  return e.length == 1 && e[0][2]
    ? oD(e[0][0], e[0][1])
    : function (r) {
        return r === u || DD(r, u, e)
      }
}
var CD = FD,
  cD = Cu,
  lD = cu,
  ED = '[object Symbol]'
function pD(u) {
  return typeof u == 'symbol' || (lD(u) && cD(u) == ED)
}
var Ju = pD,
  fD = q,
  BD = Ju,
  hD = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  yD = /^\w*$/
function dD(u, e) {
  if (fD(u)) return !1
  var r = typeof u
  return r == 'number' || r == 'symbol' || r == 'boolean' || u == null || BD(u)
    ? !0
    : yD.test(u) || !hD.test(u) || (e != null && u in Object(e))
}
var Qu = dD,
  Je = Vu,
  vD = 'Expected a function'
function Xu(u, e) {
  if (typeof u != 'function' || (e != null && typeof e != 'function'))
    throw new TypeError(vD)
  var r = function () {
    var t = arguments,
      a = e ? e.apply(this, t) : t[0],
      s = r.cache
    if (s.has(a)) return s.get(a)
    var n = u.apply(this, t)
    return (r.cache = s.set(a, n) || s), n
  }
  return (r.cache = new (Xu.Cache || Je)()), r
}
Xu.Cache = Je
var gD = Xu,
  mD = gD,
  _D = 500
function xD(u) {
  var e = mD(u, function (t) {
      return r.size === _D && r.clear(), t
    }),
    r = e.cache
  return e
}
var TD = xD,
  bD = TD,
  SD =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  $D = /\\(\\)?/g,
  wD = bD(function (u) {
    var e = []
    return (
      u.charCodeAt(0) === 46 && e.push(''),
      u.replace(SD, function (r, t, a, s) {
        e.push(a ? s.replace($D, '$1') : t || r)
      }),
      e
    )
  }),
  OD = wD
function ND(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length, a = Array(t); ++r < t; )
    a[r] = e(u[r], r, u)
  return a
}
var PD = ND,
  Se = mu,
  ID = PD,
  RD = q,
  LD = Ju,
  MD = 1 / 0,
  $e = Se ? Se.prototype : void 0,
  we = $e ? $e.toString : void 0
function Qe(u) {
  if (typeof u == 'string') return u
  if (RD(u)) return ID(u, Qe) + ''
  if (LD(u)) return we ? we.call(u) : ''
  var e = u + ''
  return e == '0' && 1 / u == -MD ? '-0' : e
}
var kD = Qe,
  UD = kD
function jD(u) {
  return u == null ? '' : UD(u)
}
var GD = jD,
  KD = q,
  HD = Qu,
  WD = OD,
  qD = GD
function zD(u, e) {
  return KD(u) ? u : HD(u, e) ? [u] : WD(qD(u))
}
var Xe = zD,
  VD = Ju,
  JD = 1 / 0
function QD(u) {
  if (typeof u == 'string' || VD(u)) return u
  var e = u + ''
  return e == '0' && 1 / u == -JD ? '-0' : e
}
var Su = QD,
  XD = Xe,
  YD = Su
function ZD(u, e) {
  e = XD(e, u)
  for (var r = 0, t = e.length; u != null && r < t; ) u = u[YD(e[r++])]
  return r && r == t ? u : void 0
}
var Ye = ZD,
  u1 = Ye
function e1(u, e, r) {
  var t = u == null ? void 0 : u1(u, e)
  return t === void 0 ? r : t
}
var r1 = e1
function t1(u, e) {
  return u != null && e in Object(u)
}
var a1 = t1,
  n1 = Xe,
  i1 = Re,
  s1 = q,
  D1 = Me,
  A1 = Wu,
  o1 = Su
function F1(u, e, r) {
  e = n1(e, u)
  for (var t = -1, a = e.length, s = !1; ++t < a; ) {
    var n = o1(e[t])
    if (!(s = u != null && r(u, n))) break
    u = u[n]
  }
  return s || ++t != a
    ? s
    : ((a = u == null ? 0 : u.length),
      !!a && A1(a) && D1(n, a) && (s1(u) || i1(u)))
}
var C1 = F1,
  c1 = a1,
  l1 = C1
function E1(u, e) {
  return u != null && l1(u, e, c1)
}
var p1 = E1,
  f1 = qe,
  B1 = r1,
  h1 = p1,
  y1 = Qu,
  d1 = ze,
  v1 = Ve,
  g1 = Su,
  m1 = 1,
  _1 = 2
function x1(u, e) {
  return y1(u) && d1(e)
    ? v1(g1(u), e)
    : function (r) {
        var t = B1(r, u)
        return t === void 0 && t === e ? h1(r, u) : f1(e, t, m1 | _1)
      }
}
var T1 = x1
function b1(u) {
  return u
}
var S1 = b1
function $1(u) {
  return function (e) {
    return e == null ? void 0 : e[u]
  }
}
var w1 = $1,
  O1 = Ye
function N1(u) {
  return function (e) {
    return O1(e, u)
  }
}
var P1 = N1,
  I1 = w1,
  R1 = P1,
  L1 = Qu,
  M1 = Su
function k1(u) {
  return L1(u) ? I1(M1(u)) : R1(u)
}
var U1 = k1,
  j1 = CD,
  G1 = T1,
  K1 = S1,
  H1 = q,
  W1 = U1
function q1(u) {
  return typeof u == 'function'
    ? u
    : u == null
    ? K1
    : typeof u == 'object'
    ? H1(u)
      ? G1(u[0], u[1])
      : j1(u)
    : W1(u)
}
var z1 = q1,
  V1 = ht,
  J1 = ia,
  Q1 = z1
function X1(u, e) {
  var r = {}
  return (
    (e = Q1(e)),
    J1(u, function (t, a, s) {
      V1(r, a, e(t, a, s))
    }),
    r
  )
}
var Y1 = X1
const Z1 = Gu(Y1)
var Ze = {},
  ou = {},
  ur = {exports: {}}
;(function () {
  function u(n) {
    if (n == null) return !1
    switch (n.type) {
      case 'ArrayExpression':
      case 'AssignmentExpression':
      case 'BinaryExpression':
      case 'CallExpression':
      case 'ConditionalExpression':
      case 'FunctionExpression':
      case 'Identifier':
      case 'Literal':
      case 'LogicalExpression':
      case 'MemberExpression':
      case 'NewExpression':
      case 'ObjectExpression':
      case 'SequenceExpression':
      case 'ThisExpression':
      case 'UnaryExpression':
      case 'UpdateExpression':
        return !0
    }
    return !1
  }
  function e(n) {
    if (n == null) return !1
    switch (n.type) {
      case 'DoWhileStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'WhileStatement':
        return !0
    }
    return !1
  }
  function r(n) {
    if (n == null) return !1
    switch (n.type) {
      case 'BlockStatement':
      case 'BreakStatement':
      case 'ContinueStatement':
      case 'DebuggerStatement':
      case 'DoWhileStatement':
      case 'EmptyStatement':
      case 'ExpressionStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'IfStatement':
      case 'LabeledStatement':
      case 'ReturnStatement':
      case 'SwitchStatement':
      case 'ThrowStatement':
      case 'TryStatement':
      case 'VariableDeclaration':
      case 'WhileStatement':
      case 'WithStatement':
        return !0
    }
    return !1
  }
  function t(n) {
    return r(n) || (n != null && n.type === 'FunctionDeclaration')
  }
  function a(n) {
    switch (n.type) {
      case 'IfStatement':
        return n.alternate != null ? n.alternate : n.consequent
      case 'LabeledStatement':
      case 'ForStatement':
      case 'ForInStatement':
      case 'WhileStatement':
      case 'WithStatement':
        return n.body
    }
    return null
  }
  function s(n) {
    var c
    if (n.type !== 'IfStatement' || n.alternate == null) return !1
    c = n.consequent
    do {
      if (c.type === 'IfStatement' && c.alternate == null) return !0
      c = a(c)
    } while (c)
    return !1
  }
  ur.exports = {
    isExpression: u,
    isStatement: r,
    isIterationStatement: e,
    isSourceElement: t,
    isProblematicIfStatement: s,
    trailingStatement: a,
  }
})()
var uA = ur.exports,
  er = {exports: {}}
;(function () {
  var u, e, r, t, a, s
  ;(e = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  }),
    (u = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
    })
  function n(f) {
    return 48 <= f && f <= 57
  }
  function c(f) {
    return (48 <= f && f <= 57) || (97 <= f && f <= 102) || (65 <= f && f <= 70)
  }
  function p(f) {
    return f >= 48 && f <= 55
  }
  r = [
    5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
    8239, 8287, 12288, 65279,
  ]
  function E(f) {
    return (
      f === 32 ||
      f === 9 ||
      f === 11 ||
      f === 12 ||
      f === 160 ||
      (f >= 5760 && r.indexOf(f) >= 0)
    )
  }
  function T(f) {
    return f === 10 || f === 13 || f === 8232 || f === 8233
  }
  function x(f) {
    if (f <= 65535) return String.fromCharCode(f)
    var I = String.fromCharCode(Math.floor((f - 65536) / 1024) + 55296),
      L = String.fromCharCode(((f - 65536) % 1024) + 56320)
    return I + L
  }
  for (t = new Array(128), s = 0; s < 128; ++s)
    t[s] = (s >= 97 && s <= 122) || (s >= 65 && s <= 90) || s === 36 || s === 95
  for (a = new Array(128), s = 0; s < 128; ++s)
    a[s] =
      (s >= 97 && s <= 122) ||
      (s >= 65 && s <= 90) ||
      (s >= 48 && s <= 57) ||
      s === 36 ||
      s === 95
  function F(f) {
    return f < 128 ? t[f] : e.NonAsciiIdentifierStart.test(x(f))
  }
  function m(f) {
    return f < 128 ? a[f] : e.NonAsciiIdentifierPart.test(x(f))
  }
  function d(f) {
    return f < 128 ? t[f] : u.NonAsciiIdentifierStart.test(x(f))
  }
  function l(f) {
    return f < 128 ? a[f] : u.NonAsciiIdentifierPart.test(x(f))
  }
  er.exports = {
    isDecimalDigit: n,
    isHexDigit: c,
    isOctalDigit: p,
    isWhiteSpace: E,
    isLineTerminator: T,
    isIdentifierStartES5: F,
    isIdentifierPartES5: m,
    isIdentifierStartES6: d,
    isIdentifierPartES6: l,
  }
})()
var rr = er.exports,
  tr = {exports: {}}
;(function () {
  var u = rr
  function e(F) {
    switch (F) {
      case 'implements':
      case 'interface':
      case 'package':
      case 'private':
      case 'protected':
      case 'public':
      case 'static':
      case 'let':
        return !0
      default:
        return !1
    }
  }
  function r(F, m) {
    return !m && F === 'yield' ? !1 : t(F, m)
  }
  function t(F, m) {
    if (m && e(F)) return !0
    switch (F.length) {
      case 2:
        return F === 'if' || F === 'in' || F === 'do'
      case 3:
        return F === 'var' || F === 'for' || F === 'new' || F === 'try'
      case 4:
        return (
          F === 'this' ||
          F === 'else' ||
          F === 'case' ||
          F === 'void' ||
          F === 'with' ||
          F === 'enum'
        )
      case 5:
        return (
          F === 'while' ||
          F === 'break' ||
          F === 'catch' ||
          F === 'throw' ||
          F === 'const' ||
          F === 'yield' ||
          F === 'class' ||
          F === 'super'
        )
      case 6:
        return (
          F === 'return' ||
          F === 'typeof' ||
          F === 'delete' ||
          F === 'switch' ||
          F === 'export' ||
          F === 'import'
        )
      case 7:
        return F === 'default' || F === 'finally' || F === 'extends'
      case 8:
        return F === 'function' || F === 'continue' || F === 'debugger'
      case 10:
        return F === 'instanceof'
      default:
        return !1
    }
  }
  function a(F, m) {
    return F === 'null' || F === 'true' || F === 'false' || r(F, m)
  }
  function s(F, m) {
    return F === 'null' || F === 'true' || F === 'false' || t(F, m)
  }
  function n(F) {
    return F === 'eval' || F === 'arguments'
  }
  function c(F) {
    var m, d, l
    if (F.length === 0 || ((l = F.charCodeAt(0)), !u.isIdentifierStartES5(l)))
      return !1
    for (m = 1, d = F.length; m < d; ++m)
      if (((l = F.charCodeAt(m)), !u.isIdentifierPartES5(l))) return !1
    return !0
  }
  function p(F, m) {
    return (F - 55296) * 1024 + (m - 56320) + 65536
  }
  function E(F) {
    var m, d, l, f, I
    if (F.length === 0) return !1
    for (I = u.isIdentifierStartES6, m = 0, d = F.length; m < d; ++m) {
      if (((l = F.charCodeAt(m)), 55296 <= l && l <= 56319)) {
        if (
          (++m, m >= d || ((f = F.charCodeAt(m)), !(56320 <= f && f <= 57343)))
        )
          return !1
        l = p(l, f)
      }
      if (!I(l)) return !1
      I = u.isIdentifierPartES6
    }
    return !0
  }
  function T(F, m) {
    return c(F) && !a(F, m)
  }
  function x(F, m) {
    return E(F) && !s(F, m)
  }
  tr.exports = {
    isKeywordES5: r,
    isKeywordES6: t,
    isReservedWordES5: a,
    isReservedWordES6: s,
    isRestrictedWord: n,
    isIdentifierNameES5: c,
    isIdentifierNameES6: E,
    isIdentifierES5: T,
    isIdentifierES6: x,
  }
})()
var eA = tr.exports
;(function () {
  ;(ou.ast = uA), (ou.code = rr), (ou.keyword = eA)
})()
var Du = {},
  Y = {}
const rA = 'doctrine',
  tA = 'JSDoc parser',
  aA = 'https://github.com/eslint/doctrine',
  nA = 'lib/doctrine.js',
  iA = '3.0.0',
  sA = {node: '>=6.0.0'},
  DA = {lib: './lib'},
  AA = ['lib'],
  oA = [
    {
      name: 'Nicholas C. Zakas',
      email: 'nicholas+npm@nczconsulting.com',
      web: 'https://www.nczonline.net',
    },
    {
      name: 'Yusuke Suzuki',
      email: 'utatane.tea@gmail.com',
      web: 'https://github.com/Constellation',
    },
  ],
  FA = 'eslint/doctrine',
  CA = {
    coveralls: '^3.0.1',
    dateformat: '^1.0.11',
    eslint: '^1.10.3',
    'eslint-release': '^1.0.0',
    linefix: '^0.1.1',
    mocha: '^3.4.2',
    'npm-license': '^0.3.1',
    nyc: '^10.3.2',
    semver: '^5.0.3',
    shelljs: '^0.5.3',
    'shelljs-nodecli': '^0.1.1',
    should: '^5.0.1',
  },
  cA = 'Apache-2.0',
  lA = {
    pretest: 'npm run lint',
    test: 'nyc mocha',
    coveralls: 'nyc report --reporter=text-lcov | coveralls',
    lint: 'eslint lib/',
    'generate-release': 'eslint-generate-release',
    'generate-alpharelease': 'eslint-generate-prerelease alpha',
    'generate-betarelease': 'eslint-generate-prerelease beta',
    'generate-rcrelease': 'eslint-generate-prerelease rc',
    'publish-release': 'eslint-publish-release',
  },
  EA = {esutils: '^2.0.2'},
  pA = {
    name: rA,
    description: tA,
    homepage: aA,
    main: nA,
    version: iA,
    engines: sA,
    directories: DA,
    files: AA,
    maintainers: oA,
    repository: FA,
    devDependencies: CA,
    license: cA,
    scripts: lA,
    dependencies: EA,
  }
function fA(u, e) {
  if (!u) throw new Error(e || 'unknown assertion error')
}
var BA = fA
;(function () {
  var u
  ;(u = pA.version), (Y.VERSION = u)
  function e(t) {
    ;(this.name = 'DoctrineError'), (this.message = t)
  }
  ;(e.prototype = (function () {
    var t = function () {}
    return (t.prototype = Error.prototype), new t()
  })()),
    (e.prototype.constructor = e),
    (Y.DoctrineError = e)
  function r(t) {
    throw new e(t)
  }
  ;(Y.throwError = r), (Y.assert = BA)
})()
;(function () {
  var u, e, r, t, a, s, n, c, p, E, T, x
  ;(p = ou),
    (E = Y),
    (u = {
      NullableLiteral: 'NullableLiteral',
      AllLiteral: 'AllLiteral',
      NullLiteral: 'NullLiteral',
      UndefinedLiteral: 'UndefinedLiteral',
      VoidLiteral: 'VoidLiteral',
      UnionType: 'UnionType',
      ArrayType: 'ArrayType',
      RecordType: 'RecordType',
      FieldType: 'FieldType',
      FunctionType: 'FunctionType',
      ParameterType: 'ParameterType',
      RestType: 'RestType',
      NonNullableType: 'NonNullableType',
      OptionalType: 'OptionalType',
      NullableType: 'NullableType',
      NameExpression: 'NameExpression',
      TypeApplication: 'TypeApplication',
      StringLiteralType: 'StringLiteralType',
      NumericLiteralType: 'NumericLiteralType',
      BooleanLiteralType: 'BooleanLiteralType',
    }),
    (e = {
      ILLEGAL: 0,
      DOT_LT: 1,
      REST: 2,
      LT: 3,
      GT: 4,
      LPAREN: 5,
      RPAREN: 6,
      LBRACE: 7,
      RBRACE: 8,
      LBRACK: 9,
      RBRACK: 10,
      COMMA: 11,
      COLON: 12,
      STAR: 13,
      PIPE: 14,
      QUESTION: 15,
      BANG: 16,
      EQUAL: 17,
      NAME: 18,
      STRING: 19,
      NUMBER: 20,
      EOF: 21,
    })
  function F(i) {
    return (
      '><(){}[],:*|?!='.indexOf(String.fromCharCode(i)) === -1 &&
      !p.code.isWhiteSpace(i) &&
      !p.code.isLineTerminator(i)
    )
  }
  function m(i, D, y, o) {
    ;(this._previous = i),
      (this._index = D),
      (this._token = y),
      (this._value = o)
  }
  ;(m.prototype.restore = function () {
    ;(s = this._previous),
      (a = this._index),
      (n = this._token),
      (c = this._value)
  }),
    (m.save = function () {
      return new m(s, a, n, c)
    })
  function d(i, D) {
    return x && (i.range = [D[0] + T, D[1] + T]), i
  }
  function l() {
    var i = r.charAt(a)
    return (a += 1), i
  }
  function f(i) {
    var D,
      y,
      o,
      A = 0
    for (y = i === 'u' ? 4 : 2, D = 0; D < y; ++D)
      if (a < t && p.code.isHexDigit(r.charCodeAt(a)))
        (o = l()), (A = A * 16 + '0123456789abcdef'.indexOf(o.toLowerCase()))
      else return ''
    return String.fromCharCode(A)
  }
  function I() {
    var i = '',
      D,
      y,
      o,
      A,
      h
    for (D = r.charAt(a), ++a; a < t; )
      if (((y = l()), y === D)) {
        D = ''
        break
      } else if (y === '\\')
        if (((y = l()), p.code.isLineTerminator(y.charCodeAt(0))))
          y === '\r' && r.charCodeAt(a) === 10 && ++a
        else
          switch (y) {
            case 'n':
              i += `
`
              break
            case 'r':
              i += '\r'
              break
            case 't':
              i += '	'
              break
            case 'u':
            case 'x':
              ;(h = a), (A = f(y)), A ? (i += A) : ((a = h), (i += y))
              break
            case 'b':
              i += '\b'
              break
            case 'f':
              i += '\f'
              break
            case 'v':
              i += '\v'
              break
            default:
              p.code.isOctalDigit(y.charCodeAt(0))
                ? ((o = '01234567'.indexOf(y)),
                  a < t &&
                    p.code.isOctalDigit(r.charCodeAt(a)) &&
                    ((o = o * 8 + '01234567'.indexOf(l())),
                    '0123'.indexOf(y) >= 0 &&
                      a < t &&
                      p.code.isOctalDigit(r.charCodeAt(a)) &&
                      (o = o * 8 + '01234567'.indexOf(l()))),
                  (i += String.fromCharCode(o)))
                : (i += y)
              break
          }
      else {
        if (p.code.isLineTerminator(y.charCodeAt(0))) break
        i += y
      }
    return D !== '' && E.throwError('unexpected quote'), (c = i), e.STRING
  }
  function L() {
    var i, D
    if (((i = ''), (D = r.charCodeAt(a)), D !== 46)) {
      if (((i = l()), (D = r.charCodeAt(a)), i === '0')) {
        if (D === 120 || D === 88) {
          for (
            i += l();
            a < t && ((D = r.charCodeAt(a)), !!p.code.isHexDigit(D));

          )
            i += l()
          return (
            i.length <= 2 && E.throwError('unexpected token'),
            a < t &&
              ((D = r.charCodeAt(a)),
              p.code.isIdentifierStartES5(D) &&
                E.throwError('unexpected token')),
            (c = parseInt(i, 16)),
            e.NUMBER
          )
        }
        if (p.code.isOctalDigit(D)) {
          for (
            i += l();
            a < t && ((D = r.charCodeAt(a)), !!p.code.isOctalDigit(D));

          )
            i += l()
          return (
            a < t &&
              ((D = r.charCodeAt(a)),
              (p.code.isIdentifierStartES5(D) || p.code.isDecimalDigit(D)) &&
                E.throwError('unexpected token')),
            (c = parseInt(i, 8)),
            e.NUMBER
          )
        }
        p.code.isDecimalDigit(D) && E.throwError('unexpected token')
      }
      for (; a < t && ((D = r.charCodeAt(a)), !!p.code.isDecimalDigit(D)); )
        i += l()
    }
    if (D === 46)
      for (
        i += l();
        a < t && ((D = r.charCodeAt(a)), !!p.code.isDecimalDigit(D));

      )
        i += l()
    if (D === 101 || D === 69)
      if (
        ((i += l()),
        (D = r.charCodeAt(a)),
        (D === 43 || D === 45) && (i += l()),
        (D = r.charCodeAt(a)),
        p.code.isDecimalDigit(D))
      )
        for (
          i += l();
          a < t && ((D = r.charCodeAt(a)), !!p.code.isDecimalDigit(D));

        )
          i += l()
      else E.throwError('unexpected token')
    return (
      a < t &&
        ((D = r.charCodeAt(a)),
        p.code.isIdentifierStartES5(D) && E.throwError('unexpected token')),
      (c = parseFloat(i)),
      e.NUMBER
    )
  }
  function z() {
    var i, D
    for (c = l(); a < t && F(r.charCodeAt(a)); ) {
      if (((i = r.charCodeAt(a)), i === 46)) {
        if (a + 1 >= t) return e.ILLEGAL
        if (((D = r.charCodeAt(a + 1)), D === 60)) break
      }
      c += l()
    }
    return e.NAME
  }
  function M() {
    var i
    for (s = a; a < t && p.code.isWhiteSpace(r.charCodeAt(a)); ) l()
    if (a >= t) return (n = e.EOF), n
    switch (((i = r.charCodeAt(a)), i)) {
      case 39:
      case 34:
        return (n = I()), n
      case 58:
        return l(), (n = e.COLON), n
      case 44:
        return l(), (n = e.COMMA), n
      case 40:
        return l(), (n = e.LPAREN), n
      case 41:
        return l(), (n = e.RPAREN), n
      case 91:
        return l(), (n = e.LBRACK), n
      case 93:
        return l(), (n = e.RBRACK), n
      case 123:
        return l(), (n = e.LBRACE), n
      case 125:
        return l(), (n = e.RBRACE), n
      case 46:
        if (a + 1 < t) {
          if (((i = r.charCodeAt(a + 1)), i === 60))
            return l(), l(), (n = e.DOT_LT), n
          if (i === 46 && a + 2 < t && r.charCodeAt(a + 2) === 46)
            return l(), l(), l(), (n = e.REST), n
          if (p.code.isDecimalDigit(i)) return (n = L()), n
        }
        return (n = e.ILLEGAL), n
      case 60:
        return l(), (n = e.LT), n
      case 62:
        return l(), (n = e.GT), n
      case 42:
        return l(), (n = e.STAR), n
      case 124:
        return l(), (n = e.PIPE), n
      case 63:
        return l(), (n = e.QUESTION), n
      case 33:
        return l(), (n = e.BANG), n
      case 61:
        return l(), (n = e.EQUAL), n
      case 45:
        return (n = L()), n
      default:
        return p.code.isDecimalDigit(i)
          ? ((n = L()), n)
          : (E.assert(F(i)), (n = z()), n)
    }
  }
  function _(i, D) {
    E.assert(n === i, D || 'consumed token not matched'), M()
  }
  function C(i, D) {
    n !== i && E.throwError(D || 'unexpected token'), M()
  }
  function k() {
    var i,
      D = a - 1
    if (
      (_(e.LPAREN, 'UnionType should start with ('), (i = []), n !== e.RPAREN)
    )
      for (; i.push(U()), n !== e.RPAREN; ) C(e.PIPE)
    return (
      _(e.RPAREN, 'UnionType should end with )'),
      d({type: u.UnionType, elements: i}, [D, s])
    )
  }
  function B() {
    var i,
      D = a - 1,
      y
    for (
      _(e.LBRACK, 'ArrayType should start with ['), i = [];
      n !== e.RBRACK;

    ) {
      if (n === e.REST) {
        ;(y = a - 3),
          _(e.REST),
          i.push(d({type: u.RestType, expression: U()}, [y, s]))
        break
      } else i.push(U())
      n !== e.RBRACK && C(e.COMMA)
    }
    return C(e.RBRACK), d({type: u.ArrayType, elements: i}, [D, s])
  }
  function j() {
    var i = c
    if (n === e.NAME || n === e.STRING) return M(), i
    if (n === e.NUMBER) return _(e.NUMBER), String(i)
    E.throwError('unexpected token')
  }
  function G() {
    var i,
      D = s
    return (
      (i = j()),
      n === e.COLON
        ? (_(e.COLON), d({type: u.FieldType, key: i, value: U()}, [D, s]))
        : d({type: u.FieldType, key: i, value: null}, [D, s])
    )
  }
  function g() {
    var i,
      D = a - 1,
      y
    if (
      (_(e.LBRACE, 'RecordType should start with {'), (i = []), n === e.COMMA)
    )
      _(e.COMMA)
    else for (; n !== e.RBRACE; ) i.push(G()), n !== e.RBRACE && C(e.COMMA)
    return (y = a), C(e.RBRACE), d({type: u.RecordType, fields: i}, [D, y])
  }
  function nu() {
    var i = c,
      D = a - i.length
    return (
      C(e.NAME),
      n === e.COLON &&
        (i === 'module' || i === 'external' || i === 'event') &&
        (_(e.COLON), (i += ':' + c), C(e.NAME)),
      d({type: u.NameExpression, name: i}, [D, s])
    )
  }
  function lu() {
    var i = []
    for (i.push(K()); n === e.COMMA; ) _(e.COMMA), i.push(K())
    return i
  }
  function V() {
    var i,
      D,
      y = a - c.length
    return (
      (i = nu()),
      n === e.DOT_LT || n === e.LT
        ? (M(),
          (D = lu()),
          C(e.GT),
          d({type: u.TypeApplication, expression: i, applications: D}, [y, s]))
        : i
    )
  }
  function Eu() {
    return (
      _(e.COLON, 'ResultType should start with :'),
      n === e.NAME && c === 'void' ? (_(e.NAME), {type: u.VoidLiteral}) : U()
    )
  }
  function $() {
    for (var i = [], D = !1, y, o = !1, A, h = a - 3, v; n !== e.RPAREN; )
      n === e.REST && (_(e.REST), (o = !0)),
        (A = s),
        (y = U()),
        y.type === u.NameExpression &&
          n === e.COLON &&
          ((v = s - y.name.length),
          _(e.COLON),
          (y = d({type: u.ParameterType, name: y.name, expression: U()}, [
            v,
            s,
          ]))),
        n === e.EQUAL
          ? (_(e.EQUAL),
            (y = d({type: u.OptionalType, expression: y}, [A, s])),
            (D = !0))
          : D && E.throwError('unexpected token'),
        o && (y = d({type: u.RestType, expression: y}, [h, s])),
        i.push(y),
        n !== e.RPAREN && C(e.COMMA)
    return i
  }
  function wu() {
    var i,
      D,
      y,
      o,
      A,
      h = a - c.length
    return (
      E.assert(
        n === e.NAME && c === 'function',
        "FunctionType should start with 'function'"
      ),
      _(e.NAME),
      C(e.LPAREN),
      (i = !1),
      (y = []),
      (D = null),
      n !== e.RPAREN &&
        (n === e.NAME && (c === 'this' || c === 'new')
          ? ((i = c === 'new'),
            _(e.NAME),
            C(e.COLON),
            (D = V()),
            n === e.COMMA && (_(e.COMMA), (y = $())))
          : (y = $())),
      C(e.RPAREN),
      (o = null),
      n === e.COLON && (o = Eu()),
      (A = d({type: u.FunctionType, params: y, result: o}, [h, s])),
      D && ((A.this = D), i && (A.new = !0)),
      A
    )
  }
  function iu() {
    var i, D
    switch (n) {
      case e.STAR:
        return _(e.STAR), d({type: u.AllLiteral}, [s - 1, s])
      case e.LPAREN:
        return k()
      case e.LBRACK:
        return B()
      case e.LBRACE:
        return g()
      case e.NAME:
        if (((D = a - c.length), c === 'null'))
          return _(e.NAME), d({type: u.NullLiteral}, [D, s])
        if (c === 'undefined')
          return _(e.NAME), d({type: u.UndefinedLiteral}, [D, s])
        if (c === 'true' || c === 'false')
          return (
            _(e.NAME),
            d({type: u.BooleanLiteralType, value: c === 'true'}, [D, s])
          )
        if (((i = m.save()), c === 'function'))
          try {
            return wu()
          } catch {
            i.restore()
          }
        return V()
      case e.STRING:
        return (
          M(), d({type: u.StringLiteralType, value: c}, [s - c.length - 2, s])
        )
      case e.NUMBER:
        return (
          M(),
          d({type: u.NumericLiteralType, value: c}, [s - String(c).length, s])
        )
      default:
        E.throwError('unexpected token')
    }
  }
  function U() {
    var i, D
    return n === e.QUESTION
      ? ((D = a - 1),
        _(e.QUESTION),
        n === e.COMMA ||
        n === e.EQUAL ||
        n === e.RBRACE ||
        n === e.RPAREN ||
        n === e.PIPE ||
        n === e.EOF ||
        n === e.RBRACK ||
        n === e.GT
          ? d({type: u.NullableLiteral}, [D, s])
          : d({type: u.NullableType, expression: iu(), prefix: !0}, [D, s]))
      : n === e.BANG
      ? ((D = a - 1),
        _(e.BANG),
        d({type: u.NonNullableType, expression: iu(), prefix: !0}, [D, s]))
      : ((D = s),
        (i = iu()),
        n === e.BANG
          ? (_(e.BANG),
            d({type: u.NonNullableType, expression: i, prefix: !1}, [D, s]))
          : n === e.QUESTION
          ? (_(e.QUESTION),
            d({type: u.NullableType, expression: i, prefix: !1}, [D, s]))
          : n === e.LBRACK
          ? (_(e.LBRACK),
            C(
              e.RBRACK,
              'expected an array-style type declaration (' + c + '[])'
            ),
            d(
              {
                type: u.TypeApplication,
                expression: d({type: u.NameExpression, name: 'Array'}, [D, s]),
                applications: [i],
              },
              [D, s]
            ))
          : i)
  }
  function K() {
    var i, D
    if (((i = U()), n !== e.PIPE)) return i
    for (D = [i], _(e.PIPE); D.push(U()), n === e.PIPE; ) _(e.PIPE)
    return d({type: u.UnionType, elements: D}, [0, a])
  }
  function J() {
    var i
    return n === e.REST
      ? (_(e.REST), d({type: u.RestType, expression: K()}, [0, a]))
      : ((i = K()),
        n === e.EQUAL
          ? (_(e.EQUAL), d({type: u.OptionalType, expression: i}, [0, a]))
          : i)
  }
  function pu(i, D) {
    var y
    return (
      (r = i),
      (t = r.length),
      (a = 0),
      (s = 0),
      (x = D && D.range),
      (T = (D && D.startIndex) || 0),
      M(),
      (y = K()),
      D && D.midstream
        ? {expression: y, index: s}
        : (n !== e.EOF && E.throwError('not reach to EOF'), y)
    )
  }
  function Ou(i, D) {
    var y
    return (
      (r = i),
      (t = r.length),
      (a = 0),
      (s = 0),
      (x = D && D.range),
      (T = (D && D.startIndex) || 0),
      M(),
      (y = J()),
      D && D.midstream
        ? {expression: y, index: s}
        : (n !== e.EOF && E.throwError('not reach to EOF'), y)
    )
  }
  function w(i, D, y) {
    var o, A, h
    switch (i.type) {
      case u.NullableLiteral:
        o = '?'
        break
      case u.AllLiteral:
        o = '*'
        break
      case u.NullLiteral:
        o = 'null'
        break
      case u.UndefinedLiteral:
        o = 'undefined'
        break
      case u.VoidLiteral:
        o = 'void'
        break
      case u.UnionType:
        for (y ? (o = '') : (o = '('), A = 0, h = i.elements.length; A < h; ++A)
          (o += w(i.elements[A], D)), A + 1 !== h && (o += D ? '|' : ' | ')
        y || (o += ')')
        break
      case u.ArrayType:
        for (o = '[', A = 0, h = i.elements.length; A < h; ++A)
          (o += w(i.elements[A], D)), A + 1 !== h && (o += D ? ',' : ', ')
        o += ']'
        break
      case u.RecordType:
        for (o = '{', A = 0, h = i.fields.length; A < h; ++A)
          (o += w(i.fields[A], D)), A + 1 !== h && (o += D ? ',' : ', ')
        o += '}'
        break
      case u.FieldType:
        i.value ? (o = i.key + (D ? ':' : ': ') + w(i.value, D)) : (o = i.key)
        break
      case u.FunctionType:
        for (
          o = D ? 'function(' : 'function (',
            i.this &&
              (i.new
                ? (o += D ? 'new:' : 'new: ')
                : (o += D ? 'this:' : 'this: '),
              (o += w(i.this, D)),
              i.params.length !== 0 && (o += D ? ',' : ', ')),
            A = 0,
            h = i.params.length;
          A < h;
          ++A
        )
          (o += w(i.params[A], D)), A + 1 !== h && (o += D ? ',' : ', ')
        ;(o += ')'), i.result && (o += (D ? ':' : ': ') + w(i.result, D))
        break
      case u.ParameterType:
        o = i.name + (D ? ':' : ': ') + w(i.expression, D)
        break
      case u.RestType:
        ;(o = '...'), i.expression && (o += w(i.expression, D))
        break
      case u.NonNullableType:
        i.prefix
          ? (o = '!' + w(i.expression, D))
          : (o = w(i.expression, D) + '!')
        break
      case u.OptionalType:
        o = w(i.expression, D) + '='
        break
      case u.NullableType:
        i.prefix
          ? (o = '?' + w(i.expression, D))
          : (o = w(i.expression, D) + '?')
        break
      case u.NameExpression:
        o = i.name
        break
      case u.TypeApplication:
        for (
          o = w(i.expression, D) + '.<', A = 0, h = i.applications.length;
          A < h;
          ++A
        )
          (o += w(i.applications[A], D)), A + 1 !== h && (o += D ? ',' : ', ')
        o += '>'
        break
      case u.StringLiteralType:
        o = '"' + i.value + '"'
        break
      case u.NumericLiteralType:
        o = String(i.value)
        break
      case u.BooleanLiteralType:
        o = String(i.value)
        break
      default:
        E.throwError('Unknown type ' + i.type)
    }
    return o
  }
  function N(i, D) {
    return D == null && (D = {}), w(i, D.compact, D.topLevel)
  }
  ;(Du.parseType = pu),
    (Du.parseParamType = Ou),
    (Du.stringify = N),
    (Du.Syntax = u)
})()
;(function (u) {
  ;(function () {
    var e, r, t, a, s
    ;(a = ou), (e = Du), (r = Y)
    function n(C, k, B) {
      return C.slice(k, B)
    }
    s = (function () {
      var C = Object.prototype.hasOwnProperty
      return function (B, j) {
        return C.call(B, j)
      }
    })()
    function c(C) {
      var k = {},
        B
      for (B in C) C.hasOwnProperty(B) && (k[B] = C[B])
      return k
    }
    function p(C) {
      return (
        (C >= 97 && C <= 122) || (C >= 65 && C <= 90) || (C >= 48 && C <= 57)
      )
    }
    function E(C) {
      return C === 'param' || C === 'argument' || C === 'arg'
    }
    function T(C) {
      return C === 'return' || C === 'returns'
    }
    function x(C) {
      return C === 'property' || C === 'prop'
    }
    function F(C) {
      return (
        E(C) ||
        x(C) ||
        C === 'alias' ||
        C === 'this' ||
        C === 'mixes' ||
        C === 'requires'
      )
    }
    function m(C) {
      return F(C) || C === 'const' || C === 'constant'
    }
    function d(C) {
      return x(C) || E(C)
    }
    function l(C) {
      return x(C) || E(C)
    }
    function f(C) {
      return (
        E(C) ||
        T(C) ||
        C === 'define' ||
        C === 'enum' ||
        C === 'implements' ||
        C === 'this' ||
        C === 'type' ||
        C === 'typedef' ||
        x(C)
      )
    }
    function I(C) {
      return (
        f(C) ||
        C === 'throws' ||
        C === 'const' ||
        C === 'constant' ||
        C === 'namespace' ||
        C === 'member' ||
        C === 'var' ||
        C === 'module' ||
        C === 'constructor' ||
        C === 'class' ||
        C === 'extends' ||
        C === 'augments' ||
        C === 'public' ||
        C === 'private' ||
        C === 'protected'
      )
    }
    var L =
        '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
      z =
        '(' +
        L +
        '*(?:\\*' +
        L +
        `?)?)(.+|[\r
\u2028\u2029])`
    function M(C) {
      return C.replace(/^\/\*\*?/, '')
        .replace(/\*\/$/, '')
        .replace(new RegExp(z, 'g'), '$2')
        .replace(/\s*$/, '')
    }
    function _(C, k) {
      for (
        var B = C.replace(/^\/\*\*?/, ''), j = 0, G = new RegExp(z, 'g'), g;
        (g = G.exec(B));

      )
        if (((j += g[1].length), g.index + g[0].length > k + j))
          return k + j + C.length - B.length
      return C.replace(/\*\/$/, '').replace(/\s*$/, '').length
    }
    ;(function (C) {
      var k, B, j, G, g, nu, lu, V, Eu
      function $() {
        var o = g.charCodeAt(B)
        return (
          (B += 1),
          a.code.isLineTerminator(o) &&
            !(o === 13 && g.charCodeAt(B) === 10) &&
            (j += 1),
          String.fromCharCode(o)
        )
      }
      function wu() {
        var o = ''
        for ($(); B < G && p(g.charCodeAt(B)); ) o += $()
        return o
      }
      function iu() {
        var o,
          A,
          h = B
        for (A = !1; h < G; ) {
          if (
            ((o = g.charCodeAt(h)),
            a.code.isLineTerminator(o) &&
              !(o === 13 && g.charCodeAt(h + 1) === 10))
          )
            A = !0
          else if (A) {
            if (o === 64) break
            a.code.isWhiteSpace(o) || (A = !1)
          }
          h += 1
        }
        return h
      }
      function U(o, A, h) {
        for (var v, P, b, R, W = !1; B < A; )
          if (((v = g.charCodeAt(B)), a.code.isWhiteSpace(v))) $()
          else if (v === 123) {
            $()
            break
          } else {
            W = !0
            break
          }
        if (W) return null
        for (P = 1, b = ''; B < A; )
          if (((v = g.charCodeAt(B)), a.code.isLineTerminator(v))) $()
          else {
            if (v === 125) {
              if (((P -= 1), P === 0)) {
                $()
                break
              }
            } else v === 123 && (P += 1)
            b === '' && (R = B), (b += $())
          }
        return P !== 0
          ? r.throwError('Braces are not balanced')
          : l(o)
          ? e.parseParamType(b, {startIndex: w(R), range: h})
          : e.parseType(b, {startIndex: w(R), range: h})
      }
      function K(o) {
        var A
        if (
          !a.code.isIdentifierStartES5(g.charCodeAt(B)) &&
          !g[B].match(/[0-9]/)
        )
          return null
        for (A = $(); B < o && a.code.isIdentifierPartES5(g.charCodeAt(B)); )
          A += $()
        return A
      }
      function J(o) {
        for (
          ;
          B < o &&
          (a.code.isWhiteSpace(g.charCodeAt(B)) ||
            a.code.isLineTerminator(g.charCodeAt(B)));

        )
          $()
      }
      function pu(o, A, h) {
        var v = '',
          P,
          b
        if ((J(o), B >= o)) return null
        if (g.charCodeAt(B) === 91)
          if (A) (P = !0), (v = $())
          else return null
        if (((v += K(o)), h))
          for (
            g.charCodeAt(B) === 58 &&
              (v === 'module' || v === 'external' || v === 'event') &&
              ((v += $()), (v += K(o))),
              g.charCodeAt(B) === 91 &&
                g.charCodeAt(B + 1) === 93 &&
                ((v += $()), (v += $()));
            g.charCodeAt(B) === 46 ||
            g.charCodeAt(B) === 47 ||
            g.charCodeAt(B) === 35 ||
            g.charCodeAt(B) === 45 ||
            g.charCodeAt(B) === 126;

          )
            (v += $()), (v += K(o))
        if (P) {
          if ((J(o), g.charCodeAt(B) === 61)) {
            ;(v += $()), J(o)
            for (var R, W = 1; B < o; ) {
              if (
                ((R = g.charCodeAt(B)),
                a.code.isWhiteSpace(R) && (b || (J(o), (R = g.charCodeAt(B)))),
                R === 39 && (b ? b === "'" && (b = '') : (b = "'")),
                R === 34 && (b ? b === '"' && (b = '') : (b = '"')),
                R === 91)
              )
                W++
              else if (R === 93 && --W === 0) break
              v += $()
            }
          }
          if ((J(o), B >= o || g.charCodeAt(B) !== 93)) return null
          v += $()
        }
        return v
      }
      function Ou() {
        for (; B < G && g.charCodeAt(B) !== 64; ) $()
        return B >= G ? !1 : (r.assert(g.charCodeAt(B) === 64), !0)
      }
      function w(o) {
        return g === nu ? o : _(nu, o)
      }
      function N(o, A) {
        ;(this._options = o),
          (this._title = A.toLowerCase()),
          (this._tag = {title: A, description: null}),
          this._options.lineNumbers && (this._tag.lineNumber = j),
          (this._first = B - A.length - 1),
          (this._last = 0),
          (this._extra = {})
      }
      ;(N.prototype.addError = function (A) {
        var h = Array.prototype.slice.call(arguments, 1),
          v = A.replace(/%(\d)/g, function (P, b) {
            return (
              r.assert(b < h.length, 'Message reference must be in range'), h[b]
            )
          })
        return (
          this._tag.errors || (this._tag.errors = []),
          Eu && r.throwError(v),
          this._tag.errors.push(v),
          lu
        )
      }),
        (N.prototype.parseType = function () {
          if (f(this._title))
            try {
              if (
                ((this._tag.type = U(
                  this._title,
                  this._last,
                  this._options.range
                )),
                !this._tag.type &&
                  !E(this._title) &&
                  !T(this._title) &&
                  !this.addError('Missing or invalid tag type'))
              )
                return !1
            } catch (o) {
              if (((this._tag.type = null), !this.addError(o.message)))
                return !1
            }
          else if (I(this._title))
            try {
              this._tag.type = U(this._title, this._last, this._options.range)
            } catch {}
          return !0
        }),
        (N.prototype._parseNamePath = function (o) {
          var A
          return (
            (A = pu(this._last, V && l(this._title), !0)),
            !A && !o && !this.addError('Missing or invalid tag name')
              ? !1
              : ((this._tag.name = A), !0)
          )
        }),
        (N.prototype.parseNamePath = function () {
          return this._parseNamePath(!1)
        }),
        (N.prototype.parseNamePathOptional = function () {
          return this._parseNamePath(!0)
        }),
        (N.prototype.parseName = function () {
          var o, A
          if (m(this._title))
            if (
              ((this._tag.name = pu(
                this._last,
                V && l(this._title),
                d(this._title)
              )),
              this._tag.name)
            )
              (A = this._tag.name),
                A.charAt(0) === '[' &&
                  A.charAt(A.length - 1) === ']' &&
                  ((o = A.substring(1, A.length - 1).split('=')),
                  o.length > 1 && (this._tag.default = o.slice(1).join('=')),
                  (this._tag.name = o[0]),
                  this._tag.type &&
                    this._tag.type.type !== 'OptionalType' &&
                    (this._tag.type = {
                      type: 'OptionalType',
                      expression: this._tag.type,
                    }))
            else {
              if (!F(this._title)) return !0
              if (E(this._title) && this._tag.type && this._tag.type.name)
                (this._extra.name = this._tag.type),
                  (this._tag.name = this._tag.type.name),
                  (this._tag.type = null)
              else if (!this.addError('Missing or invalid tag name')) return !1
            }
          return !0
        }),
        (N.prototype.parseDescription = function () {
          var A = n(g, B, this._last).trim()
          return (
            A &&
              (/^-\s+/.test(A) && (A = A.substring(2)),
              (this._tag.description = A)),
            !0
          )
        }),
        (N.prototype.parseCaption = function () {
          var A = n(g, B, this._last).trim(),
            h = '<caption>',
            v = '</caption>',
            P = A.indexOf(h),
            b = A.indexOf(v)
          return (
            P >= 0 && b >= 0
              ? ((this._tag.caption = A.substring(P + h.length, b).trim()),
                (this._tag.description = A.substring(b + v.length).trim()))
              : (this._tag.description = A),
            !0
          )
        }),
        (N.prototype.parseKind = function () {
          var A, h
          return (
            (h = {
              class: !0,
              constant: !0,
              event: !0,
              external: !0,
              file: !0,
              function: !0,
              member: !0,
              mixin: !0,
              module: !0,
              namespace: !0,
              typedef: !0,
            }),
            (A = n(g, B, this._last).trim()),
            (this._tag.kind = A),
            !(!s(h, A) && !this.addError("Invalid kind name '%0'", A))
          )
        }),
        (N.prototype.parseAccess = function () {
          var A
          return (
            (A = n(g, B, this._last).trim()),
            (this._tag.access = A),
            !(
              A !== 'private' &&
              A !== 'protected' &&
              A !== 'public' &&
              !this.addError("Invalid access name '%0'", A)
            )
          )
        }),
        (N.prototype.parseThis = function () {
          var A = n(g, B, this._last).trim()
          if (A && A.charAt(0) === '{') {
            var h = this.parseType()
            return (h && this._tag.type.type === 'NameExpression') ||
              this._tag.type.type === 'UnionType'
              ? ((this._tag.name = this._tag.type.name), !0)
              : this.addError('Invalid name for this')
          } else return this.parseNamePath()
        }),
        (N.prototype.parseVariation = function () {
          var A, h
          return (
            (h = n(g, B, this._last).trim()),
            (A = parseFloat(h, 10)),
            (this._tag.variation = A),
            !(isNaN(A) && !this.addError("Invalid variation '%0'", h))
          )
        }),
        (N.prototype.ensureEnd = function () {
          var o = n(g, B, this._last).trim()
          return !(o && !this.addError("Unknown content '%0'", o))
        }),
        (N.prototype.epilogue = function () {
          var A
          return (
            (A = this._tag.description),
            !(
              l(this._title) &&
              !this._tag.type &&
              A &&
              A.charAt(0) === '[' &&
              ((this._tag.type = this._extra.name),
              this._tag.name || (this._tag.name = void 0),
              !V && !this.addError('Missing or invalid tag name'))
            )
          )
        }),
        (k = {
          access: ['parseAccess'],
          alias: ['parseNamePath', 'ensureEnd'],
          augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          example: ['parseCaption'],
          deprecated: ['parseDescription'],
          global: ['ensureEnd'],
          inner: ['ensureEnd'],
          instance: ['ensureEnd'],
          kind: ['parseKind'],
          mixes: ['parseNamePath', 'ensureEnd'],
          mixin: ['parseNamePathOptional', 'ensureEnd'],
          member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          method: ['parseNamePathOptional', 'ensureEnd'],
          module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          func: ['parseNamePathOptional', 'ensureEnd'],
          function: ['parseNamePathOptional', 'ensureEnd'],
          var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          name: ['parseNamePath', 'ensureEnd'],
          namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          private: ['parseType', 'parseDescription'],
          protected: ['parseType', 'parseDescription'],
          public: ['parseType', 'parseDescription'],
          readonly: ['ensureEnd'],
          requires: ['parseNamePath', 'ensureEnd'],
          since: ['parseDescription'],
          static: ['ensureEnd'],
          summary: ['parseDescription'],
          this: ['parseThis', 'ensureEnd'],
          todo: ['parseDescription'],
          typedef: ['parseType', 'parseNamePathOptional'],
          variation: ['parseVariation'],
          version: ['parseDescription'],
        }),
        (N.prototype.parse = function () {
          var A, h, v, P
          if (!this._title && !this.addError('Missing or invalid title'))
            return null
          for (
            this._last = iu(this._title),
              this._options.range &&
                (this._tag.range = [
                  this._first,
                  g.slice(0, this._last).replace(/\s*$/, '').length,
                ].map(w)),
              s(k, this._title)
                ? (v = k[this._title])
                : (v = [
                    'parseType',
                    'parseName',
                    'parseDescription',
                    'epilogue',
                  ]),
              A = 0,
              h = v.length;
            A < h;
            ++A
          )
            if (((P = v[A]), !this[P]())) return null
          return this._tag
        })
      function i(o) {
        var A, h, v
        if (!Ou()) return null
        for (A = wu(), h = new N(o, A), v = h.parse(); B < h._last; ) $()
        return v
      }
      function D(o) {
        var A = '',
          h,
          v
        for (v = !0; B < G && ((h = g.charCodeAt(B)), !(v && h === 64)); )
          a.code.isLineTerminator(h)
            ? (v = !0)
            : v && !a.code.isWhiteSpace(h) && (v = !1),
            (A += $())
        return o ? A : A.trim()
      }
      function y(o, A) {
        var h = [],
          v,
          P,
          b,
          R,
          W
        if (
          (A === void 0 && (A = {}),
          typeof A.unwrap == 'boolean' && A.unwrap ? (g = M(o)) : (g = o),
          (nu = o),
          A.tags)
        )
          if (Array.isArray(A.tags))
            for (b = {}, R = 0, W = A.tags.length; R < W; R++)
              typeof A.tags[R] == 'string'
                ? (b[A.tags[R]] = !0)
                : r.throwError('Invalid "tags" parameter: ' + A.tags)
          else r.throwError('Invalid "tags" parameter: ' + A.tags)
        for (
          G = g.length,
            B = 0,
            j = 0,
            lu = A.recoverable,
            V = A.sloppy,
            Eu = A.strict,
            P = D(A.preserveWhitespace);
          (v = i(A)), !!v;

        )
          (!b || b.hasOwnProperty(v.title)) && h.push(v)
        return {description: P, tags: h}
      }
      C.parse = y
    })((t = {})),
      (u.version = r.VERSION),
      (u.parse = t.parse),
      (u.parseType = e.parseType),
      (u.parseParamType = e.parseParamType),
      (u.unwrapComment = M),
      (u.Syntax = c(e.Syntax)),
      (u.Error = r.DoctrineError),
      (u.type = {
        Syntax: u.Syntax,
        parseType: e.parseType,
        parseParamType: e.parseParamType,
        stringify: e.stringify,
      })
  })()
})(Ze)
const hA = Gu(Ze),
  {combineParameters: yA} = __STORYBOOK_MODULE_PREVIEW_API__
var dA = (u) => {
    switch (u.type) {
      case 'function':
        return {name: 'function'}
      case 'object':
        let e = {}
        return (
          u.signature.properties.forEach((r) => {
            e[r.key] = gu(r.value)
          }),
          {name: 'object', value: e}
        )
      default:
        throw new Error(`Unknown: ${u}`)
    }
  },
  gu = (u) => {
    let {name: e, raw: r} = u,
      t = {}
    switch ((typeof r < 'u' && (t.raw = r), u.name)) {
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return {...t, name: e}
      case 'Array':
        return {...t, name: 'array', value: u.elements.map(gu)}
      case 'signature':
        return {...t, ...dA(u)}
      case 'union':
      case 'intersection':
        return {...t, name: e, value: u.elements.map(gu)}
      default:
        return {...t, name: 'other', value: e}
    }
  },
  vA = (u) => u.name === 'literal',
  gA = (u) => u.value.replace(/['|"]/g, ''),
  mA = (u) => {
    switch (u.type) {
      case 'function':
        return {name: 'function'}
      case 'object':
        let e = {}
        return (
          u.signature.properties.forEach((r) => {
            e[r.key] = Fu(r.value)
          }),
          {name: 'object', value: e}
        )
      default:
        throw new Error(`Unknown: ${u}`)
    }
  },
  Fu = (u) => {
    let {name: e, raw: r} = u,
      t = {}
    switch ((typeof r < 'u' && (t.raw = r), u.name)) {
      case 'literal':
        return {...t, name: 'other', value: u.value}
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return {...t, name: e}
      case 'Array':
        return {...t, name: 'array', value: u.elements.map(Fu)}
      case 'signature':
        return {...t, ...mA(u)}
      case 'union':
        return u.elements.every(vA)
          ? {...t, name: 'enum', value: u.elements.map(gA)}
          : {...t, name: e, value: u.elements.map(Fu)}
      case 'intersection':
        return {...t, name: e, value: u.elements.map(Fu)}
      default:
        return {...t, name: 'other', value: e}
    }
  },
  ar = /^['"]|['"]$/g,
  _A = (u) => u.replace(ar, ''),
  xA = (u) => ar.test(u),
  TA = /^\(.*\) => /,
  Au = (u) => {
    let {name: e, raw: r, computed: t, value: a} = u,
      s = {}
    switch ((typeof r < 'u' && (s.raw = r), e)) {
      case 'enum': {
        let c = t
          ? a
          : a.map((p) => {
              let E = _A(p.value)
              return xA(p.value) || Number.isNaN(Number(E)) ? E : Number(E)
            })
        return {...s, name: e, value: c}
      }
      case 'string':
      case 'number':
      case 'symbol':
        return {...s, name: e}
      case 'func':
        return {...s, name: 'function'}
      case 'bool':
      case 'boolean':
        return {...s, name: 'boolean'}
      case 'arrayOf':
      case 'array':
        return {...s, name: 'array', value: a && Au(a)}
      case 'object':
        return {...s, name: e}
      case 'objectOf':
        return {...s, name: e, value: Au(a)}
      case 'shape':
      case 'exact':
        let n = Z1(a, (c) => Au(c))
        return {...s, name: 'object', value: n}
      case 'union':
        return {...s, name: 'union', value: a.map((c) => Au(c))}
      case 'instanceOf':
      case 'element':
      case 'elementType':
      default: {
        if ((e == null ? void 0 : e.indexOf('|')) > 0)
          try {
            let E = e.split('|').map((T) => JSON.parse(T))
            return {...s, name: 'enum', value: E}
          } catch {}
        let c = a ? `${e}(${a})` : e,
          p = TA.test(e) ? 'function' : 'other'
        return {...s, name: p, value: c}
      }
    }
  },
  Yu = (u) => {
    let {type: e, tsType: r, flowType: t} = u
    return e != null ? Au(e) : r != null ? gu(r) : t != null ? Fu(t) : null
  },
  bA = ((u) => (
    (u.JAVASCRIPT = 'JavaScript'),
    (u.FLOW = 'Flow'),
    (u.TYPESCRIPT = 'TypeScript'),
    (u.UNKNOWN = 'Unknown'),
    u
  ))(bA || {}),
  SA = ['null', 'undefined']
function Zu(u) {
  return SA.some((e) => e === u)
}
var $A = (u) => {
  if (!u) return ''
  if (typeof u == 'string') return u
  throw new Error(`Description: expected string, got: ${JSON.stringify(u)}`)
}
function nr(u) {
  return !!u.__docgenInfo
}
function wA(u) {
  return u != null && Object.keys(u).length > 0
}
function OA(u, e) {
  return nr(u) ? u.__docgenInfo[e] : null
}
function NA(u) {
  return nr(u) && $A(u.__docgenInfo.description)
}
function PA(u) {
  return u != null && u.includes('@')
}
function IA(u, e) {
  let r
  try {
    r = hA.parse(u, {tags: e, sloppy: !0})
  } catch (t) {
    throw (console.error(t), new Error('Cannot parse JSDoc tags.'))
  }
  return r
}
var RA = {
    tags: ['param', 'arg', 'argument', 'returns', 'ignore', 'deprecated'],
  },
  LA = (u, e = RA) => {
    if (!PA(u)) return {includesJsDoc: !1, ignore: !1}
    let r = IA(u, e.tags),
      t = MA(r)
    return t.ignore
      ? {includesJsDoc: !0, ignore: !0}
      : {
          includesJsDoc: !0,
          ignore: !1,
          description: r.description,
          extractedTags: t,
        }
  }
function MA(u) {
  let e = {params: null, deprecated: null, returns: null, ignore: !1}
  for (let r = 0; r < u.tags.length; r += 1) {
    let t = u.tags[r]
    if (t.title === 'ignore') {
      e.ignore = !0
      break
    } else
      switch (t.title) {
        case 'param':
        case 'arg':
        case 'argument': {
          let a = kA(t)
          a != null && (e.params == null && (e.params = []), e.params.push(a))
          break
        }
        case 'deprecated': {
          let a = UA(t)
          a != null && (e.deprecated = a)
          break
        }
        case 'returns': {
          let a = jA(t)
          a != null && (e.returns = a)
          break
        }
      }
  }
  return e
}
function kA(u) {
  let e = u.name
  return e != null && e !== 'null-null'
    ? {
        name: u.name,
        type: u.type,
        description: u.description,
        getPrettyName: () =>
          e.includes('null')
            ? e.replace('-null', '').replace('.null', '')
            : u.name,
        getTypeName: () => (u.type != null ? Z(u.type) : null),
      }
    : null
}
function UA(u) {
  return u.title != null ? u.description : null
}
function jA(u) {
  return u.type != null
    ? {type: u.type, description: u.description, getTypeName: () => Z(u.type)}
    : null
}
function Z(u) {
  return u.type === 'NameExpression'
    ? u.name
    : u.type === 'RecordType'
    ? `({${u.fields
        .map((e) => {
          if (e.value != null) {
            let r = Z(e.value)
            return `${e.key}: ${r}`
          }
          return e.key
        })
        .join(', ')}})`
    : u.type === 'UnionType'
    ? `(${u.elements.map(Z).join('|')})`
    : u.type === 'ArrayType'
    ? '[]'
    : u.type === 'TypeApplication' &&
      u.expression != null &&
      u.expression.name === 'Array'
    ? `${Z(u.applications[0])}[]`
    : u.type === 'NullableType' ||
      u.type === 'NonNullableType' ||
      u.type === 'OptionalType'
    ? Z(u.expression)
    : u.type === 'AllLiteral'
    ? 'any'
    : null
}
function ir(u) {
  return u.length > 90
}
function GA(u) {
  return u.length > 50
}
function O(u, e) {
  return u === e ? {summary: u} : {summary: u, detail: e}
}
function sr({name: u, value: e, elements: r, raw: t}) {
  return e ?? (r != null ? r.map(sr).join(' | ') : t ?? u)
}
function KA({name: u, raw: e, elements: r}) {
  return r != null
    ? O(r.map(sr).join(' | '))
    : e != null
    ? O(e.replace(/^\|\s*/, ''))
    : O(u)
}
function HA({type: u, raw: e}) {
  return e != null ? O(e) : O(u)
}
function WA({type: u, raw: e}) {
  return e != null ? (ir(e) ? O(u, e) : O(e)) : O(u)
}
function qA(u) {
  let {type: e} = u
  return e === 'object' ? WA(u) : HA(u)
}
function zA({name: u, raw: e}) {
  return e != null ? (ir(e) ? O(u, e) : O(e)) : O(u)
}
function VA(u) {
  if (u == null) return null
  switch (u.name) {
    case 'union':
      return KA(u)
    case 'signature':
      return qA(u)
    default:
      return zA(u)
  }
}
function JA(u, e) {
  if (u != null) {
    let {value: r} = u
    if (!Zu(r)) return GA(r) ? O(e.name, r) : O(r)
  }
  return null
}
var QA = (u, e) => {
  let {flowType: r, description: t, required: a, defaultValue: s} = e
  return {
    name: u,
    type: VA(r),
    required: a,
    description: t,
    defaultValue: JA(s, r),
  }
}
function XA({tsType: u, required: e}) {
  return u == null ? null : O(e ? u.name : u.name.replace(' | undefined', ''))
}
function YA({defaultValue: u}) {
  if (u != null) {
    let {value: e} = u
    if (!Zu(e)) return O(e)
  }
  return null
}
var ZA = (u, e) => {
  let {description: r, required: t} = e
  return {
    name: u,
    type: XA(e),
    required: t,
    description: r,
    defaultValue: YA(e),
  }
}
function uo(u) {
  return u != null ? O(u.name) : null
}
function eo(u) {
  let {computed: e, func: r} = u
  return typeof e > 'u' && typeof r > 'u'
}
function ro(u) {
  return u
    ? u.name === 'string'
      ? !0
      : u.name === 'enum'
      ? Array.isArray(u.value) &&
        u.value.every(
          ({value: e}) =>
            typeof e == 'string' && e[0] === '"' && e[e.length - 1] === '"'
        )
      : !1
    : !1
}
function to(u, e) {
  if (u != null) {
    let {value: r} = u
    if (!Zu(r)) return eo(u) && ro(e) ? O(JSON.stringify(r)) : O(r)
  }
  return null
}
function Dr(u, e, r) {
  let {description: t, required: a, defaultValue: s} = r
  return {
    name: u,
    type: uo(e),
    required: a,
    description: t,
    defaultValue: to(s, e),
  }
}
function $u(u, e) {
  var r
  if (e.includesJsDoc) {
    let {description: t, extractedTags: a} = e
    t != null && (u.description = e.description)
    let s = {
      ...a,
      params:
        (r = a == null ? void 0 : a.params) == null
          ? void 0
          : r.map((n) => ({
              name: n.getPrettyName(),
              description: n.description,
            })),
    }
    Object.values(s).filter(Boolean).length > 0 && (u.jsDocTags = s)
  }
  return u
}
var ao = (u, e, r) => {
    let t = Dr(u, e.type, e)
    return (t.sbType = Yu(e)), $u(t, r)
  },
  no = (u, e, r) => {
    let t = ZA(u, e)
    return (t.sbType = Yu(e)), $u(t, r)
  },
  io = (u, e, r) => {
    let t = QA(u, e)
    return (t.sbType = Yu(e)), $u(t, r)
  },
  so = (u, e, r) => {
    let t = Dr(u, {name: 'unknown'}, e)
    return $u(t, r)
  },
  Ar = (u) => {
    switch (u) {
      case 'JavaScript':
        return ao
      case 'TypeScript':
        return no
      case 'Flow':
        return io
      default:
        return so
    }
  },
  or = (u) =>
    u.type != null
      ? 'JavaScript'
      : u.flowType != null
      ? 'Flow'
      : u.tsType != null
      ? 'TypeScript'
      : 'Unknown',
  Do = (u) => {
    let e = or(u[0]),
      r = Ar(e)
    return u.map((t) => {
      var s
      let a = t
      return (
        (s = t.type) != null &&
          s.elements &&
          (a = {...t, type: {...t.type, value: t.type.elements}}),
        Fr(a.name, a, e, r)
      )
    })
  },
  Ao = (u) => {
    let e = Object.keys(u),
      r = or(u[e[0]]),
      t = Ar(r)
    return e
      .map((a) => {
        let s = u[a]
        return s != null ? Fr(a, s, r, t) : null
      })
      .filter(Boolean)
  },
  ho = (u, e) => {
    let r = OA(u, e)
    return wA(r) ? (Array.isArray(r) ? Do(r) : Ao(r)) : []
  }
function Fr(u, e, r, t) {
  let a = LA(e.description)
  return a.includesJsDoc && a.ignore
    ? null
    : {
        propDef: t(u, e, a),
        jsDocTags: a.extractedTags,
        docgenInfo: e,
        typeSystem: r,
      }
}
function yo(u) {
  return u != null && NA(u)
}
var vo = (u) => {
    let {
        component: e,
        argTypes: r,
        parameters: {docs: t = {}},
      } = u,
      {extractArgTypes: a} = t,
      s = a && e ? a(e) : {}
    return s ? yA(s, r) : r
  },
  oo = 'storybook/docs',
  go = `${oo}/snippet-rendered`,
  Fo = ((u) => (
    (u.AUTO = 'auto'), (u.CODE = 'code'), (u.DYNAMIC = 'dynamic'), u
  ))(Fo || {}),
  Co = Ue,
  co = Co(Object.getPrototypeOf, Object),
  mo = co
export {
  M0 as A,
  I0 as B,
  Y0 as C,
  Qi as D,
  PD as E,
  z1 as F,
  bs as G,
  _i as H,
  Di as I,
  Ci as J,
  qu as K,
  H as L,
  di as M,
  mu as N,
  ks as O,
  v0 as P,
  d0 as Q,
  Ge as R,
  go as S,
  bA as T,
  Le as U,
  Fs as V,
  $A as W,
  Ju as X,
  Cu as _,
  ou as a,
  mo as b,
  q as c,
  yo as d,
  vo as e,
  O as f,
  OA as g,
  Fo as h,
  cu as i,
  Bo as j,
  GA as k,
  nr as l,
  ho as m,
  ir as n,
  ht as o,
  je as p,
  Xe as q,
  po as r,
  Me as s,
  Ku as t,
  fo as u,
  Su as v,
  Ye as w,
  qi as x,
  is as y,
  us as z,
}
//# sourceMappingURL=_getPrototype-bc124946.js.map
