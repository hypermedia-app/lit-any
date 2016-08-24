System.register("src/templates/ags-array-template.ts", ["src/view-template-registry.ts"], function(exports_1, context_1) {
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
    var view_template_registry_1;
    var ArrayTemplate;
    return {
        setters:[
            function (view_template_registry_1_1) {
                view_template_registry_1 = view_template_registry_1_1;
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
                    behavior(view_template_registry_1.RegisteredTemplate),
                    extend('template')
                ], ArrayTemplate);
                return ArrayTemplate;
            }(polymer.Base));
            ArrayTemplate.register();
        }
    }
});

System.register("src/templates/ags-literal-template.ts", ["src/view-template-registry.ts"], function(exports_1, context_1) {
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
    var view_template_registry_1;
    var AnyLiteralTemplate;
    return {
        setters:[
            function (view_template_registry_1_1) {
                view_template_registry_1 = view_template_registry_1_1;
            }],
        execute: function() {
            AnyLiteralTemplate = (function (_super) {
                __extends(AnyLiteralTemplate, _super);
                function AnyLiteralTemplate() {
                    _super.apply(this, arguments);
                }
                AnyLiteralTemplate.prototype.objectMatches = function (resource) {
                    return !(typeof resource === 'object') || !!resource['@value'];
                };
                AnyLiteralTemplate = __decorate([
                    behavior(view_template_registry_1.RegisteredTemplate),
                    extend('template'),
                    component('ags-literal-template')
                ], AnyLiteralTemplate);
                return AnyLiteralTemplate;
            }(polymer.Base));
            AnyLiteralTemplate.register();
        }
    }
});

System.register("src/templates/ags-object-template.ts", ["src/view-template-registry.ts"], function(exports_1, context_1) {
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
    var view_template_registry_1;
    var AnyObjectTemplate;
    return {
        setters:[
            function (view_template_registry_1_1) {
                view_template_registry_1 = view_template_registry_1_1;
            }],
        execute: function() {
            AnyObjectTemplate = (function (_super) {
                __extends(AnyObjectTemplate, _super);
                function AnyObjectTemplate() {
                    _super.apply(this, arguments);
                }
                AnyObjectTemplate.prototype.objectMatches = function (resource) {
                    var isObject = typeof resource === 'object' && !!resource['@id'];
                    return isObject;
                };
                AnyObjectTemplate = __decorate([
                    behavior(view_template_registry_1.RegisteredTemplate),
                    extend('template'),
                    component('ags-object-template')
                ], AnyObjectTemplate);
                return AnyObjectTemplate;
            }(polymer.Base));
            AnyObjectTemplate.register();
        }
    }
});

System.register("src/templates/ags-type-template.ts", ["src/view-template-registry.ts"], function(exports_1, context_1) {
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
    var view_template_registry_1;
    var TypeTemplate;
    return {
        setters:[
            function (view_template_registry_1_1) {
                view_template_registry_1 = view_template_registry_1_1;
            }],
        execute: function() {
            TypeTemplate = (function (_super) {
                __extends(TypeTemplate, _super);
                function TypeTemplate() {
                    _super.apply(this, arguments);
                }
                TypeTemplate.prototype.objectMatches = function (res) {
                    var _this = this;
                    if (!this.type) {
                        console.warn('type property is not set for ags-type-template');
                        return false;
                    }
                    if (Array.isArray(res['@type'])) {
                        return res['@type'].some(function (t) { return t === _this.type; });
                    }
                    return res['@type'] === this.type;
                };
                __decorate([
                    property()
                ], TypeTemplate.prototype, "type", void 0);
                TypeTemplate = __decorate([
                    component('ags-type-template'),
                    behavior(view_template_registry_1.RegisteredTemplate),
                    extend('template')
                ], TypeTemplate);
                return TypeTemplate;
            }(polymer.Base));
            TypeTemplate.register();
        }
    }
});

