import { inject } from '@ember/service';
import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin,{
  modelName: 'step'
});
