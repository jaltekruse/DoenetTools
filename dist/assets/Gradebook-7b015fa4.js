import { r as reactExports, ax as commonjsGlobal, s as styled, aA as Recoil_index_8, a$ as Recoil_index_9, W as searchParamAtomFamily, h as axios, b0 as Recoil_index_10, b1 as Recoil_index_11, j as jsx, R as React, b as jsxs, c as FontAwesomeIcon, b8 as faSortDown, b9 as faSortUp, ba as faSort, t as Recoil_index_20, o as Recoil_index_24, p as pageToolViewAtom, U as Recoil_index_21, a7 as suppressMenusAtom, aa as coursePermissionsAndSettingsByCourseId } from "./PageViewer-d914b069.js";
import { e as effectivePermissionsByCourseId } from "./RoleDropdown-ece1f3f8.js";
import "./DropdownMenu-d8160745.js";
import "./defineProperty-2975ceb9.js";
import "./setPrototypeOf-be240aa9.js";
import "./extends-d9a14db7.js";
import "./emotion-react.browser.esm-dfafc3e8.js";
import "./emotion-element-6a883da9.browser.esm-2d3713e7.js";
var reactTableExports = {};
var reactTable = {
  get exports() {
    return reactTableExports;
  },
  set exports(v) {
    reactTableExports = v;
  }
};
var reactTable_production_minExports = {};
var reactTable_production_min = {
  get exports() {
    return reactTable_production_minExports;
  },
  set exports(v) {
    reactTable_production_minExports = v;
  }
};
(function(module, exports) {
  !function(e, t) {
    t(exports, reactExports);
  }(commonjsGlobal, function(e, t) {
    function n(e2, t2, n2, o2, r2, i2, u2) {
      try {
        var l2 = e2[i2](u2), s2 = l2.value;
      } catch (e3) {
        return void n2(e3);
      }
      l2.done ? t2(s2) : Promise.resolve(s2).then(o2, r2);
    }
    function o(e2) {
      return function() {
        var t2 = this, o2 = arguments;
        return new Promise(function(r2, i2) {
          var u2 = e2.apply(t2, o2);
          function l2(e3) {
            n(u2, r2, i2, l2, s2, "next", e3);
          }
          function s2(e3) {
            n(u2, r2, i2, l2, s2, "throw", e3);
          }
          l2(void 0);
        });
      };
    }
    function r() {
      return (r = Object.assign || function(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = arguments[t2];
          for (var o2 in n2)
            Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
        }
        return e2;
      }).apply(this, arguments);
    }
    function i(e2, t2) {
      if (null == e2)
        return {};
      var n2, o2, r2 = {}, i2 = Object.keys(e2);
      for (o2 = 0; o2 < i2.length; o2++)
        n2 = i2[o2], t2.indexOf(n2) >= 0 || (r2[n2] = e2[n2]);
      return r2;
    }
    function u(e2) {
      var t2 = function(e3, t3) {
        if ("object" != typeof e3 || null === e3)
          return e3;
        var n2 = e3[Symbol.toPrimitive];
        if (void 0 !== n2) {
          var o2 = n2.call(e3, t3 || "default");
          if ("object" != typeof o2)
            return o2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t3 ? String : Number)(e3);
      }(e2, "string");
      return "symbol" == typeof t2 ? t2 : String(t2);
    }
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    var l = { init: "init" }, s = function(e2) {
      var t2 = e2.value;
      return void 0 === t2 ? "" : t2;
    }, a = function() {
      return t.createElement(t.Fragment, null, " ");
    }, c = { Cell: s, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER };
    function d() {
      for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++)
        t2[n2] = arguments[n2];
      return t2.reduce(function(e3, t3) {
        var n3 = t3.style, o2 = t3.className;
        return e3 = r({}, e3, {}, i(t3, ["style", "className"])), n3 && (e3.style = e3.style ? r({}, e3.style || {}, {}, n3 || {}) : n3), o2 && (e3.className = e3.className ? e3.className + " " + o2 : o2), "" === e3.className && delete e3.className, e3;
      }, {});
    }
    var f = function(e2, t2) {
      return void 0 === t2 && (t2 = {}), function(n2) {
        return void 0 === n2 && (n2 = {}), [].concat(e2, [n2]).reduce(function(e3, o2) {
          return function e4(t3, n3, o3) {
            return "function" == typeof n3 ? e4({}, n3(t3, o3)) : Array.isArray(n3) ? d.apply(void 0, [t3].concat(n3)) : d(t3, n3);
          }(e3, o2, r({}, t2, { userProps: n2 }));
        }, {});
      };
    }, p = function(e2, t2, n2, o2) {
      return void 0 === n2 && (n2 = {}), e2.reduce(function(e3, t3) {
        return t3(e3, n2);
      }, t2);
    }, g = function(e2, t2, n2) {
      return void 0 === n2 && (n2 = {}), e2.forEach(function(e3) {
        e3(t2, n2);
      });
    };
    function v(e2, t2, n2, o2) {
      e2.findIndex(function(e3) {
        return e3.pluginName === n2;
      });
      t2.forEach(function(t3) {
        e2.findIndex(function(e3) {
          return e3.pluginName === t3;
        });
      });
    }
    function m(e2, t2) {
      return "function" == typeof e2 ? e2(t2) : e2;
    }
    function h(e2) {
      var n2 = t.useRef();
      return n2.current = e2, t.useCallback(function() {
        return n2.current;
      }, []);
    }
    var y = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect;
    function w(e2, n2) {
      var o2 = t.useRef(false);
      y(function() {
        o2.current && e2(), o2.current = true;
      }, n2);
    }
    function R(e2, t2, n2) {
      return void 0 === n2 && (n2 = {}), function(o2, i2) {
        void 0 === i2 && (i2 = {});
        var u2 = "string" == typeof o2 ? t2[o2] : o2;
        if (void 0 === u2)
          throw console.info(t2), new Error("Renderer Error ☝️");
        return b(u2, r({}, e2, { column: t2 }, n2, {}, i2));
      };
    }
    function b(e2, n2) {
      return function(e3) {
        return "function" == typeof e3 && ((t2 = Object.getPrototypeOf(e3)).prototype && t2.prototype.isReactComponent);
        var t2;
      }(o2 = e2) || "function" == typeof o2 || function(e3) {
        return "object" == typeof e3 && "symbol" == typeof e3.$$typeof && ["react.memo", "react.forward_ref"].includes(e3.$$typeof.description);
      }(o2) ? t.createElement(e2, n2) : e2;
      var o2;
    }
    function S(e2, t2, n2) {
      return void 0 === n2 && (n2 = 0), e2.map(function(e3) {
        return x(e3 = r({}, e3, { parent: t2, depth: n2 })), e3.columns && (e3.columns = S(e3.columns, e3, n2 + 1)), e3;
      });
    }
    function C(e2) {
      return G(e2, "columns");
    }
    function x(e2) {
      var t2 = e2.id, n2 = e2.accessor, o2 = e2.Header;
      if ("string" == typeof n2) {
        t2 = t2 || n2;
        var r2 = n2.split(".");
        n2 = function(e3) {
          return function(e4, t3, n3) {
            if (!t3)
              return e4;
            var o3, r3 = "function" == typeof t3 ? t3 : JSON.stringify(t3), i2 = E.get(r3) || function() {
              var e5 = function(e6) {
                return function e7(t4, n4) {
                  void 0 === n4 && (n4 = []);
                  if (Array.isArray(t4))
                    for (var o4 = 0; o4 < t4.length; o4 += 1)
                      e7(t4[o4], n4);
                  else
                    n4.push(t4);
                  return n4;
                }(e6).map(function(e7) {
                  return String(e7).replace(".", "_");
                }).join(".").replace(T, ".").replace(O, "").split(".");
              }(t3);
              return E.set(r3, e5), e5;
            }();
            try {
              o3 = i2.reduce(function(e5, t4) {
                return e5[t4];
              }, e4);
            } catch (e5) {
            }
            return void 0 !== o3 ? o3 : n3;
          }(e3, r2);
        };
      }
      if (!t2 && "string" == typeof o2 && o2 && (t2 = o2), !t2 && e2.columns)
        throw console.error(e2), new Error('A column ID (or unique "Header" value) is required!');
      if (!t2)
        throw console.error(e2), new Error("A column ID (or string accessor) is required!");
      return Object.assign(e2, { id: t2, accessor: n2 }), e2;
    }
    function P(e2, t2) {
      if (!t2)
        throw new Error();
      return Object.assign(e2, r({ Header: a, Footer: a }, c, {}, t2, {}, e2)), Object.assign(e2, { originalWidth: e2.width }), e2;
    }
    function B(e2, t2, n2) {
      void 0 === n2 && (n2 = function() {
        return {};
      });
      for (var o2 = [], i2 = e2, u2 = 0, l2 = function() {
        return u2++;
      }, s2 = function() {
        var e3 = { headers: [] }, u3 = [], s3 = i2.some(function(e4) {
          return e4.parent;
        });
        i2.forEach(function(o3) {
          var i3, a2 = [].concat(u3).reverse()[0];
          if (s3) {
            if (o3.parent)
              i3 = r({}, o3.parent, { originalId: o3.parent.id, id: o3.parent.id + "_" + l2(), headers: [o3] }, n2(o3));
            else
              i3 = P(r({ originalId: o3.id + "_placeholder", id: o3.id + "_placeholder_" + l2(), placeholderOf: o3, headers: [o3] }, n2(o3)), t2);
            a2 && a2.originalId === i3.originalId ? a2.headers.push(o3) : u3.push(i3);
          }
          e3.headers.push(o3);
        }), o2.push(e3), i2 = u3;
      }; i2.length; )
        s2();
      return o2.reverse();
    }
    var E = /* @__PURE__ */ new Map();
    function I() {
      for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++)
        t2[n2] = arguments[n2];
      for (var o2 = 0; o2 < t2.length; o2 += 1)
        if (void 0 !== t2[o2])
          return t2[o2];
    }
    function F(e2) {
      if ("function" == typeof e2)
        return e2;
    }
    function G(e2, t2) {
      var n2 = [];
      return function e3(o2) {
        o2.forEach(function(o3) {
          o3[t2] ? e3(o3[t2]) : n2.push(o3);
        });
      }(e2), n2;
    }
    function A(e2, t2) {
      var n2 = t2.manualExpandedKey, o2 = t2.expanded, r2 = t2.expandSubRows, i2 = void 0 === r2 || r2, u2 = [];
      return e2.forEach(function(e3) {
        return function e4(t3, r3) {
          void 0 === r3 && (r3 = true), t3.isExpanded = t3.original && t3.original[n2] || o2[t3.id], t3.canExpand = t3.subRows && !!t3.subRows.length, r3 && u2.push(t3), t3.subRows && t3.subRows.length && t3.isExpanded && t3.subRows.forEach(function(t4) {
            return e4(t4, i2);
          });
        }(e3);
      }), u2;
    }
    function k(e2, t2, n2) {
      return F(e2) || t2[e2] || n2[e2] || n2.text;
    }
    function H(e2, t2, n2) {
      return e2 ? e2(t2, n2) : void 0 === t2;
    }
    function W() {
      throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
    }
    var z = null;
    var T = /\[/g, O = /\]/g;
    var M = function(e2) {
      return r({ role: "table" }, e2);
    }, j = function(e2) {
      return r({ role: "rowgroup" }, e2);
    }, L = function(e2, t2) {
      var n2 = t2.column;
      return r({ key: "header_" + n2.id, colSpan: n2.totalVisibleHeaderCount, role: "columnheader" }, e2);
    }, N = function(e2, t2) {
      var n2 = t2.column;
      return r({ key: "footer_" + n2.id, colSpan: n2.totalVisibleHeaderCount }, e2);
    }, D = function(e2, t2) {
      return r({ key: "headerGroup_" + t2.index, role: "row" }, e2);
    }, V = function(e2, t2) {
      return r({ key: "footerGroup_" + t2.index }, e2);
    }, _ = function(e2, t2) {
      return r({ key: "row_" + t2.row.id, role: "row" }, e2);
    }, X = function(e2, t2) {
      var n2 = t2.cell;
      return r({ key: "cell_" + n2.row.id + "_" + n2.column.id, role: "cell" }, e2);
    };
    function q() {
      return { useOptions: [], stateReducers: [], useControlledState: [], columns: [], columnsDeps: [], allColumns: [], allColumnsDeps: [], accessValue: [], materializedColumns: [], materializedColumnsDeps: [], useInstanceAfterData: [], visibleColumns: [], visibleColumnsDeps: [], headerGroups: [], headerGroupsDeps: [], useInstanceBeforeDimensions: [], useInstance: [], prepareRow: [], getTableProps: [M], getTableBodyProps: [j], getHeaderGroupProps: [D], getFooterGroupProps: [V], getHeaderProps: [L], getFooterProps: [N], getRowProps: [_], getCellProps: [X], useFinalInstance: [] };
    }
    l.resetHiddenColumns = "resetHiddenColumns", l.toggleHideColumn = "toggleHideColumn", l.setHiddenColumns = "setHiddenColumns", l.toggleHideAllColumns = "toggleHideAllColumns";
    var K = function(e2) {
      e2.getToggleHiddenProps = [U], e2.getToggleHideAllColumnsProps = [$], e2.stateReducers.push(J), e2.useInstanceBeforeDimensions.push(Y), e2.headerGroupsDeps.push(function(e3, t2) {
        var n2 = t2.instance;
        return [].concat(e3, [n2.state.hiddenColumns]);
      }), e2.useInstance.push(Q);
    };
    K.pluginName = "useColumnVisibility";
    var U = function(e2, t2) {
      var n2 = t2.column;
      return [e2, { onChange: function(e3) {
        n2.toggleHidden(!e3.target.checked);
      }, style: { cursor: "pointer" }, checked: n2.isVisible, title: "Toggle Column Visible" }];
    }, $ = function(e2, t2) {
      var n2 = t2.instance;
      return [e2, { onChange: function(e3) {
        n2.toggleHideAllColumns(!e3.target.checked);
      }, style: { cursor: "pointer" }, checked: !n2.allColumnsHidden && !n2.state.hiddenColumns.length, title: "Toggle All Columns Hidden", indeterminate: !n2.allColumnsHidden && n2.state.hiddenColumns.length }];
    };
    function J(e2, t2, n2, o2) {
      if (t2.type === l.init)
        return r({ hiddenColumns: [] }, e2);
      if (t2.type === l.resetHiddenColumns)
        return r({}, e2, { hiddenColumns: o2.initialState.hiddenColumns || [] });
      if (t2.type === l.toggleHideColumn) {
        var i2 = (void 0 !== t2.value ? t2.value : !e2.hiddenColumns.includes(t2.columnId)) ? [].concat(e2.hiddenColumns, [t2.columnId]) : e2.hiddenColumns.filter(function(e3) {
          return e3 !== t2.columnId;
        });
        return r({}, e2, { hiddenColumns: i2 });
      }
      return t2.type === l.setHiddenColumns ? r({}, e2, { hiddenColumns: m(t2.value, e2.hiddenColumns) }) : t2.type === l.toggleHideAllColumns ? r({}, e2, { hiddenColumns: (void 0 !== t2.value ? t2.value : !e2.hiddenColumns.length) ? o2.allColumns.map(function(e3) {
        return e3.id;
      }) : [] }) : void 0;
    }
    function Y(e2) {
      var n2 = e2.headers, o2 = e2.state.hiddenColumns;
      t.useRef(false).current;
      var r2 = 0;
      n2.forEach(function(e3) {
        return r2 += function e4(t2, n3) {
          t2.isVisible = n3 && !o2.includes(t2.id);
          var r3 = 0;
          return t2.headers && t2.headers.length ? t2.headers.forEach(function(n4) {
            return r3 += e4(n4, t2.isVisible);
          }) : r3 = t2.isVisible ? 1 : 0, t2.totalVisibleHeaderCount = r3, r3;
        }(e3, true);
      });
    }
    function Q(e2) {
      var n2 = e2.columns, o2 = e2.flatHeaders, r2 = e2.dispatch, i2 = e2.allColumns, u2 = e2.getHooks, s2 = e2.state.hiddenColumns, a2 = e2.autoResetHiddenColumns, c2 = void 0 === a2 || a2, d2 = h(e2), p2 = i2.length === s2.length, g2 = t.useCallback(function(e3, t2) {
        return r2({ type: l.toggleHideColumn, columnId: e3, value: t2 });
      }, [r2]), v2 = t.useCallback(function(e3) {
        return r2({ type: l.setHiddenColumns, value: e3 });
      }, [r2]), m2 = t.useCallback(function(e3) {
        return r2({ type: l.toggleHideAllColumns, value: e3 });
      }, [r2]), y2 = f(u2().getToggleHideAllColumnsProps, { instance: d2() });
      o2.forEach(function(e3) {
        e3.toggleHidden = function(t2) {
          r2({ type: l.toggleHideColumn, columnId: e3.id, value: t2 });
        }, e3.getToggleHiddenProps = f(u2().getToggleHiddenProps, { instance: d2(), column: e3 });
      });
      var R2 = h(c2);
      w(function() {
        R2() && r2({ type: l.resetHiddenColumns });
      }, [r2, n2]), Object.assign(e2, { allColumnsHidden: p2, toggleHideColumn: g2, setHiddenColumns: v2, toggleHideAllColumns: m2, getToggleHideAllColumnsProps: y2 });
    }
    var Z = {}, ee = {}, te = function(e2, t2, n2) {
      return e2;
    }, ne = function(e2, t2) {
      return e2.subRows || [];
    }, oe = function(e2, t2, n2) {
      return "" + (n2 ? [n2.id, t2].join(".") : t2);
    }, re = function(e2) {
      return e2;
    };
    function ie(e2) {
      var t2 = e2.initialState, n2 = void 0 === t2 ? Z : t2, o2 = e2.defaultColumn, u2 = void 0 === o2 ? ee : o2, l2 = e2.getSubRows, s2 = void 0 === l2 ? ne : l2, a2 = e2.getRowId, c2 = void 0 === a2 ? oe : a2, d2 = e2.stateReducer, f2 = void 0 === d2 ? te : d2, p2 = e2.useControlledState, g2 = void 0 === p2 ? re : p2;
      return r({}, i(e2, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), { initialState: n2, defaultColumn: u2, getSubRows: s2, getRowId: c2, stateReducer: f2, useControlledState: g2 });
    }
    function ue(e2, t2) {
      void 0 === t2 && (t2 = 0);
      var n2 = 0, o2 = 0, r2 = 0, i2 = 0;
      return e2.forEach(function(e3) {
        var u2 = e3.headers;
        if (e3.totalLeft = t2, u2 && u2.length) {
          var l2 = ue(u2, t2), s2 = l2[0], a2 = l2[1], c2 = l2[2], d2 = l2[3];
          e3.totalMinWidth = s2, e3.totalWidth = a2, e3.totalMaxWidth = c2, e3.totalFlexWidth = d2;
        } else
          e3.totalMinWidth = e3.minWidth, e3.totalWidth = Math.min(Math.max(e3.minWidth, e3.width), e3.maxWidth), e3.totalMaxWidth = e3.maxWidth, e3.totalFlexWidth = e3.canResize ? e3.totalWidth : 0;
        e3.isVisible && (t2 += e3.totalWidth, n2 += e3.totalMinWidth, o2 += e3.totalWidth, r2 += e3.totalMaxWidth, i2 += e3.totalFlexWidth);
      }), [n2, o2, r2, i2];
    }
    function le(e2) {
      var t2 = e2.data, n2 = e2.rows, o2 = e2.flatRows, r2 = e2.rowsById, i2 = e2.column, u2 = e2.getRowId, l2 = e2.getSubRows, s2 = e2.accessValueHooks, a2 = e2.getInstance;
      t2.forEach(function(e3, c2) {
        return function e4(n3, c3, d2, f2, g2) {
          void 0 === d2 && (d2 = 0);
          var v2 = n3, m2 = u2(n3, c3, f2), h2 = r2[m2];
          if (h2)
            h2.subRows && h2.originalSubRows.forEach(function(t3, n4) {
              return e4(t3, n4, d2 + 1, h2);
            });
          else if ((h2 = { id: m2, original: v2, index: c3, depth: d2, cells: [{}] }).cells.map = W, h2.cells.filter = W, h2.cells.forEach = W, h2.cells[0].getCellProps = W, h2.values = {}, g2.push(h2), o2.push(h2), r2[m2] = h2, h2.originalSubRows = l2(n3, c3), h2.originalSubRows) {
            var y2 = [];
            h2.originalSubRows.forEach(function(t3, n4) {
              return e4(t3, n4, d2 + 1, h2, y2);
            }), h2.subRows = y2;
          }
          i2.accessor && (h2.values[i2.id] = i2.accessor(n3, c3, h2, g2, t2)), h2.values[i2.id] = p(s2, h2.values[i2.id], { row: h2, column: i2, instance: a2() });
        }(e3, c2, 0, void 0, n2);
      });
    }
    l.resetExpanded = "resetExpanded", l.toggleRowExpanded = "toggleRowExpanded", l.toggleAllRowsExpanded = "toggleAllRowsExpanded";
    var se = function(e2) {
      e2.getToggleAllRowsExpandedProps = [ae], e2.getToggleRowExpandedProps = [ce], e2.stateReducers.push(de), e2.useInstance.push(fe), e2.prepareRow.push(pe);
    };
    se.pluginName = "useExpanded";
    var ae = function(e2, t2) {
      var n2 = t2.instance;
      return [e2, { onClick: function(e3) {
        n2.toggleAllRowsExpanded();
      }, style: { cursor: "pointer" }, title: "Toggle All Rows Expanded" }];
    }, ce = function(e2, t2) {
      var n2 = t2.row;
      return [e2, { onClick: function() {
        n2.toggleRowExpanded();
      }, style: { cursor: "pointer" }, title: "Toggle Row Expanded" }];
    };
    function de(e2, t2, n2, o2) {
      if (t2.type === l.init)
        return r({ expanded: {} }, e2);
      if (t2.type === l.resetExpanded)
        return r({}, e2, { expanded: o2.initialState.expanded || {} });
      if (t2.type === l.toggleAllRowsExpanded) {
        var s2 = t2.value, a2 = o2.rowsById, c2 = Object.keys(a2).length === Object.keys(e2.expanded).length;
        if (void 0 !== s2 ? s2 : !c2) {
          var d2 = {};
          return Object.keys(a2).forEach(function(e3) {
            d2[e3] = true;
          }), r({}, e2, { expanded: d2 });
        }
        return r({}, e2, { expanded: {} });
      }
      if (t2.type === l.toggleRowExpanded) {
        var f2, p2 = t2.id, g2 = t2.value, v2 = e2.expanded[p2], m2 = void 0 !== g2 ? g2 : !v2;
        if (!v2 && m2)
          return r({}, e2, { expanded: r({}, e2.expanded, (f2 = {}, f2[p2] = true, f2)) });
        if (v2 && !m2) {
          var h2 = e2.expanded;
          h2[p2];
          return r({}, e2, { expanded: i(h2, [p2].map(u)) });
        }
        return e2;
      }
    }
    function fe(e2) {
      var n2 = e2.data, o2 = e2.rows, r2 = e2.rowsById, i2 = e2.manualExpandedKey, u2 = void 0 === i2 ? "expanded" : i2, s2 = e2.paginateExpandedRows, a2 = void 0 === s2 || s2, c2 = e2.expandSubRows, d2 = void 0 === c2 || c2, p2 = e2.autoResetExpanded, g2 = void 0 === p2 || p2, m2 = e2.getHooks, y2 = e2.plugins, R2 = e2.state.expanded, b2 = e2.dispatch;
      v(y2, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
      var S2 = h(g2), C2 = Boolean(Object.keys(r2).length && Object.keys(R2).length);
      C2 && Object.keys(r2).some(function(e3) {
        return !R2[e3];
      }) && (C2 = false), w(function() {
        S2() && b2({ type: l.resetExpanded });
      }, [b2, n2]);
      var x2 = t.useCallback(function(e3, t2) {
        b2({ type: l.toggleRowExpanded, id: e3, value: t2 });
      }, [b2]), P2 = t.useCallback(function(e3) {
        return b2({ type: l.toggleAllRowsExpanded, value: e3 });
      }, [b2]), B2 = t.useMemo(function() {
        return a2 ? A(o2, { manualExpandedKey: u2, expanded: R2, expandSubRows: d2 }) : o2;
      }, [a2, o2, u2, R2, d2]), E2 = t.useMemo(function() {
        return function(e3) {
          var t2 = 0;
          return Object.keys(e3).forEach(function(e4) {
            var n3 = e4.split(".");
            t2 = Math.max(t2, n3.length);
          }), t2;
        }(R2);
      }, [R2]), I2 = h(e2), F2 = f(m2().getToggleAllRowsExpandedProps, { instance: I2() });
      Object.assign(e2, { preExpandedRows: o2, expandedRows: B2, rows: B2, expandedDepth: E2, isAllRowsExpanded: C2, toggleRowExpanded: x2, toggleAllRowsExpanded: P2, getToggleAllRowsExpandedProps: F2 });
    }
    function pe(e2, t2) {
      var n2 = t2.instance.getHooks, o2 = t2.instance;
      e2.toggleRowExpanded = function(t3) {
        return o2.toggleRowExpanded(e2.id, t3);
      }, e2.getToggleRowExpandedProps = f(n2().getToggleRowExpandedProps, { instance: o2, row: e2 });
    }
    var ge = function(e2, t2, n2) {
      return e2 = e2.filter(function(e3) {
        return t2.some(function(t3) {
          var o2 = e3.values[t3];
          return String(o2).toLowerCase().includes(String(n2).toLowerCase());
        });
      });
    };
    ge.autoRemove = function(e2) {
      return !e2;
    };
    var ve = function(e2, t2, n2) {
      return e2.filter(function(e3) {
        return t2.some(function(t3) {
          var o2 = e3.values[t3];
          return void 0 === o2 || String(o2).toLowerCase() === String(n2).toLowerCase();
        });
      });
    };
    ve.autoRemove = function(e2) {
      return !e2;
    };
    var me = function(e2, t2, n2) {
      return e2.filter(function(e3) {
        return t2.some(function(t3) {
          var o2 = e3.values[t3];
          return void 0 === o2 || String(o2) === String(n2);
        });
      });
    };
    me.autoRemove = function(e2) {
      return !e2;
    };
    var he = function(e2, t2, n2) {
      return e2.filter(function(e3) {
        return t2.some(function(t3) {
          return e3.values[t3].includes(n2);
        });
      });
    };
    he.autoRemove = function(e2) {
      return !e2 || !e2.length;
    };
    var ye = function(e2, t2, n2) {
      return e2.filter(function(e3) {
        return t2.some(function(t3) {
          var o2 = e3.values[t3];
          return o2 && o2.length && n2.every(function(e4) {
            return o2.includes(e4);
          });
        });
      });
    };
    ye.autoRemove = function(e2) {
      return !e2 || !e2.length;
    };
    var we = function(e2, t2, n2) {
      return e2.filter(function(e3) {
        return t2.some(function(t3) {
          var o2 = e3.values[t3];
          return o2 && o2.length && n2.some(function(e4) {
            return o2.includes(e4);
          });
        });
      });
    };
    we.autoRemove = function(e2) {
      return !e2 || !e2.length;
    };
    var Re = function(e2, t2, n2) {
      return e2.filter(function(e3) {
        return t2.some(function(t3) {
          var o2 = e3.values[t3];
          return n2.includes(o2);
        });
      });
    };
    Re.autoRemove = function(e2) {
      return !e2 || !e2.length;
    };
    var be = function(e2, t2, n2) {
      return e2.filter(function(e3) {
        return t2.some(function(t3) {
          return e3.values[t3] === n2;
        });
      });
    };
    be.autoRemove = function(e2) {
      return void 0 === e2;
    };
    var Se = function(e2, t2, n2) {
      return e2.filter(function(e3) {
        return t2.some(function(t3) {
          return e3.values[t3] == n2;
        });
      });
    };
    Se.autoRemove = function(e2) {
      return null == e2;
    };
    var Ce = function(e2, t2, n2) {
      var o2 = n2 || [], r2 = o2[0], i2 = o2[1];
      if ((r2 = "number" == typeof r2 ? r2 : -1 / 0) > (i2 = "number" == typeof i2 ? i2 : 1 / 0)) {
        var u2 = r2;
        r2 = i2, i2 = u2;
      }
      return e2.filter(function(e3) {
        return t2.some(function(t3) {
          var n3 = e3.values[t3];
          return n3 >= r2 && n3 <= i2;
        });
      });
    };
    Ce.autoRemove = function(e2) {
      return !e2 || "number" != typeof e2[0] && "number" != typeof e2[1];
    };
    var xe = Object.freeze({ __proto__: null, text: ge, exactText: ve, exactTextCase: me, includes: he, includesAll: ye, includesSome: we, includesValue: Re, exact: be, equals: Se, between: Ce });
    l.resetFilters = "resetFilters", l.setFilter = "setFilter", l.setAllFilters = "setAllFilters";
    var Pe = function(e2) {
      e2.stateReducers.push(Be), e2.useInstance.push(Ee);
    };
    function Be(e2, t2, n2, o2) {
      if (t2.type === l.init)
        return r({ filters: [] }, e2);
      if (t2.type === l.resetFilters)
        return r({}, e2, { filters: o2.initialState.filters || [] });
      if (t2.type === l.setFilter) {
        var i2 = t2.columnId, u2 = t2.filterValue, s2 = o2.allColumns, a2 = o2.filterTypes, c2 = s2.find(function(e3) {
          return e3.id === i2;
        });
        if (!c2)
          throw new Error("React-Table: Could not find a column with id: " + i2);
        var d2 = k(c2.filter, a2 || {}, xe), f2 = e2.filters.find(function(e3) {
          return e3.id === i2;
        }), p2 = m(u2, f2 && f2.value);
        return H(d2.autoRemove, p2, c2) ? r({}, e2, { filters: e2.filters.filter(function(e3) {
          return e3.id !== i2;
        }) }) : r({}, e2, f2 ? { filters: e2.filters.map(function(e3) {
          return e3.id === i2 ? { id: i2, value: p2 } : e3;
        }) } : { filters: [].concat(e2.filters, [{ id: i2, value: p2 }]) });
      }
      if (t2.type === l.setAllFilters) {
        var g2 = t2.filters, v2 = o2.allColumns, h2 = o2.filterTypes;
        return r({}, e2, { filters: m(g2, e2.filters).filter(function(e3) {
          var t3 = v2.find(function(t4) {
            return t4.id === e3.id;
          });
          return !H(k(t3.filter, h2 || {}, xe).autoRemove, e3.value, t3);
        }) });
      }
    }
    function Ee(e2) {
      var n2 = e2.data, o2 = e2.rows, r2 = e2.flatRows, i2 = e2.rowsById, u2 = e2.allColumns, s2 = e2.filterTypes, a2 = e2.manualFilters, c2 = e2.defaultCanFilter, d2 = void 0 !== c2 && c2, f2 = e2.disableFilters, p2 = e2.state.filters, g2 = e2.dispatch, v2 = e2.autoResetFilters, m2 = void 0 === v2 || v2, y2 = t.useCallback(function(e3, t2) {
        g2({ type: l.setFilter, columnId: e3, filterValue: t2 });
      }, [g2]), R2 = t.useCallback(function(e3) {
        g2({ type: l.setAllFilters, filters: e3 });
      }, [g2]);
      u2.forEach(function(e3) {
        var t2 = e3.id, n3 = e3.accessor, o3 = e3.defaultCanFilter, r3 = e3.disableFilters;
        e3.canFilter = n3 ? I(true !== r3 && void 0, true !== f2 && void 0, true) : I(o3, d2, false), e3.setFilter = function(t3) {
          return y2(e3.id, t3);
        };
        var i3 = p2.find(function(e4) {
          return e4.id === t2;
        });
        e3.filterValue = i3 && i3.value;
      });
      var b2 = t.useMemo(function() {
        if (a2 || !p2.length)
          return [o2, r2, i2];
        var e3 = [], t2 = {};
        return [function n3(o3, r3) {
          void 0 === r3 && (r3 = 0);
          var i3 = o3;
          return (i3 = p2.reduce(function(e4, t3) {
            var n4 = t3.id, o4 = t3.value, i4 = u2.find(function(e5) {
              return e5.id === n4;
            });
            if (!i4)
              return e4;
            0 === r3 && (i4.preFilteredRows = e4);
            var l2 = k(i4.filter, s2 || {}, xe);
            return l2 ? (i4.filteredRows = l2(e4, [n4], o4), i4.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + i4.id + "."), e4);
          }, o3)).forEach(function(o4) {
            e3.push(o4), t2[o4.id] = o4, o4.subRows && (o4.subRows = o4.subRows && o4.subRows.length > 0 ? n3(o4.subRows, r3 + 1) : o4.subRows);
          }), i3;
        }(o2), e3, t2];
      }, [a2, p2, o2, r2, i2, u2, s2]), S2 = b2[0], C2 = b2[1], x2 = b2[2];
      t.useMemo(function() {
        u2.filter(function(e3) {
          return !p2.find(function(t2) {
            return t2.id === e3.id;
          });
        }).forEach(function(e3) {
          e3.preFilteredRows = S2, e3.filteredRows = S2;
        });
      }, [S2, p2, u2]);
      var P2 = h(m2);
      w(function() {
        P2() && g2({ type: l.resetFilters });
      }, [g2, a2 ? null : n2]), Object.assign(e2, { preFilteredRows: o2, preFilteredFlatRows: r2, preFilteredRowsById: i2, filteredRows: S2, filteredFlatRows: C2, filteredRowsById: x2, rows: S2, flatRows: C2, rowsById: x2, setFilter: y2, setAllFilters: R2 });
    }
    Pe.pluginName = "useFilters", l.resetGlobalFilter = "resetGlobalFilter", l.setGlobalFilter = "setGlobalFilter";
    var Ie = function(e2) {
      e2.stateReducers.push(Fe), e2.useInstance.push(Ge);
    };
    function Fe(e2, t2, n2, o2) {
      if (t2.type === l.resetGlobalFilter)
        return r({}, e2, { globalFilter: o2.initialState.globalFilter || void 0 });
      if (t2.type === l.setGlobalFilter) {
        var u2 = t2.filterValue, s2 = o2.userFilterTypes, a2 = k(o2.globalFilter, s2 || {}, xe), c2 = m(u2, e2.globalFilter);
        if (H(a2.autoRemove, c2)) {
          e2.globalFilter;
          return i(e2, ["globalFilter"]);
        }
        return r({}, e2, { globalFilter: c2 });
      }
    }
    function Ge(e2) {
      var n2 = e2.data, o2 = e2.rows, r2 = e2.flatRows, i2 = e2.rowsById, u2 = e2.allColumns, s2 = e2.filterTypes, a2 = e2.globalFilter, c2 = e2.manualGlobalFilter, d2 = e2.state.globalFilter, f2 = e2.dispatch, p2 = e2.autoResetGlobalFilter, g2 = void 0 === p2 || p2, v2 = e2.disableGlobalFilter, m2 = t.useCallback(function(e3) {
        f2({ type: l.setGlobalFilter, filterValue: e3 });
      }, [f2]), y2 = t.useMemo(function() {
        if (c2 || void 0 === d2)
          return [o2, r2, i2];
        var e3 = [], t2 = {}, n3 = k(a2, s2 || {}, xe);
        if (!n3)
          return console.warn("Could not find a valid 'globalFilter' option."), o2;
        u2.forEach(function(e4) {
          var t3 = e4.disableGlobalFilter;
          e4.canFilter = I(true !== t3 && void 0, true !== v2 && void 0, true);
        });
        var l2 = u2.filter(function(e4) {
          return true === e4.canFilter;
        });
        return [function o3(r3) {
          return (r3 = n3(r3, l2.map(function(e4) {
            return e4.id;
          }), d2)).forEach(function(n4) {
            e3.push(n4), t2[n4.id] = n4, n4.subRows = n4.subRows && n4.subRows.length ? o3(n4.subRows) : n4.subRows;
          }), r3;
        }(o2), e3, t2];
      }, [c2, d2, a2, s2, u2, o2, r2, i2, v2]), R2 = y2[0], b2 = y2[1], S2 = y2[2], C2 = h(g2);
      w(function() {
        C2() && f2({ type: l.resetGlobalFilter });
      }, [f2, c2 ? null : n2]), Object.assign(e2, { preGlobalFilteredRows: o2, preGlobalFilteredFlatRows: r2, preGlobalFilteredRowsById: i2, globalFilteredRows: R2, globalFilteredFlatRows: b2, globalFilteredRowsById: S2, rows: R2, flatRows: b2, rowsById: S2, setGlobalFilter: m2, disableGlobalFilter: v2 });
    }
    function Ae(e2, t2) {
      return t2.reduce(function(e3, t3) {
        return e3 + ("number" == typeof t3 ? t3 : 0);
      }, 0);
    }
    Ie.pluginName = "useGlobalFilter";
    var ke = Object.freeze({ __proto__: null, sum: Ae, min: function(e2) {
      var t2 = e2[0] || 0;
      return e2.forEach(function(e3) {
        "number" == typeof e3 && (t2 = Math.min(t2, e3));
      }), t2;
    }, max: function(e2) {
      var t2 = e2[0] || 0;
      return e2.forEach(function(e3) {
        "number" == typeof e3 && (t2 = Math.max(t2, e3));
      }), t2;
    }, minMax: function(e2) {
      var t2 = e2[0] || 0, n2 = e2[0] || 0;
      return e2.forEach(function(e3) {
        "number" == typeof e3 && (t2 = Math.min(t2, e3), n2 = Math.max(n2, e3));
      }), t2 + ".." + n2;
    }, average: function(e2) {
      return Ae(0, e2) / e2.length;
    }, median: function(e2) {
      if (!e2.length)
        return null;
      var t2 = Math.floor(e2.length / 2), n2 = [].concat(e2).sort(function(e3, t3) {
        return e3 - t3;
      });
      return e2.length % 2 != 0 ? n2[t2] : (n2[t2 - 1] + n2[t2]) / 2;
    }, unique: function(e2) {
      return Array.from(new Set(e2).values());
    }, uniqueCount: function(e2) {
      return new Set(e2).size;
    }, count: function(e2) {
      return e2.length;
    } }), He = [], We = {};
    l.resetGroupBy = "resetGroupBy", l.setGroupBy = "setGroupBy", l.toggleGroupBy = "toggleGroupBy";
    var ze = function(e2) {
      e2.getGroupByToggleProps = [Te], e2.stateReducers.push(Oe), e2.visibleColumnsDeps.push(function(e3, t2) {
        var n2 = t2.instance;
        return [].concat(e3, [n2.state.groupBy]);
      }), e2.visibleColumns.push(Me), e2.useInstance.push(Le), e2.prepareRow.push(Ne);
    };
    ze.pluginName = "useGroupBy";
    var Te = function(e2, t2) {
      var n2 = t2.header;
      return [e2, { onClick: n2.canGroupBy ? function(e3) {
        e3.persist(), n2.toggleGroupBy();
      } : void 0, style: { cursor: n2.canGroupBy ? "pointer" : void 0 }, title: "Toggle GroupBy" }];
    };
    function Oe(e2, t2, n2, o2) {
      if (t2.type === l.init)
        return r({ groupBy: [] }, e2);
      if (t2.type === l.resetGroupBy)
        return r({}, e2, { groupBy: o2.initialState.groupBy || [] });
      if (t2.type === l.setGroupBy)
        return r({}, e2, { groupBy: t2.value });
      if (t2.type === l.toggleGroupBy) {
        var i2 = t2.columnId, u2 = t2.value, s2 = void 0 !== u2 ? u2 : !e2.groupBy.includes(i2);
        return r({}, e2, s2 ? { groupBy: [].concat(e2.groupBy, [i2]) } : { groupBy: e2.groupBy.filter(function(e3) {
          return e3 !== i2;
        }) });
      }
    }
    function Me(e2, t2) {
      var n2 = t2.instance.state.groupBy, o2 = n2.map(function(t3) {
        return e2.find(function(e3) {
          return e3.id === t3;
        });
      }).filter(Boolean), r2 = e2.filter(function(e3) {
        return !n2.includes(e3.id);
      });
      return (e2 = [].concat(o2, r2)).forEach(function(e3) {
        e3.isGrouped = n2.includes(e3.id), e3.groupedIndex = n2.indexOf(e3.id);
      }), e2;
    }
    var je = {};
    function Le(e2) {
      var n2 = e2.data, o2 = e2.rows, i2 = e2.flatRows, u2 = e2.rowsById, s2 = e2.allColumns, a2 = e2.flatHeaders, c2 = e2.groupByFn, d2 = void 0 === c2 ? De : c2, p2 = e2.manualGroupBy, g2 = e2.aggregations, m2 = void 0 === g2 ? je : g2, y2 = e2.plugins, R2 = e2.state.groupBy, b2 = e2.dispatch, S2 = e2.autoResetGroupBy, C2 = void 0 === S2 || S2, x2 = e2.disableGroupBy, P2 = e2.defaultCanGroupBy, B2 = e2.getHooks;
      v(y2, ["useColumnOrder", "useFilters"], "useGroupBy");
      var E2 = h(e2);
      s2.forEach(function(t2) {
        var n3 = t2.accessor, o3 = t2.defaultGroupBy, r2 = t2.disableGroupBy;
        t2.canGroupBy = n3 ? I(t2.canGroupBy, true !== r2 && void 0, true !== x2 && void 0, true) : I(t2.canGroupBy, o3, P2, false), t2.canGroupBy && (t2.toggleGroupBy = function() {
          return e2.toggleGroupBy(t2.id);
        }), t2.Aggregated = t2.Aggregated || t2.Cell;
      });
      var F2 = t.useCallback(function(e3, t2) {
        b2({ type: l.toggleGroupBy, columnId: e3, value: t2 });
      }, [b2]), A2 = t.useCallback(function(e3) {
        b2({ type: l.setGroupBy, value: e3 });
      }, [b2]);
      a2.forEach(function(e3) {
        e3.getGroupByToggleProps = f(B2().getGroupByToggleProps, { instance: E2(), header: e3 });
      });
      var k2 = t.useMemo(function() {
        if (p2 || !R2.length)
          return [o2, i2, u2, He, We, i2, u2];
        var e3 = R2.filter(function(e4) {
          return s2.find(function(t3) {
            return t3.id === e4;
          });
        }), t2 = [], n3 = {}, l2 = [], a3 = {}, c3 = [], f2 = {}, g3 = function o3(i3, u3, p3) {
          if (void 0 === u3 && (u3 = 0), u3 === e3.length)
            return i3.map(function(e4) {
              return r({}, e4, { depth: u3 });
            });
          var g4 = e3[u3], v2 = d2(i3, g4);
          return Object.entries(v2).map(function(r2, i4) {
            var d3 = r2[0], v3 = r2[1], h2 = g4 + ":" + d3, y3 = o3(v3, u3 + 1, h2 = p3 ? p3 + ">" + h2 : h2), w2 = u3 ? G(v3, "leafRows") : v3, R3 = function(t3, n4, o4) {
              var r3 = {};
              return s2.forEach(function(i5) {
                if (e3.includes(i5.id))
                  r3[i5.id] = n4[0] ? n4[0].values[i5.id] : null;
                else {
                  var u4 = "function" == typeof i5.aggregate ? i5.aggregate : m2[i5.aggregate] || ke[i5.aggregate];
                  if (u4) {
                    var l3 = n4.map(function(e4) {
                      return e4.values[i5.id];
                    }), s3 = t3.map(function(e4) {
                      var t4 = e4.values[i5.id];
                      if (!o4 && i5.aggregateValue) {
                        var n5 = "function" == typeof i5.aggregateValue ? i5.aggregateValue : m2[i5.aggregateValue] || ke[i5.aggregateValue];
                        if (!n5)
                          throw console.info({ column: i5 }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                        t4 = n5(t4, e4, i5);
                      }
                      return t4;
                    });
                    r3[i5.id] = u4(s3, l3);
                  } else {
                    if (i5.aggregate)
                      throw console.info({ column: i5 }), new Error("React Table: Invalid column.aggregate option for column listed above");
                    r3[i5.id] = null;
                  }
                }
              }), r3;
            }(w2, v3, u3), b3 = { id: h2, isGrouped: true, groupByID: g4, groupByVal: d3, values: R3, subRows: y3, leafRows: w2, depth: u3, index: i4 };
            return y3.forEach(function(e4) {
              t2.push(e4), n3[e4.id] = e4, e4.isGrouped ? (l2.push(e4), a3[e4.id] = e4) : (c3.push(e4), f2[e4.id] = e4);
            }), b3;
          });
        }(o2);
        return g3.forEach(function(e4) {
          t2.push(e4), n3[e4.id] = e4, e4.isGrouped ? (l2.push(e4), a3[e4.id] = e4) : (c3.push(e4), f2[e4.id] = e4);
        }), [g3, t2, n3, l2, a3, c3, f2];
      }, [p2, R2, o2, i2, u2, s2, m2, d2]), H2 = k2[0], W2 = k2[1], z2 = k2[2], T2 = k2[3], O2 = k2[4], M2 = k2[5], j2 = k2[6], L2 = h(C2);
      w(function() {
        L2() && b2({ type: l.resetGroupBy });
      }, [b2, p2 ? null : n2]), Object.assign(e2, { preGroupedRows: o2, preGroupedFlatRow: i2, preGroupedRowsById: u2, groupedRows: H2, groupedFlatRows: W2, groupedRowsById: z2, onlyGroupedFlatRows: T2, onlyGroupedRowsById: O2, nonGroupedFlatRows: M2, nonGroupedRowsById: j2, rows: H2, flatRows: W2, rowsById: z2, toggleGroupBy: F2, setGroupBy: A2 });
    }
    function Ne(e2) {
      e2.allCells.forEach(function(t2) {
        var n2;
        t2.isGrouped = t2.column.isGrouped && t2.column.id === e2.groupByID, t2.isPlaceholder = !t2.isGrouped && t2.column.isGrouped, t2.isAggregated = !t2.isGrouped && !t2.isPlaceholder && (null == (n2 = e2.subRows) ? void 0 : n2.length);
      });
    }
    function De(e2, t2) {
      return e2.reduce(function(e3, n2, o2) {
        var r2 = "" + n2.values[t2];
        return e3[r2] = Array.isArray(e3[r2]) ? e3[r2] : [], e3[r2].push(n2), e3;
      }, {});
    }
    var Ve = /([0-9]+)/gm;
    function _e(e2, t2) {
      return e2 === t2 ? 0 : e2 > t2 ? 1 : -1;
    }
    function Xe(e2, t2, n2) {
      return [e2.values[n2], t2.values[n2]];
    }
    function qe(e2) {
      return "number" == typeof e2 ? isNaN(e2) || e2 === 1 / 0 || e2 === -1 / 0 ? "" : String(e2) : "string" == typeof e2 ? e2 : "";
    }
    var Ke = Object.freeze({ __proto__: null, alphanumeric: function(e2, t2, n2) {
      var o2 = Xe(e2, t2, n2), r2 = o2[0], i2 = o2[1];
      for (r2 = qe(r2), i2 = qe(i2), r2 = r2.split(Ve).filter(Boolean), i2 = i2.split(Ve).filter(Boolean); r2.length && i2.length; ) {
        var u2 = r2.shift(), l2 = i2.shift(), s2 = parseInt(u2, 10), a2 = parseInt(l2, 10), c2 = [s2, a2].sort();
        if (isNaN(c2[0])) {
          if (u2 > l2)
            return 1;
          if (l2 > u2)
            return -1;
        } else {
          if (isNaN(c2[1]))
            return isNaN(s2) ? -1 : 1;
          if (s2 > a2)
            return 1;
          if (a2 > s2)
            return -1;
        }
      }
      return r2.length - i2.length;
    }, datetime: function(e2, t2, n2) {
      var o2 = Xe(e2, t2, n2), r2 = o2[0], i2 = o2[1];
      return _e(r2 = r2.getTime(), i2 = i2.getTime());
    }, basic: function(e2, t2, n2) {
      var o2 = Xe(e2, t2, n2);
      return _e(o2[0], o2[1]);
    }, string: function(e2, t2, n2) {
      var o2 = Xe(e2, t2, n2), r2 = o2[0], i2 = o2[1];
      for (r2 = r2.split("").filter(Boolean), i2 = i2.split("").filter(Boolean); r2.length && i2.length; ) {
        var u2 = r2.shift(), l2 = i2.shift(), s2 = u2.toLowerCase(), a2 = l2.toLowerCase();
        if (s2 > a2)
          return 1;
        if (a2 > s2)
          return -1;
        if (u2 > l2)
          return 1;
        if (l2 > u2)
          return -1;
      }
      return r2.length - i2.length;
    }, number: function(e2, t2, n2) {
      var o2 = Xe(e2, t2, n2), r2 = o2[0], i2 = o2[1], u2 = /[^0-9.]/gi;
      return _e(r2 = Number(String(r2).replace(u2, "")), i2 = Number(String(i2).replace(u2, "")));
    } });
    l.resetSortBy = "resetSortBy", l.setSortBy = "setSortBy", l.toggleSortBy = "toggleSortBy", l.clearSortBy = "clearSortBy", c.sortType = "alphanumeric", c.sortDescFirst = false;
    var Ue = function(e2) {
      e2.getSortByToggleProps = [$e], e2.stateReducers.push(Je), e2.useInstance.push(Ye);
    };
    Ue.pluginName = "useSortBy";
    var $e = function(e2, t2) {
      var n2 = t2.instance, o2 = t2.column, r2 = n2.isMultiSortEvent, i2 = void 0 === r2 ? function(e3) {
        return e3.shiftKey;
      } : r2;
      return [e2, { onClick: o2.canSort ? function(e3) {
        e3.persist(), o2.toggleSortBy(void 0, !n2.disableMultiSort && i2(e3));
      } : void 0, style: { cursor: o2.canSort ? "pointer" : void 0 }, title: o2.canSort ? "Toggle SortBy" : void 0 }];
    };
    function Je(e2, t2, n2, o2) {
      if (t2.type === l.init)
        return r({ sortBy: [] }, e2);
      if (t2.type === l.resetSortBy)
        return r({}, e2, { sortBy: o2.initialState.sortBy || [] });
      if (t2.type === l.clearSortBy)
        return r({}, e2, { sortBy: e2.sortBy.filter(function(e3) {
          return e3.id !== t2.columnId;
        }) });
      if (t2.type === l.setSortBy)
        return r({}, e2, { sortBy: t2.sortBy });
      if (t2.type === l.toggleSortBy) {
        var i2, u2 = t2.columnId, s2 = t2.desc, a2 = t2.multi, c2 = o2.allColumns, d2 = o2.disableMultiSort, f2 = o2.disableSortRemove, p2 = o2.disableMultiRemove, g2 = o2.maxMultiSortColCount, v2 = void 0 === g2 ? Number.MAX_SAFE_INTEGER : g2, m2 = e2.sortBy, h2 = c2.find(function(e3) {
          return e3.id === u2;
        }).sortDescFirst, y2 = m2.find(function(e3) {
          return e3.id === u2;
        }), w2 = m2.findIndex(function(e3) {
          return e3.id === u2;
        }), R2 = null != s2, b2 = [];
        return "toggle" !== (i2 = !d2 && a2 ? y2 ? "toggle" : "add" : w2 !== m2.length - 1 || 1 !== m2.length ? "replace" : y2 ? "toggle" : "replace") || f2 || R2 || a2 && p2 || !(y2 && y2.desc && !h2 || !y2.desc && h2) || (i2 = "remove"), "replace" === i2 ? b2 = [{ id: u2, desc: R2 ? s2 : h2 }] : "add" === i2 ? (b2 = [].concat(m2, [{ id: u2, desc: R2 ? s2 : h2 }])).splice(0, b2.length - v2) : "toggle" === i2 ? b2 = m2.map(function(e3) {
          return e3.id === u2 ? r({}, e3, { desc: R2 ? s2 : !y2.desc }) : e3;
        }) : "remove" === i2 && (b2 = m2.filter(function(e3) {
          return e3.id !== u2;
        })), r({}, e2, { sortBy: b2 });
      }
    }
    function Ye(e2) {
      var n2 = e2.data, o2 = e2.rows, r2 = e2.flatRows, i2 = e2.allColumns, u2 = e2.orderByFn, s2 = void 0 === u2 ? Qe : u2, a2 = e2.sortTypes, c2 = e2.manualSortBy, d2 = e2.defaultCanSort, p2 = e2.disableSortBy, g2 = e2.flatHeaders, m2 = e2.state.sortBy, y2 = e2.dispatch, R2 = e2.plugins, b2 = e2.getHooks, S2 = e2.autoResetSortBy, C2 = void 0 === S2 || S2;
      v(R2, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
      var x2 = t.useCallback(function(e3) {
        y2({ type: l.setSortBy, sortBy: e3 });
      }, [y2]), P2 = t.useCallback(function(e3, t2, n3) {
        y2({ type: l.toggleSortBy, columnId: e3, desc: t2, multi: n3 });
      }, [y2]), B2 = h(e2);
      g2.forEach(function(e3) {
        var t2 = e3.accessor, n3 = e3.canSort, o3 = e3.disableSortBy, r3 = e3.id, i3 = t2 ? I(true !== o3 && void 0, true !== p2 && void 0, true) : I(d2, n3, false);
        e3.canSort = i3, e3.canSort && (e3.toggleSortBy = function(t3, n4) {
          return P2(e3.id, t3, n4);
        }, e3.clearSortBy = function() {
          y2({ type: l.clearSortBy, columnId: e3.id });
        }), e3.getSortByToggleProps = f(b2().getSortByToggleProps, { instance: B2(), column: e3 });
        var u3 = m2.find(function(e4) {
          return e4.id === r3;
        });
        e3.isSorted = !!u3, e3.sortedIndex = m2.findIndex(function(e4) {
          return e4.id === r3;
        }), e3.isSortedDesc = e3.isSorted ? u3.desc : void 0;
      });
      var E2 = t.useMemo(function() {
        if (c2 || !m2.length)
          return [o2, r2];
        var e3 = [], t2 = m2.filter(function(e4) {
          return i2.find(function(t3) {
            return t3.id === e4.id;
          });
        });
        return [function n3(o3) {
          var r3 = s2(o3, t2.map(function(e4) {
            var t3 = i2.find(function(t4) {
              return t4.id === e4.id;
            });
            if (!t3)
              throw new Error("React-Table: Could not find a column with id: " + e4.id + " while sorting");
            var n4 = t3.sortType, o4 = F(n4) || (a2 || {})[n4] || Ke[n4];
            if (!o4)
              throw new Error("React-Table: Could not find a valid sortType of '" + n4 + "' for column '" + e4.id + "'.");
            return function(t4, n5) {
              return o4(t4, n5, e4.id, e4.desc);
            };
          }), t2.map(function(e4) {
            var t3 = i2.find(function(t4) {
              return t4.id === e4.id;
            });
            return t3 && t3.sortInverted ? e4.desc : !e4.desc;
          }));
          return r3.forEach(function(t3) {
            e3.push(t3), t3.subRows && 0 !== t3.subRows.length && (t3.subRows = n3(t3.subRows));
          }), r3;
        }(o2), e3];
      }, [c2, m2, o2, r2, i2, s2, a2]), G2 = E2[0], A2 = E2[1], k2 = h(C2);
      w(function() {
        k2() && y2({ type: l.resetSortBy });
      }, [c2 ? null : n2]), Object.assign(e2, { preSortedRows: o2, preSortedFlatRows: r2, sortedRows: G2, sortedFlatRows: A2, rows: G2, flatRows: A2, setSortBy: x2, toggleSortBy: P2 });
    }
    function Qe(e2, t2, n2) {
      return [].concat(e2).sort(function(e3, o2) {
        for (var r2 = 0; r2 < t2.length; r2 += 1) {
          var i2 = t2[r2], u2 = false === n2[r2] || "desc" === n2[r2], l2 = i2(e3, o2);
          if (0 !== l2)
            return u2 ? -l2 : l2;
        }
        return n2[0] ? e3.index - o2.index : o2.index - e3.index;
      });
    }
    l.resetPage = "resetPage", l.gotoPage = "gotoPage", l.setPageSize = "setPageSize";
    var Ze = function(e2) {
      e2.stateReducers.push(et), e2.useInstance.push(tt);
    };
    function et(e2, t2, n2, o2) {
      if (t2.type === l.init)
        return r({ pageSize: 10, pageIndex: 0 }, e2);
      if (t2.type === l.resetPage)
        return r({}, e2, { pageIndex: o2.initialState.pageIndex || 0 });
      if (t2.type === l.gotoPage) {
        var i2 = o2.pageCount, u2 = o2.page, s2 = m(t2.pageIndex, e2.pageIndex), a2 = false;
        return s2 > e2.pageIndex ? a2 = -1 === i2 ? u2.length >= e2.pageSize : s2 < i2 : s2 < e2.pageIndex && (a2 = s2 > -1), a2 ? r({}, e2, { pageIndex: s2 }) : e2;
      }
      if (t2.type === l.setPageSize) {
        var c2 = t2.pageSize, d2 = e2.pageSize * e2.pageIndex;
        return r({}, e2, { pageIndex: Math.floor(d2 / c2), pageSize: c2 });
      }
    }
    function tt(e2) {
      var n2 = e2.rows, o2 = e2.autoResetPage, r2 = void 0 === o2 || o2, i2 = e2.manualExpandedKey, u2 = void 0 === i2 ? "expanded" : i2, s2 = e2.plugins, a2 = e2.pageCount, c2 = e2.paginateExpandedRows, d2 = void 0 === c2 || c2, f2 = e2.expandSubRows, p2 = void 0 === f2 || f2, g2 = e2.state, m2 = g2.pageSize, y2 = g2.pageIndex, R2 = g2.expanded, b2 = g2.globalFilter, S2 = g2.filters, C2 = g2.groupBy, x2 = g2.sortBy, P2 = e2.dispatch, B2 = e2.data, E2 = e2.manualPagination;
      v(s2, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
      var I2 = h(r2);
      w(function() {
        I2() && P2({ type: l.resetPage });
      }, [P2, E2 ? null : B2, b2, S2, C2, x2]);
      var F2 = E2 ? a2 : Math.ceil(n2.length / m2), G2 = t.useMemo(function() {
        return F2 > 0 ? [].concat(new Array(F2)).fill(null).map(function(e3, t2) {
          return t2;
        }) : [];
      }, [F2]), k2 = t.useMemo(function() {
        var e3;
        if (E2)
          e3 = n2;
        else {
          var t2 = m2 * y2, o3 = t2 + m2;
          e3 = n2.slice(t2, o3);
        }
        return d2 ? e3 : A(e3, { manualExpandedKey: u2, expanded: R2, expandSubRows: p2 });
      }, [p2, R2, u2, E2, y2, m2, d2, n2]), H2 = y2 > 0, W2 = -1 === F2 ? k2.length >= m2 : y2 < F2 - 1, z2 = t.useCallback(function(e3) {
        P2({ type: l.gotoPage, pageIndex: e3 });
      }, [P2]), T2 = t.useCallback(function() {
        return z2(function(e3) {
          return e3 - 1;
        });
      }, [z2]), O2 = t.useCallback(function() {
        return z2(function(e3) {
          return e3 + 1;
        });
      }, [z2]), M2 = t.useCallback(function(e3) {
        P2({ type: l.setPageSize, pageSize: e3 });
      }, [P2]);
      Object.assign(e2, { pageOptions: G2, pageCount: F2, page: k2, canPreviousPage: H2, canNextPage: W2, gotoPage: z2, previousPage: T2, nextPage: O2, setPageSize: M2 });
    }
    Ze.pluginName = "usePagination", l.resetPivot = "resetPivot", l.togglePivot = "togglePivot";
    var nt = function(e2) {
      e2.getPivotToggleProps = [rt], e2.stateReducers.push(it), e2.useInstanceAfterData.push(ut), e2.allColumns.push(lt), e2.accessValue.push(st), e2.materializedColumns.push(at), e2.materializedColumnsDeps.push(ct), e2.visibleColumns.push(dt), e2.visibleColumnsDeps.push(ft), e2.useInstance.push(pt), e2.prepareRow.push(gt);
    };
    nt.pluginName = "usePivotColumns";
    var ot = [], rt = function(e2, t2) {
      var n2 = t2.header;
      return [e2, { onClick: n2.canPivot ? function(e3) {
        e3.persist(), n2.togglePivot();
      } : void 0, style: { cursor: n2.canPivot ? "pointer" : void 0 }, title: "Toggle Pivot" }];
    };
    function it(e2, t2, n2, o2) {
      if (t2.type === l.init)
        return r({ pivotColumns: ot }, e2);
      if (t2.type === l.resetPivot)
        return r({}, e2, { pivotColumns: o2.initialState.pivotColumns || ot });
      if (t2.type === l.togglePivot) {
        var i2 = t2.columnId, u2 = t2.value, s2 = void 0 !== u2 ? u2 : !e2.pivotColumns.includes(i2);
        return r({}, e2, s2 ? { pivotColumns: [].concat(e2.pivotColumns, [i2]) } : { pivotColumns: e2.pivotColumns.filter(function(e3) {
          return e3 !== i2;
        }) });
      }
    }
    function ut(e2) {
      e2.allColumns.forEach(function(t2) {
        t2.isPivotSource = e2.state.pivotColumns.includes(t2.id);
      });
    }
    function lt(e2, t2) {
      var n2 = t2.instance;
      return e2.forEach(function(e3) {
        e3.isPivotSource = n2.state.pivotColumns.includes(e3.id), e3.uniqueValues = /* @__PURE__ */ new Set();
      }), e2;
    }
    function st(e2, t2) {
      var n2 = t2.column;
      return n2.uniqueValues && void 0 !== e2 && n2.uniqueValues.add(e2), e2;
    }
    function at(e2, t2) {
      var n2 = t2.instance, o2 = n2.allColumns, i2 = n2.state;
      if (!i2.pivotColumns.length || !i2.groupBy || !i2.groupBy.length)
        return e2;
      var u2 = i2.pivotColumns.map(function(e3) {
        return o2.find(function(t3) {
          return t3.id === e3;
        });
      }).filter(Boolean), l2 = o2.filter(function(e3) {
        return !e3.isPivotSource && !i2.groupBy.includes(e3.id) && !i2.pivotColumns.includes(e3.id);
      }), s2 = C(function e3(t3, n3, o3) {
        void 0 === t3 && (t3 = 0), void 0 === o3 && (o3 = []);
        var i3 = u2[t3];
        return i3 ? Array.from(i3.uniqueValues).sort().map(function(u3) {
          var l3 = r({}, i3, { Header: i3.PivotHeader || "string" == typeof i3.header ? i3.Header + ": " + u3 : u3, isPivotGroup: true, parent: n3, depth: t3, id: n3 ? n3.id + "." + i3.id + "." + u3 : i3.id + "." + u3, pivotValue: u3 });
          return l3.columns = e3(t3 + 1, l3, [].concat(o3, [function(e4) {
            return e4.values[i3.id] === u3;
          }])), l3;
        }) : l2.map(function(e4) {
          return r({}, e4, { canPivot: false, isPivoted: true, parent: n3, depth: t3, id: "" + (n3 ? n3.id + "." + e4.id : e4.id), accessor: function(t4, n4, r2) {
            if (o3.every(function(e5) {
              return e5(r2);
            }))
              return r2.values[e4.id];
          } });
        });
      }());
      return [].concat(e2, s2);
    }
    function ct(e2, t2) {
      var n2 = t2.instance.state, o2 = n2.pivotColumns, r2 = n2.groupBy;
      return [].concat(e2, [o2, r2]);
    }
    function dt(e2, t2) {
      var n2 = t2.instance.state;
      return e2 = e2.filter(function(e3) {
        return !e3.isPivotSource;
      }), n2.pivotColumns.length && n2.groupBy && n2.groupBy.length && (e2 = e2.filter(function(e3) {
        return e3.isGrouped || e3.isPivoted;
      })), e2;
    }
    function ft(e2, t2) {
      var n2 = t2.instance;
      return [].concat(e2, [n2.state.pivotColumns, n2.state.groupBy]);
    }
    function pt(e2) {
      var t2 = e2.columns, n2 = e2.allColumns, o2 = e2.flatHeaders, r2 = e2.getHooks, i2 = e2.plugins, u2 = e2.dispatch, s2 = e2.autoResetPivot, a2 = void 0 === s2 || s2, c2 = e2.manaulPivot, d2 = e2.disablePivot, p2 = e2.defaultCanPivot;
      v(i2, ["useGroupBy"], "usePivotColumns");
      var g2 = h(e2);
      n2.forEach(function(t3) {
        var n3 = t3.accessor, o3 = t3.defaultPivot, r3 = t3.disablePivot;
        t3.canPivot = n3 ? I(t3.canPivot, true !== r3 && void 0, true !== d2 && void 0, true) : I(t3.canPivot, o3, p2, false), t3.canPivot && (t3.togglePivot = function() {
          return e2.togglePivot(t3.id);
        }), t3.Aggregated = t3.Aggregated || t3.Cell;
      });
      o2.forEach(function(e3) {
        e3.getPivotToggleProps = f(r2().getPivotToggleProps, { instance: g2(), header: e3 });
      });
      var m2 = h(a2);
      w(function() {
        m2() && u2({ type: l.resetPivot });
      }, [u2, c2 ? null : t2]), Object.assign(e2, { togglePivot: function(e3, t3) {
        u2({ type: l.togglePivot, columnId: e3, value: t3 });
      } });
    }
    function gt(e2) {
      e2.allCells.forEach(function(e3) {
        e3.isPivoted = e3.column.isPivoted;
      });
    }
    l.resetSelectedRows = "resetSelectedRows", l.toggleAllRowsSelected = "toggleAllRowsSelected", l.toggleRowSelected = "toggleRowSelected", l.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
    var vt = function(e2) {
      e2.getToggleRowSelectedProps = [mt], e2.getToggleAllRowsSelectedProps = [ht], e2.getToggleAllPageRowsSelectedProps = [yt], e2.stateReducers.push(wt), e2.useInstance.push(Rt), e2.prepareRow.push(bt);
    };
    vt.pluginName = "useRowSelect";
    var mt = function(e2, t2) {
      var n2 = t2.instance, o2 = t2.row, r2 = n2.manualRowSelectedKey, i2 = void 0 === r2 ? "isSelected" : r2;
      return [e2, { onChange: function(e3) {
        o2.toggleRowSelected(e3.target.checked);
      }, style: { cursor: "pointer" }, checked: !(!o2.original || !o2.original[i2]) || o2.isSelected, title: "Toggle Row Selected", indeterminate: o2.isSomeSelected }];
    }, ht = function(e2, t2) {
      var n2 = t2.instance;
      return [e2, { onChange: function(e3) {
        n2.toggleAllRowsSelected(e3.target.checked);
      }, style: { cursor: "pointer" }, checked: n2.isAllRowsSelected, title: "Toggle All Rows Selected", indeterminate: Boolean(!n2.isAllRowsSelected && Object.keys(n2.state.selectedRowIds).length) }];
    }, yt = function(e2, t2) {
      var n2 = t2.instance;
      return [e2, { onChange: function(e3) {
        n2.toggleAllPageRowsSelected(e3.target.checked);
      }, style: { cursor: "pointer" }, checked: n2.isAllPageRowsSelected, title: "Toggle All Current Page Rows Selected", indeterminate: Boolean(!n2.isAllPageRowsSelected && n2.page.some(function(e3) {
        var t3 = e3.id;
        return n2.state.selectedRowIds[t3];
      })) }];
    };
    function wt(e2, t2, n2, o2) {
      if (t2.type === l.init)
        return r({ selectedRowIds: {} }, e2);
      if (t2.type === l.resetSelectedRows)
        return r({}, e2, { selectedRowIds: o2.initialState.selectedRowIds || {} });
      if (t2.type === l.toggleAllRowsSelected) {
        var i2 = t2.value, u2 = o2.isAllRowsSelected, s2 = o2.rowsById, a2 = o2.nonGroupedRowsById, c2 = void 0 === a2 ? s2 : a2, d2 = void 0 !== i2 ? i2 : !u2, f2 = Object.assign({}, e2.selectedRowIds);
        return d2 ? Object.keys(c2).forEach(function(e3) {
          f2[e3] = true;
        }) : Object.keys(c2).forEach(function(e3) {
          delete f2[e3];
        }), r({}, e2, { selectedRowIds: f2 });
      }
      if (t2.type === l.toggleRowSelected) {
        var p2 = t2.id, g2 = t2.value, v2 = o2.rowsById, m2 = o2.selectSubRows, h2 = void 0 === m2 || m2, y2 = o2.getSubRows, w2 = e2.selectedRowIds[p2], R2 = void 0 !== g2 ? g2 : !w2;
        if (w2 === R2)
          return e2;
        var b2 = r({}, e2.selectedRowIds);
        return function e3(t3) {
          var n3 = v2[t3];
          if (n3 && (n3.isGrouped || (R2 ? b2[t3] = true : delete b2[t3]), h2 && y2(n3)))
            return y2(n3).forEach(function(t4) {
              return e3(t4.id);
            });
        }(p2), r({}, e2, { selectedRowIds: b2 });
      }
      if (t2.type === l.toggleAllPageRowsSelected) {
        var S2 = t2.value, C2 = o2.page, x2 = o2.rowsById, P2 = o2.selectSubRows, B2 = void 0 === P2 || P2, E2 = o2.isAllPageRowsSelected, I2 = o2.getSubRows, F2 = void 0 !== S2 ? S2 : !E2, G2 = r({}, e2.selectedRowIds);
        return C2.forEach(function(e3) {
          return function e4(t3) {
            var n3 = x2[t3];
            if (n3.isGrouped || (F2 ? G2[t3] = true : delete G2[t3]), B2 && I2(n3))
              return I2(n3).forEach(function(t4) {
                return e4(t4.id);
              });
          }(e3.id);
        }), r({}, e2, { selectedRowIds: G2 });
      }
      return e2;
    }
    function Rt(e2) {
      var n2 = e2.data, o2 = e2.rows, r2 = e2.getHooks, i2 = e2.plugins, u2 = e2.rowsById, s2 = e2.nonGroupedRowsById, a2 = void 0 === s2 ? u2 : s2, c2 = e2.autoResetSelectedRows, d2 = void 0 === c2 || c2, p2 = e2.state.selectedRowIds, g2 = e2.selectSubRows, m2 = void 0 === g2 || g2, y2 = e2.dispatch, R2 = e2.page, b2 = e2.getSubRows;
      v(i2, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
      var S2 = t.useMemo(function() {
        var e3 = [];
        return o2.forEach(function(t2) {
          var n3 = m2 ? function e4(t3, n4, o3) {
            if (n4[t3.id])
              return true;
            var r3 = o3(t3);
            if (r3 && r3.length) {
              var i3 = true, u3 = false;
              return r3.forEach(function(t4) {
                u3 && !i3 || (e4(t4, n4, o3) ? u3 = true : i3 = false);
              }), !!i3 || !!u3 && null;
            }
            return false;
          }(t2, p2, b2) : !!p2[t2.id];
          t2.isSelected = !!n3, t2.isSomeSelected = null === n3, n3 && e3.push(t2);
        }), e3;
      }, [o2, m2, p2, b2]), C2 = Boolean(Object.keys(a2).length && Object.keys(p2).length), x2 = C2;
      C2 && Object.keys(a2).some(function(e3) {
        return !p2[e3];
      }) && (C2 = false), C2 || R2 && R2.length && R2.some(function(e3) {
        var t2 = e3.id;
        return !p2[t2];
      }) && (x2 = false);
      var P2 = h(d2);
      w(function() {
        P2() && y2({ type: l.resetSelectedRows });
      }, [y2, n2]);
      var B2 = t.useCallback(function(e3) {
        return y2({ type: l.toggleAllRowsSelected, value: e3 });
      }, [y2]), E2 = t.useCallback(function(e3) {
        return y2({ type: l.toggleAllPageRowsSelected, value: e3 });
      }, [y2]), I2 = t.useCallback(function(e3, t2) {
        return y2({ type: l.toggleRowSelected, id: e3, value: t2 });
      }, [y2]), F2 = h(e2), G2 = f(r2().getToggleAllRowsSelectedProps, { instance: F2() }), A2 = f(r2().getToggleAllPageRowsSelectedProps, { instance: F2() });
      Object.assign(e2, { selectedFlatRows: S2, isAllRowsSelected: C2, isAllPageRowsSelected: x2, toggleRowSelected: I2, toggleAllRowsSelected: B2, getToggleAllRowsSelectedProps: G2, getToggleAllPageRowsSelectedProps: A2, toggleAllPageRowsSelected: E2 });
    }
    function bt(e2, t2) {
      var n2 = t2.instance;
      e2.toggleRowSelected = function(t3) {
        return n2.toggleRowSelected(e2.id, t3);
      }, e2.getToggleRowSelectedProps = f(n2.getHooks().getToggleRowSelectedProps, { instance: n2, row: e2 });
    }
    var St = function(e2) {
      return {};
    }, Ct = function(e2) {
      return {};
    };
    l.setRowState = "setRowState", l.setCellState = "setCellState", l.resetRowState = "resetRowState";
    var xt = function(e2) {
      e2.stateReducers.push(Pt), e2.useInstance.push(Bt), e2.prepareRow.push(Et);
    };
    function Pt(e2, t2, n2, o2) {
      var i2 = o2.initialRowStateAccessor, u2 = void 0 === i2 ? St : i2, s2 = o2.initialCellStateAccessor, a2 = void 0 === s2 ? Ct : s2, c2 = o2.rowsById;
      if (t2.type === l.init)
        return r({ rowState: {} }, e2);
      if (t2.type === l.resetRowState)
        return r({}, e2, { rowState: o2.initialState.rowState || {} });
      if (t2.type === l.setRowState) {
        var d2, f2 = t2.rowId, p2 = t2.value, g2 = void 0 !== e2.rowState[f2] ? e2.rowState[f2] : u2(c2[f2]);
        return r({}, e2, { rowState: r({}, e2.rowState, (d2 = {}, d2[f2] = m(p2, g2), d2)) });
      }
      if (t2.type === l.setCellState) {
        var v2, h2, y2, w2, R2, b2 = t2.rowId, S2 = t2.columnId, C2 = t2.value, x2 = void 0 !== e2.rowState[b2] ? e2.rowState[b2] : u2(c2[b2]), P2 = void 0 !== (null == x2 ? void 0 : null == (v2 = x2.cellState) ? void 0 : v2[S2]) ? x2.cellState[S2] : a2(null == (h2 = c2[b2]) ? void 0 : null == (y2 = h2.cells) ? void 0 : y2.find(function(e3) {
          return e3.column.id === S2;
        }));
        return r({}, e2, { rowState: r({}, e2.rowState, (R2 = {}, R2[b2] = r({}, x2, { cellState: r({}, x2.cellState || {}, (w2 = {}, w2[S2] = m(C2, P2), w2)) }), R2)) });
      }
    }
    function Bt(e2) {
      var n2 = e2.autoResetRowState, o2 = void 0 === n2 || n2, r2 = e2.data, i2 = e2.dispatch, u2 = t.useCallback(function(e3, t2) {
        return i2({ type: l.setRowState, rowId: e3, value: t2 });
      }, [i2]), s2 = t.useCallback(function(e3, t2, n3) {
        return i2({ type: l.setCellState, rowId: e3, columnId: t2, value: n3 });
      }, [i2]), a2 = h(o2);
      w(function() {
        a2() && i2({ type: l.resetRowState });
      }, [r2]), Object.assign(e2, { setRowState: u2, setCellState: s2 });
    }
    function Et(e2, t2) {
      var n2 = t2.instance, o2 = n2.initialRowStateAccessor, r2 = void 0 === o2 ? St : o2, i2 = n2.initialCellStateAccessor, u2 = void 0 === i2 ? Ct : i2, l2 = n2.state.rowState;
      e2 && (e2.state = void 0 !== l2[e2.id] ? l2[e2.id] : r2(e2), e2.setState = function(t3) {
        return n2.setRowState(e2.id, t3);
      }, e2.cells.forEach(function(t3) {
        e2.state.cellState || (e2.state.cellState = {}), t3.state = void 0 !== e2.state.cellState[t3.column.id] ? e2.state.cellState[t3.column.id] : u2(t3), t3.setState = function(o3) {
          return n2.setCellState(e2.id, t3.column.id, o3);
        };
      }));
    }
    xt.pluginName = "useRowState", l.resetColumnOrder = "resetColumnOrder", l.setColumnOrder = "setColumnOrder";
    var It = function(e2) {
      e2.stateReducers.push(Ft), e2.visibleColumnsDeps.push(function(e3, t2) {
        var n2 = t2.instance;
        return [].concat(e3, [n2.state.columnOrder]);
      }), e2.visibleColumns.push(Gt), e2.useInstance.push(At);
    };
    function Ft(e2, t2, n2, o2) {
      return t2.type === l.init ? r({ columnOrder: [] }, e2) : t2.type === l.resetColumnOrder ? r({}, e2, { columnOrder: o2.initialState.columnOrder || [] }) : t2.type === l.setColumnOrder ? r({}, e2, { columnOrder: m(t2.columnOrder, e2.columnOrder) }) : void 0;
    }
    function Gt(e2, t2) {
      var n2 = t2.instance.state.columnOrder;
      if (!n2 || !n2.length)
        return e2;
      for (var o2 = [].concat(n2), r2 = [].concat(e2), i2 = [], u2 = function() {
        var e3 = o2.shift(), t3 = r2.findIndex(function(t4) {
          return t4.id === e3;
        });
        t3 > -1 && i2.push(r2.splice(t3, 1)[0]);
      }; r2.length && o2.length; )
        u2();
      return [].concat(i2, r2);
    }
    function At(e2) {
      var n2 = e2.dispatch;
      e2.setColumnOrder = t.useCallback(function(e3) {
        return n2({ type: l.setColumnOrder, columnOrder: e3 });
      }, [n2]);
    }
    It.pluginName = "useColumnOrder", c.canResize = true, l.columnStartResizing = "columnStartResizing", l.columnResizing = "columnResizing", l.columnDoneResizing = "columnDoneResizing", l.resetResize = "resetResize";
    var kt = function(e2) {
      e2.getResizerProps = [Ht], e2.getHeaderProps.push({ style: { position: "relative" } }), e2.stateReducers.push(Wt), e2.useInstance.push(Tt), e2.useInstanceBeforeDimensions.push(zt);
    }, Ht = function(e2, t2) {
      var n2 = t2.instance, o2 = t2.header, r2 = n2.dispatch, i2 = function(e3, t3) {
        var n3 = false;
        if ("touchstart" === e3.type) {
          if (e3.touches && e3.touches.length > 1)
            return;
          n3 = true;
        }
        var o3, i3, u2 = function(e4) {
          var t4 = [];
          return function e5(n4) {
            n4.columns && n4.columns.length && n4.columns.map(e5);
            t4.push(n4);
          }(e4), t4;
        }(t3).map(function(e4) {
          return [e4.id, e4.totalWidth];
        }), s2 = n3 ? Math.round(e3.touches[0].clientX) : e3.clientX, a2 = function() {
          window.cancelAnimationFrame(o3), o3 = null, r2({ type: l.columnDoneResizing });
        }, c2 = function() {
          window.cancelAnimationFrame(o3), o3 = null, r2({ type: l.columnResizing, clientX: i3 });
        }, d2 = function(e4) {
          i3 = e4, o3 || (o3 = window.requestAnimationFrame(c2));
        }, f2 = { mouse: { moveEvent: "mousemove", moveHandler: function(e4) {
          return d2(e4.clientX);
        }, upEvent: "mouseup", upHandler: function(e4) {
          document.removeEventListener("mousemove", f2.mouse.moveHandler), document.removeEventListener("mouseup", f2.mouse.upHandler), a2();
        } }, touch: { moveEvent: "touchmove", moveHandler: function(e4) {
          return e4.cancelable && (e4.preventDefault(), e4.stopPropagation()), d2(e4.touches[0].clientX), false;
        }, upEvent: "touchend", upHandler: function(e4) {
          document.removeEventListener(f2.touch.moveEvent, f2.touch.moveHandler), document.removeEventListener(f2.touch.upEvent, f2.touch.moveHandler), a2();
        } } }, p2 = n3 ? f2.touch : f2.mouse, g2 = !!function() {
          if ("boolean" == typeof z)
            return z;
          var e4 = false;
          try {
            var t4 = { get passive() {
              return e4 = true, false;
            } };
            window.addEventListener("test", null, t4), window.removeEventListener("test", null, t4);
          } catch (t5) {
            e4 = false;
          }
          return z = e4;
        }() && { passive: false };
        document.addEventListener(p2.moveEvent, p2.moveHandler, g2), document.addEventListener(p2.upEvent, p2.upHandler, g2), r2({ type: l.columnStartResizing, columnId: t3.id, columnWidth: t3.totalWidth, headerIdWidths: u2, clientX: s2 });
      };
      return [e2, { onMouseDown: function(e3) {
        return e3.persist() || i2(e3, o2);
      }, onTouchStart: function(e3) {
        return e3.persist() || i2(e3, o2);
      }, style: { cursor: "col-resize" }, draggable: false, role: "separator" }];
    };
    function Wt(e2, t2) {
      if (t2.type === l.init)
        return r({ columnResizing: { columnWidths: {} } }, e2);
      if (t2.type === l.resetResize)
        return r({}, e2, { columnResizing: { columnWidths: {} } });
      if (t2.type === l.columnStartResizing) {
        var n2 = t2.clientX, o2 = t2.columnId, i2 = t2.columnWidth, u2 = t2.headerIdWidths;
        return r({}, e2, { columnResizing: r({}, e2.columnResizing, { startX: n2, headerIdWidths: u2, columnWidth: i2, isResizingColumn: o2 }) });
      }
      if (t2.type === l.columnResizing) {
        var s2 = t2.clientX, a2 = e2.columnResizing, c2 = a2.startX, d2 = a2.columnWidth, f2 = a2.headerIdWidths, p2 = (s2 - c2) / d2, g2 = {};
        return (void 0 === f2 ? [] : f2).forEach(function(e3) {
          var t3 = e3[0], n3 = e3[1];
          g2[t3] = Math.max(n3 + n3 * p2, 0);
        }), r({}, e2, { columnResizing: r({}, e2.columnResizing, { columnWidths: r({}, e2.columnResizing.columnWidths, {}, g2) }) });
      }
      return t2.type === l.columnDoneResizing ? r({}, e2, { columnResizing: r({}, e2.columnResizing, { startX: null, isResizingColumn: null }) }) : void 0;
    }
    kt.pluginName = "useResizeColumns";
    var zt = function(e2) {
      var t2 = e2.flatHeaders, n2 = e2.disableResizing, o2 = e2.getHooks, r2 = e2.state.columnResizing, i2 = h(e2);
      t2.forEach(function(e3) {
        var t3 = I(true !== e3.disableResizing && void 0, true !== n2 && void 0, true);
        e3.canResize = t3, e3.width = r2.columnWidths[e3.id] || e3.originalWidth || e3.width, e3.isResizing = r2.isResizingColumn === e3.id, t3 && (e3.getResizerProps = f(o2().getResizerProps, { instance: i2(), header: e3 }));
      });
    };
    function Tt(e2) {
      var n2 = e2.plugins, o2 = e2.dispatch, r2 = e2.autoResetResize, i2 = void 0 === r2 || r2, u2 = e2.columns;
      v(n2, ["useAbsoluteLayout"], "useResizeColumns");
      var s2 = h(i2);
      w(function() {
        s2() && o2({ type: l.resetResize });
      }, [u2]);
      var a2 = t.useCallback(function() {
        return o2({ type: l.resetResize });
      }, [o2]);
      Object.assign(e2, { resetResizing: a2 });
    }
    var Ot = { position: "absolute", top: 0 }, Mt = function(e2) {
      e2.getTableBodyProps.push(jt), e2.getRowProps.push(jt), e2.getHeaderGroupProps.push(jt), e2.getFooterGroupProps.push(jt), e2.getHeaderProps.push(function(e3, t2) {
        var n2 = t2.column;
        return [e3, { style: r({}, Ot, { left: n2.totalLeft + "px", width: n2.totalWidth + "px" }) }];
      }), e2.getCellProps.push(function(e3, t2) {
        var n2 = t2.cell;
        return [e3, { style: r({}, Ot, { left: n2.column.totalLeft + "px", width: n2.column.totalWidth + "px" }) }];
      }), e2.getFooterProps.push(function(e3, t2) {
        var n2 = t2.column;
        return [e3, { style: r({}, Ot, { left: n2.totalLeft + "px", width: n2.totalWidth + "px" }) }];
      });
    };
    Mt.pluginName = "useAbsoluteLayout";
    var jt = function(e2, t2) {
      return [e2, { style: { position: "relative", width: t2.instance.totalColumnsWidth + "px" } }];
    }, Lt = { display: "inline-block", boxSizing: "border-box" }, Nt = function(e2, t2) {
      return [e2, { style: { display: "flex", width: t2.instance.totalColumnsWidth + "px" } }];
    }, Dt = function(e2) {
      e2.getRowProps.push(Nt), e2.getHeaderGroupProps.push(Nt), e2.getFooterGroupProps.push(Nt), e2.getHeaderProps.push(function(e3, t2) {
        var n2 = t2.column;
        return [e3, { style: r({}, Lt, { width: n2.totalWidth + "px" }) }];
      }), e2.getCellProps.push(function(e3, t2) {
        var n2 = t2.cell;
        return [e3, { style: r({}, Lt, { width: n2.column.totalWidth + "px" }) }];
      }), e2.getFooterProps.push(function(e3, t2) {
        var n2 = t2.column;
        return [e3, { style: r({}, Lt, { width: n2.totalWidth + "px" }) }];
      });
    };
    function Vt(e2) {
      e2.getTableProps.push(_t), e2.getRowProps.push(Xt), e2.getHeaderGroupProps.push(Xt), e2.getFooterGroupProps.push(Xt), e2.getHeaderProps.push(qt), e2.getCellProps.push(Kt), e2.getFooterProps.push(Ut);
    }
    Dt.pluginName = "useBlockLayout", Vt.pluginName = "useFlexLayout";
    var _t = function(e2, t2) {
      return [e2, { style: { minWidth: t2.instance.totalColumnsMinWidth + "px" } }];
    }, Xt = function(e2, t2) {
      return [e2, { style: { display: "flex", flex: "1 0 auto", minWidth: t2.instance.totalColumnsMinWidth + "px" } }];
    }, qt = function(e2, t2) {
      var n2 = t2.column;
      return [e2, { style: { boxSizing: "border-box", flex: n2.totalFlexWidth ? n2.totalFlexWidth + " 0 auto" : void 0, minWidth: n2.totalMinWidth + "px", width: n2.totalWidth + "px" } }];
    }, Kt = function(e2, t2) {
      var n2 = t2.cell;
      return [e2, { style: { boxSizing: "border-box", flex: n2.column.totalFlexWidth + " 0 auto", minWidth: n2.column.totalMinWidth + "px", width: n2.column.totalWidth + "px" } }];
    }, Ut = function(e2, t2) {
      var n2 = t2.column;
      return [e2, { style: { boxSizing: "border-box", flex: n2.totalFlexWidth ? n2.totalFlexWidth + " 0 auto" : void 0, minWidth: n2.totalMinWidth + "px", width: n2.totalWidth + "px" } }];
    };
    function $t(e2) {
      e2.stateReducers.push(Zt), e2.getTableProps.push(Jt), e2.getHeaderProps.push(Yt), e2.getRowProps.push(Qt);
    }
    l.columnStartResizing = "columnStartResizing", l.columnResizing = "columnResizing", l.columnDoneResizing = "columnDoneResizing", l.resetResize = "resetResize", $t.pluginName = "useGridLayout";
    var Jt = function(e2, t2) {
      var n2 = t2.instance;
      return [e2, { style: { display: "grid", gridTemplateColumns: n2.visibleColumns.map(function(e3) {
        var t3;
        return n2.state.gridLayout.columnWidths[e3.id] ? n2.state.gridLayout.columnWidths[e3.id] + "px" : (null == (t3 = n2.state.columnResizing) ? void 0 : t3.isResizingColumn) ? n2.state.gridLayout.startWidths[e3.id] + "px" : "number" == typeof e3.width ? e3.width + "px" : e3.width;
      }).join(" ") } }];
    }, Yt = function(e2, t2) {
      var n2 = t2.column;
      return [e2, { id: "header-cell-" + n2.id, style: { position: "sticky", gridColumn: "span " + n2.totalVisibleHeaderCount } }];
    }, Qt = function(e2, t2) {
      var n2 = t2.row;
      return n2.isExpanded ? [e2, { style: { gridColumn: "1 / " + (n2.cells.length + 1) } }] : [e2, {}];
    };
    function Zt(e2, t2, n2, o2) {
      if (t2.type === l.init)
        return r({ gridLayout: { columnWidths: {} } }, e2);
      if (t2.type === l.resetResize)
        return r({}, e2, { gridLayout: { columnWidths: {} } });
      if (t2.type === l.columnStartResizing) {
        var i2 = t2.columnId, u2 = t2.headerIdWidths, s2 = en(i2);
        if (void 0 !== s2) {
          var a2 = o2.visibleColumns.reduce(function(e3, t3) {
            var n3;
            return r({}, e3, ((n3 = {})[t3.id] = en(t3.id), n3));
          }, {}), c2 = o2.visibleColumns.reduce(function(e3, t3) {
            var n3;
            return r({}, e3, ((n3 = {})[t3.id] = t3.minWidth, n3));
          }, {}), d2 = o2.visibleColumns.reduce(function(e3, t3) {
            var n3;
            return r({}, e3, ((n3 = {})[t3.id] = t3.maxWidth, n3));
          }, {}), f2 = u2.map(function(e3) {
            var t3 = e3[0];
            return [t3, en(t3)];
          });
          return r({}, e2, { gridLayout: r({}, e2.gridLayout, { startWidths: a2, minWidths: c2, maxWidths: d2, headerIdGridWidths: f2, columnWidth: s2 }) });
        }
        return e2;
      }
      if (t2.type === l.columnResizing) {
        var p2 = t2.clientX, g2 = e2.columnResizing.startX, v2 = e2.gridLayout, m2 = v2.columnWidth, h2 = v2.minWidths, y2 = v2.maxWidths, w2 = v2.headerIdGridWidths, R2 = (p2 - g2) / m2, b2 = {};
        return (void 0 === w2 ? [] : w2).forEach(function(e3) {
          var t3 = e3[0], n3 = e3[1];
          b2[t3] = Math.min(Math.max(h2[t3], n3 + n3 * R2), y2[t3]);
        }), r({}, e2, { gridLayout: r({}, e2.gridLayout, { columnWidths: r({}, e2.gridLayout.columnWidths, {}, b2) }) });
      }
      return t2.type === l.columnDoneResizing ? r({}, e2, { gridLayout: r({}, e2.gridLayout, { startWidths: {}, minWidths: {}, maxWidths: {} }) }) : void 0;
    }
    function en(e2) {
      var t2, n2 = null == (t2 = document.getElementById("header-cell-" + e2)) ? void 0 : t2.offsetWidth;
      if (void 0 !== n2)
        return n2;
    }
    e._UNSTABLE_usePivotColumns = nt, e.actions = l, e.defaultColumn = c, e.defaultGroupByFn = De, e.defaultOrderByFn = Qe, e.defaultRenderer = s, e.emptyRenderer = a, e.ensurePluginOrder = v, e.flexRender = b, e.functionalUpdate = m, e.loopHooks = g, e.makePropGetter = f, e.makeRenderer = R, e.reduceHooks = p, e.safeUseLayoutEffect = y, e.useAbsoluteLayout = Mt, e.useAsyncDebounce = function(e2, n2) {
      void 0 === n2 && (n2 = 0);
      var r2 = t.useRef({}), i2 = h(e2), u2 = h(n2);
      return t.useCallback(function() {
        var e3 = o(regeneratorRuntime.mark(function e4() {
          var t2, n3, l2, s2 = arguments;
          return regeneratorRuntime.wrap(function(e5) {
            for (; ; )
              switch (e5.prev = e5.next) {
                case 0:
                  for (t2 = s2.length, n3 = new Array(t2), l2 = 0; l2 < t2; l2++)
                    n3[l2] = s2[l2];
                  return r2.current.promise || (r2.current.promise = new Promise(function(e6, t3) {
                    r2.current.resolve = e6, r2.current.reject = t3;
                  })), r2.current.timeout && clearTimeout(r2.current.timeout), r2.current.timeout = setTimeout(o(regeneratorRuntime.mark(function e6() {
                    return regeneratorRuntime.wrap(function(e7) {
                      for (; ; )
                        switch (e7.prev = e7.next) {
                          case 0:
                            return delete r2.current.timeout, e7.prev = 1, e7.t0 = r2.current, e7.next = 5, i2().apply(void 0, n3);
                          case 5:
                            e7.t1 = e7.sent, e7.t0.resolve.call(e7.t0, e7.t1), e7.next = 12;
                            break;
                          case 9:
                            e7.prev = 9, e7.t2 = e7.catch(1), r2.current.reject(e7.t2);
                          case 12:
                            return e7.prev = 12, delete r2.current.promise, e7.finish(12);
                          case 15:
                          case "end":
                            return e7.stop();
                        }
                    }, e6, null, [[1, 9, 12, 15]]);
                  })), u2()), e5.abrupt("return", r2.current.promise);
                case 5:
                case "end":
                  return e5.stop();
              }
          }, e4);
        }));
        return function() {
          return e3.apply(this, arguments);
        };
      }(), [i2, u2]);
    }, e.useBlockLayout = Dt, e.useColumnOrder = It, e.useExpanded = se, e.useFilters = Pe, e.useFlexLayout = Vt, e.useGetLatest = h, e.useGlobalFilter = Ie, e.useGridLayout = $t, e.useGroupBy = ze, e.useMountedLayoutEffect = w, e.usePagination = Ze, e.useResizeColumns = kt, e.useRowSelect = vt, e.useRowState = xt, e.useSortBy = Ue, e.useTable = function(e2) {
      for (var n2 = arguments.length, o2 = new Array(n2 > 1 ? n2 - 1 : 0), i2 = 1; i2 < n2; i2++)
        o2[i2 - 1] = arguments[i2];
      e2 = ie(e2), o2 = [K].concat(o2);
      var u2 = t.useRef({}), s2 = h(u2.current);
      Object.assign(s2(), r({}, e2, { plugins: o2, hooks: q() })), o2.filter(Boolean).forEach(function(e3) {
        e3(s2().hooks);
      });
      var a2 = h(s2().hooks);
      s2().getHooks = a2, delete s2().hooks, Object.assign(s2(), p(a2().useOptions, ie(e2)));
      var c2 = s2(), d2 = c2.data, v2 = c2.columns, m2 = c2.initialState, y2 = c2.defaultColumn, w2 = c2.getSubRows, b2 = c2.getRowId, E2 = c2.stateReducer, I2 = c2.useControlledState, F2 = h(E2), G2 = t.useCallback(function(e3, t2) {
        if (!t2.type)
          throw console.info({ action: t2 }), new Error("Unknown Action 👆");
        return [].concat(a2().stateReducers, Array.isArray(F2()) ? F2() : [F2()]).reduce(function(n3, o3) {
          return o3(n3, t2, e3, s2()) || n3;
        }, e3);
      }, [a2, F2, s2]), A2 = t.useReducer(G2, void 0, function() {
        return G2(m2, { type: l.init });
      }), k2 = A2[0], H2 = A2[1], W2 = p([].concat(a2().useControlledState, [I2]), k2, { instance: s2() });
      Object.assign(s2(), { state: W2, dispatch: H2 });
      var z2 = t.useMemo(function() {
        return S(p(a2().columns, v2, { instance: s2() }));
      }, [a2, s2, v2].concat(p(a2().columnsDeps, [], { instance: s2() })));
      s2().columns = z2;
      var T2 = t.useMemo(function() {
        return p(a2().allColumns, C(z2), { instance: s2() }).map(x);
      }, [z2, a2, s2].concat(p(a2().allColumnsDeps, [], { instance: s2() })));
      s2().allColumns = T2;
      var O2 = t.useMemo(function() {
        for (var e3 = [], t2 = [], n3 = {}, o3 = [].concat(T2); o3.length; ) {
          var r2 = o3.shift();
          le({ data: d2, rows: e3, flatRows: t2, rowsById: n3, column: r2, getRowId: b2, getSubRows: w2, accessValueHooks: a2().accessValue, getInstance: s2 });
        }
        return [e3, t2, n3];
      }, [T2, d2, b2, w2, a2, s2]), M2 = O2[0], j2 = O2[1], L2 = O2[2];
      Object.assign(s2(), { rows: M2, initialRows: [].concat(M2), flatRows: j2, rowsById: L2 }), g(a2().useInstanceAfterData, s2());
      var N2 = t.useMemo(function() {
        return p(a2().visibleColumns, T2, { instance: s2() }).map(function(e3) {
          return P(e3, y2);
        });
      }, [a2, T2, s2, y2].concat(p(a2().visibleColumnsDeps, [], { instance: s2() })));
      T2 = t.useMemo(function() {
        var e3 = [].concat(N2);
        return T2.forEach(function(t2) {
          e3.find(function(e4) {
            return e4.id === t2.id;
          }) || e3.push(t2);
        }), e3;
      }, [T2, N2]), s2().allColumns = T2;
      var D2 = t.useMemo(function() {
        return p(a2().headerGroups, B(N2, y2), s2());
      }, [a2, N2, y2, s2].concat(p(a2().headerGroupsDeps, [], { instance: s2() })));
      s2().headerGroups = D2;
      var V2 = t.useMemo(function() {
        return D2.length ? D2[0].headers : [];
      }, [D2]);
      s2().headers = V2, s2().flatHeaders = D2.reduce(function(e3, t2) {
        return [].concat(e3, t2.headers);
      }, []), g(a2().useInstanceBeforeDimensions, s2());
      var _2 = N2.filter(function(e3) {
        return e3.isVisible;
      }).map(function(e3) {
        return e3.id;
      }).sort().join("_");
      N2 = t.useMemo(function() {
        return N2.filter(function(e3) {
          return e3.isVisible;
        });
      }, [N2, _2]), s2().visibleColumns = N2;
      var X2 = ue(V2), U2 = X2[0], $2 = X2[1], J2 = X2[2];
      return s2().totalColumnsMinWidth = U2, s2().totalColumnsWidth = $2, s2().totalColumnsMaxWidth = J2, g(a2().useInstance, s2()), [].concat(s2().flatHeaders, s2().allColumns).forEach(function(e3) {
        e3.render = R(s2(), e3), e3.getHeaderProps = f(a2().getHeaderProps, { instance: s2(), column: e3 }), e3.getFooterProps = f(a2().getFooterProps, { instance: s2(), column: e3 });
      }), s2().headerGroups = t.useMemo(function() {
        return D2.filter(function(e3, t2) {
          return e3.headers = e3.headers.filter(function(e4) {
            return e4.headers ? function e5(t3) {
              return t3.filter(function(t4) {
                return t4.headers ? e5(t4.headers) : t4.isVisible;
              }).length;
            }(e4.headers) : e4.isVisible;
          }), !!e3.headers.length && (e3.getHeaderGroupProps = f(a2().getHeaderGroupProps, { instance: s2(), headerGroup: e3, index: t2 }), e3.getFooterGroupProps = f(a2().getFooterGroupProps, { instance: s2(), headerGroup: e3, index: t2 }), true);
        });
      }, [D2, s2, a2]), s2().footerGroups = [].concat(s2().headerGroups).reverse(), s2().prepareRow = t.useCallback(function(e3) {
        e3.getRowProps = f(a2().getRowProps, { instance: s2(), row: e3 }), e3.allCells = T2.map(function(t2) {
          var n3 = e3.values[t2.id], o3 = { column: t2, row: e3, value: n3 };
          return o3.getCellProps = f(a2().getCellProps, { instance: s2(), cell: o3 }), o3.render = R(s2(), t2, { row: e3, cell: o3, value: n3 }), o3;
        }), e3.cells = N2.map(function(t2) {
          return e3.allCells.find(function(e4) {
            return e4.column.id === t2.id;
          });
        }), g(a2().prepareRow, e3, { instance: s2() });
      }, [a2, s2, T2, N2]), s2().getTableProps = f(a2().getTableProps, { instance: s2() }), s2().getTableBodyProps = f(a2().getTableBodyProps, { instance: s2() }), g(a2().useFinalInstance, s2()), s2();
    }, Object.defineProperty(e, "__esModule", { value: true });
  });
})(reactTable_production_min, reactTable_production_minExports);
(function(module) {
  {
    module.exports = reactTable_production_minExports;
  }
})(reactTable);
const Styles = styled.div`
  padding: 1rem;
  table {
    /* border-collapse: collapse; */
    border-spacing: 0;

    thead {
      position: sticky;
      top: 0;
      box-shadow: 0 2px 0 0px var(--canvastext);
    }

    a {
      text-decoration: var(--mainBlue) underline;
    }

    .sortIcon {
      padding-left: 4px;
    }

    tbody tr:not(:last-child) {
      border-bottom: 1px solid var(--mainGray);
    }

    td:first-child {
      text-align: left;
      max-width: 15rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    th {
      position: sticky;
      top: 0;
      background: var(--canvas);
      user-select: none;
      max-width: 4rem;
      //word-wrap: break-word;
      padding: 2px;
      max-height: 10rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    th:first-child {
      vertical-align: bottom;
      max-width: 15rem;
      p {
        margin: 5px;
      }
    }

    /* th > p {
      height: 100%;
    } */

    tr:first-child th > p {
      margin: 0px 0px 4px 0px;
      padding: 0px;
    }

    tr:not(:first-child) th:not(:first-child) > p {
      writing-mode: vertical-rl;
      text-align: left;
      transform: rotate(180deg);
      max-height: 160px;
    }

    thead tr:only-child th:not(:first-child) > p {
      writing-mode: vertical-rl;
      text-align: left;
      transform: rotate(180deg);
      max-height: 160px;
    }

    td {
      /* user-select: none; */
      text-align: center;
      max-width: 5rem;
    }
    td,
    th {
      border-right: 2px solid var(--canvastext);
      :last-child {
        border-right: 0;
      }
    }

    tfoot {
      font-weight: bolder;
      position: sticky;
      bottom: 0;
      background-color: var(--canvas);
      box-shadow: inset 0 2px 0 var(--canvastext);
    }
  }
`;
const assignmentDataQuery = Recoil_index_8({
  key: "assignmentDataQuery",
  default: Recoil_index_9({
    key: "assignmentDataQuery/Default",
    get: async ({ get }) => {
      const courseId = get(searchParamAtomFamily("courseId"));
      try {
        const {
          data: { success, message, assignments }
        } = await axios.get("/api/loadGradebookAssignments.php", {
          params: { courseId }
        });
        if (success) {
          return assignments;
        }
        throw new Error(message);
      } catch (error) {
        console.warn("No assignments associated with courseId ID: ", courseId);
        return {};
      }
    }
  })
});
function isIterable(obj) {
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}
const assignmentData = Recoil_index_9({
  key: "assignmentData",
  get: ({ get }) => {
    let assignmentArray = {};
    let data = get(assignmentDataQuery);
    if (isIterable(data)) {
      for (let row of data) {
        let [doenetId, assignmentInfo] = row;
        assignmentArray[doenetId] = assignmentInfo;
      }
    }
    return assignmentArray;
  }
});
const studentDataQuery = Recoil_index_8({
  key: "studentDataQuery",
  default: Recoil_index_9({
    key: "studentDataQuery/Default",
    get: async ({ get }) => {
      const courseId = get(searchParamAtomFamily("courseId"));
      try {
        const {
          data: { success, message, gradebookEnrollment }
        } = await axios.get("/api/loadGradebookEnrollment.php", {
          params: { courseId }
        });
        if (success) {
          return gradebookEnrollment;
        }
        throw new Error(message);
      } catch (error) {
        console.warn(
          "No students associated with course ID: ",
          courseId,
          error
        );
        return [];
      }
    }
  })
});
const studentData = Recoil_index_9({
  key: "studentData",
  get: ({ get }) => {
    let data = get(studentDataQuery);
    let students = {};
    for (let row of data) {
      let [
        userId,
        firstName,
        lastName,
        courseCredit,
        courseGrade,
        overrideCourseGrade
      ] = row;
      students[userId] = {
        firstName,
        lastName,
        courseCredit,
        courseGrade,
        overrideCourseGrade
      };
    }
    return students;
  }
});
const overviewDataQuery = Recoil_index_8({
  key: "overviewDataQuery",
  default: Recoil_index_9({
    key: "overviewDataQuery/Default",
    get: async ({ get }) => {
      const courseId = get(searchParamAtomFamily("courseId"));
      try {
        let {
          data: { success, message, overview }
        } = await axios.get("/api/loadGradebookOverview.php", {
          params: { courseId }
        });
        if (success) {
          return overview;
        }
        throw new Error(message);
      } catch (error) {
        console.warn(error.message);
        return {};
      }
    }
  })
});
const overviewData = Recoil_index_9({
  key: "overviewData",
  get: ({ get }) => {
    const students = get(studentData);
    const assignments = get(assignmentData);
    let overview = {};
    for (let userId in students) {
      overview[userId] = {
        grade: students[userId].courseGrade,
        assignments: {}
      };
      for (let doenetId in assignments) {
        overview[userId].assignments[doenetId] = null;
      }
    }
    let data = get(overviewDataQuery);
    for (let userAssignment of data) {
      let [doenetId, credit, userId] = userAssignment;
      if (overview[userId]) {
        overview[userId].assignments[doenetId] = credit;
      }
    }
    return overview;
  },
  set: ({ set }, { doenetId, userId, credit }) => {
    set(overviewDataQuery, (prev) => {
      let next = [];
      for (let userActivityArr of prev) {
        if (userActivityArr[0] == doenetId && userActivityArr[2] == userId) {
          let newArr = [...userActivityArr];
          newArr[1] = credit;
          next.push(newArr);
        } else {
          next.push(userActivityArr);
        }
      }
      return next;
    });
  }
});
const attemptDataQuery = Recoil_index_10({
  key: "attemptDataQuery",
  default: Recoil_index_11({
    key: "attemptDataQuery/Default",
    get: (doenetId) => async ({ get }) => {
      const courseId = get(searchParamAtomFamily("courseId"));
      try {
        let {
          data: { success, message, assignmentAttemptsData }
        } = await axios.get("/api/loadGradebookAssignmentAttempts.php", {
          params: { courseId, doenetId }
        });
        if (success) {
          return assignmentAttemptsData;
        }
        throw new Error(message);
      } catch (error) {
        console.warn(
          "Error loading attempts data for doenetId: ",
          doenetId,
          error.message
        );
        return {};
      }
    }
  })
});
const attemptData = Recoil_index_11({
  key: "attemptData",
  get: (doenetId) => ({ get }) => {
    let attempts = {};
    const students = get(studentData);
    for (let userId in students) {
      attempts[userId] = {
        credit: null,
        creditOverrides: {},
        attempts: {}
      };
    }
    let data = get(attemptDataQuery(doenetId));
    for (let row of data) {
      let [
        userId,
        attemptNumber,
        assignmentCredit,
        attemptCredit,
        creditOverride
      ] = row;
      if (attempts[userId]) {
        attempts[userId].credit = assignmentCredit;
        attempts[userId].attempts[attemptNumber] = attemptCredit;
        attempts[userId].creditOverrides[attemptNumber] = creditOverride;
      }
    }
    return attempts;
  }
});
const specificAttemptDataQuery = Recoil_index_10({
  key: "specificAttemptDataQuery",
  default: Recoil_index_11({
    key: "specificAttemptDataQuery/Default",
    get: (params) => async () => {
      try {
        let {
          data: { success, message, attemptData: attemptData2 }
        } = await axios.get("/api/loadAssignmentAttempt.php", { ...params });
        if (success) {
          return attemptData2;
        } else {
          throw new Error(message);
        }
      } catch (error) {
        console.warn(
          "Error loading specific attempt data for assignmentId: ",
          params == null ? void 0 : params.doenetId,
          error.message
        );
        return {};
      }
    }
  })
});
const specificAttemptData = Recoil_index_11({
  key: "specificAttemptData",
  get: (params) => ({ get }) => {
    let data = get(specificAttemptDataQuery(params));
    let doenetML = get(doenetMLQuery(data.contentId));
    let specificAttempt = {
      assignmentAttempted: data.assignmentAttempted,
      stateVariables: data.stateVariables,
      variant: data.variant,
      interactionSource: data.interactionSource,
      assignmentCredit: data.assignmentCredit,
      assignmentCreditOverride: data.assignmentCreditOverride,
      attemptCredit: data.attemptCredit,
      attemptCreditOverride: data.attemptCreditOverride,
      timestamp: data.timestamp,
      doenetML
    };
    return specificAttempt;
  }
});
const doenetMLQuery = Recoil_index_10({
  key: "doenetMLQuery",
  default: Recoil_index_11({
    key: "doenetMLQuery/Default",
    get: (contentId) => async () => {
      try {
        const server = await axios.get(`/media/${contentId}.doenet`);
        return server.data;
      } catch (err) {
        return "File not found";
      }
    }
  })
});
function Table({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      text: (rows2, id, filterValue) => {
        return rows2.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== void 0 ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
        });
      }
    }),
    []
  );
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
    // state,
    // visibleColumns,
    // preGlobalFilteredRows,
    // setGlobalFilter,
  } = reactTableExports.useTable(
    {
      columns,
      data,
      defaultColumn,
      // Be sure to pass the defaultColumn option
      filterTypes
    },
    reactTableExports.useFilters,
    // useFilters!
    reactTableExports.useGlobalFilter,
    reactTableExports.useSortBy
    // useGlobalFilter
  );
  return /* @__PURE__ */ jsxs("table", { ...getTableProps(), children: [
    /* @__PURE__ */ jsx("thead", { children: headerGroups.map((headerGroup) => (
      // eslint-disable-next-line react/jsx-key
      /* @__PURE__ */ jsx("tr", { ...headerGroup.getHeaderGroupProps(), children: headerGroup.headers.map((column) => (
        // eslint-disable-next-line react/jsx-key
        /* @__PURE__ */ jsxs("th", { ...column.getHeaderProps(column.getSortByToggleProps()), children: [
          /* @__PURE__ */ jsx("p", { children: column.render("Header") }),
          /* @__PURE__ */ jsx("div", { children: column.canFilter ? column.render("Filter") : null }),
          column.canSort ? /* @__PURE__ */ jsx("span", { className: "sortIcon", children: column.isSorted ? column.isSortedDesc ? /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faSortDown }) : /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faSortUp }) : /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faSort }) }) : null
        ] })
      )) })
    )) }),
    /* @__PURE__ */ jsx("tbody", { ...getTableBodyProps(), children: rows.map((row) => {
      prepareRow(row);
      return (
        // eslint-disable-next-line react/jsx-key
        /* @__PURE__ */ jsx("tr", { ...row.getRowProps(), children: row.cells.map((cell) => {
          return /* @__PURE__ */ jsx("td", { ...cell.getCellProps(), children: cell.render("Cell") });
        }) })
      );
    }) }),
    /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { children: footerGroups[0].headers.map((column) => (
      // eslint-disable-next-line react/jsx-key
      /* @__PURE__ */ jsx("td", { ...column.getFooterProps(), children: /* @__PURE__ */ jsx("p", { children: column.render("Footer") }) })
    )) }) })
  ] });
}
function gradeSorting(a, b, columnID) {
  const order = { "+": -1, "-": 1, undefined: 0 };
  const ga = a.cells[9].value;
  const gb = b.cells[9].value;
  if ((ga == null || ga == "") && (gb == null || gb == "")) {
    return 0;
  } else if (ga == null || ga == "") {
    return 1;
  } else if (gb == null || gb == "") {
    return -1;
  }
  return ga[0].localeCompare(gb[0]) || order[ga[1]] - order[gb[1]];
}
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter }
}) {
  const count = preFilteredRows.length;
  return /* @__PURE__ */ jsx(
    "input",
    {
      value: filterValue || "",
      onChange: (e) => {
        setFilter(e.target.value || void 0);
      },
      placeholder: `Search ${count} records...`,
      style: { border: "2px solid var(--canvastext)", borderRadius: "5px" }
    }
  );
}
const gradeCategories = [
  { category: "Gateway", scaleFactor: 0 },
  { category: "Exams" },
  { category: "Quizzes", maximumNumber: 10 },
  { category: "Problem sets", maximumNumber: 30 },
  { category: "Projects" },
  { category: "Participation", maximumValue: 50 }
];
function GradebookOverview() {
  const courseId = Recoil_index_20(searchParamAtomFamily("courseId"));
  const setPageToolView = Recoil_index_24(pageToolViewAtom);
  let students = Recoil_index_21(studentData);
  let assignments = Recoil_index_21(assignmentData);
  let overview = Recoil_index_21(overviewData);
  let { canViewAndModifyGrades } = Recoil_index_20(
    effectivePermissionsByCourseId(courseId)
  );
  const setSuppressMenus = Recoil_index_24(suppressMenusAtom);
  reactExports.useEffect(() => {
    setSuppressMenus(canViewAndModifyGrades === "1" ? [] : ["GradeDownload"]);
  }, [canViewAndModifyGrades, setSuppressMenus]);
  let course = Recoil_index_20(coursePermissionsAndSettingsByCourseId(courseId));
  if ((course == null ? void 0 : course.canViewCourse) == "0") {
    return /* @__PURE__ */ jsx("h1", { children: "No Access to view this page." });
  }
  if (assignments.state !== "hasValue" || students.state !== "hasValue" || overview.state !== "hasValue") {
    return null;
  }
  let overviewTable = {};
  overviewTable.headers = [];
  overviewTable.rows = [];
  let possiblePointRow = {};
  let totalPossiblePoints = 0;
  overviewTable.headers.push({
    Header: "Name",
    accessor: "name",
    Footer: "Possible Points"
  });
  let sortedAssignments = Object.entries(assignments.contents);
  sortedAssignments.sort((a, b) => a[1].sortOrder < b[1].sortOrder ? -1 : 1);
  possiblePointRow["name"] = "Possible Points";
  for (let {
    category,
    scaleFactor = 1,
    maximumNumber = Infinity,
    maximumValue = Infinity
  } of gradeCategories) {
    let allpossiblepoints = [];
    let hasAssignments = false;
    for (let [doenetId] of sortedAssignments) {
      let inCategory = assignments.contents[doenetId].category;
      if ((inCategory == null ? void 0 : inCategory.toLowerCase()) !== category.toLowerCase()) {
        continue;
      }
      hasAssignments = true;
      let possiblepoints = assignments.contents[doenetId].totalPointsOrPercent * 1;
      allpossiblepoints.push(possiblepoints);
      overviewTable.headers.push({
        Header: category,
        columns: [
          {
            Header: /* @__PURE__ */ jsx(
              "a",
              {
                style: {
                  display: "block",
                  fontWeight: "normal",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis"
                },
                onClick: () => {
                  setPageToolView({
                    page: "course",
                    tool: "gradebookAssignment",
                    view: "",
                    params: { courseId, doenetId }
                  });
                },
                children: assignments.contents[doenetId].label
              }
            ),
            accessor: doenetId,
            Footer: possiblepoints,
            disableFilters: true
          }
        ]
      });
      possiblePointRow[doenetId] = possiblepoints;
    }
    let numberScores = allpossiblepoints.length;
    allpossiblepoints = allpossiblepoints.sort((a, b) => b - a).slice(0, maximumNumber);
    let scaledPossiblePoints = allpossiblepoints.reduce((a, c) => a + c, 0) * scaleFactor;
    let categoryPossiblePoints = Math.min(scaledPossiblePoints, maximumValue);
    totalPossiblePoints += categoryPossiblePoints;
    categoryPossiblePoints = Math.round(categoryPossiblePoints * 100) / 100;
    let description = [];
    if (numberScores > maximumNumber) {
      description.push(`top ${maximumNumber} scores`);
    }
    if (scaleFactor !== 1) {
      description.push(`rescaling by ${scaleFactor * 100}%`);
    }
    if (scaledPossiblePoints > maximumValue) {
      description.push(`a cap of ${maximumValue} points`);
    }
    if (hasAssignments) {
      overviewTable.headers.push({
        Header: category,
        columns: [
          {
            Header: /* @__PURE__ */ jsxs("div", { children: [
              `${category} Total`,
              " ",
              description.length > 0 && /* @__PURE__ */ jsxs("div", { style: { fontSize: ".7em" }, children: [
                "Based on ",
                description.join(",")
              ] })
            ] }),
            accessor: category,
            Footer: categoryPossiblePoints,
            disableFilters: true
          }
        ]
      });
    } else {
      overviewTable.headers.push({
        Header: /* @__PURE__ */ jsx("div", {}),
        accessor: category,
        Footer: categoryPossiblePoints,
        disableFilters: true
      });
    }
  }
  totalPossiblePoints = Math.round(totalPossiblePoints * 100) / 100;
  overviewTable.headers.push({
    Header: /* @__PURE__ */ jsx("div", { children: "Course Total" }),
    accessor: "course total",
    Footer: totalPossiblePoints,
    disableFilters: true
  });
  for (let userId in students.contents) {
    let firstName = students.contents[userId].firstName, lastName = students.contents[userId].lastName;
    let row = {};
    let name = firstName + " " + lastName;
    row["name"] = /* @__PURE__ */ jsxs(
      "a",
      {
        style: { cursor: "pointer" },
        onClick: () => {
          setPageToolView({
            page: "course",
            tool: "gradebookStudent",
            view: "",
            params: { courseId, userId }
          });
        },
        children: [
          " ",
          name,
          " "
        ]
      }
    );
    let totalScore = 0;
    for (let {
      category,
      scaleFactor = 1,
      maximumNumber = Infinity,
      maximumValue = Infinity
    } of gradeCategories) {
      let scores = [];
      for (let [doenetId] of sortedAssignments) {
        let inCategory = assignments.contents[doenetId].category;
        if ((inCategory == null ? void 0 : inCategory.toLowerCase()) !== category.toLowerCase()) {
          continue;
        }
        let possiblepoints = assignments.contents[doenetId].totalPointsOrPercent * 1;
        let credit = overview.contents[userId].assignments[doenetId];
        let score = possiblepoints * credit;
        scores.push(score);
        score = Math.round(score * 100) / 100;
        row[doenetId] = /* @__PURE__ */ jsx(
          "a",
          {
            onClick: () => {
              setPageToolView({
                page: "course",
                tool: "gradebookStudentAssignment",
                view: "",
                params: {
                  courseId,
                  doenetId,
                  userId,
                  previousCrumb: "student"
                }
              });
            },
            role: "button",
            children: score
          }
        );
      }
      scores = scores.sort((a, b) => b - a).slice(0, maximumNumber);
      let scaledScore = scores.reduce((a, c) => a + c, 0) * scaleFactor;
      let categoryScore = Math.min(scaledScore, maximumValue);
      totalScore += categoryScore;
      categoryScore = Math.round(categoryScore * 100) / 100;
      row[category] = categoryScore;
    }
    totalScore = Math.round(totalScore * 100) / 100;
    row["course total"] = totalScore;
    overviewTable.rows.push(row);
  }
  return /* @__PURE__ */ jsx(Styles, { children: /* @__PURE__ */ jsx(
    Table,
    {
      columns: overviewTable.headers,
      data: overviewTable.rows
    }
  ) });
}
function Gradebook() {
  return /* @__PURE__ */ jsx(GradebookOverview, {});
}
export {
  Styles,
  Table,
  assignmentData,
  attemptData,
  attemptDataQuery,
  Gradebook as default,
  gradeCategories,
  gradeSorting,
  overviewData,
  overviewDataQuery,
  specificAttemptData,
  studentData,
  studentDataQuery
};
