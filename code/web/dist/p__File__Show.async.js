(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    '0yDM': function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = a(n('TSYQ')),
        v = {
          actions: c['default'].object,
          player: c['default'].object,
          className: c['default'].string,
        },
        p = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.handleClick = i.handleClick.bind((0, u['default'])(i))),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              {
                key: 'handleClick',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.player;
                  n.paused ? t.play() : t.pause();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.player,
                    i = t.className,
                    a = n.paused ? 'Play' : 'Pause';
                  return h['default'].createElement(
                    'button',
                    {
                      ref: function(t) {
                        e.button = t;
                      },
                      className: (0, f['default'])(i, {
                        'video-react-play-control': !0,
                        'video-react-control': !0,
                        'video-react-button': !0,
                        'video-react-paused': n.paused,
                        'video-react-playing': !n.paused,
                      }),
                      type: 'button',
                      tabIndex: '0',
                      onClick: this.handleClick,
                    },
                    h['default'].createElement('span', { className: 'video-react-control-text' }, a)
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t['default'] = p), (p.propTypes = v), (p.displayName = 'PlayToggle');
    },
    '284h': function(e, t, n) {
      var i = n('cDf5')['default'];
      function a(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (a = function(e) {
          return e ? n : t;
        })(e);
      }
      function r(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' != i(e) && 'function' != typeof e)) return { default: e };
        var n = a(t);
        if (n && n.has(e)) return n.get(e);
        var r = { __proto__: null },
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var l in e)
          if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
            var s = o ? Object.getOwnPropertyDescriptor(e, l) : null;
            s && (s.get || s.set) ? Object.defineProperty(r, l, s) : (r[l] = e[l]);
          }
        return (r['default'] = e), n && n.set(e, r), r;
      }
      (e.exports = r), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    '3nJo': function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = l);
      var a = i(n('MVZn')),
        r = n('we7k'),
        o = { count: 0, operation: { action: '', source: '' } };
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case r.OPERATE:
            return (0, a['default'])({}, e, {
              count: e.count + 1,
              operation: (0, a['default'])({}, e.operation, t.operation),
            });
          default:
            return e;
        }
      }
    },
    '4FqI': function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = { player: c['default'].object, children: c['default'].any },
        v = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.handleClick = i.handleClick.bind((0, u['default'])(i))),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              {
                key: 'handleClick',
                value: function(e) {
                  e.preventDefault();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.children;
                  return h['default'].createElement(
                    'div',
                    { className: 'video-react-menu', onClick: this.handleClick },
                    h['default'].createElement('div', { className: 'video-react-menu-content' }, e)
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t['default'] = v), (v.propTypes = f), (v.displayName = 'Popup');
    },
    '4b3c': function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var a = i(n('8nKf')),
        r = (0, a['default'])('forward');
      r.displayName = 'ForwardControl';
      var o = r;
      t['default'] = o;
    },
    '54lq': function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = a(n('TSYQ')),
        v = {
          actions: c['default'].object,
          player: c['default'].object,
          className: c['default'].string,
        },
        p = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.handleClick = i.handleClick.bind((0, u['default'])(i))),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              {
                key: 'handleClick',
                value: function() {
                  var e = this.props,
                    t = e.player,
                    n = e.actions;
                  n.toggleFullscreen(t);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.player,
                    i = t.className;
                  return h['default'].createElement(
                    'button',
                    {
                      className: (0, f['default'])(
                        i,
                        {
                          'video-react-icon-fullscreen-exit': n.isFullscreen,
                          'video-react-icon-fullscreen': !n.isFullscreen,
                        },
                        'video-react-fullscreen-control video-react-control video-react-button video-react-icon'
                      ),
                      ref: function(t) {
                        e.button = t;
                      },
                      type: 'button',
                      tabIndex: '0',
                      onClick: this.handleClick,
                    },
                    h['default'].createElement(
                      'span',
                      { className: 'video-react-control-text' },
                      'Non-Fullscreen'
                    )
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t['default'] = p), (p.propTypes = v), (p.displayName = 'FullscreenToggle');
    },
    '56F6': function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = s);
      var a = i(n('MVZn')),
        r = n('INgg'),
        o = n('we7k'),
        l = {
          currentSrc: null,
          duration: 0,
          currentTime: 0,
          seekingTime: 0,
          buffered: null,
          waiting: !1,
          seeking: !1,
          paused: !0,
          autoPaused: !1,
          ended: !1,
          playbackRate: 1,
          muted: !1,
          volume: 1,
          readyState: 0,
          networkState: 0,
          videoWidth: 0,
          videoHeight: 0,
          hasStarted: !1,
          userActivity: !0,
          isActive: !1,
          isFullscreen: !1,
          activeTextTrack: null,
        };
      function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case o.USER_ACTIVATE:
            return (0, a['default'])({}, e, { userActivity: t.activity });
          case o.PLAYER_ACTIVATE:
            return (0, a['default'])({}, e, { isActive: t.activity });
          case o.FULLSCREEN_CHANGE:
            return (0, a['default'])({}, e, { isFullscreen: !!t.isFullscreen });
          case r.SEEKING_TIME:
            return (0, a['default'])({}, e, { seekingTime: t.time });
          case r.END_SEEKING:
            return (0, a['default'])({}, e, { seekingTime: 0 });
          case r.LOAD_START:
            return (0, a['default'])({}, e, t.videoProps, { hasStarted: !1, ended: !1 });
          case r.CAN_PLAY:
            return (0, a['default'])({}, e, t.videoProps, { waiting: !1 });
          case r.WAITING:
            return (0, a['default'])({}, e, t.videoProps, { waiting: !0 });
          case r.CAN_PLAY_THROUGH:
          case r.PLAYING:
            return (0, a['default'])({}, e, t.videoProps, { waiting: !1 });
          case r.PLAY:
            return (0, a['default'])({}, e, t.videoProps, {
              ended: !1,
              paused: !1,
              autoPaused: !1,
              waiting: !1,
              hasStarted: !0,
            });
          case r.PAUSE:
            return (0, a['default'])({}, e, t.videoProps, { paused: !0 });
          case r.END:
            return (0, a['default'])({}, e, t.videoProps, { ended: !0 });
          case r.SEEKING:
            return (0, a['default'])({}, e, t.videoProps, { seeking: !0 });
          case r.SEEKED:
            return (0, a['default'])({}, e, t.videoProps, { seeking: !1 });
          case r.ERROR:
            return (0, a['default'])({}, e, t.videoProps, { error: 'UNKNOWN ERROR', ended: !0 });
          case r.DURATION_CHANGE:
          case r.TIME_UPDATE:
          case r.VOLUME_CHANGE:
          case r.PROGRESS_CHANGE:
          case r.RATE_CHANGE:
          case r.SUSPEND:
          case r.ABORT:
          case r.EMPTIED:
          case r.STALLED:
          case r.LOADED_META_DATA:
          case r.LOADED_DATA:
          case r.RESIZE:
            return (0, a['default'])({}, e, t.videoProps);
          case r.ACTIVATE_TEXT_TRACK:
            return (0, a['default'])({}, e, { activeTextTrack: t.textTrack });
          default:
            return e;
        }
      }
    },
    '5Q0V': function(e, t, n) {
      var i = n('cDf5')['default'];
      function a(e, t) {
        if ('object' !== i(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var a = n.call(e, t || 'default');
          if ('object' !== i(a)) return a;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      }
      (e.exports = a), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    '7W2i': function(e, t, n) {
      var i = n('SksO');
      function a(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && i(e, t);
      }
      (e.exports = a), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    '8OQS': function(e, t) {
      function n(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = {},
          r = Object.keys(e);
        for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    '8nKf': function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = {
          actions: c['default'].object,
          className: c['default'].string,
          seconds: c['default'].oneOf([5, 10, 30]),
        },
        v = { seconds: 10 },
        p = function(e) {
          var t = (function(t) {
            function n(e, t) {
              var i;
              return (
                (0, r['default'])(this, n),
                (i = (0, l['default'])(this, (0, s['default'])(n).call(this, e, t))),
                (i.handleClick = i.handleClick.bind((0, u['default'])(i))),
                i
              );
            }
            return (
              (0, d['default'])(n, t),
              (0, o['default'])(n, [
                {
                  key: 'handleClick',
                  value: function() {
                    var t = this.props,
                      n = t.actions,
                      i = t.seconds;
                    'forward' === e ? n.forward(i) : n.replay(i);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var t = this,
                      n = this.props,
                      i = n.seconds,
                      a = n.className,
                      r = ['video-react-control', 'video-react-button', 'video-react-icon'];
                    return (
                      r.push(
                        'video-react-icon-'.concat(e, '-').concat(i),
                        'video-react-'.concat(e, '-control')
                      ),
                      a && r.push(a),
                      h['default'].createElement(
                        'button',
                        {
                          ref: function(e) {
                            t.button = e;
                          },
                          className: r.join(' '),
                          type: 'button',
                          onClick: this.handleClick,
                        },
                        h['default'].createElement(
                          'span',
                          { className: 'video-react-control-text' },
                          ''.concat(e, ' ').concat(i, ' seconds')
                        )
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(h.Component);
          return (t.propTypes = f), (t.defaultProps = v), t;
        };
      t['default'] = p;
    },
    ANjH: function(e, t, n) {
      'use strict';
      n.r(t);
      var i = n('rePB');
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function(t) {
                Object(i['a'])(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function o(e) {
        return (
          'Minified Redux error #' +
          e +
          '; visit https://redux.js.org/Errors?code=' +
          e +
          ' for the full message or use the non-minified dev environment for full errors. '
        );
      }
      n.d(t, '__DO_NOT_USE__ActionTypes', function() {
        return u;
      }),
        n.d(t, 'applyMiddleware', function() {
          return g;
        }),
        n.d(t, 'bindActionCreators', function() {
          return m;
        }),
        n.d(t, 'combineReducers', function() {
          return v;
        }),
        n.d(t, 'compose', function() {
          return y;
        }),
        n.d(t, 'createStore', function() {
          return c;
        }),
        n.d(t, 'legacy_createStore', function() {
          return h;
        });
      var l = (function() {
          return ('function' === typeof Symbol && Symbol.observable) || '@@observable';
        })(),
        s = function() {
          return Math.random()
            .toString(36)
            .substring(7)
            .split('')
            .join('.');
        },
        u = {
          INIT: '@@redux/INIT' + s(),
          REPLACE: '@@redux/REPLACE' + s(),
          PROBE_UNKNOWN_ACTION: function() {
            return '@@redux/PROBE_UNKNOWN_ACTION' + s();
          },
        };
      function d(e) {
        if ('object' !== typeof e || null === e) return !1;
        var t = e;
        while (null !== Object.getPrototypeOf(t)) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function c(e, t, n) {
        var i;
        if (
          ('function' === typeof t && 'function' === typeof n) ||
          ('function' === typeof n && 'function' === typeof arguments[3])
        )
          throw new Error(o(0));
        if (
          ('function' === typeof t && 'undefined' === typeof n && ((n = t), (t = void 0)),
          'undefined' !== typeof n)
        ) {
          if ('function' !== typeof n) throw new Error(o(1));
          return n(c)(e, t);
        }
        if ('function' !== typeof e) throw new Error(o(2));
        var a = e,
          r = t,
          s = [],
          h = s,
          f = !1;
        function v() {
          h === s && (h = s.slice());
        }
        function p() {
          if (f) throw new Error(o(3));
          return r;
        }
        function m(e) {
          if ('function' !== typeof e) throw new Error(o(4));
          if (f) throw new Error(o(5));
          var t = !0;
          return (
            v(),
            h.push(e),
            function() {
              if (t) {
                if (f) throw new Error(o(6));
                (t = !1), v();
                var n = h.indexOf(e);
                h.splice(n, 1), (s = null);
              }
            }
          );
        }
        function y(e) {
          if (!d(e)) throw new Error(o(7));
          if ('undefined' === typeof e.type) throw new Error(o(8));
          if (f) throw new Error(o(9));
          try {
            (f = !0), (r = a(r, e));
          } finally {
            f = !1;
          }
          for (var t = (s = h), n = 0; n < t.length; n++) {
            var i = t[n];
            i();
          }
          return e;
        }
        function g(e) {
          if ('function' !== typeof e) throw new Error(o(10));
          (a = e), y({ type: u.REPLACE });
        }
        function b() {
          var e,
            t = m;
          return (
            (e = {
              subscribe: function(e) {
                if ('object' !== typeof e || null === e) throw new Error(o(11));
                function n() {
                  e.next && e.next(p());
                }
                n();
                var i = t(n);
                return { unsubscribe: i };
              },
            }),
            (e[l] = function() {
              return this;
            }),
            e
          );
        }
        return (
          y({ type: u.INIT }),
          (i = { dispatch: y, subscribe: m, getState: p, replaceReducer: g }),
          (i[l] = b),
          i
        );
      }
      var h = c;
      function f(e) {
        Object.keys(e).forEach(function(t) {
          var n = e[t],
            i = n(void 0, { type: u.INIT });
          if ('undefined' === typeof i) throw new Error(o(12));
          if ('undefined' === typeof n(void 0, { type: u.PROBE_UNKNOWN_ACTION() }))
            throw new Error(o(13));
        });
      }
      function v(e) {
        for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) {
          var a = t[i];
          0, 'function' === typeof e[a] && (n[a] = e[a]);
        }
        var r,
          l = Object.keys(n);
        try {
          f(n);
        } catch (e) {
          r = e;
        }
        return function(e, t) {
          if ((void 0 === e && (e = {}), r)) throw r;
          for (var i = !1, a = {}, s = 0; s < l.length; s++) {
            var u = l[s],
              d = n[u],
              c = e[u],
              h = d(c, t);
            if ('undefined' === typeof h) {
              t && t.type;
              throw new Error(o(14));
            }
            (a[u] = h), (i = i || h !== c);
          }
          return (i = i || l.length !== Object.keys(e).length), i ? a : e;
        };
      }
      function p(e, t) {
        return function() {
          return t(e.apply(this, arguments));
        };
      }
      function m(e, t) {
        if ('function' === typeof e) return p(e, t);
        if ('object' !== typeof e || null === e) throw new Error(o(16));
        var n = {};
        for (var i in e) {
          var a = e[i];
          'function' === typeof a && (n[i] = p(a, t));
        }
        return n;
      }
      function y() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length
          ? function(e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function(e, t) {
              return function() {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      function g() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(e) {
          return function() {
            var n = e.apply(void 0, arguments),
              i = function() {
                throw new Error(o(15));
              },
              a = {
                getState: n.getState,
                dispatch: function() {
                  return i.apply(void 0, arguments);
                },
              },
              l = t.map(function(e) {
                return e(a);
              });
            return (i = y.apply(void 0, l)(n.dispatch)), r(r({}, n), {}, { dispatch: i });
          };
        };
      }
    },
    AZ0a: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('pVnL')),
        o = a(n('lwsE')),
        l = a(n('W8MJ')),
        s = a(n('a1gu')),
        u = a(n('Nsbk')),
        d = a(n('PJYZ')),
        c = a(n('7W2i')),
        h = a(n('17x9')),
        f = i(n('q1tI')),
        v = a(n('TSYQ')),
        p = a(n('QJtQ')),
        m = a(n('Qrqe')),
        y = {
          player: h['default'].object,
          actions: h['default'].object,
          vertical: h['default'].bool,
          className: h['default'].string,
          alwaysShowVolume: h['default'].bool,
        },
        g = { vertical: !1 },
        b = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, o['default'])(this, t),
              (i = (0, s['default'])(this, (0, u['default'])(t).call(this, e, n))),
              (i.state = { active: !1 }),
              (i.handleClick = i.handleClick.bind((0, d['default'])(i))),
              (i.handleFocus = i.handleFocus.bind((0, d['default'])(i))),
              (i.handleBlur = i.handleBlur.bind((0, d['default'])(i))),
              i
            );
          }
          return (
            (0, c['default'])(t, e),
            (0, l['default'])(t, [
              {
                key: 'handleClick',
                value: function() {
                  var e = this.props,
                    t = e.player,
                    n = e.actions;
                  n.mute(!t.muted);
                },
              },
              {
                key: 'handleFocus',
                value: function() {
                  this.setState({ active: !0 });
                },
              },
              {
                key: 'handleBlur',
                value: function() {
                  this.setState({ active: !1 });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.vertical,
                    n = e.player,
                    i = e.className,
                    a = !t,
                    o = this.volumeLevel;
                  return f['default'].createElement(
                    p['default'],
                    {
                      className: (0, v['default'])(
                        i,
                        {
                          'video-react-volume-menu-button-vertical': t,
                          'video-react-volume-menu-button-horizontal': !t,
                          'video-react-vol-muted': n.muted,
                          'video-react-vol-0': 0 === o && !n.muted,
                          'video-react-vol-1': 1 === o,
                          'video-react-vol-2': 2 === o,
                          'video-react-vol-3': 3 === o,
                          'video-react-slider-active':
                            this.props.alwaysShowVolume || this.state.active,
                          'video-react-lock-showing':
                            this.props.alwaysShowVolume || this.state.active,
                        },
                        'video-react-volume-menu-button'
                      ),
                      onClick: this.handleClick,
                      inline: a,
                    },
                    f['default'].createElement(
                      m['default'],
                      (0, r['default'])(
                        { onFocus: this.handleFocus, onBlur: this.handleBlur },
                        this.props
                      )
                    )
                  );
                },
              },
              {
                key: 'volumeLevel',
                get: function() {
                  var e = this.props.player,
                    t = e.volume,
                    n = e.muted,
                    i = 3;
                  return 0 === t || n ? (i = 0) : t < 0.33 ? (i = 1) : t < 0.67 && (i = 2), i;
                },
              },
            ]),
            t
          );
        })(f.Component);
      (b.propTypes = y), (b.defaultProps = g), (b.displayName = 'VolumeMenuButton');
      var w = b;
      t['default'] = w;
    },
    Bnag: function(e, t) {
      function n() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    DGqw: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = a(n('TSYQ')),
        v = a(n('U3K2')),
        p = {
          player: c['default'].object,
          actions: c['default'].object,
          rates: c['default'].array,
          className: c['default'].string,
        },
        m = { rates: [2, 1.5, 1.25, 1, 0.5, 0.25] },
        y = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.handleSelectItem = i.handleSelectItem.bind((0, u['default'])(i))),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              {
                key: 'handleSelectItem',
                value: function(e) {
                  var t = this.props,
                    n = t.rates,
                    i = t.actions;
                  e >= 0 && e < n.length && i.changeRate(n[e]);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.rates,
                    n = e.player,
                    i = t.map(function(e) {
                      return { label: ''.concat(e, 'x'), value: e };
                    }),
                    a = t.indexOf(n.playbackRate) || 0;
                  return h['default'].createElement(
                    v['default'],
                    {
                      className: (0, f['default'])(
                        'video-react-playback-rate',
                        this.props.className
                      ),
                      onSelectItem: this.handleSelectItem,
                      items: i,
                      selectedIndex: a,
                    },
                    h['default'].createElement(
                      'span',
                      { className: 'video-react-control-text' },
                      'Playback Rate'
                    ),
                    h['default'].createElement(
                      'div',
                      { className: 'video-react-playback-rate-value' },
                      ''.concat(n.playbackRate.toFixed(2), 'x')
                    )
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (y.propTypes = p), (y.defaultProps = m), (y.displayName = 'PlaybackRateMenuButton');
      var g = y;
      t['default'] = g;
    },
    DeZD: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = a(n('TSYQ')),
        v = {
          item: c['default'].object,
          index: c['default'].number,
          activateIndex: c['default'].number,
          onSelectItem: c['default'].func,
        },
        p = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.handleClick = i.handleClick.bind((0, u['default'])(i))),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              {
                key: 'handleClick',
                value: function() {
                  var e = this.props,
                    t = e.index,
                    n = e.onSelectItem;
                  n(t);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.item,
                    n = e.index,
                    i = e.activateIndex;
                  return h['default'].createElement(
                    'li',
                    {
                      className: (0, f['default'])({
                        'video-react-menu-item': !0,
                        'video-react-selected': n === i,
                      }),
                      role: 'menuitem',
                      onClick: this.handleClick,
                    },
                    t.label,
                    h['default'].createElement('span', { className: 'video-react-control-text' })
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t['default'] = p), (p.propTypes = v), (p.displayName = 'MenuItem');
    },
    EVUy: function(e, t, n) {
      'use strict';
      function i(e) {
        var t;
        if ((e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t))
          return { left: 0, top: 0 };
        var n = document,
          i = n.body,
          a = n.documentElement,
          r = a.clientLeft || i.clientLeft || 0,
          o = window.pageXOffset || i.scrollLeft,
          l = t.left + o - r,
          s = a.clientTop || i.clientTop || 0,
          u = window.pageYOffset || i.scrollTop,
          d = t.top + u - s;
        return { left: Math.round(l), top: Math.round(d) };
      }
      function a(e, t) {
        var n = {},
          a = i(e),
          r = e.offsetWidth,
          o = e.offsetHeight,
          l = a.top,
          s = a.left,
          u = t.pageY,
          d = t.pageX;
        return (
          t.changedTouches && ((d = t.changedTouches[0].pageX), (u = t.changedTouches[0].pageY)),
          (n.y = Math.max(0, Math.min(1, (l - u + o) / o))),
          (n.x = Math.max(0, Math.min(1, (d - s) / r))),
          n
        );
      }
      function r(e) {
        e && e.blur && e.blur();
      }
      function o(e) {
        e && e.focus && e.focus();
      }
      function l(e, t) {
        for (var n = e.className.split(' '), i = 0; i < n.length; i++)
          if (n[i].toLowerCase() === t.toLowerCase()) return !0;
        return !1;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.findElPosition = i),
        (t.getPointerPosition = a),
        (t.blurNode = r),
        (t.focusNode = o),
        (t.hasClass = l);
    },
    EbDI: function(e, t) {
      function n(e) {
        if (
          ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    Edwz: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('MVZn')),
        o = a(n('lwsE')),
        l = a(n('W8MJ')),
        s = a(n('a1gu')),
        u = a(n('Nsbk')),
        d = a(n('PJYZ')),
        c = a(n('7W2i')),
        h = a(n('17x9')),
        f = i(n('q1tI')),
        v = a(n('TSYQ')),
        p = n('tJTW'),
        m = {
          actions: h['default'].object,
          player: h['default'].object,
          children: h['default'].any,
          startTime: h['default'].number,
          loop: h['default'].bool,
          muted: h['default'].bool,
          autoPlay: h['default'].bool,
          playsInline: h['default'].bool,
          src: h['default'].string,
          poster: h['default'].string,
          className: h['default'].string,
          preload: h['default'].oneOf(['auto', 'metadata', 'none']),
          crossOrigin: h['default'].string,
          onLoadStart: h['default'].func,
          onWaiting: h['default'].func,
          onCanPlay: h['default'].func,
          onCanPlayThrough: h['default'].func,
          onPlaying: h['default'].func,
          onEnded: h['default'].func,
          onSeeking: h['default'].func,
          onSeeked: h['default'].func,
          onPlay: h['default'].func,
          onPause: h['default'].func,
          onProgress: h['default'].func,
          onDurationChange: h['default'].func,
          onError: h['default'].func,
          onSuspend: h['default'].func,
          onAbort: h['default'].func,
          onEmptied: h['default'].func,
          onStalled: h['default'].func,
          onLoadedMetadata: h['default'].func,
          onLoadedData: h['default'].func,
          onTimeUpdate: h['default'].func,
          onRateChange: h['default'].func,
          onVolumeChange: h['default'].func,
          onResize: h['default'].func,
        },
        y = (function(e) {
          function t(e) {
            var n;
            return (
              (0, o['default'])(this, t),
              (n = (0, s['default'])(this, (0, u['default'])(t).call(this, e))),
              (n.video = null),
              (n.play = n.play.bind((0, d['default'])(n))),
              (n.pause = n.pause.bind((0, d['default'])(n))),
              (n.seek = n.seek.bind((0, d['default'])(n))),
              (n.forward = n.forward.bind((0, d['default'])(n))),
              (n.replay = n.replay.bind((0, d['default'])(n))),
              (n.toggleFullscreen = n.toggleFullscreen.bind((0, d['default'])(n))),
              (n.getProperties = n.getProperties.bind((0, d['default'])(n))),
              (n.renderChildren = n.renderChildren.bind((0, d['default'])(n))),
              (n.handleLoadStart = n.handleLoadStart.bind((0, d['default'])(n))),
              (n.handleCanPlay = n.handleCanPlay.bind((0, d['default'])(n))),
              (n.handleCanPlayThrough = n.handleCanPlayThrough.bind((0, d['default'])(n))),
              (n.handlePlay = n.handlePlay.bind((0, d['default'])(n))),
              (n.handlePlaying = n.handlePlaying.bind((0, d['default'])(n))),
              (n.handlePause = n.handlePause.bind((0, d['default'])(n))),
              (n.handleEnded = n.handleEnded.bind((0, d['default'])(n))),
              (n.handleWaiting = n.handleWaiting.bind((0, d['default'])(n))),
              (n.handleSeeking = n.handleSeeking.bind((0, d['default'])(n))),
              (n.handleSeeked = n.handleSeeked.bind((0, d['default'])(n))),
              (n.handleFullscreenChange = n.handleFullscreenChange.bind((0, d['default'])(n))),
              (n.handleError = n.handleError.bind((0, d['default'])(n))),
              (n.handleSuspend = n.handleSuspend.bind((0, d['default'])(n))),
              (n.handleAbort = n.handleAbort.bind((0, d['default'])(n))),
              (n.handleEmptied = n.handleEmptied.bind((0, d['default'])(n))),
              (n.handleStalled = n.handleStalled.bind((0, d['default'])(n))),
              (n.handleLoadedMetaData = n.handleLoadedMetaData.bind((0, d['default'])(n))),
              (n.handleLoadedData = n.handleLoadedData.bind((0, d['default'])(n))),
              (n.handleTimeUpdate = n.handleTimeUpdate.bind((0, d['default'])(n))),
              (n.handleRateChange = n.handleRateChange.bind((0, d['default'])(n))),
              (n.handleVolumeChange = n.handleVolumeChange.bind((0, d['default'])(n))),
              (n.handleDurationChange = n.handleDurationChange.bind((0, d['default'])(n))),
              (n.handleProgress = (0, p.throttle)(
                n.handleProgress.bind((0, d['default'])(n)),
                250
              )),
              (n.handleKeypress = n.handleKeypress.bind((0, d['default'])(n))),
              (n.handleTextTrackChange = n.handleTextTrackChange.bind((0, d['default'])(n))),
              n
            );
          }
          return (
            (0, c['default'])(t, e),
            (0, l['default'])(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.forceUpdate(),
                    this.video &&
                      this.video.textTracks &&
                      ((this.video.textTracks.onaddtrack = this.handleTextTrackChange),
                      (this.video.textTracks.onremovetrack = this.handleTextTrackChange));
                },
              },
              {
                key: 'getProperties',
                value: function() {
                  var e = this;
                  return this.video
                    ? p.mediaProperties.reduce(function(t, n) {
                        return (t[n] = e.video[n]), t;
                      }, {})
                    : null;
                },
              },
              {
                key: 'handleTextTrackChange',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.player;
                  if (this.video && this.video.textTracks) {
                    var i = Array.from(this.video.textTracks).find(function(e) {
                      return 'showing' === e.mode;
                    });
                    i !== n.activeTextTrack && t.activateTextTrack(i);
                  }
                },
              },
              {
                key: 'play',
                value: function() {
                  var e = this.video.play();
                  void 0 !== e && e['catch'](function() {}).then(function() {});
                },
              },
              {
                key: 'pause',
                value: function() {
                  var e = this.video.pause();
                  void 0 !== e && e['catch'](function() {}).then(function() {});
                },
              },
              {
                key: 'load',
                value: function() {
                  this.video.load();
                },
              },
              {
                key: 'addTextTrack',
                value: function() {
                  var e;
                  (e = this.video).addTextTrack.apply(e, arguments);
                },
              },
              {
                key: 'canPlayType',
                value: function() {
                  var e;
                  (e = this.video).canPlayType.apply(e, arguments);
                },
              },
              {
                key: 'togglePlay',
                value: function() {
                  this.video.paused ? this.play() : this.pause();
                },
              },
              {
                key: 'seek',
                value: function(e) {
                  try {
                    this.video.currentTime = e;
                  } catch (e) {}
                },
              },
              {
                key: 'forward',
                value: function(e) {
                  this.seek(this.video.currentTime + e);
                },
              },
              {
                key: 'replay',
                value: function(e) {
                  this.forward(-e);
                },
              },
              {
                key: 'toggleFullscreen',
                value: function() {
                  var e = this.props,
                    t = e.player,
                    n = e.actions;
                  n.toggleFullscreen(t);
                },
              },
              {
                key: 'handleLoadStart',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onLoadStart;
                  t.handleLoadStart(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleCanPlay',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onCanPlay;
                  t.handleCanPlay(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleCanPlayThrough',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onCanPlayThrough;
                  t.handleCanPlayThrough(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handlePlaying',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onPlaying;
                  t.handlePlaying(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handlePlay',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onPlay;
                  t.handlePlay(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handlePause',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onPause;
                  t.handlePause(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleDurationChange',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onDurationChange;
                  t.handleDurationChange(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleProgress',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onProgress;
                  this.video && t.handleProgressChange(this.getProperties()),
                    n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleEnded',
                value: function() {
                  var e = this.props,
                    t = e.loop,
                    n = e.player,
                    i = e.actions,
                    a = e.onEnded;
                  t ? (this.seek(0), this.play()) : n.paused || this.pause(),
                    i.handleEnd(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: 'handleWaiting',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onWaiting;
                  t.handleWaiting(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleSeeking',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onSeeking;
                  t.handleSeeking(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleSeeked',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onSeeked;
                  t.handleSeeked(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              { key: 'handleFullscreenChange', value: function() {} },
              {
                key: 'handleSuspend',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onSuspend;
                  t.handleSuspend(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleAbort',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onAbort;
                  t.handleAbort(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleEmptied',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onEmptied;
                  t.handleEmptied(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleStalled',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onStalled;
                  t.handleStalled(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleLoadedMetaData',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onLoadedMetadata,
                    i = e.startTime;
                  i && i > 0 && (this.video.currentTime = i),
                    t.handleLoadedMetaData(this.getProperties()),
                    n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleLoadedData',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onLoadedData;
                  t.handleLoadedData(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleTimeUpdate',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onTimeUpdate;
                  t.handleTimeUpdate(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleRateChange',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onRateChange;
                  t.handleRateChange(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleVolumeChange',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onVolumeChange;
                  t.handleVolumeChange(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleError',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onError;
                  t.handleError(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              {
                key: 'handleResize',
                value: function() {
                  var e = this.props,
                    t = e.actions,
                    n = e.onResize;
                  t.handleResize(this.getProperties()), n && n.apply(void 0, arguments);
                },
              },
              { key: 'handleKeypress', value: function() {} },
              {
                key: 'renderChildren',
                value: function() {
                  var e = this,
                    t = (0, r['default'])({}, this.props, { video: this.video });
                  return this.video
                    ? f['default'].Children.toArray(this.props.children)
                        .filter(p.isVideoChild)
                        .map(function(n) {
                          var i;
                          if ('string' === typeof n.type) {
                            if ('source' === n.type) {
                              i = (0, r['default'])({}, n.props);
                              var a = i.onError;
                              i.onError = function() {
                                a && a.apply(void 0, arguments), e.handleError.apply(e, arguments);
                              };
                            }
                          } else i = t;
                          return f['default'].cloneElement(n, i);
                        })
                    : null;
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.loop,
                    i = t.poster,
                    a = t.preload,
                    r = t.src,
                    o = t.autoPlay,
                    l = t.playsInline,
                    s = t.muted,
                    u = t.crossOrigin,
                    d = t.videoId;
                  return f['default'].createElement(
                    'video',
                    {
                      className: (0, v['default'])('video-react-video', this.props.className),
                      id: d,
                      crossOrigin: u,
                      ref: function(t) {
                        e.video = t;
                      },
                      muted: s,
                      preload: a,
                      loop: n,
                      playsInline: l,
                      autoPlay: o,
                      poster: i,
                      src: r,
                      onLoadStart: this.handleLoadStart,
                      onWaiting: this.handleWaiting,
                      onCanPlay: this.handleCanPlay,
                      onCanPlayThrough: this.handleCanPlayThrough,
                      onPlaying: this.handlePlaying,
                      onEnded: this.handleEnded,
                      onSeeking: this.handleSeeking,
                      onSeeked: this.handleSeeked,
                      onPlay: this.handlePlay,
                      onPause: this.handlePause,
                      onProgress: this.handleProgress,
                      onDurationChange: this.handleDurationChange,
                      onError: this.handleError,
                      onSuspend: this.handleSuspend,
                      onAbort: this.handleAbort,
                      onEmptied: this.handleEmptied,
                      onStalled: this.handleStalled,
                      onLoadedMetadata: this.handleLoadedMetaData,
                      onLoadedData: this.handleLoadedData,
                      onTimeUpdate: this.handleTimeUpdate,
                      onRateChange: this.handleRateChange,
                      onVolumeChange: this.handleVolumeChange,
                      tabIndex: '-1',
                    },
                    this.renderChildren()
                  );
                },
              },
              {
                key: 'playbackRate',
                get: function() {
                  return this.video.playbackRate;
                },
                set: function(e) {
                  this.video.playbackRate = e;
                },
              },
              {
                key: 'muted',
                get: function() {
                  return this.video.muted;
                },
                set: function(e) {
                  this.video.muted = e;
                },
              },
              {
                key: 'volume',
                get: function() {
                  return this.video.volume;
                },
                set: function(e) {
                  e > 1 && (e = 1), e < 0 && (e = 0), (this.video.volume = e);
                },
              },
              {
                key: 'videoWidth',
                get: function() {
                  return this.video.videoWidth;
                },
              },
              {
                key: 'videoHeight',
                get: function() {
                  return this.video.videoHeight;
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t['default'] = y), (y.propTypes = m), (y.displayName = 'Video');
    },
    FcgA: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('QILm')),
        o = a(n('lwsE')),
        l = a(n('W8MJ')),
        s = a(n('a1gu')),
        u = a(n('Nsbk')),
        d = a(n('PJYZ')),
        c = a(n('7W2i')),
        h = a(n('17x9')),
        f = i(n('q1tI')),
        v = a(n('TSYQ')),
        p = a(n('zHIc')),
        m = a(n('0yDM')),
        y = a(n('4b3c')),
        g = a(n('UXv2')),
        b = a(n('54lq')),
        w = a(n('Na29')),
        k = a(n('HI9P')),
        E = a(n('GdU9')),
        T = a(n('ruMa')),
        P = a(n('AZ0a')),
        x = a(n('DGqw')),
        C = n('tJTW'),
        S = {
          children: h['default'].any,
          autoHide: h['default'].bool,
          autoHideTime: h['default'].number,
          disableDefaultControls: h['default'].bool,
          disableCompletely: h['default'].bool,
          className: h['default'].string,
        },
        M = { autoHide: !0, disableCompletely: !1 },
        N = (function(e) {
          function t(e) {
            var n;
            return (
              (0, o['default'])(this, t),
              (n = (0, s['default'])(this, (0, u['default'])(t).call(this, e))),
              (n.getDefaultChildren = n.getDefaultChildren.bind((0, d['default'])(n))),
              (n.getFullChildren = n.getFullChildren.bind((0, d['default'])(n))),
              n
            );
          }
          return (
            (0, c['default'])(t, e),
            (0, l['default'])(t, [
              {
                key: 'getDefaultChildren',
                value: function() {
                  return [
                    f['default'].createElement(m['default'], { key: 'play-toggle', order: 1 }),
                    f['default'].createElement(P['default'], {
                      key: 'volume-menu-button',
                      order: 4,
                    }),
                    f['default'].createElement(k['default'], {
                      key: 'current-time-display',
                      order: 5.1,
                    }),
                    f['default'].createElement(T['default'], { key: 'time-divider', order: 5.2 }),
                    f['default'].createElement(E['default'], {
                      key: 'duration-display',
                      order: 5.3,
                    }),
                    f['default'].createElement(p['default'], { key: 'progress-control', order: 6 }),
                    f['default'].createElement(b['default'], {
                      key: 'fullscreen-toggle',
                      order: 8,
                    }),
                  ];
                },
              },
              {
                key: 'getFullChildren',
                value: function() {
                  return [
                    f['default'].createElement(m['default'], { key: 'play-toggle', order: 1 }),
                    f['default'].createElement(g['default'], { key: 'replay-control', order: 2 }),
                    f['default'].createElement(y['default'], { key: 'forward-control', order: 3 }),
                    f['default'].createElement(P['default'], {
                      key: 'volume-menu-button',
                      order: 4,
                    }),
                    f['default'].createElement(k['default'], {
                      key: 'current-time-display',
                      order: 5,
                    }),
                    f['default'].createElement(T['default'], { key: 'time-divider', order: 6 }),
                    f['default'].createElement(E['default'], { key: 'duration-display', order: 7 }),
                    f['default'].createElement(p['default'], { key: 'progress-control', order: 8 }),
                    f['default'].createElement(w['default'], {
                      key: 'remaining-time-display',
                      order: 9,
                    }),
                    f['default'].createElement(x['default'], {
                      rates: [1, 1.25, 1.5, 2],
                      key: 'playback-rate',
                      order: 10,
                    }),
                    f['default'].createElement(b['default'], {
                      key: 'fullscreen-toggle',
                      order: 11,
                    }),
                  ];
                },
              },
              {
                key: 'getChildren',
                value: function() {
                  var e = f['default'].Children.toArray(this.props.children),
                    t = this.props.disableDefaultControls ? [] : this.getDefaultChildren(),
                    n = this.props,
                    i = (n.className, (0, r['default'])(n, ['className']));
                  return (0, C.mergeAndSortChildren)(t, e, i);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.autoHide,
                    n = e.className,
                    i = e.disableCompletely,
                    a = this.getChildren();
                  return i
                    ? null
                    : f['default'].createElement(
                        'div',
                        {
                          className: (0, v['default'])(
                            'video-react-control-bar',
                            { 'video-react-control-bar-auto-hide': t },
                            n
                          ),
                        },
                        a
                      );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t['default'] = N), (N.propTypes = S), (N.defaultProps = M), (N.displayName = 'ControlBar');
    },
    GXTP: function(e, t, n) {
      !(function(t, i) {
        e.exports = i(n('q1tI'), n('yCxO'), n('Jji2'));
      })(0, function(e, t) {
        'use strict';
        var n = 'default' in e ? e.default : e;
        t = t && t.hasOwnProperty('default') ? t.default : t;
        var i =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          a = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  'value' in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function(t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })();
        return (function(r) {
          function o(e) {
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, o);
            var t = (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
            })(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e));
            return (t.container = null), (t.viewer = null), t;
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            })(o, e.Component),
            a(o, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.viewerInit();
                },
              },
              {
                key: 'getViewer',
                value: function() {
                  return { viewer: this.viewer, container: this.container };
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.viewer && !this.isIdentical() && this.viewerInit();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.viewer && this.viewer.destroy();
                },
              },
              {
                key: 'isIdentical',
                value: function() {
                  var e = this.viewer.images || [];
                  this.viewer.update();
                  var t = this.viewer.images || [];
                  return (
                    (!e.length && !t.length) ||
                    (e.length === t.length &&
                      t.every(function(t, n) {
                        return e[n] === t && t.src === e[n].src;
                      }))
                  );
                },
              },
              {
                key: 'viewerInit',
                value: function() {
                  this.viewer && this.viewer.destroy();
                  var e = this.props,
                    n = e.options,
                    a = void 0 === n ? {} : n,
                    r = e.children;
                  this.viewer = new t(
                    this.container,
                    i({ navbar: !(!Array.isArray(r) || !r.length) }, a)
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.children,
                    r = (function(e, t) {
                      var n = {};
                      for (var i in e)
                        t.indexOf(i) >= 0 ||
                          (Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]));
                      return n;
                    })(t, ['children']);
                  return n.createElement(
                    'div',
                    i(
                      {
                        ref: function(t) {
                          e.container = t;
                        },
                      },
                      r
                    ),
                    a
                  );
                },
              },
            ]),
            o
          );
        })();
      });
    },
    GdU9: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var a = i(n('17x9')),
        r = i(n('q1tI')),
        o = i(n('TSYQ')),
        l = n('tJTW'),
        s = { player: a['default'].object, className: a['default'].string };
      function u(e) {
        var t = e.player.duration,
          n = e.className,
          i = (0, l.formatTime)(t);
        return r['default'].createElement(
          'div',
          {
            className: (0, o['default'])(
              n,
              'video-react-duration video-react-time-control video-react-control'
            ),
          },
          r['default'].createElement(
            'div',
            { className: 'video-react-duration-display', 'aria-live': 'off' },
            r['default'].createElement(
              'span',
              { className: 'video-react-control-text' },
              'Duration Time '
            ),
            i
          )
        );
      }
      (u.propTypes = s), (u.displayName = 'DurationDisplay');
      var d = u;
      t['default'] = d;
    },
    GuGs: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var a = i(n('17x9')),
        r = i(n('q1tI')),
        o = i(n('TSYQ')),
        l = n('tJTW');
      function s(e) {
        var t = e.duration,
          n = e.mouseTime,
          i = e.className,
          a = e.text;
        if (!n.time) return null;
        var s = a || (0, l.formatTime)(n.time, t);
        return r['default'].createElement('div', {
          className: (0, o['default'])('video-react-mouse-display', i),
          style: { left: ''.concat(n.position, 'px') },
          'data-current-time': s,
        });
      }
      (s.propTypes = {
        duration: a['default'].number,
        mouseTime: a['default'].object,
        className: a['default'].string,
      }),
        (s.displayName = 'MouseTimeDisplay');
      var u = s;
      t['default'] = u;
    },
    HI9P: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var a = i(n('17x9')),
        r = i(n('q1tI')),
        o = i(n('TSYQ')),
        l = n('tJTW'),
        s = { player: a['default'].object, className: a['default'].string };
      function u(e) {
        var t = e.player,
          n = t.currentTime,
          i = t.duration,
          a = e.className,
          s = (0, l.formatTime)(n, i);
        return r['default'].createElement(
          'div',
          {
            className: (0, o['default'])(
              'video-react-current-time video-react-time-control video-react-control',
              a
            ),
          },
          r['default'].createElement(
            'div',
            { className: 'video-react-current-time-display', 'aria-live': 'off' },
            r['default'].createElement(
              'span',
              { className: 'video-react-control-text' },
              'Current Time '
            ),
            s
          )
        );
      }
      (u.propTypes = s), (u.displayName = 'CurrentTimeDisplay');
      var d = u;
      t['default'] = d;
    },
    INgg: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.handleLoadStart = N),
        (t.handleCanPlay = O),
        (t.handleWaiting = I),
        (t.handleCanPlayThrough = A),
        (t.handlePlaying = D),
        (t.handlePlay = _),
        (t.handlePause = R),
        (t.handleEnd = j),
        (t.handleSeeking = L),
        (t.handleSeeked = F),
        (t.handleDurationChange = z),
        (t.handleTimeUpdate = q),
        (t.handleVolumeChange = W),
        (t.handleProgressChange = Y),
        (t.handleRateChange = B),
        (t.handleSuspend = U),
        (t.handleAbort = V),
        (t.handleEmptied = H),
        (t.handleStalled = J),
        (t.handleLoadedMetaData = K),
        (t.handleLoadedData = G),
        (t.handleResize = X),
        (t.handleError = Z),
        (t.handleSeekingTime = Q),
        (t.handleEndSeeking = $),
        (t.activateTextTrack = ee),
        (t.ACTIVATE_TEXT_TRACK = t.ERROR = t.RESIZE = t.LOADED_DATA = t.LOADED_META_DATA = t.STALLED = t.EMPTIED = t.ABORT = t.SUSPEND = t.RATE_CHANGE = t.PROGRESS_CHANGE = t.VOLUME_CHANGE = t.TIME_UPDATE = t.DURATION_CHANGE = t.END_SEEKING = t.SEEKING_TIME = t.SEEKED = t.SEEKING = t.END = t.PAUSE = t.PLAY = t.PLAYING = t.CAN_PLAY_THROUGH = t.WAITING = t.CAN_PLAY = t.LOAD_START = void 0);
      var i = 'video-react/LOAD_START';
      t.LOAD_START = i;
      var a = 'video-react/CAN_PLAY';
      t.CAN_PLAY = a;
      var r = 'video-react/WAITING';
      t.WAITING = r;
      var o = 'video-react/CAN_PLAY_THROUGH';
      t.CAN_PLAY_THROUGH = o;
      var l = 'video-react/PLAYING';
      t.PLAYING = l;
      var s = 'video-react/PLAY';
      t.PLAY = s;
      var u = 'video-react/PAUSE';
      t.PAUSE = u;
      var d = 'video-react/END';
      t.END = d;
      var c = 'video-react/SEEKING';
      t.SEEKING = c;
      var h = 'video-react/SEEKED';
      t.SEEKED = h;
      var f = 'video-react/SEEKING_TIME';
      t.SEEKING_TIME = f;
      var v = 'video-react/END_SEEKING';
      t.END_SEEKING = v;
      var p = 'video-react/DURATION_CHANGE';
      t.DURATION_CHANGE = p;
      var m = 'video-react/TIME_UPDATE';
      t.TIME_UPDATE = m;
      var y = 'video-react/VOLUME_CHANGE';
      t.VOLUME_CHANGE = y;
      var g = 'video-react/PROGRESS_CHANGE';
      t.PROGRESS_CHANGE = g;
      var b = 'video-react/RATE_CHANGE';
      t.RATE_CHANGE = b;
      var w = 'video-react/SUSPEND';
      t.SUSPEND = w;
      var k = 'video-react/ABORT';
      t.ABORT = k;
      var E = 'video-react/EMPTIED';
      t.EMPTIED = E;
      var T = 'video-react/STALLED';
      t.STALLED = T;
      var P = 'video-react/LOADED_META_DATA';
      t.LOADED_META_DATA = P;
      var x = 'video-react/LOADED_DATA';
      t.LOADED_DATA = x;
      var C = 'video-react/RESIZE';
      t.RESIZE = C;
      var S = 'video-react/ERROR';
      t.ERROR = S;
      var M = 'video-react/ACTIVATE_TEXT_TRACK';
      function N(e) {
        return { type: i, videoProps: e };
      }
      function O(e) {
        return { type: a, videoProps: e };
      }
      function I(e) {
        return { type: r, videoProps: e };
      }
      function A(e) {
        return { type: o, videoProps: e };
      }
      function D(e) {
        return { type: l, videoProps: e };
      }
      function _(e) {
        return { type: s, videoProps: e };
      }
      function R(e) {
        return { type: u, videoProps: e };
      }
      function j(e) {
        return { type: d, videoProps: e };
      }
      function L(e) {
        return { type: c, videoProps: e };
      }
      function F(e) {
        return { type: h, videoProps: e };
      }
      function z(e) {
        return { type: p, videoProps: e };
      }
      function q(e) {
        return { type: m, videoProps: e };
      }
      function W(e) {
        return { type: y, videoProps: e };
      }
      function Y(e) {
        return { type: g, videoProps: e };
      }
      function B(e) {
        return { type: b, videoProps: e };
      }
      function U(e) {
        return { type: w, videoProps: e };
      }
      function V(e) {
        return { type: k, videoProps: e };
      }
      function H(e) {
        return { type: E, videoProps: e };
      }
      function J(e) {
        return { type: T, videoProps: e };
      }
      function K(e) {
        return { type: P, videoProps: e };
      }
      function G(e) {
        return { type: x, videoProps: e };
      }
      function X(e) {
        return { type: C, videoProps: e };
      }
      function Z(e) {
        return { type: S, videoProps: e };
      }
      function Q(e) {
        return { type: f, time: e };
      }
      function $(e) {
        return { type: v, time: e };
      }
      function ee(e) {
        return { type: M, textTrack: e };
      }
      t.ACTIVATE_TEXT_TRACK = M;
    },
    Ijbi: function(e, t, n) {
      var i = n('WkPL');
      function a(e) {
        if (Array.isArray(e)) return i(e);
      }
      (e.exports = a), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    Jji2: function(e, t, n) {
      e.exports = {
        'viewer-close': 'viewer-close',
        'viewer-flip-horizontal': 'viewer-flip-horizontal',
        'viewer-flip-vertical': 'viewer-flip-vertical',
        'viewer-fullscreen-exit': 'viewer-fullscreen-exit',
        'viewer-fullscreen': 'viewer-fullscreen',
        'viewer-next': 'viewer-next',
        'viewer-one-to-one': 'viewer-one-to-one',
        'viewer-play': 'viewer-play',
        'viewer-prev': 'viewer-prev',
        'viewer-reset': 'viewer-reset',
        'viewer-rotate-left': 'viewer-rotate-left',
        'viewer-rotate-right': 'viewer-rotate-right',
        'viewer-zoom-in': 'viewer-zoom-in',
        'viewer-zoom-out': 'viewer-zoom-out',
        'viewer-container': 'viewer-container',
        'viewer-canvas': 'viewer-canvas',
        'viewer-footer': 'viewer-footer',
        'viewer-navbar': 'viewer-navbar',
        'viewer-list': 'viewer-list',
        'viewer-loading': 'viewer-loading',
        'viewer-active': 'viewer-active',
        'viewer-player': 'viewer-player',
        'viewer-toolbar': 'viewer-toolbar',
        'viewer-small': 'viewer-small',
        'viewer-large': 'viewer-large',
        'viewer-tooltip': 'viewer-tooltip',
        'viewer-title': 'viewer-title',
        'viewer-button': 'viewer-button',
        'viewer-fixed': 'viewer-fixed',
        'viewer-open': 'viewer-open',
        'viewer-show': 'viewer-show',
        'viewer-hide': 'viewer-hide',
        'viewer-backdrop': 'viewer-backdrop',
        'viewer-invisible': 'viewer-invisible',
        'viewer-move': 'viewer-move',
        'viewer-fade': 'viewer-fade',
        'viewer-in': 'viewer-in',
        'viewer-transition': 'viewer-transition',
        'viewer-spinner': 'viewer-spinner',
        'viewer-hide-xs-down': 'viewer-hide-xs-down',
        'viewer-hide-sm-down': 'viewer-hide-sm-down',
        'viewer-hide-md-down': 'viewer-hide-md-down',
      };
    },
    LgmY: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var a = i(n('lSNA')),
        r = i(n('RIqP')),
        o = i(n('lwsE')),
        l = i(n('W8MJ')),
        s = i(n('a1gu')),
        u = i(n('Nsbk')),
        d = i(n('PJYZ')),
        c = i(n('7W2i')),
        h = n('q1tI'),
        f = i(n('17x9')),
        v = n('EVUy'),
        p = {
          clickable: f['default'].bool,
          dblclickable: f['default'].bool,
          manager: f['default'].object,
          actions: f['default'].object,
          player: f['default'].object,
          shortcuts: f['default'].array,
        },
        m = { clickable: !0, dblclickable: !0 },
        y = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, o['default'])(this, t),
              (i = (0, s['default'])(this, (0, u['default'])(t).call(this, e, n))),
              (i.defaultShortcuts = [
                { keyCode: 32, handle: i.togglePlay },
                { keyCode: 75, handle: i.togglePlay },
                { keyCode: 70, handle: i.toggleFullscreen },
                {
                  keyCode: 37,
                  handle: function(e, t) {
                    e.hasStarted && t.replay(5, { action: 'replay-5', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 74,
                  handle: function(e, t) {
                    e.hasStarted && t.replay(10, { action: 'replay-10', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 39,
                  handle: function(e, t) {
                    e.hasStarted && t.forward(5, { action: 'forward-5', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 76,
                  handle: function(e, t) {
                    e.hasStarted && t.forward(10, { action: 'forward-10', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 36,
                  handle: function(e, t) {
                    e.hasStarted && t.seek(0);
                  },
                },
                {
                  keyCode: 35,
                  handle: function(e, t) {
                    e.hasStarted && t.seek(e.duration);
                  },
                },
                {
                  keyCode: 38,
                  handle: function(e, t) {
                    var n = e.volume + 0.05;
                    n > 1 && (n = 1),
                      t.changeVolume(n, { action: 'volume-up', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 40,
                  handle: function(e, t) {
                    var n = e.volume - 0.05;
                    n < 0 && (n = 0);
                    var i = n > 0 ? 'volume-down' : 'volume-off';
                    t.changeVolume(n, { action: i, source: 'shortcut' });
                  },
                },
                {
                  keyCode: 190,
                  shift: !0,
                  handle: function(e, t) {
                    var n = e.playbackRate;
                    n >= 1.5
                      ? (n = 2)
                      : n >= 1.25
                      ? (n = 1.5)
                      : n >= 1
                      ? (n = 1.25)
                      : n >= 0.5
                      ? (n = 1)
                      : n >= 0.25
                      ? (n = 0.5)
                      : n >= 0 && (n = 0.25),
                      t.changeRate(n, { action: 'fast-forward', source: 'shortcut' });
                  },
                },
                {
                  keyCode: 188,
                  shift: !0,
                  handle: function(e, t) {
                    var n = e.playbackRate;
                    n <= 0.5
                      ? (n = 0.25)
                      : n <= 1
                      ? (n = 0.5)
                      : n <= 1.25
                      ? (n = 1)
                      : n <= 1.5
                      ? (n = 1.25)
                      : n <= 2 && (n = 1.5),
                      t.changeRate(n, { action: 'fast-rewind', source: 'shortcut' });
                  },
                },
              ]),
              (i.shortcuts = (0, r['default'])(i.defaultShortcuts)),
              (i.mergeShortcuts = i.mergeShortcuts.bind((0, d['default'])(i))),
              (i.handleKeyPress = i.handleKeyPress.bind((0, d['default'])(i))),
              (i.handleClick = i.handleClick.bind((0, d['default'])(i))),
              (i.handleDoubleClick = i.handleDoubleClick.bind((0, d['default'])(i))),
              i
            );
          }
          return (
            (0, c['default'])(t, e),
            (0, l['default'])(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.mergeShortcuts(),
                    document.addEventListener('keydown', this.handleKeyPress),
                    document.addEventListener('click', this.handleClick),
                    document.addEventListener('dblclick', this.handleDoubleClick);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  e.shortcuts !== this.props.shortcuts && this.mergeShortcuts();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener('keydown', this.handleKeyPress),
                    document.removeEventListener('click', this.handleClick),
                    document.removeEventListener('dblclick', this.handleDoubleClick);
                },
              },
              {
                key: 'mergeShortcuts',
                value: function() {
                  var e = function(e) {
                      var t = e.keyCode,
                        n = void 0 === t ? 0 : t,
                        i = e.ctrl,
                        a = void 0 !== i && i,
                        r = e.shift,
                        o = void 0 !== r && r,
                        l = e.alt,
                        s = void 0 !== l && l;
                      return ''
                        .concat(n, ':')
                        .concat(a, ':')
                        .concat(o, ':')
                        .concat(s);
                    },
                    t = this.defaultShortcuts.reduce(function(t, n) {
                      return Object.assign(t, (0, a['default'])({}, e(n), n));
                    }, {}),
                    n = (this.props.shortcuts || []).reduce(function(t, n) {
                      var i = n.keyCode,
                        r = n.handle;
                      return i && 'function' === typeof r
                        ? Object.assign(t, (0, a['default'])({}, e(n), n))
                        : t;
                    }, t),
                    i = function(e) {
                      var t = 0,
                        n = ['ctrl', 'shift', 'alt'];
                      return (
                        n.forEach(function(n) {
                          e[n] && t++;
                        }),
                        t
                      );
                    };
                  this.shortcuts = Object.keys(n)
                    .map(function(e) {
                      return n[e];
                    })
                    .sort(function(e, t) {
                      return i(t) - i(e);
                    });
                },
              },
              {
                key: 'togglePlay',
                value: function(e, t) {
                  e.paused
                    ? t.play({ action: 'play', source: 'shortcut' })
                    : t.pause({ action: 'pause', source: 'shortcut' });
                },
              },
              {
                key: 'toggleFullscreen',
                value: function(e, t) {
                  t.toggleFullscreen(e);
                },
              },
              {
                key: 'handleKeyPress',
                value: function(e) {
                  var t = this.props,
                    n = t.player,
                    i = t.actions;
                  if (
                    n.isActive &&
                    (!document.activeElement ||
                      !(
                        (0, v.hasClass)(document.activeElement, 'video-react-control') ||
                        (0, v.hasClass)(document.activeElement, 'video-react-menu-button-active') ||
                        (0, v.hasClass)(document.activeElement, 'video-react-big-play-button')
                      ))
                  ) {
                    var a = e.keyCode || e.which,
                      r = e.ctrlKey || e.metaKey,
                      o = e.shiftKey,
                      l = e.altKey,
                      s = this.shortcuts.filter(function(e) {
                        return (
                          !(!e.keyCode || e.keyCode - a !== 0) &&
                          !(
                            (void 0 !== e.ctrl && e.ctrl !== r) ||
                            (void 0 !== e.shift && e.shift !== o) ||
                            (void 0 !== e.alt && e.alt !== l)
                          )
                        );
                      })[0];
                    s && (s.handle(n, i), e.preventDefault());
                  }
                },
              },
              {
                key: 'canBeClicked',
                value: function(e, t) {
                  return !(!e.isActive || 'VIDEO' !== t.target.nodeName || 4 !== e.readyState);
                },
              },
              {
                key: 'handleClick',
                value: function(e) {
                  var t = this.props,
                    n = t.player,
                    i = t.actions,
                    a = t.clickable;
                  this.canBeClicked(n, e) && a && this.togglePlay(n, i);
                },
              },
              {
                key: 'handleDoubleClick',
                value: function(e) {
                  var t = this.props,
                    n = t.player,
                    i = t.actions,
                    a = t.dblclickable;
                  this.canBeClicked(n, e) && a && this.toggleFullscreen(n, i);
                },
              },
              {
                key: 'render',
                value: function() {
                  return null;
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t['default'] = y), (y.propTypes = p), (y.defaultProps = m), (y.displayName = 'Shortcut');
    },
    MVZn: function(e, t, n) {
      var i = n('lSNA');
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? Object(arguments[t]) : {},
            a = Object.keys(n);
          'function' === typeof Object.getOwnPropertySymbols &&
            a.push.apply(
              a,
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            ),
            a.forEach(function(t) {
              i(e, t, n[t]);
            });
        }
        return e;
      }
      (e.exports = a), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    Na29: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var a = i(n('17x9')),
        r = i(n('q1tI')),
        o = i(n('TSYQ')),
        l = n('tJTW'),
        s = { player: a['default'].object, className: a['default'].string };
      function u(e) {
        var t = e.player,
          n = t.currentTime,
          i = t.duration,
          a = e.className,
          s = i - n,
          u = (0, l.formatTime)(s);
        return r['default'].createElement(
          'div',
          {
            className: (0, o['default'])(
              'video-react-remaining-time video-react-time-control video-react-control',
              a
            ),
          },
          r['default'].createElement(
            'div',
            { className: 'video-react-remaining-time-display', 'aria-live': 'off' },
            r['default'].createElement(
              'span',
              { className: 'video-react-control-text' },
              'Remaining Time '
            ),
            '-'.concat(u)
          )
        );
      }
      (u.propTypes = s), (u.displayName = 'RemainingTimeDisplay');
      var d = u;
      t['default'] = d;
    },
    Nsbk: function(e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          (e.exports.__esModule = !0),
          (e.exports['default'] = e.exports),
          n(t)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    PJYZ: function(e, t) {
      function n(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    QILm: function(e, t, n) {
      var i = n('8OQS');
      function a(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = i(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (n = o[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      (e.exports = a), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    QJtQ: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = f);
      var a = i(n('pVnL')),
        r = i(n('MVZn')),
        o = i(n('17x9')),
        l = i(n('q1tI')),
        s = i(n('TSYQ')),
        u = i(n('mJvV')),
        d = i(n('4FqI')),
        c = {
          inline: o['default'].bool,
          onClick: o['default'].func.isRequired,
          onFocus: o['default'].func,
          onBlur: o['default'].func,
          className: o['default'].string,
        },
        h = { inline: !0 };
      function f(e) {
        var t = e.inline,
          n = e.className,
          i = (0, r['default'])({}, e);
        return (
          delete i.children,
          delete i.inline,
          delete i.className,
          l['default'].createElement(
            u['default'],
            (0, a['default'])(
              {
                className: (0, s['default'])(
                  n,
                  { 'video-react-menu-button-inline': !!t, 'video-react-menu-button-popup': !t },
                  'video-react-control video-react-button video-react-menu-button'
                ),
              },
              i
            ),
            l['default'].createElement(d['default'], e)
          )
        );
      }
      (f.propTypes = c), (f.defaultProps = h), (f.displayName = 'PopupButton');
    },
    Qrqe: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('pVnL')),
        o = a(n('lwsE')),
        l = a(n('W8MJ')),
        s = a(n('a1gu')),
        u = a(n('Nsbk')),
        d = a(n('PJYZ')),
        c = a(n('7W2i')),
        h = a(n('17x9')),
        f = i(n('q1tI')),
        v = a(n('TSYQ')),
        p = a(n('kXlQ')),
        m = a(n('jSMv')),
        y = {
          actions: h['default'].object,
          player: h['default'].object,
          className: h['default'].string,
          onFocus: h['default'].func,
          onBlur: h['default'].func,
        },
        g = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, o['default'])(this, t),
              (i = (0, s['default'])(this, (0, u['default'])(t).call(this, e, n))),
              (i.state = { percentage: '0%' }),
              (i.handleMouseMove = i.handleMouseMove.bind((0, d['default'])(i))),
              (i.handlePercentageChange = i.handlePercentageChange.bind((0, d['default'])(i))),
              (i.checkMuted = i.checkMuted.bind((0, d['default'])(i))),
              (i.getPercent = i.getPercent.bind((0, d['default'])(i))),
              (i.stepForward = i.stepForward.bind((0, d['default'])(i))),
              (i.stepBack = i.stepBack.bind((0, d['default'])(i))),
              (i.handleFocus = i.handleFocus.bind((0, d['default'])(i))),
              (i.handleBlur = i.handleBlur.bind((0, d['default'])(i))),
              (i.handleClick = i.handleClick.bind((0, d['default'])(i))),
              i
            );
          }
          return (
            (0, c['default'])(t, e),
            (0, l['default'])(t, [
              { key: 'componentDidMount', value: function() {} },
              {
                key: 'getPercent',
                value: function() {
                  var e = this.props.player;
                  return e.muted ? 0 : e.volume;
                },
              },
              {
                key: 'checkMuted',
                value: function() {
                  var e = this.props,
                    t = e.player,
                    n = e.actions;
                  t.muted && n.mute(!1);
                },
              },
              {
                key: 'handleMouseMove',
                value: function(e) {
                  var t = this.props.actions;
                  this.checkMuted();
                  var n = this.slider.calculateDistance(e);
                  t.changeVolume(n);
                },
              },
              {
                key: 'stepForward',
                value: function() {
                  var e = this.props,
                    t = e.player,
                    n = e.actions;
                  this.checkMuted(), n.changeVolume(t.volume + 0.1);
                },
              },
              {
                key: 'stepBack',
                value: function() {
                  var e = this.props,
                    t = e.player,
                    n = e.actions;
                  this.checkMuted(), n.changeVolume(t.volume - 0.1);
                },
              },
              {
                key: 'handleFocus',
                value: function(e) {
                  this.props.onFocus && this.props.onFocus(e);
                },
              },
              {
                key: 'handleBlur',
                value: function(e) {
                  this.props.onBlur && this.props.onBlur(e);
                },
              },
              {
                key: 'handlePercentageChange',
                value: function(e) {
                  e !== this.state.percentage && this.setState({ percentage: e });
                },
              },
              {
                key: 'handleClick',
                value: function(e) {
                  e.stopPropagation();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.player,
                    i = t.className,
                    a = (100 * n.volume).toFixed(2);
                  return f['default'].createElement(
                    p['default'],
                    (0, r['default'])(
                      {
                        ref: function(t) {
                          e.slider = t;
                        },
                        label: 'volume level',
                        valuenow: a,
                        valuetext: ''.concat(a, '%'),
                        onMouseMove: this.handleMouseMove,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onClick: this.handleClick,
                        sliderActive: this.handleFocus,
                        sliderInactive: this.handleBlur,
                        getPercent: this.getPercent,
                        onPercentageChange: this.handlePercentageChange,
                        stepForward: this.stepForward,
                        stepBack: this.stepBack,
                      },
                      this.props,
                      {
                        className: (0, v['default'])(
                          i,
                          'video-react-volume-bar video-react-slider-bar'
                        ),
                      }
                    ),
                    f['default'].createElement(m['default'], this.props)
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (g.propTypes = y), (g.displayName = 'VolumeBar');
      var b = g;
      t['default'] = b;
    },
    RIqP: function(e, t, n) {
      var i = n('Ijbi'),
        a = n('EbDI'),
        r = n('ZhPi'),
        o = n('Bnag');
      function l(e) {
        return i(e) || a(e) || r(e) || o();
      }
      (e.exports = l), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    SksO: function(e, t) {
      function n(t, i) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function(e, t) {
                return (e.__proto__ = t), e;
              }),
          (e.exports.__esModule = !0),
          (e.exports['default'] = e.exports),
          n(t, i)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    TqRt: function(e, t) {
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    U3K2: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = a(n('TSYQ')),
        v = a(n('o4RB')),
        p = a(n('DeZD')),
        m = a(n('mJvV')),
        y = {
          inline: c['default'].bool,
          items: c['default'].array,
          className: c['default'].string,
          onSelectItem: c['default'].func,
          children: c['default'].any,
          selectedIndex: c['default'].number,
        },
        g = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.state = { active: !1, activateIndex: e.selectedIndex || 0 }),
              (i.commitSelection = i.commitSelection.bind((0, u['default'])(i))),
              (i.activateMenuItem = i.activateMenuItem.bind((0, u['default'])(i))),
              (i.handleClick = i.handleClick.bind((0, u['default'])(i))),
              (i.renderMenu = i.renderMenu.bind((0, u['default'])(i))),
              (i.handleFocus = i.handleFocus.bind((0, u['default'])(i))),
              (i.handleBlur = i.handleBlur.bind((0, u['default'])(i))),
              (i.handleUpArrow = i.handleUpArrow.bind((0, u['default'])(i))),
              (i.handleDownArrow = i.handleDownArrow.bind((0, u['default'])(i))),
              (i.handleEscape = i.handleEscape.bind((0, u['default'])(i))),
              (i.handleReturn = i.handleReturn.bind((0, u['default'])(i))),
              (i.handleTab = i.handleTab.bind((0, u['default'])(i))),
              (i.handleKeyPress = i.handleKeyPress.bind((0, u['default'])(i))),
              (i.handleSelectItem = i.handleSelectItem.bind((0, u['default'])(i))),
              (i.handleIndexChange = i.handleIndexChange.bind((0, u['default'])(i))),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  e.selectedIndex !== this.props.selectedIndex &&
                    this.activateMenuItem(this.props.selectedIndex);
                },
              },
              {
                key: 'commitSelection',
                value: function(e) {
                  this.setState({ activateIndex: e }), this.handleIndexChange(e);
                },
              },
              {
                key: 'activateMenuItem',
                value: function(e) {
                  this.setState({ activateIndex: e }), this.handleIndexChange(e);
                },
              },
              {
                key: 'handleIndexChange',
                value: function(e) {
                  var t = this.props.onSelectItem;
                  t(e);
                },
              },
              {
                key: 'handleClick',
                value: function() {
                  this.setState(function(e) {
                    return { active: !e.active };
                  });
                },
              },
              {
                key: 'handleFocus',
                value: function() {
                  document.addEventListener('keydown', this.handleKeyPress);
                },
              },
              {
                key: 'handleBlur',
                value: function() {
                  this.setState({ active: !1 }),
                    document.removeEventListener('keydown', this.handleKeyPress);
                },
              },
              {
                key: 'handleUpArrow',
                value: function(e) {
                  var t = this.props.items;
                  if (this.state.active) {
                    e.preventDefault();
                    var n = this.state.activateIndex - 1;
                    n < 0 && (n = t.length ? t.length - 1 : 0), this.activateMenuItem(n);
                  }
                },
              },
              {
                key: 'handleDownArrow',
                value: function(e) {
                  var t = this.props.items;
                  if (this.state.active) {
                    e.preventDefault();
                    var n = this.state.activateIndex + 1;
                    n >= t.length && (n = 0), this.activateMenuItem(n);
                  }
                },
              },
              {
                key: 'handleTab',
                value: function(e) {
                  this.state.active &&
                    (e.preventDefault(), this.commitSelection(this.state.activateIndex));
                },
              },
              {
                key: 'handleReturn',
                value: function(e) {
                  e.preventDefault(),
                    this.state.active
                      ? this.commitSelection(this.state.activateIndex)
                      : this.setState({ active: !0 });
                },
              },
              {
                key: 'handleEscape',
                value: function() {
                  this.setState({ active: !1, activateIndex: 0 });
                },
              },
              {
                key: 'handleKeyPress',
                value: function(e) {
                  27 === e.which
                    ? this.handleEscape(e)
                    : 9 === e.which
                    ? this.handleTab(e)
                    : 13 === e.which
                    ? this.handleReturn(e)
                    : 38 === e.which
                    ? this.handleUpArrow(e)
                    : 40 === e.which && this.handleDownArrow(e);
                },
              },
              {
                key: 'handleSelectItem',
                value: function(e) {
                  this.commitSelection(e);
                },
              },
              {
                key: 'renderMenu',
                value: function() {
                  var e = this;
                  if (!this.state.active) return null;
                  var t = this.props.items;
                  return h['default'].createElement(
                    v['default'],
                    null,
                    t.map(function(t, n) {
                      return h['default'].createElement(p['default'], {
                        item: t,
                        index: n,
                        onSelectItem: e.handleSelectItem,
                        activateIndex: e.state.activateIndex,
                        key: 'item-'.concat(n++),
                      });
                    })
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.inline,
                    i = t.className;
                  return h['default'].createElement(
                    m['default'],
                    {
                      className: (0, f['default'])(
                        i,
                        {
                          'video-react-menu-button-inline': !!n,
                          'video-react-menu-button-popup': !n,
                          'video-react-menu-button-active': this.state.active,
                        },
                        'video-react-control video-react-button video-react-menu-button'
                      ),
                      role: 'button',
                      tabIndex: '0',
                      ref: function(t) {
                        e.menuButton = t;
                      },
                      onClick: this.handleClick,
                      onFocus: this.handleFocus,
                      onBlur: this.handleBlur,
                    },
                    this.props.children,
                    this.renderMenu()
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t['default'] = g), (g.propTypes = y), (g.displayName = 'MenuButton');
    },
    UXv2: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var a = i(n('8nKf')),
        r = (0, a['default'])('replay');
      r.displayName = 'ReplayControl';
      var o = r;
      t['default'] = o;
    },
    W8MJ: function(e, t, n) {
      var i = n('o5UB');
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, i(a.key), a);
        }
      }
      function r(e, t, n) {
        return (
          t && a(e.prototype, t),
          n && a(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      (e.exports = r), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    WkPL: function(e, t) {
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    X2cd: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = s);
      var a = i(n('17x9')),
        r = i(n('q1tI')),
        o = i(n('TSYQ')),
        l = { player: a['default'].object, className: a['default'].string };
      function s(e) {
        var t = e.player,
          n = e.className;
        return t.error
          ? null
          : r['default'].createElement('div', {
              className: (0, o['default'])('video-react-loading-spinner', n),
            });
      }
      (s.propTypes = l), (s.displayName = 'LoadingSpinner');
    },
    ZhPi: function(e, t, n) {
      var i = n('WkPL');
      function a(e, t) {
        if (e) {
          if ('string' === typeof e) return i(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(e, t)
              : void 0
          );
        }
      }
      (e.exports = a), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    a1gu: function(e, t, n) {
      var i = n('cDf5')['default'],
        a = n('PJYZ');
      function r(e, t) {
        if (t && ('object' === i(t) || 'function' === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError('Derived constructors may only return object or undefined');
        return a(e);
      }
      (e.exports = r), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    cDf5: function(e, t) {
      function n(t) {
        '@babel/helpers - typeof';
        return (
          (e.exports = n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports['default'] = e.exports),
          n(t)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    'cT/l': function(e, t, n) {
      'use strict';
      n.r(t);
      var i,
        a,
        r = n('2Taf'),
        o = n.n(r),
        l = n('vZ4D'),
        s = n.n(l),
        u = n('MhPg'),
        d = n.n(u),
        c = n('l4Ni'),
        h = n.n(c),
        f = n('ujKo'),
        v = n.n(f),
        p = n('q1tI'),
        m = n.n(p),
        y = n('MuoO'),
        g = n('GXTP'),
        b = n.n(g),
        w = n('udzn');
      n('riYV');
      function k(e) {
        var t = E();
        return function() {
          var n,
            i = v()(e);
          if (t) {
            var a = v()(this).constructor;
            n = Reflect.construct(i, arguments, a);
          } else n = i.apply(this, arguments);
          return h()(this, n);
        };
      }
      function E() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      }
      var T =
        ((i = Object(y['connect'])(function(e) {
          var t = e.api;
          return { api: t };
        })),
        i(
          (a = (function(e) {
            d()(n, e);
            var t = k(n);
            function n() {
              var e;
              o()(this, n);
              for (var i = arguments.length, a = new Array(i), r = 0; r < i; r++)
                a[r] = arguments[r];
              return (e = t.call.apply(t, [this].concat(a))), (e.state = { params: {} }), e;
            }
            return (
              s()(n, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this,
                      t = {
                        user_media_id: this.props.match.params.user_media_id,
                        authorization: this.props.match.params.authorization,
                      };
                    this.setState({ params: t }, function() {
                      e.fetch();
                    });
                  },
                },
                {
                  key: 'fetch',
                  value: function() {
                    var e = this.props.dispatch;
                    e({ type: 'api/detail', payload: this.state.params });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.api,
                      t = e.mediaDetail;
                    t.title && (document.title = t.title);
                    var n = '';
                    if (void 0 !== t.file_ext)
                      switch (t.file_ext.toLowerCase()) {
                        case 'png':
                        case 'gif':
                        case 'jpg':
                        case 'jpeg':
                          n = m.a.createElement(
                            b.a,
                            { options: { inline: !0, button: !1 } },
                            m.a.createElement('img', {
                              height: '0',
                              width: '0',
                              style: { opacity: 0 },
                              src: t.file_url,
                              alt: t.title,
                            })
                          );
                          break;
                        case 'mp4':
                        case 'avi':
                          n = m.a.createElement(
                            w['Player'],
                            { fluid: !1, height: '100%' },
                            m.a.createElement('source', { src: t.file_url })
                          );
                          break;
                        default:
                          window.location.href = '/api/show?user_media_id='
                            .concat(this.state.params.user_media_id, '&authorization=')
                            .concat(this.state.params.authorization);
                          break;
                      }
                    return m.a.createElement(
                      'div',
                      { style: { position: 'absolute', height: '100%', width: '100%' } },
                      n
                    );
                  },
                },
              ]),
              n
            );
          })(p['Component']))
        ) || a);
      t['default'] = T;
    },
    iAfH: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('MVZn')),
        o = a(n('lwsE')),
        l = a(n('W8MJ')),
        s = n('ANjH'),
        u = a(n('ulZL')),
        d = i(n('we7k')),
        c = i(n('INgg')),
        h = (function() {
          function e(t) {
            (0, o['default'])(this, e),
              (this.store = t || (0, s.createStore)(u['default'])),
              (this.video = null),
              (this.rootElement = null);
          }
          return (
            (0, l['default'])(e, [
              {
                key: 'getActions',
                value: function() {
                  var e = this,
                    t = this.store.dispatch,
                    n = (0, r['default'])({}, d, c);
                  function i(n) {
                    return function() {
                      var i = n.apply(e, arguments);
                      'undefined' !== typeof i && t(i);
                    };
                  }
                  return Object.keys(n)
                    .filter(function(e) {
                      return 'function' === typeof n[e];
                    })
                    .reduce(function(e, t) {
                      return (e[t] = i(n[t])), e;
                    }, {});
                },
              },
              {
                key: 'getState',
                value: function() {
                  return this.store.getState();
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function(e, t) {
                  t || (t = this.getState.bind(this));
                  var n = t(),
                    i = function() {
                      var i = t();
                      if (i !== n) {
                        var a = n;
                        (n = i), e(i, a);
                      }
                    };
                  return this.store.subscribe(i);
                },
              },
              {
                key: 'subscribeToOperationStateChange',
                value: function(e) {
                  var t = this;
                  return this.subscribeToStateChange(e, function() {
                    return t.getState().operation;
                  });
                },
              },
              {
                key: 'subscribeToPlayerStateChange',
                value: function(e) {
                  var t = this;
                  return this.subscribeToStateChange(e, function() {
                    return t.getState().player;
                  });
                },
              },
            ]),
            e
          );
        })();
      t['default'] = h;
    },
    jSMv: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var a = i(n('17x9')),
        r = i(n('q1tI')),
        o = i(n('TSYQ')),
        l = {
          percentage: a['default'].string,
          vertical: a['default'].bool,
          className: a['default'].string,
        },
        s = { percentage: '100%', vertical: !1 };
      function u(e) {
        var t = e.percentage,
          n = e.vertical,
          i = e.className,
          a = {};
        return (
          n ? (a.height = t) : (a.width = t),
          r['default'].createElement(
            'div',
            { className: (0, o['default'])(i, 'video-react-volume-level'), style: a },
            r['default'].createElement('span', { className: 'video-react-control-text' })
          )
        );
      }
      (u.propTypes = l), (u.defaultProps = s), (u.displayName = 'VolumeLevel');
      var d = u;
      t['default'] = d;
    },
    kXlQ: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = a(n('TSYQ')),
        v = i(n('EVUy')),
        p = {
          className: c['default'].string,
          onMouseDown: c['default'].func,
          onMouseMove: c['default'].func,
          stepForward: c['default'].func,
          stepBack: c['default'].func,
          sliderActive: c['default'].func,
          sliderInactive: c['default'].func,
          onMouseUp: c['default'].func,
          onFocus: c['default'].func,
          onBlur: c['default'].func,
          onClick: c['default'].func,
          getPercent: c['default'].func,
          vertical: c['default'].bool,
          children: c['default'].node,
          label: c['default'].string,
          valuenow: c['default'].string,
          valuetext: c['default'].string,
        },
        m = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.handleMouseDown = i.handleMouseDown.bind((0, u['default'])(i))),
              (i.handleMouseMove = i.handleMouseMove.bind((0, u['default'])(i))),
              (i.handleMouseUp = i.handleMouseUp.bind((0, u['default'])(i))),
              (i.handleFocus = i.handleFocus.bind((0, u['default'])(i))),
              (i.handleBlur = i.handleBlur.bind((0, u['default'])(i))),
              (i.handleClick = i.handleClick.bind((0, u['default'])(i))),
              (i.handleKeyPress = i.handleKeyPress.bind((0, u['default'])(i))),
              (i.stepForward = i.stepForward.bind((0, u['default'])(i))),
              (i.stepBack = i.stepBack.bind((0, u['default'])(i))),
              (i.calculateDistance = i.calculateDistance.bind((0, u['default'])(i))),
              (i.getProgress = i.getProgress.bind((0, u['default'])(i))),
              (i.renderChildren = i.renderChildren.bind((0, u['default'])(i))),
              (i.state = { active: !1 }),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener('mousemove', this.handleMouseMove, !0),
                    document.removeEventListener('mouseup', this.handleMouseUp, !0),
                    document.removeEventListener('touchmove', this.handleMouseMove, !0),
                    document.removeEventListener('touchend', this.handleMouseUp, !0),
                    document.removeEventListener('keydown', this.handleKeyPress, !0);
                },
              },
              {
                key: 'getProgress',
                value: function() {
                  var e = this.props.getPercent;
                  if (!e) return 0;
                  var t = e();
                  return ('number' !== typeof t || t < 0 || t === 1 / 0) && (t = 0), t;
                },
              },
              {
                key: 'handleMouseDown',
                value: function(e) {
                  var t = this.props.onMouseDown;
                  document.addEventListener('mousemove', this.handleMouseMove, !0),
                    document.addEventListener('mouseup', this.handleMouseUp, !0),
                    document.addEventListener('touchmove', this.handleMouseMove, !0),
                    document.addEventListener('touchend', this.handleMouseUp, !0),
                    this.setState({ active: !0 }),
                    this.props.sliderActive && this.props.sliderActive(e),
                    this.handleMouseMove(e),
                    t && t(e);
                },
              },
              {
                key: 'handleMouseMove',
                value: function(e) {
                  var t = this.props.onMouseMove;
                  t && t(e);
                },
              },
              {
                key: 'handleMouseUp',
                value: function(e) {
                  e.preventDefault();
                  var t = this.props.onMouseUp;
                  document.removeEventListener('mousemove', this.handleMouseMove, !0),
                    document.removeEventListener('mouseup', this.handleMouseUp, !0),
                    document.removeEventListener('touchmove', this.handleMouseMove, !0),
                    document.removeEventListener('touchend', this.handleMouseUp, !0),
                    this.setState({ active: !1 }),
                    this.props.sliderInactive && this.props.sliderInactive(e),
                    t && t(e);
                },
              },
              {
                key: 'handleFocus',
                value: function(e) {
                  document.addEventListener('keydown', this.handleKeyPress, !0),
                    this.props.onFocus && this.props.onFocus(e);
                },
              },
              {
                key: 'handleBlur',
                value: function(e) {
                  document.removeEventListener('keydown', this.handleKeyPress, !0),
                    this.props.onBlur && this.props.onBlur(e);
                },
              },
              {
                key: 'handleClick',
                value: function(e) {
                  e.preventDefault(), this.props.onClick && this.props.onClick(e);
                },
              },
              {
                key: 'handleKeyPress',
                value: function(e) {
                  37 === e.which || 40 === e.which
                    ? (e.preventDefault(), e.stopPropagation(), this.stepBack())
                    : (38 !== e.which && 39 !== e.which) ||
                      (e.preventDefault(), e.stopPropagation(), this.stepForward());
                },
              },
              {
                key: 'stepForward',
                value: function() {
                  this.props.stepForward && this.props.stepForward();
                },
              },
              {
                key: 'stepBack',
                value: function() {
                  this.props.stepBack && this.props.stepBack();
                },
              },
              {
                key: 'calculateDistance',
                value: function(e) {
                  var t = this.slider,
                    n = v.getPointerPosition(t, e);
                  return this.props.vertical ? n.y : n.x;
                },
              },
              {
                key: 'renderChildren',
                value: function() {
                  var e = this.getProgress(),
                    t = ''.concat((100 * e).toFixed(2), '%');
                  return h['default'].Children.map(this.props.children, function(n) {
                    return h['default'].cloneElement(n, { progress: e, percentage: t });
                  });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.vertical,
                    i = t.label,
                    a = t.valuenow,
                    r = t.valuetext;
                  return h['default'].createElement(
                    'div',
                    {
                      className: (0, f['default'])(
                        this.props.className,
                        {
                          'video-react-slider-vertical': n,
                          'video-react-slider-horizontal': !n,
                          'video-react-sliding': this.state.active,
                        },
                        'video-react-slider'
                      ),
                      ref: function(t) {
                        e.slider = t;
                      },
                      tabIndex: '0',
                      role: 'slider',
                      onMouseDown: this.handleMouseDown,
                      onTouchStart: this.handleMouseDown,
                      onFocus: this.handleFocus,
                      onBlur: this.handleBlur,
                      onClick: this.handleClick,
                      'aria-label': i || '',
                      'aria-valuenow': a || '',
                      'aria-valuetext': r || '',
                      'aria-valuemin': 0,
                      'aria-valuemax': 100,
                    },
                    this.renderChildren()
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t['default'] = m), (m.propTypes = p), (m.displayName = 'Slider');
    },
    lSNA: function(e, t, n) {
      var i = n('o5UB');
      function a(e, t, n) {
        return (
          (t = i(t)),
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      (e.exports = a), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    lwsE: function(e, t) {
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    mJvV: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('pVnL')),
        o = a(n('MVZn')),
        l = a(n('lwsE')),
        s = a(n('W8MJ')),
        u = a(n('a1gu')),
        d = a(n('Nsbk')),
        c = a(n('PJYZ')),
        h = a(n('7W2i')),
        f = a(n('17x9')),
        v = i(n('q1tI')),
        p = a(n('TSYQ')),
        m = {
          tagName: f['default'].string,
          onClick: f['default'].func.isRequired,
          onFocus: f['default'].func,
          onBlur: f['default'].func,
          className: f['default'].string,
        },
        y = { tagName: 'div' },
        g = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, l['default'])(this, t),
              (i = (0, u['default'])(this, (0, d['default'])(t).call(this, e, n))),
              (i.handleClick = i.handleClick.bind((0, c['default'])(i))),
              (i.handleFocus = i.handleFocus.bind((0, c['default'])(i))),
              (i.handleBlur = i.handleBlur.bind((0, c['default'])(i))),
              (i.handleKeypress = i.handleKeypress.bind((0, c['default'])(i))),
              i
            );
          }
          return (
            (0, h['default'])(t, e),
            (0, s['default'])(t, [
              {
                key: 'handleKeypress',
                value: function(e) {
                  (32 !== e.which && 13 !== e.which) || (e.preventDefault(), this.handleClick(e));
                },
              },
              {
                key: 'handleClick',
                value: function(e) {
                  var t = this.props.onClick;
                  t(e);
                },
              },
              {
                key: 'handleFocus',
                value: function(e) {
                  document.addEventListener('keydown', this.handleKeypress),
                    this.props.onFocus && this.props.onFocus(e);
                },
              },
              {
                key: 'handleBlur',
                value: function(e) {
                  document.removeEventListener('keydown', this.handleKeypress),
                    this.props.onBlur && this.props.onBlur(e);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.tagName,
                    t = (0, o['default'])({}, this.props);
                  return (
                    delete t.tagName,
                    delete t.className,
                    v['default'].createElement(
                      e,
                      (0, r['default'])(
                        {
                          className: (0, p['default'])(this.props.className),
                          role: 'button',
                          tabIndex: '0',
                          onClick: this.handleClick,
                          onFocus: this.handleFocus,
                          onBlur: this.handleBlur,
                        },
                        t
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(v.Component);
      (t['default'] = g),
        (g.propTypes = m),
        (g.defaultProps = y),
        (g.displayName = 'ClickableComponent');
    },
    o4RB: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = { children: c['default'].any },
        v = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.handleClick = i.handleClick.bind((0, u['default'])(i))),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              {
                key: 'handleClick',
                value: function(e) {
                  e.preventDefault();
                },
              },
              {
                key: 'render',
                value: function() {
                  return h['default'].createElement(
                    'div',
                    {
                      className: 'video-react-menu video-react-lock-showing',
                      role: 'presentation',
                      onClick: this.handleClick,
                    },
                    h['default'].createElement(
                      'ul',
                      { className: 'video-react-menu-content' },
                      this.props.children
                    )
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t['default'] = v), (v.propTypes = f), (v.displayName = 'Menu');
    },
    o5UB: function(e, t, n) {
      var i = n('cDf5')['default'],
        a = n('5Q0V');
      function r(e) {
        var t = a(e, 'string');
        return 'symbol' === i(t) ? t : String(t);
      }
      (e.exports = r), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    pVnL: function(e, t) {
      function n() {
        return (
          (e.exports = n = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          (e.exports.__esModule = !0),
          (e.exports['default'] = e.exports),
          n.apply(this, arguments)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports['default'] = e.exports);
    },
    'q+t5': function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = u);
      var a = i(n('17x9')),
        r = i(n('q1tI')),
        o = i(n('TSYQ')),
        l = n('tJTW'),
        s = {
          currentTime: a['default'].number,
          duration: a['default'].number,
          percentage: a['default'].string,
          className: a['default'].string,
        };
      function u(e) {
        var t = e.currentTime,
          n = e.duration,
          i = e.percentage,
          a = e.className;
        return r['default'].createElement(
          'div',
          {
            'data-current-time': (0, l.formatTime)(t, n),
            className: (0, o['default'])('video-react-play-progress video-react-slider-bar', a),
            style: { width: i },
          },
          r['default'].createElement(
            'span',
            { className: 'video-react-control-text' },
            'Progress: '.concat(i)
          )
        );
      }
      (u.propTypes = s), (u.displayName = 'PlayProgressBar');
    },
    qdLH: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.IS_IOS = t.IS_IPOD = t.IS_IPHONE = t.IS_IPAD = void 0);
      var i = 'undefined' !== typeof window && window.navigator ? window.navigator.userAgent : '',
        a = /iPad/i.test(i);
      t.IS_IPAD = a;
      var r = /iPhone/i.test(i) && !a;
      t.IS_IPHONE = r;
      var o = /iPod/i.test(i);
      t.IS_IPOD = o;
      var l = r || a || o;
      t.IS_IOS = l;
    },
    riYV: function(e, t, n) {
      e.exports = {
        'video-react': 'video-react',
        'video-react-big-play-button': 'video-react-big-play-button',
        'video-react-control': 'video-react-control',
        'video-react-icon': 'video-react-icon',
        'video-react-bezel': 'video-react-bezel',
        'video-react-bezel-icon': 'video-react-bezel-icon',
        'video-react-closed-caption': 'video-react-closed-caption',
        'video-react-mute-control': 'video-react-mute-control',
        'video-react-play-control': 'video-react-play-control',
        'video-react-play-progress': 'video-react-play-progress',
        'video-react-volume-level': 'video-react-volume-level',
        'video-react-volume-menu-button': 'video-react-volume-menu-button',
        'video-react-icon-play-arrow': 'video-react-icon-play-arrow',
        'video-react-bezel-icon-play': 'video-react-bezel-icon-play',
        'video-react-icon-play-circle-filled': 'video-react-icon-play-circle-filled',
        'video-react-icon-play-circle-outline': 'video-react-icon-play-circle-outline',
        'video-react-icon-pause': 'video-react-icon-pause',
        'video-react-bezel-icon-pause': 'video-react-bezel-icon-pause',
        'video-react-playing': 'video-react-playing',
        'video-react-icon-pause-circle-filled': 'video-react-icon-pause-circle-filled',
        'video-react-icon-pause-circle-outline': 'video-react-icon-pause-circle-outline',
        'video-react-icon-stop': 'video-react-icon-stop',
        'video-react-icon-fast-rewind': 'video-react-icon-fast-rewind',
        'video-react-bezel-icon-fast-rewind': 'video-react-bezel-icon-fast-rewind',
        'video-react-icon-fast-forward': 'video-react-icon-fast-forward',
        'video-react-bezel-icon-fast-forward': 'video-react-bezel-icon-fast-forward',
        'video-react-icon-skip-previous': 'video-react-icon-skip-previous',
        'video-react-icon-skip-next': 'video-react-icon-skip-next',
        'video-react-icon-replay-5': 'video-react-icon-replay-5',
        'video-react-bezel-icon-replay-5': 'video-react-bezel-icon-replay-5',
        'video-react-icon-replay-10': 'video-react-icon-replay-10',
        'video-react-bezel-icon-replay-10': 'video-react-bezel-icon-replay-10',
        'video-react-icon-replay-30': 'video-react-icon-replay-30',
        'video-react-bezel-icon-replay-30': 'video-react-bezel-icon-replay-30',
        'video-react-icon-forward-5': 'video-react-icon-forward-5',
        'video-react-bezel-icon-forward-5': 'video-react-bezel-icon-forward-5',
        'video-react-icon-forward-10': 'video-react-icon-forward-10',
        'video-react-bezel-icon-forward-10': 'video-react-bezel-icon-forward-10',
        'video-react-icon-forward-30': 'video-react-icon-forward-30',
        'video-react-bezel-icon-forward-30': 'video-react-bezel-icon-forward-30',
        'video-react-icon-volume-off': 'video-react-icon-volume-off',
        'video-react-bezel-icon-volume-off': 'video-react-bezel-icon-volume-off',
        'video-react-vol-muted': 'video-react-vol-muted',
        'video-react-icon-volume-mute': 'video-react-icon-volume-mute',
        'video-react-vol-0': 'video-react-vol-0',
        'video-react-icon-volume-down': 'video-react-icon-volume-down',
        'video-react-bezel-icon-volume-down': 'video-react-bezel-icon-volume-down',
        'video-react-vol-1': 'video-react-vol-1',
        'video-react-vol-2': 'video-react-vol-2',
        'video-react-icon-volume-up': 'video-react-icon-volume-up',
        'video-react-bezel-icon-volume-up': 'video-react-bezel-icon-volume-up',
        'video-react-icon-fullscreen': 'video-react-icon-fullscreen',
        'video-react-icon-fullscreen-exit': 'video-react-icon-fullscreen-exit',
        'video-react-icon-closed-caption': 'video-react-icon-closed-caption',
        'video-react-icon-hd': 'video-react-icon-hd',
        'video-react-icon-settings': 'video-react-icon-settings',
        'video-react-icon-share': 'video-react-icon-share',
        'video-react-icon-info': 'video-react-icon-info',
        'video-react-icon-info-outline': 'video-react-icon-info-outline',
        'video-react-icon-close': 'video-react-icon-close',
        'video-react-icon-circle': 'video-react-icon-circle',
        'video-react-icon-circle-outline': 'video-react-icon-circle-outline',
        'video-react-icon-circle-inner-circle': 'video-react-icon-circle-inner-circle',
        'video-react-4-3': 'video-react-4-3',
        'video-react-16-9': 'video-react-16-9',
        'video-react-fluid': 'video-react-fluid',
        'video-react-fill': 'video-react-fill',
        'video-react-video': 'video-react-video',
        'video-react-fullscreen': 'video-react-fullscreen',
        'video-react-user-inactive': 'video-react-user-inactive',
        'video-react-full-window': 'video-react-full-window',
        'video-react-loading-spinner': 'video-react-loading-spinner',
        'video-react-spinner-spin': 'video-react-spinner-spin',
        'video-react-spinner-fade': 'video-react-spinner-fade',
        'video-react-seeking': 'video-react-seeking',
        'video-react-waiting': 'video-react-waiting',
        'video-react-big-play-button-center': 'video-react-big-play-button-center',
        'big-play-button-hide': 'big-play-button-hide',
        'video-react-menu-button': 'video-react-menu-button',
        'video-react-disabled': 'video-react-disabled',
        'video-react-menu': 'video-react-menu',
        'video-react-menu-content': 'video-react-menu-content',
        'video-react-selected': 'video-react-selected',
        'vjs-menu-title': 'vjs-menu-title',
        'video-react-scrubbing': 'video-react-scrubbing',
        'vjs-menu-button': 'vjs-menu-button',
        'video-react-menu-button-popup': 'video-react-menu-button-popup',
        'video-react-lock-showing': 'video-react-lock-showing',
        'video-react-menu-button-inline': 'video-react-menu-button-inline',
        'video-react-slider-active': 'video-react-slider-active',
        'video-react-no-flex': 'video-react-no-flex',
        'video-react-poster': 'video-react-poster',
        'video-react-slider': 'video-react-slider',
        'video-react-control-text': 'video-react-control-text',
        'video-react-control-bar': 'video-react-control-bar',
        'video-react-has-started': 'video-react-has-started',
        'video-react-control-bar-auto-hide': 'video-react-control-bar-auto-hide',
        'video-react-controls-disabled': 'video-react-controls-disabled',
        'video-react-error': 'video-react-error',
        'video-react-using-native-controls': 'video-react-using-native-controls',
        'video-react-audio': 'video-react-audio',
        'video-react-progress-control': 'video-react-progress-control',
        'video-react-live': 'video-react-live',
        'video-react-progress-holder': 'video-react-progress-holder',
        'video-react-mouse-display': 'video-react-mouse-display',
        'video-react-time-tooltip': 'video-react-time-tooltip',
        'video-react-load-progress': 'video-react-load-progress',
        'video-react-tooltip-progress-bar': 'video-react-tooltip-progress-bar',
        'video-react-keep-tooltips-inside': 'video-react-keep-tooltips-inside',
        'video-react-fullscreen-control': 'video-react-fullscreen-control',
        'video-react-time-control': 'video-react-time-control',
        'video-react-time-divider': 'video-react-time-divider',
        'video-react-volume-control': 'video-react-volume-control',
        'video-react-volume-bar': 'video-react-volume-bar',
        'video-react-slider-horizontal': 'video-react-slider-horizontal',
        'video-react-slider-vertical': 'video-react-slider-vertical',
        'video-react-volume-menu-button-vertical': 'video-react-volume-menu-button-vertical',
        'video-react-volume-menu-button-horizontal': 'video-react-volume-menu-button-horizontal',
        'video-react-playback-rate': 'video-react-playback-rate',
        'video-react-playback-rate-value': 'video-react-playback-rate-value',
        'video-react-bezel-animation': 'video-react-bezel-animation',
        'video-react-bezel-fadeout': 'video-react-bezel-fadeout',
        'video-react-bezel-animation-alt': 'video-react-bezel-animation-alt',
        'video-react-bezel-fadeout-alt': 'video-react-bezel-fadeout-alt',
      };
    },
    rsAN: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = s);
      var a = i(n('17x9')),
        r = i(n('q1tI')),
        o = i(n('TSYQ')),
        l = {
          duration: a['default'].number,
          buffered: a['default'].object,
          className: a['default'].string,
        };
      function s(e) {
        var t = e.buffered,
          n = e.duration,
          i = e.className;
        if (!t || !t.length) return null;
        var a = t.end(t.length - 1),
          l = {};
        function s(e, t) {
          var n = e / t || 0;
          return ''.concat(100 * (n >= 1 ? 1 : n), '%');
        }
        a > n && (a = n), (l.width = s(a, n));
        for (var u = [], d = 0; d < t.length; d++) {
          var c = t.start(d),
            h = t.end(d),
            f = r['default'].createElement('div', {
              style: { left: s(c, a), width: s(h - c, a) },
              key: 'part-'.concat(d),
            });
          u.push(f);
        }
        return (
          0 === u.length && (u = null),
          r['default'].createElement(
            'div',
            { style: l, className: (0, o['default'])('video-react-load-progress', i) },
            r['default'].createElement(
              'span',
              { className: 'video-react-control-text' },
              'Loaded: 0%'
            ),
            u
          )
        );
      }
      (s.propTypes = l), (s.displayName = 'LoadProgressBar');
    },
    ruMa: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = s);
      var a = i(n('17x9')),
        r = i(n('q1tI')),
        o = i(n('TSYQ')),
        l = { separator: a['default'].string, className: a['default'].string };
      function s(e) {
        var t = e.separator,
          n = e.className,
          i = t || '/';
        return r['default'].createElement(
          'div',
          {
            className: (0, o['default'])('video-react-time-control video-react-time-divider', n),
            dir: 'ltr',
          },
          r['default'].createElement('div', null, r['default'].createElement('span', null, i))
        );
      }
      (s.propTypes = l), (s.displayName = 'TimeDivider');
    },
    rzyQ: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var a = i(n('lwsE')),
        r = i(n('W8MJ')),
        o = (function() {
          function e() {
            (0, a['default'])(this, e);
          }
          return (
            (0, r['default'])(e, [
              {
                key: 'request',
                value: function(e) {
                  e.requestFullscreen
                    ? e.requestFullscreen()
                    : e.webkitRequestFullscreen
                    ? e.webkitRequestFullscreen()
                    : e.mozRequestFullScreen
                    ? e.mozRequestFullScreen()
                    : e.msRequestFullscreen && e.msRequestFullscreen();
                },
              },
              {
                key: 'exit',
                value: function() {
                  document.exitFullscreen
                    ? document.exitFullscreen()
                    : document.webkitExitFullscreen
                    ? document.webkitExitFullscreen()
                    : document.mozCancelFullScreen
                    ? document.mozCancelFullScreen()
                    : document.msExitFullscreen && document.msExitFullscreen();
                },
              },
              {
                key: 'addEventListener',
                value: function(e) {
                  document.addEventListener('fullscreenchange', e),
                    document.addEventListener('webkitfullscreenchange', e),
                    document.addEventListener('mozfullscreenchange', e),
                    document.addEventListener('MSFullscreenChange', e);
                },
              },
              {
                key: 'removeEventListener',
                value: function(e) {
                  document.removeEventListener('fullscreenchange', e),
                    document.removeEventListener('webkitfullscreenchange', e),
                    document.removeEventListener('mozfullscreenchange', e),
                    document.removeEventListener('MSFullscreenChange', e);
                },
              },
              {
                key: 'isFullscreen',
                get: function() {
                  return (
                    document.fullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.mozFullScreenElement ||
                    document.msFullscreenElement
                  );
                },
              },
              {
                key: 'enabled',
                get: function() {
                  return (
                    document.fullscreenEnabled ||
                    document.webkitFullscreenEnabled ||
                    document.mozFullScreenEnabled ||
                    document.msFullscreenEnabled
                  );
                },
              },
            ]),
            e
          );
        })(),
        l = new o();
      t['default'] = l;
    },
    tJTW: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.formatTime = u),
        (t.isVideoChild = d),
        (t.mergeAndSortChildren = f),
        (t.deprecatedWarning = v),
        (t.throttle = p),
        (t.mediaProperties = void 0);
      var a = i(n('RIqP')),
        r = i(n('MVZn')),
        o = i(n('QILm')),
        l = i(n('q1tI')),
        s =
          Number.isNaN ||
          function(e) {
            return e !== e;
          };
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
          n = Math.floor(e % 60),
          i = Math.floor((e / 60) % 60),
          a = Math.floor(e / 3600),
          r = Math.floor((t / 60) % 60),
          o = Math.floor(t / 3600);
        return (
          (s(e) || e === 1 / 0) && ((a = '-'), (i = '-'), (n = '-')),
          (a = a > 0 || o > 0 ? ''.concat(a, ':') : ''),
          (i = ''.concat((a || r >= 10) && i < 10 ? '0'.concat(i) : i, ':')),
          (n = n < 10 ? '0'.concat(n) : n),
          a + i + n
        );
      }
      function d(e) {
        return !(!e.props || !e.props.isVideoChild) || 'source' === e.type || 'track' === e.type;
      }
      var c = function(e, t) {
          return e.filter(t)[0];
        },
        h = function(e, t) {
          var n = e.type,
            i = t.type;
          return 'string' === typeof n || 'string' === typeof i
            ? n === i
            : 'function' === typeof n && 'function' === typeof i && n.displayName === i.displayName;
        };
      function f(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          a = l['default'].Children.toArray(t),
          s = (n.order, (0, o['default'])(n, ['order']));
        return a
          .filter(function(e) {
            return !e.props.disabled;
          })
          .concat(
            e.filter(function(e) {
              return !c(a, function(t) {
                return h(t, e);
              });
            })
          )
          .map(function(t) {
            var n = c(e, function(e) {
                return h(e, t);
              }),
              i = n ? n.props : {},
              a = (0, r['default'])({}, s, i, t.props),
              o = l['default'].cloneElement(t, a, t.props.children);
            return o;
          })
          .sort(function(e, t) {
            return (e.props.order || i) - (t.props.order || i);
          });
      }
      function v(e, t) {
        console.warn(
          'WARNING: '.concat(e, ' will be deprecated soon! Please use ').concat(t, ' instead.')
        );
      }
      function p(e, t) {
        var n = arguments,
          i = !1;
        return function() {
          i ||
            (e.apply(void 0, (0, a['default'])(n)),
            (i = !0),
            setTimeout(function() {
              i = !1;
            }, t));
        };
      }
      var m = [
        'error',
        'src',
        'srcObject',
        'currentSrc',
        'crossOrigin',
        'networkState',
        'preload',
        'buffered',
        'readyState',
        'seeking',
        'currentTime',
        'duration',
        'paused',
        'defaultPlaybackRate',
        'playbackRate',
        'played',
        'seekable',
        'ended',
        'autoplay',
        'loop',
        'mediaGroup',
        'controller',
        'controls',
        'volume',
        'muted',
        'defaultMuted',
        'audioTracks',
        'videoTracks',
        'textTracks',
        'width',
        'height',
        'videoWidth',
        'videoHeight',
        'poster',
      ];
      t.mediaProperties = m;
    },
    tPgb: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var a = i(n('17x9')),
        r = i(n('q1tI')),
        o = i(n('TSYQ')),
        l = {
          poster: a['default'].string,
          player: a['default'].object,
          actions: a['default'].object,
          className: a['default'].string,
        };
      function s(e) {
        var t = e.poster,
          n = e.player,
          i = e.actions,
          a = e.className;
        return !t || n.hasStarted
          ? null
          : r['default'].createElement('div', {
              className: (0, o['default'])('video-react-poster', a),
              style: { backgroundImage: 'url("'.concat(t, '")') },
              onClick: function() {
                n.paused && i.play();
              },
            });
      }
      (s.propTypes = l), (s.displayName = 'PosterImage');
      var u = s;
      t['default'] = u;
    },
    udzn: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'Player', {
          enumerable: !0,
          get: function() {
            return r['default'];
          },
        }),
        Object.defineProperty(t, 'Video', {
          enumerable: !0,
          get: function() {
            return o['default'];
          },
        }),
        Object.defineProperty(t, 'BigPlayButton', {
          enumerable: !0,
          get: function() {
            return l['default'];
          },
        }),
        Object.defineProperty(t, 'LoadingSpinner', {
          enumerable: !0,
          get: function() {
            return s['default'];
          },
        }),
        Object.defineProperty(t, 'PosterImage', {
          enumerable: !0,
          get: function() {
            return u['default'];
          },
        }),
        Object.defineProperty(t, 'Slider', {
          enumerable: !0,
          get: function() {
            return d['default'];
          },
        }),
        Object.defineProperty(t, 'Bezel', {
          enumerable: !0,
          get: function() {
            return c['default'];
          },
        }),
        Object.defineProperty(t, 'Shortcut', {
          enumerable: !0,
          get: function() {
            return h['default'];
          },
        }),
        Object.defineProperty(t, 'ControlBar', {
          enumerable: !0,
          get: function() {
            return f['default'];
          },
        }),
        Object.defineProperty(t, 'PlayToggle', {
          enumerable: !0,
          get: function() {
            return v['default'];
          },
        }),
        Object.defineProperty(t, 'ForwardControl', {
          enumerable: !0,
          get: function() {
            return p['default'];
          },
        }),
        Object.defineProperty(t, 'ReplayControl', {
          enumerable: !0,
          get: function() {
            return m['default'];
          },
        }),
        Object.defineProperty(t, 'FullscreenToggle', {
          enumerable: !0,
          get: function() {
            return y['default'];
          },
        }),
        Object.defineProperty(t, 'ProgressControl', {
          enumerable: !0,
          get: function() {
            return g['default'];
          },
        }),
        Object.defineProperty(t, 'SeekBar', {
          enumerable: !0,
          get: function() {
            return b['default'];
          },
        }),
        Object.defineProperty(t, 'PlayProgressBar', {
          enumerable: !0,
          get: function() {
            return w['default'];
          },
        }),
        Object.defineProperty(t, 'LoadProgressBar', {
          enumerable: !0,
          get: function() {
            return k['default'];
          },
        }),
        Object.defineProperty(t, 'MouseTimeDisplay', {
          enumerable: !0,
          get: function() {
            return E['default'];
          },
        }),
        Object.defineProperty(t, 'VolumeMenuButton', {
          enumerable: !0,
          get: function() {
            return T['default'];
          },
        }),
        Object.defineProperty(t, 'PlaybackRateMenuButton', {
          enumerable: !0,
          get: function() {
            return P['default'];
          },
        }),
        Object.defineProperty(t, 'PlaybackRate', {
          enumerable: !0,
          get: function() {
            return x['default'];
          },
        }),
        Object.defineProperty(t, 'ClosedCaptionButton', {
          enumerable: !0,
          get: function() {
            return C['default'];
          },
        }),
        Object.defineProperty(t, 'RemainingTimeDisplay', {
          enumerable: !0,
          get: function() {
            return S['default'];
          },
        }),
        Object.defineProperty(t, 'CurrentTimeDisplay', {
          enumerable: !0,
          get: function() {
            return M['default'];
          },
        }),
        Object.defineProperty(t, 'DurationDisplay', {
          enumerable: !0,
          get: function() {
            return N['default'];
          },
        }),
        Object.defineProperty(t, 'TimeDivider', {
          enumerable: !0,
          get: function() {
            return O['default'];
          },
        }),
        Object.defineProperty(t, 'MenuButton', {
          enumerable: !0,
          get: function() {
            return I['default'];
          },
        }),
        Object.defineProperty(t, 'playerReducer', {
          enumerable: !0,
          get: function() {
            return _.playerReducer;
          },
        }),
        Object.defineProperty(t, 'operationReducer', {
          enumerable: !0,
          get: function() {
            return _.operationReducer;
          },
        }),
        (t.videoActions = t.playerActions = void 0);
      var r = a(n('vcz5')),
        o = a(n('Edwz')),
        l = a(n('vu4D')),
        s = a(n('X2cd')),
        u = a(n('tPgb')),
        d = a(n('kXlQ')),
        c = a(n('zFvY')),
        h = a(n('LgmY')),
        f = a(n('FcgA')),
        v = a(n('0yDM')),
        p = a(n('4b3c')),
        m = a(n('UXv2')),
        y = a(n('54lq')),
        g = a(n('zHIc')),
        b = a(n('xFFL')),
        w = a(n('q+t5')),
        k = a(n('rsAN')),
        E = a(n('GuGs')),
        T = a(n('AZ0a')),
        P = a(n('DGqw')),
        x = a(n('wXLL')),
        C = a(n('yYHT')),
        S = a(n('Na29')),
        M = a(n('HI9P')),
        N = a(n('GdU9')),
        O = a(n('ruMa')),
        I = a(n('U3K2')),
        A = i(n('we7k'));
      t.playerActions = A;
      var D = i(n('INgg'));
      t.videoActions = D;
      var _ = n('ulZL');
    },
    ulZL: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t['default'] = o),
        (t.operationReducer = t.playerReducer = void 0);
      var a = i(n('56F6')),
        r = i(n('3nJo'));
      function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return {
          player: (0, a['default'])(e.player, t),
          operation: (0, r['default'])(e.operation, t),
        };
      }
      var l = a['default'];
      t.playerReducer = l;
      var s = r['default'];
      t.operationReducer = s;
    },
    vcz5: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('MVZn')),
        o = a(n('lSNA')),
        l = a(n('QILm')),
        s = a(n('lwsE')),
        u = a(n('W8MJ')),
        d = a(n('a1gu')),
        c = a(n('Nsbk')),
        h = a(n('PJYZ')),
        f = a(n('7W2i')),
        v = a(n('17x9')),
        p = i(n('q1tI')),
        m = a(n('TSYQ')),
        y = a(n('iAfH')),
        g = a(n('vu4D')),
        b = a(n('X2cd')),
        w = a(n('tPgb')),
        k = a(n('Edwz')),
        E = a(n('zFvY')),
        T = a(n('LgmY')),
        P = a(n('FcgA')),
        x = i(n('qdLH')),
        C = n('EVUy'),
        S = n('tJTW'),
        M = a(n('rzyQ')),
        N = {
          children: v['default'].any,
          width: v['default'].oneOfType([v['default'].string, v['default'].number]),
          height: v['default'].oneOfType([v['default'].string, v['default'].number]),
          fluid: v['default'].bool,
          muted: v['default'].bool,
          playsInline: v['default'].bool,
          aspectRatio: v['default'].string,
          className: v['default'].string,
          videoId: v['default'].string,
          startTime: v['default'].number,
          loop: v['default'].bool,
          autoPlay: v['default'].bool,
          src: v['default'].string,
          poster: v['default'].string,
          preload: v['default'].oneOf(['auto', 'metadata', 'none']),
          onLoadStart: v['default'].func,
          onWaiting: v['default'].func,
          onCanPlay: v['default'].func,
          onCanPlayThrough: v['default'].func,
          onPlaying: v['default'].func,
          onEnded: v['default'].func,
          onSeeking: v['default'].func,
          onSeeked: v['default'].func,
          onPlay: v['default'].func,
          onPause: v['default'].func,
          onProgress: v['default'].func,
          onDurationChange: v['default'].func,
          onError: v['default'].func,
          onSuspend: v['default'].func,
          onAbort: v['default'].func,
          onEmptied: v['default'].func,
          onStalled: v['default'].func,
          onLoadedMetadata: v['default'].func,
          onLoadedData: v['default'].func,
          onTimeUpdate: v['default'].func,
          onRateChange: v['default'].func,
          onVolumeChange: v['default'].func,
          store: v['default'].object,
        },
        O = { fluid: !0, muted: !1, playsInline: !1, preload: 'auto', aspectRatio: 'auto' },
        I = (function(e) {
          function t(e) {
            var n;
            return (
              (0, s['default'])(this, t),
              (n = (0, d['default'])(this, (0, c['default'])(t).call(this, e))),
              (n.controlsHideTimer = null),
              (n.video = null),
              (n.manager = new y['default'](e.store)),
              (n.actions = n.manager.getActions()),
              n.manager.subscribeToPlayerStateChange(
                n.handleStateChange.bind((0, h['default'])(n))
              ),
              (n.getStyle = n.getStyle.bind((0, h['default'])(n))),
              (n.handleResize = n.handleResize.bind((0, h['default'])(n))),
              (n.getChildren = n.getChildren.bind((0, h['default'])(n))),
              (n.handleMouseMove = (0, S.throttle)(
                n.handleMouseMove.bind((0, h['default'])(n)),
                250
              )),
              (n.handleMouseDown = n.handleMouseDown.bind((0, h['default'])(n))),
              (n.startControlsTimer = n.startControlsTimer.bind((0, h['default'])(n))),
              (n.handleFullScreenChange = n.handleFullScreenChange.bind((0, h['default'])(n))),
              (n.handleKeyDown = n.handleKeyDown.bind((0, h['default'])(n))),
              (n.handleFocus = n.handleFocus.bind((0, h['default'])(n))),
              (n.handleBlur = n.handleBlur.bind((0, h['default'])(n))),
              n
            );
          }
          return (
            (0, f['default'])(t, e),
            (0, u['default'])(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.handleResize(),
                    window.addEventListener('resize', this.handleResize),
                    M['default'].addEventListener(this.handleFullScreenChange);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  window.removeEventListener('resize', this.handleResize),
                    M['default'].removeEventListener(this.handleFullScreenChange),
                    this.controlsHideTimer && window.clearTimeout(this.controlsHideTimer);
                },
              },
              {
                key: 'getDefaultChildren',
                value: function(e) {
                  var t = this;
                  return [
                    p['default'].createElement(
                      k['default'],
                      {
                        ref: function(e) {
                          (t.video = e), (t.manager.video = t.video);
                        },
                        key: 'video',
                        order: 0,
                      },
                      e
                    ),
                    p['default'].createElement(w['default'], { key: 'poster-image', order: 1 }),
                    p['default'].createElement(b['default'], { key: 'loading-spinner', order: 2 }),
                    p['default'].createElement(E['default'], { key: 'bezel', order: 3 }),
                    p['default'].createElement(g['default'], { key: 'big-play-button', order: 4 }),
                    p['default'].createElement(P['default'], { key: 'control-bar', order: 5 }),
                    p['default'].createElement(T['default'], { key: 'shortcut', order: 99 }),
                  ];
                },
              },
              {
                key: 'getChildren',
                value: function(e) {
                  e.className;
                  var t = e.children,
                    n = (0, l['default'])(e, ['className', 'children']),
                    i = p['default'].Children.toArray(this.props.children).filter(function(e) {
                      return !(0, S.isVideoChild)(e);
                    }),
                    a = this.getDefaultChildren(t);
                  return (0, S.mergeAndSortChildren)(a, i, n);
                },
              },
              {
                key: 'setWidthOrHeight',
                value: function(e, t, n) {
                  var i;
                  'string' === typeof n
                    ? 'auto' === n
                      ? (i = 'auto')
                      : n.match(/\d+%/) && (i = n)
                    : 'number' === typeof n && (i = ''.concat(n, 'px')),
                    Object.assign(e, (0, o['default'])({}, t, i));
                },
              },
              {
                key: 'getStyle',
                value: function() {
                  var e,
                    t,
                    n,
                    i = this.props,
                    a = i.fluid,
                    r = i.aspectRatio,
                    o = i.height,
                    l = i.width,
                    s = this.manager.getState(),
                    u = s.player,
                    d = {};
                  n =
                    void 0 !== r && 'auto' !== r
                      ? r
                      : u.videoWidth
                      ? ''.concat(u.videoWidth, ':').concat(u.videoHeight)
                      : '16:9';
                  var c = n.split(':'),
                    h = c[1] / c[0];
                  return (
                    (e = void 0 !== l ? l : void 0 !== o ? o / h : u.videoWidth || 400),
                    (t = void 0 !== o ? o : e * h),
                    a
                      ? (d.paddingTop = ''.concat(100 * h, '%'))
                      : (this.setWidthOrHeight(d, 'width', e),
                        this.setWidthOrHeight(d, 'height', t)),
                    d
                  );
                },
              },
              {
                key: 'getState',
                value: function() {
                  return this.manager.getState();
                },
              },
              {
                key: 'play',
                value: function() {
                  this.video.play();
                },
              },
              {
                key: 'pause',
                value: function() {
                  this.video.pause();
                },
              },
              {
                key: 'load',
                value: function() {
                  this.video.load();
                },
              },
              {
                key: 'addTextTrack',
                value: function() {
                  var e;
                  (e = this.video).addTextTrack.apply(e, arguments);
                },
              },
              {
                key: 'canPlayType',
                value: function() {
                  var e;
                  (e = this.video).canPlayType.apply(e, arguments);
                },
              },
              {
                key: 'seek',
                value: function(e) {
                  this.video.seek(e);
                },
              },
              {
                key: 'forward',
                value: function(e) {
                  this.video.forward(e);
                },
              },
              {
                key: 'replay',
                value: function(e) {
                  this.video.replay(e);
                },
              },
              {
                key: 'toggleFullscreen',
                value: function() {
                  this.video.toggleFullscreen();
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function(e) {
                  return this.manager.subscribeToPlayerStateChange(e);
                },
              },
              { key: 'handleResize', value: function() {} },
              {
                key: 'handleFullScreenChange',
                value: function(e) {
                  e.target === this.manager.rootElement &&
                    this.actions.handleFullscreenChange(M['default'].isFullscreen);
                },
              },
              {
                key: 'handleMouseDown',
                value: function() {
                  this.startControlsTimer();
                },
              },
              {
                key: 'handleMouseMove',
                value: function() {
                  this.startControlsTimer();
                },
              },
              {
                key: 'handleKeyDown',
                value: function() {
                  this.startControlsTimer();
                },
              },
              {
                key: 'startControlsTimer',
                value: function() {
                  var e = this,
                    t = 3e3;
                  p['default'].Children.forEach(this.props.children, function(e) {
                    if (p['default'].isValidElement(e) && e.type === P['default']) {
                      var n = e.props.autoHideTime;
                      'number' === typeof n && (t = n);
                    }
                  }),
                    this.actions.userActivate(!0),
                    clearTimeout(this.controlsHideTimer),
                    (this.controlsHideTimer = setTimeout(function() {
                      e.actions.userActivate(!1);
                    }, t));
                },
              },
              {
                key: 'handleStateChange',
                value: function(e, t) {
                  e.isFullscreen !== t.isFullscreen &&
                    (this.handleResize(), (0, C.focusNode)(this.manager.rootElement)),
                    this.forceUpdate();
                },
              },
              {
                key: 'handleFocus',
                value: function() {
                  this.actions.activate(!0);
                },
              },
              {
                key: 'handleBlur',
                value: function() {
                  this.actions.activate(!1);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props.fluid,
                    n = this.manager.getState(),
                    i = n.player,
                    a = i.paused,
                    o = i.hasStarted,
                    l = i.waiting,
                    s = i.seeking,
                    u = i.isFullscreen,
                    d = i.userActivity,
                    c = (0, r['default'])({}, this.props, {
                      player: i,
                      actions: this.actions,
                      manager: this.manager,
                      store: this.manager.store,
                      video: this.video ? this.video.video : null,
                    }),
                    h = this.getChildren(c);
                  return p['default'].createElement(
                    'div',
                    {
                      className: (0, m['default'])(
                        {
                          'video-react-controls-enabled': !0,
                          'video-react-has-started': o,
                          'video-react-paused': a,
                          'video-react-playing': !a,
                          'video-react-waiting': l,
                          'video-react-seeking': s,
                          'video-react-fluid': t,
                          'video-react-fullscreen': u,
                          'video-react-user-inactive': !d,
                          'video-react-user-active': d,
                          'video-react-workinghover': !x.IS_IOS,
                        },
                        'video-react',
                        this.props.className
                      ),
                      style: this.getStyle(),
                      ref: function(t) {
                        e.manager.rootElement = t;
                      },
                      role: 'region',
                      onTouchStart: this.handleMouseDown,
                      onMouseDown: this.handleMouseDown,
                      onTouchMove: this.handleMouseMove,
                      onMouseMove: this.handleMouseMove,
                      onKeyDown: this.handleKeyDown,
                      onFocus: this.handleFocus,
                      onBlur: this.handleBlur,
                      tabIndex: '-1',
                    },
                    h
                  );
                },
              },
              {
                key: 'playbackRate',
                get: function() {
                  return this.video.playbackRate;
                },
                set: function(e) {
                  this.video.playbackRate = e;
                },
              },
              {
                key: 'muted',
                get: function() {
                  return this.video.muted;
                },
                set: function(e) {
                  this.video.muted = e;
                },
              },
              {
                key: 'volume',
                get: function() {
                  return this.video.volume;
                },
                set: function(e) {
                  this.video.volume = e;
                },
              },
              {
                key: 'videoWidth',
                get: function() {
                  return this.video.videoWidth;
                },
              },
              {
                key: 'videoHeight',
                get: function() {
                  return this.video.videoHeight;
                },
              },
            ]),
            t
          );
        })(p.Component);
      (t['default'] = I),
        (I.contextTypes = { store: v['default'].object }),
        (I.propTypes = N),
        (I.defaultProps = O),
        (I.displayName = 'Player');
    },
    vu4D: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = a(n('TSYQ')),
        v = {
          actions: c['default'].object,
          player: c['default'].object,
          position: c['default'].string,
          className: c['default'].string,
        },
        p = { position: 'left' },
        m = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.handleClick = i.handleClick.bind((0, u['default'])(i))),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              { key: 'componentDidMount', value: function() {} },
              {
                key: 'handleClick',
                value: function() {
                  var e = this.props.actions;
                  e.play();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.player,
                    n = e.position;
                  return h['default'].createElement(
                    'button',
                    {
                      className: (0, f['default'])(
                        'video-react-big-play-button',
                        'video-react-big-play-button-'.concat(n),
                        this.props.className,
                        { 'big-play-button-hide': t.hasStarted || !t.currentSrc }
                      ),
                      type: 'button',
                      'aria-live': 'polite',
                      tabIndex: '0',
                      onClick: this.handleClick,
                    },
                    h['default'].createElement(
                      'span',
                      { className: 'video-react-control-text' },
                      'Play Video'
                    )
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t['default'] = m),
        (m.propTypes = v),
        (m.defaultProps = p),
        (m.displayName = 'BigPlayButton');
    },
    wXLL: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('7W2i')),
        d = i(n('q1tI')),
        c = a(n('DGqw')),
        h = n('tJTW'),
        f = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (0, h.deprecatedWarning)('PlaybackRate', 'PlaybackRateMenuButton'),
              i
            );
          }
          return (
            (0, u['default'])(t, e),
            (0, o['default'])(t, [
              {
                key: 'render',
                value: function() {
                  return d['default'].createElement(c['default'], this.props);
                },
              },
            ]),
            t
          );
        })(d.Component);
      (t['default'] = f), (f.displayName = 'PlaybackRate');
    },
    we7k: function(e, t, n) {
      'use strict';
      var i = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.handleFullscreenChange = u),
        (t.activate = d),
        (t.userActivate = c),
        (t.play = h),
        (t.pause = f),
        (t.togglePlay = v),
        (t.seek = p),
        (t.forward = m),
        (t.replay = y),
        (t.changeRate = g),
        (t.changeVolume = b),
        (t.mute = w),
        (t.toggleFullscreen = k),
        (t.USER_ACTIVATE = t.PLAYER_ACTIVATE = t.FULLSCREEN_CHANGE = t.OPERATE = void 0);
      var a = i(n('rzyQ')),
        r = 'video-react/OPERATE';
      t.OPERATE = r;
      var o = 'video-react/FULLSCREEN_CHANGE';
      t.FULLSCREEN_CHANGE = o;
      var l = 'video-react/PLAYER_ACTIVATE';
      t.PLAYER_ACTIVATE = l;
      var s = 'video-react/USER_ACTIVATE';
      function u(e) {
        return { type: o, isFullscreen: e };
      }
      function d(e) {
        return { type: l, activity: e };
      }
      function c(e) {
        return { type: s, activity: e };
      }
      function h() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { action: 'play', source: '' };
        return this.video.play(), { type: r, operation: e };
      }
      function f() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { action: 'pause', source: '' };
        return this.video.pause(), { type: r, operation: e };
      }
      function v() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { action: 'toggle-play', source: '' };
        return this.video.togglePlay(), { type: r, operation: e };
      }
      function p(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { action: 'seek', source: '' };
        return this.video.seek(e), { type: r, operation: t };
      }
      function m(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { action: 'forward-'.concat(e), source: '' };
        return this.video.forward(e), { type: r, operation: t };
      }
      function y(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { action: 'replay-'.concat(e), source: '' };
        return this.video.replay(e), { type: r, operation: t };
      }
      function g(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { action: 'change-rate', source: '' };
        return (this.video.playbackRate = e), { type: r, operation: t };
      }
      function b(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { action: 'change-volume', source: '' },
          n = e;
        return (
          e < 0 && (n = 0), e > 1 && (n = 1), (this.video.volume = n), { type: r, operation: t }
        );
      }
      function w(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { action: e ? 'muted' : 'unmuted', source: '' };
        return (this.video.muted = e), { type: r, operation: t };
      }
      function k(e) {
        return a['default'].enabled
          ? (a['default'].isFullscreen
              ? a['default'].exit()
              : a['default'].request(this.rootElement),
            { type: r, operation: { action: 'toggle-fullscreen', source: '' } })
          : { type: o, isFullscreen: !e.isFullscreen };
      }
      t.USER_ACTIVATE = s;
    },
    xFFL: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = a(n('TSYQ')),
        v = a(n('kXlQ')),
        p = a(n('q+t5')),
        m = a(n('rsAN')),
        y = a(n('GuGs')),
        g = n('tJTW'),
        b = {
          player: c['default'].object,
          mouseTime: c['default'].object,
          actions: c['default'].object,
          className: c['default'].string,
        },
        w = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.getPercent = i.getPercent.bind((0, u['default'])(i))),
              (i.getNewTime = i.getNewTime.bind((0, u['default'])(i))),
              (i.stepForward = i.stepForward.bind((0, u['default'])(i))),
              (i.stepBack = i.stepBack.bind((0, u['default'])(i))),
              (i.handleMouseDown = i.handleMouseDown.bind((0, u['default'])(i))),
              (i.handleMouseMove = i.handleMouseMove.bind((0, u['default'])(i))),
              (i.handleMouseUp = i.handleMouseUp.bind((0, u['default'])(i))),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              { key: 'componentDidMount', value: function() {} },
              { key: 'componentDidUpdate', value: function() {} },
              {
                key: 'getPercent',
                value: function() {
                  var e = this.props.player,
                    t = e.currentTime,
                    n = e.seekingTime,
                    i = e.duration,
                    a = n || t,
                    r = a / i;
                  return r >= 1 ? 1 : r;
                },
              },
              {
                key: 'getNewTime',
                value: function(e) {
                  var t = this.props.player.duration,
                    n = this.slider.calculateDistance(e),
                    i = n * t;
                  return i === t ? i - 0.1 : i;
                },
              },
              { key: 'handleMouseDown', value: function() {} },
              {
                key: 'handleMouseUp',
                value: function(e) {
                  var t = this.props.actions,
                    n = this.getNewTime(e);
                  t.seek(n), t.handleEndSeeking(n);
                },
              },
              {
                key: 'handleMouseMove',
                value: function(e) {
                  var t = this.props.actions,
                    n = this.getNewTime(e);
                  t.handleSeekingTime(n);
                },
              },
              {
                key: 'stepForward',
                value: function() {
                  var e = this.props.actions;
                  e.forward(5);
                },
              },
              {
                key: 'stepBack',
                value: function() {
                  var e = this.props.actions;
                  e.replay(5);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.player,
                    i = n.currentTime,
                    a = n.seekingTime,
                    r = n.duration,
                    o = n.buffered,
                    l = t.mouseTime,
                    s = a || i;
                  return h['default'].createElement(
                    v['default'],
                    {
                      ref: function(t) {
                        e.slider = t;
                      },
                      label: 'video progress bar',
                      className: (0, f['default'])(
                        'video-react-progress-holder',
                        this.props.className
                      ),
                      valuenow: (100 * this.getPercent()).toFixed(2),
                      valuetext: (0, g.formatTime)(s, r),
                      onMouseDown: this.handleMouseDown,
                      onMouseMove: this.handleMouseMove,
                      onMouseUp: this.handleMouseUp,
                      getPercent: this.getPercent,
                      stepForward: this.stepForward,
                      stepBack: this.stepBack,
                    },
                    h['default'].createElement(m['default'], {
                      buffered: o,
                      currentTime: s,
                      duration: r,
                    }),
                    h['default'].createElement(y['default'], { duration: r, mouseTime: l }),
                    h['default'].createElement(p['default'], { currentTime: s, duration: r })
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t['default'] = w), (w.propTypes = b), (w.displayName = 'SeekBar');
    },
    yCxO: function(e, t, n) {
      (function(t, n) {
        e.exports = n();
      })(0, function() {
        'use strict';
        function e(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function t(t) {
          for (var n = 1; n < arguments.length; n++) {
            var i = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(i), !0).forEach(function(e) {
                  o(t, e, i[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
              : e(Object(i)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                });
          }
          return t;
        }
        function n(e) {
          '@babel/helpers - typeof';
          return (
            (n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e;
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            n(e)
          );
        }
        function i(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, s(i.key), i);
          }
        }
        function r(e, t, n) {
          return (
            t && a(e.prototype, t),
            n && a(e, n),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            e
          );
        }
        function o(e, t, n) {
          return (
            (t = s(t)),
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function l(e, t) {
          if ('object' !== typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || 'default');
            if ('object' !== typeof i) return i;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        }
        function s(e) {
          var t = l(e, 'string');
          return 'symbol' === typeof t ? t : String(t);
        }
        var u = {
            backdrop: !0,
            button: !0,
            navbar: !0,
            title: !0,
            toolbar: !0,
            className: '',
            container: 'body',
            filter: null,
            fullscreen: !0,
            inheritedAttributes: [
              'crossOrigin',
              'decoding',
              'isMap',
              'loading',
              'referrerPolicy',
              'sizes',
              'srcset',
              'useMap',
            ],
            initialCoverage: 0.9,
            initialViewIndex: 0,
            inline: !1,
            interval: 5e3,
            keyboard: !0,
            focus: !0,
            loading: !0,
            loop: !0,
            minWidth: 200,
            minHeight: 100,
            movable: !0,
            rotatable: !0,
            scalable: !0,
            zoomable: !0,
            zoomOnTouch: !0,
            zoomOnWheel: !0,
            slideOnTouch: !0,
            toggleOnDblclick: !0,
            tooltip: !0,
            transition: !0,
            zIndex: 2015,
            zIndexInline: 0,
            zoomRatio: 0.1,
            minZoomRatio: 0.01,
            maxZoomRatio: 100,
            url: 'src',
            ready: null,
            show: null,
            shown: null,
            hide: null,
            hidden: null,
            view: null,
            viewed: null,
            move: null,
            moved: null,
            rotate: null,
            rotated: null,
            scale: null,
            scaled: null,
            zoom: null,
            zoomed: null,
            play: null,
            stop: null,
          },
          d =
            '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',
          c = 'undefined' !== typeof window && 'undefined' !== typeof window.document,
          h = c ? window : {},
          f = !(!c || !h.document.documentElement) && 'ontouchstart' in h.document.documentElement,
          v = !!c && 'PointerEvent' in h,
          p = 'viewer',
          m = 'move',
          y = 'switch',
          g = 'zoom',
          b = ''.concat(p, '-active'),
          w = ''.concat(p, '-close'),
          k = ''.concat(p, '-fade'),
          E = ''.concat(p, '-fixed'),
          T = ''.concat(p, '-fullscreen'),
          P = ''.concat(p, '-fullscreen-exit'),
          x = ''.concat(p, '-hide'),
          C = ''.concat(p, '-hide-md-down'),
          S = ''.concat(p, '-hide-sm-down'),
          M = ''.concat(p, '-hide-xs-down'),
          N = ''.concat(p, '-in'),
          O = ''.concat(p, '-invisible'),
          I = ''.concat(p, '-loading'),
          A = ''.concat(p, '-move'),
          D = ''.concat(p, '-open'),
          _ = ''.concat(p, '-show'),
          R = ''.concat(p, '-transition'),
          j = 'click',
          L = 'dblclick',
          F = 'dragstart',
          z = 'focusin',
          q = 'keydown',
          W = 'load',
          Y = 'error',
          B = f ? 'touchend touchcancel' : 'mouseup',
          U = f ? 'touchmove' : 'mousemove',
          V = f ? 'touchstart' : 'mousedown',
          H = v ? 'pointerdown' : V,
          J = v ? 'pointermove' : U,
          K = v ? 'pointerup pointercancel' : B,
          G = 'resize',
          X = 'transitionend',
          Z = 'wheel',
          Q = 'ready',
          $ = 'show',
          ee = 'shown',
          te = 'hide',
          ne = 'hidden',
          ie = 'view',
          ae = 'viewed',
          re = 'move',
          oe = 'moved',
          le = 'rotate',
          se = 'rotated',
          ue = 'scale',
          de = 'scaled',
          ce = 'zoom',
          he = 'zoomed',
          fe = 'play',
          ve = 'stop',
          pe = ''.concat(p, 'Action'),
          me = /\s\s*/,
          ye = [
            'zoom-in',
            'zoom-out',
            'one-to-one',
            'reset',
            'prev',
            'play',
            'next',
            'rotate-left',
            'rotate-right',
            'flip-horizontal',
            'flip-vertical',
          ];
        function ge(e) {
          return 'string' === typeof e;
        }
        var be = Number.isNaN || h.isNaN;
        function we(e) {
          return 'number' === typeof e && !be(e);
        }
        function ke(e) {
          return 'undefined' === typeof e;
        }
        function Ee(e) {
          return 'object' === n(e) && null !== e;
        }
        var Te = Object.prototype.hasOwnProperty;
        function Pe(e) {
          if (!Ee(e)) return !1;
          try {
            var t = e.constructor,
              n = t.prototype;
            return t && n && Te.call(n, 'isPrototypeOf');
          } catch (e) {
            return !1;
          }
        }
        function xe(e) {
          return 'function' === typeof e;
        }
        function Ce(e, t) {
          if (e && xe(t))
            if (Array.isArray(e) || we(e.length)) {
              var n,
                i = e.length;
              for (n = 0; n < i; n += 1) if (!1 === t.call(e, e[n], n, e)) break;
            } else
              Ee(e) &&
                Object.keys(e).forEach(function(n) {
                  t.call(e, e[n], n, e);
                });
          return e;
        }
        var Se =
            Object.assign ||
            function(e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                n[i - 1] = arguments[i];
              return (
                Ee(e) &&
                  n.length > 0 &&
                  n.forEach(function(t) {
                    Ee(t) &&
                      Object.keys(t).forEach(function(n) {
                        e[n] = t[n];
                      });
                  }),
                e
              );
            },
          Me = /^(?:width|height|left|top|marginLeft|marginTop)$/;
        function Ne(e, t) {
          var n = e.style;
          Ce(t, function(e, t) {
            Me.test(t) && we(e) && (e += 'px'), (n[t] = e);
          });
        }
        function Oe(e) {
          return ge(e)
            ? e
                .replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
            : e;
        }
        function Ie(e, t) {
          return (
            !(!e || !t) && (e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1)
          );
        }
        function Ae(e, t) {
          if (e && t)
            if (we(e.length))
              Ce(e, function(e) {
                Ae(e, t);
              });
            else if (e.classList) e.classList.add(t);
            else {
              var n = e.className.trim();
              n
                ? n.indexOf(t) < 0 && (e.className = ''.concat(n, ' ').concat(t))
                : (e.className = t);
            }
        }
        function De(e, t) {
          e &&
            t &&
            (we(e.length)
              ? Ce(e, function(e) {
                  De(e, t);
                })
              : e.classList
              ? e.classList.remove(t)
              : e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, '')));
        }
        function _e(e, t, n) {
          t &&
            (we(e.length)
              ? Ce(e, function(e) {
                  _e(e, t, n);
                })
              : n
              ? Ae(e, t)
              : De(e, t));
        }
        var Re = /([a-z\d])([A-Z])/g;
        function je(e) {
          return e.replace(Re, '$1-$2').toLowerCase();
        }
        function Le(e, t) {
          return Ee(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute('data-'.concat(je(t)));
        }
        function Fe(e, t, n) {
          Ee(n)
            ? (e[t] = n)
            : e.dataset
            ? (e.dataset[t] = n)
            : e.setAttribute('data-'.concat(je(t)), n);
        }
        var ze = (function() {
          var e = !1;
          if (c) {
            var t = !1,
              n = function() {},
              i = Object.defineProperty({}, 'once', {
                get: function() {
                  return (e = !0), t;
                },
                set: function(e) {
                  t = e;
                },
              });
            h.addEventListener('test', n, i), h.removeEventListener('test', n, i);
          }
          return e;
        })();
        function qe(e, t, n) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            a = n;
          t.trim()
            .split(me)
            .forEach(function(t) {
              if (!ze) {
                var r = e.listeners;
                r &&
                  r[t] &&
                  r[t][n] &&
                  ((a = r[t][n]),
                  delete r[t][n],
                  0 === Object.keys(r[t]).length && delete r[t],
                  0 === Object.keys(r).length && delete e.listeners);
              }
              e.removeEventListener(t, a, i);
            });
        }
        function We(e, t, n) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            a = n;
          t.trim()
            .split(me)
            .forEach(function(t) {
              if (i.once && !ze) {
                var r = e.listeners,
                  o = void 0 === r ? {} : r;
                (a = function() {
                  delete o[t][n], e.removeEventListener(t, a, i);
                  for (var r = arguments.length, l = new Array(r), s = 0; s < r; s++)
                    l[s] = arguments[s];
                  n.apply(e, l);
                }),
                  o[t] || (o[t] = {}),
                  o[t][n] && e.removeEventListener(t, o[t][n], i),
                  (o[t][n] = a),
                  (e.listeners = o);
              }
              e.addEventListener(t, a, i);
            });
        }
        function Ye(e, n, i, a) {
          var r;
          return (
            xe(Event) && xe(CustomEvent)
              ? (r = new CustomEvent(n, t({ bubbles: !0, cancelable: !0, detail: i }, a)))
              : ((r = document.createEvent('CustomEvent')), r.initCustomEvent(n, !0, !0, i)),
            e.dispatchEvent(r)
          );
        }
        function Be(e) {
          var t = e.getBoundingClientRect();
          return {
            left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
            top: t.top + (window.pageYOffset - document.documentElement.clientTop),
          };
        }
        function Ue(e) {
          var t = e.rotate,
            n = e.scaleX,
            i = e.scaleY,
            a = e.translateX,
            r = e.translateY,
            o = [];
          we(a) && 0 !== a && o.push('translateX('.concat(a, 'px)')),
            we(r) && 0 !== r && o.push('translateY('.concat(r, 'px)')),
            we(t) && 0 !== t && o.push('rotate('.concat(t, 'deg)')),
            we(n) && 1 !== n && o.push('scaleX('.concat(n, ')')),
            we(i) && 1 !== i && o.push('scaleY('.concat(i, ')'));
          var l = o.length ? o.join(' ') : 'none';
          return { WebkitTransform: l, msTransform: l, transform: l };
        }
        function Ve(e) {
          return ge(e) ? decodeURIComponent(e.replace(/^.*\//, '').replace(/[?&#].*$/, '')) : '';
        }
        var He = h.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(h.navigator.userAgent);
        function Je(e, t, n) {
          var i = document.createElement('img');
          if (e.naturalWidth && !He) return n(e.naturalWidth, e.naturalHeight), i;
          var a = document.body || document.documentElement;
          return (
            (i.onload = function() {
              n(i.width, i.height), He || a.removeChild(i);
            }),
            Ce(t.inheritedAttributes, function(t) {
              var n = e.getAttribute(t);
              null !== n && i.setAttribute(t, n);
            }),
            (i.src = e.src),
            He ||
              ((i.style.cssText =
                'left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;'),
              a.appendChild(i)),
            i
          );
        }
        function Ke(e) {
          switch (e) {
            case 2:
              return M;
            case 3:
              return S;
            case 4:
              return C;
            default:
              return '';
          }
        }
        function Ge(e) {
          var n = t({}, e),
            i = [];
          return (
            Ce(e, function(e, t) {
              delete n[t],
                Ce(n, function(t) {
                  var n = Math.abs(e.startX - t.startX),
                    a = Math.abs(e.startY - t.startY),
                    r = Math.abs(e.endX - t.endX),
                    o = Math.abs(e.endY - t.endY),
                    l = Math.sqrt(n * n + a * a),
                    s = Math.sqrt(r * r + o * o),
                    u = (s - l) / l;
                  i.push(u);
                });
            }),
            i.sort(function(e, t) {
              return Math.abs(e) < Math.abs(t);
            }),
            i[0]
          );
        }
        function Xe(e, n) {
          var i = e.pageX,
            a = e.pageY,
            r = { endX: i, endY: a };
          return n ? r : t({ timeStamp: Date.now(), startX: i, startY: a }, r);
        }
        function Ze(e) {
          var t = 0,
            n = 0,
            i = 0;
          return (
            Ce(e, function(e) {
              var a = e.startX,
                r = e.startY;
              (t += a), (n += r), (i += 1);
            }),
            (t /= i),
            (n /= i),
            { pageX: t, pageY: n }
          );
        }
        var Qe = {
            render: function() {
              this.initContainer(), this.initViewer(), this.initList(), this.renderViewer();
            },
            initBody: function() {
              var e = this.element.ownerDocument,
                t = e.body || e.documentElement;
              (this.body = t),
                (this.scrollbarWidth = window.innerWidth - e.documentElement.clientWidth),
                (this.initialBodyPaddingRight = t.style.paddingRight),
                (this.initialBodyComputedPaddingRight = window.getComputedStyle(t).paddingRight);
            },
            initContainer: function() {
              this.containerData = { width: window.innerWidth, height: window.innerHeight };
            },
            initViewer: function() {
              var e,
                t = this.options,
                n = this.parent;
              t.inline &&
                ((e = {
                  width: Math.max(n.offsetWidth, t.minWidth),
                  height: Math.max(n.offsetHeight, t.minHeight),
                }),
                (this.parentData = e)),
                (!this.fulled && e) || (e = this.containerData),
                (this.viewerData = Se({}, e));
            },
            renderViewer: function() {
              this.options.inline && !this.fulled && Ne(this.viewer, this.viewerData);
            },
            initList: function() {
              var e = this,
                t = this.element,
                n = this.options,
                i = this.list,
                a = [];
              (i.innerHTML = ''),
                Ce(this.images, function(t, r) {
                  var o = t.src,
                    l = t.alt || Ve(o),
                    s = e.getImageURL(t);
                  if (o || s) {
                    var u = document.createElement('li'),
                      d = document.createElement('img');
                    Ce(n.inheritedAttributes, function(e) {
                      var n = t.getAttribute(e);
                      null !== n && d.setAttribute(e, n);
                    }),
                      n.navbar && (d.src = o || s),
                      (d.alt = l),
                      d.setAttribute('data-original-url', s || o),
                      u.setAttribute('data-index', r),
                      u.setAttribute('data-viewer-action', 'view'),
                      u.setAttribute('role', 'button'),
                      n.keyboard && u.setAttribute('tabindex', 0),
                      u.appendChild(d),
                      i.appendChild(u),
                      a.push(u);
                  }
                }),
                (this.items = a),
                Ce(a, function(t) {
                  var i,
                    a,
                    r = t.firstElementChild;
                  Fe(r, 'filled', !0),
                    n.loading && Ae(t, I),
                    We(
                      r,
                      W,
                      (i = function(i) {
                        qe(r, Y, a), n.loading && De(t, I), e.loadImage(i);
                      }),
                      { once: !0 }
                    ),
                    We(
                      r,
                      Y,
                      (a = function() {
                        qe(r, W, i), n.loading && De(t, I);
                      }),
                      { once: !0 }
                    );
                }),
                n.transition &&
                  We(
                    t,
                    ae,
                    function() {
                      Ae(i, R);
                    },
                    { once: !0 }
                  );
            },
            renderList: function() {
              var e = this.index,
                t = this.items[e];
              if (t) {
                var n = t.nextElementSibling,
                  i = parseInt(window.getComputedStyle(n || t).marginLeft, 10),
                  a = t.offsetWidth,
                  r = a + i;
                Ne(
                  this.list,
                  Se(
                    { width: r * this.length - i },
                    Ue({ translateX: (this.viewerData.width - a) / 2 - r * e })
                  )
                );
              }
            },
            resetList: function() {
              var e = this.list;
              (e.innerHTML = ''), De(e, R), Ne(e, Ue({ translateX: 0 }));
            },
            initImage: function(e) {
              var t,
                n = this,
                i = this.options,
                a = this.image,
                r = this.viewerData,
                o = this.footer.offsetHeight,
                l = r.width,
                s = Math.max(r.height - o, o),
                u = this.imageData || {};
              (this.imageInitializing = {
                abort: function() {
                  t.onload = null;
                },
              }),
                (t = Je(a, i, function(t, a) {
                  var r = t / a,
                    o = Math.max(0, Math.min(1, i.initialCoverage)),
                    d = l,
                    c = s;
                  (n.imageInitializing = !1),
                    s * r > l ? (c = l / r) : (d = s * r),
                    (o = we(o) ? o : 0.9),
                    (d = Math.min(d * o, t)),
                    (c = Math.min(c * o, a));
                  var h = (l - d) / 2,
                    f = (s - c) / 2,
                    v = {
                      left: h,
                      top: f,
                      x: h,
                      y: f,
                      width: d,
                      height: c,
                      oldRatio: 1,
                      ratio: d / t,
                      aspectRatio: r,
                      naturalWidth: t,
                      naturalHeight: a,
                    },
                    p = Se({}, v);
                  i.rotatable && ((v.rotate = u.rotate || 0), (p.rotate = 0)),
                    i.scalable &&
                      ((v.scaleX = u.scaleX || 1),
                      (v.scaleY = u.scaleY || 1),
                      (p.scaleX = 1),
                      (p.scaleY = 1)),
                    (n.imageData = v),
                    (n.initialImageData = p),
                    e && e();
                }));
            },
            renderImage: function(e) {
              var t = this,
                n = this.image,
                i = this.imageData;
              if (
                (Ne(
                  n,
                  Se({ width: i.width, height: i.height, marginLeft: i.x, marginTop: i.y }, Ue(i))
                ),
                e)
              )
                if (
                  (this.viewing || this.moving || this.rotating || this.scaling || this.zooming) &&
                  this.options.transition &&
                  Ie(n, R)
                ) {
                  var a = function() {
                    (t.imageRendering = !1), e();
                  };
                  (this.imageRendering = {
                    abort: function() {
                      qe(n, X, a);
                    },
                  }),
                    We(n, X, a, { once: !0 });
                } else e();
            },
            resetImage: function() {
              var e = this.image;
              e &&
                (this.viewing && this.viewing.abort(),
                e.parentNode.removeChild(e),
                (this.image = null),
                (this.title.innerHTML = ''));
            },
          },
          $e = {
            bind: function() {
              var e = this.options,
                t = this.viewer,
                n = this.canvas,
                i = this.element.ownerDocument;
              We(t, j, (this.onClick = this.click.bind(this))),
                We(t, F, (this.onDragStart = this.dragstart.bind(this))),
                We(n, H, (this.onPointerDown = this.pointerdown.bind(this))),
                We(i, J, (this.onPointerMove = this.pointermove.bind(this))),
                We(i, K, (this.onPointerUp = this.pointerup.bind(this))),
                We(i, q, (this.onKeyDown = this.keydown.bind(this))),
                We(window, G, (this.onResize = this.resize.bind(this))),
                e.zoomable &&
                  e.zoomOnWheel &&
                  We(t, Z, (this.onWheel = this.wheel.bind(this)), { passive: !1, capture: !0 }),
                e.toggleOnDblclick && We(n, L, (this.onDblclick = this.dblclick.bind(this)));
            },
            unbind: function() {
              var e = this.options,
                t = this.viewer,
                n = this.canvas,
                i = this.element.ownerDocument;
              qe(t, j, this.onClick),
                qe(t, F, this.onDragStart),
                qe(n, H, this.onPointerDown),
                qe(i, J, this.onPointerMove),
                qe(i, K, this.onPointerUp),
                qe(i, q, this.onKeyDown),
                qe(window, G, this.onResize),
                e.zoomable && e.zoomOnWheel && qe(t, Z, this.onWheel, { passive: !1, capture: !0 }),
                e.toggleOnDblclick && qe(n, L, this.onDblclick);
            },
          },
          et = {
            click: function(e) {
              var t = this.options,
                n = this.imageData,
                i = e.target,
                a = Le(i, pe);
              switch (
                (a ||
                  'img' !== i.localName ||
                  'li' !== i.parentElement.localName ||
                  ((i = i.parentElement), (a = Le(i, pe))),
                f && e.isTrusted && i === this.canvas && clearTimeout(this.clickCanvasTimeout),
                a)
              ) {
                case 'mix':
                  this.played
                    ? this.stop()
                    : t.inline
                    ? this.fulled
                      ? this.exit()
                      : this.full()
                    : this.hide();
                  break;
                case 'hide':
                  this.pointerMoved || this.hide();
                  break;
                case 'view':
                  this.view(Le(i, 'index'));
                  break;
                case 'zoom-in':
                  this.zoom(0.1, !0);
                  break;
                case 'zoom-out':
                  this.zoom(-0.1, !0);
                  break;
                case 'one-to-one':
                  this.toggle();
                  break;
                case 'reset':
                  this.reset();
                  break;
                case 'prev':
                  this.prev(t.loop);
                  break;
                case 'play':
                  this.play(t.fullscreen);
                  break;
                case 'next':
                  this.next(t.loop);
                  break;
                case 'rotate-left':
                  this.rotate(-90);
                  break;
                case 'rotate-right':
                  this.rotate(90);
                  break;
                case 'flip-horizontal':
                  this.scaleX(-n.scaleX || -1);
                  break;
                case 'flip-vertical':
                  this.scaleY(-n.scaleY || -1);
                  break;
                default:
                  this.played && this.stop();
              }
            },
            dblclick: function(e) {
              e.preventDefault(),
                this.viewed &&
                  e.target === this.image &&
                  (f && e.isTrusted && clearTimeout(this.doubleClickImageTimeout),
                  this.toggle(e.isTrusted ? e : e.detail && e.detail.originalEvent));
            },
            load: function() {
              var e = this;
              this.timeout && (clearTimeout(this.timeout), (this.timeout = !1));
              var t = this.element,
                n = this.options,
                i = this.image,
                a = this.index,
                r = this.viewerData;
              De(i, O),
                n.loading && De(this.canvas, I),
                (i.style.cssText =
                  'height:0;' +
                  'margin-left:'.concat(r.width / 2, 'px;') +
                  'margin-top:'.concat(r.height / 2, 'px;') +
                  'max-width:none!important;position:relative;width:0;'),
                this.initImage(function() {
                  _e(i, A, n.movable),
                    _e(i, R, n.transition),
                    e.renderImage(function() {
                      (e.viewed = !0),
                        (e.viewing = !1),
                        xe(n.viewed) && We(t, ae, n.viewed, { once: !0 }),
                        Ye(
                          t,
                          ae,
                          { originalImage: e.images[a], index: a, image: i },
                          { cancelable: !1 }
                        );
                    });
                });
            },
            loadImage: function(e) {
              var t = e.target,
                n = t.parentNode,
                i = n.offsetWidth || 30,
                a = n.offsetHeight || 50,
                r = !!Le(t, 'filled');
              Je(t, this.options, function(e, n) {
                var o = e / n,
                  l = i,
                  s = a;
                a * o > i ? (r ? (l = a * o) : (s = i / o)) : r ? (s = i / o) : (l = a * o),
                  Ne(
                    t,
                    Se(
                      { width: l, height: s },
                      Ue({ translateX: (i - l) / 2, translateY: (a - s) / 2 })
                    )
                  );
              });
            },
            keydown: function(e) {
              var t = this.options;
              if (t.keyboard) {
                var n = e.keyCode || e.which || e.charCode;
                switch (n) {
                  case 13:
                    this.viewer.contains(e.target) && this.click(e);
                    break;
                }
                if (this.fulled)
                  switch (n) {
                    case 27:
                      this.played
                        ? this.stop()
                        : t.inline
                        ? this.fulled && this.exit()
                        : this.hide();
                      break;
                    case 32:
                      this.played && this.stop();
                      break;
                    case 37:
                      this.played && this.playing ? this.playing.prev() : this.prev(t.loop);
                      break;
                    case 38:
                      e.preventDefault(), this.zoom(t.zoomRatio, !0);
                      break;
                    case 39:
                      this.played && this.playing ? this.playing.next() : this.next(t.loop);
                      break;
                    case 40:
                      e.preventDefault(), this.zoom(-t.zoomRatio, !0);
                      break;
                    case 48:
                    case 49:
                      e.ctrlKey && (e.preventDefault(), this.toggle());
                      break;
                  }
              }
            },
            dragstart: function(e) {
              'img' === e.target.localName && e.preventDefault();
            },
            pointerdown: function(e) {
              var t = this.options,
                n = this.pointers,
                i = e.buttons,
                a = e.button;
              if (
                ((this.pointerMoved = !1),
                !(
                  !this.viewed ||
                  this.showing ||
                  this.viewing ||
                  this.hiding ||
                  (('mousedown' === e.type ||
                    ('pointerdown' === e.type && 'mouse' === e.pointerType)) &&
                    ((we(i) && 1 !== i) || (we(a) && 0 !== a) || e.ctrlKey))
                ))
              ) {
                e.preventDefault(),
                  e.changedTouches
                    ? Ce(e.changedTouches, function(e) {
                        n[e.identifier] = Xe(e);
                      })
                    : (n[e.pointerId || 0] = Xe(e));
                var r = !!t.movable && m;
                t.zoomOnTouch && t.zoomable && Object.keys(n).length > 1
                  ? (r = g)
                  : t.slideOnTouch &&
                    ('touch' === e.pointerType || 'touchstart' === e.type) &&
                    this.isSwitchable() &&
                    (r = y),
                  !t.transition || (r !== m && r !== g) || De(this.image, R),
                  (this.action = r);
              }
            },
            pointermove: function(e) {
              var t = this.pointers,
                n = this.action;
              this.viewed &&
                n &&
                (e.preventDefault(),
                e.changedTouches
                  ? Ce(e.changedTouches, function(e) {
                      Se(t[e.identifier] || {}, Xe(e, !0));
                    })
                  : Se(t[e.pointerId || 0] || {}, Xe(e, !0)),
                this.change(e));
            },
            pointerup: function(e) {
              var t,
                n = this,
                i = this.options,
                a = this.action,
                r = this.pointers;
              e.changedTouches
                ? Ce(e.changedTouches, function(e) {
                    (t = r[e.identifier]), delete r[e.identifier];
                  })
                : ((t = r[e.pointerId || 0]), delete r[e.pointerId || 0]),
                a &&
                  (e.preventDefault(),
                  !i.transition || (a !== m && a !== g) || Ae(this.image, R),
                  (this.action = !1),
                  f &&
                    a !== g &&
                    t &&
                    Date.now() - t.timeStamp < 500 &&
                    (clearTimeout(this.clickCanvasTimeout),
                    clearTimeout(this.doubleClickImageTimeout),
                    i.toggleOnDblclick && this.viewed && e.target === this.image
                      ? this.imageClicked
                        ? ((this.imageClicked = !1),
                          (this.doubleClickImageTimeout = setTimeout(function() {
                            Ye(n.image, L, { originalEvent: e });
                          }, 50)))
                        : ((this.imageClicked = !0),
                          (this.doubleClickImageTimeout = setTimeout(function() {
                            n.imageClicked = !1;
                          }, 500)))
                      : ((this.imageClicked = !1),
                        i.backdrop &&
                          'static' !== i.backdrop &&
                          e.target === this.canvas &&
                          (this.clickCanvasTimeout = setTimeout(function() {
                            Ye(n.canvas, j, { originalEvent: e });
                          }, 50)))));
            },
            resize: function() {
              var e = this;
              if (
                this.isShown &&
                !this.hiding &&
                (this.fulled && (this.close(), this.initBody(), this.open()),
                this.initContainer(),
                this.initViewer(),
                this.renderViewer(),
                this.renderList(),
                this.viewed &&
                  this.initImage(function() {
                    e.renderImage();
                  }),
                this.played)
              ) {
                if (
                  this.options.fullscreen &&
                  this.fulled &&
                  !(
                    document.fullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.mozFullScreenElement ||
                    document.msFullscreenElement
                  )
                )
                  return void this.stop();
                Ce(this.player.getElementsByTagName('img'), function(t) {
                  We(t, W, e.loadImage.bind(e), { once: !0 }), Ye(t, W);
                });
              }
            },
            wheel: function(e) {
              var t = this;
              if (this.viewed && (e.preventDefault(), !this.wheeling)) {
                (this.wheeling = !0),
                  setTimeout(function() {
                    t.wheeling = !1;
                  }, 50);
                var n = Number(this.options.zoomRatio) || 0.1,
                  i = 1;
                e.deltaY
                  ? (i = e.deltaY > 0 ? 1 : -1)
                  : e.wheelDelta
                  ? (i = -e.wheelDelta / 120)
                  : e.detail && (i = e.detail > 0 ? 1 : -1),
                  this.zoom(-i * n, !0, null, e);
              }
            },
          },
          tt = {
            show: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = this.element,
                n = this.options;
              if (n.inline || this.showing || this.isShown || this.showing) return this;
              if (!this.ready) return this.build(), this.ready && this.show(e), this;
              if ((xe(n.show) && We(t, $, n.show, { once: !0 }), !1 === Ye(t, $) || !this.ready))
                return this;
              this.hiding && this.transitioning.abort(), (this.showing = !0), this.open();
              var i = this.viewer;
              if (
                (De(i, x),
                i.setAttribute('role', 'dialog'),
                i.setAttribute('aria-labelledby', this.title.id),
                i.setAttribute('aria-modal', !0),
                i.removeAttribute('aria-hidden'),
                n.transition && !e)
              ) {
                var a = this.shown.bind(this);
                (this.transitioning = {
                  abort: function() {
                    qe(i, X, a), De(i, N);
                  },
                }),
                  Ae(i, R),
                  (i.initialOffsetWidth = i.offsetWidth),
                  We(i, X, a, { once: !0 }),
                  Ae(i, N);
              } else Ae(i, N), this.shown();
              return this;
            },
            hide: function() {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = this.element,
                i = this.options;
              if (i.inline || this.hiding || (!this.isShown && !this.showing)) return this;
              if ((xe(i.hide) && We(n, te, i.hide, { once: !0 }), !1 === Ye(n, te))) return this;
              this.showing && this.transitioning.abort(),
                (this.hiding = !0),
                this.played ? this.stop() : this.viewing && this.viewing.abort();
              var a = this.viewer,
                r = this.image,
                o = function() {
                  De(a, N), e.hidden();
                };
              if (i.transition && !t) {
                var l = function t(n) {
                    n && n.target === a && (qe(a, X, t), e.hidden());
                  },
                  s = function() {
                    Ie(a, R) ? (We(a, X, l), De(a, N)) : o();
                  };
                (this.transitioning = {
                  abort: function() {
                    e.viewed && Ie(r, R) ? qe(r, X, s) : Ie(a, R) && qe(a, X, l);
                  },
                }),
                  this.viewed && Ie(r, R)
                    ? (We(r, X, s, { once: !0 }), this.zoomTo(0, !1, null, null, !0))
                    : s();
              } else o();
              return this;
            },
            view: function() {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.options.initialViewIndex;
              if (
                ((t = Number(t) || 0),
                this.hiding ||
                  this.played ||
                  t < 0 ||
                  t >= this.length ||
                  (this.viewed && t === this.index))
              )
                return this;
              if (!this.isShown) return (this.index = t), this.show();
              this.viewing && this.viewing.abort();
              var n = this.element,
                i = this.options,
                a = this.title,
                r = this.canvas,
                o = this.items[t],
                l = o.querySelector('img'),
                s = Le(l, 'originalUrl'),
                u = l.getAttribute('alt'),
                d = document.createElement('img');
              if (
                (Ce(i.inheritedAttributes, function(e) {
                  var t = l.getAttribute(e);
                  null !== t && d.setAttribute(e, t);
                }),
                (d.src = s),
                (d.alt = u),
                xe(i.view) && We(n, ie, i.view, { once: !0 }),
                !1 === Ye(n, ie, { originalImage: this.images[t], index: t, image: d }) ||
                  !this.isShown ||
                  this.hiding ||
                  this.played)
              )
                return this;
              var c = this.items[this.index];
              c && (De(c, b), c.removeAttribute('aria-selected')),
                Ae(o, b),
                o.setAttribute('aria-selected', !0),
                i.focus && o.focus(),
                (this.image = d),
                (this.viewed = !1),
                (this.index = t),
                (this.imageData = {}),
                Ae(d, O),
                i.loading && Ae(r, I),
                (r.innerHTML = ''),
                r.appendChild(d),
                this.renderList(),
                (a.innerHTML = '');
              var h,
                f,
                v = function() {
                  var t = e.imageData,
                    n = Array.isArray(i.title) ? i.title[1] : i.title;
                  a.innerHTML = Oe(
                    xe(n)
                      ? n.call(e, d, t)
                      : ''
                          .concat(u, ' (')
                          .concat(t.naturalWidth, ' \xd7 ')
                          .concat(t.naturalHeight, ')')
                  );
                };
              return (
                We(n, ae, v, { once: !0 }),
                (this.viewing = {
                  abort: function() {
                    qe(n, ae, v),
                      d.complete
                        ? e.imageRendering
                          ? e.imageRendering.abort()
                          : e.imageInitializing && e.imageInitializing.abort()
                        : ((d.src = ''), qe(d, W, h), e.timeout && clearTimeout(e.timeout));
                  },
                }),
                d.complete
                  ? this.load()
                  : (We(
                      d,
                      W,
                      (h = function() {
                        qe(d, Y, f), e.load();
                      }),
                      { once: !0 }
                    ),
                    We(
                      d,
                      Y,
                      (f = function() {
                        qe(d, W, h),
                          e.timeout && (clearTimeout(e.timeout), (e.timeout = !1)),
                          De(d, O),
                          i.loading && De(e.canvas, I);
                      }),
                      { once: !0 }
                    ),
                    this.timeout && clearTimeout(this.timeout),
                    (this.timeout = setTimeout(function() {
                      De(d, O), (e.timeout = !1);
                    }, 1e3))),
                this
              );
            },
            prev: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = this.index - 1;
              return t < 0 && (t = e ? this.length - 1 : 0), this.view(t), this;
            },
            next: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = this.length - 1,
                n = this.index + 1;
              return n > t && (n = e ? 0 : t), this.view(n), this;
            },
            move: function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                n = this.imageData;
              return this.moveTo(ke(e) ? e : n.x + Number(e), ke(t) ? t : n.y + Number(t)), this;
            },
            moveTo: function(e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                a = this.element,
                r = this.options,
                o = this.imageData;
              if (((e = Number(e)), (n = Number(n)), this.viewed && !this.played && r.movable)) {
                var l = o.x,
                  s = o.y,
                  u = !1;
                if ((we(e) ? (u = !0) : (e = l), we(n) ? (u = !0) : (n = s), u)) {
                  if (
                    (xe(r.move) && We(a, re, r.move, { once: !0 }),
                    !1 === Ye(a, re, { x: e, y: n, oldX: l, oldY: s, originalEvent: i }))
                  )
                    return this;
                  (o.x = e),
                    (o.y = n),
                    (o.left = e),
                    (o.top = n),
                    (this.moving = !0),
                    this.renderImage(function() {
                      (t.moving = !1),
                        xe(r.moved) && We(a, oe, r.moved, { once: !0 }),
                        Ye(
                          a,
                          oe,
                          { x: e, y: n, oldX: l, oldY: s, originalEvent: i },
                          { cancelable: !1 }
                        );
                    });
                }
              }
              return this;
            },
            rotate: function(e) {
              return this.rotateTo((this.imageData.rotate || 0) + Number(e)), this;
            },
            rotateTo: function(e) {
              var t = this,
                n = this.element,
                i = this.options,
                a = this.imageData;
              if (((e = Number(e)), we(e) && this.viewed && !this.played && i.rotatable)) {
                var r = a.rotate;
                if (
                  (xe(i.rotate) && We(n, le, i.rotate, { once: !0 }),
                  !1 === Ye(n, le, { degree: e, oldDegree: r }))
                )
                  return this;
                (a.rotate = e),
                  (this.rotating = !0),
                  this.renderImage(function() {
                    (t.rotating = !1),
                      xe(i.rotated) && We(n, se, i.rotated, { once: !0 }),
                      Ye(n, se, { degree: e, oldDegree: r }, { cancelable: !1 });
                  });
              }
              return this;
            },
            scaleX: function(e) {
              return this.scale(e, this.imageData.scaleY), this;
            },
            scaleY: function(e) {
              return this.scale(this.imageData.scaleX, e), this;
            },
            scale: function(e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                i = this.element,
                a = this.options,
                r = this.imageData;
              if (((e = Number(e)), (n = Number(n)), this.viewed && !this.played && a.scalable)) {
                var o = r.scaleX,
                  l = r.scaleY,
                  s = !1;
                if ((we(e) ? (s = !0) : (e = o), we(n) ? (s = !0) : (n = l), s)) {
                  if (
                    (xe(a.scale) && We(i, ue, a.scale, { once: !0 }),
                    !1 === Ye(i, ue, { scaleX: e, scaleY: n, oldScaleX: o, oldScaleY: l }))
                  )
                    return this;
                  (r.scaleX = e),
                    (r.scaleY = n),
                    (this.scaling = !0),
                    this.renderImage(function() {
                      (t.scaling = !1),
                        xe(a.scaled) && We(i, de, a.scaled, { once: !0 }),
                        Ye(
                          i,
                          de,
                          { scaleX: e, scaleY: n, oldScaleX: o, oldScaleY: l },
                          { cancelable: !1 }
                        );
                    });
                }
              }
              return this;
            },
            zoom: function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                a = this.imageData;
              return (
                (e = Number(e)),
                (e = e < 0 ? 1 / (1 - e) : 1 + e),
                this.zoomTo((a.width * e) / a.naturalWidth, t, n, i),
                this
              );
            },
            zoomTo: function(e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                o = this.element,
                l = this.options,
                s = this.pointers,
                u = this.imageData,
                d = u.x,
                c = u.y,
                h = u.width,
                f = u.height,
                v = u.naturalWidth,
                p = u.naturalHeight;
              if (
                ((e = Math.max(0, e)), we(e) && this.viewed && !this.played && (r || l.zoomable))
              ) {
                if (!r) {
                  var m = Math.max(0.01, l.minZoomRatio),
                    y = Math.min(100, l.maxZoomRatio);
                  e = Math.min(Math.max(e, m), y);
                }
                if (a)
                  switch (a.type) {
                    case 'wheel':
                      l.zoomRatio >= 0.055 && e > 0.95 && e < 1.05 && (e = 1);
                      break;
                    case 'pointermove':
                    case 'touchmove':
                    case 'mousemove':
                      e > 0.99 && e < 1.01 && (e = 1);
                      break;
                  }
                var g = v * e,
                  b = p * e,
                  w = g - h,
                  k = b - f,
                  E = u.ratio;
                if (
                  (xe(l.zoom) && We(o, ce, l.zoom, { once: !0 }),
                  !1 === Ye(o, ce, { ratio: e, oldRatio: E, originalEvent: a }))
                )
                  return this;
                if (((this.zooming = !0), a)) {
                  var T = Be(this.viewer),
                    P = s && Object.keys(s).length > 0 ? Ze(s) : { pageX: a.pageX, pageY: a.pageY };
                  (u.x -= w * ((P.pageX - T.left - d) / h)),
                    (u.y -= k * ((P.pageY - T.top - c) / f));
                } else
                  Pe(i) && we(i.x) && we(i.y)
                    ? ((u.x -= w * ((i.x - d) / h)), (u.y -= k * ((i.y - c) / f)))
                    : ((u.x -= w / 2), (u.y -= k / 2));
                (u.left = u.x),
                  (u.top = u.y),
                  (u.width = g),
                  (u.height = b),
                  (u.oldRatio = E),
                  (u.ratio = e),
                  this.renderImage(function() {
                    (t.zooming = !1),
                      xe(l.zoomed) && We(o, he, l.zoomed, { once: !0 }),
                      Ye(o, he, { ratio: e, oldRatio: E, originalEvent: a }, { cancelable: !1 });
                  }),
                  n && this.tooltip();
              }
              return this;
            },
            play: function() {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (!this.isShown || this.played) return this;
              var n = this.element,
                i = this.options;
              if ((xe(i.play) && We(n, fe, i.play, { once: !0 }), !1 === Ye(n, fe))) return this;
              var a = this.player,
                r = this.loadImage.bind(this),
                o = [],
                l = 0,
                s = 0;
              if (
                ((this.played = !0),
                (this.onLoadWhenPlay = r),
                t && this.requestFullscreen(t),
                Ae(a, _),
                Ce(this.items, function(e, t) {
                  var n = e.querySelector('img'),
                    u = document.createElement('img');
                  (u.src = Le(n, 'originalUrl')),
                    (u.alt = n.getAttribute('alt')),
                    (u.referrerPolicy = n.referrerPolicy),
                    (l += 1),
                    Ae(u, k),
                    _e(u, R, i.transition),
                    Ie(e, b) && (Ae(u, N), (s = t)),
                    o.push(u),
                    We(u, W, r, { once: !0 }),
                    a.appendChild(u);
                }),
                we(i.interval) && i.interval > 0)
              ) {
                var u = function t() {
                    clearTimeout(e.playing.timeout),
                      De(o[s], N),
                      (s -= 1),
                      (s = s >= 0 ? s : l - 1),
                      Ae(o[s], N),
                      (e.playing.timeout = setTimeout(t, i.interval));
                  },
                  d = function t() {
                    clearTimeout(e.playing.timeout),
                      De(o[s], N),
                      (s += 1),
                      (s = s < l ? s : 0),
                      Ae(o[s], N),
                      (e.playing.timeout = setTimeout(t, i.interval));
                  };
                l > 1 && (this.playing = { prev: u, next: d, timeout: setTimeout(d, i.interval) });
              }
              return this;
            },
            stop: function() {
              var e = this;
              if (!this.played) return this;
              var t = this.element,
                n = this.options;
              if ((xe(n.stop) && We(t, ve, n.stop, { once: !0 }), !1 === Ye(t, ve))) return this;
              var i = this.player;
              return (
                clearTimeout(this.playing.timeout),
                (this.playing = !1),
                (this.played = !1),
                Ce(i.getElementsByTagName('img'), function(t) {
                  qe(t, W, e.onLoadWhenPlay);
                }),
                De(i, _),
                (i.innerHTML = ''),
                this.exitFullscreen(),
                this
              );
            },
            full: function() {
              var e = this,
                t = this.options,
                n = this.viewer,
                i = this.image,
                a = this.list;
              return !this.isShown || this.played || this.fulled || !t.inline
                ? this
                : ((this.fulled = !0),
                  this.open(),
                  Ae(this.button, P),
                  t.transition && (De(a, R), this.viewed && De(i, R)),
                  Ae(n, E),
                  n.setAttribute('role', 'dialog'),
                  n.setAttribute('aria-labelledby', this.title.id),
                  n.setAttribute('aria-modal', !0),
                  n.removeAttribute('style'),
                  Ne(n, { zIndex: t.zIndex }),
                  t.focus && this.enforceFocus(),
                  this.initContainer(),
                  (this.viewerData = Se({}, this.containerData)),
                  this.renderList(),
                  this.viewed &&
                    this.initImage(function() {
                      e.renderImage(function() {
                        t.transition &&
                          setTimeout(function() {
                            Ae(i, R), Ae(a, R);
                          }, 0);
                      });
                    }),
                  this);
            },
            exit: function() {
              var e = this,
                t = this.options,
                n = this.viewer,
                i = this.image,
                a = this.list;
              return this.isShown && !this.played && this.fulled && t.inline
                ? ((this.fulled = !1),
                  this.close(),
                  De(this.button, P),
                  t.transition && (De(a, R), this.viewed && De(i, R)),
                  t.focus && this.clearEnforceFocus(),
                  n.removeAttribute('role'),
                  n.removeAttribute('aria-labelledby'),
                  n.removeAttribute('aria-modal'),
                  De(n, E),
                  Ne(n, { zIndex: t.zIndexInline }),
                  (this.viewerData = Se({}, this.parentData)),
                  this.renderViewer(),
                  this.renderList(),
                  this.viewed &&
                    this.initImage(function() {
                      e.renderImage(function() {
                        t.transition &&
                          setTimeout(function() {
                            Ae(i, R), Ae(a, R);
                          }, 0);
                      });
                    }),
                  this)
                : this;
            },
            tooltip: function() {
              var e = this,
                t = this.options,
                n = this.tooltipBox,
                i = this.imageData;
              return this.viewed && !this.played && t.tooltip
                ? ((n.textContent = ''.concat(Math.round(100 * i.ratio), '%')),
                  this.tooltipping
                    ? clearTimeout(this.tooltipping)
                    : t.transition
                    ? (this.fading && Ye(n, X),
                      Ae(n, _),
                      Ae(n, k),
                      Ae(n, R),
                      n.removeAttribute('aria-hidden'),
                      (n.initialOffsetWidth = n.offsetWidth),
                      Ae(n, N))
                    : (Ae(n, _), n.removeAttribute('aria-hidden')),
                  (this.tooltipping = setTimeout(function() {
                    t.transition
                      ? (We(
                          n,
                          X,
                          function() {
                            De(n, _),
                              De(n, k),
                              De(n, R),
                              n.setAttribute('aria-hidden', !0),
                              (e.fading = !1);
                          },
                          { once: !0 }
                        ),
                        De(n, N),
                        (e.fading = !0))
                      : (De(n, _), n.setAttribute('aria-hidden', !0)),
                      (e.tooltipping = !1);
                  }, 1e3)),
                  this)
                : this;
            },
            toggle: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              return (
                1 === this.imageData.ratio
                  ? this.zoomTo(this.imageData.oldRatio, !0, null, e)
                  : this.zoomTo(1, !0, null, e),
                this
              );
            },
            reset: function() {
              return (
                this.viewed &&
                  !this.played &&
                  ((this.imageData = Se({}, this.initialImageData)), this.renderImage()),
                this
              );
            },
            update: function() {
              var e = this,
                t = this.element,
                n = this.options,
                i = this.isImg;
              if (i && !t.parentNode) return this.destroy();
              var a = [];
              if (
                (Ce(i ? [t] : t.querySelectorAll('img'), function(t) {
                  xe(n.filter) ? n.filter.call(e, t) && a.push(t) : e.getImageURL(t) && a.push(t);
                }),
                !a.length)
              )
                return this;
              if (((this.images = a), (this.length = a.length), this.ready)) {
                var r = [];
                if (
                  (Ce(this.items, function(e, t) {
                    var n = e.querySelector('img'),
                      i = a[t];
                    (i && n && i.src === n.src && i.alt === n.alt) || r.push(t);
                  }),
                  Ne(this.list, { width: 'auto' }),
                  this.initList(),
                  this.isShown)
                )
                  if (this.length) {
                    if (this.viewed) {
                      var o = r.indexOf(this.index);
                      if (o >= 0)
                        (this.viewed = !1),
                          this.view(Math.max(Math.min(this.index - o, this.length - 1), 0));
                      else {
                        var l = this.items[this.index];
                        Ae(l, b), l.setAttribute('aria-selected', !0);
                      }
                    }
                  } else
                    (this.image = null),
                      (this.viewed = !1),
                      (this.index = 0),
                      (this.imageData = {}),
                      (this.canvas.innerHTML = ''),
                      (this.title.innerHTML = '');
              } else this.build();
              return this;
            },
            destroy: function() {
              var e = this.element,
                t = this.options;
              return e[p]
                ? ((this.destroyed = !0),
                  this.ready
                    ? (this.played && this.stop(),
                      t.inline
                        ? (this.fulled && this.exit(), this.unbind())
                        : this.isShown
                        ? (this.viewing &&
                            (this.imageRendering
                              ? this.imageRendering.abort()
                              : this.imageInitializing && this.imageInitializing.abort()),
                          this.hiding && this.transitioning.abort(),
                          this.hidden())
                        : this.showing && (this.transitioning.abort(), this.hidden()),
                      (this.ready = !1),
                      this.viewer.parentNode.removeChild(this.viewer))
                    : t.inline &&
                      (this.delaying
                        ? this.delaying.abort()
                        : this.initializing && this.initializing.abort()),
                  t.inline || qe(e, j, this.onStart),
                  (e[p] = void 0),
                  this)
                : this;
            },
          },
          nt = {
            getImageURL: function(e) {
              var t = this.options.url;
              return (t = ge(t) ? e.getAttribute(t) : xe(t) ? t.call(this, e) : ''), t;
            },
            enforceFocus: function() {
              var e = this;
              this.clearEnforceFocus(),
                We(
                  document,
                  z,
                  (this.onFocusin = function(t) {
                    var n = e.viewer,
                      i = t.target;
                    if (i !== document && i !== n && !n.contains(i)) {
                      while (i) {
                        if (
                          null !== i.getAttribute('tabindex') ||
                          'true' === i.getAttribute('aria-modal')
                        )
                          return;
                        i = i.parentElement;
                      }
                      n.focus();
                    }
                  })
                );
            },
            clearEnforceFocus: function() {
              this.onFocusin && (qe(document, z, this.onFocusin), (this.onFocusin = null));
            },
            open: function() {
              var e = this.body;
              Ae(e, D),
                this.scrollbarWidth > 0 &&
                  (e.style.paddingRight = ''.concat(
                    this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0),
                    'px'
                  ));
            },
            close: function() {
              var e = this.body;
              De(e, D),
                this.scrollbarWidth > 0 && (e.style.paddingRight = this.initialBodyPaddingRight);
            },
            shown: function() {
              var e = this.element,
                t = this.options,
                n = this.viewer;
              (this.fulled = !0),
                (this.isShown = !0),
                this.render(),
                this.bind(),
                (this.showing = !1),
                t.focus && (n.focus(), this.enforceFocus()),
                xe(t.shown) && We(e, ee, t.shown, { once: !0 }),
                !1 !== Ye(e, ee) &&
                  this.ready &&
                  this.isShown &&
                  !this.hiding &&
                  this.view(this.index);
            },
            hidden: function() {
              var e = this.element,
                t = this.options,
                n = this.viewer;
              t.fucus && this.clearEnforceFocus(),
                this.close(),
                this.unbind(),
                Ae(n, x),
                n.removeAttribute('role'),
                n.removeAttribute('aria-labelledby'),
                n.removeAttribute('aria-modal'),
                n.setAttribute('aria-hidden', !0),
                this.resetList(),
                this.resetImage(),
                (this.fulled = !1),
                (this.viewed = !1),
                (this.isShown = !1),
                (this.hiding = !1),
                this.destroyed ||
                  (xe(t.hidden) && We(e, ne, t.hidden, { once: !0 }),
                  Ye(e, ne, null, { cancelable: !1 }));
            },
            requestFullscreen: function(e) {
              var t = this.element.ownerDocument;
              if (
                this.fulled &&
                !(
                  t.fullscreenElement ||
                  t.webkitFullscreenElement ||
                  t.mozFullScreenElement ||
                  t.msFullscreenElement
                )
              ) {
                var n = t.documentElement;
                n.requestFullscreen
                  ? Pe(e)
                    ? n.requestFullscreen(e)
                    : n.requestFullscreen()
                  : n.webkitRequestFullscreen
                  ? n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                  : n.mozRequestFullScreen
                  ? n.mozRequestFullScreen()
                  : n.msRequestFullscreen && n.msRequestFullscreen();
              }
            },
            exitFullscreen: function() {
              var e = this.element.ownerDocument;
              this.fulled &&
                (e.fullscreenElement ||
                  e.webkitFullscreenElement ||
                  e.mozFullScreenElement ||
                  e.msFullscreenElement) &&
                (e.exitFullscreen
                  ? e.exitFullscreen()
                  : e.webkitExitFullscreen
                  ? e.webkitExitFullscreen()
                  : e.mozCancelFullScreen
                  ? e.mozCancelFullScreen()
                  : e.msExitFullscreen && e.msExitFullscreen());
            },
            change: function(e) {
              var t = this.options,
                n = this.pointers,
                i = n[Object.keys(n)[0]];
              if (i) {
                var a = i.endX - i.startX,
                  r = i.endY - i.startY;
                switch (this.action) {
                  case m:
                    (0 === a && 0 === r) || ((this.pointerMoved = !0), this.move(a, r, e));
                    break;
                  case g:
                    this.zoom(Ge(n), !1, null, e);
                    break;
                  case y:
                    this.action = 'switched';
                    var o = Math.abs(a);
                    o > 1 &&
                      o > Math.abs(r) &&
                      ((this.pointers = {}),
                      a > 1 ? this.prev(t.loop) : a < -1 && this.next(t.loop));
                    break;
                }
                Ce(n, function(e) {
                  (e.startX = e.endX), (e.startY = e.endY);
                });
              }
            },
            isSwitchable: function() {
              var e = this.imageData,
                t = this.viewerData;
              return (
                this.length > 1 &&
                e.x >= 0 &&
                e.y >= 0 &&
                e.width <= t.width &&
                e.height <= t.height
              );
            },
          },
          it = h.Viewer,
          at = (function(e) {
            return function() {
              return (e += 1), e;
            };
          })(-1),
          rt = (function() {
            function e(t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if ((i(this, e), !t || 1 !== t.nodeType))
                throw new Error('The first argument is required and must be an element.');
              (this.element = t),
                (this.options = Se({}, u, Pe(n) && n)),
                (this.action = !1),
                (this.fading = !1),
                (this.fulled = !1),
                (this.hiding = !1),
                (this.imageClicked = !1),
                (this.imageData = {}),
                (this.index = this.options.initialViewIndex),
                (this.isImg = !1),
                (this.isShown = !1),
                (this.length = 0),
                (this.moving = !1),
                (this.played = !1),
                (this.playing = !1),
                (this.pointers = {}),
                (this.ready = !1),
                (this.rotating = !1),
                (this.scaling = !1),
                (this.showing = !1),
                (this.timeout = !1),
                (this.tooltipping = !1),
                (this.viewed = !1),
                (this.viewing = !1),
                (this.wheeling = !1),
                (this.zooming = !1),
                (this.pointerMoved = !1),
                (this.id = at()),
                this.init();
            }
            return (
              r(
                e,
                [
                  {
                    key: 'init',
                    value: function() {
                      var e = this,
                        t = this.element,
                        n = this.options;
                      if (!t[p]) {
                        (t[p] = this), n.focus && !n.keyboard && (n.focus = !1);
                        var i = 'img' === t.localName,
                          a = [];
                        if (
                          (Ce(i ? [t] : t.querySelectorAll('img'), function(t) {
                            xe(n.filter)
                              ? n.filter.call(e, t) && a.push(t)
                              : e.getImageURL(t) && a.push(t);
                          }),
                          (this.isImg = i),
                          (this.length = a.length),
                          (this.images = a),
                          this.initBody(),
                          ke(document.createElement(p).style.transition) && (n.transition = !1),
                          n.inline)
                        ) {
                          var r = 0,
                            o = function() {
                              var t;
                              ((r += 1), r === e.length) &&
                                ((e.initializing = !1),
                                (e.delaying = {
                                  abort: function() {
                                    clearTimeout(t);
                                  },
                                }),
                                (t = setTimeout(function() {
                                  (e.delaying = !1), e.build();
                                }, 0)));
                            };
                          (this.initializing = {
                            abort: function() {
                              Ce(a, function(e) {
                                e.complete || (qe(e, W, o), qe(e, Y, o));
                              });
                            },
                          }),
                            Ce(a, function(e) {
                              var t, n;
                              e.complete
                                ? o()
                                : (We(
                                    e,
                                    W,
                                    (t = function() {
                                      qe(e, Y, n), o();
                                    }),
                                    { once: !0 }
                                  ),
                                  We(
                                    e,
                                    Y,
                                    (n = function() {
                                      qe(e, W, t), o();
                                    }),
                                    { once: !0 }
                                  ));
                            });
                        } else
                          We(
                            t,
                            j,
                            (this.onStart = function(t) {
                              var i = t.target;
                              'img' !== i.localName ||
                                (xe(n.filter) && !n.filter.call(e, i)) ||
                                e.view(e.images.indexOf(i));
                            })
                          );
                      }
                    },
                  },
                  {
                    key: 'build',
                    value: function() {
                      if (!this.ready) {
                        var e = this.element,
                          t = this.options,
                          n = e.parentNode,
                          i = document.createElement('div');
                        i.innerHTML = d;
                        var a = i.querySelector('.'.concat(p, '-container')),
                          r = a.querySelector('.'.concat(p, '-title')),
                          o = a.querySelector('.'.concat(p, '-toolbar')),
                          l = a.querySelector('.'.concat(p, '-navbar')),
                          s = a.querySelector('.'.concat(p, '-button')),
                          u = a.querySelector('.'.concat(p, '-canvas'));
                        if (
                          ((this.parent = n),
                          (this.viewer = a),
                          (this.title = r),
                          (this.toolbar = o),
                          (this.navbar = l),
                          (this.button = s),
                          (this.canvas = u),
                          (this.footer = a.querySelector('.'.concat(p, '-footer'))),
                          (this.tooltipBox = a.querySelector('.'.concat(p, '-tooltip'))),
                          (this.player = a.querySelector('.'.concat(p, '-player'))),
                          (this.list = a.querySelector('.'.concat(p, '-list'))),
                          (a.id = ''.concat(p).concat(this.id)),
                          (r.id = ''.concat(p, 'Title').concat(this.id)),
                          Ae(r, t.title ? Ke(Array.isArray(t.title) ? t.title[0] : t.title) : x),
                          Ae(l, t.navbar ? Ke(t.navbar) : x),
                          _e(s, x, !t.button),
                          t.keyboard && s.setAttribute('tabindex', 0),
                          t.backdrop &&
                            (Ae(a, ''.concat(p, '-backdrop')),
                            t.inline || 'static' === t.backdrop || Fe(u, pe, 'hide')),
                          ge(t.className) &&
                            t.className &&
                            t.className.split(me).forEach(function(e) {
                              Ae(a, e);
                            }),
                          t.toolbar)
                        ) {
                          var c = document.createElement('ul'),
                            h = Pe(t.toolbar),
                            f = ye.slice(0, 3),
                            v = ye.slice(7, 9),
                            m = ye.slice(9);
                          h || Ae(o, Ke(t.toolbar)),
                            Ce(h ? t.toolbar : ye, function(e, n) {
                              var i = h && Pe(e),
                                a = h ? je(n) : e,
                                r = i && !ke(e.show) ? e.show : e;
                              if (
                                r &&
                                (t.zoomable || -1 === f.indexOf(a)) &&
                                (t.rotatable || -1 === v.indexOf(a)) &&
                                (t.scalable || -1 === m.indexOf(a))
                              ) {
                                var o = i && !ke(e.size) ? e.size : e,
                                  l = i && !ke(e.click) ? e.click : e,
                                  s = document.createElement('li');
                                t.keyboard && s.setAttribute('tabindex', 0),
                                  s.setAttribute('role', 'button'),
                                  Ae(s, ''.concat(p, '-').concat(a)),
                                  xe(l) || Fe(s, pe, a),
                                  we(r) && Ae(s, Ke(r)),
                                  -1 !== ['small', 'large'].indexOf(o)
                                    ? Ae(s, ''.concat(p, '-').concat(o))
                                    : 'play' === a && Ae(s, ''.concat(p, '-large')),
                                  xe(l) && We(s, j, l),
                                  c.appendChild(s);
                              }
                            }),
                            o.appendChild(c);
                        } else Ae(o, x);
                        if (!t.rotatable) {
                          var y = o.querySelectorAll('li[class*="rotate"]');
                          Ae(y, O),
                            Ce(y, function(e) {
                              o.appendChild(e);
                            });
                        }
                        if (t.inline)
                          Ae(s, T),
                            Ne(a, { zIndex: t.zIndexInline }),
                            'static' === window.getComputedStyle(n).position &&
                              Ne(n, { position: 'relative' }),
                            n.insertBefore(a, e.nextSibling);
                        else {
                          Ae(s, w), Ae(a, E), Ae(a, k), Ae(a, x), Ne(a, { zIndex: t.zIndex });
                          var g = t.container;
                          ge(g) && (g = e.ownerDocument.querySelector(g)),
                            g || (g = this.body),
                            g.appendChild(a);
                        }
                        t.inline && (this.render(), this.bind(), (this.isShown = !0)),
                          (this.ready = !0),
                          xe(t.ready) && We(e, Q, t.ready, { once: !0 }),
                          !1 !== Ye(e, Q)
                            ? this.ready && t.inline && this.view(this.index)
                            : (this.ready = !1);
                      }
                    },
                  },
                ],
                [
                  {
                    key: 'noConflict',
                    value: function() {
                      return (window.Viewer = it), e;
                    },
                  },
                  {
                    key: 'setDefaults',
                    value: function(e) {
                      Se(u, Pe(e) && e);
                    },
                  },
                ]
              ),
              e
            );
          })();
        return Se(rt.prototype, Qe, $e, et, tt, nt), rt;
      });
    },
    yYHT: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = a(n('TSYQ')),
        v = a(n('U3K2')),
        p = {
          player: c['default'].object,
          actions: c['default'].object,
          className: c['default'].string,
          offMenuText: c['default'].string,
          showOffMenu: c['default'].bool,
          kinds: c['default'].array,
        },
        m = { offMenuText: 'Off', showOffMenu: !0, kinds: ['captions', 'subtitles'] },
        y = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.getTextTrackItems = i.getTextTrackItems.bind((0, u['default'])(i))),
              (i.updateState = i.updateState.bind((0, u['default'])(i))),
              (i.handleSelectItem = i.handleSelectItem.bind((0, u['default'])(i))),
              (i.state = i.getTextTrackItems()),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.updateState();
                },
              },
              {
                key: 'getTextTrackItems',
                value: function() {
                  var e = this.props,
                    t = e.kinds,
                    n = e.player,
                    i = e.offMenuText,
                    a = e.showOffMenu,
                    r = n.textTracks,
                    o = n.activeTextTrack,
                    l = { items: [], selectedIndex: 0 },
                    s = Array.from(r || []);
                  return 0 === s.length
                    ? l
                    : (a && l.items.push({ label: i || 'Off', value: null }),
                      s.forEach(function(e) {
                        (t.length && !t.includes(e.kind)) ||
                          l.items.push({ label: e.label, value: e.language });
                      }),
                      (l.selectedIndex = l.items.findIndex(function(e) {
                        return o && o.language === e.value;
                      })),
                      -1 === l.selectedIndex && (l.selectedIndex = 0),
                      l);
                },
              },
              {
                key: 'updateState',
                value: function() {
                  var e = this.getTextTrackItems();
                  (e.selectedIndex === this.state.selectedIndex &&
                    this.textTrackItemsAreEqual(e.items, this.state.items)) ||
                    this.setState(e);
                },
              },
              {
                key: 'textTrackItemsAreEqual',
                value: function(e, t) {
                  if (e.length !== t.length) return !1;
                  for (var n = 0; n < e.length; n++)
                    if (!t[n] || e[n].label !== t[n].label || e[n].value !== t[n].value) return !1;
                  return !0;
                },
              },
              {
                key: 'handleSelectItem',
                value: function(e) {
                  var t = this.props,
                    n = t.player,
                    i = t.actions,
                    a = t.showOffMenu,
                    r = n.textTracks;
                  Array.from(r).forEach(function(t, n) {
                    e === (a ? n + 1 : n)
                      ? ((t.mode = 'showing'), i.activateTextTrack(t))
                      : (t.mode = 'hidden');
                  });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.items,
                    n = e.selectedIndex;
                  return h['default'].createElement(
                    v['default'],
                    {
                      className: (0, f['default'])(
                        'video-react-closed-caption',
                        this.props.className
                      ),
                      onSelectItem: this.handleSelectItem,
                      items: t,
                      selectedIndex: n,
                    },
                    h['default'].createElement(
                      'span',
                      { className: 'video-react-control-text' },
                      'Closed Caption'
                    )
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (y.propTypes = p), (y.defaultProps = m), (y.displayName = 'ClosedCaptionButton');
      var g = y;
      t['default'] = g;
    },
    zFvY: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('lwsE')),
        o = a(n('W8MJ')),
        l = a(n('a1gu')),
        s = a(n('Nsbk')),
        u = a(n('PJYZ')),
        d = a(n('7W2i')),
        c = a(n('17x9')),
        h = i(n('q1tI')),
        f = a(n('TSYQ')),
        v = { manager: c['default'].object, className: c['default'].string },
        p = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, r['default'])(this, t),
              (i = (0, l['default'])(this, (0, s['default'])(t).call(this, e, n))),
              (i.timer = null),
              e.manager.subscribeToOperationStateChange(
                i.handleStateChange.bind((0, u['default'])(i))
              ),
              (i.state = { hidden: !0, operation: {} }),
              i
            );
          }
          return (
            (0, d['default'])(t, e),
            (0, o['default'])(t, [
              {
                key: 'handleStateChange',
                value: function(e, t) {
                  var n = this;
                  e.count !== t.count &&
                    'shortcut' === e.operation.source &&
                    (this.timer && (clearTimeout(this.timer), (this.timer = null)),
                    this.setState({ hidden: !1, count: e.count, operation: e.operation }),
                    (this.timer = setTimeout(function() {
                      n.setState({ hidden: !0 }), (n.timer = null);
                    }, 500)));
                },
              },
              {
                key: 'render',
                value: function() {
                  if ('shortcut' !== this.state.operation.source) return null;
                  var e = this.state.hidden ? { display: 'none' } : null;
                  return h['default'].createElement(
                    'div',
                    {
                      className: (0, f['default'])(
                        {
                          'video-react-bezel': !0,
                          'video-react-bezel-animation': this.state.count % 2 === 0,
                          'video-react-bezel-animation-alt': this.state.count % 2 === 1,
                        },
                        this.props.className
                      ),
                      style: e,
                      role: 'status',
                      'aria-label': this.state.operation.action,
                    },
                    h['default'].createElement('div', {
                      className: (0, f['default'])(
                        'video-react-bezel-icon',
                        'video-react-bezel-icon-'.concat(this.state.operation.action)
                      ),
                    })
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t['default'] = p), (p.propTypes = v), (p.displayName = 'Bezel');
    },
    zHIc: function(e, t, n) {
      'use strict';
      var i = n('284h'),
        a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = a(n('pVnL')),
        o = a(n('lwsE')),
        l = a(n('W8MJ')),
        s = a(n('a1gu')),
        u = a(n('Nsbk')),
        d = a(n('PJYZ')),
        c = a(n('7W2i')),
        h = a(n('17x9')),
        f = i(n('q1tI')),
        v = a(n('TSYQ')),
        p = i(n('EVUy')),
        m = a(n('xFFL')),
        y = { player: h['default'].object, className: h['default'].string },
        g = (function(e) {
          function t(e, n) {
            var i;
            return (
              (0, o['default'])(this, t),
              (i = (0, s['default'])(this, (0, u['default'])(t).call(this, e, n))),
              (i.state = { mouseTime: { time: null, position: 0 } }),
              (i.handleMouseMoveThrottle = i.handleMouseMove.bind((0, d['default'])(i))),
              i
            );
          }
          return (
            (0, c['default'])(t, e),
            (0, l['default'])(t, [
              {
                key: 'handleMouseMove',
                value: function(e) {
                  if (e.pageX) {
                    var t = this.props.player.duration,
                      n = this.seekBar,
                      i = p.getPointerPosition(n, e).x * t,
                      a = e.pageX - p.findElPosition(n).left;
                    this.setState({ mouseTime: { time: i, position: a } });
                  }
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props.className;
                  return f['default'].createElement(
                    'div',
                    {
                      onMouseMove: this.handleMouseMoveThrottle,
                      className: (0, v['default'])(
                        'video-react-progress-control video-react-control',
                        t
                      ),
                    },
                    f['default'].createElement(
                      m['default'],
                      (0, r['default'])(
                        {
                          mouseTime: this.state.mouseTime,
                          ref: function(t) {
                            e.seekBar = t;
                          },
                        },
                        this.props
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t['default'] = g), (g.propTypes = y), (g.displayName = 'ProgressControl');
    },
  },
]);
