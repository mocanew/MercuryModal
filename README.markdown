# MercuryModal
**MercuryModal** is a wrapper for bootstrap's modal window and it was written for easier creation of dynamic modals.


## Current Version
1.0

## Quick Start

1. Link to MercuryModal.js `<script src="//raw.githubusercontent.com/rontav/MercuryModal/master/MercuryModal.js"></script>`
2. Use MercuryModal to display some text

```javascript
MercuryModal({
    title: 'Example 1',
    content: 'Simplest modal',
    show: {
        footer: false
    }
});
```

### Defaults
You can modify it like any other javascript object.

```javascript
$.MercuryModal.defaults = {
    id: 'mercuryModal',
    buttons:[{
        click: function(){},
        text: null,
        class: 'btn-default',
        dismiss: true
    }],
    show: {
        header: true,
        footer: true,
        closeButton: true
    },
    title: null,
    content: null,
    textAlign: {
        header: 'left',
        middle: 'left',
        footer: 'left'
    },
    zIndex: 1050,
    width: '600px',
    keyboard: true,
    backdrop: true,
    ready: function(){},
    hide: function(){}
};
```

## Demo and documentation
- Demo can be found at http://rontav.github.io/MercuryModal/

## Copyright
Copyright © 2015 

## License
Under MIT license - http://www.opensource.org/licenses/mit-license.php
