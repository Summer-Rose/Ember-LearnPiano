import Ember from 'ember';

export default Ember.Component.extend({
  addNewTip: false,
  actions: {
    tipFormShow() {
      this.set('addNewTip', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
      };
      this.set('addNewTip', false);
      this.sendAction('save', params);
    }
  }
});
