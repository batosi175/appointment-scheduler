// app/controllers/index.js
/*global moment*/
/*eslint no-unused-vars: ["error", {"args": "none"}]*/

import Ember from 'ember';

const { Logger: { log }, $ } = Ember;

export default Ember.Controller.extend({
  id: idGenerator(),
  dayAspectRatio: 1.1,
  selectedDay: new moment(),
  events: Ember.A([{
    id: idGenerator(),
    title: 'Event 1',
    className: 'regular-event',
    start: '2017-07-20T07:30:00',
    end: '2017-07-20T09:00:00',
    editable: true,
    content: ''
  },
  {
    id: idGenerator(),
    title: 'Generated Event',
    className: 'regular-event',
    start: new moment().minute(0).second(0),
    editable: true,
    content: ''
  },  {
    id: idGenerator(),
    title: 'All Day Event',
    className: 'all-day-event',
    allDay: true,
    start: '2017-07-19',
    editable: true,
    content: ''
  }
  ]),

  actions: {
    // handles the callback from calendar drag and drop functions
    calendarEventUpdate: function(event, jsEvent, ui, view) {
      // here we have to set the controller events object because map returns a copy of the array and does not mutate it
      var updatedEvents = this.get('events').map(e => {
        if (e.id === event.id) {
          return event
        }
        return e;
      });
      this.set('events', updatedEvents);
    },

    // month calendar interactions
    dayClicked: function(date, jsEvent, view) {
      // takes the user to the correct day on the agenda unless theya re editing an event
      if (!this.get('editingEventDetails')) {
        this.set('selectedDay', date);
      }
    },
    eventClicked: function(event, jsEvent, view) {
      // takes the user to the correct day on the agenda unless they are editing an event
      if (!this.get('editingEventDetails')) {
        this.set('selectedDay', event.start);
      }
    },
    
    // day agenda interactions
    editEvent: function(event,element,view) { 
      this.set('editingEventDetails',true);
      this.set('event', event);
    },
    // adds an event based on where in the agenda view the user clicked
    addEvent: function(date, jsEvent, view) {
      var events = this.get('events');
      // all day events only contain information about the day, thus format will return 00:00:00
      var allDay = date.format('HH:mm:ss') === "00:00:00" ? true : false;
      // creates object with some default parameters
      // use Click to edit to idicate the appropriate user interaction to take
      var newEvent = Ember.Object.create({
        id: idGenerator(),
        title: 'Click To Edit',
        className: allDay ? 'all-day-event' : 'regular-event',
        start: date,
        editable: true,
        allDay,
        content: ''
      });
      // adds to the current set of user objects. this is an internal ember function
      // and will notify that a re render to should take place
      events.pushObject(newEvent);
    },
    
    // event edit form actions
    saveEvent: function([event, title, content]) {
      event.title = title;
      event.content = content; 

      var updatedEvents = this.get('events').map(e => {
        if (e.id === event.id) {
          return event
        }
        return e;
      });
      this.set('events', updatedEvents);
      this.set('editingEventDetails', false);
      this.set('event', null);
    },
    exitEventForm: function() {
      this.set('editingEventDetails', false);
      this.set('event', null);
    },
    deleteEvent: function(event) {
      var events = this.get('events').filter(e => {
        return e.id !== event.id;
      });
      this.set('events', events);
      this.set('editingEventDetails', false);
      this.set('event', null); 
    },
  }
});

function idGenerator() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
}