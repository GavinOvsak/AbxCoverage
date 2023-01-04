
export function clone(from, avoid, to) {
  avoid = avoid || {};
  if (typeof from === "function") return null;
  if (from == null || typeof from != "object") return from;

  if (from.constructor === Array) {
    to = to || from.slice(0);
    for (var i = 0; i < to.length; i++) {
      to[i] = clone(to[i], avoid);
    }
  } else {
    to = to || {};
    for (var name in from) {
      if (name != null && avoid[name] == null) {
        to[name] = typeof to[name] == "undefined" ? clone(from[name], avoid) : to[name];
      }
    }
  }

  return to;
};

export const keys = Object.keys
export const empty = (obj) => Object.keys(obj).length == 0