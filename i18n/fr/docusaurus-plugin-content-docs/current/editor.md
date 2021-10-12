---
id: editor
title: <Editor />
sidebar_label: <Editor />
---
# Editor
Editor est utilisé pour créer le contexte, définir toutes les traductions et initialiser EditorState. (from [draft.js](https://draftjs.org/docs/api-reference-editor-state/))

## onInit
Fonction appelée lorsque le composant est monté. Peut servir à définir les valeurs de l'éditeur par exemple. (default: `() => null`)

```javascript
import { Editor } from '@kisskissbankbank/underwood';

<Editor
    onInit={() => helpers.setValue(field.value)}
/>;
```


## translations
Un object qui contient toutes les traductions nécessaires à l'éditeur. (default: `{}`)
```javascript
import { Editor } from '@kisskissbankbank/underwood';

<Editor
    translations={{
        title: "Such a great lib!"
        description: "Doc created with Dicosaurus"
    }}
/>;
```

## configResponsiveImageHandler
Comme les images sont optimisées et sauvegardées dans un service lambda, nous devons être sûrs que la requête du serveur est autorisée. Nous passons donc la configuration avec les serveurs et hôtes autorisés. (default: `{}`)

```javascript
import { Editor } from '@kisskissbankbank/underwood';

<Editor
    configResponsiveImageHandler={{
        host: "https://www.kisskissbankbank.com/resize",
        allowedServers: ["localhost:1234", "localhost:5678"]
    }}
/>;
```

## children
Enfants transmis au composant Editor.

```javascript
import { Editor, Playground } from '@kisskissbankbank/underwood';

<Editor>
    <Playground />
<Editor/>;
```