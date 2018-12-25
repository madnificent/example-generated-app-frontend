import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('pipeline-instance');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "pipeline-instances");
      }).catch( function() {
        alert("Creation of pipeline-instance failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "pipeline-instances");
      }).catch( function() {
        alert("Cancelling creation of pipeline-instance failed");
      });
    }
  }
});
