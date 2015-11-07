/*
 * JS Easing Functions considering only the t (time)
 * t value for the range [0, 1] => [0, 1]
 *
 * Any speed improvement will be great aprettiated!
 *
 * Based in the work of many others
 * http://gizma.com/easing/
 *
 * Carlos Cabo (@putuko) 2015 V.1.00
 * https://github.com/carloscabo/eaze-js
 */

eaze = {
  // No easing, no acceleration
  linear: function (t) { return t },
  lineal: function (t) { return t }, // Alias
  // IN => Accelerating from zero velocity
  in: {
    quad:  function (t) { return t*t },
    cubic: function (t) { return t*t*t },
    quart: function (t) { return t*t*t*t },
    quint: function (t) { return t*t*t*t*t },
    circ:  function (t) { return Math.sqrt(1-t*t)-1 }
  },
  // OUT => Decelerating to zero velocity
  out: {
    quad:  function (t) { return t*(2-t) },
    cubic: function (t) { return (--t)*t*t+1 },
    quart: function (t) { return 1-(--t)*t*t*t },
    quint: function (t) { return 1+(--t)*t*t*t*t },
    circ:  function (t) { return Math.sqrt(1-(--t)*t) }
  },
  // IN_OUT => Acceleration until halfway, then deceleration
  in_out: {
    quad:  function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
    cubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
    quart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
    quint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
  }
}
