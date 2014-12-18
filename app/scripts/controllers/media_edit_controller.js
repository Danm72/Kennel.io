Kennel.MediaEditController = Ember.ObjectController.extend({
  needs: 'media',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.media.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('media',this.get('model'));
    }
  }
});

