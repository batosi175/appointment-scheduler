# appointment-scheduler

## Requirements
Write a calendar application using HTML, JavaScript, and CSS. The user interface should generally have two panes.  
One pane should have a calendar with clickable days, and the other should have time slots for a selected day.  
The time slots can be in any increment you wish - hourly, 30-minutes, 15-minutes, etc. 
Each time slot must be able to have a text message attached to be able to make appointments.

## Assumptions 
Calendar with clickable days should be generally presistent. 
Time slot view could be swapped out with appointment form. 
Appointment should have a content/message/description field as well as a title.

## Usage
| Action                   | Command                          | Element       |
| ------------------------ | -------------------------------- | ------------- |
| Select Day               | click day or event               | calendar pane |
| extend event across days | drag event right edge across days| calendar pane |
| move event day           | drag event to a different day    | calendar pane |
| move event slot          | drag event to to different slot  | timeslot pane |
| change event duration    | drag event bottom edge           | timeslot pane |
| edit event               | click event                      | timeslot pane |
| save event               | click save button                | event form    |
| delete event             | click delete button              | event form    |
| cancel edit              | click cancel button              | event form    |


## Usability considerations
If currently editing an appointment, do not allow interaction with calendar.
Allow direct editing of appointment slot and duration from timeslot pane. 
From Calendar view, user can move an appointment between days.
From calendar view user can take an all day appointment and extend across multiple days.
All day appointments denoted as red
Regular appointments denoted as blue

## Things I would differently with more time
Upon selecting an appointment from the calendar view automatically scroll to it in the in the timeslot pane.
Bring up editing form by clicking event in the calendar view.
Creating better transitions between timeslot pane and appointment form. possibly use of animations
Creation of a mobile agent detection service to scroll downward to timeslot pane when user selects a day.

## Prerequisites
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/batosi175/appointment-scheduler.git` this repository
* `cd appointment-scheduler`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
