import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('tip');
  },

  actions: {
    destroyArticle(tip) {
      tip.destroyRecord();
      this.transitionTo('tips-and-tricks');
    }
  }
});
