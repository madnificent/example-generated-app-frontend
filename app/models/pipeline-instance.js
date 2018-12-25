import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'title', 'icon', 'restartRequested', 'updateRequested']),

  title: attr(),
  icon: attr(),
  restartRequested: attr(),
  updateRequested: attr(),
  stack: belongsTo('stack', { inverse: 'pipelineInstances' }),
  status: belongsTo('status', { inverse: 'pipelineInstances' }),
  requestedStatus: belongsTo('status', { inverse: null }),
  services: hasMany('service', { inverse: 'pipelineInstance' })
});