System.register("src/templates/ags-field-property-template.ts", ["src/form-template-registry.ts"], function(exports_1, context_1) {
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
    var form_template_registry_1;
    var AgsFieldPropertyTemplate;
    return {
        setters:[
            function (form_template_registry_1_1) {
                form_template_registry_1 = form_template_registry_1_1;
            }],
        execute: function() {
            AgsFieldPropertyTemplate = (function (_super) {
                __extends(AgsFieldPropertyTemplate, _super);
                function AgsFieldPropertyTemplate() {
                    _super.apply(this, arguments);
                }
                AgsFieldPropertyTemplate.prototype.isMatch = function (property, range) {
                    return this.property && this.property == property;
                };
                AgsFieldPropertyTemplate = __decorate([
                    behavior(form_template_registry_1.RegisteredTemplate),
                    extend('template'),
                    component('ags-field-property-template')
                ], AgsFieldPropertyTemplate);
                return AgsFieldPropertyTemplate;
            }(polymer.Base));
            AgsFieldPropertyTemplate.register();
        }
    }
});

System.register("src/templates/ags-field-range-template.ts", ["src/form-template-registry.ts"], function(exports_1, context_1) {
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
    var form_template_registry_1;
    var AgsFieldRangeTemplate;
    return {
        setters:[
            function (form_template_registry_1_1) {
                form_template_registry_1 = form_template_registry_1_1;
            }],
        execute: function() {
            AgsFieldRangeTemplate = (function (_super) {
                __extends(AgsFieldRangeTemplate, _super);
                function AgsFieldRangeTemplate() {
                    _super.apply(this, arguments);
                }
                AgsFieldRangeTemplate.prototype.isMatch = function (property, range) {
                    return this.range && this.range == range;
                };
                AgsFieldRangeTemplate = __decorate([
                    behavior(form_template_registry_1.RegisteredTemplate),
                    extend('template'),
                    component('ags-field-range-template')
                ], AgsFieldRangeTemplate);
                return AgsFieldRangeTemplate;
            }(polymer.Base));
            AgsFieldRangeTemplate.register();
        }
    }
});

System.register("src/view-template-registry.ts", ["npm:jsonld@0.4.11.js", "src/template-registry.ts"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var jsonld_1, template_registry_1;
    var TemplateStamper, AgsViewTemplate, RegisteredTemplate, RegisteredTemplateConsumer;
    function scopeMatches(scope) {
        return this.scope == scope;
    }
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
            },
            function (template_registry_1_1) {
                template_registry_1 = template_registry_1_1;
            }],
        execute: function() {
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
            exports_1("AgsViewTemplate", AgsViewTemplate = {
                properties: {
                    as: {
                        type: String,
                        value: 'model'
                    },
                    compactWith: {
                        type: Object,
                        value: null
                    },
                    name: {
                        type: String,
                        value: ''
                    },
                    predicate: {
                        type: String,
                        value: null
                    },
                    scope: {
                        type: String,
                        value: ''
                    },
                    kind: {
                        readOnly: true,
                        value: 'view'
                    }
                },
                attached: function () {
                    this.fire('ags-templates-changed', {}, { bubbles: true });
                },
                detached: function () {
                    document.dispatchEvent(new CustomEvent('ags-templates-changed'));
                },
                isMatch: function (object, predicate, scope) {
                    var objectMatches, predicateMatches, isScopeMatch;
                    objectMatches = this.objectMatches(object);
                    predicateMatches = this.predicateMatches(predicate);
                    isScopeMatch = scopeMatches.call(this, scope);
                    return objectMatches && predicateMatches && isScopeMatch;
                },
                objectMatches: function (object) {
                    return true;
                },
                predicateMatches: function (predicate) {
                    if (this.predicate) {
                        return this.predicate == predicate;
                    }
                    return true;
                }
            });
            exports_1("RegisteredTemplate", RegisteredTemplate = [AgsViewTemplate]);
            exports_1("RegisteredTemplateConsumer", RegisteredTemplateConsumer = [Polymer.Templatizer, TemplateStamper, template_registry_1.TemplateRegistryAccess]);
        }
    }
});

