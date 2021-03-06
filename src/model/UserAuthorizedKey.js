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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ModokiApi) {
      root.ModokiApi = {};
    }
    root.ModokiApi.UserAuthorizedKey = factory(root.ModokiApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserAuthorizedKey model module.
   * @module model/UserAuthorizedKey
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserAuthorizedKey</code>.
   * @alias module:model/UserAuthorizedKey
   * @class
   * @param key {String} 
   * @param label {String} 
   */
  var exports = function(key, label) {
    var _this = this;

    _this['key'] = key;
    _this['label'] = label;
  };

  /**
   * Constructs a <code>UserAuthorizedKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAuthorizedKey} obj Optional instance to populate.
   * @return {module:model/UserAuthorizedKey} The populated <code>UserAuthorizedKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;



  return exports;
}));


