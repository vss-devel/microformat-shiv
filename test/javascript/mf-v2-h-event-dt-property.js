/*
Microformats Test Suite - Downloaded from github repo: microformats/tests version v0.1.18 
Mocha integration test from: microformats-v2/h-event/dt-property
The test was built on Mon Jun 22 2015 14:02:25 GMT+0100 (BST)
*/

assert = chai.assert;


describe('h-event', function() {
   var htmlFragment = "<span class=\"h-event\">\n    <span class=\"p-name\">The party</span> will be on \n    \n    <p class=\"dt-start\">\n      <span class=\"value-title\" title=\"2013-03-14\"> </span>\n      March 14th 2013\n    </p>\n    <p class=\"dt-start\">\n        <time class=\"value\" datetime=\"2013-06-25\">25 July</time>, from\n        <span class=\"value\">07:00:00am \n    </span></p>   \n    \n    <p>\n        <time class=\"dt-start\" datetime=\"2013-06-26\">26 June</time>\n        \n        <ins class=\"dt-start\" datetime=\"2013-06-27\">Just added</ins>, \n        <del class=\"dt-start\" datetime=\"2013-06-28\">Removed</del>\n    </p>\n    <abbr class=\"dt-start\" title=\"2013-06-29\">June 29</abbr> \n    <data class=\"dt-start\" value=\"2013-07-01\"></data>\n    <p class=\"dt-start\">2013-07-02</p>\n    \n</span>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-event"],"properties":{"name":["The party"],"start":["2013-03-14","2013-06-25T07:00:00","2013-06-26","2013-06-27","2013-06-28","2013-06-29","2013-07-01","2013-07-02"]}}],"rels":{},"rel-urls":{}};

   it('dt-property', function(){
       assert.deepEqual(found, expected);
   });
});
