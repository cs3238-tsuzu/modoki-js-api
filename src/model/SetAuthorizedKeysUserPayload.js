/**
 * Modoki API Documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.1.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserAuthorizedKey'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserAuthorizedKey'));
  } else {
    // Browser globals (root is window)
    if (!root.ModokiApiDocumentation) {
      root.ModokiApiDocumentation = {};
    }
    root.ModokiApiDocumentation.SetAuthorizedKeysUserPayload = factory(root.ModokiApiDocumentation.ApiClient, root.ModokiApiDocumentation.UserAuthorizedKey);
  }
}(this, function(ApiClient, UserAuthorizedKey) {
  'use strict';




  /**
   * The SetAuthorizedKeysUserPayload model module.
   * @module model/SetAuthorizedKeysUserPayload
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SetAuthorizedKeysUserPayload</code>.
   * @alias module:model/SetAuthorizedKeysUserPayload
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>SetAuthorizedKeysUserPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetAuthorizedKeysUserPayload} obj Optional instance to populate.
   * @return {module:model/SetAuthorizedKeysUserPayload} The populated <code>SetAuthorizedKeysUserPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'UserAuthorizedKey');

    }
    return obj;
  }




  return exports;
}));

