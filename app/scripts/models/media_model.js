/*global Ember*/
Kennel.Media = DS.Model.extend({
    name: DS.attr('string'),

    type: DS.attr('string')
});

// probably should be mixed-in...
Kennel.Media.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Kennel.Media.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    type: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    type: 'foo'
    
  }
  
];
