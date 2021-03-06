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
    root.ModokiApi.GoaContainerInspectRawState = factory(root.ModokiApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GoaContainerInspectRawState model module.
   * @module model/GoaContainerInspectRawState
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GoaContainerInspectRawState</code>.
   * GoaContainerInspectRaw_state media type (default view)
   * @alias module:model/GoaContainerInspectRawState
   * @class
   * @param dead {Boolean} 
   * @param exitCode {Number} 
   * @param finishedAt {Date} 
   * @param oomKilled {Boolean} 
   * @param paused {Boolean} 
   * @param pid {Number} 
   * @param restarting {Boolean} 
   * @param running {Boolean} 
   * @param startedAt {Date} 
   * @param status {module:model/GoaContainerInspectRawState.StatusEnum} 
   */
  var exports = function(dead, exitCode, finishedAt, oomKilled, paused, pid, restarting, running, startedAt, status) {
    var _this = this;

    _this['dead'] = dead;
    _this['exitCode'] = exitCode;
    _this['finishedAt'] = finishedAt;
    _this['oomKilled'] = oomKilled;
    _this['paused'] = paused;
    _this['pid'] = pid;
    _this['restarting'] = restarting;
    _this['running'] = running;
    _this['startedAt'] = startedAt;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>GoaContainerInspectRawState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoaContainerInspectRawState} obj Optional instance to populate.
   * @return {module:model/GoaContainerInspectRawState} The populated <code>GoaContainerInspectRawState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dead')) {
        obj['dead'] = ApiClient.convertToType(data['dead'], 'Boolean');
      }
      if (data.hasOwnProperty('exitCode')) {
        obj['exitCode'] = ApiClient.convertToType(data['exitCode'], 'Number');
      }
      if (data.hasOwnProperty('finishedAt')) {
        obj['finishedAt'] = ApiClient.convertToType(data['finishedAt'], 'Date');
      }
      if (data.hasOwnProperty('oomKilled')) {
        obj['oomKilled'] = ApiClient.convertToType(data['oomKilled'], 'Boolean');
      }
      if (data.hasOwnProperty('paused')) {
        obj['paused'] = ApiClient.convertToType(data['paused'], 'Boolean');
      }
      if (data.hasOwnProperty('pid')) {
        obj['pid'] = ApiClient.convertToType(data['pid'], 'Number');
      }
      if (data.hasOwnProperty('restarting')) {
        obj['restarting'] = ApiClient.convertToType(data['restarting'], 'Boolean');
      }
      if (data.hasOwnProperty('running')) {
        obj['running'] = ApiClient.convertToType(data['running'], 'Boolean');
      }
      if (data.hasOwnProperty('startedAt')) {
        obj['startedAt'] = ApiClient.convertToType(data['startedAt'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} dead
   */
  exports.prototype['dead'] = undefined;
  /**
   * @member {Number} exitCode
   */
  exports.prototype['exitCode'] = undefined;
  /**
   * @member {Date} finishedAt
   */
  exports.prototype['finishedAt'] = undefined;
  /**
   * @member {Boolean} oomKilled
   */
  exports.prototype['oomKilled'] = undefined;
  /**
   * @member {Boolean} paused
   */
  exports.prototype['paused'] = undefined;
  /**
   * @member {Number} pid
   */
  exports.prototype['pid'] = undefined;
  /**
   * @member {Boolean} restarting
   */
  exports.prototype['restarting'] = undefined;
  /**
   * @member {Boolean} running
   */
  exports.prototype['running'] = undefined;
  /**
   * @member {Date} startedAt
   */
  exports.prototype['startedAt'] = undefined;
  /**
   * @member {module:model/GoaContainerInspectRawState.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "created"
     * @const
     */
    "created": "created",
    /**
     * value: "running"
     * @const
     */
    "running": "running",
    /**
     * value: "paused"
     * @const
     */
    "paused": "paused",
    /**
     * value: "restarting"
     * @const
     */
    "restarting": "restarting",
    /**
     * value: "removing"
     * @const
     */
    "removing": "removing",
    /**
     * value: "exited"
     * @const
     */
    "exited": "exited",
    /**
     * value: "dead"
     * @const
     */
    "dead": "dead"  };


  return exports;
}));


