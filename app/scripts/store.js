Kennel.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:3000',
    pathForType: function(type) {
        return Ember.String.underscore(type);
    }
});
