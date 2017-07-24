import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  didInsertElement() {
    this._super(...arguments);
    var event = this.get('event');
    var title = (event.title === 'Click To Edit') ? '' : event.title;
    var content = event.content;
    this.set('title', title);
    this.set('content', content);
  }, 
  actions: {
    save: function() {
      var event = this.get('event');
      var title = this.get('title') === '' ? 'Click To Edit' : this.get('title');
      var content = this.get('content');
      this.sendAction('submit', [event, title, content]);
    },
    cancel: function() {
      this.sendAction('cancel');
    },
    delete: function() {
      var event = this.get('event');
      this.sendAction('delete', event);
    }
  }
});
