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
    instance = new ModokiApiDocumentation.ContainerApi();
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

  describe('ContainerApi', function() {
    describe('containerCreate', function() {
      it('should call containerCreate successfully', function(done) {
        //uncomment below and update the code to test containerCreate
        //instance.containerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerDownload', function() {
      it('should call containerDownload successfully', function(done) {
        //uncomment below and update the code to test containerDownload
        //instance.containerDownload(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerDownload1', function() {
      it('should call containerDownload1 successfully', function(done) {
        //uncomment below and update the code to test containerDownload1
        //instance.containerDownload1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerExec', function() {
      it('should call containerExec successfully', function(done) {
        //uncomment below and update the code to test containerExec
        //instance.containerExec(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerGetConfig', function() {
      it('should call containerGetConfig successfully', function(done) {
        //uncomment below and update the code to test containerGetConfig
        //instance.containerGetConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerInspect', function() {
      it('should call containerInspect successfully', function(done) {
        //uncomment below and update the code to test containerInspect
        //instance.containerInspect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerList', function() {
      it('should call containerList successfully', function(done) {
        //uncomment below and update the code to test containerList
        //instance.containerList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerLogs', function() {
      it('should call containerLogs successfully', function(done) {
        //uncomment below and update the code to test containerLogs
        //instance.containerLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerRemove', function() {
      it('should call containerRemove successfully', function(done) {
        //uncomment below and update the code to test containerRemove
        //instance.containerRemove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerSetConfig', function() {
      it('should call containerSetConfig successfully', function(done) {
        //uncomment below and update the code to test containerSetConfig
        //instance.containerSetConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerStart', function() {
      it('should call containerStart successfully', function(done) {
        //uncomment below and update the code to test containerStart
        //instance.containerStart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerStop', function() {
      it('should call containerStop successfully', function(done) {
        //uncomment below and update the code to test containerStop
        //instance.containerStop(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerUpload', function() {
      it('should call containerUpload successfully', function(done) {
        //uncomment below and update the code to test containerUpload
        //instance.containerUpload(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
