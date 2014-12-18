Kennel.ShoppinglistRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('shoppinglist', params.shoppinglist_id);
  }
});

