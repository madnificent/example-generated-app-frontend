import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('container-relation');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "container-relations");
      }).catch( function() {
        alert("Creation of container-relation failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "container-relations");
      }).catch( function() {
        alert("Cancelling creation of container-relation failed");
      });
    }
  }
});
