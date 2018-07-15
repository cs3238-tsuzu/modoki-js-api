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
    instance = new ModokiApiDocumentation.UserApi();
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

  describe('UserApi', function() {
    describe('userAddAuthorizedKeys', function() {
      it('should call userAddAuthorizedKeys successfully', function(done) {
        //uncomment below and update the code to test userAddAuthorizedKeys
        //instance.userAddAuthorizedKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userGetConfig', function() {
      it('should call userGetConfig successfully', function(done) {
        //uncomment below and update the code to test userGetConfig
        //instance.userGetConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userGetDefaultShell', function() {
      it('should call userGetDefaultShell successfully', function(done) {
        //uncomment below and update the code to test userGetDefaultShell
        //instance.userGetDefaultShell(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userListAuthorizedKeys', function() {
      it('should call userListAuthorizedKeys successfully', function(done) {
        //uncomment below and update the code to test userListAuthorizedKeys
        //instance.userListAuthorizedKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userRemoveAuthorizedKeys', function() {
      it('should call userRemoveAuthorizedKeys successfully', function(done) {
        //uncomment below and update the code to test userRemoveAuthorizedKeys
        //instance.userRemoveAuthorizedKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userSetAuthorizedKeys', function() {
      it('should call userSetAuthorizedKeys successfully', function(done) {
        //uncomment below and update the code to test userSetAuthorizedKeys
        //instance.userSetAuthorizedKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userSetDefaultShell', function() {
      it('should call userSetDefaultShell successfully', function(done) {
        //uncomment below and update the code to test userSetDefaultShell
        //instance.userSetDefaultShell(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));