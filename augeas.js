!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

$__System.registerDynamic("2", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(process) {
    (function() {
      "use strict";
      function lib$es6$promise$utils$$objectOrFunction(x) {
        return typeof x === 'function' || (typeof x === 'object' && x !== null);
      }
      function lib$es6$promise$utils$$isFunction(x) {
        return typeof x === 'function';
      }
      function lib$es6$promise$utils$$isMaybeThenable(x) {
        return typeof x === 'object' && x !== null;
      }
      var lib$es6$promise$utils$$_isArray;
      if (!Array.isArray) {
        lib$es6$promise$utils$$_isArray = function(x) {
          return Object.prototype.toString.call(x) === '[object Array]';
        };
      } else {
        lib$es6$promise$utils$$_isArray = Array.isArray;
      }
      var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
      var lib$es6$promise$asap$$len = 0;
      var lib$es6$promise$asap$$toString = {}.toString;
      var lib$es6$promise$asap$$vertxNext;
      var lib$es6$promise$asap$$customSchedulerFn;
      var lib$es6$promise$asap$$asap = function asap(callback, arg) {
        lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
        lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
        lib$es6$promise$asap$$len += 2;
        if (lib$es6$promise$asap$$len === 2) {
          if (lib$es6$promise$asap$$customSchedulerFn) {
            lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
          } else {
            lib$es6$promise$asap$$scheduleFlush();
          }
        }
      };
      function lib$es6$promise$asap$$setScheduler(scheduleFn) {
        lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
      }
      function lib$es6$promise$asap$$setAsap(asapFn) {
        lib$es6$promise$asap$$asap = asapFn;
      }
      var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
      var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
      var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
      var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
      var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
      function lib$es6$promise$asap$$useNextTick() {
        var nextTick = process.nextTick;
        var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
        if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
          nextTick = setImmediate;
        }
        return function() {
          nextTick(lib$es6$promise$asap$$flush);
        };
      }
      function lib$es6$promise$asap$$useVertxTimer() {
        return function() {
          lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
        };
      }
      function lib$es6$promise$asap$$useMutationObserver() {
        var iterations = 0;
        var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
        var node = document.createTextNode('');
        observer.observe(node, {characterData: true});
        return function() {
          node.data = (iterations = ++iterations % 2);
        };
      }
      function lib$es6$promise$asap$$useMessageChannel() {
        var channel = new MessageChannel();
        channel.port1.onmessage = lib$es6$promise$asap$$flush;
        return function() {
          channel.port2.postMessage(0);
        };
      }
      function lib$es6$promise$asap$$useSetTimeout() {
        return function() {
          setTimeout(lib$es6$promise$asap$$flush, 1);
        };
      }
      var lib$es6$promise$asap$$queue = new Array(1000);
      function lib$es6$promise$asap$$flush() {
        for (var i = 0; i < lib$es6$promise$asap$$len; i += 2) {
          var callback = lib$es6$promise$asap$$queue[i];
          var arg = lib$es6$promise$asap$$queue[i + 1];
          callback(arg);
          lib$es6$promise$asap$$queue[i] = undefined;
          lib$es6$promise$asap$$queue[i + 1] = undefined;
        }
        lib$es6$promise$asap$$len = 0;
      }
      function lib$es6$promise$asap$$attemptVertex() {
        try {
          var r = $__require;
          var vertx = r('vertx');
          lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
          return lib$es6$promise$asap$$useVertxTimer();
        } catch (e) {
          return lib$es6$promise$asap$$useSetTimeout();
        }
      }
      var lib$es6$promise$asap$$scheduleFlush;
      if (lib$es6$promise$asap$$isNode) {
        lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
      } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
        lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
      } else if (lib$es6$promise$asap$$isWorker) {
        lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
      } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof $__require === 'function') {
        lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertex();
      } else {
        lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
      }
      function lib$es6$promise$$internal$$noop() {}
      var lib$es6$promise$$internal$$PENDING = void 0;
      var lib$es6$promise$$internal$$FULFILLED = 1;
      var lib$es6$promise$$internal$$REJECTED = 2;
      var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
      function lib$es6$promise$$internal$$selfFullfillment() {
        return new TypeError("You cannot resolve a promise with itself");
      }
      function lib$es6$promise$$internal$$cannotReturnOwn() {
        return new TypeError('A promises callback cannot return that same promise.');
      }
      function lib$es6$promise$$internal$$getThen(promise) {
        try {
          return promise.then;
        } catch (error) {
          lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
          return lib$es6$promise$$internal$$GET_THEN_ERROR;
        }
      }
      function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
        try {
          then.call(value, fulfillmentHandler, rejectionHandler);
        } catch (e) {
          return e;
        }
      }
      function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
        lib$es6$promise$asap$$asap(function(promise) {
          var sealed = false;
          var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
            if (sealed) {
              return;
            }
            sealed = true;
            if (thenable !== value) {
              lib$es6$promise$$internal$$resolve(promise, value);
            } else {
              lib$es6$promise$$internal$$fulfill(promise, value);
            }
          }, function(reason) {
            if (sealed) {
              return;
            }
            sealed = true;
            lib$es6$promise$$internal$$reject(promise, reason);
          }, 'Settle: ' + (promise._label || ' unknown promise'));
          if (!sealed && error) {
            sealed = true;
            lib$es6$promise$$internal$$reject(promise, error);
          }
        }, promise);
      }
      function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
        if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
          lib$es6$promise$$internal$$fulfill(promise, thenable._result);
        } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, thenable._result);
        } else {
          lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          }, function(reason) {
            lib$es6$promise$$internal$$reject(promise, reason);
          });
        }
      }
      function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
        if (maybeThenable.constructor === promise.constructor) {
          lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
        } else {
          var then = lib$es6$promise$$internal$$getThen(maybeThenable);
          if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
            lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
          } else if (then === undefined) {
            lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
          } else if (lib$es6$promise$utils$$isFunction(then)) {
            lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
          }
        }
      }
      function lib$es6$promise$$internal$$resolve(promise, value) {
        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFullfillment());
        } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
          lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, value);
        }
      }
      function lib$es6$promise$$internal$$publishRejection(promise) {
        if (promise._onerror) {
          promise._onerror(promise._result);
        }
        lib$es6$promise$$internal$$publish(promise);
      }
      function lib$es6$promise$$internal$$fulfill(promise, value) {
        if (promise._state !== lib$es6$promise$$internal$$PENDING) {
          return;
        }
        promise._result = value;
        promise._state = lib$es6$promise$$internal$$FULFILLED;
        if (promise._subscribers.length !== 0) {
          lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
        }
      }
      function lib$es6$promise$$internal$$reject(promise, reason) {
        if (promise._state !== lib$es6$promise$$internal$$PENDING) {
          return;
        }
        promise._state = lib$es6$promise$$internal$$REJECTED;
        promise._result = reason;
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
      }
      function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
        var subscribers = parent._subscribers;
        var length = subscribers.length;
        parent._onerror = null;
        subscribers[length] = child;
        subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
        subscribers[length + lib$es6$promise$$internal$$REJECTED] = onRejection;
        if (length === 0 && parent._state) {
          lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
        }
      }
      function lib$es6$promise$$internal$$publish(promise) {
        var subscribers = promise._subscribers;
        var settled = promise._state;
        if (subscribers.length === 0) {
          return;
        }
        var child,
            callback,
            detail = promise._result;
        for (var i = 0; i < subscribers.length; i += 3) {
          child = subscribers[i];
          callback = subscribers[i + settled];
          if (child) {
            lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
          } else {
            callback(detail);
          }
        }
        promise._subscribers.length = 0;
      }
      function lib$es6$promise$$internal$$ErrorObject() {
        this.error = null;
      }
      var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
      function lib$es6$promise$$internal$$tryCatch(callback, detail) {
        try {
          return callback(detail);
        } catch (e) {
          lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
          return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
        }
      }
      function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
        var hasCallback = lib$es6$promise$utils$$isFunction(callback),
            value,
            error,
            succeeded,
            failed;
        if (hasCallback) {
          value = lib$es6$promise$$internal$$tryCatch(callback, detail);
          if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
            failed = true;
            error = value.error;
            value = null;
          } else {
            succeeded = true;
          }
          if (promise === value) {
            lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
            return;
          }
        } else {
          value = detail;
          succeeded = true;
        }
        if (promise._state !== lib$es6$promise$$internal$$PENDING) {} else if (hasCallback && succeeded) {
          lib$es6$promise$$internal$$resolve(promise, value);
        } else if (failed) {
          lib$es6$promise$$internal$$reject(promise, error);
        } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
          lib$es6$promise$$internal$$fulfill(promise, value);
        } else if (settled === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        }
      }
      function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
        try {
          resolver(function resolvePromise(value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          }, function rejectPromise(reason) {
            lib$es6$promise$$internal$$reject(promise, reason);
          });
        } catch (e) {
          lib$es6$promise$$internal$$reject(promise, e);
        }
      }
      function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
        var enumerator = this;
        enumerator._instanceConstructor = Constructor;
        enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);
        if (enumerator._validateInput(input)) {
          enumerator._input = input;
          enumerator.length = input.length;
          enumerator._remaining = input.length;
          enumerator._init();
          if (enumerator.length === 0) {
            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
          } else {
            enumerator.length = enumerator.length || 0;
            enumerator._enumerate();
            if (enumerator._remaining === 0) {
              lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
            }
          }
        } else {
          lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
        }
      }
      lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
        return lib$es6$promise$utils$$isArray(input);
      };
      lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
        return new Error('Array Methods must be provided an Array');
      };
      lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
        this._result = new Array(this.length);
      };
      var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
      lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
        var enumerator = this;
        var length = enumerator.length;
        var promise = enumerator.promise;
        var input = enumerator._input;
        for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
          enumerator._eachEntry(input[i], i);
        }
      };
      lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
        var enumerator = this;
        var c = enumerator._instanceConstructor;
        if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
          if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
            entry._onerror = null;
            enumerator._settledAt(entry._state, i, entry._result);
          } else {
            enumerator._willSettleAt(c.resolve(entry), i);
          }
        } else {
          enumerator._remaining--;
          enumerator._result[i] = entry;
        }
      };
      lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
        var enumerator = this;
        var promise = enumerator.promise;
        if (promise._state === lib$es6$promise$$internal$$PENDING) {
          enumerator._remaining--;
          if (state === lib$es6$promise$$internal$$REJECTED) {
            lib$es6$promise$$internal$$reject(promise, value);
          } else {
            enumerator._result[i] = value;
          }
        }
        if (enumerator._remaining === 0) {
          lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
        }
      };
      lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
        var enumerator = this;
        lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
          enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
        }, function(reason) {
          enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
        });
      };
      function lib$es6$promise$promise$all$$all(entries) {
        return new lib$es6$promise$enumerator$$default(this, entries).promise;
      }
      var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
      function lib$es6$promise$promise$race$$race(entries) {
        var Constructor = this;
        var promise = new Constructor(lib$es6$promise$$internal$$noop);
        if (!lib$es6$promise$utils$$isArray(entries)) {
          lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
          return promise;
        }
        var length = entries.length;
        function onFulfillment(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }
        function onRejection(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        }
        for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
          lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
        }
        return promise;
      }
      var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
      function lib$es6$promise$promise$resolve$$resolve(object) {
        var Constructor = this;
        if (object && typeof object === 'object' && object.constructor === Constructor) {
          return object;
        }
        var promise = new Constructor(lib$es6$promise$$internal$$noop);
        lib$es6$promise$$internal$$resolve(promise, object);
        return promise;
      }
      var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
      function lib$es6$promise$promise$reject$$reject(reason) {
        var Constructor = this;
        var promise = new Constructor(lib$es6$promise$$internal$$noop);
        lib$es6$promise$$internal$$reject(promise, reason);
        return promise;
      }
      var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
      var lib$es6$promise$promise$$counter = 0;
      function lib$es6$promise$promise$$needsResolver() {
        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
      }
      function lib$es6$promise$promise$$needsNew() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }
      var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
      function lib$es6$promise$promise$$Promise(resolver) {
        this._id = lib$es6$promise$promise$$counter++;
        this._state = undefined;
        this._result = undefined;
        this._subscribers = [];
        if (lib$es6$promise$$internal$$noop !== resolver) {
          if (!lib$es6$promise$utils$$isFunction(resolver)) {
            lib$es6$promise$promise$$needsResolver();
          }
          if (!(this instanceof lib$es6$promise$promise$$Promise)) {
            lib$es6$promise$promise$$needsNew();
          }
          lib$es6$promise$$internal$$initializePromise(this, resolver);
        }
      }
      lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
      lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
      lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
      lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
      lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
      lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
      lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
      lib$es6$promise$promise$$Promise.prototype = {
        constructor: lib$es6$promise$promise$$Promise,
        then: function(onFulfillment, onRejection) {
          var parent = this;
          var state = parent._state;
          if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
            return this;
          }
          var child = new this.constructor(lib$es6$promise$$internal$$noop);
          var result = parent._result;
          if (state) {
            var callback = arguments[state - 1];
            lib$es6$promise$asap$$asap(function() {
              lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
            });
          } else {
            lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
          }
          return child;
        },
        'catch': function(onRejection) {
          return this.then(null, onRejection);
        }
      };
      function lib$es6$promise$polyfill$$polyfill() {
        var local;
        if (typeof global !== 'undefined') {
          local = global;
        } else if (typeof self !== 'undefined') {
          local = self;
        } else {
          try {
            local = Function('return this')();
          } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
          }
        }
        var P = local.Promise;
        if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
          return;
        }
        local.Promise = lib$es6$promise$promise$$default;
      }
      var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
      var lib$es6$promise$umd$$ES6Promise = {
        'Promise': lib$es6$promise$promise$$default,
        'polyfill': lib$es6$promise$polyfill$$default
      };
      if (typeof define === 'function' && define['amd']) {
        define(function() {
          return lib$es6$promise$umd$$ES6Promise;
        });
      } else if (typeof module !== 'undefined' && module['exports']) {
        module['exports'] = lib$es6$promise$umd$$ES6Promise;
      } else if (typeof this !== 'undefined') {
        this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
      }
      lib$es6$promise$polyfill$$default();
    }).call(this);
  })($__require('3'));
  return module.exports;
});

$__System.registerDynamic("4", ["2"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2');
  return module.exports;
});

$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  return module.exports;
});

