/**
 * Lightweight base class with on / off / fire methods for events
 */
export class OnOff {

  __events: Object;

  constructor(){
    this.__events = {};
  }

  /**
   * Add an event handler
   * @param eventName
   * @param func
   */
  on( eventName: string, func ) {
    // Create handler array if needed
    if (!this.__events.hasOwnProperty(eventName)) {
      this.__events[eventName] = [];
    }

    // Add event
    this.__events[eventName].push(func);
  }

  /**
   * Remove an event Handler
   * @param eventName
   * @param func
   */
  off( eventName: string, func ) {
    // If the event handler even exists...
    if (this.__events.hasOwnProperty(eventName)) {
      let handlerIndex = this.__events[eventName].findIndex(func);
      if (handlerIndex > -1) {
        this.__events[eventName].splice(handlerIndex, 1);
      }
    }
  }

  /**
   * Fire an event. Callback may return false to abort the event callback chain
   * @param {String} eventName Name of event registered using 'on'
   * @param {Object} [data=null] Optional event data to send
   */
  fire( eventName: string, data?: object ) {
    if (!this.__events.hasOwnProperty(eventName)) {
      return true;
    }
    let handlers = this.__events[eventName];
    let event = {
      from: 'EventedObject',
      name: eventName
    };
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i].call(null, event, data) === false) {
        return false;
      }
    }
    return true;
  }

}