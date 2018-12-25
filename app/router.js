import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('route-not-found', {
    path: '/*wildcard'
  });
  this.route('pipelines', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('steps', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('docker-composes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('container-items', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('container-groups', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('container-relations', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('pipeline-instances', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('services', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('stacks', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('statuses', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
});

export default Router;
