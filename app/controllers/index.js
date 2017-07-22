// app/controllers/index.js
import Ember from 'ember';

const { Logger: { log } } = Ember;

export default Ember.Controller.extend({
  occurrences: Ember.A(),

  actions: {
    calendarAddOccurrence: function(occurrence) {
      this.get('occurrences').pushObject(Ember.Object.create({
        title: occurrence.get('title'),
        startsAt: occurrence.get('startsAt'),
        endsAt: occurrence.get('endsAt')
      }));
    },

    calendarUpdateOccurrence: function(occurrence, properties) {
      occurrence.setProperties(properties);
      occurrence.setProperties({title: 'changed event'});
    },

    calendarRemoveOccurrence: function(occurrence) {
      this.get('occurrences').removeObject(occurrence);
    }
  }
});