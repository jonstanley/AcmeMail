'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('acmeMsgApp', function() {

  beforeEach(function() {
    browser().navigateTo('index.html');
  });


  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/");
  });


  describe('Logon View', function() {

    beforeEach(function() {
      browser().navigateTo('#/');
    });


    it('should render logon.html when user navigates to /', function() {
      expect(element('[data-ng-view] p:first').text()).
        toMatch(/partial for logon/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser().navigateTo('#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 2/);
    });

  });
});
