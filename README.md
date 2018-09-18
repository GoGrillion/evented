# On-Off

Basic event implementation with fast performance.

## Documentation

On-Off provides a base class `OnOff` with on, off, and fire methods.

### Installation

Include as a 

```
npm install @gogrillion/on-off --save
```

### Basic Usage

Typescript Example
```typescript

import {OnOff} from './index'

class ObjectWithEvents extends OnOff {
  
  constructor(){
    super();
  }
  
  downloadImage(){
    setTimeout(() => this.fire('image-loaded'), 1000 );
  }
  
}

let evObj = new ObjectWithEvents();
evObj.on('image-loaded', () => console.log('Image has downloaded') );
evObj.downloadImage();

// console will print 'Image has downloaded' in 1 sec.
```

## Development

Run `npm run compile` to generate js files from typescript sources.

## License / Credits

Under ISC License