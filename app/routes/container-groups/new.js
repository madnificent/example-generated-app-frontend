import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('container-group');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "container-groups");
      }).catch( function() {
        alert("Creation of container-group failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "container-groups");
      }).catch( function() {
        alert("Cancelling creation of container-group failed");
      });
    }
  }
});
