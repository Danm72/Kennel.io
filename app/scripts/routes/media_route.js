Kennel.MediaRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('media', params.media_id);
  }
});

