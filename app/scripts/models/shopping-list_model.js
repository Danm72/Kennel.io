/*global Ember*/
Kennel.ShoppingList = DS.Model.extend({

    name: DS.attr('string'),

    price: DS.attr('string'),

    date: DS.attr('string')
});

// probably should be mixed-in...
Kennel.ShoppingList.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Kennel.ShoppingList.FIXTURES = [

  {
    id: 0,

    name: 'foo',

    price: 'foo',

    date: 'foo'

  },

  {
    id: 1,

    name: 'foo',

    price: 'foo',

    date: 'foo'

  }

];
