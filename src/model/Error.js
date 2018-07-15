/**
 * Modoki API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
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
    root.ModokiApi.Error = factory(root.ModokiApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Error model module.
   * @module model/Error
   * @version 1.0
   */

  /**
   * Constructs a new <code>Error</code>.
   * Error response media type (default view)
   * @alias module:model/Error
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('detail')) {
        obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ApiClient.convertToType(data['meta'], Object);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * an application-specific error code, expressed as a string value.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * a human-readable explanation specific to this occurrence of the problem.
   * @member {String} detail
   */
  exports.prototype['detail'] = undefined;
  /**
   * a unique identifier for this particular occurrence of the problem.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * a meta object containing non-standard meta-information about the error.
   * @member {Object} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * the HTTP status code applicable to this problem, expressed as a string value.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


