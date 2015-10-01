import Ember from 'ember';

export default Ember.Component.extend({
  updateTipForm: false,
  actions: {
    updateTipForm() {
      this.set('updateTipForm', true);
    },
    update(tip) {
      var params = {
        title = this.get('title'),
        author = this.get('author'),
        description = this.get('description'),
      };
      this.set('updateTipForm', false);
      this.sendAction('update', tip, params);
    }
  }
});
