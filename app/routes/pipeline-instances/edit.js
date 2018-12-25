import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('pipeline-instance', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("pipeline-instances.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("pipeline-instances.show", model);
      }).catch( function() {
        alert("Could not save pipeline-instance");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "pipeline-instances");
      }).catch( function() {
        alert("Deletion of pipeline-instance failed");
      });
    }
  }
});
