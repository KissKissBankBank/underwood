---
id: editor
title: <Editor />
sidebar_label: <Editor />
---
# Editor

Editor is used to create the context, define all translations and initialize EditorState (from [draft.js](https://draftjs.org/docs/api-reference-editor-state/))

## onInit
Function called when component is mount. Can serve to set editor values for example. (default: `() => null`)

```javascript
import { Editor } from '@kisskissbankbank/underwood';

<Editor
    onInit={() => helpers.setValue(field.value)}
/>;
```


## translations
Un objet contenant toutes les traductions nécessaires à l'éditeur (default: `{}`)
```javascript
import { Editor } from '@kisskissbankbank/underwood';

<Displayer
    translations={{
        title: "Such a great lib!"
        description: "Doc created with Dicosaurus"
    }}
/>;
```

## configResponsiveImageHandler
As the images are optimized and saved in a lambda service, we need to be sure that the server request is authorized. So we pass the configuration with authorized servers and hosts. (default: `{}`)

```javascript
import { Editor } from '@kisskissbankbank/underwood';

<Displayer
    configResponsiveImageHandler={{
        host: "https://www.kisskissbankbank.com/resize",
        allowedServers: ["localhost:1234", "localhost:5678"]
    }}
/>;
```

## children
Children passed to Editor component.

```javascript
import { Editor, Playground } from '@kisskissbankbank/underwood';

<Displayer>
    <Playground />
<Editor/>;
```