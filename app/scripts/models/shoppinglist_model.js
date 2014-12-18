/*global Ember*/
Kennel.Shoppinglist = DS.Model.extend({
    name: DS.attr('string'),

    items: DS.attr('array'),

    price: DS.attr('number')
});

// probably should be mixed-in...
Kennel.Shoppinglist.reopen({
    attributes: function () {
        var model = this;
        return Ember.keys(this.get('data')).map(function (key) {
            return Em.Object.create({model: model, key: key, valueBinding: 'model.' + key});
        });
    }.property()
});

// delete below here if you do not want fixtures
Kennel.Shoppinglist.FIXTURES = [

    {
        id: 0,

        name: 'Lidl shop',

        items: [
            'milk',
            'water',
            'extra small jonnies(for cian)'
        ],

        price: '€20'

    },

    {
        id: 1,

        name: 'Tesco shop',

        items: [
            'milk',
            'bread',
            'moist towelettes'
        ],

        price: '€10,000'

    }

];
