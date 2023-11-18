(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [12],
  {
    '3wW7': function(t, e, n) {
      t.exports = {
        'ant-list': 'ant-list',
        'ant-list-pagination': 'ant-list-pagination',
        'ant-pagination-options': 'ant-pagination-options',
        'ant-list-more': 'ant-list-more',
        'ant-list-spin': 'ant-list-spin',
        'ant-list-empty-text': 'ant-list-empty-text',
        'ant-list-items': 'ant-list-items',
        'ant-list-item': 'ant-list-item',
        'ant-list-item-content': 'ant-list-item-content',
        'ant-list-item-meta': 'ant-list-item-meta',
        'ant-list-item-meta-avatar': 'ant-list-item-meta-avatar',
        'ant-list-item-meta-content': 'ant-list-item-meta-content',
        'ant-list-item-meta-title': 'ant-list-item-meta-title',
        'ant-list-item-meta-description': 'ant-list-item-meta-description',
        'ant-list-item-action': 'ant-list-item-action',
        'ant-list-item-action-split': 'ant-list-item-action-split',
        'ant-list-header': 'ant-list-header',
        'ant-list-footer': 'ant-list-footer',
        'ant-list-empty': 'ant-list-empty',
        'ant-list-split': 'ant-list-split',
        'ant-list-loading': 'ant-list-loading',
        'ant-list-spin-nested-loading': 'ant-list-spin-nested-loading',
        'ant-list-something-after-last-item': 'ant-list-something-after-last-item',
        'ant-spin-container': 'ant-spin-container',
        'ant-list-lg': 'ant-list-lg',
        'ant-list-sm': 'ant-list-sm',
        'ant-list-vertical': 'ant-list-vertical',
        'ant-list-item-main': 'ant-list-item-main',
        'ant-list-item-extra': 'ant-list-item-extra',
        'ant-list-grid': 'ant-list-grid',
        'ant-col': 'ant-col',
        'ant-list-item-no-flex': 'ant-list-item-no-flex',
        'ant-list-bordered': 'ant-list-bordered',
      };
    },
    '4Ofr': function(t, e, n) {
      t.exports = {
        themeColor: 'antd-pro-components-setting-drawer-theme-color-themeColor',
        title: 'antd-pro-components-setting-drawer-theme-color-title',
        colorBlock: 'antd-pro-components-setting-drawer-theme-color-colorBlock',
      };
    },
    BFsb: function(t, e, n) {
      t.exports = {
        content: 'antd-pro-components-setting-drawer-index-content',
        blockChecbox: 'antd-pro-components-setting-drawer-index-blockChecbox',
        item: 'antd-pro-components-setting-drawer-index-item',
        selectIcon: 'antd-pro-components-setting-drawer-index-selectIcon',
        color_block: 'antd-pro-components-setting-drawer-index-color_block',
        title: 'antd-pro-components-setting-drawer-index-title',
        handle: 'antd-pro-components-setting-drawer-index-handle',
        productionHint: 'antd-pro-components-setting-drawer-index-productionHint',
      };
    },
    P5Jw: function(t, e, n) {
      'use strict';
      var r = n('rHrb'),
        o = r.CopyToClipboard;
      (o.CopyToClipboard = o), (t.exports = o);
    },
    PceP: function(t, e, n) {
      'use strict';
      n.r(e);
      n('bbsP');
      var r = n('/wGt'),
        o = (n('cIOH'), n('YkAm'), n('q1tI')),
        a = n.n(o),
        i = n('i8i4'),
        c = n('MFj2'),
        l = n('eHJ2'),
        s = n.n(l),
        u = n('CtXQ'),
        p = n('H84U'),
        f = n('RqAY'),
        m = n('6CfX');
      function d(t) {
        '@babel/helpers - typeof';
        return (
          (d =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          d(t)
        );
      }
      function y() {
        return (
          (y =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          y.apply(this, arguments)
        );
      }
      function g(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function b(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function v(t, e, n) {
        return e && h(t.prototype, e), n && h(t, n), t;
      }
      function O(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && E(t, e);
      }
      function E(t, e) {
        return (
          (E =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          E(t, e)
        );
      }
      function w(t) {
        var e = k();
        return function() {
          var n,
            r = S(t);
          if (e) {
            var o = S(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return j(this, n);
        };
      }
      function j(t, e) {
        return !e || ('object' !== d(e) && 'function' !== typeof e) ? C(t) : e;
      }
      function C(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function k() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function S(t) {
        return (
          (S = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          S(t)
        );
      }
      function x() {}
      var P = (function(t) {
          O(n, t);
          var e = w(n);
          function n(t) {
            var r;
            return (
              b(this, n),
              (r = e.call(this, t)),
              (r.handleClose = function(t) {
                t.preventDefault();
                var e = i['findDOMNode'](C(r));
                (e.style.height = ''.concat(e.offsetHeight, 'px')),
                  (e.style.height = ''.concat(e.offsetHeight, 'px')),
                  r.setState({ closing: !0 }),
                  (r.props.onClose || x)(t);
              }),
              (r.animationEnd = function() {
                r.setState({ closing: !1, closed: !0 }), (r.props.afterClose || x)();
              }),
              (r.renderAlert = function(t) {
                var e,
                  n = t.getPrefixCls,
                  a = r.props,
                  i = a.description,
                  l = a.prefixCls,
                  p = a.message,
                  m = a.closeText,
                  d = a.banner,
                  b = a.className,
                  h = void 0 === b ? '' : b,
                  v = a.style,
                  O = a.icon,
                  E = r.props,
                  w = E.closable,
                  j = E.type,
                  C = E.showIcon,
                  k = E.iconType,
                  S = r.state,
                  x = S.closing,
                  P = S.closed,
                  N = n('alert', l);
                (C = !(!d || void 0 !== C) || C), (j = d && void 0 === j ? 'warning' : j || 'info');
                var M = 'filled';
                if (!k) {
                  switch (j) {
                    case 'success':
                      k = 'check-circle';
                      break;
                    case 'info':
                      k = 'info-circle';
                      break;
                    case 'error':
                      k = 'close-circle';
                      break;
                    case 'warning':
                      k = 'exclamation-circle';
                      break;
                    default:
                      k = 'default';
                  }
                  i && (M = 'outlined');
                }
                m && (w = !0);
                var R = s()(
                    N,
                    ''.concat(N, '-').concat(j),
                    ((e = {}),
                    g(e, ''.concat(N, '-closing'), x),
                    g(e, ''.concat(N, '-with-description'), !!i),
                    g(e, ''.concat(N, '-no-icon'), !C),
                    g(e, ''.concat(N, '-banner'), !!d),
                    g(e, ''.concat(N, '-closable'), w),
                    e),
                    h
                  ),
                  _ = w
                    ? o['createElement'](
                        'button',
                        {
                          type: 'button',
                          onClick: r.handleClose,
                          className: ''.concat(N, '-close-icon'),
                          tabIndex: 0,
                        },
                        m
                          ? o['createElement'](
                              'span',
                              { className: ''.concat(N, '-close-text') },
                              m
                            )
                          : o['createElement'](u['a'], { type: 'close' })
                      )
                    : null,
                  I = Object(f['a'])(r.props),
                  A =
                    (O &&
                      (o['isValidElement'](O)
                        ? o['cloneElement'](O, {
                            className: s()(
                              ''.concat(N, '-icon'),
                              g({}, O.props.className, O.props.className)
                            ),
                          })
                        : o['createElement']('span', { className: ''.concat(N, '-icon') }, O))) ||
                    o['createElement'](u['a'], {
                      className: ''.concat(N, '-icon'),
                      type: k,
                      theme: M,
                    });
                return P
                  ? null
                  : o['createElement'](
                      c['a'],
                      {
                        component: '',
                        showProp: 'data-show',
                        transitionName: ''.concat(N, '-slide-up'),
                        onEnd: r.animationEnd,
                      },
                      o['createElement'](
                        'div',
                        y({ 'data-show': !x, className: R, style: v }, I),
                        C ? A : null,
                        o['createElement']('span', { className: ''.concat(N, '-message') }, p),
                        o['createElement']('span', { className: ''.concat(N, '-description') }, i),
                        _
                      )
                    );
              }),
              Object(m['a'])(
                !('iconType' in t),
                'Alert',
                '`iconType` is deprecated. Please use `icon` instead.'
              ),
              (r.state = { closing: !1, closed: !1 }),
              r
            );
          }
          return (
            v(n, [
              {
                key: 'render',
                value: function() {
                  return o['createElement'](p['a'], null, this.renderAlert);
                },
              },
            ]),
            n
          );
        })(o['Component']),
        N = (n('+L6B'), n('2/Rp')),
        M = (n('miYZ'), n('tsqr')),
        R = (n('/zsF'), n('PArb')),
        _ = (n('Pwec'), n('5Dmo'), n('3S7+')),
        I = (n('3wW7'), n('R9oj'), n('T2oS'), n('DjyN'), n('1GLa'), n('17x9')),
        A = n('BGR+'),
        T = n('W9HT'),
        z = n('NUBc'),
        D = n('qrJ5'),
        L = n('/kpp');
      function H(t) {
        if (!o['isValidElement'](t)) return t;
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
          n[r - 1] = arguments[r];
        return o['cloneElement'].apply(o, [t].concat(n));
      }
      function B(t) {
        '@babel/helpers - typeof';
        return (
          (B =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          B(t)
        );
      }
      function F(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function q(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function J(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function W(t, e, n) {
        return e && J(t.prototype, e), n && J(t, n), t;
      }
      function Y(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && U(t, e);
      }
      function U(t, e) {
        return (
          (U =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          U(t, e)
        );
      }
      function K(t) {
        var e = G();
        return function() {
          var n,
            r = X(t);
          if (e) {
            var o = X(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Q(this, n);
        };
      }
      function Q(t, e) {
        return !e || ('object' !== B(e) && 'function' !== typeof e) ? Z(t) : e;
      }
      function Z(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function G() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function X(t) {
        return (
          (X = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          X(t)
        );
      }
      function V() {
        return (
          (V =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          V.apply(this, arguments)
        );
      }
      var $ = function(t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
              e.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                (n[r[o]] = t[r[o]]);
          }
          return n;
        },
        tt = function(t) {
          return o['createElement'](p['a'], null, function(e) {
            var n = e.getPrefixCls,
              r = t.prefixCls,
              a = t.className,
              i = t.avatar,
              c = t.title,
              l = t.description,
              u = $(t, ['prefixCls', 'className', 'avatar', 'title', 'description']),
              p = n('list', r),
              f = s()(''.concat(p, '-item-meta'), a),
              m = o['createElement'](
                'div',
                { className: ''.concat(p, '-item-meta-content') },
                c && o['createElement']('h4', { className: ''.concat(p, '-item-meta-title') }, c),
                l &&
                  o['createElement'](
                    'div',
                    { className: ''.concat(p, '-item-meta-description') },
                    l
                  )
              );
            return o['createElement'](
              'div',
              V({}, u, { className: f }),
              i && o['createElement']('div', { className: ''.concat(p, '-item-meta-avatar') }, i),
              (c || l) && m
            );
          });
        };
      function et(t, e) {
        return t[e] && Math.floor(24 / t[e]);
      }
      var nt = (function(t) {
        Y(n, t);
        var e = K(n);
        function n() {
          var t;
          return (
            q(this, n),
            (t = e.apply(this, arguments)),
            (t.renderItem = function(e) {
              var n = e.getPrefixCls,
                r = t.context,
                a = r.grid,
                i = r.itemLayout,
                c = t.props,
                l = c.prefixCls,
                u = c.children,
                p = c.actions,
                f = c.extra,
                m = c.className,
                d = $(c, ['prefixCls', 'children', 'actions', 'extra', 'className']),
                y = n('list', l),
                g =
                  p &&
                  p.length > 0 &&
                  o['createElement'](
                    'ul',
                    { className: ''.concat(y, '-item-action'), key: 'actions' },
                    p.map(function(t, e) {
                      return o['createElement'](
                        'li',
                        { key: ''.concat(y, '-item-action-').concat(e) },
                        t,
                        e !== p.length - 1 &&
                          o['createElement']('em', {
                            className: ''.concat(y, '-item-action-split'),
                          })
                      );
                    })
                  ),
                b = a ? 'div' : 'li',
                h = o['createElement'](
                  b,
                  V({}, d, {
                    className: s()(
                      ''.concat(y, '-item'),
                      m,
                      F({}, ''.concat(y, '-item-no-flex'), !t.isFlexMode())
                    ),
                  }),
                  'vertical' === i && f
                    ? [
                        o['createElement'](
                          'div',
                          { className: ''.concat(y, '-item-main'), key: 'content' },
                          u,
                          g
                        ),
                        o['createElement'](
                          'div',
                          { className: ''.concat(y, '-item-extra'), key: 'extra' },
                          f
                        ),
                      ]
                    : [u, g, H(f, { key: 'extra' })]
                );
              return a
                ? o['createElement'](
                    L['a'],
                    {
                      span: et(a, 'column'),
                      xs: et(a, 'xs'),
                      sm: et(a, 'sm'),
                      md: et(a, 'md'),
                      lg: et(a, 'lg'),
                      xl: et(a, 'xl'),
                      xxl: et(a, 'xxl'),
                    },
                    h
                  )
                : h;
            }),
            t
          );
        }
        return (
          W(n, [
            {
              key: 'isItemContainsTextNodeAndNotSingular',
              value: function() {
                var t,
                  e = this.props.children;
                return (
                  o['Children'].forEach(e, function(e) {
                    'string' === typeof e && (t = !0);
                  }),
                  t && o['Children'].count(e) > 1
                );
              },
            },
            {
              key: 'isFlexMode',
              value: function() {
                var t = this.props.extra,
                  e = this.context.itemLayout;
                return 'vertical' === e ? !!t : !this.isItemContainsTextNodeAndNotSingular();
              },
            },
            {
              key: 'render',
              value: function() {
                return o['createElement'](p['a'], null, this.renderItem);
              },
            },
          ]),
          n
        );
      })(o['Component']);
      function rt(t) {
        '@babel/helpers - typeof';
        return (
          (rt =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          rt(t)
        );
      }
      function ot(t) {
        return lt(t) || ct(t) || it(t) || at();
      }
      function at() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function it(t, e) {
        if (t) {
          if ('string' === typeof t) return st(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? st(t, e)
              : void 0
          );
        }
      }
      function ct(t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }
      function lt(t) {
        if (Array.isArray(t)) return st(t);
      }
      function st(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function ut() {
        return (
          (ut =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          ut.apply(this, arguments)
        );
      }
      function pt(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ft(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function mt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function dt(t, e, n) {
        return e && mt(t.prototype, e), n && mt(t, n), t;
      }
      function yt(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && gt(t, e);
      }
      function gt(t, e) {
        return (
          (gt =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          gt(t, e)
        );
      }
      function bt(t) {
        var e = Ot();
        return function() {
          var n,
            r = Et(t);
          if (e) {
            var o = Et(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return ht(this, n);
        };
      }
      function ht(t, e) {
        return !e || ('object' !== rt(e) && 'function' !== typeof e) ? vt(t) : e;
      }
      function vt(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function Ot() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function Et(t) {
        return (
          (Et = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Et(t)
        );
      }
      (nt.Meta = tt), (nt.contextTypes = { grid: I['any'], itemLayout: I['string'] });
      var wt = function(t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
              e.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                (n[r[o]] = t[r[o]]);
          }
          return n;
        },
        jt = (function(t) {
          yt(n, t);
          var e = bt(n);
          function n(t) {
            var r;
            ft(this, n),
              (r = e.call(this, t)),
              (r.defaultPaginationProps = { current: 1, total: 0 }),
              (r.keys = {}),
              (r.onPaginationChange = r.triggerPaginationEvent('onChange')),
              (r.onPaginationShowSizeChange = r.triggerPaginationEvent('onShowSizeChange')),
              (r.renderItem = function(t, e) {
                var n,
                  o = r.props,
                  a = o.renderItem,
                  i = o.rowKey;
                return a
                  ? ((n = 'function' === typeof i ? i(t) : 'string' === typeof i ? t[i] : t.key),
                    n || (n = 'list-item-'.concat(e)),
                    (r.keys[e] = n),
                    a(t, e))
                  : null;
              }),
              (r.renderEmpty = function(t, e) {
                var n = r.props.locale;
                return o['createElement'](
                  'div',
                  { className: ''.concat(t, '-empty-text') },
                  (n && n.emptyText) || e('List')
                );
              }),
              (r.renderList = function(t) {
                var e,
                  n = t.getPrefixCls,
                  a = t.renderEmpty,
                  i = r.state,
                  c = i.paginationCurrent,
                  l = i.paginationSize,
                  u = r.props,
                  p = u.prefixCls,
                  f = u.bordered,
                  m = u.split,
                  d = u.className,
                  y = u.children,
                  g = u.itemLayout,
                  b = u.loadMore,
                  h = u.pagination,
                  v = u.grid,
                  O = u.dataSource,
                  E = void 0 === O ? [] : O,
                  w = u.size,
                  j = u.header,
                  C = u.footer,
                  k = u.loading,
                  S = wt(u, [
                    'prefixCls',
                    'bordered',
                    'split',
                    'className',
                    'children',
                    'itemLayout',
                    'loadMore',
                    'pagination',
                    'grid',
                    'dataSource',
                    'size',
                    'header',
                    'footer',
                    'loading',
                  ]),
                  x = n('list', p),
                  P = k;
                'boolean' === typeof P && (P = { spinning: P });
                var N = P && P.spinning,
                  M = '';
                switch (w) {
                  case 'large':
                    M = 'lg';
                    break;
                  case 'small':
                    M = 'sm';
                    break;
                  default:
                    break;
                }
                var R = s()(
                    x,
                    d,
                    ((e = {}),
                    pt(e, ''.concat(x, '-vertical'), 'vertical' === g),
                    pt(e, ''.concat(x, '-').concat(M), M),
                    pt(e, ''.concat(x, '-split'), m),
                    pt(e, ''.concat(x, '-bordered'), f),
                    pt(e, ''.concat(x, '-loading'), N),
                    pt(e, ''.concat(x, '-grid'), v),
                    pt(e, ''.concat(x, '-something-after-last-item'), r.isSomethingAfterLastItem()),
                    e)
                  ),
                  _ = ut(
                    ut(ut({}, r.defaultPaginationProps), {
                      total: E.length,
                      current: c,
                      pageSize: l,
                    }),
                    h || {}
                  ),
                  I = Math.ceil(_.total / _.pageSize);
                _.current > I && (_.current = I);
                var L,
                  H = h
                    ? o['createElement'](
                        'div',
                        { className: ''.concat(x, '-pagination') },
                        o['createElement'](
                          z['a'],
                          ut({}, _, {
                            onChange: r.onPaginationChange,
                            onShowSizeChange: r.onPaginationShowSizeChange,
                          })
                        )
                      )
                    : null,
                  B = ot(E);
                if (
                  (h &&
                    E.length > (_.current - 1) * _.pageSize &&
                    (B = ot(E).splice((_.current - 1) * _.pageSize, _.pageSize)),
                  (L = N && o['createElement']('div', { style: { minHeight: 53 } })),
                  B.length > 0)
                ) {
                  var F = B.map(function(t, e) {
                      return r.renderItem(t, e);
                    }),
                    q = [];
                  o['Children'].forEach(F, function(t, e) {
                    q.push(o['cloneElement'](t, { key: r.keys[e] }));
                  }),
                    (L = v
                      ? o['createElement'](D['a'], { gutter: v.gutter }, q)
                      : o['createElement']('ul', { className: ''.concat(x, '-items') }, q));
                } else y || N || (L = r.renderEmpty(x, a));
                var J = _.position || 'bottom';
                return o['createElement'](
                  'div',
                  ut({ className: R }, Object(A['a'])(S, ['rowKey', 'renderItem', 'locale'])),
                  ('top' === J || 'both' === J) && H,
                  j && o['createElement']('div', { className: ''.concat(x, '-header') }, j),
                  o['createElement'](T['a'], P, L, y),
                  C && o['createElement']('div', { className: ''.concat(x, '-footer') }, C),
                  b || (('bottom' === J || 'both' === J) && H)
                );
              });
            var a = t.pagination,
              i = a && 'object' === rt(a) ? a : {};
            return (
              (r.state = {
                paginationCurrent: i.defaultCurrent || 1,
                paginationSize: i.defaultPageSize || 10,
              }),
              r
            );
          }
          return (
            dt(n, [
              {
                key: 'getChildContext',
                value: function() {
                  return { grid: this.props.grid, itemLayout: this.props.itemLayout };
                },
              },
              {
                key: 'triggerPaginationEvent',
                value: function(t) {
                  var e = this;
                  return function(n, r) {
                    var o = e.props.pagination;
                    e.setState({ paginationCurrent: n, paginationSize: r }),
                      o && o[t] && o[t](n, r);
                  };
                },
              },
              {
                key: 'isSomethingAfterLastItem',
                value: function() {
                  var t = this.props,
                    e = t.loadMore,
                    n = t.pagination,
                    r = t.footer;
                  return !!(e || n || r);
                },
              },
              {
                key: 'render',
                value: function() {
                  return o['createElement'](p['a'], null, this.renderList);
                },
              },
            ]),
            n
          );
        })(o['Component']);
      (jt.Item = nt),
        (jt.childContextTypes = { grid: I['any'], itemLayout: I['string'] }),
        (jt.defaultProps = {
          dataSource: [],
          bordered: !1,
          split: !0,
          loading: !1,
          pagination: !1,
        });
      n('BoS7');
      var Ct,
        kt,
        St = n('Sdc0'),
        xt = n('2Taf'),
        Pt = n.n(xt),
        Nt = n('vZ4D'),
        Mt = n.n(Nt),
        Rt = n('MhPg'),
        _t = n.n(Rt),
        It = n('l4Ni'),
        At = n.n(It),
        Tt = n('ujKo'),
        zt = n.n(Tt),
        Dt = n('p0pE'),
        Lt = n.n(Dt),
        Ht = (n('OaEy'), n('2fM7')),
        Bt = n('Y2fQ'),
        Ft = n('P5Jw'),
        qt = n('MuoO'),
        Jt = n('BFsb'),
        Wt = n.n(Jt),
        Yt = n('jehZ'),
        Ut = n.n(Yt),
        Kt = n('Y/ft'),
        Qt = n.n(Kt),
        Zt = n('4Ofr'),
        Gt = n.n(Zt),
        Xt = function(t) {
          var e = t.color,
            n = t.check,
            r = Qt()(t, ['color', 'check']);
          return a.a.createElement(
            'div',
            Ut()({}, r, { style: { backgroundColor: e } }),
            n ? a.a.createElement(u['a'], { type: 'check' }) : ''
          );
        },
        Vt = function(t) {
          var e = t.colors,
            n = t.title,
            r = t.value,
            o = t.onChange,
            i = e;
          return (
            e ||
              (i = [
                { key: 'dust', color: '#F5222D' },
                { key: 'volcano', color: '#FA541C' },
                { key: 'sunset', color: '#FAAD14' },
                { key: 'cyan', color: '#13C2C2' },
                { key: 'green', color: '#52C41A' },
                { key: 'daybreak', color: '#1890FF' },
                { key: 'geekblue', color: '#2F54EB' },
                { key: 'purple', color: '#722ED1' },
              ]),
            a.a.createElement(
              'div',
              { className: Gt.a.themeColor },
              a.a.createElement('h3', { className: Gt.a.title }, n),
              a.a.createElement(
                'div',
                { className: Gt.a.content },
                i.map(function(t) {
                  var e = t.key,
                    n = t.color;
                  return a.a.createElement(
                    _['a'],
                    {
                      key: n,
                      title: Object(Bt['formatMessage'])({
                        id: 'app.setting.themecolor.'.concat(e),
                      }),
                    },
                    a.a.createElement(Xt, {
                      className: Gt.a.colorBlock,
                      color: n,
                      check: r === n,
                      onClick: function() {
                        return o && o(n);
                      },
                    })
                  );
                })
              )
            )
          );
        },
        $t = Vt,
        te = function(t) {
          var e = t.value,
            n = t.onChange,
            r = t.list;
          return a.a.createElement(
            'div',
            { className: Wt.a.blockChecbox, key: e },
            r.map(function(t) {
              return a.a.createElement(
                _['a'],
                { title: t.title, key: t.key },
                a.a.createElement(
                  'div',
                  {
                    className: Wt.a.item,
                    onClick: function() {
                      return n(t.key);
                    },
                  },
                  a.a.createElement('img', { src: t.url, alt: t.key }),
                  a.a.createElement(
                    'div',
                    {
                      className: Wt.a.selectIcon,
                      style: { display: e === t.key ? 'block' : 'none' },
                    },
                    a.a.createElement(u['a'], { type: 'check' })
                  )
                )
              );
            })
          );
        },
        ee = te;
      function ne(t) {
        var e = re();
        return function() {
          var n,
            r = zt()(t);
          if (e) {
            var o = zt()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return At()(this, n);
        };
      }
      function re() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      var oe = Ht['a'].Option,
        ae = function(t) {
          var e = t.children,
            n = t.title,
            r = t.style;
          return a.a.createElement(
            'div',
            { style: Lt()({}, r, { marginBottom: 24 }) },
            a.a.createElement('h3', { className: Wt.a.title }, n),
            e
          );
        },
        ie =
          ((Ct = Object(qt['connect'])(function(t) {
            var e = t.setting;
            return { setting: e };
          })),
          Ct(
            (kt = (function(t) {
              _t()(n, t);
              var e = ne(n);
              function n() {
                var t;
                Pt()(this, n);
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                  o[i] = arguments[i];
                return (
                  (t = e.call.apply(e, [this].concat(o))),
                  (t.state = { collapse: !1 }),
                  (t.getLayoutSetting = function() {
                    var e = t.props.setting,
                      n = e.contentWidth,
                      r = e.fixedHeader,
                      o = e.layout,
                      i = e.autoHideHeader,
                      c = e.fixSiderbar;
                    return [
                      {
                        title: Object(Bt['formatMessage'])({ id: 'app.setting.content-width' }),
                        action: a.a.createElement(
                          Ht['a'],
                          {
                            value: n,
                            size: 'small',
                            onSelect: function(e) {
                              return t.changeSetting('contentWidth', e);
                            },
                            style: { width: 80 },
                          },
                          'sidemenu' === o
                            ? null
                            : a.a.createElement(
                                oe,
                                { value: 'Fixed' },
                                Object(Bt['formatMessage'])({
                                  id: 'app.setting.content-width.fixed',
                                })
                              ),
                          a.a.createElement(
                            oe,
                            { value: 'Fluid' },
                            Object(Bt['formatMessage'])({ id: 'app.setting.content-width.fluid' })
                          )
                        ),
                      },
                      {
                        title: Object(Bt['formatMessage'])({ id: 'app.setting.fixedheader' }),
                        action: a.a.createElement(St['a'], {
                          size: 'small',
                          checked: !!r,
                          onChange: function(e) {
                            return t.changeSetting('fixedHeader', e);
                          },
                        }),
                      },
                      {
                        title: Object(Bt['formatMessage'])({ id: 'app.setting.hideheader' }),
                        disabled: !r,
                        disabledReason: Object(Bt['formatMessage'])({
                          id: 'app.setting.hideheader.hint',
                        }),
                        action: a.a.createElement(St['a'], {
                          size: 'small',
                          checked: !!i,
                          onChange: function(e) {
                            return t.changeSetting('autoHideHeader', e);
                          },
                        }),
                      },
                      {
                        title: Object(Bt['formatMessage'])({ id: 'app.setting.fixedsidebar' }),
                        disabled: 'topmenu' === o,
                        disabledReason: Object(Bt['formatMessage'])({
                          id: 'app.setting.fixedsidebar.hint',
                        }),
                        action: a.a.createElement(St['a'], {
                          size: 'small',
                          checked: !!c,
                          onChange: function(e) {
                            return t.changeSetting('fixSiderbar', e);
                          },
                        }),
                      },
                    ];
                  }),
                  (t.changeSetting = function(e, n) {
                    var r = t.props.setting,
                      o = Lt()({}, r);
                    (o[e] = n),
                      'layout' === e
                        ? (o.contentWidth = 'topmenu' === n ? 'Fixed' : 'Fluid')
                        : 'fixedHeader' !== e || n || (o.autoHideHeader = !1),
                      t.setState(o, function() {
                        var e = t.props.dispatch;
                        e({ type: 'setting/changeSetting', payload: t.state });
                      });
                  }),
                  (t.togglerContent = function() {
                    var e = t.state.collapse;
                    t.setState({ collapse: !e });
                  }),
                  (t.renderLayoutSettingItem = function(t) {
                    var e = a.a.cloneElement(t.action, { disabled: t.disabled });
                    return a.a.createElement(
                      _['a'],
                      { title: t.disabled ? t.disabledReason : '', placement: 'left' },
                      a.a.createElement(
                        jt.Item,
                        { actions: [e] },
                        a.a.createElement(
                          'span',
                          { style: { opacity: t.disabled ? '0.5' : '' } },
                          t.title
                        )
                      )
                    );
                  }),
                  t
                );
              }
              return (
                Mt()(n, [
                  {
                    key: 'render',
                    value: function() {
                      var t = this,
                        e = this.props.setting,
                        n = e.navTheme,
                        o = e.primaryColor,
                        i = e.layout,
                        c = e.colorWeak,
                        l = this.state.collapse;
                      return a.a.createElement(
                        r['a'],
                        {
                          visible: l,
                          width: 300,
                          onClose: this.togglerContent,
                          placement: 'right',
                          handler: a.a.createElement(
                            'div',
                            { className: Wt.a.handle, onClick: this.togglerContent },
                            a.a.createElement(u['a'], {
                              type: l ? 'close' : 'setting',
                              style: { color: '#fff', fontSize: 20 },
                            })
                          ),
                          style: { zIndex: 999 },
                        },
                        a.a.createElement(
                          'div',
                          { className: Wt.a.content },
                          a.a.createElement(
                            ae,
                            { title: Object(Bt['formatMessage'])({ id: 'app.setting.pagestyle' }) },
                            a.a.createElement(ee, {
                              list: [
                                {
                                  key: 'dark',
                                  url:
                                    'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
                                  title: Object(Bt['formatMessage'])({
                                    id: 'app.setting.pagestyle.dark',
                                  }),
                                },
                                {
                                  key: 'light',
                                  url:
                                    'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
                                  title: Object(Bt['formatMessage'])({
                                    id: 'app.setting.pagestyle.light',
                                  }),
                                },
                              ],
                              value: n,
                              onChange: function(e) {
                                return t.changeSetting('navTheme', e);
                              },
                            })
                          ),
                          a.a.createElement($t, {
                            title: Object(Bt['formatMessage'])({ id: 'app.setting.themecolor' }),
                            value: o,
                            onChange: function(e) {
                              return t.changeSetting('primaryColor', e);
                            },
                          }),
                          a.a.createElement(R['a'], null),
                          a.a.createElement(
                            ae,
                            {
                              title: Object(Bt['formatMessage'])({
                                id: 'app.setting.navigationmode',
                              }),
                            },
                            a.a.createElement(ee, {
                              list: [
                                {
                                  key: 'sidemenu',
                                  url:
                                    'https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg',
                                  title: Object(Bt['formatMessage'])({
                                    id: 'app.setting.sidemenu',
                                  }),
                                },
                                {
                                  key: 'topmenu',
                                  url:
                                    'https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg',
                                  title: Object(Bt['formatMessage'])({ id: 'app.setting.topmenu' }),
                                },
                              ],
                              value: i,
                              onChange: function(e) {
                                return t.changeSetting('layout', e);
                              },
                            })
                          ),
                          a.a.createElement(jt, {
                            split: !1,
                            dataSource: this.getLayoutSetting(),
                            renderItem: this.renderLayoutSettingItem,
                          }),
                          a.a.createElement(R['a'], null),
                          a.a.createElement(
                            ae,
                            {
                              title: Object(Bt['formatMessage'])({
                                id: 'app.setting.othersettings',
                              }),
                            },
                            a.a.createElement(jt, {
                              split: !1,
                              renderItem: this.renderLayoutSettingItem,
                              dataSource: [
                                {
                                  title: Object(Bt['formatMessage'])({
                                    id: 'app.setting.weakmode',
                                  }),
                                  action: a.a.createElement(St['a'], {
                                    size: 'small',
                                    checked: !!c,
                                    onChange: function(e) {
                                      return t.changeSetting('colorWeak', e);
                                    },
                                  }),
                                },
                              ],
                            })
                          ),
                          a.a.createElement(R['a'], null),
                          a.a.createElement(
                            Ft['CopyToClipboard'],
                            {
                              text: JSON.stringify(Object(A['a'])(e, ['colorWeak']), null, 2),
                              onCopy: function() {
                                return M['a'].success(
                                  Object(Bt['formatMessage'])({ id: 'app.setting.copyinfo' })
                                );
                              },
                            },
                            a.a.createElement(
                              N['a'],
                              { block: !0, icon: 'copy' },
                              Object(Bt['formatMessage'])({ id: 'app.setting.copy' })
                            )
                          ),
                          a.a.createElement(P, {
                            type: 'warning',
                            className: Wt.a.productionHint,
                            message: a.a.createElement(
                              'div',
                              null,
                              Object(Bt['formatMessage'])({ id: 'app.setting.production.hint' }),
                              ' ',
                              a.a.createElement(
                                'a',
                                {
                                  href: 'https://u.ant.design/pro-v2-default-settings',
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                },
                                'src/defaultSettings.js'
                              )
                            ),
                          })
                        )
                      );
                    },
                  },
                ]),
                n
              );
            })(o['Component']))
          ) || kt);
      e['default'] = ie;
    },
    YkAm: function(t, e, n) {
      t.exports = {
        'ant-alert': 'ant-alert',
        'ant-alert-no-icon': 'ant-alert-no-icon',
        'ant-alert-closable': 'ant-alert-closable',
        'ant-alert-icon': 'ant-alert-icon',
        'ant-alert-description': 'ant-alert-description',
        'ant-alert-success': 'ant-alert-success',
        'ant-alert-info': 'ant-alert-info',
        'ant-alert-warning': 'ant-alert-warning',
        'ant-alert-error': 'ant-alert-error',
        'ant-alert-close-icon': 'ant-alert-close-icon',
        'anticon-close': 'anticon-close',
        'ant-alert-close-text': 'ant-alert-close-text',
        'ant-alert-with-description': 'ant-alert-with-description',
        'ant-alert-message': 'ant-alert-message',
        'ant-alert-closing': 'ant-alert-closing',
        'ant-alert-slide-up-leave': 'ant-alert-slide-up-leave',
        antAlertSlideUpOut: 'antAlertSlideUpOut',
        'ant-alert-banner': 'ant-alert-banner',
        antAlertSlideUpIn: 'antAlertSlideUpIn',
      };
    },
    rHrb: function(t, e, n) {
      'use strict';
      function r(t) {
        '@babel/helpers - typeof';
        return (
          (r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          r(t)
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.CopyToClipboard = void 0);
      var o = c(n('q1tI')),
        a = c(n('+QRC')),
        i = ['text', 'onCopy', 'options', 'children'];
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function(e) {
                w(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function u(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = p(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]));
        }
        return o;
      }
      function p(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          a = Object.keys(t);
        for (r = 0; r < a.length; r++) (n = a[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }
      function f(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function m(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function d(t, e, n) {
        return (
          e && m(t.prototype, e),
          n && m(t, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          t
        );
      }
      function y(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          e && g(t, e);
      }
      function g(t, e) {
        return (
          (g =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          g(t, e)
        );
      }
      function b(t) {
        var e = O();
        return function() {
          var n,
            r = E(t);
          if (e) {
            var o = E(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return h(this, n);
        };
      }
      function h(t, e) {
        if (e && ('object' === r(e) || 'function' === typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError('Derived constructors may only return object or undefined');
        return v(t);
      }
      function v(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function O() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function E(t) {
        return (
          (E = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          E(t)
        );
      }
      function w(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var j = (function(t) {
        y(n, t);
        var e = b(n);
        function n() {
          var t;
          f(this, n);
          for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c];
          return (
            (t = e.call.apply(e, [this].concat(i))),
            w(v(t), 'onClick', function(e) {
              var n = t.props,
                r = n.text,
                i = n.onCopy,
                c = n.children,
                l = n.options,
                s = o['default'].Children.only(c),
                u = (0, a['default'])(r, l);
              i && i(r, u),
                s && s.props && 'function' === typeof s.props.onClick && s.props.onClick(e);
            }),
            t
          );
        }
        return (
          d(n, [
            {
              key: 'render',
              value: function() {
                var t = this.props,
                  e = (t.text, t.onCopy, t.options, t.children),
                  n = u(t, i),
                  r = o['default'].Children.only(e);
                return o['default'].cloneElement(r, s(s({}, n), {}, { onClick: this.onClick }));
              },
            },
          ]),
          n
        );
      })(o['default'].PureComponent);
      (e.CopyToClipboard = j), w(j, 'defaultProps', { onCopy: void 0, options: void 0 });
    },
  },
]);
