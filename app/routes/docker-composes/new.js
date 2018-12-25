import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('docker-compose');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "docker-composes");
      }).catch( function() {
        alert("Creation of docker-compose failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "docker-composes");
      }).catch( function() {
        alert("Cancelling creation of docker-compose failed");
      });
    }
  }
});
