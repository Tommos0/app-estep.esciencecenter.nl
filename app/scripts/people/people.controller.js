(function() {
  'use strict';

  function PeopleController(dc, NdxService) {
    var collection = 'people';
    this.initializeChart = function() {
      var ndx = NdxService.getNdxInstance(collection);
      var all = ndx.groupAll();

      var dataCounter = dc.dataCount('#dc-data-count-people', collection)
        .dimension(ndx)
        .group(all);

      dataCounter.render();
    };

    this.resetAll = function() {
      dc.filterAll(collection);
      dc.renderAll(collection);
    };
    this.initializeChart();
  }

  angular.module('estepApp.people').controller('PeopleController', PeopleController);
})();