$__System.registerDynamic("6", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  (function() {
    try {
      cachedSetTimeout = setTimeout;
    } catch (e) {
      cachedSetTimeout = function() {
        throw new Error('setTimeout is not defined');
      };
    }
    try {
      cachedClearTimeout = clearTimeout;
    } catch (e) {
      cachedClearTimeout = function() {
        throw new Error('clearTimeout is not defined');
      };
    }
  }());
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = cachedSetTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      cachedSetTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("7", ["6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('6');
  return module.exports;
});

$__System.registerDynamic("8", ["7"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('7');
  return module.exports;
});

$__System.registerDynamic("3", ["8"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('8');
  return module.exports;
});

$__System.registerDynamic("9", ["4", "5", "3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __filename = 'jspm_packages\npm\jsonld@0.4.11\js\jsonld.js',
      __dirname = '';
  "format cjs";
  (function(process) {
    (function() {
      var _nodejs = (typeof process !== 'undefined' && process.versions && process.versions.node);
      var _browser = !_nodejs && (typeof window !== 'undefined' || typeof self !== 'undefined');
      if (_browser) {
        if (typeof global === 'undefined') {
          if (typeof window !== 'undefined') {
            global = window;
          } else if (typeof self !== 'undefined') {
            global = self;
          } else if (typeof $ !== 'undefined') {
            global = $;
          }
        }
      }
      var wrapper = function(jsonld) {
        jsonld.compact = function(input, ctx, options, callback) {
          if (arguments.length < 2) {
            return jsonld.nextTick(function() {
              callback(new TypeError('Could not compact, too few arguments.'));
            });
          }
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          if (ctx === null) {
            return jsonld.nextTick(function() {
              callback(new JsonLdError('The compaction context must not be null.', 'jsonld.CompactError', {code: 'invalid local context'}));
            });
          }
          if (input === null) {
            return jsonld.nextTick(function() {
              callback(null, null);
            });
          }
          if (!('base' in options)) {
            options.base = (typeof input === 'string') ? input : '';
          }
          if (!('compactArrays' in options)) {
            options.compactArrays = true;
          }
          if (!('graph' in options)) {
            options.graph = false;
          }
          if (!('skipExpansion' in options)) {
            options.skipExpansion = false;
          }
          if (!('documentLoader' in options)) {
            options.documentLoader = jsonld.loadDocument;
          }
          if (!('link' in options)) {
            options.link = false;
          }
          if (options.link) {
            options.skipExpansion = true;
          }
          var expand = function(input, options, callback) {
            if (options.skipExpansion) {
              return jsonld.nextTick(function() {
                callback(null, input);
              });
            }
            jsonld.expand(input, options, callback);
          };
          expand(input, options, function(err, expanded) {
            if (err) {
              return callback(new JsonLdError('Could not expand input before compaction.', 'jsonld.CompactError', {cause: err}));
            }
            var activeCtx = _getInitialContext(options);
            jsonld.processContext(activeCtx, ctx, options, function(err, activeCtx) {
              if (err) {
                return callback(new JsonLdError('Could not process context before compaction.', 'jsonld.CompactError', {cause: err}));
              }
              var compacted;
              try {
                compacted = new Processor().compact(activeCtx, null, expanded, options);
              } catch (ex) {
                return callback(ex);
              }
              cleanup(null, compacted, activeCtx, options);
            });
          });
          function cleanup(err, compacted, activeCtx, options) {
            if (err) {
              return callback(err);
            }
            if (options.compactArrays && !options.graph && _isArray(compacted)) {
              if (compacted.length === 1) {
                compacted = compacted[0];
              } else if (compacted.length === 0) {
                compacted = {};
              }
            } else if (options.graph && _isObject(compacted)) {
              compacted = [compacted];
            }
            if (_isObject(ctx) && '@context' in ctx) {
              ctx = ctx['@context'];
            }
            ctx = _clone(ctx);
            if (!_isArray(ctx)) {
              ctx = [ctx];
            }
            var tmp = ctx;
            ctx = [];
            for (var i = 0; i < tmp.length; ++i) {
              if (!_isObject(tmp[i]) || Object.keys(tmp[i]).length > 0) {
                ctx.push(tmp[i]);
              }
            }
            var hasContext = (ctx.length > 0);
            if (ctx.length === 1) {
              ctx = ctx[0];
            }
            if (_isArray(compacted)) {
              var kwgraph = _compactIri(activeCtx, '@graph');
              var graph = compacted;
              compacted = {};
              if (hasContext) {
                compacted['@context'] = ctx;
              }
              compacted[kwgraph] = graph;
            } else if (_isObject(compacted) && hasContext) {
              var graph = compacted;
              compacted = {'@context': ctx};
              for (var key in graph) {
                compacted[key] = graph[key];
              }
            }
            callback(null, compacted, activeCtx);
          }
        };
        jsonld.expand = function(input, options, callback) {
          if (arguments.length < 1) {
            return jsonld.nextTick(function() {
              callback(new TypeError('Could not expand, too few arguments.'));
            });
          }
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          if (!('documentLoader' in options)) {
            options.documentLoader = jsonld.loadDocument;
          }
          if (!('keepFreeFloatingNodes' in options)) {
            options.keepFreeFloatingNodes = false;
          }
          jsonld.nextTick(function() {
            if (typeof input === 'string') {
              var done = function(err, remoteDoc) {
                if (err) {
                  return callback(err);
                }
                try {
                  if (!remoteDoc.document) {
                    throw new JsonLdError('No remote document found at the given URL.', 'jsonld.NullRemoteDocument');
                  }
                  if (typeof remoteDoc.document === 'string') {
                    remoteDoc.document = JSON.parse(remoteDoc.document);
                  }
                } catch (ex) {
                  return callback(new JsonLdError('Could not retrieve a JSON-LD document from the URL. URL ' + 'dereferencing not implemented.', 'jsonld.LoadDocumentError', {
                    code: 'loading document failed',
                    cause: ex,
                    remoteDoc: remoteDoc
                  }));
                }
                expand(remoteDoc);
              };
              var promise = options.documentLoader(input, done);
              if (promise && 'then' in promise) {
                promise.then(done.bind(null, null), done);
              }
              return;
            }
            expand({
              contextUrl: null,
              documentUrl: null,
              document: input
            });
          });
          function expand(remoteDoc) {
            if (!('base' in options)) {
              options.base = remoteDoc.documentUrl || '';
            }
            var input = {
              document: _clone(remoteDoc.document),
              remoteContext: {'@context': remoteDoc.contextUrl}
            };
            if ('expandContext' in options) {
              var expandContext = _clone(options.expandContext);
              if (typeof expandContext === 'object' && '@context' in expandContext) {
                input.expandContext = expandContext;
              } else {
                input.expandContext = {'@context': expandContext};
              }
            }
            _retrieveContextUrls(input, options, function(err, input) {
              if (err) {
                return callback(err);
              }
              var expanded;
              try {
                var processor = new Processor();
                var activeCtx = _getInitialContext(options);
                var document = input.document;
                var remoteContext = input.remoteContext['@context'];
                if (input.expandContext) {
                  activeCtx = processor.processContext(activeCtx, input.expandContext['@context'], options);
                }
                if (remoteContext) {
                  activeCtx = processor.processContext(activeCtx, remoteContext, options);
                }
                expanded = processor.expand(activeCtx, null, document, options, false);
                if (_isObject(expanded) && ('@graph' in expanded) && Object.keys(expanded).length === 1) {
                  expanded = expanded['@graph'];
                } else if (expanded === null) {
                  expanded = [];
                }
                if (!_isArray(expanded)) {
                  expanded = [expanded];
                }
              } catch (ex) {
                return callback(ex);
              }
              callback(null, expanded);
            });
          }
        };
        jsonld.flatten = function(input, ctx, options, callback) {
          if (arguments.length < 1) {
            return jsonld.nextTick(function() {
              callback(new TypeError('Could not flatten, too few arguments.'));
            });
          }
          if (typeof options === 'function') {
            callback = options;
            options = {};
          } else if (typeof ctx === 'function') {
            callback = ctx;
            ctx = null;
            options = {};
          }
          options = options || {};
          if (!('base' in options)) {
            options.base = (typeof input === 'string') ? input : '';
          }
          if (!('documentLoader' in options)) {
            options.documentLoader = jsonld.loadDocument;
          }
          jsonld.expand(input, options, function(err, _input) {
            if (err) {
              return callback(new JsonLdError('Could not expand input before flattening.', 'jsonld.FlattenError', {cause: err}));
            }
            var flattened;
            try {
              flattened = new Processor().flatten(_input);
            } catch (ex) {
              return callback(ex);
            }
            if (ctx === null) {
              return callback(null, flattened);
            }
            options.graph = true;
            options.skipExpansion = true;
            jsonld.compact(flattened, ctx, options, function(err, compacted) {
              if (err) {
                return callback(new JsonLdError('Could not compact flattened output.', 'jsonld.FlattenError', {cause: err}));
              }
              callback(null, compacted);
            });
          });
        };
        jsonld.frame = function(input, frame, options, callback) {
          if (arguments.length < 2) {
            return jsonld.nextTick(function() {
              callback(new TypeError('Could not frame, too few arguments.'));
            });
          }
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          if (!('base' in options)) {
            options.base = (typeof input === 'string') ? input : '';
          }
          if (!('documentLoader' in options)) {
            options.documentLoader = jsonld.loadDocument;
          }
          if (!('embed' in options)) {
            options.embed = '@last';
          }
          options.explicit = options.explicit || false;
          if (!('requireAll' in options)) {
            options.requireAll = true;
          }
          options.omitDefault = options.omitDefault || false;
          jsonld.nextTick(function() {
            if (typeof frame === 'string') {
              var done = function(err, remoteDoc) {
                if (err) {
                  return callback(err);
                }
                try {
                  if (!remoteDoc.document) {
                    throw new JsonLdError('No remote document found at the given URL.', 'jsonld.NullRemoteDocument');
                  }
                  if (typeof remoteDoc.document === 'string') {
                    remoteDoc.document = JSON.parse(remoteDoc.document);
                  }
                } catch (ex) {
                  return callback(new JsonLdError('Could not retrieve a JSON-LD document from the URL. URL ' + 'dereferencing not implemented.', 'jsonld.LoadDocumentError', {
                    code: 'loading document failed',
                    cause: ex,
                    remoteDoc: remoteDoc
                  }));
                }
                doFrame(remoteDoc);
              };
              var promise = options.documentLoader(frame, done);
              if (promise && 'then' in promise) {
                promise.then(done.bind(null, null), done);
              }
              return;
            }
            doFrame({
              contextUrl: null,
              documentUrl: null,
              document: frame
            });
          });
          function doFrame(remoteFrame) {
            var frame = remoteFrame.document;
            var ctx;
            if (frame) {
              ctx = frame['@context'];
              if (remoteFrame.contextUrl) {
                if (!ctx) {
                  ctx = remoteFrame.contextUrl;
                } else if (_isArray(ctx)) {
                  ctx.push(remoteFrame.contextUrl);
                } else {
                  ctx = [ctx, remoteFrame.contextUrl];
                }
                frame['@context'] = ctx;
              } else {
                ctx = ctx || {};
              }
            } else {
              ctx = {};
            }
            jsonld.expand(input, options, function(err, expanded) {
              if (err) {
                return callback(new JsonLdError('Could not expand input before framing.', 'jsonld.FrameError', {cause: err}));
              }
              var opts = _clone(options);
              opts.isFrame = true;
              opts.keepFreeFloatingNodes = true;
              jsonld.expand(frame, opts, function(err, expandedFrame) {
                if (err) {
                  return callback(new JsonLdError('Could not expand frame before framing.', 'jsonld.FrameError', {cause: err}));
                }
                var framed;
                try {
                  framed = new Processor().frame(expanded, expandedFrame, opts);
                } catch (ex) {
                  return callback(ex);
                }
                opts.graph = true;
                opts.skipExpansion = true;
                opts.link = {};
                jsonld.compact(framed, ctx, opts, function(err, compacted, ctx) {
                  if (err) {
                    return callback(new JsonLdError('Could not compact framed output.', 'jsonld.FrameError', {cause: err}));
                  }
                  var graph = _compactIri(ctx, '@graph');
                  opts.link = {};
                  compacted[graph] = _removePreserve(ctx, compacted[graph], opts);
                  callback(null, compacted);
                });
              });
            });
          }
        };
        jsonld.link = function(input, ctx, options, callback) {
          var frame = {};
          if (ctx) {
            frame['@context'] = ctx;
          }
          frame['@embed'] = '@link';
          jsonld.frame(input, frame, options, callback);
        };
        jsonld.objectify = function(input, ctx, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          if (!('base' in options)) {
            options.base = (typeof input === 'string') ? input : '';
          }
          if (!('documentLoader' in options)) {
            options.documentLoader = jsonld.loadDocument;
          }
          jsonld.expand(input, options, function(err, _input) {
            if (err) {
              return callback(new JsonLdError('Could not expand input before linking.', 'jsonld.LinkError', {cause: err}));
            }
            var flattened;
            try {
              flattened = new Processor().flatten(_input);
            } catch (ex) {
              return callback(ex);
            }
            options.graph = true;
            options.skipExpansion = true;
            jsonld.compact(flattened, ctx, options, function(err, compacted, ctx) {
              if (err) {
                return callback(new JsonLdError('Could not compact flattened output before linking.', 'jsonld.LinkError', {cause: err}));
              }
              var graph = _compactIri(ctx, '@graph');
              var top = compacted[graph][0];
              var recurse = function(subject) {
                if (!_isObject(subject) && !_isArray(subject)) {
                  return;
                }
                if (_isObject(subject)) {
                  if (recurse.visited[subject['@id']]) {
                    return;
                  }
                  recurse.visited[subject['@id']] = true;
                }
                for (var k in subject) {
                  var obj = subject[k];
                  var isid = (jsonld.getContextValue(ctx, k, '@type') === '@id');
                  if (!_isArray(obj) && !_isObject(obj) && !isid) {
                    continue;
                  }
                  if (_isString(obj) && isid) {
                    subject[k] = obj = top[obj];
                    recurse(obj);
                  } else if (_isArray(obj)) {
                    for (var i = 0; i < obj.length; ++i) {
                      if (_isString(obj[i]) && isid) {
                        obj[i] = top[obj[i]];
                      } else if (_isObject(obj[i]) && '@id' in obj[i]) {
                        obj[i] = top[obj[i]['@id']];
                      }
                      recurse(obj[i]);
                    }
                  } else if (_isObject(obj)) {
                    var sid = obj['@id'];
                    subject[k] = obj = top[sid];
                    recurse(obj);
                  }
                }
              };
              recurse.visited = {};
              recurse(top);
              compacted.of_type = {};
              for (var s in top) {
                if (!('@type' in top[s])) {
                  continue;
                }
                var types = top[s]['@type'];
                if (!_isArray(types)) {
                  types = [types];
                }
                for (var t = 0; t < types.length; ++t) {
                  if (!(types[t] in compacted.of_type)) {
                    compacted.of_type[types[t]] = [];
                  }
                  compacted.of_type[types[t]].push(top[s]);
                }
              }
              callback(null, compacted);
            });
          });
        };
        jsonld.normalize = function(input, options, callback) {
          if (arguments.length < 1) {
            return jsonld.nextTick(function() {
              callback(new TypeError('Could not normalize, too few arguments.'));
            });
          }
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          if (!('algorithm' in options)) {
            options.algorithm = 'URGNA2012';
          }
          if (!('base' in options)) {
            options.base = (typeof input === 'string') ? input : '';
          }
          if (!('documentLoader' in options)) {
            options.documentLoader = jsonld.loadDocument;
          }
          if ('inputFormat' in options) {
            if (options.inputFormat !== 'application/nquads') {
              return callback(new JsonLdError('Unknown normalization input format.', 'jsonld.NormalizeError'));
            }
            var parsedInput = _parseNQuads(input);
            new Processor().normalize(parsedInput, options, callback);
          } else {
            var opts = _clone(options);
            delete opts.format;
            opts.produceGeneralizedRdf = false;
            jsonld.toRDF(input, opts, function(err, dataset) {
              if (err) {
                return callback(new JsonLdError('Could not convert input to RDF dataset before normalization.', 'jsonld.NormalizeError', {cause: err}));
              }
              new Processor().normalize(dataset, options, callback);
            });
          }
        };
        jsonld.fromRDF = function(dataset, options, callback) {
          if (arguments.length < 1) {
            return jsonld.nextTick(function() {
              callback(new TypeError('Could not convert from RDF, too few arguments.'));
            });
          }
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          if (!('useRdfType' in options)) {
            options.useRdfType = false;
          }
          if (!('useNativeTypes' in options)) {
            options.useNativeTypes = false;
          }
          if (!('format' in options) && _isString(dataset)) {
            if (!('format' in options)) {
              options.format = 'application/nquads';
            }
          }
          jsonld.nextTick(function() {
            var rdfParser;
            if (options.format) {
              rdfParser = options.rdfParser || _rdfParsers[options.format];
              if (!rdfParser) {
                return callback(new JsonLdError('Unknown input format.', 'jsonld.UnknownFormat', {format: options.format}));
              }
            } else {
              rdfParser = function() {
                return dataset;
              };
            }
            var callbackCalled = false;
            try {
              dataset = rdfParser(dataset, function(err, dataset) {
                callbackCalled = true;
                if (err) {
                  return callback(err);
                }
                fromRDF(dataset, options, callback);
              });
            } catch (e) {
              if (!callbackCalled) {
                return callback(e);
              }
              throw e;
            }
            if (dataset) {
              if ('then' in dataset) {
                return dataset.then(function(dataset) {
                  fromRDF(dataset, options, callback);
                }, callback);
              }
              fromRDF(dataset, options, callback);
            }
            function fromRDF(dataset, options, callback) {
              new Processor().fromRDF(dataset, options, callback);
            }
          });
        };
        jsonld.toRDF = function(input, options, callback) {
          if (arguments.length < 1) {
            return jsonld.nextTick(function() {
              callback(new TypeError('Could not convert to RDF, too few arguments.'));
            });
          }
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          if (!('base' in options)) {
            options.base = (typeof input === 'string') ? input : '';
          }
          if (!('documentLoader' in options)) {
            options.documentLoader = jsonld.loadDocument;
          }
          jsonld.expand(input, options, function(err, expanded) {
            if (err) {
              return callback(new JsonLdError('Could not expand input before serialization to RDF.', 'jsonld.RdfError', {cause: err}));
            }
            var dataset;
            try {
              dataset = Processor.prototype.toRDF(expanded, options);
              if (options.format) {
                if (options.format === 'application/nquads') {
                  return callback(null, _toNQuads(dataset));
                }
                throw new JsonLdError('Unknown output format.', 'jsonld.UnknownFormat', {format: options.format});
              }
            } catch (ex) {
              return callback(ex);
            }
            callback(null, dataset);
          });
        };
        jsonld.createNodeMap = function(input, options, callback) {
          if (arguments.length < 1) {
            return jsonld.nextTick(function() {
              callback(new TypeError('Could not create node map, too few arguments.'));
            });
          }
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          if (!('base' in options)) {
            options.base = (typeof input === 'string') ? input : '';
          }
          if (!('documentLoader' in options)) {
            options.documentLoader = jsonld.loadDocument;
          }
          jsonld.expand(input, options, function(err, _input) {
            if (err) {
              return callback(new JsonLdError('Could not expand input before creating node map.', 'jsonld.CreateNodeMapError', {cause: err}));
            }
            var nodeMap;
            try {
              nodeMap = new Processor().createNodeMap(_input, options);
            } catch (ex) {
              return callback(ex);
            }
            callback(null, nodeMap);
          });
        };
        jsonld.merge = function(docs, ctx, options, callback) {
          if (arguments.length < 1) {
            return jsonld.nextTick(function() {
              callback(new TypeError('Could not merge, too few arguments.'));
            });
          }
          if (!_isArray(docs)) {
            return jsonld.nextTick(function() {
              callback(new TypeError('Could not merge, "docs" must be an array.'));
            });
          }
          if (typeof options === 'function') {
            callback = options;
            options = {};
          } else if (typeof ctx === 'function') {
            callback = ctx;
            ctx = null;
            options = {};
          }
          options = options || {};
          var expanded = [];
          var error = null;
          var count = docs.length;
          for (var i = 0; i < docs.length; ++i) {
            var opts = {};
            for (var key in options) {
              opts[key] = options[key];
            }
            jsonld.expand(docs[i], opts, expandComplete);
          }
          function expandComplete(err, _input) {
            if (error) {
              return;
            }
            if (err) {
              error = err;
              return callback(new JsonLdError('Could not expand input before flattening.', 'jsonld.FlattenError', {cause: err}));
            }
            expanded.push(_input);
            if (--count === 0) {
              merge(expanded);
            }
          }
          function merge(expanded) {
            var mergeNodes = true;
            if ('mergeNodes' in options) {
              mergeNodes = options.mergeNodes;
            }
            var issuer = options.namer || options.issuer || new IdentifierIssuer('_:b');
            var graphs = {'@default': {}};
            var defaultGraph;
            try {
              for (var i = 0; i < expanded.length; ++i) {
                var doc = expanded[i];
                doc = jsonld.relabelBlankNodes(doc, {issuer: new IdentifierIssuer('_:b' + i + '-')});
                var _graphs = (mergeNodes || i === 0) ? graphs : {'@default': {}};
                _createNodeMap(doc, _graphs, '@default', issuer);
                if (_graphs !== graphs) {
                  for (var graphName in _graphs) {
                    var _nodeMap = _graphs[graphName];
                    if (!(graphName in graphs)) {
                      graphs[graphName] = _nodeMap;
                      continue;
                    }
                    var nodeMap = graphs[graphName];
                    for (var key in _nodeMap) {
                      if (!(key in nodeMap)) {
                        nodeMap[key] = _nodeMap[key];
                      }
                    }
                  }
                }
              }
              defaultGraph = _mergeNodeMaps(graphs);
            } catch (ex) {
              return callback(ex);
            }
            var flattened = [];
            var keys = Object.keys(defaultGraph).sort();
            for (var ki = 0; ki < keys.length; ++ki) {
              var node = defaultGraph[keys[ki]];
              if (!_isSubjectReference(node)) {
                flattened.push(node);
              }
            }
            if (ctx === null) {
              return callback(null, flattened);
            }
            options.graph = true;
            options.skipExpansion = true;
            jsonld.compact(flattened, ctx, options, function(err, compacted) {
              if (err) {
                return callback(new JsonLdError('Could not compact merged output.', 'jsonld.MergeError', {cause: err}));
              }
              callback(null, compacted);
            });
          }
        };
        jsonld.relabelBlankNodes = function(input, options) {
          options = options || {};
          var issuer = options.namer || options.issuer || new IdentifierIssuer('_:b');
          return _labelBlankNodes(issuer, input);
        };
        jsonld.prependBase = function(base, iri) {
          return _prependBase(base, iri);
        };
        jsonld.documentLoader = function(url, callback) {
          var err = new JsonLdError('Could not retrieve a JSON-LD document from the URL. URL ' + 'dereferencing not implemented.', 'jsonld.LoadDocumentError', {code: 'loading document failed'});
          if (_nodejs) {
            return callback(err, {
              contextUrl: null,
              documentUrl: url,
              document: null
            });
          }
          return jsonld.promisify(function(callback) {
            callback(err);
          });
        };
        jsonld.loadDocument = function(url, callback) {
          var promise = jsonld.documentLoader(url, callback);
          if (promise && 'then' in promise) {
            promise.then(callback.bind(null, null), callback);
          }
        };
        jsonld.promises = function(options) {
          options = options || {};
          var slice = Array.prototype.slice;
          var promisify = jsonld.promisify;
          var api = options.api || {};
          var version = options.version || 'jsonld.js';
          if (typeof options.api === 'string') {
            if (!options.version) {
              version = options.api;
            }
            api = {};
          }
          api.expand = function(input) {
            if (arguments.length < 1) {
              throw new TypeError('Could not expand, too few arguments.');
            }
            return promisify.apply(null, [jsonld.expand].concat(slice.call(arguments)));
          };
          api.compact = function(input, ctx) {
            if (arguments.length < 2) {
              throw new TypeError('Could not compact, too few arguments.');
            }
            var compact = function(input, ctx, options, callback) {
              jsonld.compact(input, ctx, options, function(err, compacted) {
                callback(err, compacted);
              });
            };
            return promisify.apply(null, [compact].concat(slice.call(arguments)));
          };
          api.flatten = function(input) {
            if (arguments.length < 1) {
              throw new TypeError('Could not flatten, too few arguments.');
            }
            return promisify.apply(null, [jsonld.flatten].concat(slice.call(arguments)));
          };
          api.frame = function(input, frame) {
            if (arguments.length < 2) {
              throw new TypeError('Could not frame, too few arguments.');
            }
            return promisify.apply(null, [jsonld.frame].concat(slice.call(arguments)));
          };
          api.fromRDF = function(dataset) {
            if (arguments.length < 1) {
              throw new TypeError('Could not convert from RDF, too few arguments.');
            }
            return promisify.apply(null, [jsonld.fromRDF].concat(slice.call(arguments)));
          };
          api.toRDF = function(input) {
            if (arguments.length < 1) {
              throw new TypeError('Could not convert to RDF, too few arguments.');
            }
            return promisify.apply(null, [jsonld.toRDF].concat(slice.call(arguments)));
          };
          api.normalize = function(input) {
            if (arguments.length < 1) {
              throw new TypeError('Could not normalize, too few arguments.');
            }
            return promisify.apply(null, [jsonld.normalize].concat(slice.call(arguments)));
          };
          if (version === 'jsonld.js') {
            api.link = function(input, ctx) {
              if (arguments.length < 2) {
                throw new TypeError('Could not link, too few arguments.');
              }
              return promisify.apply(null, [jsonld.link].concat(slice.call(arguments)));
            };
            api.objectify = function(input) {
              return promisify.apply(null, [jsonld.objectify].concat(slice.call(arguments)));
            };
            api.createNodeMap = function(input) {
              return promisify.apply(null, [jsonld.createNodeMap].concat(slice.call(arguments)));
            };
            api.merge = function(input) {
              return promisify.apply(null, [jsonld.merge].concat(slice.call(arguments)));
            };
          }
          try {
            jsonld.Promise = global.Promise || $__require('4').Promise;
          } catch (e) {
            var f = function() {
              throw new Error('Unable to find a Promise implementation.');
            };
            for (var method in api) {
              api[method] = f;
            }
          }
          return api;
        };
        jsonld.promisify = function(op) {
          if (!jsonld.Promise) {
            try {
              jsonld.Promise = global.Promise || $__require('4').Promise;
            } catch (e) {
              throw new Error('Unable to find a Promise implementation.');
            }
          }
          var args = Array.prototype.slice.call(arguments, 1);
          return new jsonld.Promise(function(resolve, reject) {
            op.apply(null, args.concat(function(err, value) {
              if (!err) {
                resolve(value);
              } else {
                reject(err);
              }
            }));
          });
        };
        jsonld.promises({api: jsonld.promises});
        function JsonLdProcessor() {}
        JsonLdProcessor.prototype = jsonld.promises({version: 'json-ld-1.0'});
        JsonLdProcessor.prototype.toString = function() {
          if (this instanceof JsonLdProcessor) {
            return '[object JsonLdProcessor]';
          }
          return '[object JsonLdProcessorPrototype]';
        };
        jsonld.JsonLdProcessor = JsonLdProcessor;
        var canDefineProperty = !!Object.defineProperty;
        if (canDefineProperty) {
          try {
            Object.defineProperty({}, 'x', {});
          } catch (e) {
            canDefineProperty = false;
          }
        }
        if (canDefineProperty) {
          Object.defineProperty(JsonLdProcessor, 'prototype', {
            writable: false,
            enumerable: false
          });
          Object.defineProperty(JsonLdProcessor.prototype, 'constructor', {
            writable: true,
            enumerable: false,
            configurable: true,
            value: JsonLdProcessor
          });
        }
        if (_browser && typeof global.JsonLdProcessor === 'undefined') {
          if (canDefineProperty) {
            Object.defineProperty(global, 'JsonLdProcessor', {
              writable: true,
              enumerable: false,
              configurable: true,
              value: JsonLdProcessor
            });
          } else {
            global.JsonLdProcessor = JsonLdProcessor;
          }
        }
        var _setImmediate = typeof setImmediate === 'function' && setImmediate;
        var _delay = _setImmediate ? function(fn) {
          _setImmediate(fn);
        } : function(fn) {
          setTimeout(fn, 0);
        };
        if (typeof process === 'object' && typeof process.nextTick === 'function') {
          jsonld.nextTick = process.nextTick;
        } else {
          jsonld.nextTick = _delay;
        }
        jsonld.setImmediate = _setImmediate ? _delay : jsonld.nextTick;
        jsonld.parseLinkHeader = function(header) {
          var rval = {};
          var entries = header.match(/(?:<[^>]*?>|"[^"]*?"|[^,])+/g);
          var rLinkHeader = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/;
          for (var i = 0; i < entries.length; ++i) {
            var match = entries[i].match(rLinkHeader);
            if (!match) {
              continue;
            }
            var result = {target: match[1]};
            var params = match[2];
            var rParams = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g;
            while (match = rParams.exec(params)) {
              result[match[1]] = (match[2] === undefined) ? match[3] : match[2];
            }
            var rel = result['rel'] || '';
            if (_isArray(rval[rel])) {
              rval[rel].push(result);
            } else if (rel in rval) {
              rval[rel] = [rval[rel], result];
            } else {
              rval[rel] = result;
            }
          }
          return rval;
        };
        jsonld.RequestQueue = function() {
          this._requests = {};
        };
        jsonld.RequestQueue.prototype.wrapLoader = function(loader) {
          this._loader = loader;
          this._usePromise = (loader.length === 1);
          return this.add.bind(this);
        };
        jsonld.RequestQueue.prototype.add = function(url, callback) {
          var self = this;
          if (!callback && !self._usePromise) {
            throw new Error('callback must be specified.');
          }
          if (self._usePromise) {
            return new jsonld.Promise(function(resolve, reject) {
              var load = self._requests[url];
              if (!load) {
                load = self._requests[url] = self._loader(url).then(function(remoteDoc) {
                  delete self._requests[url];
                  return remoteDoc;
                }).catch(function(err) {
                  delete self._requests[url];
                  throw err;
                });
              }
              load.then(function(remoteDoc) {
                resolve(remoteDoc);
              }).catch(function(err) {
                reject(err);
              });
            });
          }
          if (url in self._requests) {
            self._requests[url].push(callback);
          } else {
            self._requests[url] = [callback];
            self._loader(url, function(err, remoteDoc) {
              var callbacks = self._requests[url];
              delete self._requests[url];
              for (var i = 0; i < callbacks.length; ++i) {
                callbacks[i](err, remoteDoc);
              }
            });
          }
        };
        jsonld.DocumentCache = function(size) {
          this.order = [];
          this.cache = {};
          this.size = size || 50;
          this.expires = 30 * 1000;
        };
        jsonld.DocumentCache.prototype.get = function(url) {
          if (url in this.cache) {
            var entry = this.cache[url];
            if (entry.expires >= +new Date()) {
              return entry.ctx;
            }
            delete this.cache[url];
            this.order.splice(this.order.indexOf(url), 1);
          }
          return null;
        };
        jsonld.DocumentCache.prototype.set = function(url, ctx) {
          if (this.order.length === this.size) {
            delete this.cache[this.order.shift()];
          }
          this.order.push(url);
          this.cache[url] = {
            ctx: ctx,
            expires: (+new Date() + this.expires)
          };
        };
        jsonld.ActiveContextCache = function(size) {
          this.order = [];
          this.cache = {};
          this.size = size || 100;
        };
        jsonld.ActiveContextCache.prototype.get = function(activeCtx, localCtx) {
          var key1 = JSON.stringify(activeCtx);
          var key2 = JSON.stringify(localCtx);
          var level1 = this.cache[key1];
          if (level1 && key2 in level1) {
            return level1[key2];
          }
          return null;
        };
        jsonld.ActiveContextCache.prototype.set = function(activeCtx, localCtx, result) {
          if (this.order.length === this.size) {
            var entry = this.order.shift();
            delete this.cache[entry.activeCtx][entry.localCtx];
          }
          var key1 = JSON.stringify(activeCtx);
          var key2 = JSON.stringify(localCtx);
          this.order.push({
            activeCtx: key1,
            localCtx: key2
          });
          if (!(key1 in this.cache)) {
            this.cache[key1] = {};
          }
          this.cache[key1][key2] = _clone(result);
        };
        jsonld.cache = {activeCtx: new jsonld.ActiveContextCache()};
        jsonld.documentLoaders = {};
        jsonld.documentLoaders.jquery = function($, options) {
          options = options || {};
          var queue = new jsonld.RequestQueue();
          var usePromise = ('usePromise' in options ? options.usePromise : (typeof Promise !== 'undefined'));
          if (usePromise) {
            return queue.wrapLoader(function(url) {
              return jsonld.promisify(loader, url);
            });
          }
          return queue.wrapLoader(loader);
          function loader(url, callback) {
            if (url.indexOf('http:') !== 0 && url.indexOf('https:') !== 0) {
              return callback(new JsonLdError('URL could not be dereferenced; only "http" and "https" URLs are ' + 'supported.', 'jsonld.InvalidUrl', {
                code: 'loading document failed',
                url: url
              }), {
                contextUrl: null,
                documentUrl: url,
                document: null
              });
            }
            if (options.secure && url.indexOf('https') !== 0) {
              return callback(new JsonLdError('URL could not be dereferenced; secure mode is enabled and ' + 'the URL\'s scheme is not "https".', 'jsonld.InvalidUrl', {
                code: 'loading document failed',
                url: url
              }), {
                contextUrl: null,
                documentUrl: url,
                document: null
              });
            }
            $.ajax({
              url: url,
              accepts: {json: 'application/ld+json, application/json'},
              headers: {'Accept': 'application/ld+json, application/json'},
              dataType: 'json',
              crossDomain: true,
              success: function(data, textStatus, jqXHR) {
                var doc = {
                  contextUrl: null,
                  documentUrl: url,
                  document: data
                };
                var contentType = jqXHR.getResponseHeader('Content-Type');
                var linkHeader = jqXHR.getResponseHeader('Link');
                if (linkHeader && contentType !== 'application/ld+json') {
                  linkHeader = jsonld.parseLinkHeader(linkHeader)[LINK_HEADER_REL];
                  if (_isArray(linkHeader)) {
                    return callback(new JsonLdError('URL could not be dereferenced, it has more than one ' + 'associated HTTP Link Header.', 'jsonld.InvalidUrl', {
                      code: 'multiple context link headers',
                      url: url
                    }), doc);
                  }
                  if (linkHeader) {
                    doc.contextUrl = linkHeader.target;
                  }
                }
                callback(null, doc);
              },
              error: function(jqXHR, textStatus, err) {
                callback(new JsonLdError('URL could not be dereferenced, an error occurred.', 'jsonld.LoadDocumentError', {
                  code: 'loading document failed',
                  url: url,
                  cause: err
                }), {
                  contextUrl: null,
                  documentUrl: url,
                  document: null
                });
              }
            });
          }
        };
        jsonld.documentLoaders.node = function(options) {
          options = options || {};
          var strictSSL = ('strictSSL' in options) ? options.strictSSL : true;
          var maxRedirects = ('maxRedirects' in options) ? options.maxRedirects : -1;
          var request = ('request' in options) ? options.request : $__require('5');
          var acceptHeader = 'application/ld+json, application/json';
          var http = $__require('5');
          var queue = new jsonld.RequestQueue();
          if (options.usePromise) {
            return queue.wrapLoader(function(url) {
              return jsonld.promisify(loadDocument, url, []);
            });
          }
          var headers = options.headers || {};
          if ('Accept' in headers || 'accept' in headers) {
            throw new RangeError('Accept header may not be specified as an option; only "' + acceptHeader + '" is supported.');
          }
          return queue.wrapLoader(function(url, callback) {
            loadDocument(url, [], callback);
          });
          function loadDocument(url, redirects, callback) {
            if (url.indexOf('http:') !== 0 && url.indexOf('https:') !== 0) {
              return callback(new JsonLdError('URL could not be dereferenced; only "http" and "https" URLs are ' + 'supported.', 'jsonld.InvalidUrl', {
                code: 'loading document failed',
                url: url
              }), {
                contextUrl: null,
                documentUrl: url,
                document: null
              });
            }
            if (options.secure && url.indexOf('https') !== 0) {
              return callback(new JsonLdError('URL could not be dereferenced; secure mode is enabled and ' + 'the URL\'s scheme is not "https".', 'jsonld.InvalidUrl', {
                code: 'loading document failed',
                url: url
              }), {
                contextUrl: null,
                documentUrl: url,
                document: null
              });
            }
            var doc = null;
            if (doc !== null) {
              return callback(null, doc);
            }
            var headers = {'Accept': acceptHeader};
            for (var k in options.headers) {
              headers[k] = options.headers[k];
            }
            request({
              url: url,
              headers: headers,
              strictSSL: strictSSL,
              followRedirect: false
            }, handleResponse);
            function handleResponse(err, res, body) {
              doc = {
                contextUrl: null,
                documentUrl: url,
                document: body || null
              };
              if (err) {
                return callback(new JsonLdError('URL could not be dereferenced, an error occurred.', 'jsonld.LoadDocumentError', {
                  code: 'loading document failed',
                  url: url,
                  cause: err
                }), doc);
              }
              var statusText = http.STATUS_CODES[res.statusCode];
              if (res.statusCode >= 400) {
                return callback(new JsonLdError('URL could not be dereferenced: ' + statusText, 'jsonld.InvalidUrl', {
                  code: 'loading document failed',
                  url: url,
                  httpStatusCode: res.statusCode
                }), doc);
              }
              if (res.headers.link && res.headers['content-type'] !== 'application/ld+json') {
                var linkHeader = jsonld.parseLinkHeader(res.headers.link)[LINK_HEADER_REL];
                if (_isArray(linkHeader)) {
                  return callback(new JsonLdError('URL could not be dereferenced, it has more than one associated ' + 'HTTP Link Header.', 'jsonld.InvalidUrl', {
                    code: 'multiple context link headers',
                    url: url
                  }), doc);
                }
                if (linkHeader) {
                  doc.contextUrl = linkHeader.target;
                }
              }
              if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                if (redirects.length === maxRedirects) {
                  return callback(new JsonLdError('URL could not be dereferenced; there were too many redirects.', 'jsonld.TooManyRedirects', {
                    code: 'loading document failed',
                    url: url,
                    httpStatusCode: res.statusCode,
                    redirects: redirects
                  }), doc);
                }
                if (redirects.indexOf(url) !== -1) {
                  return callback(new JsonLdError('URL could not be dereferenced; infinite redirection was detected.', 'jsonld.InfiniteRedirectDetected', {
                    code: 'recursive context inclusion',
                    url: url,
                    httpStatusCode: res.statusCode,
                    redirects: redirects
                  }), doc);
                }
                redirects.push(url);
                return loadDocument(res.headers.location, redirects, callback);
              }
              redirects.push(url);
              callback(err, doc);
            }
          }
        };
        jsonld.documentLoaders.xhr = function(options) {
          options = options || {};
          var rlink = /(^|(\r\n))link:/i;
          var queue = new jsonld.RequestQueue();
          var usePromise = ('usePromise' in options ? options.usePromise : (typeof Promise !== 'undefined'));
          if (usePromise) {
            return queue.wrapLoader(function(url) {
              return jsonld.promisify(loader, url);
            });
          }
          return queue.wrapLoader(loader);
          function loader(url, callback) {
            if (url.indexOf('http:') !== 0 && url.indexOf('https:') !== 0) {
              return callback(new JsonLdError('URL could not be dereferenced; only "http" and "https" URLs are ' + 'supported.', 'jsonld.InvalidUrl', {
                code: 'loading document failed',
                url: url
              }), {
                contextUrl: null,
                documentUrl: url,
                document: null
              });
            }
            if (options.secure && url.indexOf('https') !== 0) {
              return callback(new JsonLdError('URL could not be dereferenced; secure mode is enabled and ' + 'the URL\'s scheme is not "https".', 'jsonld.InvalidUrl', {
                code: 'loading document failed',
                url: url
              }), {
                contextUrl: null,
                documentUrl: url,
                document: null
              });
            }
            var xhr = options.xhr || XMLHttpRequest;
            var req = new xhr();
            req.onload = function() {
              if (req.status >= 400) {
                return callback(new JsonLdError('URL could not be dereferenced: ' + req.statusText, 'jsonld.LoadDocumentError', {
                  code: 'loading document failed',
                  url: url,
                  httpStatusCode: req.status
                }), {
                  contextUrl: null,
                  documentUrl: url,
                  document: null
                });
              }
              var doc = {
                contextUrl: null,
                documentUrl: url,
                document: req.response
              };
              var contentType = req.getResponseHeader('Content-Type');
              var linkHeader;
              if (rlink.test(req.getAllResponseHeaders())) {
                linkHeader = req.getResponseHeader('Link');
              }
              if (linkHeader && contentType !== 'application/ld+json') {
                linkHeader = jsonld.parseLinkHeader(linkHeader)[LINK_HEADER_REL];
                if (_isArray(linkHeader)) {
                  return callback(new JsonLdError('URL could not be dereferenced, it has more than one ' + 'associated HTTP Link Header.', 'jsonld.InvalidUrl', {
                    code: 'multiple context link headers',
                    url: url
                  }), doc);
                }
                if (linkHeader) {
                  doc.contextUrl = linkHeader.target;
                }
              }
              callback(null, doc);
            };
            req.onerror = function() {
              callback(new JsonLdError('URL could not be dereferenced, an error occurred.', 'jsonld.LoadDocumentError', {
                code: 'loading document failed',
                url: url
              }), {
                contextUrl: null,
                documentUrl: url,
                document: null
              });
            };
            req.open('GET', url, true);
            req.setRequestHeader('Accept', 'application/ld+json, application/json');
            req.send();
          }
        };
        jsonld.useDocumentLoader = function(type) {
          if (!(type in jsonld.documentLoaders)) {
            throw new JsonLdError('Unknown document loader type: "' + type + '"', 'jsonld.UnknownDocumentLoader', {type: type});
          }
          jsonld.documentLoader = jsonld.documentLoaders[type].apply(jsonld, Array.prototype.slice.call(arguments, 1));
        };
        jsonld.processContext = function(activeCtx, localCtx) {
          var options = {};
          var callbackArg = 2;
          if (arguments.length > 3) {
            options = arguments[2] || {};
            callbackArg += 1;
          }
          var callback = arguments[callbackArg];
          if (!('base' in options)) {
            options.base = '';
          }
          if (!('documentLoader' in options)) {
            options.documentLoader = jsonld.loadDocument;
          }
          if (localCtx === null) {
            return callback(null, _getInitialContext(options));
          }
          localCtx = _clone(localCtx);
          if (!(_isObject(localCtx) && '@context' in localCtx)) {
            localCtx = {'@context': localCtx};
          }
          _retrieveContextUrls(localCtx, options, function(err, ctx) {
            if (err) {
              return callback(err);
            }
            try {
              ctx = new Processor().processContext(activeCtx, ctx, options);
            } catch (ex) {
              return callback(ex);
            }
            callback(null, ctx);
          });
        };
        jsonld.hasProperty = function(subject, property) {
          var rval = false;
          if (property in subject) {
            var value = subject[property];
            rval = (!_isArray(value) || value.length > 0);
          }
          return rval;
        };
        jsonld.hasValue = function(subject, property, value) {
          var rval = false;
          if (jsonld.hasProperty(subject, property)) {
            var val = subject[property];
            var isList = _isList(val);
            if (_isArray(val) || isList) {
              if (isList) {
                val = val['@list'];
              }
              for (var i = 0; i < val.length; ++i) {
                if (jsonld.compareValues(value, val[i])) {
                  rval = true;
                  break;
                }
              }
            } else if (!_isArray(value)) {
              rval = jsonld.compareValues(value, val);
            }
          }
          return rval;
        };
        jsonld.addValue = function(subject, property, value, options) {
          options = options || {};
          if (!('propertyIsArray' in options)) {
            options.propertyIsArray = false;
          }
          if (!('allowDuplicate' in options)) {
            options.allowDuplicate = true;
          }
          if (_isArray(value)) {
            if (value.length === 0 && options.propertyIsArray && !(property in subject)) {
              subject[property] = [];
            }
            for (var i = 0; i < value.length; ++i) {
              jsonld.addValue(subject, property, value[i], options);
            }
          } else if (property in subject) {
            var hasValue = (!options.allowDuplicate && jsonld.hasValue(subject, property, value));
            if (!_isArray(subject[property]) && (!hasValue || options.propertyIsArray)) {
              subject[property] = [subject[property]];
            }
            if (!hasValue) {
              subject[property].push(value);
            }
          } else {
            subject[property] = options.propertyIsArray ? [value] : value;
          }
        };
        jsonld.getValues = function(subject, property) {
          var rval = subject[property] || [];
          if (!_isArray(rval)) {
            rval = [rval];
          }
          return rval;
        };
        jsonld.removeProperty = function(subject, property) {
          delete subject[property];
        };
        jsonld.removeValue = function(subject, property, value, options) {
          options = options || {};
          if (!('propertyIsArray' in options)) {
            options.propertyIsArray = false;
          }
          var values = jsonld.getValues(subject, property).filter(function(e) {
            return !jsonld.compareValues(e, value);
          });
          if (values.length === 0) {
            jsonld.removeProperty(subject, property);
          } else if (values.length === 1 && !options.propertyIsArray) {
            subject[property] = values[0];
          } else {
            subject[property] = values;
          }
        };
        jsonld.compareValues = function(v1, v2) {
          if (v1 === v2) {
            return true;
          }
          if (_isValue(v1) && _isValue(v2) && v1['@value'] === v2['@value'] && v1['@type'] === v2['@type'] && v1['@language'] === v2['@language'] && v1['@index'] === v2['@index']) {
            return true;
          }
          if (_isObject(v1) && ('@id' in v1) && _isObject(v2) && ('@id' in v2)) {
            return v1['@id'] === v2['@id'];
          }
          return false;
        };
        jsonld.getContextValue = function(ctx, key, type) {
          var rval = null;
          if (key === null) {
            return rval;
          }
          if (type === '@language' && (type in ctx)) {
            rval = ctx[type];
          }
          if (ctx.mappings[key]) {
            var entry = ctx.mappings[key];
            if (_isUndefined(type)) {
              rval = entry;
            } else if (type in entry) {
              rval = entry[type];
            }
          }
          return rval;
        };
        var _rdfParsers = {};
        jsonld.registerRDFParser = function(contentType, parser) {
          _rdfParsers[contentType] = parser;
        };
        jsonld.unregisterRDFParser = function(contentType) {
          delete _rdfParsers[contentType];
        };
        if (_nodejs) {
          if (typeof XMLSerializer === 'undefined') {
            var XMLSerializer = null;
          }
          if (typeof Node === 'undefined') {
            var Node = {
              ELEMENT_NODE: 1,
              ATTRIBUTE_NODE: 2,
              TEXT_NODE: 3,
              CDATA_SECTION_NODE: 4,
              ENTITY_REFERENCE_NODE: 5,
              ENTITY_NODE: 6,
              PROCESSING_INSTRUCTION_NODE: 7,
              COMMENT_NODE: 8,
              DOCUMENT_NODE: 9,
              DOCUMENT_TYPE_NODE: 10,
              DOCUMENT_FRAGMENT_NODE: 11,
              NOTATION_NODE: 12
            };
          }
        }
        var XSD_BOOLEAN = 'http://www.w3.org/2001/XMLSchema#boolean';
        var XSD_DOUBLE = 'http://www.w3.org/2001/XMLSchema#double';
        var XSD_INTEGER = 'http://www.w3.org/2001/XMLSchema#integer';
        var XSD_STRING = 'http://www.w3.org/2001/XMLSchema#string';
        var RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
        var RDF_LIST = RDF + 'List';
        var RDF_FIRST = RDF + 'first';
        var RDF_REST = RDF + 'rest';
        var RDF_NIL = RDF + 'nil';
        var RDF_TYPE = RDF + 'type';
        var RDF_PLAIN_LITERAL = RDF + 'PlainLiteral';
        var RDF_XML_LITERAL = RDF + 'XMLLiteral';
        var RDF_OBJECT = RDF + 'object';
        var RDF_LANGSTRING = RDF + 'langString';
        var LINK_HEADER_REL = 'http://www.w3.org/ns/json-ld#context';
        var MAX_CONTEXT_URLS = 10;
        var JsonLdError = function(msg, type, details) {
          if (_nodejs) {
            Error.call(this);
            Error.captureStackTrace(this, this.constructor);
          } else if (typeof Error !== 'undefined') {
            this.stack = (new Error()).stack;
          }
          this.name = type || 'jsonld.Error';
          this.message = msg || 'An unspecified JSON-LD error occurred.';
          this.details = details || {};
        };
        if (_nodejs) {
          $__require('5').inherits(JsonLdError, Error);
        } else if (typeof Error !== 'undefined') {
          JsonLdError.prototype = new Error();
        }
        var Processor = function() {};
        Processor.prototype.compact = function(activeCtx, activeProperty, element, options) {
          if (_isArray(element)) {
            var rval = [];
            for (var i = 0; i < element.length; ++i) {
              var compacted = this.compact(activeCtx, activeProperty, element[i], options);
              if (compacted !== null) {
                rval.push(compacted);
              }
            }
            if (options.compactArrays && rval.length === 1) {
              var container = jsonld.getContextValue(activeCtx, activeProperty, '@container');
              if (container === null) {
                rval = rval[0];
              }
            }
            return rval;
          }
          if (_isObject(element)) {
            if (options.link && '@id' in element && element['@id'] in options.link) {
              var linked = options.link[element['@id']];
              for (var i = 0; i < linked.length; ++i) {
                if (linked[i].expanded === element) {
                  return linked[i].compacted;
                }
              }
            }
            if (_isValue(element) || _isSubjectReference(element)) {
              var rval = _compactValue(activeCtx, activeProperty, element);
              if (options.link && _isSubjectReference(element)) {
                if (!(element['@id'] in options.link)) {
                  options.link[element['@id']] = [];
                }
                options.link[element['@id']].push({
                  expanded: element,
                  compacted: rval
                });
              }
              return rval;
            }
            var insideReverse = (activeProperty === '@reverse');
            var rval = {};
            if (options.link && '@id' in element) {
              if (!(element['@id'] in options.link)) {
                options.link[element['@id']] = [];
              }
              options.link[element['@id']].push({
                expanded: element,
                compacted: rval
              });
            }
            var keys = Object.keys(element).sort();
            for (var ki = 0; ki < keys.length; ++ki) {
              var expandedProperty = keys[ki];
              var expandedValue = element[expandedProperty];
              if (expandedProperty === '@id' || expandedProperty === '@type') {
                var compactedValue;
                if (_isString(expandedValue)) {
                  compactedValue = _compactIri(activeCtx, expandedValue, null, {vocab: (expandedProperty === '@type')});
                } else {
                  compactedValue = [];
                  for (var vi = 0; vi < expandedValue.length; ++vi) {
                    compactedValue.push(_compactIri(activeCtx, expandedValue[vi], null, {vocab: true}));
                  }
                }
                var alias = _compactIri(activeCtx, expandedProperty);
                var isArray = (_isArray(compactedValue) && expandedValue.length === 0);
                jsonld.addValue(rval, alias, compactedValue, {propertyIsArray: isArray});
                continue;
              }
              if (expandedProperty === '@reverse') {
                var compactedValue = this.compact(activeCtx, '@reverse', expandedValue, options);
                for (var compactedProperty in compactedValue) {
                  if (activeCtx.mappings[compactedProperty] && activeCtx.mappings[compactedProperty].reverse) {
                    var value = compactedValue[compactedProperty];
                    var container = jsonld.getContextValue(activeCtx, compactedProperty, '@container');
                    var useArray = (container === '@set' || !options.compactArrays);
                    jsonld.addValue(rval, compactedProperty, value, {propertyIsArray: useArray});
                    delete compactedValue[compactedProperty];
                  }
                }
                if (Object.keys(compactedValue).length > 0) {
                  var alias = _compactIri(activeCtx, expandedProperty);
                  jsonld.addValue(rval, alias, compactedValue);
                }
                continue;
              }
              if (expandedProperty === '@index') {
                var container = jsonld.getContextValue(activeCtx, activeProperty, '@container');
                if (container === '@index') {
                  continue;
                }
                var alias = _compactIri(activeCtx, expandedProperty);
                jsonld.addValue(rval, alias, expandedValue);
                continue;
              }
              if (expandedProperty !== '@graph' && expandedProperty !== '@list' && _isKeyword(expandedProperty)) {
                var alias = _compactIri(activeCtx, expandedProperty);
                jsonld.addValue(rval, alias, expandedValue);
                continue;
              }
              if (expandedValue.length === 0) {
                var itemActiveProperty = _compactIri(activeCtx, expandedProperty, expandedValue, {vocab: true}, insideReverse);
                jsonld.addValue(rval, itemActiveProperty, expandedValue, {propertyIsArray: true});
              }
              for (var vi = 0; vi < expandedValue.length; ++vi) {
                var expandedItem = expandedValue[vi];
                var itemActiveProperty = _compactIri(activeCtx, expandedProperty, expandedItem, {vocab: true}, insideReverse);
                var container = jsonld.getContextValue(activeCtx, itemActiveProperty, '@container');
                var isList = _isList(expandedItem);
                var list = null;
                if (isList) {
                  list = expandedItem['@list'];
                }
                var compactedItem = this.compact(activeCtx, itemActiveProperty, isList ? list : expandedItem, options);
                if (isList) {
                  if (!_isArray(compactedItem)) {
                    compactedItem = [compactedItem];
                  }
                  if (container !== '@list') {
                    var wrapper = {};
                    wrapper[_compactIri(activeCtx, '@list')] = compactedItem;
                    compactedItem = wrapper;
                    if ('@index' in expandedItem) {
                      compactedItem[_compactIri(activeCtx, '@index')] = expandedItem['@index'];
                    }
                  } else if (itemActiveProperty in rval) {
                    throw new JsonLdError('JSON-LD compact error; property has a "@list" @container ' + 'rule but there is more than a single @list that matches ' + 'the compacted term in the document. Compaction might mix ' + 'unwanted items into the list.', 'jsonld.SyntaxError', {code: 'compaction to list of lists'});
                  }
                }
                if (container === '@language' || container === '@index') {
                  var mapObject;
                  if (itemActiveProperty in rval) {
                    mapObject = rval[itemActiveProperty];
                  } else {
                    rval[itemActiveProperty] = mapObject = {};
                  }
                  if (container === '@language' && _isValue(compactedItem)) {
                    compactedItem = compactedItem['@value'];
                  }
                  jsonld.addValue(mapObject, expandedItem[container], compactedItem);
                } else {
                  var isArray = (!options.compactArrays || container === '@set' || container === '@list' || (_isArray(compactedItem) && compactedItem.length === 0) || expandedProperty === '@list' || expandedProperty === '@graph');
                  jsonld.addValue(rval, itemActiveProperty, compactedItem, {propertyIsArray: isArray});
                }
              }
            }
            return rval;
          }
          return element;
        };
        Processor.prototype.expand = function(activeCtx, activeProperty, element, options, insideList) {
          var self = this;
          if (element === null || element === undefined) {
            return null;
          }
          if (!_isArray(element) && !_isObject(element)) {
            if (!insideList && (activeProperty === null || _expandIri(activeCtx, activeProperty, {vocab: true}) === '@graph')) {
              return null;
            }
            return _expandValue(activeCtx, activeProperty, element);
          }
          if (_isArray(element)) {
            var rval = [];
            var container = jsonld.getContextValue(activeCtx, activeProperty, '@container');
            insideList = insideList || container === '@list';
            for (var i = 0; i < element.length; ++i) {
              var e = self.expand(activeCtx, activeProperty, element[i], options);
              if (insideList && (_isArray(e) || _isList(e))) {
                throw new JsonLdError('Invalid JSON-LD syntax; lists of lists are not permitted.', 'jsonld.SyntaxError', {code: 'list of lists'});
              }
              if (e !== null) {
                if (_isArray(e)) {
                  rval = rval.concat(e);
                } else {
                  rval.push(e);
                }
              }
            }
            return rval;
          }
          if ('@context' in element) {
            activeCtx = self.processContext(activeCtx, element['@context'], options);
          }
          var expandedActiveProperty = _expandIri(activeCtx, activeProperty, {vocab: true});
          var rval = {};
          var keys = Object.keys(element).sort();
          for (var ki = 0; ki < keys.length; ++ki) {
            var key = keys[ki];
            var value = element[key];
            var expandedValue;
            if (key === '@context') {
              continue;
            }
            var expandedProperty = _expandIri(activeCtx, key, {vocab: true});
            if (expandedProperty === null || !(_isAbsoluteIri(expandedProperty) || _isKeyword(expandedProperty))) {
              continue;
            }
            if (_isKeyword(expandedProperty)) {
              if (expandedActiveProperty === '@reverse') {
                throw new JsonLdError('Invalid JSON-LD syntax; a keyword cannot be used as a @reverse ' + 'property.', 'jsonld.SyntaxError', {
                  code: 'invalid reverse property map',
                  value: value
                });
              }
              if (expandedProperty in rval) {
                throw new JsonLdError('Invalid JSON-LD syntax; colliding keywords detected.', 'jsonld.SyntaxError', {
                  code: 'colliding keywords',
                  keyword: expandedProperty
                });
              }
            }
            if (expandedProperty === '@id' && !_isString(value)) {
              if (!options.isFrame) {
                throw new JsonLdError('Invalid JSON-LD syntax; "@id" value must a string.', 'jsonld.SyntaxError', {
                  code: 'invalid @id value',
                  value: value
                });
              }
              if (!_isObject(value)) {
                throw new JsonLdError('Invalid JSON-LD syntax; "@id" value must be a string or an ' + 'object.', 'jsonld.SyntaxError', {
                  code: 'invalid @id value',
                  value: value
                });
              }
            }
            if (expandedProperty === '@type') {
              _validateTypeValue(value);
            }
            if (expandedProperty === '@graph' && !(_isObject(value) || _isArray(value))) {
              throw new JsonLdError('Invalid JSON-LD syntax; "@graph" value must not be an ' + 'object or an array.', 'jsonld.SyntaxError', {
                code: 'invalid @graph value',
                value: value
              });
            }
            if (expandedProperty === '@value' && (_isObject(value) || _isArray(value))) {
              throw new JsonLdError('Invalid JSON-LD syntax; "@value" value must not be an ' + 'object or an array.', 'jsonld.SyntaxError', {
                code: 'invalid value object value',
                value: value
              });
            }
            if (expandedProperty === '@language') {
              if (value === null) {
                continue;
              }
              if (!_isString(value)) {
                throw new JsonLdError('Invalid JSON-LD syntax; "@language" value must be a string.', 'jsonld.SyntaxError', {
                  code: 'invalid language-tagged string',
                  value: value
                });
              }
              value = value.toLowerCase();
            }
            if (expandedProperty === '@index') {
              if (!_isString(value)) {
                throw new JsonLdError('Invalid JSON-LD syntax; "@index" value must be a string.', 'jsonld.SyntaxError', {
                  code: 'invalid @index value',
                  value: value
                });
              }
            }
            if (expandedProperty === '@reverse') {
              if (!_isObject(value)) {
                throw new JsonLdError('Invalid JSON-LD syntax; "@reverse" value must be an object.', 'jsonld.SyntaxError', {
                  code: 'invalid @reverse value',
                  value: value
                });
              }
              expandedValue = self.expand(activeCtx, '@reverse', value, options);
              if ('@reverse' in expandedValue) {
                for (var property in expandedValue['@reverse']) {
                  jsonld.addValue(rval, property, expandedValue['@reverse'][property], {propertyIsArray: true});
                }
              }
              var reverseMap = rval['@reverse'] || null;
              for (var property in expandedValue) {
                if (property === '@reverse') {
                  continue;
                }
                if (reverseMap === null) {
                  reverseMap = rval['@reverse'] = {};
                }
                jsonld.addValue(reverseMap, property, [], {propertyIsArray: true});
                var items = expandedValue[property];
                for (var ii = 0; ii < items.length; ++ii) {
                  var item = items[ii];
                  if (_isValue(item) || _isList(item)) {
                    throw new JsonLdError('Invalid JSON-LD syntax; "@reverse" value must not be a ' + '@value or an @list.', 'jsonld.SyntaxError', {
                      code: 'invalid reverse property value',
                      value: expandedValue
                    });
                  }
                  jsonld.addValue(reverseMap, property, item, {propertyIsArray: true});
                }
              }
              continue;
            }
            var container = jsonld.getContextValue(activeCtx, key, '@container');
            if (container === '@language' && _isObject(value)) {
              expandedValue = _expandLanguageMap(value);
            } else if (container === '@index' && _isObject(value)) {
              expandedValue = (function _expandIndexMap(activeProperty) {
                var rval = [];
                var keys = Object.keys(value).sort();
                for (var ki = 0; ki < keys.length; ++ki) {
                  var key = keys[ki];
                  var val = value[key];
                  if (!_isArray(val)) {
                    val = [val];
                  }
                  val = self.expand(activeCtx, activeProperty, val, options, false);
                  for (var vi = 0; vi < val.length; ++vi) {
                    var item = val[vi];
                    if (!('@index' in item)) {
                      item['@index'] = key;
                    }
                    rval.push(item);
                  }
                }
                return rval;
              })(key);
            } else {
              var isList = (expandedProperty === '@list');
              if (isList || expandedProperty === '@set') {
                var nextActiveProperty = activeProperty;
                if (isList && expandedActiveProperty === '@graph') {
                  nextActiveProperty = null;
                }
                expandedValue = self.expand(activeCtx, nextActiveProperty, value, options, isList);
                if (isList && _isList(expandedValue)) {
                  throw new JsonLdError('Invalid JSON-LD syntax; lists of lists are not permitted.', 'jsonld.SyntaxError', {code: 'list of lists'});
                }
              } else {
                expandedValue = self.expand(activeCtx, key, value, options, false);
              }
            }
            if (expandedValue === null && expandedProperty !== '@value') {
              continue;
            }
            if (expandedProperty !== '@list' && !_isList(expandedValue) && container === '@list') {
              expandedValue = (_isArray(expandedValue) ? expandedValue : [expandedValue]);
              expandedValue = {'@list': expandedValue};
            }
            if (activeCtx.mappings[key] && activeCtx.mappings[key].reverse) {
              var reverseMap = rval['@reverse'] = rval['@reverse'] || {};
              if (!_isArray(expandedValue)) {
                expandedValue = [expandedValue];
              }
              for (var ii = 0; ii < expandedValue.length; ++ii) {
                var item = expandedValue[ii];
                if (_isValue(item) || _isList(item)) {
                  throw new JsonLdError('Invalid JSON-LD syntax; "@reverse" value must not be a ' + '@value or an @list.', 'jsonld.SyntaxError', {
                    code: 'invalid reverse property value',
                    value: expandedValue
                  });
                }
                jsonld.addValue(reverseMap, expandedProperty, item, {propertyIsArray: true});
              }
              continue;
            }
            var useArray = ['@index', '@id', '@type', '@value', '@language'].indexOf(expandedProperty) === -1;
            jsonld.addValue(rval, expandedProperty, expandedValue, {propertyIsArray: useArray});
          }
          keys = Object.keys(rval);
          var count = keys.length;
          if ('@value' in rval) {
            if ('@type' in rval && '@language' in rval) {
              throw new JsonLdError('Invalid JSON-LD syntax; an element containing "@value" may not ' + 'contain both "@type" and "@language".', 'jsonld.SyntaxError', {
                code: 'invalid value object',
                element: rval
              });
            }
            var validCount = count - 1;
            if ('@type' in rval) {
              validCount -= 1;
            }
            if ('@index' in rval) {
              validCount -= 1;
            }
            if ('@language' in rval) {
              validCount -= 1;
            }
            if (validCount !== 0) {
              throw new JsonLdError('Invalid JSON-LD syntax; an element containing "@value" may only ' + 'have an "@index" property and at most one other property ' + 'which can be "@type" or "@language".', 'jsonld.SyntaxError', {
                code: 'invalid value object',
                element: rval
              });
            }
            if (rval['@value'] === null) {
              rval = null;
            } else if ('@language' in rval && !_isString(rval['@value'])) {
              throw new JsonLdError('Invalid JSON-LD syntax; only strings may be language-tagged.', 'jsonld.SyntaxError', {
                code: 'invalid language-tagged value',
                element: rval
              });
            } else if ('@type' in rval && (!_isAbsoluteIri(rval['@type']) || rval['@type'].indexOf('_:') === 0)) {
              throw new JsonLdError('Invalid JSON-LD syntax; an element containing "@value" and "@type" ' + 'must have an absolute IRI for the value of "@type".', 'jsonld.SyntaxError', {
                code: 'invalid typed value',
                element: rval
              });
            }
          } else if ('@type' in rval && !_isArray(rval['@type'])) {
            rval['@type'] = [rval['@type']];
          } else if ('@set' in rval || '@list' in rval) {
            if (count > 1 && !(count === 2 && '@index' in rval)) {
              throw new JsonLdError('Invalid JSON-LD syntax; if an element has the property "@set" ' + 'or "@list", then it can have at most one other property that is ' + '"@index".', 'jsonld.SyntaxError', {
                code: 'invalid set or list object',
                element: rval
              });
            }
            if ('@set' in rval) {
              rval = rval['@set'];
              keys = Object.keys(rval);
              count = keys.length;
            }
          } else if (count === 1 && '@language' in rval) {
            rval = null;
          }
          if (_isObject(rval) && !options.keepFreeFloatingNodes && !insideList && (activeProperty === null || expandedActiveProperty === '@graph')) {
            if (count === 0 || '@value' in rval || '@list' in rval || (count === 1 && '@id' in rval)) {
              rval = null;
            }
          }
          return rval;
        };
        Processor.prototype.createNodeMap = function(input, options) {
          options = options || {};
          var issuer = options.namer || options.issuer || new IdentifierIssuer('_:b');
          var graphs = {'@default': {}};
          _createNodeMap(input, graphs, '@default', issuer);
          return _mergeNodeMaps(graphs);
        };
        Processor.prototype.flatten = function(input) {
          var defaultGraph = this.createNodeMap(input);
          var flattened = [];
          var keys = Object.keys(defaultGraph).sort();
          for (var ki = 0; ki < keys.length; ++ki) {
            var node = defaultGraph[keys[ki]];
            if (!_isSubjectReference(node)) {
              flattened.push(node);
            }
          }
          return flattened;
        };
        Processor.prototype.frame = function(input, frame, options) {
          var state = {
            options: options,
            graphs: {
              '@default': {},
              '@merged': {}
            },
            subjectStack: [],
            link: {}
          };
          var issuer = new IdentifierIssuer('_:b');
          _createNodeMap(input, state.graphs, '@merged', issuer);
          state.subjects = state.graphs['@merged'];
          var framed = [];
          _frame(state, Object.keys(state.subjects).sort(), frame, framed, null);
          return framed;
        };
        Processor.prototype.normalize = function(dataset, options, callback) {
          if (options.algorithm === 'URDNA2015') {
            return new URDNA2015(options).main(dataset, callback);
          }
          if (options.algorithm === 'URGNA2012') {
            return new URGNA2012(options).main(dataset, callback);
          }
          callback(new Error('Invalid RDF Dataset Normalization algorithm: ' + options.algorithm));
        };
        Processor.prototype.fromRDF = function(dataset, options, callback) {
          var defaultGraph = {};
          var graphMap = {'@default': defaultGraph};
          var referencedOnce = {};
          for (var name in dataset) {
            var graph = dataset[name];
            if (!(name in graphMap)) {
              graphMap[name] = {};
            }
            if (name !== '@default' && !(name in defaultGraph)) {
              defaultGraph[name] = {'@id': name};
            }
            var nodeMap = graphMap[name];
            for (var ti = 0; ti < graph.length; ++ti) {
              var triple = graph[ti];
              var s = triple.subject.value;
              var p = triple.predicate.value;
              var o = triple.object;
              if (!(s in nodeMap)) {
                nodeMap[s] = {'@id': s};
              }
              var node = nodeMap[s];
              var objectIsId = (o.type === 'IRI' || o.type === 'blank node');
              if (objectIsId && !(o.value in nodeMap)) {
                nodeMap[o.value] = {'@id': o.value};
              }
              if (p === RDF_TYPE && !options.useRdfType && objectIsId) {
                jsonld.addValue(node, '@type', o.value, {propertyIsArray: true});
                continue;
              }
              var value = _RDFToObject(o, options.useNativeTypes);
              jsonld.addValue(node, p, value, {propertyIsArray: true});
              if (objectIsId) {
                if (o.value === RDF_NIL) {
                  var object = nodeMap[o.value];
                  if (!('usages' in object)) {
                    object.usages = [];
                  }
                  object.usages.push({
                    node: node,
                    property: p,
                    value: value
                  });
                } else if (o.value in referencedOnce) {
                  referencedOnce[o.value] = false;
                } else {
                  referencedOnce[o.value] = {
                    node: node,
                    property: p,
                    value: value
                  };
                }
              }
            }
          }
          for (var name in graphMap) {
            var graphObject = graphMap[name];
            if (!(RDF_NIL in graphObject)) {
              continue;
            }
            var nil = graphObject[RDF_NIL];
            for (var i = 0; i < nil.usages.length; ++i) {
              var usage = nil.usages[i];
              var node = usage.node;
              var property = usage.property;
              var head = usage.value;
              var list = [];
              var listNodes = [];
              var nodeKeyCount = Object.keys(node).length;
              while (property === RDF_REST && _isObject(referencedOnce[node['@id']]) && _isArray(node[RDF_FIRST]) && node[RDF_FIRST].length === 1 && _isArray(node[RDF_REST]) && node[RDF_REST].length === 1 && (nodeKeyCount === 3 || (nodeKeyCount === 4 && _isArray(node['@type']) && node['@type'].length === 1 && node['@type'][0] === RDF_LIST))) {
                list.push(node[RDF_FIRST][0]);
                listNodes.push(node['@id']);
                usage = referencedOnce[node['@id']];
                node = usage.node;
                property = usage.property;
                head = usage.value;
                nodeKeyCount = Object.keys(node).length;
                if (node['@id'].indexOf('_:') !== 0) {
                  break;
                }
              }
              if (property === RDF_FIRST) {
                if (node['@id'] === RDF_NIL) {
                  continue;
                }
                head = graphObject[head['@id']][RDF_REST][0];
                list.pop();
                listNodes.pop();
              }
              delete head['@id'];
              head['@list'] = list.reverse();
              for (var j = 0; j < listNodes.length; ++j) {
                delete graphObject[listNodes[j]];
              }
            }
            delete nil.usages;
          }
          var result = [];
          var subjects = Object.keys(defaultGraph).sort();
          for (var i = 0; i < subjects.length; ++i) {
            var subject = subjects[i];
            var node = defaultGraph[subject];
            if (subject in graphMap) {
              var graph = node['@graph'] = [];
              var graphObject = graphMap[subject];
              var subjects_ = Object.keys(graphObject).sort();
              for (var si = 0; si < subjects_.length; ++si) {
                var node_ = graphObject[subjects_[si]];
                if (!_isSubjectReference(node_)) {
                  graph.push(node_);
                }
              }
            }
            if (!_isSubjectReference(node)) {
              result.push(node);
            }
          }
          callback(null, result);
        };
        Processor.prototype.toRDF = function(input, options) {
          var issuer = new IdentifierIssuer('_:b');
          var nodeMap = {'@default': {}};
          _createNodeMap(input, nodeMap, '@default', issuer);
          var dataset = {};
          var graphNames = Object.keys(nodeMap).sort();
          for (var i = 0; i < graphNames.length; ++i) {
            var graphName = graphNames[i];
            if (graphName === '@default' || _isAbsoluteIri(graphName)) {
              dataset[graphName] = _graphToRDF(nodeMap[graphName], issuer, options);
            }
          }
          return dataset;
        };
        Processor.prototype.processContext = function(activeCtx, localCtx, options) {
          if (_isObject(localCtx) && '@context' in localCtx && _isArray(localCtx['@context'])) {
            localCtx = localCtx['@context'];
          }
          var ctxs = _isArray(localCtx) ? localCtx : [localCtx];
          if (ctxs.length === 0) {
            return activeCtx.clone();
          }
          var rval = activeCtx;
          for (var i = 0; i < ctxs.length; ++i) {
            var ctx = ctxs[i];
            if (ctx === null) {
              rval = activeCtx = _getInitialContext(options);
              continue;
            }
            if (_isObject(ctx) && '@context' in ctx) {
              ctx = ctx['@context'];
            }
            if (!_isObject(ctx)) {
              throw new JsonLdError('Invalid JSON-LD syntax; @context must be an object.', 'jsonld.SyntaxError', {
                code: 'invalid local context',
                context: ctx
              });
            }
            if (jsonld.cache.activeCtx) {
              var cached = jsonld.cache.activeCtx.get(activeCtx, ctx);
              if (cached) {
                rval = activeCtx = cached;
                continue;
              }
            }
            activeCtx = rval;
            rval = rval.clone();
            var defined = {};
            if ('@base' in ctx) {
              var base = ctx['@base'];
              if (base === null) {
                base = null;
              } else if (!_isString(base)) {
                throw new JsonLdError('Invalid JSON-LD syntax; the value of "@base" in a ' + '@context must be a string or null.', 'jsonld.SyntaxError', {
                  code: 'invalid base IRI',
                  context: ctx
                });
              } else if (base !== '' && !_isAbsoluteIri(base)) {
                throw new JsonLdError('Invalid JSON-LD syntax; the value of "@base" in a ' + '@context must be an absolute IRI or the empty string.', 'jsonld.SyntaxError', {
                  code: 'invalid base IRI',
                  context: ctx
                });
              }
              if (base !== null) {
                base = jsonld.url.parse(base || '');
              }
              rval['@base'] = base;
              defined['@base'] = true;
            }
            if ('@vocab' in ctx) {
              var value = ctx['@vocab'];
              if (value === null) {
                delete rval['@vocab'];
              } else if (!_isString(value)) {
                throw new JsonLdError('Invalid JSON-LD syntax; the value of "@vocab" in a ' + '@context must be a string or null.', 'jsonld.SyntaxError', {
                  code: 'invalid vocab mapping',
                  context: ctx
                });
              } else if (!_isAbsoluteIri(value)) {
                throw new JsonLdError('Invalid JSON-LD syntax; the value of "@vocab" in a ' + '@context must be an absolute IRI.', 'jsonld.SyntaxError', {
                  code: 'invalid vocab mapping',
                  context: ctx
                });
              } else {
                rval['@vocab'] = value;
              }
              defined['@vocab'] = true;
            }
            if ('@language' in ctx) {
              var value = ctx['@language'];
              if (value === null) {
                delete rval['@language'];
              } else if (!_isString(value)) {
                throw new JsonLdError('Invalid JSON-LD syntax; the value of "@language" in a ' + '@context must be a string or null.', 'jsonld.SyntaxError', {
                  code: 'invalid default language',
                  context: ctx
                });
              } else {
                rval['@language'] = value.toLowerCase();
              }
              defined['@language'] = true;
            }
            for (var key in ctx) {
              _createTermDefinition(rval, ctx, key, defined);
            }
            if (jsonld.cache.activeCtx) {
              jsonld.cache.activeCtx.set(activeCtx, ctx, rval);
            }
          }
          return rval;
        };
        function _expandLanguageMap(languageMap) {
          var rval = [];
          var keys = Object.keys(languageMap).sort();
          for (var ki = 0; ki < keys.length; ++ki) {
            var key = keys[ki];
            var val = languageMap[key];
            if (!_isArray(val)) {
              val = [val];
            }
            for (var vi = 0; vi < val.length; ++vi) {
              var item = val[vi];
              if (item === null) {
                continue;
              }
              if (!_isString(item)) {
                throw new JsonLdError('Invalid JSON-LD syntax; language map values must be strings.', 'jsonld.SyntaxError', {
                  code: 'invalid language map value',
                  languageMap: languageMap
                });
              }
              rval.push({
                '@value': item,
                '@language': key.toLowerCase()
              });
            }
          }
          return rval;
        }
        function _labelBlankNodes(issuer, element) {
          if (_isArray(element)) {
            for (var i = 0; i < element.length; ++i) {
              element[i] = _labelBlankNodes(issuer, element[i]);
            }
          } else if (_isList(element)) {
            element['@list'] = _labelBlankNodes(issuer, element['@list']);
          } else if (_isObject(element)) {
            if (_isBlankNode(element)) {
              element['@id'] = issuer.getId(element['@id']);
            }
            var keys = Object.keys(element).sort();
            for (var ki = 0; ki < keys.length; ++ki) {
              var key = keys[ki];
              if (key !== '@id') {
                element[key] = _labelBlankNodes(issuer, element[key]);
              }
            }
          }
          return element;
        }
        function _expandValue(activeCtx, activeProperty, value) {
          if (value === null || value === undefined) {
            return null;
          }
          var expandedProperty = _expandIri(activeCtx, activeProperty, {vocab: true});
          if (expandedProperty === '@id') {
            return _expandIri(activeCtx, value, {base: true});
          } else if (expandedProperty === '@type') {
            return _expandIri(activeCtx, value, {
              vocab: true,
              base: true
            });
          }
          var type = jsonld.getContextValue(activeCtx, activeProperty, '@type');
          if (type === '@id' || (expandedProperty === '@graph' && _isString(value))) {
            return {'@id': _expandIri(activeCtx, value, {base: true})};
          }
          if (type === '@vocab') {
            return {'@id': _expandIri(activeCtx, value, {
                vocab: true,
                base: true
              })};
          }
          if (_isKeyword(expandedProperty)) {
            return value;
          }
          var rval = {};
          if (type !== null) {
            rval['@type'] = type;
          } else if (_isString(value)) {
            var language = jsonld.getContextValue(activeCtx, activeProperty, '@language');
            if (language !== null) {
              rval['@language'] = language;
            }
          }
          if (['boolean', 'number', 'string'].indexOf(typeof value) === -1) {
            value = value.toString();
          }
          rval['@value'] = value;
          return rval;
        }
        function _graphToRDF(graph, issuer, options) {
          var rval = [];
          var ids = Object.keys(graph).sort();
          for (var i = 0; i < ids.length; ++i) {
            var id = ids[i];
            var node = graph[id];
            var properties = Object.keys(node).sort();
            for (var pi = 0; pi < properties.length; ++pi) {
              var property = properties[pi];
              var items = node[property];
              if (property === '@type') {
                property = RDF_TYPE;
              } else if (_isKeyword(property)) {
                continue;
              }
              for (var ii = 0; ii < items.length; ++ii) {
                var item = items[ii];
                var subject = {};
                subject.type = (id.indexOf('_:') === 0) ? 'blank node' : 'IRI';
                subject.value = id;
                if (!_isAbsoluteIri(id)) {
                  continue;
                }
                var predicate = {};
                predicate.type = (property.indexOf('_:') === 0) ? 'blank node' : 'IRI';
                predicate.value = property;
                if (!_isAbsoluteIri(property)) {
                  continue;
                }
                if (predicate.type === 'blank node' && !options.produceGeneralizedRdf) {
                  continue;
                }
                if (_isList(item)) {
                  _listToRDF(item['@list'], issuer, subject, predicate, rval);
                } else {
                  var object = _objectToRDF(item);
                  if (object) {
                    rval.push({
                      subject: subject,
                      predicate: predicate,
                      object: object
                    });
                  }
                }
              }
            }
          }
          return rval;
        }
        function _listToRDF(list, issuer, subject, predicate, triples) {
          var first = {
            type: 'IRI',
            value: RDF_FIRST
          };
          var rest = {
            type: 'IRI',
            value: RDF_REST
          };
          var nil = {
            type: 'IRI',
            value: RDF_NIL
          };
          for (var i = 0; i < list.length; ++i) {
            var item = list[i];
            var blankNode = {
              type: 'blank node',
              value: issuer.getId()
            };
            triples.push({
              subject: subject,
              predicate: predicate,
              object: blankNode
            });
            subject = blankNode;
            predicate = first;
            var object = _objectToRDF(item);
            if (object) {
              triples.push({
                subject: subject,
                predicate: predicate,
                object: object
              });
            }
            predicate = rest;
          }
          triples.push({
            subject: subject,
            predicate: predicate,
            object: nil
          });
        }
        function _objectToRDF(item) {
          var object = {};
          if (_isValue(item)) {
            object.type = 'literal';
            var value = item['@value'];
            var datatype = item['@type'] || null;
            if (_isBoolean(value)) {
              object.value = value.toString();
              object.datatype = datatype || XSD_BOOLEAN;
            } else if (_isDouble(value) || datatype === XSD_DOUBLE) {
              if (!_isDouble(value)) {
                value = parseFloat(value);
              }
              object.value = value.toExponential(15).replace(/(\d)0*e\+?/, '$1E');
              object.datatype = datatype || XSD_DOUBLE;
            } else if (_isNumber(value)) {
              object.value = value.toFixed(0);
              object.datatype = datatype || XSD_INTEGER;
            } else if ('@language' in item) {
              object.value = value;
              object.datatype = datatype || RDF_LANGSTRING;
              object.language = item['@language'];
            } else {
              object.value = value;
              object.datatype = datatype || XSD_STRING;
            }
          } else {
            var id = _isObject(item) ? item['@id'] : item;
            object.type = (id.indexOf('_:') === 0) ? 'blank node' : 'IRI';
            object.value = id;
          }
          if (object.type === 'IRI' && !_isAbsoluteIri(object.value)) {
            return null;
          }
          return object;
        }
        function _RDFToObject(o, useNativeTypes) {
          if (o.type === 'IRI' || o.type === 'blank node') {
            return {'@id': o.value};
          }
          var rval = {'@value': o.value};
          if (o.language) {
            rval['@language'] = o.language;
          } else {
            var type = o.datatype;
            if (!type) {
              type = XSD_STRING;
            }
            if (useNativeTypes) {
              if (type === XSD_BOOLEAN) {
                if (rval['@value'] === 'true') {
                  rval['@value'] = true;
                } else if (rval['@value'] === 'false') {
                  rval['@value'] = false;
                }
              } else if (_isNumeric(rval['@value'])) {
                if (type === XSD_INTEGER) {
                  var i = parseInt(rval['@value'], 10);
                  if (i.toFixed(0) === rval['@value']) {
                    rval['@value'] = i;
                  }
                } else if (type === XSD_DOUBLE) {
                  rval['@value'] = parseFloat(rval['@value']);
                }
              }
              if ([XSD_BOOLEAN, XSD_INTEGER, XSD_DOUBLE, XSD_STRING].indexOf(type) === -1) {
                rval['@type'] = type;
              }
            } else if (type !== XSD_STRING) {
              rval['@type'] = type;
            }
          }
          return rval;
        }
        function _compareRDFTriples(t1, t2) {
          var attrs = ['subject', 'predicate', 'object'];
          for (var i = 0; i < attrs.length; ++i) {
            var attr = attrs[i];
            if (t1[attr].type !== t2[attr].type || t1[attr].value !== t2[attr].value) {
              return false;
            }
          }
          if (t1.object.language !== t2.object.language) {
            return false;
          }
          if (t1.object.datatype !== t2.object.datatype) {
            return false;
          }
          return true;
        }
        var URDNA2015 = (function() {
          var POSITIONS = {
            'subject': 's',
            'object': 'o',
            'name': 'g'
          };
          var Normalize = function(options) {
            options = options || {};
            this.name = 'URDNA2015';
            this.options = options;
            this.blankNodeInfo = {};
            this.hashToBlankNodes = {};
            this.canonicalIssuer = new IdentifierIssuer('_:c14n');
            this.quads = [];
            this.schedule = {};
            if ('maxCallStackDepth' in options) {
              this.schedule.MAX_DEPTH = options.maxCallStackDepth;
            } else {
              this.schedule.MAX_DEPTH = 500;
            }
            if ('maxTotalCallStackDepth' in options) {
              this.schedule.MAX_TOTAL_DEPTH = options.maxCallStackDepth;
            } else {
              this.schedule.MAX_TOTAL_DEPTH = 0xFFFFFFFF;
            }
            this.schedule.depth = 0;
            this.schedule.totalDepth = 0;
            if ('timeSlice' in options) {
              this.schedule.timeSlice = options.timeSlice;
            } else {
              this.schedule.timeSlice = 10;
            }
          };
          Normalize.prototype.doWork = function(fn, callback) {
            var schedule = this.schedule;
            if (schedule.totalDepth >= schedule.MAX_TOTAL_DEPTH) {
              return callback(new Error('Maximum total call stack depth exceeded; normalization aborting.'));
            }
            (function work() {
              if (schedule.depth === schedule.MAX_DEPTH) {
                schedule.depth = 0;
                schedule.running = false;
                return jsonld.nextTick(work);
              }
              var now = new Date().getTime();
              if (!schedule.running) {
                schedule.start = new Date().getTime();
                schedule.deadline = schedule.start + schedule.timeSlice;
              }
              if (now < schedule.deadline) {
                schedule.running = true;
                schedule.depth++;
                schedule.totalDepth++;
                return fn(function(err, result) {
                  schedule.depth--;
                  schedule.totalDepth--;
                  callback(err, result);
                });
              }
              schedule.depth = 0;
              schedule.running = false;
              jsonld.setImmediate(work);
            })();
          };
          Normalize.prototype.forEach = function(iterable, fn, callback) {
            var self = this;
            var iterator;
            var idx = 0;
            var length;
            if (_isArray(iterable)) {
              length = iterable.length;
              iterator = function() {
                if (idx === length) {
                  return false;
                }
                iterator.value = iterable[idx++];
                iterator.key = idx;
                return true;
              };
            } else {
              var keys = Object.keys(iterable);
              length = keys.length;
              iterator = function() {
                if (idx === length) {
                  return false;
                }
                iterator.key = keys[idx++];
                iterator.value = iterable[iterator.key];
                return true;
              };
            }
            (function iterate(err, result) {
              if (err) {
                return callback(err);
              }
              if (iterator()) {
                return self.doWork(function() {
                  fn(iterator.value, iterator.key, iterate);
                });
              }
              callback();
            })();
          };
          Normalize.prototype.waterfall = function(fns, callback) {
            var self = this;
            self.forEach(fns, function(fn, idx, callback) {
              self.doWork(fn, callback);
            }, callback);
          };
          Normalize.prototype.whilst = function(condition, fn, callback) {
            var self = this;
            (function loop(err) {
              if (err) {
                return callback(err);
              }
              if (!condition()) {
                return callback();
              }
              self.doWork(fn, loop);
            })();
          };
          Normalize.prototype.main = function(dataset, callback) {
            var self = this;
            self.schedule.start = new Date().getTime();
            var result;
            if (self.options.format) {
              if (self.options.format !== 'application/nquads') {
                return callback(new JsonLdError('Unknown output format.', 'jsonld.UnknownFormat', {format: self.options.format}));
              }
            }
            var nonNormalized = {};
            self.waterfall([function(callback) {
              self.forEach(dataset, function(triples, graphName, callback) {
                if (graphName === '@default') {
                  graphName = null;
                }
                self.forEach(triples, function(quad, idx, callback) {
                  if (graphName !== null) {
                    if (graphName.indexOf('_:') === 0) {
                      quad.name = {
                        type: 'blank node',
                        value: graphName
                      };
                    } else {
                      quad.name = {
                        type: 'IRI',
                        value: graphName
                      };
                    }
                  }
                  self.quads.push(quad);
                  self.forEachComponent(quad, function(component) {
                    if (component.type !== 'blank node') {
                      return;
                    }
                    var id = component.value;
                    if (id in self.blankNodeInfo) {
                      self.blankNodeInfo[id].quads.push(quad);
                    } else {
                      nonNormalized[id] = true;
                      self.blankNodeInfo[id] = {quads: [quad]};
                    }
                  });
                  callback();
                }, callback);
              }, callback);
            }, function(callback) {
              var simple = true;
              self.whilst(function() {
                return simple;
              }, function(callback) {
                simple = false;
                self.hashToBlankNodes = {};
                self.waterfall([function(callback) {
                  self.forEach(nonNormalized, function(value, id, callback) {
                    self.hashFirstDegreeQuads(id, function(err, hash) {
                      if (err) {
                        return callback(err);
                      }
                      if (hash in self.hashToBlankNodes) {
                        self.hashToBlankNodes[hash].push(id);
                      } else {
                        self.hashToBlankNodes[hash] = [id];
                      }
                      callback();
                    });
                  }, callback);
                }, function(callback) {
                  var hashes = Object.keys(self.hashToBlankNodes).sort();
                  self.forEach(hashes, function(hash, i, callback) {
                    var idList = self.hashToBlankNodes[hash];
                    if (idList.length > 1) {
                      return callback();
                    }
                    var id = idList[0];
                    self.canonicalIssuer.getId(id);
                    delete nonNormalized[id];
                    delete self.hashToBlankNodes[hash];
                    simple = true;
                    callback();
                  }, callback);
                }], callback);
              }, callback);
            }, function(callback) {
              var hashes = Object.keys(self.hashToBlankNodes).sort();
              self.forEach(hashes, function(hash, idx, callback) {
                var hashPathList = [];
                var idList = self.hashToBlankNodes[hash];
                self.waterfall([function(callback) {
                  self.forEach(idList, function(id, idx, callback) {
                    if (self.canonicalIssuer.hasId(id)) {
                      return callback();
                    }
                    var issuer = new IdentifierIssuer('_:b');
                    issuer.getId(id);
                    self.hashNDegreeQuads(id, issuer, function(err, result) {
                      if (err) {
                        return callback(err);
                      }
                      hashPathList.push(result);
                      callback();
                    });
                  }, callback);
                }, function(callback) {
                  hashPathList.sort(function(a, b) {
                    return (a.hash < b.hash) ? -1 : ((a.hash > b.hash) ? 1 : 0);
                  });
                  self.forEach(hashPathList, function(result, idx, callback) {
                    for (var existing in result.issuer.existing) {
                      self.canonicalIssuer.getId(existing);
                    }
                    callback();
                  }, callback);
                }], callback);
              }, callback);
            }, function(callback) {
              var normalized = [];
              self.waterfall([function(callback) {
                self.forEach(self.quads, function(quad, idx, callback) {
                  self.forEachComponent(quad, function(component) {
                    if (component.type === 'blank node' && component.value.indexOf(self.canonicalIssuer.prefix) !== 0) {
                      component.value = self.canonicalIssuer.getId(component.value);
                    }
                  });
                  normalized.push(_toNQuad(quad));
                  callback();
                }, callback);
              }, function(callback) {
                normalized.sort();
                if (self.options.format === 'application/nquads') {
                  result = normalized.join('');
                  return callback();
                }
                result = _parseNQuads(normalized.join(''));
                callback();
              }], callback);
            }], function(err) {
              callback(err, result);
            });
          };
          Normalize.prototype.hashFirstDegreeQuads = function(id, callback) {
            var self = this;
            var info = self.blankNodeInfo[id];
            if ('hash' in info) {
              return callback(null, info.hash);
            }
            var nquads = [];
            var quads = info.quads;
            self.forEach(quads, function(quad, idx, callback) {
              var copy = {predicate: quad.predicate};
              self.forEachComponent(quad, function(component, key) {
                copy[key] = self.modifyFirstDegreeComponent(id, component, key);
              });
              nquads.push(_toNQuad(copy));
              callback();
            }, function(err) {
              if (err) {
                return callback(err);
              }
              nquads.sort();
              info.hash = NormalizeHash.hashNQuads(self.name, nquads);
              callback(null, info.hash);
            });
          };
          Normalize.prototype.modifyFirstDegreeComponent = function(id, component) {
            if (component.type !== 'blank node') {
              return component;
            }
            component = _clone(component);
            component.value = (component.value === id ? '_:a' : '_:z');
            return component;
          };
          Normalize.prototype.hashRelatedBlankNode = function(related, quad, issuer, position, callback) {
            var self = this;
            var id;
            self.waterfall([function(callback) {
              if (self.canonicalIssuer.hasId(related)) {
                id = self.canonicalIssuer.getId(related);
                return callback();
              }
              if (issuer.hasId(related)) {
                id = issuer.getId(related);
                return callback();
              }
              self.hashFirstDegreeQuads(related, function(err, hash) {
                if (err) {
                  return callback(err);
                }
                id = hash;
                callback();
              });
            }], function(err) {
              if (err) {
                return callback(err);
              }
              var md = new NormalizeHash(self.name);
              md.update(position);
              if (position !== 'g') {
                md.update(self.getRelatedPredicate(quad));
              }
              md.update(id);
              return callback(null, md.digest());
            });
          };
          Normalize.prototype.getRelatedPredicate = function(quad) {
            return '<' + quad.predicate.value + '>';
          };
          Normalize.prototype.hashNDegreeQuads = function(id, issuer, callback) {
            var self = this;
            var hashToRelated;
            var md = new NormalizeHash(self.name);
            self.waterfall([function(callback) {
              self.createHashToRelated(id, issuer, function(err, result) {
                if (err) {
                  return callback(err);
                }
                hashToRelated = result;
                callback();
              });
            }, function(callback) {
              var hashes = Object.keys(hashToRelated).sort();
              self.forEach(hashes, function(hash, idx, callback) {
                md.update(hash);
                var chosenPath = '';
                var chosenIssuer;
                var permutator = new Permutator(hashToRelated[hash]);
                self.whilst(function() {
                  return permutator.hasNext();
                }, function(nextPermutation) {
                  var permutation = permutator.next();
                  var issuerCopy = issuer.clone();
                  var path = '';
                  var recursionList = [];
                  self.waterfall([function(callback) {
                    self.forEach(permutation, function(related, idx, callback) {
                      if (self.canonicalIssuer.hasId(related)) {
                        path += self.canonicalIssuer.getId(related);
                      } else {
                        if (!issuerCopy.hasId(related)) {
                          recursionList.push(related);
                        }
                        path += issuerCopy.getId(related);
                      }
                      if (chosenPath.length !== 0 && path.length >= chosenPath.length && path > chosenPath) {
                        return nextPermutation();
                      }
                      callback();
                    }, callback);
                  }, function(callback) {
                    self.forEach(recursionList, function(related, idx, callback) {
                      self.hashNDegreeQuads(related, issuerCopy, function(err, result) {
                        if (err) {
                          return callback(err);
                        }
                        path += issuerCopy.getId(related);
                        path += '<' + result.hash + '>';
                        issuerCopy = result.issuer;
                        if (chosenPath.length !== 0 && path.length >= chosenPath.length && path > chosenPath) {
                          return nextPermutation();
                        }
                        callback();
                      });
                    }, callback);
                  }, function(callback) {
                    if (chosenPath.length === 0 || path < chosenPath) {
                      chosenPath = path;
                      chosenIssuer = issuerCopy;
                    }
                    callback();
                  }], nextPermutation);
                }, function(err) {
                  if (err) {
                    return callback(err);
                  }
                  md.update(chosenPath);
                  issuer = chosenIssuer;
                  callback();
                });
              }, callback);
            }], function(err) {
              callback(err, {
                hash: md.digest(),
                issuer: issuer
              });
            });
          };
          Normalize.prototype.createHashToRelated = function(id, issuer, callback) {
            var self = this;
            var hashToRelated = {};
            var quads = self.blankNodeInfo[id].quads;
            self.forEach(quads, function(quad, idx, callback) {
              self.forEach(quad, function(component, key, callback) {
                if (key === 'predicate' || !(component.type === 'blank node' && component.value !== id)) {
                  return callback();
                }
                var related = component.value;
                var position = POSITIONS[key];
                self.hashRelatedBlankNode(related, quad, issuer, position, function(err, hash) {
                  if (err) {
                    return callback(err);
                  }
                  if (hash in hashToRelated) {
                    hashToRelated[hash].push(related);
                  } else {
                    hashToRelated[hash] = [related];
                  }
                  callback();
                });
              }, callback);
            }, function(err) {
              callback(err, hashToRelated);
            });
          };
          Normalize.prototype.forEachComponent = function(quad, op) {
            for (var key in quad) {
              if (key === 'predicate') {
                continue;
              }
              op(quad[key], key, quad);
            }
          };
          return Normalize;
        })();
        var URGNA2012 = (function() {
          var Normalize = function(options) {
            URDNA2015.call(this, options);
            this.name = 'URGNA2012';
          };
          Normalize.prototype = new URDNA2015();
          Normalize.prototype.modifyFirstDegreeComponent = function(id, component, key) {
            if (component.type !== 'blank node') {
              return component;
            }
            component = _clone(component);
            if (key === 'name') {
              component.value = '_:g';
            } else {
              component.value = (component.value === id ? '_:a' : '_:z');
            }
            return component;
          };
          Normalize.prototype.getRelatedPredicate = function(quad) {
            return quad.predicate.value;
          };
          Normalize.prototype.createHashToRelated = function(id, issuer, callback) {
            var self = this;
            var hashToRelated = {};
            var quads = self.blankNodeInfo[id].quads;
            self.forEach(quads, function(quad, idx, callback) {
              var position;
              var related;
              if (quad.subject.type === 'blank node' && quad.subject.value !== id) {
                related = quad.subject.value;
                position = 'p';
              } else if (quad.object.type === 'blank node' && quad.object.value !== id) {
                related = quad.object.value;
                position = 'r';
              } else {
                return callback();
              }
              self.hashRelatedBlankNode(related, quad, issuer, position, function(err, hash) {
                if (hash in hashToRelated) {
                  hashToRelated[hash].push(related);
                } else {
                  hashToRelated[hash] = [related];
                }
                callback();
              });
            }, function(err) {
              callback(err, hashToRelated);
            });
          };
          return Normalize;
        })();
        function _createNodeMap(input, graphs, graph, issuer, name, list) {
          if (_isArray(input)) {
            for (var i = 0; i < input.length; ++i) {
              _createNodeMap(input[i], graphs, graph, issuer, undefined, list);
            }
            return;
          }
          if (!_isObject(input)) {
            if (list) {
              list.push(input);
            }
            return;
          }
          if (_isValue(input)) {
            if ('@type' in input) {
              var type = input['@type'];
              if (type.indexOf('_:') === 0) {
                input['@type'] = type = issuer.getId(type);
              }
            }
            if (list) {
              list.push(input);
            }
            return;
          }
          if ('@type' in input) {
            var types = input['@type'];
            for (var i = 0; i < types.length; ++i) {
              var type = types[i];
              if (type.indexOf('_:') === 0) {
                issuer.getId(type);
              }
            }
          }
          if (_isUndefined(name)) {
            name = _isBlankNode(input) ? issuer.getId(input['@id']) : input['@id'];
          }
          if (list) {
            list.push({'@id': name});
          }
          var subjects = graphs[graph];
          var subject = subjects[name] = subjects[name] || {};
          subject['@id'] = name;
          var properties = Object.keys(input).sort();
          for (var pi = 0; pi < properties.length; ++pi) {
            var property = properties[pi];
            if (property === '@id') {
              continue;
            }
            if (property === '@reverse') {
              var referencedNode = {'@id': name};
              var reverseMap = input['@reverse'];
              for (var reverseProperty in reverseMap) {
                var items = reverseMap[reverseProperty];
                for (var ii = 0; ii < items.length; ++ii) {
                  var item = items[ii];
                  var itemName = item['@id'];
                  if (_isBlankNode(item)) {
                    itemName = issuer.getId(itemName);
                  }
                  _createNodeMap(item, graphs, graph, issuer, itemName);
                  jsonld.addValue(subjects[itemName], reverseProperty, referencedNode, {
                    propertyIsArray: true,
                    allowDuplicate: false
                  });
                }
              }
              continue;
            }
            if (property === '@graph') {
              if (!(name in graphs)) {
                graphs[name] = {};
              }
              var g = (graph === '@merged') ? graph : name;
              _createNodeMap(input[property], graphs, g, issuer);
              continue;
            }
            if (property !== '@type' && _isKeyword(property)) {
              if (property === '@index' && property in subject && (input[property] !== subject[property] || input[property]['@id'] !== subject[property]['@id'])) {
                throw new JsonLdError('Invalid JSON-LD syntax; conflicting @index property detected.', 'jsonld.SyntaxError', {
                  code: 'conflicting indexes',
                  subject: subject
                });
              }
              subject[property] = input[property];
              continue;
            }
            var objects = input[property];
            if (property.indexOf('_:') === 0) {
              property = issuer.getId(property);
            }
            if (objects.length === 0) {
              jsonld.addValue(subject, property, [], {propertyIsArray: true});
              continue;
            }
            for (var oi = 0; oi < objects.length; ++oi) {
              var o = objects[oi];
              if (property === '@type') {
                o = (o.indexOf('_:') === 0) ? issuer.getId(o) : o;
              }
              if (_isSubject(o) || _isSubjectReference(o)) {
                var id = _isBlankNode(o) ? issuer.getId(o['@id']) : o['@id'];
                jsonld.addValue(subject, property, {'@id': id}, {
                  propertyIsArray: true,
                  allowDuplicate: false
                });
                _createNodeMap(o, graphs, graph, issuer, id);
              } else if (_isList(o)) {
                var _list = [];
                _createNodeMap(o['@list'], graphs, graph, issuer, name, _list);
                o = {'@list': _list};
                jsonld.addValue(subject, property, o, {
                  propertyIsArray: true,
                  allowDuplicate: false
                });
              } else {
                _createNodeMap(o, graphs, graph, issuer, name);
                jsonld.addValue(subject, property, o, {
                  propertyIsArray: true,
                  allowDuplicate: false
                });
              }
            }
          }
        }
        function _mergeNodeMaps(graphs) {
          var defaultGraph = graphs['@default'];
          var graphNames = Object.keys(graphs).sort();
          for (var i = 0; i < graphNames.length; ++i) {
            var graphName = graphNames[i];
            if (graphName === '@default') {
              continue;
            }
            var nodeMap = graphs[graphName];
            var subject = defaultGraph[graphName];
            if (!subject) {
              defaultGraph[graphName] = subject = {
                '@id': graphName,
                '@graph': []
              };
            } else if (!('@graph' in subject)) {
              subject['@graph'] = [];
            }
            var graph = subject['@graph'];
            var ids = Object.keys(nodeMap).sort();
            for (var ii = 0; ii < ids.length; ++ii) {
              var node = nodeMap[ids[ii]];
              if (!_isSubjectReference(node)) {
                graph.push(node);
              }
            }
          }
          return defaultGraph;
        }
        function _frame(state, subjects, frame, parent, property) {
          _validateFrame(frame);
          frame = frame[0];
          var options = state.options;
          var flags = {
            embed: _getFrameFlag(frame, options, 'embed'),
            explicit: _getFrameFlag(frame, options, 'explicit'),
            requireAll: _getFrameFlag(frame, options, 'requireAll')
          };
          var matches = _filterSubjects(state, subjects, frame, flags);
          var ids = Object.keys(matches).sort();
          for (var idx = 0; idx < ids.length; ++idx) {
            var id = ids[idx];
            var subject = matches[id];
            if (flags.embed === '@link' && id in state.link) {
              _addFrameOutput(parent, property, state.link[id]);
              continue;
            }
            if (property === null) {
              state.uniqueEmbeds = {};
            }
            var output = {};
            output['@id'] = id;
            state.link[id] = output;
            if (flags.embed === '@never' || _createsCircularReference(subject, state.subjectStack)) {
              _addFrameOutput(parent, property, output);
              continue;
            }
            if (flags.embed === '@last') {
              if (id in state.uniqueEmbeds) {
                _removeEmbed(state, id);
              }
              state.uniqueEmbeds[id] = {
                parent: parent,
                property: property
              };
            }
            state.subjectStack.push(subject);
            var props = Object.keys(subject).sort();
            for (var i = 0; i < props.length; i++) {
              var prop = props[i];
              if (_isKeyword(prop)) {
                output[prop] = _clone(subject[prop]);
                continue;
              }
              if (flags.explicit && !(prop in frame)) {
                continue;
              }
              var objects = subject[prop];
              for (var oi = 0; oi < objects.length; ++oi) {
                var o = objects[oi];
                if (_isList(o)) {
                  var list = {'@list': []};
                  _addFrameOutput(output, prop, list);
                  var src = o['@list'];
                  for (var n in src) {
                    o = src[n];
                    if (_isSubjectReference(o)) {
                      var subframe = (prop in frame ? frame[prop][0]['@list'] : _createImplicitFrame(flags));
                      _frame(state, [o['@id']], subframe, list, '@list');
                    } else {
                      _addFrameOutput(list, '@list', _clone(o));
                    }
                  }
                  continue;
                }
                if (_isSubjectReference(o)) {
                  var subframe = (prop in frame ? frame[prop] : _createImplicitFrame(flags));
                  _frame(state, [o['@id']], subframe, output, prop);
                } else {
                  _addFrameOutput(output, prop, _clone(o));
                }
              }
            }
            var props = Object.keys(frame).sort();
            for (var i = 0; i < props.length; ++i) {
              var prop = props[i];
              if (_isKeyword(prop)) {
                continue;
              }
              var next = frame[prop][0];
              var omitDefaultOn = _getFrameFlag(next, options, 'omitDefault');
              if (!omitDefaultOn && !(prop in output)) {
                var preserve = '@null';
                if ('@default' in next) {
                  preserve = _clone(next['@default']);
                }
                if (!_isArray(preserve)) {
                  preserve = [preserve];
                }
                output[prop] = [{'@preserve': preserve}];
              }
            }
            _addFrameOutput(parent, property, output);
            state.subjectStack.pop();
          }
        }
        function _createImplicitFrame(flags) {
          var frame = {};
          for (var key in flags) {
            if (flags[key] !== undefined) {
              frame['@' + key] = [flags[key]];
            }
          }
          return [frame];
        }
        function _createsCircularReference(subjectToEmbed, subjectStack) {
          for (var i = subjectStack.length - 1; i >= 0; --i) {
            if (subjectStack[i]['@id'] === subjectToEmbed['@id']) {
              return true;
            }
          }
          return false;
        }
        function _getFrameFlag(frame, options, name) {
          var flag = '@' + name;
          var rval = (flag in frame ? frame[flag][0] : options[name]);
          if (name === 'embed') {
            if (rval === true) {
              rval = '@last';
            } else if (rval === false) {
              rval = '@never';
            } else if (rval !== '@always' && rval !== '@never' && rval !== '@link') {
              rval = '@last';
            }
          }
          return rval;
        }
        function _validateFrame(frame) {
          if (!_isArray(frame) || frame.length !== 1 || !_isObject(frame[0])) {
            throw new JsonLdError('Invalid JSON-LD syntax; a JSON-LD frame must be a single object.', 'jsonld.SyntaxError', {frame: frame});
          }
        }
        function _filterSubjects(state, subjects, frame, flags) {
          var rval = {};
          for (var i = 0; i < subjects.length; ++i) {
            var id = subjects[i];
            var subject = state.subjects[id];
            if (_filterSubject(subject, frame, flags)) {
              rval[id] = subject;
            }
          }
          return rval;
        }
        function _filterSubject(subject, frame, flags) {
          if ('@type' in frame && !(frame['@type'].length === 1 && _isObject(frame['@type'][0]))) {
            var types = frame['@type'];
            for (var i = 0; i < types.length; ++i) {
              if (jsonld.hasValue(subject, '@type', types[i])) {
                return true;
              }
            }
            return false;
          }
          var wildcard = true;
          var matchesSome = false;
          for (var key in frame) {
            if (_isKeyword(key)) {
              if (key !== '@id' && key !== '@type') {
                continue;
              }
              wildcard = false;
              if (key === '@id' && _isString(frame[key])) {
                if (subject[key] !== frame[key]) {
                  return false;
                }
                matchesSome = true;
                continue;
              }
            }
            wildcard = false;
            if (key in subject) {
              if (_isArray(frame[key]) && frame[key].length === 0 && subject[key] !== undefined) {
                return false;
              }
              matchesSome = true;
              continue;
            }
            var hasDefault = (_isArray(frame[key]) && _isObject(frame[key][0]) && '@default' in frame[key][0]);
            if (flags.requireAll && !hasDefault) {
              return false;
            }
          }
          return wildcard || matchesSome;
        }
        function _removeEmbed(state, id) {
          var embeds = state.uniqueEmbeds;
          var embed = embeds[id];
          var parent = embed.parent;
          var property = embed.property;
          var subject = {'@id': id};
          if (_isArray(parent)) {
            for (var i = 0; i < parent.length; ++i) {
              if (jsonld.compareValues(parent[i], subject)) {
                parent[i] = subject;
                break;
              }
            }
          } else {
            var useArray = _isArray(parent[property]);
            jsonld.removeValue(parent, property, subject, {propertyIsArray: useArray});
            jsonld.addValue(parent, property, subject, {propertyIsArray: useArray});
          }
          var removeDependents = function(id) {
            var ids = Object.keys(embeds);
            for (var i = 0; i < ids.length; ++i) {
              var next = ids[i];
              if (next in embeds && _isObject(embeds[next].parent) && embeds[next].parent['@id'] === id) {
                delete embeds[next];
                removeDependents(next);
              }
            }
          };
          removeDependents(id);
        }
        function _addFrameOutput(parent, property, output) {
          if (_isObject(parent)) {
            jsonld.addValue(parent, property, output, {propertyIsArray: true});
          } else {
            parent.push(output);
          }
        }
        function _removePreserve(ctx, input, options) {
          if (_isArray(input)) {
            var output = [];
            for (var i = 0; i < input.length; ++i) {
              var result = _removePreserve(ctx, input[i], options);
              if (result !== null) {
                output.push(result);
              }
            }
            input = output;
          } else if (_isObject(input)) {
            if ('@preserve' in input) {
              if (input['@preserve'] === '@null') {
                return null;
              }
              return input['@preserve'];
            }
            if (_isValue(input)) {
              return input;
            }
            if (_isList(input)) {
              input['@list'] = _removePreserve(ctx, input['@list'], options);
              return input;
            }
            var idAlias = _compactIri(ctx, '@id');
            if (idAlias in input) {
              var id = input[idAlias];
              if (id in options.link) {
                var idx = options.link[id].indexOf(input);
                if (idx === -1) {
                  options.link[id].push(input);
                } else {
                  return options.link[id][idx];
                }
              } else {
                options.link[id] = [input];
              }
            }
            for (var prop in input) {
              var result = _removePreserve(ctx, input[prop], options);
              var container = jsonld.getContextValue(ctx, prop, '@container');
              if (options.compactArrays && _isArray(result) && result.length === 1 && container === null) {
                result = result[0];
              }
              input[prop] = result;
            }
          }
          return input;
        }
        function _compareShortestLeast(a, b) {
          if (a.length < b.length) {
            return -1;
          }
          if (b.length < a.length) {
            return 1;
          }
          if (a === b) {
            return 0;
          }
          return (a < b) ? -1 : 1;
        }
        function _selectTerm(activeCtx, iri, value, containers, typeOrLanguage, typeOrLanguageValue) {
          if (typeOrLanguageValue === null) {
            typeOrLanguageValue = '@null';
          }
          var prefs = [];
          if ((typeOrLanguageValue === '@id' || typeOrLanguageValue === '@reverse') && _isSubjectReference(value)) {
            if (typeOrLanguageValue === '@reverse') {
              prefs.push('@reverse');
            }
            var term = _compactIri(activeCtx, value['@id'], null, {vocab: true});
            if (term in activeCtx.mappings && activeCtx.mappings[term] && activeCtx.mappings[term]['@id'] === value['@id']) {
              prefs.push.apply(prefs, ['@vocab', '@id']);
            } else {
              prefs.push.apply(prefs, ['@id', '@vocab']);
            }
          } else {
            prefs.push(typeOrLanguageValue);
          }
          prefs.push('@none');
          var containerMap = activeCtx.inverse[iri];
          for (var ci = 0; ci < containers.length; ++ci) {
            var container = containers[ci];
            if (!(container in containerMap)) {
              continue;
            }
            var typeOrLanguageValueMap = containerMap[container][typeOrLanguage];
            for (var pi = 0; pi < prefs.length; ++pi) {
              var pref = prefs[pi];
              if (!(pref in typeOrLanguageValueMap)) {
                continue;
              }
              return typeOrLanguageValueMap[pref];
            }
          }
          return null;
        }
        function _compactIri(activeCtx, iri, value, relativeTo, reverse) {
          if (iri === null) {
            return iri;
          }
          if (_isUndefined(value)) {
            value = null;
          }
          if (_isUndefined(reverse)) {
            reverse = false;
          }
          relativeTo = relativeTo || {};
          var inverseCtx = activeCtx.getInverse();
          if (_isKeyword(iri)) {
            if (iri in inverseCtx) {
              return inverseCtx[iri]['@none']['@type']['@none'];
            }
            return iri;
          }
          if (relativeTo.vocab && iri in inverseCtx) {
            var defaultLanguage = activeCtx['@language'] || '@none';
            var containers = [];
            if (_isObject(value) && '@index' in value) {
              containers.push('@index');
            }
            var typeOrLanguage = '@language';
            var typeOrLanguageValue = '@null';
            if (reverse) {
              typeOrLanguage = '@type';
              typeOrLanguageValue = '@reverse';
              containers.push('@set');
            } else if (_isList(value)) {
              if (!('@index' in value)) {
                containers.push('@list');
              }
              var list = value['@list'];
              var commonLanguage = (list.length === 0) ? defaultLanguage : null;
              var commonType = null;
              for (var i = 0; i < list.length; ++i) {
                var item = list[i];
                var itemLanguage = '@none';
                var itemType = '@none';
                if (_isValue(item)) {
                  if ('@language' in item) {
                    itemLanguage = item['@language'];
                  } else if ('@type' in item) {
                    itemType = item['@type'];
                  } else {
                    itemLanguage = '@null';
                  }
                } else {
                  itemType = '@id';
                }
                if (commonLanguage === null) {
                  commonLanguage = itemLanguage;
                } else if (itemLanguage !== commonLanguage && _isValue(item)) {
                  commonLanguage = '@none';
                }
                if (commonType === null) {
                  commonType = itemType;
                } else if (itemType !== commonType) {
                  commonType = '@none';
                }
                if (commonLanguage === '@none' && commonType === '@none') {
                  break;
                }
              }
              commonLanguage = commonLanguage || '@none';
              commonType = commonType || '@none';
              if (commonType !== '@none') {
                typeOrLanguage = '@type';
                typeOrLanguageValue = commonType;
              } else {
                typeOrLanguageValue = commonLanguage;
              }
            } else {
              if (_isValue(value)) {
                if ('@language' in value && !('@index' in value)) {
                  containers.push('@language');
                  typeOrLanguageValue = value['@language'];
                } else if ('@type' in value) {
                  typeOrLanguage = '@type';
                  typeOrLanguageValue = value['@type'];
                }
              } else {
                typeOrLanguage = '@type';
                typeOrLanguageValue = '@id';
              }
              containers.push('@set');
            }
            containers.push('@none');
            var term = _selectTerm(activeCtx, iri, value, containers, typeOrLanguage, typeOrLanguageValue);
            if (term !== null) {
              return term;
            }
          }
          if (relativeTo.vocab) {
            if ('@vocab' in activeCtx) {
              var vocab = activeCtx['@vocab'];
              if (iri.indexOf(vocab) === 0 && iri !== vocab) {
                var suffix = iri.substr(vocab.length);
                if (!(suffix in activeCtx.mappings)) {
                  return suffix;
                }
              }
            }
          }
          var choice = null;
          var idx = 0;
          var partialMatches = [];
          var iriMap = activeCtx.fastCurieMap;
          var maxPartialLength = iri.length - 1;
          for (; idx < maxPartialLength && iri[idx] in iriMap; ++idx) {
            iriMap = iriMap[iri[idx]];
            if ('' in iriMap) {
              partialMatches.push(iriMap[''][0]);
            }
          }
          for (var i = partialMatches.length - 1; i >= 0; --i) {
            var entry = partialMatches[i];
            var terms = entry.terms;
            for (var ti = 0; ti < terms.length; ++ti) {
              var curie = terms[ti] + ':' + iri.substr(entry.iri.length);
              var isUsableCurie = (!(curie in activeCtx.mappings) || (value === null && activeCtx.mappings[curie]['@id'] === iri));
              if (isUsableCurie && (choice === null || _compareShortestLeast(curie, choice) < 0)) {
                choice = curie;
              }
            }
          }
          if (choice !== null) {
            return choice;
          }
          if (!relativeTo.vocab) {
            return _removeBase(activeCtx['@base'], iri);
          }
          return iri;
        }
        function _compactValue(activeCtx, activeProperty, value) {
          if (_isValue(value)) {
            var type = jsonld.getContextValue(activeCtx, activeProperty, '@type');
            var language = jsonld.getContextValue(activeCtx, activeProperty, '@language');
            var container = jsonld.getContextValue(activeCtx, activeProperty, '@container');
            var preserveIndex = (('@index' in value) && container !== '@index');
            if (!preserveIndex) {
              if (value['@type'] === type || value['@language'] === language) {
                return value['@value'];
              }
            }
            var keyCount = Object.keys(value).length;
            var isValueOnlyKey = (keyCount === 1 || (keyCount === 2 && ('@index' in value) && !preserveIndex));
            var hasDefaultLanguage = ('@language' in activeCtx);
            var isValueString = _isString(value['@value']);
            var hasNullMapping = (activeCtx.mappings[activeProperty] && activeCtx.mappings[activeProperty]['@language'] === null);
            if (isValueOnlyKey && (!hasDefaultLanguage || !isValueString || hasNullMapping)) {
              return value['@value'];
            }
            var rval = {};
            if (preserveIndex) {
              rval[_compactIri(activeCtx, '@index')] = value['@index'];
            }
            if ('@type' in value) {
              rval[_compactIri(activeCtx, '@type')] = _compactIri(activeCtx, value['@type'], null, {vocab: true});
            } else if ('@language' in value) {
              rval[_compactIri(activeCtx, '@language')] = value['@language'];
            }
            rval[_compactIri(activeCtx, '@value')] = value['@value'];
            return rval;
          }
          var expandedProperty = _expandIri(activeCtx, activeProperty, {vocab: true});
          var type = jsonld.getContextValue(activeCtx, activeProperty, '@type');
          var compacted = _compactIri(activeCtx, value['@id'], null, {vocab: type === '@vocab'});
          if (type === '@id' || type === '@vocab' || expandedProperty === '@graph') {
            return compacted;
          }
          var rval = {};
          rval[_compactIri(activeCtx, '@id')] = compacted;
          return rval;
        }
        function _createTermDefinition(activeCtx, localCtx, term, defined) {
          if (term in defined) {
            if (defined[term]) {
              return;
            }
            throw new JsonLdError('Cyclical context definition detected.', 'jsonld.CyclicalContext', {
              code: 'cyclic IRI mapping',
              context: localCtx,
              term: term
            });
          }
          defined[term] = false;
          if (_isKeyword(term)) {
            throw new JsonLdError('Invalid JSON-LD syntax; keywords cannot be overridden.', 'jsonld.SyntaxError', {
              code: 'keyword redefinition',
              context: localCtx,
              term: term
            });
          }
          if (term === '') {
            throw new JsonLdError('Invalid JSON-LD syntax; a term cannot be an empty string.', 'jsonld.SyntaxError', {
              code: 'invalid term definition',
              context: localCtx
            });
          }
          if (activeCtx.mappings[term]) {
            delete activeCtx.mappings[term];
          }
          var value = localCtx[term];
          if (value === null || (_isObject(value) && value['@id'] === null)) {
            activeCtx.mappings[term] = null;
            defined[term] = true;
            return;
          }
          if (_isString(value)) {
            value = {'@id': value};
          }
          if (!_isObject(value)) {
            throw new JsonLdError('Invalid JSON-LD syntax; @context property values must be ' + 'strings or objects.', 'jsonld.SyntaxError', {
              code: 'invalid term definition',
              context: localCtx
            });
          }
          var mapping = activeCtx.mappings[term] = {};
          mapping.reverse = false;
          if ('@reverse' in value) {
            if ('@id' in value) {
              throw new JsonLdError('Invalid JSON-LD syntax; a @reverse term definition must not ' + 'contain @id.', 'jsonld.SyntaxError', {
                code: 'invalid reverse property',
                context: localCtx
              });
            }
            var reverse = value['@reverse'];
            if (!_isString(reverse)) {
              throw new JsonLdError('Invalid JSON-LD syntax; a @context @reverse value must be a string.', 'jsonld.SyntaxError', {
                code: 'invalid IRI mapping',
                context: localCtx
              });
            }
            var id = _expandIri(activeCtx, reverse, {
              vocab: true,
              base: false
            }, localCtx, defined);
            if (!_isAbsoluteIri(id)) {
              throw new JsonLdError('Invalid JSON-LD syntax; a @context @reverse value must be an ' + 'absolute IRI or a blank node identifier.', 'jsonld.SyntaxError', {
                code: 'invalid IRI mapping',
                context: localCtx
              });
            }
            mapping['@id'] = id;
            mapping.reverse = true;
          } else if ('@id' in value) {
            var id = value['@id'];
            if (!_isString(id)) {
              throw new JsonLdError('Invalid JSON-LD syntax; a @context @id value must be an array ' + 'of strings or a string.', 'jsonld.SyntaxError', {
                code: 'invalid IRI mapping',
                context: localCtx
              });
            }
            if (id !== term) {
              id = _expandIri(activeCtx, id, {
                vocab: true,
                base: false
              }, localCtx, defined);
              if (!_isAbsoluteIri(id) && !_isKeyword(id)) {
                throw new JsonLdError('Invalid JSON-LD syntax; a @context @id value must be an ' + 'absolute IRI, a blank node identifier, or a keyword.', 'jsonld.SyntaxError', {
                  code: 'invalid IRI mapping',
                  context: localCtx
                });
              }
              mapping['@id'] = id;
            }
          }
          var colon = term.indexOf(':');
          mapping._termHasColon = (colon !== -1);
          if (!('@id' in mapping)) {
            if (mapping._termHasColon) {
              var prefix = term.substr(0, colon);
              if (prefix in localCtx) {
                _createTermDefinition(activeCtx, localCtx, prefix, defined);
              }
              if (activeCtx.mappings[prefix]) {
                var suffix = term.substr(colon + 1);
                mapping['@id'] = activeCtx.mappings[prefix]['@id'] + suffix;
              } else {
                mapping['@id'] = term;
              }
            } else {
              if (!('@vocab' in activeCtx)) {
                throw new JsonLdError('Invalid JSON-LD syntax; @context terms must define an @id.', 'jsonld.SyntaxError', {
                  code: 'invalid IRI mapping',
                  context: localCtx,
                  term: term
                });
              }
              mapping['@id'] = activeCtx['@vocab'] + term;
            }
          }
          defined[term] = true;
          if ('@type' in value) {
            var type = value['@type'];
            if (!_isString(type)) {
              throw new JsonLdError('Invalid JSON-LD syntax; an @context @type values must be a string.', 'jsonld.SyntaxError', {
                code: 'invalid type mapping',
                context: localCtx
              });
            }
            if (type !== '@id' && type !== '@vocab') {
              type = _expandIri(activeCtx, type, {
                vocab: true,
                base: false
              }, localCtx, defined);
              if (!_isAbsoluteIri(type)) {
                throw new JsonLdError('Invalid JSON-LD syntax; an @context @type value must be an ' + 'absolute IRI.', 'jsonld.SyntaxError', {
                  code: 'invalid type mapping',
                  context: localCtx
                });
              }
              if (type.indexOf('_:') === 0) {
                throw new JsonLdError('Invalid JSON-LD syntax; an @context @type values must be an IRI, ' + 'not a blank node identifier.', 'jsonld.SyntaxError', {
                  code: 'invalid type mapping',
                  context: localCtx
                });
              }
            }
            mapping['@type'] = type;
          }
          if ('@container' in value) {
            var container = value['@container'];
            if (container !== '@list' && container !== '@set' && container !== '@index' && container !== '@language') {
              throw new JsonLdError('Invalid JSON-LD syntax; @context @container value must be ' + 'one of the following: @list, @set, @index, or @language.', 'jsonld.SyntaxError', {
                code: 'invalid container mapping',
                context: localCtx
              });
            }
            if (mapping.reverse && container !== '@index' && container !== '@set' && container !== null) {
              throw new JsonLdError('Invalid JSON-LD syntax; @context @container value for a @reverse ' + 'type definition must be @index or @set.', 'jsonld.SyntaxError', {
                code: 'invalid reverse property',
                context: localCtx
              });
            }
            mapping['@container'] = container;
          }
          if ('@language' in value && !('@type' in value)) {
            var language = value['@language'];
            if (language !== null && !_isString(language)) {
              throw new JsonLdError('Invalid JSON-LD syntax; @context @language value must be ' + 'a string or null.', 'jsonld.SyntaxError', {
                code: 'invalid language mapping',
                context: localCtx
              });
            }
            if (language !== null) {
              language = language.toLowerCase();
            }
            mapping['@language'] = language;
          }
          var id = mapping['@id'];
          if (id === '@context' || id === '@preserve') {
            throw new JsonLdError('Invalid JSON-LD syntax; @context and @preserve cannot be aliased.', 'jsonld.SyntaxError', {
              code: 'invalid keyword alias',
              context: localCtx
            });
          }
        }
        function _expandIri(activeCtx, value, relativeTo, localCtx, defined) {
          if (value === null || _isKeyword(value)) {
            return value;
          }
          value = String(value);
          if (localCtx && value in localCtx && defined[value] !== true) {
            _createTermDefinition(activeCtx, localCtx, value, defined);
          }
          relativeTo = relativeTo || {};
          if (relativeTo.vocab) {
            var mapping = activeCtx.mappings[value];
            if (mapping === null) {
              return null;
            }
            if (mapping) {
              return mapping['@id'];
            }
          }
          var colon = value.indexOf(':');
          if (colon !== -1) {
            var prefix = value.substr(0, colon);
            var suffix = value.substr(colon + 1);
            if (prefix === '_' || suffix.indexOf('//') === 0) {
              return value;
            }
            if (localCtx && prefix in localCtx) {
              _createTermDefinition(activeCtx, localCtx, prefix, defined);
            }
            var mapping = activeCtx.mappings[prefix];
            if (mapping) {
              return mapping['@id'] + suffix;
            }
            return value;
          }
          if (relativeTo.vocab && '@vocab' in activeCtx) {
            return activeCtx['@vocab'] + value;
          }
          var rval = value;
          if (relativeTo.base) {
            rval = jsonld.prependBase(activeCtx['@base'], rval);
          }
          return rval;
        }
        function _prependBase(base, iri) {
          if (base === null) {
            return iri;
          }
          if (iri.indexOf(':') !== -1) {
            return iri;
          }
          if (_isString(base)) {
            base = jsonld.url.parse(base || '');
          }
          var rel = jsonld.url.parse(iri);
          var transform = {protocol: base.protocol || ''};
          if (rel.authority !== null) {
            transform.authority = rel.authority;
            transform.path = rel.path;
            transform.query = rel.query;
          } else {
            transform.authority = base.authority;
            if (rel.path === '') {
              transform.path = base.path;
              if (rel.query !== null) {
                transform.query = rel.query;
              } else {
                transform.query = base.query;
              }
            } else {
              if (rel.path.indexOf('/') === 0) {
                transform.path = rel.path;
              } else {
                var path = base.path;
                if (rel.path !== '') {
                  path = path.substr(0, path.lastIndexOf('/') + 1);
                  if (path.length > 0 && path.substr(-1) !== '/') {
                    path += '/';
                  }
                  path += rel.path;
                }
                transform.path = path;
              }
              transform.query = rel.query;
            }
          }
          transform.path = _removeDotSegments(transform.path, !!transform.authority);
          var rval = transform.protocol;
          if (transform.authority !== null) {
            rval += '//' + transform.authority;
          }
          rval += transform.path;
          if (transform.query !== null) {
            rval += '?' + transform.query;
          }
          if (rel.fragment !== null) {
            rval += '#' + rel.fragment;
          }
          if (rval === '') {
            rval = './';
          }
          return rval;
        }
        function _removeBase(base, iri) {
          if (base === null) {
            return iri;
          }
          if (_isString(base)) {
            base = jsonld.url.parse(base || '');
          }
          var root = '';
          if (base.href !== '') {
            root += (base.protocol || '') + '//' + (base.authority || '');
          } else if (iri.indexOf('//')) {
            root += '//';
          }
          if (iri.indexOf(root) !== 0) {
            return iri;
          }
          var rel = jsonld.url.parse(iri.substr(root.length));
          var baseSegments = base.normalizedPath.split('/');
          var iriSegments = rel.normalizedPath.split('/');
          var last = (rel.fragment || rel.query) ? 0 : 1;
          while (baseSegments.length > 0 && iriSegments.length > last) {
            if (baseSegments[0] !== iriSegments[0]) {
              break;
            }
            baseSegments.shift();
            iriSegments.shift();
          }
          var rval = '';
          if (baseSegments.length > 0) {
            baseSegments.pop();
            for (var i = 0; i < baseSegments.length; ++i) {
              rval += '../';
            }
          }
          rval += iriSegments.join('/');
          if (rel.query !== null) {
            rval += '?' + rel.query;
          }
          if (rel.fragment !== null) {
            rval += '#' + rel.fragment;
          }
          if (rval === '') {
            rval = './';
          }
          return rval;
        }
        function _getInitialContext(options) {
          var base = jsonld.url.parse(options.base || '');
          return {
            '@base': base,
            mappings: {},
            inverse: null,
            getInverse: _createInverseContext,
            clone: _cloneActiveContext
          };
          function _createInverseContext() {
            var activeCtx = this;
            if (activeCtx.inverse) {
              return activeCtx.inverse;
            }
            var inverse = activeCtx.inverse = {};
            var fastCurieMap = activeCtx.fastCurieMap = {};
            var irisToTerms = {};
            var defaultLanguage = activeCtx['@language'] || '@none';
            var mappings = activeCtx.mappings;
            var terms = Object.keys(mappings).sort(_compareShortestLeast);
            for (var i = 0; i < terms.length; ++i) {
              var term = terms[i];
              var mapping = mappings[term];
              if (mapping === null) {
                continue;
              }
              var container = mapping['@container'] || '@none';
              var ids = mapping['@id'];
              if (!_isArray(ids)) {
                ids = [ids];
              }
              for (var ii = 0; ii < ids.length; ++ii) {
                var iri = ids[ii];
                var entry = inverse[iri];
                var isKeyword = _isKeyword(iri);
                if (!entry) {
                  inverse[iri] = entry = {};
                  if (!isKeyword && !mapping._termHasColon) {
                    irisToTerms[iri] = [term];
                    var fastCurieEntry = {
                      iri: iri,
                      terms: irisToTerms[iri]
                    };
                    if (iri[0] in fastCurieMap) {
                      fastCurieMap[iri[0]].push(fastCurieEntry);
                    } else {
                      fastCurieMap[iri[0]] = [fastCurieEntry];
                    }
                  }
                } else if (!isKeyword && !mapping._termHasColon) {
                  irisToTerms[iri].push(term);
                }
                if (!entry[container]) {
                  entry[container] = {
                    '@language': {},
                    '@type': {}
                  };
                }
                entry = entry[container];
                if (mapping.reverse) {
                  _addPreferredTerm(mapping, term, entry['@type'], '@reverse');
                } else if ('@type' in mapping) {
                  _addPreferredTerm(mapping, term, entry['@type'], mapping['@type']);
                } else if ('@language' in mapping) {
                  var language = mapping['@language'] || '@null';
                  _addPreferredTerm(mapping, term, entry['@language'], language);
                } else {
                  _addPreferredTerm(mapping, term, entry['@language'], defaultLanguage);
                  _addPreferredTerm(mapping, term, entry['@type'], '@none');
                  _addPreferredTerm(mapping, term, entry['@language'], '@none');
                }
              }
            }
            for (var key in fastCurieMap) {
              _buildIriMap(fastCurieMap, key, 1);
            }
            return inverse;
          }
          function _buildIriMap(iriMap, key, idx) {
            var entries = iriMap[key];
            var next = iriMap[key] = {};
            var iri;
            var letter;
            for (var i = 0; i < entries.length; ++i) {
              iri = entries[i].iri;
              if (idx >= iri.length) {
                letter = '';
              } else {
                letter = iri[idx];
              }
              if (letter in next) {
                next[letter].push(entries[i]);
              } else {
                next[letter] = [entries[i]];
              }
            }
            for (var key in next) {
              if (key === '') {
                continue;
              }
              _buildIriMap(next, key, idx + 1);
            }
          }
          function _addPreferredTerm(mapping, term, entry, typeOrLanguageValue) {
            if (!(typeOrLanguageValue in entry)) {
              entry[typeOrLanguageValue] = term;
            }
          }
          function _cloneActiveContext() {
            var child = {};
            child['@base'] = this['@base'];
            child.mappings = _clone(this.mappings);
            child.clone = this.clone;
            child.inverse = null;
            child.getInverse = this.getInverse;
            if ('@language' in this) {
              child['@language'] = this['@language'];
            }
            if ('@vocab' in this) {
              child['@vocab'] = this['@vocab'];
            }
            return child;
          }
        }
        function _isKeyword(v) {
          if (!_isString(v)) {
            return false;
          }
          switch (v) {
            case '@base':
            case '@context':
            case '@container':
            case '@default':
            case '@embed':
            case '@explicit':
            case '@graph':
            case '@id':
            case '@index':
            case '@language':
            case '@list':
            case '@omitDefault':
            case '@preserve':
            case '@requireAll':
            case '@reverse':
            case '@set':
            case '@type':
            case '@value':
            case '@vocab':
              return true;
          }
          return false;
        }
        function _isObject(v) {
          return (Object.prototype.toString.call(v) === '[object Object]');
        }
        function _isEmptyObject(v) {
          return _isObject(v) && Object.keys(v).length === 0;
        }
        function _isArray(v) {
          return Array.isArray(v);
        }
        function _validateTypeValue(v) {
          if (_isString(v) || _isEmptyObject(v)) {
            return;
          }
          var isValid = false;
          if (_isArray(v)) {
            isValid = true;
            for (var i = 0; i < v.length; ++i) {
              if (!(_isString(v[i]))) {
                isValid = false;
                break;
              }
            }
          }
          if (!isValid) {
            throw new JsonLdError('Invalid JSON-LD syntax; "@type" value must a string, an array of ' + 'strings, or an empty object.', 'jsonld.SyntaxError', {
              code: 'invalid type value',
              value: v
            });
          }
        }
        function _isString(v) {
          return (typeof v === 'string' || Object.prototype.toString.call(v) === '[object String]');
        }
        function _isNumber(v) {
          return (typeof v === 'number' || Object.prototype.toString.call(v) === '[object Number]');
        }
        function _isDouble(v) {
          return _isNumber(v) && String(v).indexOf('.') !== -1;
        }
        function _isNumeric(v) {
          return !isNaN(parseFloat(v)) && isFinite(v);
        }
        function _isBoolean(v) {
          return (typeof v === 'boolean' || Object.prototype.toString.call(v) === '[object Boolean]');
        }
        function _isUndefined(v) {
          return (typeof v === 'undefined');
        }
        function _isSubject(v) {
          var rval = false;
          if (_isObject(v) && !(('@value' in v) || ('@set' in v) || ('@list' in v))) {
            var keyCount = Object.keys(v).length;
            rval = (keyCount > 1 || !('@id' in v));
          }
          return rval;
        }
        function _isSubjectReference(v) {
          return (_isObject(v) && Object.keys(v).length === 1 && ('@id' in v));
        }
        function _isValue(v) {
          return _isObject(v) && ('@value' in v);
        }
        function _isList(v) {
          return _isObject(v) && ('@list' in v);
        }
        function _isBlankNode(v) {
          var rval = false;
          if (_isObject(v)) {
            if ('@id' in v) {
              rval = (v['@id'].indexOf('_:') === 0);
            } else {
              rval = (Object.keys(v).length === 0 || !(('@value' in v) || ('@set' in v) || ('@list' in v)));
            }
          }
          return rval;
        }
        function _isAbsoluteIri(v) {
          return _isString(v) && v.indexOf(':') !== -1;
        }
        function _clone(value) {
          if (value && typeof value === 'object') {
            var rval;
            if (_isArray(value)) {
              rval = [];
              for (var i = 0; i < value.length; ++i) {
                rval[i] = _clone(value[i]);
              }
            } else if (_isObject(value)) {
              rval = {};
              for (var key in value) {
                rval[key] = _clone(value[key]);
              }
            } else {
              rval = value.toString();
            }
            return rval;
          }
          return value;
        }
        function _findContextUrls(input, urls, replace, base) {
          var count = Object.keys(urls).length;
          if (_isArray(input)) {
            for (var i = 0; i < input.length; ++i) {
              _findContextUrls(input[i], urls, replace, base);
            }
            return (count < Object.keys(urls).length);
          } else if (_isObject(input)) {
            for (var key in input) {
              if (key !== '@context') {
                _findContextUrls(input[key], urls, replace, base);
                continue;
              }
              var ctx = input[key];
              if (_isArray(ctx)) {
                var length = ctx.length;
                for (var i = 0; i < length; ++i) {
                  var _ctx = ctx[i];
                  if (_isString(_ctx)) {
                    _ctx = jsonld.prependBase(base, _ctx);
                    if (replace) {
                      _ctx = urls[_ctx];
                      if (_isArray(_ctx)) {
                        Array.prototype.splice.apply(ctx, [i, 1].concat(_ctx));
                        i += _ctx.length - 1;
                        length = ctx.length;
                      } else {
                        ctx[i] = _ctx;
                      }
                    } else if (!(_ctx in urls)) {
                      urls[_ctx] = false;
                    }
                  }
                }
              } else if (_isString(ctx)) {
                ctx = jsonld.prependBase(base, ctx);
                if (replace) {
                  input[key] = urls[ctx];
                } else if (!(ctx in urls)) {
                  urls[ctx] = false;
                }
              }
            }
            return (count < Object.keys(urls).length);
          }
          return false;
        }
        function _retrieveContextUrls(input, options, callback) {
          var error = null;
          var documentLoader = options.documentLoader;
          var retrieve = function(input, cycles, documentLoader, base, callback) {
            if (Object.keys(cycles).length > MAX_CONTEXT_URLS) {
              error = new JsonLdError('Maximum number of @context URLs exceeded.', 'jsonld.ContextUrlError', {
                code: 'loading remote context failed',
                max: MAX_CONTEXT_URLS
              });
              return callback(error);
            }
            var urls = {};
            var finished = function() {
              _findContextUrls(input, urls, true, base);
              callback(null, input);
            };
            if (!_findContextUrls(input, urls, false, base)) {
              finished();
            }
            var queue = [];
            for (var url in urls) {
              if (urls[url] === false) {
                queue.push(url);
              }
            }
            var count = queue.length;
            for (var i = 0; i < queue.length; ++i) {
              (function(url) {
                if (url in cycles) {
                  error = new JsonLdError('Cyclical @context URLs detected.', 'jsonld.ContextUrlError', {
                    code: 'recursive context inclusion',
                    url: url
                  });
                  return callback(error);
                }
                var _cycles = _clone(cycles);
                _cycles[url] = true;
                var done = function(err, remoteDoc) {
                  if (error) {
                    return;
                  }
                  var ctx = remoteDoc ? remoteDoc.document : null;
                  if (!err && _isString(ctx)) {
                    try {
                      ctx = JSON.parse(ctx);
                    } catch (ex) {
                      err = ex;
                    }
                  }
                  if (err) {
                    err = new JsonLdError('Dereferencing a URL did not result in a valid JSON-LD object. ' + 'Possible causes are an inaccessible URL perhaps due to ' + 'a same-origin policy (ensure the server uses CORS if you are ' + 'using client-side JavaScript), too many redirects, a ' + 'non-JSON response, or more than one HTTP Link Header was ' + 'provided for a remote context.', 'jsonld.InvalidUrl', {
                      code: 'loading remote context failed',
                      url: url,
                      cause: err
                    });
                  } else if (!_isObject(ctx)) {
                    err = new JsonLdError('Dereferencing a URL did not result in a JSON object. The ' + 'response was valid JSON, but it was not a JSON object.', 'jsonld.InvalidUrl', {
                      code: 'invalid remote context',
                      url: url,
                      cause: err
                    });
                  }
                  if (err) {
                    error = err;
                    return callback(error);
                  }
                  if (!('@context' in ctx)) {
                    ctx = {'@context': {}};
                  } else {
                    ctx = {'@context': ctx['@context']};
                  }
                  if (remoteDoc.contextUrl) {
                    if (!_isArray(ctx['@context'])) {
                      ctx['@context'] = [ctx['@context']];
                    }
                    ctx['@context'].push(remoteDoc.contextUrl);
                  }
                  retrieve(ctx, _cycles, documentLoader, url, function(err, ctx) {
                    if (err) {
                      return callback(err);
                    }
                    urls[url] = ctx['@context'];
                    count -= 1;
                    if (count === 0) {
                      finished();
                    }
                  });
                };
                var promise = documentLoader(url, done);
                if (promise && 'then' in promise) {
                  promise.then(done.bind(null, null), done);
                }
              }(queue[i]));
            }
          };
          retrieve(input, {}, documentLoader, options.base, callback);
        }
        if (!Object.keys) {
          Object.keys = function(o) {
            if (o !== Object(o)) {
              throw new TypeError('Object.keys called on non-object');
            }
            var rval = [];
            for (var p in o) {
              if (Object.prototype.hasOwnProperty.call(o, p)) {
                rval.push(p);
              }
            }
            return rval;
          };
        }
        function _parseNQuads(input) {
          var iri = '(?:<([^:]+:[^>]*)>)';
          var bnode = '(_:(?:[A-Za-z0-9]+))';
          var plain = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"';
          var datatype = '(?:\\^\\^' + iri + ')';
          var language = '(?:@([a-z]+(?:-[a-z0-9]+)*))';
          var literal = '(?:' + plain + '(?:' + datatype + '|' + language + ')?)';
          var comment = '(?:#.*)?';
          var ws = '[ \\t]+';
          var wso = '[ \\t]*';
          var eoln = /(?:\r\n)|(?:\n)|(?:\r)/g;
          var empty = new RegExp('^' + wso + comment + '$');
          var subject = '(?:' + iri + '|' + bnode + ')' + ws;
          var property = iri + ws;
          var object = '(?:' + iri + '|' + bnode + '|' + literal + ')' + wso;
          var graphName = '(?:\\.|(?:(?:' + iri + '|' + bnode + ')' + wso + '\\.))';
          var quad = new RegExp('^' + wso + subject + property + object + graphName + wso + comment + '$');
          var dataset = {};
          var lines = input.split(eoln);
          var lineNumber = 0;
          for (var li = 0; li < lines.length; ++li) {
            var line = lines[li];
            lineNumber++;
            if (empty.test(line)) {
              continue;
            }
            var match = line.match(quad);
            if (match === null) {
              throw new JsonLdError('Error while parsing N-Quads; invalid quad.', 'jsonld.ParseError', {line: lineNumber});
            }
            var triple = {};
            if (!_isUndefined(match[1])) {
              triple.subject = {
                type: 'IRI',
                value: match[1]
              };
            } else {
              triple.subject = {
                type: 'blank node',
                value: match[2]
              };
            }
            triple.predicate = {
              type: 'IRI',
              value: match[3]
            };
            if (!_isUndefined(match[4])) {
              triple.object = {
                type: 'IRI',
                value: match[4]
              };
            } else if (!_isUndefined(match[5])) {
              triple.object = {
                type: 'blank node',
                value: match[5]
              };
            } else {
              triple.object = {type: 'literal'};
              if (!_isUndefined(match[7])) {
                triple.object.datatype = match[7];
              } else if (!_isUndefined(match[8])) {
                triple.object.datatype = RDF_LANGSTRING;
                triple.object.language = match[8];
              } else {
                triple.object.datatype = XSD_STRING;
              }
              var unescaped = match[6].replace(/\\"/g, '"').replace(/\\t/g, '\t').replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\\\/g, '\\');
              triple.object.value = unescaped;
            }
            var name = '@default';
            if (!_isUndefined(match[9])) {
              name = match[9];
            } else if (!_isUndefined(match[10])) {
              name = match[10];
            }
            if (!(name in dataset)) {
              dataset[name] = [triple];
            } else {
              var unique = true;
              var triples = dataset[name];
              for (var ti = 0; unique && ti < triples.length; ++ti) {
                if (_compareRDFTriples(triples[ti], triple)) {
                  unique = false;
                }
              }
              if (unique) {
                triples.push(triple);
              }
            }
          }
          return dataset;
        }
        jsonld.registerRDFParser('application/nquads', _parseNQuads);
        function _toNQuads(dataset) {
          var quads = [];
          for (var graphName in dataset) {
            var triples = dataset[graphName];
            for (var ti = 0; ti < triples.length; ++ti) {
              var triple = triples[ti];
              if (graphName === '@default') {
                graphName = null;
              }
              quads.push(_toNQuad(triple, graphName));
            }
          }
          return quads.sort().join('');
        }
        function _toNQuad(triple, graphName) {
          var s = triple.subject;
          var p = triple.predicate;
          var o = triple.object;
          var g = graphName || null;
          if ('name' in triple && triple.name) {
            g = triple.name.value;
          }
          var quad = '';
          if (s.type === 'IRI') {
            quad += '<' + s.value + '>';
          } else {
            quad += s.value;
          }
          quad += ' ';
          if (p.type === 'IRI') {
            quad += '<' + p.value + '>';
          } else {
            quad += p.value;
          }
          quad += ' ';
          if (o.type === 'IRI') {
            quad += '<' + o.value + '>';
          } else if (o.type === 'blank node') {
            quad += o.value;
          } else {
            var escaped = o.value.replace(/\\/g, '\\\\').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\"/g, '\\"');
            quad += '"' + escaped + '"';
            if (o.datatype === RDF_LANGSTRING) {
              if (o.language) {
                quad += '@' + o.language;
              }
            } else if (o.datatype !== XSD_STRING) {
              quad += '^^<' + o.datatype + '>';
            }
          }
          if (g !== null && g !== undefined) {
            if (g.indexOf('_:') !== 0) {
              quad += ' <' + g + '>';
            } else {
              quad += ' ' + g;
            }
          }
          quad += ' .\n';
          return quad;
        }
        function _parseRdfaApiData(data) {
          var dataset = {};
          dataset['@default'] = [];
          var subjects = data.getSubjects();
          for (var si = 0; si < subjects.length; ++si) {
            var subject = subjects[si];
            if (subject === null) {
              continue;
            }
            var triples = data.getSubjectTriples(subject);
            if (triples === null) {
              continue;
            }
            var predicates = triples.predicates;
            for (var predicate in predicates) {
              var objects = predicates[predicate].objects;
              for (var oi = 0; oi < objects.length; ++oi) {
                var object = objects[oi];
                var triple = {};
                if (subject.indexOf('_:') === 0) {
                  triple.subject = {
                    type: 'blank node',
                    value: subject
                  };
                } else {
                  triple.subject = {
                    type: 'IRI',
                    value: subject
                  };
                }
                if (predicate.indexOf('_:') === 0) {
                  triple.predicate = {
                    type: 'blank node',
                    value: predicate
                  };
                } else {
                  triple.predicate = {
                    type: 'IRI',
                    value: predicate
                  };
                }
                var value = object.value;
                if (object.type === RDF_XML_LITERAL) {
                  if (!XMLSerializer) {
                    _defineXMLSerializer();
                  }
                  var serializer = new XMLSerializer();
                  value = '';
                  for (var x = 0; x < object.value.length; x++) {
                    if (object.value[x].nodeType === Node.ELEMENT_NODE) {
                      value += serializer.serializeToString(object.value[x]);
                    } else if (object.value[x].nodeType === Node.TEXT_NODE) {
                      value += object.value[x].nodeValue;
                    }
                  }
                }
                triple.object = {};
                if (object.type === RDF_OBJECT) {
                  if (object.value.indexOf('_:') === 0) {
                    triple.object.type = 'blank node';
                  } else {
                    triple.object.type = 'IRI';
                  }
                } else {
                  triple.object.type = 'literal';
                  if (object.type === RDF_PLAIN_LITERAL) {
                    if (object.language) {
                      triple.object.datatype = RDF_LANGSTRING;
                      triple.object.language = object.language;
                    } else {
                      triple.object.datatype = XSD_STRING;
                    }
                  } else {
                    triple.object.datatype = object.type;
                  }
                }
                triple.object.value = value;
                dataset['@default'].push(triple);
              }
            }
          }
          return dataset;
        }
        jsonld.registerRDFParser('rdfa-api', _parseRdfaApiData);
        function IdentifierIssuer(prefix) {
          this.prefix = prefix;
          this.counter = 0;
          this.existing = {};
        }
        jsonld.IdentifierIssuer = IdentifierIssuer;
        jsonld.UniqueNamer = IdentifierIssuer;
        IdentifierIssuer.prototype.clone = function() {
          var copy = new IdentifierIssuer(this.prefix);
          copy.counter = this.counter;
          copy.existing = _clone(this.existing);
          return copy;
        };
        IdentifierIssuer.prototype.getId = function(old) {
          if (old && old in this.existing) {
            return this.existing[old];
          }
          var identifier = this.prefix + this.counter;
          this.counter += 1;
          if (old) {
            this.existing[old] = identifier;
          }
          return identifier;
        };
        IdentifierIssuer.prototype.getName = IdentifierIssuer.prototype.getName;
        IdentifierIssuer.prototype.hasId = function(old) {
          return (old in this.existing);
        };
        IdentifierIssuer.prototype.isNamed = IdentifierIssuer.prototype.hasId;
        var Permutator = function(list) {
          this.list = list.sort();
          this.done = false;
          this.left = {};
          for (var i = 0; i < list.length; ++i) {
            this.left[list[i]] = true;
          }
        };
        Permutator.prototype.hasNext = function() {
          return !this.done;
        };
        Permutator.prototype.next = function() {
          var rval = this.list.slice();
          var k = null;
          var pos = 0;
          var length = this.list.length;
          for (var i = 0; i < length; ++i) {
            var element = this.list[i];
            var left = this.left[element];
            if ((k === null || element > k) && ((left && i > 0 && element > this.list[i - 1]) || (!left && i < (length - 1) && element > this.list[i + 1]))) {
              k = element;
              pos = i;
            }
          }
          if (k === null) {
            this.done = true;
          } else {
            var swap = this.left[k] ? pos - 1 : pos + 1;
            this.list[pos] = this.list[swap];
            this.list[swap] = k;
            for (var i = 0; i < length; ++i) {
              if (this.list[i] > k) {
                this.left[this.list[i]] = !this.left[this.list[i]];
              }
            }
          }
          return rval;
        };
        var NormalizeHash = function(algorithm) {
          if (!(this instanceof NormalizeHash)) {
            return new NormalizeHash(algorithm);
          }
          if (['URDNA2015', 'URGNA2012'].indexOf(algorithm) === -1) {
            throw new Error('Invalid RDF Dataset Normalization algorithm: ' + algorithm);
          }
          NormalizeHash._init.call(this, algorithm);
        };
        NormalizeHash.hashNQuads = function(algorithm, nquads) {
          var md = new NormalizeHash(algorithm);
          for (var i = 0; i < nquads.length; ++i) {
            md.update(nquads[i]);
          }
          return md.digest();
        };
        (function(_nodejs) {
          if (_nodejs) {
            var crypto = $__require('5');
            NormalizeHash._init = function(algorithm) {
              if (algorithm === 'URDNA2015') {
                algorithm = 'sha256';
              } else {
                algorithm = 'sha1';
              }
              this.md = crypto.createHash(algorithm);
            };
            NormalizeHash.prototype.update = function(msg) {
              return this.md.update(msg, 'utf8');
            };
            NormalizeHash.prototype.digest = function() {
              return this.md.digest('hex');
            };
            return;
          }
          NormalizeHash._init = function(algorithm) {
            if (algorithm === 'URDNA2015') {
              algorithm = new sha256.Algorithm();
            } else {
              algorithm = new sha1.Algorithm();
            }
            this.md = new MessageDigest(algorithm);
          };
          NormalizeHash.prototype.update = function(msg) {
            return this.md.update(msg);
          };
          NormalizeHash.prototype.digest = function() {
            return this.md.digest().toHex();
          };
          var MessageDigest = function(algorithm) {
            if (!(this instanceof MessageDigest)) {
              return new MessageDigest(algorithm);
            }
            this._algorithm = algorithm;
            if (!MessageDigest._padding || MessageDigest._padding.length < this._algorithm.blockSize) {
              MessageDigest._padding = String.fromCharCode(128);
              var c = String.fromCharCode(0x00);
              var n = 64;
              while (n > 0) {
                if (n & 1) {
                  MessageDigest._padding += c;
                }
                n >>>= 1;
                if (n > 0) {
                  c += c;
                }
              }
            }
            this.start();
          };
          MessageDigest.prototype.start = function() {
            this.messageLength = 0;
            this.fullMessageLength = [];
            var int32s = this._algorithm.messageLengthSize / 4;
            for (var i = 0; i < int32s; ++i) {
              this.fullMessageLength.push(0);
            }
            this._input = new MessageDigest.ByteBuffer();
            this.state = this._algorithm.start();
            return this;
          };
          MessageDigest.prototype.update = function(msg) {
            msg = new MessageDigest.ByteBuffer(unescape(encodeURIComponent(msg)));
            this.messageLength += msg.length();
            var len = msg.length();
            len = [(len / 0x100000000) >>> 0, len >>> 0];
            for (var i = this.fullMessageLength.length - 1; i >= 0; --i) {
              this.fullMessageLength[i] += len[1];
              len[1] = len[0] + ((this.fullMessageLength[i] / 0x100000000) >>> 0);
              this.fullMessageLength[i] = this.fullMessageLength[i] >>> 0;
              len[0] = ((len[1] / 0x100000000) >>> 0);
            }
            this._input.putBytes(msg.bytes());
            while (this._input.length() >= this._algorithm.blockSize) {
              this.state = this._algorithm.digest(this.state, this._input);
            }
            if (this._input.read > 2048 || this._input.length() === 0) {
              this._input.compact();
            }
            return this;
          };
          MessageDigest.prototype.digest = function() {
            var finalBlock = new MessageDigest.ByteBuffer();
            finalBlock.putBytes(this._input.bytes());
            var remaining = (this.fullMessageLength[this.fullMessageLength.length - 1] + this._algorithm.messageLengthSize);
            var overflow = remaining & (this._algorithm.blockSize - 1);
            finalBlock.putBytes(MessageDigest._padding.substr(0, this._algorithm.blockSize - overflow));
            var messageLength = new MessageDigest.ByteBuffer();
            for (var i = 0; i < this.fullMessageLength.length; ++i) {
              messageLength.putInt32((this.fullMessageLength[i] << 3) | (this.fullMessageLength[i + 1] >>> 28));
            }
            this._algorithm.writeMessageLength(finalBlock, messageLength);
            var state = this._algorithm.digest(this.state.copy(), finalBlock);
            var rval = new MessageDigest.ByteBuffer();
            state.write(rval);
            return rval;
          };
          MessageDigest.ByteBuffer = function(data) {
            if (typeof data === 'string') {
              this.data = data;
            } else {
              this.data = '';
            }
            this.read = 0;
          };
          MessageDigest.ByteBuffer.prototype.putInt32 = function(i) {
            this.data += (String.fromCharCode(i >> 24 & 0xFF) + String.fromCharCode(i >> 16 & 0xFF) + String.fromCharCode(i >> 8 & 0xFF) + String.fromCharCode(i & 0xFF));
          };
          MessageDigest.ByteBuffer.prototype.getInt32 = function() {
            var rval = (this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3));
            this.read += 4;
            return rval;
          };
          MessageDigest.ByteBuffer.prototype.putBytes = function(bytes) {
            this.data += bytes;
          };
          MessageDigest.ByteBuffer.prototype.bytes = function() {
            return this.data.slice(this.read);
          };
          MessageDigest.ByteBuffer.prototype.length = function() {
            return this.data.length - this.read;
          };
          MessageDigest.ByteBuffer.prototype.compact = function() {
            this.data = this.data.slice(this.read);
            this.read = 0;
          };
          MessageDigest.ByteBuffer.prototype.toHex = function() {
            var rval = '';
            for (var i = this.read; i < this.data.length; ++i) {
              var b = this.data.charCodeAt(i);
              if (b < 16) {
                rval += '0';
              }
              rval += b.toString(16);
            }
            return rval;
          };
          var sha1 = {_w: null};
          sha1.Algorithm = function() {
            this.name = 'sha1', this.blockSize = 64;
            this.digestLength = 20;
            this.messageLengthSize = 8;
          };
          sha1.Algorithm.prototype.start = function() {
            if (!sha1._w) {
              sha1._w = new Array(80);
            }
            return sha1._createState();
          };
          sha1.Algorithm.prototype.writeMessageLength = function(finalBlock, messageLength) {
            finalBlock.putBytes(messageLength.bytes());
          };
          sha1.Algorithm.prototype.digest = function(s, input) {
            var t,
                a,
                b,
                c,
                d,
                e,
                f,
                i;
            var len = input.length();
            var _w = sha1._w;
            while (len >= 64) {
              a = s.h0;
              b = s.h1;
              c = s.h2;
              d = s.h3;
              e = s.h4;
              for (i = 0; i < 16; ++i) {
                t = input.getInt32();
                _w[i] = t;
                f = d ^ (b & (c ^ d));
                t = ((a << 5) | (a >>> 27)) + f + e + 0x5A827999 + t;
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
              }
              for (; i < 20; ++i) {
                t = (_w[i - 3] ^ _w[i - 8] ^ _w[i - 14] ^ _w[i - 16]);
                t = (t << 1) | (t >>> 31);
                _w[i] = t;
                f = d ^ (b & (c ^ d));
                t = ((a << 5) | (a >>> 27)) + f + e + 0x5A827999 + t;
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
              }
              for (; i < 32; ++i) {
                t = (_w[i - 3] ^ _w[i - 8] ^ _w[i - 14] ^ _w[i - 16]);
                t = (t << 1) | (t >>> 31);
                _w[i] = t;
                f = b ^ c ^ d;
                t = ((a << 5) | (a >>> 27)) + f + e + 0x6ED9EBA1 + t;
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
              }
              for (; i < 40; ++i) {
                t = (_w[i - 6] ^ _w[i - 16] ^ _w[i - 28] ^ _w[i - 32]);
                t = (t << 2) | (t >>> 30);
                _w[i] = t;
                f = b ^ c ^ d;
                t = ((a << 5) | (a >>> 27)) + f + e + 0x6ED9EBA1 + t;
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
              }
              for (; i < 60; ++i) {
                t = (_w[i - 6] ^ _w[i - 16] ^ _w[i - 28] ^ _w[i - 32]);
                t = (t << 2) | (t >>> 30);
                _w[i] = t;
                f = (b & c) | (d & (b ^ c));
                t = ((a << 5) | (a >>> 27)) + f + e + 0x8F1BBCDC + t;
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
              }
              for (; i < 80; ++i) {
                t = (_w[i - 6] ^ _w[i - 16] ^ _w[i - 28] ^ _w[i - 32]);
                t = (t << 2) | (t >>> 30);
                _w[i] = t;
                f = b ^ c ^ d;
                t = ((a << 5) | (a >>> 27)) + f + e + 0xCA62C1D6 + t;
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
              }
              s.h0 = (s.h0 + a) | 0;
              s.h1 = (s.h1 + b) | 0;
              s.h2 = (s.h2 + c) | 0;
              s.h3 = (s.h3 + d) | 0;
              s.h4 = (s.h4 + e) | 0;
              len -= 64;
            }
            return s;
          };
          sha1._createState = function() {
            var state = {
              h0: 0x67452301,
              h1: 0xEFCDAB89,
              h2: 0x98BADCFE,
              h3: 0x10325476,
              h4: 0xC3D2E1F0
            };
            state.copy = function() {
              var rval = sha1._createState();
              rval.h0 = state.h0;
              rval.h1 = state.h1;
              rval.h2 = state.h2;
              rval.h3 = state.h3;
              rval.h4 = state.h4;
              return rval;
            };
            state.write = function(buffer) {
              buffer.putInt32(state.h0);
              buffer.putInt32(state.h1);
              buffer.putInt32(state.h2);
              buffer.putInt32(state.h3);
              buffer.putInt32(state.h4);
            };
            return state;
          };
          var sha256 = {
            _k: null,
            _w: null
          };
          sha256.Algorithm = function() {
            this.name = 'sha256', this.blockSize = 64;
            this.digestLength = 32;
            this.messageLengthSize = 8;
          };
          sha256.Algorithm.prototype.start = function() {
            if (!sha256._k) {
              sha256._init();
            }
            return sha256._createState();
          };
          sha256.Algorithm.prototype.writeMessageLength = function(finalBlock, messageLength) {
            finalBlock.putBytes(messageLength.bytes());
          };
          sha256.Algorithm.prototype.digest = function(s, input) {
            var t1,
                t2,
                s0,
                s1,
                ch,
                maj,
                i,
                a,
                b,
                c,
                d,
                e,
                f,
                g,
                h;
            var len = input.length();
            var _k = sha256._k;
            var _w = sha256._w;
            while (len >= 64) {
              for (i = 0; i < 16; ++i) {
                _w[i] = input.getInt32();
              }
              for (; i < 64; ++i) {
                t1 = _w[i - 2];
                t1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
                t2 = _w[i - 15];
                t2 = ((t2 >>> 7) | (t2 << 25)) ^ ((t2 >>> 18) | (t2 << 14)) ^ (t2 >>> 3);
                _w[i] = (t1 + _w[i - 7] + t2 + _w[i - 16]) | 0;
              }
              a = s.h0;
              b = s.h1;
              c = s.h2;
              d = s.h3;
              e = s.h4;
              f = s.h5;
              g = s.h6;
              h = s.h7;
              for (i = 0; i < 64; ++i) {
                s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
                ch = g ^ (e & (f ^ g));
                s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
                maj = (a & b) | (c & (a ^ b));
                t1 = h + s1 + ch + _k[i] + _w[i];
                t2 = s0 + maj;
                h = g;
                g = f;
                f = e;
                e = (d + t1) | 0;
                d = c;
                c = b;
                b = a;
                a = (t1 + t2) | 0;
              }
              s.h0 = (s.h0 + a) | 0;
              s.h1 = (s.h1 + b) | 0;
              s.h2 = (s.h2 + c) | 0;
              s.h3 = (s.h3 + d) | 0;
              s.h4 = (s.h4 + e) | 0;
              s.h5 = (s.h5 + f) | 0;
              s.h6 = (s.h6 + g) | 0;
              s.h7 = (s.h7 + h) | 0;
              len -= 64;
            }
            return s;
          };
          sha256._createState = function() {
            var state = {
              h0: 0x6A09E667,
              h1: 0xBB67AE85,
              h2: 0x3C6EF372,
              h3: 0xA54FF53A,
              h4: 0x510E527F,
              h5: 0x9B05688C,
              h6: 0x1F83D9AB,
              h7: 0x5BE0CD19
            };
            state.copy = function() {
              var rval = sha256._createState();
              rval.h0 = state.h0;
              rval.h1 = state.h1;
              rval.h2 = state.h2;
              rval.h3 = state.h3;
              rval.h4 = state.h4;
              rval.h5 = state.h5;
              rval.h6 = state.h6;
              rval.h7 = state.h7;
              return rval;
            };
            state.write = function(buffer) {
              buffer.putInt32(state.h0);
              buffer.putInt32(state.h1);
              buffer.putInt32(state.h2);
              buffer.putInt32(state.h3);
              buffer.putInt32(state.h4);
              buffer.putInt32(state.h5);
              buffer.putInt32(state.h6);
              buffer.putInt32(state.h7);
            };
            return state;
          };
          sha256._init = function() {
            sha256._k = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
            sha256._w = new Array(64);
          };
        })(_nodejs);
        if (!XMLSerializer) {
          var _defineXMLSerializer = function() {
            XMLSerializer = $__require('5').XMLSerializer;
          };
        }
        jsonld.url = {};
        jsonld.url.parsers = {
          simple: {
            keys: ['href', 'scheme', 'authority', 'path', 'query', 'fragment'],
            regex: /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/
          },
          full: {
            keys: ['href', 'protocol', 'scheme', 'authority', 'auth', 'user', 'password', 'hostname', 'port', 'path', 'directory', 'file', 'query', 'fragment'],
            regex: /^(([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
          }
        };
        jsonld.url.parse = function(str, parser) {
          var parsed = {};
          var o = jsonld.url.parsers[parser || 'full'];
          var m = o.regex.exec(str);
          var i = o.keys.length;
          while (i--) {
            parsed[o.keys[i]] = (m[i] === undefined) ? null : m[i];
          }
          parsed.normalizedPath = _removeDotSegments(parsed.path, !!parsed.authority);
          return parsed;
        };
        function _removeDotSegments(path, hasAuthority) {
          var rval = '';
          if (path.indexOf('/') === 0) {
            rval = '/';
          }
          var input = path.split('/');
          var output = [];
          while (input.length > 0) {
            if (input[0] === '.' || (input[0] === '' && input.length > 1)) {
              input.shift();
              continue;
            }
            if (input[0] === '..') {
              input.shift();
              if (hasAuthority || (output.length > 0 && output[output.length - 1] !== '..')) {
                output.pop();
              } else {
                output.push('..');
              }
              continue;
            }
            output.push(input.shift());
          }
          return rval + output.join('/');
        }
        if (_nodejs) {
          jsonld.useDocumentLoader('node');
        } else if (typeof XMLHttpRequest !== 'undefined') {
          jsonld.useDocumentLoader('xhr');
        }
        if (_nodejs) {
          jsonld.use = function(extension) {
            switch (extension) {
              case 'request':
                jsonld.request = $__require('5');
                break;
              default:
                throw new JsonLdError('Unknown extension.', 'jsonld.UnknownExtension', {extension: extension});
            }
          };
          var _module = {
            exports: {},
            filename: __dirname
          };
          $__require('5')(_module, 'version');
          jsonld.version = _module.exports.version;
        }
        return jsonld;
      };
      var factory = function() {
        return wrapper(function() {
          return factory();
        });
      };
      if (!_nodejs && (typeof define === 'function' && define.amd)) {
        define([], function() {
          wrapper(factory);
          return factory;
        });
      } else {
        wrapper(factory);
        if (typeof $__require === 'function' && typeof module !== 'undefined' && module.exports) {
          module.exports = factory;
        }
        if (_browser) {
          if (typeof jsonld === 'undefined') {
            jsonld = jsonldjs = factory;
          } else {
            jsonldjs = factory;
          }
        }
      }
      return factory;
    })();
  })($__require('3'));
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('9');
  return module.exports;
});

$__System.register("b", ["a"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var jsonld_1;
    var templates, TemplateRegistryAccess, TemplateStamper, RegisteredTemplate, RegisteredTemplateConsumer;
    function stamp(objectView, template, object) {
        var stampedModel = {};
        stampedModel[template.as] = object;
        stampedModel.predicate = this.predicate;
        stampedModel.params = objectView.params;
        return this.stamp(stampedModel).root;
    }
    return {
        setters:[
            function (jsonld_1_1) {
                jsonld_1 = jsonld_1_1;
            }],
        execute: function() {
            templates = [];
            exports_1("TemplateRegistryAccess", TemplateRegistryAccess = {
                properties: {
                    templates: {
                        type: Array,
                        notify: true,
                        readOnly: true,
                        value: templates
                    }
                }
            });
            TemplateStamper = {
                getStamped: function (objectView, template, object) {
                    var _this = this;
                    this.templatize(template);
                    if (template.compactWith) {
                        return jsonld_1.promises.compact(object, template.compactWith)
                            .then(function (compacted) { return stamp.call(_this, objectView, template, compacted); });
                    }
                    else {
                        return Promise.resolve(stamp.call(this, objectView, template, object));
                    }
                }
            };
            exports_1("RegisteredTemplate", RegisteredTemplate = {
                properties: {
                    as: {
                        type: String,
                        value: 'model'
                    },
                    compactWith: Object,
                    name: {
                        type: String,
                        value: ''
                    },
                    predicate: String,
                    scope: {
                        type: String,
                        value: ''
                    }
                },
                attached: function () {
                    this.push('templates', this);
                    this.fire('ags-templates', {}, { bubble: true });
                },
                detached: function () {
                    this.pop('templates', this);
                    this.fire('ags-templates', {}, { bubble: true });
                },
                isMatch: function (object, predicate, scope) {
                    var objectMatches, predicateMatches, scopeMatches;
                    objectMatches = this.objectMatches(object);
                    predicateMatches = this.predicateMatches(predicate);
                    scopeMatches = this.scopeMatches(scope);
                    return objectMatches && predicateMatches && scopeMatches;
                },
                objectMatches: function (object) {
                    return true;
                },
                predicateMatches: function (predicate) {
                    if (this.predicate) {
                        return this.predicate == predicate;
                    }
                    return true;
                },
                scopeMatches: function (scope) {
                    return this.scope == scope;
                }
            });
            exports_1("RegisteredTemplate", RegisteredTemplate = [RegisteredTemplate, TemplateRegistryAccess]);
            exports_1("RegisteredTemplateConsumer", RegisteredTemplateConsumer = [Polymer.Templatizer, TemplateStamper, TemplateRegistryAccess]);
        }
    }
});

$__System.register("c", ["b"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var template_registry_1;
    var ArrayTemplate;
    return {
        setters:[
            function (template_registry_1_1) {
                template_registry_1 = template_registry_1_1;
            }],
        execute: function() {
            ArrayTemplate = (function (_super) {
                __extends(ArrayTemplate, _super);
                function ArrayTemplate() {
                    _super.apply(this, arguments);
                }
                ArrayTemplate.prototype.objectMatches = function (res) {
                    return Array.isArray(res);
                };
                ArrayTemplate = __decorate([
                    component('ags-array-template'),
                    behavior(template_registry_1.RegisteredTemplate),
                    extend('template')
                ], ArrayTemplate);
                return ArrayTemplate;
            }(polymer.Base));
            ArrayTemplate.register();
        }
    }
});

$__System.register("1", ["c"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
        }
    }
});

})
(function(factory) {
  augeas = factory();
});
//# sourceMappingURL=augeas.js.map