import Ember from 'ember';

export default Ember.Component.extend({
  isArticleShowing: false,
  actions: {
    articleShow: function() {
      this.set('isArticleShowing', true);
    },
    articleHide: function() {
      this.set('isArticleShowing', false);
    },
    destroyArticle(tip) {
      if (confirm('Are you sure you want to delete this entire entry?')) {
        this.sendAction('destroyArticle', tip);
      }
    }
  }
});
