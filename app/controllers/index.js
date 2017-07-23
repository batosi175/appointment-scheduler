// app/controllers/index.js
/*global moment*/
/*eslint no-unused-vars: ["error", {"args": "none"}]*/

import Ember from 'ember';

const { Logger: { log }, $ } = Ember;

export default Ember.Controller.extend({
  dayAspectRatio: 1.0,
  selectedDay: new moment(),
  events: Ember.A([{
    id: 0,
    title: 'Event 1',
    className: 'regular-event',
    start: '2017-07-20T07:30:00',
    end: '2017-07-20T09:00:00',
    editable: true
  },
  {
    id: 1,
    title: 'Generated Event',
    className: 'regular-event',
    start: new moment().minute(0).second(0),
    editable: true
  },  {
    id: 2,
    title: 'All Day Event',
    className: 'all-day-event',
    allDay: true,
    // color: 'red',
    start: '2017-07-19',
    editable: true
  }
  ]),

  actions: {
    // month calendar interactions
    dayClicked: function(date, jsEvent, view) {
      // log('day clicked');
      this.set('selectedDay', date);
    },
    eventClicked: function(event, jsEvent, view) {
      // debugger;
      log('event cal clicked')
      // debugger;
      // $('.full-calendar').fullCalendar('updateEvent', event);
      this.set('selectedDay', event.start);
      // $('.calendar-day .fc-scroller,fc-time-grid-container')
      //   .animate({scrollTop: $(`.calendar-day .regular-event`)[0].style.top}, 2000);
    },
    monthDragStop: function(event, jsEvent, ui, view) {
      var updatedEvents = this.get('events').map(e => {
        if (e.id === event.id) {
          return event
        }
        return e;
      });
      this.set('events', updatedEvents);
    },
    monthResizeStop: function(event, jsEvent, ui, view) {
      var updatedEvents = this.get('events').map(e => {
        if (e.id === event.id) {
          return event
        }
        return e;
      });
      this.set('events', updatedEvents);
    },

    // day planner interactions
    eventDragStop: function(event, jsEvent, ui, view) {
      var updatedEvents = this.get('events').map(e => {
        if (e.id === event.id) {
          return event
        }
        return e;
      });
      this.set('events', updatedEvents);
    },
    eventResizeStop: function(event, jsEvent, ui, view) {
      var updatedEvents = this.get('events').map(e => {
        if (e.id === event.id) {
          return event
        }
        return e;
      });
      this.set('events', updatedEvents);
    },
    editEvent: function(event,element,view) { 
      log('editevent');
    },
    addEvent: function(date, jsEvent, view) {
      log('addEvent');
      var events = this.get('events');
      var id = events.length;

      var allDay = date.format('HH:mm:ss') === "00:00:00" ? true : false;

      var newEvent = Ember.Object.create({
        id,
        title: 'placeholder Event',
        className: allDay ? 'all-day-event' : 'regular-event',
        start: date,
        editable: true,
        allDay
      });
      events.pushObject(newEvent);
      // debugger;
    },
    // general rendering
    eventRender: function(event, element, view) {
      element.attr('id', event.id);
    },
    eventAfterAllRender: function(view){
      // if("agendaDay"===view.name){
      //   if($(".calendar-day .fc-event").length>0){
      //     var firstEvent = $(".calendar-day .fc-event:first")[0].style.top;
      //     $('.calendar-day .fc-scroller,fc-time-grid-container')
      //       .animate({scrollTop: firstEvent}, 2000);
      //   }
      // }          
    },
  }
});