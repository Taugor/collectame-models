"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectModelJs = require("@zerobytes/object-model-js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @type Signing
 */
var SafeBox =
/*#__PURE__*/
function (_ModelBase) {
  _inherits(SafeBox, _ModelBase);

  function SafeBox() {
    var _this;

    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, SafeBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SafeBox).call(this, 'safeBox'));
    _this.$fieldConfig = {
      company: {
        type: _objectModelJs.FieldTypes.String,
        validate: function validate() {
          return true;
        }
      },
      parent: {
        type: _objectModelJs.FieldTypes.String,
        validate: function validate() {
          return true;
        }
      },
      name: {
        type: _objectModelJs.FieldTypes.String,
        validate: function validate() {
          return true;
        }
      },
      groups: {
        type: _objectModelJs.FieldTypes.Array,
        validate: function validate() {
          return true;
        }
      },
      description: {
        type: _objectModelJs.FieldTypes.String,
        validate: function validate() {
          return true;
        }
      },
      dokiaId: {
        type: _objectModelJs.FieldTypes.String,
        validate: function validate() {
          return true;
        }
      },
      dokiaIdentifier: {
        type: _objectModelJs.FieldTypes.String,
        validate: function validate() {
          return true;
        }
      },
      dokiaCompanyId: {
        type: _objectModelJs.FieldTypes.String,
        validate: function validate() {
          return true;
        }
      }
    };

    _this.$fill(properties);

    return _this;
  }

  return SafeBox;
}(_objectModelJs.ModelBase);

var _default = SafeBox;
exports["default"] = _default;