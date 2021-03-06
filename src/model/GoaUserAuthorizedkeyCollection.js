/**
 * Modoki API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
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
    define(['ApiClient', 'model/GoaUserAuthorizedkey'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GoaUserAuthorizedkey'));
  } else {
    // Browser globals (root is window)
    if (!root.ModokiApi) {
      root.ModokiApi = {};
    }
    root.ModokiApi.GoaUserAuthorizedkeyCollection = factory(root.ModokiApi.ApiClient, root.ModokiApi.GoaUserAuthorizedkey);
  }
}(this, function(ApiClient, GoaUserAuthorizedkey) {
  'use strict';




  /**
   * The GoaUserAuthorizedkeyCollection model module.
   * @module model/GoaUserAuthorizedkeyCollection
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GoaUserAuthorizedkeyCollection</code>.
   * GoaUserAuthorizedkeyCollection is the media type for an array of GoaUserAuthorizedkey (default view)
   * @alias module:model/GoaUserAuthorizedkeyCollection
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
   * Constructs a <code>GoaUserAuthorizedkeyCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoaUserAuthorizedkeyCollection} obj Optional instance to populate.
   * @return {module:model/GoaUserAuthorizedkeyCollection} The populated <code>GoaUserAuthorizedkeyCollection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'GoaUserAuthorizedkey');

    }
    return obj;
  }




  return exports;
}));


