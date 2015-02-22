Kennel.GroceryRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('grocery', params.grocery_id);
  }
});

