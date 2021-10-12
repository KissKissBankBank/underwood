---
id: playground
title: <Playground />
sidebar_label: <Playground />
---
# Playground

Playground contains the draftJs editor (from [draft.js](https://draftjs.org/docs/api-reference-editor/))

## onInit
:::warning

Deprecated

:::



## onChange
The onChange event is called when when edits and selection changes occur. (default: `() => null`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';
 
<Playground
    onChange={() => setFieldValue('content', rawValue)}
/>;
```

## onFocus
The onFocus event is called when the element receives focus. (default: `() => null`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground
    onFocus={() => focusEditor(true)}
/>;
```

## onBlur
The onBlur event handler is called when focus has left the element. (default: `() => null`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground 
    onBlur={() => focusEditor(false)}
/>;
```

## initialValue
An object that contains values that will be defined in the content of the editor when the component is mounted. It must be of type [ContentState](https://draftjs.org/docs/api-reference-content-state). (default: `EditorState.createEmpty()`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground
    initialValue={initialValues.content}
/>;
```

## hasError
A boolean which allows to put in error the field linked to the editor with a red border. (default: `false`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground hasError/>;
```

## rawValue
A boolean which allows to converts draftJS content to raw content. (default: `true`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground rawValue={false} />;
```

## placeholder
Placeholder string to display when the editor is empty. (default: `''`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground placeholder="Title of your project" />;
```

## withoutBorder
A boolean which allows to display or not a border around the editor (default: `false`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground withoutBorder />;
```

## useRichTextStyle
A boolean that allows to manage the style. If it's `false` font-size will be set to 14px instead of 20px. (default: `false`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground useRichTextStyle />;
```

## isDisabled
A boolean that defines whether the editor should be rendered as a static DOM, with all editing capabilities disabled.(default: `false`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground isDisabled />;
```

## compact
A boolean that allows to manage the style. If it's `true` line-height will be set to 20px instead of 32px and the container margin will be set to 0.(default: `false`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground compact />;
```

## variant
A string that allows to manage the style. If it's "orion" the border aroud the editor will have border-radius style (default: `''`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground variant="orion" />;
```