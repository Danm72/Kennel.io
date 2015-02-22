Kennel.ShoppingListRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('shopping-list',params.id);
  }
});

