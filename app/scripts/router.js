Kennel.Router.map(function () {
  
  this.resource('medias', function(){
    this.resource('medium', { path: '/:medium_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('shoppinglists', function(){
    this.resource('shoppinglist', { path: '/:shoppinglist_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
