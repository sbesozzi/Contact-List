import Backbone from 'backbone';
import friendModel from './friend_model';

let friendsCollection = Backbone.Collection.extend( {

  url: 'https://api.parse.com/1/classes/friends',

  model: friendModel,

  parse(data) {
    return data.results;
  }

});

export default friendsCollection;