System.register("src/elements/ags-view.ts", ["src/view-template-registry.ts"], function(exports_1, context_1) {
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
    var view_template_registry_1;
    var AgsView;
    function replaceContent(elementRoot, newContent) {
        elementRoot.appendChild(newContent);
        this._setHasBeenRendered(true);
    }
    return {
        setters:[
            function (view_template_registry_1_1) {
                view_template_registry_1 = view_template_registry_1_1;
            }],
        execute: function() {
            AgsView = (function (_super) {
                __extends(AgsView, _super);
                function AgsView() {
                    _super.apply(this, arguments);
                }
                AgsView.prototype.attached = function () {
                    var _this = this;
                    document.addEventListener('ags-templates', (function () {
                        if (_this.object)
                            _this._draw(_this.object, _this.predicate, _this.templateScope, _this.ignoreMissing, _this.params);
                    }).bind(this));
                };
                AgsView.prototype._draw = function (object, predicate, templateScope, ignoreMissing, params) {
                    var _this = this;
                    var templates = this._getTemplates('view') || [];
                    var found;
                    var elementRoot = Polymer.dom(this.root);
                    alert(Array.prototype.map.call(templates, function (t) {
                        return t.id;
                    }));
                    while (elementRoot.firstChild) {
                        elementRoot.removeChild(elementRoot.firstChild);
                    }
                    for (var i = 0; i < templates.length; i++) {
                        var template = templates[i];
                        if (!template.isMatch)
                            continue;
                        if (!template.isMatch(object, predicate, templateScope))
                            continue;
                        found = true;
                        if (template.name) {
                            this.setAttribute('data-template', template.name);
                        }
                        this.getStamped(this, template, object)
                            .then(function (stamped) { return replaceContent.call(_this, elementRoot, stamped); });
                        break;
                    }
                    if (!found && !ignoreMissing) {
                        var notFoundNode = document.createElement('div');
                        notFoundNode.textContent = 'Template Not found';
                        replaceContent.call(this, elementRoot, notFoundNode);
                        console.warn('Template not found for', object);
                    }
                };
                __decorate([
                    property()
                ], AgsView.prototype, "object", void 0);
                __decorate([
                    property({ value: null })
                ], AgsView.prototype, "predicate", void 0);
                __decorate([
                    property({ value: '' })
                ], AgsView.prototype, "templateScope", void 0);
                __decorate([
                    property({ value: false })
                ], AgsView.prototype, "ignoreMissing", void 0);
                __decorate([
                    property({ readOnly: true, notify: true, value: false })
                ], AgsView.prototype, "hasBeenRendered", void 0);
                __decorate([
                    property({ type: Object, value: {} })
                ], AgsView.prototype, "params", void 0);
                __decorate([
                    observe('object,predicate,templateScope,ignoreMissing,params')
                ], AgsView.prototype, "_draw", null);
                AgsView = __decorate([
                    template("<style>\n            :host {\n                display: block;\n                @apply(--object-view);\n            }\n        </style>"),
                    component('ags-view'),
                    behavior(view_template_registry_1.RegisteredTemplateConsumer)
                ], AgsView);
                return AgsView;
            }(polymer.Base));
            AgsView.register();
        }
    }
});

System.register("src/elements/ags-form.html!github:Hypercubed/systemjs-plugin-html@0.0.8.js", [], function() { return { setters: [], execute: function() {} } });

System.register("src/elements/ags-field.html!github:Hypercubed/systemjs-plugin-html@0.0.8.js", [], function() { return { setters: [], execute: function() {} } });

