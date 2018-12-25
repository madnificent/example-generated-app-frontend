import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'name', 'scaling', 'requestedScaling', 'restartRequested']),

  name: attr(),
  scaling: attr(),
  requestedScaling: attr(),
  restartRequested: attr(),
  pipelineInstance: belongsTo('pipeline-instance', { inverse: 'services' }),
  status: belongsTo('status', { inverse: null }),
  requestedStatus: belongsTo('status', { inverse: null })
});
