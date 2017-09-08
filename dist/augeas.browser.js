var Augeas = (function (exports) {
'use strict';

var babelHelpers = {};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};









var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};











babelHelpers;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// The first argument to JS template tags retain identity across multiple
// calls to a tag for the same literal, so we can cache work done per literal
// in a Map.
var templates = new Map();
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
function html(strings) {
    var template = templates.get(strings);
    if (template === undefined) {
        template = new Template(strings);
        templates.set(strings, template);
    }

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    return new TemplateResult(template, values);
}
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
var TemplateResult = function TemplateResult(template, values) {
    classCallCheck(this, TemplateResult);

    this.template = template;
    this.values = values;
};
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 */
function render(result, container) {
    var partCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPartCallback;

    var instance = container.__templateInstance;
    // Repeat render, just call update()
    if (instance !== undefined && instance.template === result.template && instance._partCallback === partCallback) {
        instance.update(result.values);
        return;
    }
    // First render, create a new TemplateInstance and append it
    instance = new TemplateInstance(result.template, partCallback);
    container.__templateInstance = instance;
    var fragment = instance._clone();
    instance.update(result.values);
    var child = void 0;
    while (child = container.lastChild) {
        container.removeChild(child);
    }
    container.appendChild(fragment);
}
/**
 * An expression marker with embedded unique key to avoid
 * https://github.com/PolymerLabs/lit-html/issues/62
 */
var exprMarker = '{{lit-' + Math.random() + '}}';
/**
 * A placeholder for a dynamic expression in an HTML template.
 *
 * There are two built-in part types: AttributePart and NodePart. NodeParts
 * always represent a single dynamic expression, while AttributeParts may
 * represent as many expressions are contained in the attribute.
 *
 * A Template's parts are mutable, so parts can be replaced or modified
 * (possibly to implement different template semantics). The contract is that
 * parts can only be replaced, not removed, added or reordered, and parts must
 * always consume the correct number of values in their `update()` method.
 *
 * TODO(justinfagnani): That requirement is a little fragile. A
 * TemplateInstance could instead be more careful about which values it gives
 * to Part.update().
 */