System.register("src/template-registry.ts", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TemplateRegistryAccess;
    return {
        setters:[],
        execute: function() {
            exports_1("TemplateRegistryAccess", TemplateRegistryAccess = {
                _getTemplates: function (kind) {
                    var filter = Array.prototype.filter;
                    return filter.call(document.querySelectorAll('body /deep/ template'), function (template) {
                        return template.kind === kind && template.isMatch && typeof template.isMatch === 'function';
                    });
                }
            });
        }
    }
});

System.register("src/form-template-registry.ts", ["src/template-registry.ts"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var template_registry_1;
    var AgsFormTemplate, RegisteredTemplate, AgsFieldStamper;
    return {
        setters:[
            function (template_registry_1_1) {
                template_registry_1 = template_registry_1_1;
            }],
        execute: function() {
            exports_1("AgsFormTemplate", AgsFormTemplate = {
                properties: {
                    property: {
                        type: String
                    },
                    range: {
                        type: String
                    },
                    kind: {
                        readOnly: true,
                        value: 'form'
                    }
                },
                isMatch: function (property, range) {
                    return false;
                }
            });
            exports_1("RegisteredTemplate", RegisteredTemplate = [AgsFormTemplate]);
            exports_1("AgsFieldStamper", AgsFieldStamper = [Polymer.Templatizer, template_registry_1.TemplateRegistryAccess]);
        }
    }
});

System.register("src/elements/ags-field.ts", ["src/elements/ags-field.html!github:Hypercubed/systemjs-plugin-html@0.0.8.js", "src/form-template-registry.ts"], function(exports_1, context_1) {
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
    var form_template_registry_1;
    var AgsField;
    return {
        setters:[
            function (_1) {},
            function (form_template_registry_1_1) {
                form_template_registry_1 = form_template_registry_1_1;
            }],
        execute: function() {
            AgsField = (function (_super) {
                __extends(AgsField, _super);
                function AgsField() {
                    _super.apply(this, arguments);
                }
                AgsField.prototype.ready = function () {
                    this._instanceProps = {
                        value: true
                    };
                };
                AgsField.prototype._valueChanged = function (newValue) {
                    if (this._stampedTemplate) {
                        this._stampedTemplate.value = newValue;
                    }
                };
                AgsField.prototype._draw = function (property, range) {
                    var _this = this;
                    this.async(function () {
                        var templates = _this._getTemplates('form') || [];
                        var found = false;
                        var elementRoot = Polymer.dom(_this.$.dynamicField);
                        while (elementRoot.firstChild) {
                            elementRoot.removeChild(elementRoot.firstChild);
                        }
                        for (var i = templates.length - 1; i >= 0; i--) {
                            var template = templates[i];
                            if (!template.isMatch || !template.isMatch(property, range))
                                continue;
                            found = true;
                            _this.templatize(template);
                            _this._stampedTemplate = _this.stamp({
                                value: _this.value
                            });
                            elementRoot.appendChild(_this._stampedTemplate.root);
                            break;
                        }
                        _this._setNoTemplateFound(!found);
                    });
                };
                AgsField.prototype._forwardInstanceProp = function (inst, path, value) {
                    if (this.value != value) {
                        this.set(path, value);
                    }
                };
                __decorate([
                    property({ value: null })
                ], AgsField.prototype, 'property', void 0);
                __decorate([
                    property({ value: null })
                ], AgsField.prototype, "range", void 0);
                __decorate([
                    property({ value: null, notify: true })
                ], AgsField.prototype, "value", void 0);
                __decorate([
                    property({ readOnly: true })
                ], AgsField.prototype, "noTemplateFound", void 0);
                __decorate([
                    property({ value: false })
                ], AgsField.prototype, "required", void 0);
                __decorate([
                    observe('value')
                ], AgsField.prototype, "_valueChanged", null);
                __decorate([
                    observe('property,range')
                ], AgsField.prototype, "_draw", null);
                AgsField = __decorate([
                    component('ags-field'),
                    behavior(form_template_registry_1.AgsFieldStamper)
                ], AgsField);
                return AgsField;
            }(polymer.Base));
            AgsField.register();
        }
    }
});

