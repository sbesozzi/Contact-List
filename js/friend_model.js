import Backbone from 'backbone';

let friendModel = Backbone.Model.extend( {

  urlRoot: 'https://api.parse.com/1/classes/friends',

  idAttribute: 'objectId'

});

export default friendModel;