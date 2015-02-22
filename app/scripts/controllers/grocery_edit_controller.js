Kennel.GroceryEditController = Ember.ObjectController.extend({
  needs: 'grocery',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.grocery.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('grocery',this.get('model'));
    }
  }
});

