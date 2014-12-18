Kennel.ShoppinglistEditController = Ember.ObjectController.extend({
  needs: 'shoppinglist',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.shoppinglist.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('shoppinglist',this.get('model'));
    }
  }
});

