---
id: controls
title: <Controls />
sidebar_label: <Controls />
---
# Controls

Controls allows to display formatting buttons like alignment, adding an image or a link


## disabled
A global boolean which allows to make clickable or not the different children of the Controls component (default: `false`)

```javascript
import { Controls } from '@kisskissbankbank/underwood';
 
<Controls disabled />;
```

## whiteMode
A boolean that allows to manage the background color. If `false` the background will be light grey, otherwise the background will be white. (default: `false`)

```javascript
import { Controls } from '@kisskissbankbank/underwood';

<Controls whiteMode />;
```

## centered
A boolean that allows to manage the alignement of the controls buttons. If `true` the buttons will be centered instead of left aligned. (default: `false`)

```javascript
import { Controls } from '@kisskissbankbank/underwood';

<Controls centered />;
```

## className
A string with class name to override style.

```javascript
import { Controls } from '@kisskissbankbank/underwood';

<Controls
    className="kiss-News__editorToolbar__controls"
/>;
```

## children
Children passed to Controls component. Use it to add the controls buttons

```javascript
import { Controls } from '@kisskissbankbank/underwood';

<Controls>
    <Controls.Group>
        <Controls.Bold />
        <Controls.Italic />
        <Controls.Quote />
    </Controls.Group>
</Controls>;
```