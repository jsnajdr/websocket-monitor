/* See license.txt for terms of usage */

define(function(require, exports/*, module*/) {

"use strict";

// ReactJS
const React = require("react");

// Constants
const {div, span, code, a } = React.DOM;

/**
 * Used to display a warning if "@mozilla.org/websocketframe/service;1"
 * needed by this extension isn't available on the platform.
 */
var NoServiceWarning = React.createClass({
/** @lends NoServiceWarning */

  displayName: "NoServiceWarning",

  render: function() {
    return (
      div({className: "noServiceWarning"},
        span({}, "Your Firefox doesn't support "),
        code({}, "@mozilla.org/websocketframe/service;1"),
        span({}, " component that is required by this extension. " +
          "You need to install newer Firefox version. If you are unsure " +
          "what to do you might want see the "),
        a({className: "bugLink", target: "_blank",
          href: "https://github.com/firebug/websocket-monitor/wiki"},
          "home page"
        ),
        span({}, ".")
      )
    );
  }
});

// Exports from this module
exports.NoServiceWarning = NoServiceWarning;
});