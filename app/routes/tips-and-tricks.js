import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('tip');
  },

  isFormShowing: false,

  actions: {
    save(params) {
      var newTip = this.store.createRecord('tip', params);
      newTip.save();
      this.transitionTo('tips-and-tricks');
    },
    update(tip, params) {
      rental.save();
      this.transitionTo('tips-and-tricks');
    }
    destroyArticle(tip) {
      tip.destroyRecord();
      this.transitionTo('tips-and-tricks');
    }
  }
});
