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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ModokiApiDocumentation);
  }
}(this, function(expect, ModokiApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ModokiApiDocumentation.GoaUserDefaultshell();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GoaUserDefaultshell', function() {
    it('should create an instance of GoaUserDefaultshell', function() {
      // uncomment below and update the code to test GoaUserDefaultshell
      //var instance = new ModokiApiDocumentation.GoaUserDefaultshell();
      //expect(instance).to.be.a(ModokiApiDocumentation.GoaUserDefaultshell);
    });

    it('should have the property defaultShell (base name: "defaultShell")', function() {
      // uncomment below and update the code to test the property defaultShell
      //var instance = new ModokiApiDocumentation.GoaUserDefaultshell();
      //expect(instance).to.be();
    });

  });

}));
