Kennel.Router.map(function () {

  this.resource('groceries', function(){
    this.resource('grocery', { path: '/:grocery_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });

  this.resource('shopping-lists', function(){
    this.resource('shopping-list', { path: '/:shopping-list_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });

});
