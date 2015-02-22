/*global Ember*/
Kennel.Grocery = DS.Model.extend({
    name: DS.attr('string'),

    price: DS.attr('integer'),

    bought: DS.attr('boolean')
});

// probably should be mixed-in...
Kennel.Grocery.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Kennel.Grocery.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    price: 'foo',
    
    bought: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    price: 'foo',
    
    bought: 'foo'
    
  }
  
];