var TemplatePart = function TemplatePart(type, index, name, rawName, strings) {
    classCallCheck(this, TemplatePart);

    this.type = type;
    this.index = index;
    this.name = name;
    this.rawName = rawName;
    this.strings = strings;
};
var Template = function Template(strings) {
    classCallCheck(this, Template);

    this.parts = [];
    this.element = document.createElement('template');
    this.element.innerHTML = strings.join(exprMarker);
    var walker = document.createTreeWalker(this.element.content, 5 /* elements & text */);
    var index = -1;
    var partIndex = 0;
    var nodesToRemove = [];
    while (walker.nextNode()) {
        index++;
        var node = walker.currentNode;
        if (node.nodeType === 1 /* ELEMENT_NODE */) {
                if (!node.hasAttributes()) continue;
                var attributes = node.attributes;
                for (var i = 0; i < attributes.length; i++) {
                    var attribute = attributes.item(i);
                    var attributeStrings = attribute.value.split(exprMarker);
                    if (attributeStrings.length > 1) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute attribute
                        var attributeString = strings[partIndex];
                        // Trim the trailing literal value if this is an interpolation
                        var rawNameString = attributeString.substring(0, attributeString.length - attributeStrings[0].length);
                        // Find the attribute name
                        var rawName = rawNameString.match(/((?:\w|[.\-_$])+)=["']?$/)[1];
                        this.parts.push(new TemplatePart('attribute', index, attribute.name, rawName, attributeStrings));
                        node.removeAttribute(attribute.name);
                        partIndex += attributeStrings.length - 1;
                        i--;
                    }
                }
            } else if (node.nodeType === 3 /* TEXT_NODE */) {
                var _strings = node.nodeValue.split(exprMarker);
                if (_strings.length > 1) {
                    var parent = node.parentNode;
                    var lastIndex = _strings.length - 1;
                    // We have a part for each match found
                    partIndex += lastIndex;
                    // We keep this current node, but reset its content to the last
                    // literal part. We insert new literal nodes before this so that the
                    // tree walker keeps its position correctly.
                    node.textContent = _strings[lastIndex];
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (var _i = 0; _i < lastIndex; _i++) {
                        parent.insertBefore(new Text(_strings[_i]), node);
                        this.parts.push(new TemplatePart('node', index++));
                    }
                } else if (!node.nodeValue.trim()) {
                    nodesToRemove.push(node);
                    index--;
                }
            }
    }
    // Remove text binding nodes after the walk to not disturb the TreeWalker
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = nodesToRemove[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var n = _step.value;

            n.parentNode.removeChild(n);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
var getValue = function getValue(part, value) {
    // `null` as the value of a Text node will render the string 'null'
    // so we convert it to undefined
    if (value != null && value.__litDirective === true) {
        value = value(part);
    }
    return value === null ? undefined : value;
};

var AttributePart = function () {
    function AttributePart(instance, element, name, strings) {
        classCallCheck(this, AttributePart);

        this.instance = instance;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.size = strings.length - 1;
    }

    createClass(AttributePart, [{
        key: 'setValue',
        value: function setValue(values, startIndex) {
            var strings = this.strings;
            var text = '';
            for (var i = 0; i < strings.length; i++) {
                text += strings[i];
                if (i < strings.length - 1) {
                    var v = getValue(this, values[startIndex + i]);
                    if (v && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = v[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var t = _step2.value;

                                // TODO: we need to recursively call getValue into iterables...
                                text += t;
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    } else {
                        text += v;
                    }
                }
            }
            this.element.setAttribute(this.name, text);
        }
    }]);
    return AttributePart;
}();
var NodePart = function () {
    function NodePart(instance, startNode, endNode) {
        classCallCheck(this, NodePart);

        this.instance = instance;
        this.startNode = startNode;
        this.endNode = endNode;
    }

    createClass(NodePart, [{
        key: 'setValue',
        value: function setValue(value) {
            value = getValue(this, value);
            if (value === null || !((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function')) {
                // Handle primitive values
                // If the value didn't change, do nothing
                if (value === this._previousValue) {
                    return;
                }
                this._setText(value);
            } else if (value instanceof TemplateResult) {
                this._setTemplateResult(value);
            } else if (Array.isArray(value) || value[Symbol.iterator]) {
                this._setIterable(value);
            } else if (value instanceof Node) {
                this._setNode(value);
            } else if (value.then !== undefined) {
                this._setPromise(value);
            } else {
                // Fallback, will render the string representation
                this._setText(value);
            }
        }
    }, {
        key: '_insert',
        value: function _insert(node) {
            this.endNode.parentNode.insertBefore(node, this.endNode);
        }
    }, {
        key: '_setNode',
        value: function _setNode(value) {
            this.clear();
            this._insert(value);
            this._previousValue = value;
        }
    }, {
        key: '_setText',
        value: function _setText(value) {
            var node = this.startNode.nextSibling;
            if (node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE) {
                // If we only have a single text node between the markers, we can just
                // set its value, rather than replacing it.
                // TODO(justinfagnani): Can we just check if _previousValue is
                // primitive?
                node.textContent = value;
            } else {
                this._setNode(new Text(value));
            }
            this._previousValue = value;
        }
    }, {
        key: '_setTemplateResult',
        value: function _setTemplateResult(value) {
            var instance = void 0;
            if (this._previousValue && this._previousValue.template === value.template) {
                instance = this._previousValue;
            } else {
                instance = new TemplateInstance(value.template, this.instance._partCallback);
                this._setNode(instance._clone());
                this._previousValue = instance;
            }
            instance.update(value.values);
        }
    }, {
        key: '_setIterable',
        value: function _setIterable(value) {
            // For an Iterable, we create a new InstancePart per item, then set its
            // value to the item. This is a little bit of overhead for every item in
            // an Iterable, but it lets us recurse easily and efficiently update Arrays
            // of TemplateResults that will be commonly returned from expressions like:
            // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
            // If _previousValue is an array, then the previous render was of an
            // iterable and _previousValue will contain the NodeParts from the previous
            // render. If _previousValue is not an array, clear this part and make a new
            // array for NodeParts.
            if (!Array.isArray(this._previousValue)) {
                this.clear();
                this._previousValue = [];
            }
            // Lets of keep track of how many items we stamped so we can clear leftover
            // items from a previous render
            var itemParts = this._previousValue;
            var partIndex = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var item = _step3.value;

                    // Try to reuse an existing part
                    var itemPart = itemParts[partIndex];
                    // If no existing part, create a new one
                    if (itemPart === undefined) {
                        // If we're creating the first item part, it's startNode should be the
                        // container's startNode
                        var itemStart = this.startNode;
                        // If we're not creating the first part, create a new separator marker
                        // node, and fix up the previous part's endNode to point to it
                        if (partIndex > 0) {
                            var previousPart = itemParts[partIndex - 1];
                            itemStart = previousPart.endNode = new Text();
                            this._insert(itemStart);
                        }
                        itemPart = new NodePart(this.instance, itemStart, this.endNode);
                        itemParts.push(itemPart);
                    }
                    itemPart.setValue(item);
                    partIndex++;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            if (partIndex === 0) {
                this.clear();
                this._previousValue = undefined;
            } else if (partIndex < itemParts.length) {
                var lastPart = itemParts[partIndex - 1];
                this.clear(lastPart.endNode.previousSibling);
                lastPart.endNode = this.endNode;
            }
        }
    }, {
        key: '_setPromise',
        value: function _setPromise(value) {
            var _this = this;

            value.then(function (v) {
                if (_this._previousValue === value) {
                    _this.setValue(v);
                }
            });
            this._previousValue = value;
        }
    }, {
        key: 'clear',
        value: function clear() {
            var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;

            var node = void 0;
            while ((node = startNode.nextSibling) !== this.endNode) {
                node.parentNode.removeChild(node);
            }
        }
    }]);
    return NodePart;
}();
var defaultPartCallback = function defaultPartCallback(instance, templatePart, node) {
    if (templatePart.type === 'attribute') {
        return new AttributePart(instance, node, templatePart.name, templatePart.strings);
    } else if (templatePart.type === 'node') {
        return new NodePart(instance, node, node.nextSibling);
    }
    throw new Error('Unknown part type ' + templatePart.type);
};
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
var TemplateInstance = function () {
    function TemplateInstance(template) {
        var partCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPartCallback;
        classCallCheck(this, TemplateInstance);

        this._parts = [];
        this.template = template;
        this._partCallback = partCallback;
    }

    createClass(TemplateInstance, [{
        key: 'update',
        value: function update(values) {
            var valueIndex = 0;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this._parts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var part = _step4.value;

                    if (part.size === undefined) {
                        part.setValue(values[valueIndex]);
                        valueIndex++;
                    } else {
                        part.setValue(values, valueIndex);
                        valueIndex += part.size;
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }, {
        key: '_clone',
        value: function _clone() {
            var fragment = document.importNode(this.template.element.content, true);
            if (this.template.parts.length > 0) {
                var _walker = document.createTreeWalker(fragment, 5 /* elements & text */);
                var parts = this.template.parts;
                var _index = 0;
                var _partIndex = 0;
                var templatePart = parts[0];
                var node = _walker.nextNode();
                while (node != null && _partIndex < parts.length) {
                    if (_index === templatePart.index) {
                        this._parts.push(this._partCallback(this, templatePart, node));
                        templatePart = parts[++_partIndex];
                    } else {
                        _index++;
                        node = _walker.nextNode();
                    }
                }
            }
            return fragment;
        }
    }]);
    return TemplateInstance;
}();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 *
 * @param result Renders a `TemplateResult` to a container using the
 * `extendedPartCallback` PartCallback, which allows templates to set
 * properties and declarative event handlers.
 *
 * Properties are set by default, instead of attributes. Attribute names in
 * lit-html templates preserve case, so properties are case sensitive. If an
 * expression takes up an entire attribute value, then the property is set to
 * that value. If an expression is interpolated with a string or other
 * expressions then the property is set to the string result of the
 * interpolation.
 *
 * To set an attribute instead of a property, append a `$` suffix to the
 * attribute name.
 *
 * Example:
 *
 *     html`<button class$="primary">Buy Now</button>`
 *
 * To set an event handler, prefix the attribute name with `on-`:
 *
 * Example:
 *
 *     html`<button on-click=${(e)=> this.onClickHandler(e)}>Buy Now</button>`
 *
 */
function render$1(result, container) {
    render(result, container, extendedPartCallback);
}
var extendedPartCallback = function extendedPartCallback(instance, templatePart, node) {
    if (templatePart.type === 'attribute') {
        if (templatePart.rawName.startsWith('on-')) {
            var eventName = templatePart.rawName.substring(3);
            return new EventPart(instance, node, eventName);
        }
        if (templatePart.name.endsWith('$')) {
            var name = templatePart.name.substring(0, templatePart.name.length - 1);
            return new AttributePart(instance, node, name, templatePart.strings);
        }
        return new PropertyPart(instance, node, templatePart.rawName, templatePart.strings);
    }
    return defaultPartCallback(instance, templatePart, node);
};
var PropertyPart = function (_AttributePart) {
    inherits(PropertyPart, _AttributePart);

    function PropertyPart() {
        classCallCheck(this, PropertyPart);
        return possibleConstructorReturn(this, (PropertyPart.__proto__ || Object.getPrototypeOf(PropertyPart)).apply(this, arguments));
    }

    createClass(PropertyPart, [{
        key: 'setValue',
        value: function setValue(values, startIndex) {
            var s = this.strings;
            var value = void 0;
            if (s.length === 2 && s[0] === '' && s[s.length - 1] === '') {
                // An expression that occupies the whole attribute value will leave
                // leading and trailing empty strings.
                value = getValue(this, values[startIndex]);
            } else {
                // Interpolation, so interpolate
                value = '';
                for (var i = 0; i < s.length; i++) {
                    value += s[i];
                    if (i < s.length - 1) {
                        value += getValue(this, values[startIndex + i]);
                    }
                }
            }
            this.element[this.name] = value;
        }
    }]);
    return PropertyPart;
}(AttributePart);
var EventPart = function () {
    function EventPart(instance, element, eventName) {
        classCallCheck(this, EventPart);

        this.instance = instance;
        this.element = element;
        this.eventName = eventName;
    }

    createClass(EventPart, [{
        key: 'setValue',
        value: function setValue(value) {
            var listener = getValue(this, value);
            if (listener === this._listener) {
                return;
            }
            if (listener == null) {
                this.element.removeEventListener(this.eventName, this);
            } else if (this._listener == null) {
                this.element.addEventListener(this.eventName, this);
            }
            this._listener = listener;
        }
    }, {
        key: 'handleEvent',
        value: function handleEvent(event) {
            if (typeof this._listener === 'function') {
                this._listener.call(this.element, event);
            } else if (typeof this._listener.handleEvent === 'function') {
                this._listener.handleEvent(event);
            }
        }
    }]);
    return EventPart;
}();

window.JSCompiler_renameProperty = function (prop, obj) {
  return prop;
};

// unique global id for deduping mixins.
var dedupeId = 0;

/**
 * @constructor
 * @extends {Function}
 */
function MixinFunction() {}
/** @type {(WeakMap | undefined)} */
MixinFunction.prototype.__mixinApplications;
/** @type {(Object | undefined)} */
MixinFunction.prototype.__mixinSet;

var dedupingMixin = function dedupingMixin(mixin) {
  var mixinApplications = /** @type {!MixinFunction} */mixin.__mixinApplications;
  if (!mixinApplications) {
    mixinApplications = new WeakMap();
    /** @type {!MixinFunction} */mixin.__mixinApplications = mixinApplications;
  }
  // maintain a unique id for each mixin
  var mixinDedupeId = dedupeId++;
  function dedupingMixin(base) {
    var baseSet = /** @type {!MixinFunction} */base.__mixinSet;
    if (baseSet && baseSet[mixinDedupeId]) {
      return base;
    }
    var map = mixinApplications;
    var extended = map.get(base);
    if (!extended) {
      extended = /** @type {!Function} */mixin(base);
      map.set(base, extended);
    }
    // copy inherited mixin set from the extended class, or the base class
    // NOTE: we avoid use of Set here because some browser (IE11)
    // cannot extend a base Set via the constructor.
    var mixinSet = Object.create( /** @type {!MixinFunction} */extended.__mixinSet || baseSet || null);
    mixinSet[mixinDedupeId] = true;
    /** @type {!MixinFunction} */extended.__mixinSet = mixinSet;
    return extended;
  }

  return dedupingMixin;
};

var caseMap$1 = {};
var DASH_TO_CAMEL = /-[a-z]/g;
var CAMEL_TO_DASH = /([A-Z])/g;

function dashToCamelCase(dash) {
  return caseMap$1[dash] || (caseMap$1[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL, function (m) {
    return m[1].toUpperCase();
  }));
}

function camelToDashCase(camel) {
  return caseMap$1[camel] || (caseMap$1[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase());
}

var caseMap$0 = Object.freeze({
	dashToCamelCase: dashToCamelCase,
	camelToDashCase: camelToDashCase
});

// Microtask implemented using Mutation Observer
var microtaskCurrHandle = 0;
var microtaskLastHandle = 0;
var microtaskCallbacks = [];
var microtaskNodeContent = 0;
var microtaskNode = document.createTextNode('');
new window.MutationObserver(microtaskFlush).observe(microtaskNode, { characterData: true });

function microtaskFlush() {
  var len = microtaskCallbacks.length;
  for (var i = 0; i < len; i++) {
    var cb = microtaskCallbacks[i];
    if (cb) {
      try {
        cb();
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
  }
  microtaskCallbacks.splice(0, len);
  microtaskLastHandle += len;
}

var timeOut = {
  /**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof Polymer.Async.timeOut
   * @param {number} delay Time to wait before calling callbacks in ms
   * @return {AsyncInterface} An async timeout interface
   */
  after: function after(delay) {
    return {
      run: function run(fn) {
        return setTimeout(fn, delay);
      },

      cancel: window.clearTimeout.bind(window)
    };
  },

  /**
   * Enqueues a function called in the next task.
   *
   * @memberof Polymer.Async.timeOut
   * @param {Function} fn Callback to run
   * @return {number} Handle used for canceling task
   */
  run: window.setTimeout.bind(window),
  /**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof Polymer.Async.timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   */
  cancel: window.clearTimeout.bind(window)
};

var animationFrame = {
  /**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof Polymer.Async.animationFrame
   * @param {Function} fn Callback to run
   * @return {number} Handle used for canceling task
   */
  run: window.requestAnimationFrame.bind(window),
  /**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof Polymer.Async.timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   */
  cancel: window.cancelAnimationFrame.bind(window)
};



var microTask = {

  /**
   * Enqueues a function called at microtask timing.
   *
   * @memberof Polymer.Async.microTask
   * @param {Function} callback Callback to run
   * @return {number} Handle used for canceling task
   */
  run: function run(callback) {
    microtaskNode.textContent = microtaskNodeContent++;
    microtaskCallbacks.push(callback);
    return microtaskCurrHandle++;
  },


  /**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof Polymer.Async.microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   */
  cancel: function cancel(handle) {
    var idx = handle - microtaskLastHandle;
    if (idx >= 0) {
      if (!microtaskCallbacks[idx]) {
        throw new Error('invalid async handle: ' + handle);
      }
      microtaskCallbacks[idx] = null;
    }
  }
};

var caseMap = caseMap$0;

var microtask = microTask;

// Save map of native properties; this forms a blacklist or properties
// that won't have their values "saved" by `saveAccessorValue`, since
// reading from an HTMLElement accessor from the context of a prototype throws
var nativeProperties = {};
var proto = HTMLElement.prototype;
while (proto) {
  var props = Object.getOwnPropertyNames(proto);
  for (var i = 0; i < props.length; i++) {
    nativeProperties[props[i]] = true;
  }
  proto = Object.getPrototypeOf(proto);
}

/**
 * Used to save the value of a property that will be overridden with
 * an accessor. If the `model` is a prototype, the values will be saved
 * in `__dataProto`, and it's up to the user (or downstream mixin) to
 * decide how/when to set these values back into the accessors.
 * If `model` is already an instance (it has a `__data` property), then
 * the value will be set as a pending property, meaning the user should
 * call `_invalidateProperties` or `_flushProperties` to take effect
 *
 * @param {Object} model Prototype or instance
 * @param {string} property Name of property
 * @private
 */
function saveAccessorValue(model, property) {
  // Don't read/store value for any native properties since they could throw
  if (!nativeProperties[property]) {
    var value = model[property];
    if (value !== undefined) {
      if (model.__data) {
        // Adding accessor to instance; update the property
        // It is the user's responsibility to call _flushProperties
        model._setPendingProperty(property, value);
      } else {
        // Adding accessor to proto; save proto's value for instance-time use
        if (!model.__dataProto) {
          model.__dataProto = {};
        } else if (!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto', model))) {
          model.__dataProto = Object.create(model.__dataProto);
        }
        model.__dataProto[property] = value;
      }
    }
  }
}

var PropertyAccessors = dedupingMixin(function (superClass) {

  /**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertyAccessors}
   * @extends HTMLElement
   * @unrestricted
   */
  var PropertyAccessors = function (_superClass) {
    inherits(PropertyAccessors, _superClass);
    createClass(PropertyAccessors, null, [{
      key: 'createPropertiesForAttributes',


      /**
       * Generates property accessors for all attributes in the standard
       * static `observedAttributes` array.
       *
       * Attribute names are mapped to property names using the `dash-case` to
       * `camelCase` convention
       *
       */
      value: function createPropertiesForAttributes() {
        var a$ = this.observedAttributes;
        for (var _i = 0; _i < a$.length; _i++) {
          this.prototype._createPropertyAccessor(caseMap.dashToCamelCase(a$[_i]));
        }
      }
    }]);

    function PropertyAccessors() {
      classCallCheck(this, PropertyAccessors);

      /** @type {boolean} */
      var _this = possibleConstructorReturn(this, (PropertyAccessors.__proto__ || Object.getPrototypeOf(PropertyAccessors)).call(this));

      _this.__serializing;
      /** @type {number} */
      _this.__dataCounter;
      /** @type {boolean} */
      _this.__dataEnabled;
      /** @type {boolean} */
      _this.__dataReady;
      /** @type {boolean} */
      _this.__dataInvalid;
      /** @type {!Object} */
      _this.__data;
      /** @type {Object} */
      _this.__dataPending;
      /** @type {Object} */
      _this.__dataOld;
      /** @type {Object} */
      _this.__dataProto;
      /** @type {Object} */
      _this.__dataHasAccessor;
      /** @type {Object} */
      _this.__dataInstanceProps;
      _this._initializeProperties();
      return _this;
    }

    /**
     * Implements native Custom Elements `attributeChangedCallback` to
     * set an attribute value to a property via `_attributeToProperty`.
     *
     * @param {string} name Name of attribute that changed
     * @param {?string} old Old attribute value
     * @param {?string} value New attribute value
     */


    createClass(PropertyAccessors, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, old, value) {
        if (old !== value) {
          this._attributeToProperty(name, value);
        }
      }

      /**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @protected
       */

    }, {
      key: '_initializeProperties',
      value: function _initializeProperties() {
        this.__serializing = false;
        this.__dataCounter = 0;
        this.__dataEnabled = false;
        this.__dataReady = false;
        this.__dataInvalid = false;
        this.__data = {};
        this.__dataPending = null;
        this.__dataOld = null;
        if (this.__dataProto) {
          this._initializeProtoProperties(this.__dataProto);
          this.__dataProto = null;
        }
        // Capture instance properties; these will be set into accessors
        // during first flush. Don't set them here, since we want
        // these to overwrite defaults/constructor assignments
        for (var p in this.__dataHasAccessor) {
          if (this.hasOwnProperty(p)) {
            this.__dataInstanceProps = this.__dataInstanceProps || {};
            this.__dataInstanceProps[p] = this[p];
            delete this[p];
          }
        }
      }

      /**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @protected
       */

    }, {
      key: '_initializeProtoProperties',
      value: function _initializeProtoProperties(props) {
        for (var p in props) {
          this._setProperty(p, props[p]);
        }
      }

      /**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @protected
       */

    }, {
      key: '_initializeInstanceProperties',
      value: function _initializeInstanceProperties(props) {
        Object.assign(this, props);
      }

      /**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       */

    }, {
      key: '_ensureAttribute',
      value: function _ensureAttribute(attribute, value) {
        if (!this.hasAttribute(attribute)) {
          this._valueToNodeAttribute(this, value, attribute);
        }
      }

      /**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to.
       */

    }, {
      key: '_attributeToProperty',
      value: function _attributeToProperty(attribute, value, type) {
        // Don't deserialize back to property if currently reflecting
        if (!this.__serializing) {
          var property = caseMap.dashToCamelCase(attribute);
          this[property] = this._deserializeValue(value, type);
        }
      }

      /**
       * Serializes a property to its associated attribute.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect.
       * @param {*=} value Property value to refect.
       */

    }, {
      key: '_propertyToAttribute',
      value: function _propertyToAttribute(property, attribute, value) {
        this.__serializing = true;
        value = arguments.length < 3 ? this[property] : value;
        this._valueToNodeAttribute(this, value, attribute || caseMap.camelToDashCase(property));
        this.__serializing = false;
      }

      /**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       */

    }, {
      key: '_valueToNodeAttribute',
      value: function _valueToNodeAttribute(node, value, attribute) {
        var str = this._serializeValue(value);
        if (str === undefined) {
          node.removeAttribute(attribute);
        } else {
          node.setAttribute(attribute, str);
        }
      }

      /**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called by Polymer when setting JS property values to
       * HTML attributes.  Users may override this method on Polymer element
       * prototypes to provide serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property value.
       */

    }, {
      key: '_serializeValue',
      value: function _serializeValue(value) {
        /* eslint-disable no-fallthrough */
        switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
          case 'boolean':
            return value ? '' : undefined;

          case 'object':
            if (value instanceof Date) {
              return value.toString();
            } else if (value) {
              try {
                return JSON.stringify(value);
              } catch (x) {
                return '';
              }
            }

          default:
            return value != null ? value.toString() : undefined;
        }
      }

      /**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       * Note: The return value of `undefined` is used as a sentinel value to
       * indicate the attribute should be removed.
       *
       * @param {?string} value Attribute value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       */

    }, {
      key: '_deserializeValue',
      value: function _deserializeValue(value, type) {
        /**
         * @type {*}
         */
        var outValue = void 0;
        switch (type) {
          case Number:
            outValue = Number(value);
            break;

          case Boolean:
            outValue = value !== null;
            break;

          case Object:
            try {
              outValue = JSON.parse( /** @type string */value);
            } catch (x) {
              // allow non-JSON literals like Strings and Numbers
            }
            break;

          case Array:
            try {
              outValue = JSON.parse( /** @type string */value);
            } catch (x) {
              outValue = null;
              console.warn('Polymer::Attributes: couldn\'t decode Array as JSON: ' + value);
            }
            break;

          case Date:
            outValue = new Date(value);
            break;

          case String:
          default:
            outValue = value;
            break;
        }

        return outValue;
      }
      /* eslint-enable no-fallthrough */

      /**
       * Creates a setter/getter pair for the named property with its own
       * local storage.  The getter returns the value in the local storage,
       * and the setter calls `_setProperty`, which updates the local storage
       * for the property and enqueues a `_propertiesChanged` callback.
       *
       * This method may be called on a prototype or an instance.  Calling
       * this method may overwrite a property value that already exists on
       * the prototype/instance by creating the accessor.  When calling on
       * a prototype, any overwritten values are saved in `__dataProto`,
       * and it is up to the subclasser to decide how/when to set those
       * properties back into the accessor.  When calling on an instance,
       * the overwritten value is set via `_setPendingProperty`, and the
       * user should call `_invalidateProperties` or `_flushProperties`
       * for the values to take effect.
       *
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created; the
       *   protected `_setProperty` function must be used to set the property
       * @protected
       */

    }, {
      key: '_createPropertyAccessor',
      value: function _createPropertyAccessor(property, readOnly) {
        if (!this.hasOwnProperty('__dataHasAccessor')) {
          this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
        }
        if (!this.__dataHasAccessor[property]) {
          this.__dataHasAccessor[property] = true;
          saveAccessorValue(this, property);
          Object.defineProperty(this, property, {
            /* eslint-disable valid-jsdoc */
            /** @this {PropertyAccessors} */
            get: function get$$1() {
              return this.__data[property];
            },
            /** @this {PropertyAccessors} */
            set: readOnly ? function () {} : function (value) {
              this._setProperty(property, value);
            }
            /* eslint-enable */
          });
        }
      }

      /**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       */

    }, {
      key: '_hasAccessor',
      value: function _hasAccessor(property) {
        return this.__dataHasAccessor && this.__dataHasAccessor[property];
      }

      /**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @protected
       */

    }, {
      key: '_setProperty',
      value: function _setProperty(property, value) {
        if (this._setPendingProperty(property, value)) {
          this._invalidateProperties();
        }
      }

      /**
       * Updates the local storage for a property, records the previous value,
       * and adds it to the set of "pending changes" that will be passed to the
       * `_propertiesChanged` callback.  This method does not enqueue the
       * `_propertiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {boolean} Returns true if the property changed
       * @protected
       */

    }, {
      key: '_setPendingProperty',
      value: function _setPendingProperty(property, value) {
        var old = this.__data[property];
        var changed = this._shouldPropertyChange(property, value, old);
        if (changed) {
          if (!this.__dataPending) {
            this.__dataPending = {};
            this.__dataOld = {};
          }
          // Ensure old is captured from the last turn
          if (this.__dataOld && !(property in this.__dataOld)) {
            this.__dataOld[property] = old;
          }
          this.__data[property] = value;
          this.__dataPending[property] = value;
        }
        return changed;
      }

      /**
       * Returns true if the specified property has a pending change.
       *
       * @param {string} prop Property name
       * @return {boolean} True if property has a pending change
       * @protected
       */

    }, {
      key: '_isPropertyPending',
      value: function _isPropertyPending(prop) {
        return Boolean(this.__dataPending && prop in this.__dataPending);
      }

      /**
       * Marks the properties as invalid, and enqueues an async
       * `_propertiesChanged` callback.
       *
       * @protected
       */

    }, {
      key: '_invalidateProperties',
      value: function _invalidateProperties() {
        var _this2 = this;

        if (!this.__dataInvalid && this.__dataReady) {
          this.__dataInvalid = true;
          microtask.run(function () {
            if (_this2.__dataInvalid) {
              _this2.__dataInvalid = false;
              _this2._flushProperties();
            }
          });
        }
      }

      /**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       */

    }, {
      key: '_enableProperties',
      value: function _enableProperties() {
        if (!this.__dataEnabled) {
          this.__dataEnabled = true;
          if (this.__dataInstanceProps) {
            this._initializeInstanceProperties(this.__dataInstanceProps);
            this.__dataInstanceProps = null;
          }
          this.ready();
        }
      }

      /**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       *
       * @protected
       */

    }, {
      key: '_flushProperties',
      value: function _flushProperties() {
        if (this.__dataPending && this.__dataOld) {
          var changedProps = this.__dataPending;
          this.__dataPending = null;
          this.__dataCounter++;
          this._propertiesChanged(this.__data, changedProps, this.__dataOld);
          this.__dataCounter--;
        }
      }

      /**
       * Lifecycle callback called the first time properties are being flushed.
       * Prior to `ready`, all property sets through accessors are queued and
       * their effects are flushed after this method returns.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its properties initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @public
       */

    }, {
      key: 'ready',
      value: function ready() {
        this.__dataReady = true;
        // Run normal flush
        this._flushProperties();
      }

      /**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {!Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {!Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @protected
       */

    }, {
      key: '_propertiesChanged',
      value: function _propertiesChanged(currentProps, changedProps, oldProps) {} // eslint-disable-line no-unused-vars


      /**
       * Method called to determine whether a property value should be
       * considered as a change and cause the `_propertiesChanged` callback
       * to be enqueued.
       *
       * The default implementation returns `true` for primitive types if a
       * strict equality check fails, and returns `true` for all Object/Arrays.
       * The method always returns false for `NaN`.
       *
       * Override this method to e.g. provide stricter checking for
       * Objects/Arrays when using immutable patterns.
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       *   and enqueue a `_proeprtiesChanged` callback
       * @protected
       */

    }, {
      key: '_shouldPropertyChange',
      value: function _shouldPropertyChange(property, value, old) {
        return (
          // Strict equality check
          old !== value && (
          // This ensures (old==NaN, value==NaN) always returns false
          old === old || value === value)
        );
      }
    }]);
    return PropertyAccessors;
  }(superClass);

  return PropertyAccessors;
});

var Template$1 = function () {
    function Template$$1() {
        classCallCheck(this, Template$$1);
    }

    createClass(Template$$1, [{
        key: 'template',
        value: function template(object) {}
    }, {
        key: 'matches',
        value: function matches(object, predicate, scope) {}
    }, {
        key: 'name',
        get: function get$$1() {
            return '';
        }
    }]);
    return Template$$1;
}();

var TemplateRegistry = function () {
    function TemplateRegistry() {
        classCallCheck(this, TemplateRegistry);

        this._templates = [];
    }

    createClass(TemplateRegistry, [{
        key: 'getTemplate',
        value: function getTemplate(object, predicate, scope) {
            return this._templates.find(function (template) {
                return template.matches(object, predicate, scope);
            });
        }
    }, {
        key: 'push',
        value: function push(template) {
            this._templates.push(template);
        }
    }, {
        key: '_clear',
        value: function _clear() {
            this._templates = [];
        }
    }]);
    return TemplateRegistry;
}();

var ViewTemplates = new TemplateRegistry();
var FormTemplates = new TemplateRegistry();

var _templateObject = taggedTemplateLiteral(['\n<style>\n:host {\n    display: block;\n    @apply(--object-view);\n}\n', '\n</style>'], ['\n<style>\n:host {\n    display: block;\n    @apply(--object-view);\n}\n', '\n</style>']);
var _templateObject2 = taggedTemplateLiteral(['<div>Template not found</div>'], ['<div>Template not found</div>']);

var defaultWrapper = function defaultWrapper(view) {
    return html(_templateObject, view);
};

var notFoundTemplate = html(_templateObject2);

var AgsView = function (_PropertyAccessors) {
    inherits(AgsView, _PropertyAccessors);

    function AgsView() {
        classCallCheck(this, AgsView);

        var _this = possibleConstructorReturn(this, (AgsView.__proto__ || Object.getPrototypeOf(AgsView)).call(this));

        _this.predicate = null;
        _this.templateScope = null;
        _this.object = null;
        _this.ignoreMissing = false;
        _this.hasBeenRendered = false;
        _this.params = {};
        return _this;
    }

    createClass(AgsView, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this._enableProperties();
        }
    }, {
        key: '_propertiesChanged',
        value: function _propertiesChanged() {
            this._render();
        }
    }, {
        key: '_render',
        value: function _render() {
            if (this.object) {
                if (!this.shadowRoot) {
                    this.attachShadow({ mode: 'open' });
                }

                var template = ViewTemplates.getTemplate(this.object, this.predicate, this.templateScope);
                var result = void 0;

                if (template) {
                    if (template.name) {
                        this.setAttribute('data-template', template.name);
                    }

                    result = defaultWrapper(template.template(this.object, this.params));
                } else if (!this.ignoreMissing) {
                    result = notFoundTemplate;

                    console.warn('Template not found for', this.object);
                }

                render$1(result, this.shadowRoot);
            }

            this.dispatchEvent(new CustomEvent('render', {}));
        }
    }], [{
        key: 'observedAttributes',
        get: function get$$1() {
            return ['object', 'predicate', 'templateScope', 'ignoreMissing', 'params'];
        }
    }]);
    return AgsView;
}(PropertyAccessors(HTMLElement));

AgsView.createPropertiesForAttributes();

window.customElements.define('ags-view', AgsView);

exports.ViewTemplates = ViewTemplates;
exports.FormTemplates = FormTemplates;

return exports;

}({}));
//# sourceMappingURL=augeas.browser.js.map
