Kennel.ShoppingListsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('shopping-list');
  }
});

