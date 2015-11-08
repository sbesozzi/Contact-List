import Backbone from 'backbone';
import $ from 'jquery';

import friendsCollection from './friends_collection';
import friendModel from './friend_model';


import friendsTemplate from './views/friends';
import friendTemplate from './views/friend';
import addFriendTemplate from './views/add_friend';

// Create Router & Call extend method 
let Router = Backbone.Router.extend( {
  // Create routes
  routes: {
    "" : "redirectToFriends",
    "friends" : "showFriends",
    "friend/:id" : "showFriend",
    "addFriend" : "showAddFriend"
  },

  initialize(appElement) {
    // Set appElement to $el
    this.$el = appElement;
    console.log(appElement);

    this.friends = new friendsCollection();

    let router = this;

    // Click event for contact list
    this.$el.on('click', '.friend-list-item', (event) => {
      let $li = $(event.currentTarget);
      let friendId = $li.data('friend-id');

      this.navigate(`friend/${friendId}`, {trigger: true}); 

      // this.showFriend(friendId);
    });

    // Click event for back button
    this.$el.on('click', '.back-button', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });


    // Click event for add button
    this.$el.on('click', '.new-button', (event) => {
      console.log('button click to add new form');
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(`addFriend`, {trigger: true});
    });

    // Click event for save button for new friend
    this.$el.on('click', '.save-button', (event) => {
      console.log('button click add new friend');
      // let $button = $(event.currentTarget);
      // let route = $button.data('to');
      // this.navigate(route, {trigger: true});
    
      // Create new friend & find el value
      let name     = $(this.$el).find('.Name').val();
      let email    = $(this.$el).find('.Email').val();
      let phone    = $(this.$el).find('.Phone').val();
      let location = $(this.$el).find('.Location').val();

      let newFriend = new friendModel({
        Name: name,
        Email: email,
        Phone: phone,
        Location: location
      });

      // add & save newFriend
      this.friends.add(newFriend);
      newFriend.save().then(() => {
        alert('You added a new friend!');
        // let route = $button.data('to');
        // this.navigate(`friends`, {trigger: true});
        let $button = $(event.currentTarget);
        let route = $button.data('to');
        this.navigate(route, {trigger: true});
      });
      
    });
  },


  showSpinner() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
      );
  },

  redirectToFriends() {
    console.log('show redirect page');
    this.navigate('friends', {
      replace: true,
      trigger: true
    });
  },

  showFriends() {
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

  showFriend(friendId) {
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

  showAddFriend() {
    console.log('show add friend page');
    this.showSpinner();
    this.$el.html(addFriendTemplate());
  },

  start() {
    Backbone.history.start();
    return this;
  }

});

export default Router;