System.register("src/elements/ags-form.ts", ["src/elements/ags-form.html!github:Hypercubed/systemjs-plugin-html@0.0.8.js", "src/elements/ags-field.ts"], function(exports_1, context_1) {
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
    var AgsForm;
    return {
        setters:[
            function (_1) {},
            function (_2) {}],
        execute: function() {
            AgsForm = (function (_super) {
                __extends(AgsForm, _super);
                function AgsForm() {
                    _super.apply(this, arguments);
                }
                AgsForm.prototype._fieldValueChanged = function (e) {
                    if (!e.detail.value)
                        return;
                    var value = this.value || {};
                    value[e.model.item.property] = [{
                            '@value': e.detail.value
                        }];
                    this.set('value', value);
                };
                __decorate([
                    property({ type: Object, value: null, notify: true })
                ], AgsForm.prototype, "value", void 0);
                __decorate([
                    property({ type: Object })
                ], AgsForm.prototype, "contract", void 0);
                AgsForm = __decorate([
                    component('ags-form')
                ], AgsForm);
                return AgsForm;
            }(polymer.Base));
            AgsForm.register();
        }
    }
});

System.register("src/elements/ags-hydra-adapter.ts", [], function(exports_1, context_1) {
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
    var AgsHydraAdapter;
    function transformSupportedProperty(prop) {
        var fieldContract = {};
        fieldContract.property = prop.property.id;
        fieldContract.range = prop.property.range.id;
        fieldContract.required = prop.required;
        fieldContract.title = prop.title;
        fieldContract.description = prop.description;
        return fieldContract;
    }
    return {
        setters:[],
        execute: function() {
            AgsHydraAdapter = (function (_super) {
                __extends(AgsHydraAdapter, _super);
                function AgsHydraAdapter() {
                    _super.apply(this, arguments);
                }
                AgsHydraAdapter.prototype.contract = function (operation) {
                    var contract = {};
                    contract.title = operation.title;
                    contract.description = operation.description;
                    contract.body = ((operation.expects || {}).supportedProperties || [])
                        .filter(function (prop) { return prop.writable; })
                        .map(transformSupportedProperty);
                    return contract;
                };
                __decorate([
                    property()
                ], AgsHydraAdapter.prototype, "operation", void 0);
                __decorate([
                    computed({ notify: true })
                ], AgsHydraAdapter.prototype, "contract", null);
                AgsHydraAdapter = __decorate([
                    component('ags-hydra-adapter')
                ], AgsHydraAdapter);
                return AgsHydraAdapter;
            }(polymer.Base));
            exports_1("AgsHydraAdapter", AgsHydraAdapter);
            AgsHydraAdapter.register();
        }
    }
});

System.register("src/augeas.ts", ["src/view-template-registry.ts", "src/templates/ags-array-template.ts", "src/templates/ags-literal-template.ts", "src/templates/ags-object-template.ts", "src/templates/ags-type-template.ts", "src/templates/ags-field-property-template.ts", "src/templates/ags-field-range-template.ts", "src/elements/ags-view.ts", "src/elements/ags-form.ts", "src/elements/ags-hydra-adapter.ts"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var view_template_registry_1;
    var RegisteredTemplate;
    return {
        setters:[
            function (view_template_registry_1_1) {
                view_template_registry_1 = view_template_registry_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (_9) {}],
        execute: function() {
            exports_1("RegisteredTemplate", RegisteredTemplate = RegisteredTemplate);
        }
    }
});

System.register('src/elements/ags-form.html!github:Hypercubed/systemjs-plugin-html@0.0.8.js', [], false, function() {});
System.register('src/elements/ags-field.html!github:Hypercubed/systemjs-plugin-html@0.0.8.js', [], false, function() {});
//# sourceMappingURL=build.js.map