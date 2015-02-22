Kennel.GroceriesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('grocery');
  }
});

