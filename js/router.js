import Backbone from 'backbone';
import $ from 'jquery';

import friendsCollection from './friends_collection';

import friendsTemplate from './views/friends';
import friendTemplate from './views/friend';

// Create Router & Call extend method 
let Router = Backbone.Router.extend( {
  // Create routes
  routes: {
    "" : "redirectToFriends",
    "friends" : "showFriends",
    "friend/:id" : "showFriend"
  },

  initialize: function(appElement) {
    this.$el = appElement;
    console.log(appElement);

    this.friends = new friendsCollection();

    let router = this;
    // Click event for contact list
    this.$el.on('click', '.friend-list-item', (event) => {
      let $li = $(event.currentTarget);

      let friendId = $li.data('friend-id');
      this.navigate(`friend/${friendId}`, {trigger: true}); 
      this.showFriend(friendId);
    });
    // Click event for back button
    this.$el.on('click', '.back-button', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });
  },

  
  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
      );
  },

  redirectToFriends: function() {
    console.log('show redirect page');
    this.navigate('friends', {
      replace: true,
      trigger: true
    });
  },

  showFriends: function() {
    console.log('show friends page');

    this.showSpinner();

    let router = this;

    this.friends.fetch().then(() => {
      router.$el.html(
        friendsTemplate(
          router.friends.toJSON()
          )
        );
    });
  },

  showFriend: function(friendId) {
    console.log('show friend page');
    let friend = this.friends.get(friendId);

    if (friend) {
      this.$el.html(
        friendTemplate(friend.toJSON()
        )
      );
    } else {
      let router = this;
      friend = this.friends.add({objectId: friendId});
      this.showSpinner();

      friend.fetch().then(function() {
        router.$el.html(
          friendTemplate(friend.toJSON()
            )
          );
      });
    }
  
  },

  start: function() {
    Backbone.history.start();
    return this;
  }

});

export default Router;
