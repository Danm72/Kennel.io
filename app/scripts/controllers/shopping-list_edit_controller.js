Kennel.ShoppingListEditController = Ember.ObjectController.extend({
  needs: 'shopping-list',
  actions: {
    save: function(){
      self = this;
      this.get('buffer').forEach(function(attr){
        self.get('controllers.shopping-list.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('shopping-list',this.get('model'));
    }
  }
});

