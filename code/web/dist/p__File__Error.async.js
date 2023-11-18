(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    ejw3: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('2Taf'),
        a = n.n(r),
        c = n('vZ4D'),
        s = n.n(c),
        o = n('MhPg'),
        i = n.n(o),
        l = n('l4Ni'),
        u = n.n(l),
        p = n('ujKo'),
        d = n.n(p),
        m = n('q1tI'),
        f = n.n(m),
        v = n('jehZ'),
        h = n.n(v),
        x = (n('Pwec'), n('CtXQ')),
        y = n('Y/ft'),
        N = n.n(y),
        w = n('TSYQ'),
        E = n.n(w),
        R = n('hDW5'),
        k = n.n(R);
      function g(e) {
        var t = e.className,
          n = e.type,
          r = e.title,
          a = e.description,
          c = e.extra,
          s = e.actions,
          o = N()(e, ['className', 'type', 'title', 'description', 'extra', 'actions']),
          i = {
            error: f.a.createElement(x['a'], {
              className: k.a.error,
              type: 'close-circle',
              theme: 'filled',
            }),
            success: f.a.createElement(x['a'], {
              className: k.a.success,
              type: 'check-circle',
              theme: 'filled',
            }),
          },
          l = E()(k.a.result, t);
        return f.a.createElement(
          'div',
          h()({ className: l }, o),
          f.a.createElement('div', { className: k.a.icon }, i[n]),
          f.a.createElement('div', { className: k.a.title }, r),
          a && f.a.createElement('div', { className: k.a.description }, a),
          c && f.a.createElement('div', { className: k.a.extra }, c),
          s && f.a.createElement('div', { className: k.a.actions }, s)
        );
      }
      function j(e) {
        var t = D();
        return function() {
          var n,
            r = d()(e);
          if (t) {
            var a = d()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return u()(this, n);
        };
      }
      function D() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      }
      var P = (function(e) {
        i()(n, e);
        var t = j(n);
        function n() {
          var e;
          a()(this, n);
          for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
          return (e = t.call.apply(t, [this].concat(c))), (e.state = {}), e;
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function() {
                return f.a.createElement(g, {
                  style: { marginTop: '100px' },
                  type: 'error',
                  title: '\u6587\u4ef6\u7c7b\u578b\u4e0d\u652f\u6301',
                  description:
                    '\u8be5\u6587\u4ef6\u63a7\u4ef6\u4e0d\u652f\u6301\u6253\u5f00\u8be5\u6587\u4ef6\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u6587\u4ef6',
                });
              },
            },
          ]),
          n
        );
      })(m['Component']);
      t['default'] = P;
    },
    hDW5: function(e, t, n) {
      e.exports = {
        result: 'antd-pro-components-result-index-result',
        icon: 'antd-pro-components-result-index-icon',
        success: 'antd-pro-components-result-index-success',
        error: 'antd-pro-components-result-index-error',
        title: 'antd-pro-components-result-index-title',
        description: 'antd-pro-components-result-index-description',
        extra: 'antd-pro-components-result-index-extra',
        actions: 'antd-pro-components-result-index-actions',
      };
    },
  },
]);
