/*
Microformats Test Suite - Downloaded from github repo: microformats/tests version v0.1.18 
Mocha integration test from: microformats-v2/h-org/simpleproperties
The test was built on Mon Jun 22 2015 14:02:25 GMT+0100 (BST)
*/

assert = chai.assert;


describe('h-org', function() {
   var htmlFragment = "<p class=\"h-org\">\n    <span class=\"p-organization-name\">W3C</span> - \n    <span class=\"p-organization-unit\">CSS Working Group</span>\n</p>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-org"],"properties":{"organization-name":["W3C"],"organization-unit":["CSS Working Group"],"name":["W3C - \n    CSS Working Group"]}}],"rels":{},"rel-urls":{}};

   it('simpleproperties', function(){
       assert.deepEqual(found, expected);
   });
});
