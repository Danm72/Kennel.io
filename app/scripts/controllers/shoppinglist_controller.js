Kennel.ShoppinglistController = Ember.ObjectController.extend({
  // Implement your controller here.
    actions: {
        editGrocery: function () {
            this.set('isEditing', true);
        },
        acceptChanges: function () {
            this.set('isEditing', false);
            this.get('model').save();
        },
        removeGrocery: function () {
            var grocery = this.get('model');
            grocery.deleteRecord();
            grocery.save();
        }
    },

    isEditing: false,

    isCompleted: function(key, value){
        var model = this.get('model');

        if (value === undefined) {
            // property being used as a getter
            return model.get('isCompleted');
        } else {
            // property being used as  setter
            model.set('isCompleted', value);
            model.save();
            return value;
        }
    }.property('model.isCompleted')
});

