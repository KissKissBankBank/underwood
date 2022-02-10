---
id: playground
title: <Playground />
sidebar_label: <Playground />
---
# Playground

Playground contient l'édietru draftJS (from [draft.js](https://draftjs.org/docs/api-reference-editor/))

## onInit
:::warning

Déprécié

:::



## onChange
L'événement onChange est appelé lorsque des modifications d'édition et de sélection se produisent. (default: `() => null`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';
 
<Playground
    onChange={() => setFieldValue('content', rawValue)}
/>;
```

## onFocus
L'événement onFocus est appelé lorsque l'élément reçoit le focus. (default: `() => null`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground
    onFocus={() => focusEditor(true)}
/>;
```

## onBlur
Le gestionnaire d'événement onBlur est appelé lorsque le focus a quitté l'élément. (default: `() => null`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground 
    onBlur={() => focusEditor(false)}
/>;
```

## initialValue
Un objet contenant les valeurs qui seront définies dans le contenu de l'éditeur lorsque le composant sera monté. Il doit être de type [ContentState](https://draftjs.org/docs/api-reference-content-state). (default: `EditorState.createEmpty()`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground
    initialValue={initialValues.content}
/>;
```

## hasError
Un booléen qui permet de mettre en erreur le champ lié à l'éditeur avec une bordure rouge. (default: `false`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground hasError/>;
```

## rawValue
Un booléen qui permet de convertir le contenu de draftJS en contenu brut. (default: `true`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground rawValue={false} />;
```

## placeholder
Chaîne de caractères à afficher lorsque l'éditeur est vide. (default: `''`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground placeholder="Title of your project" />;
```

## withoutBorder
Un booléen qui permet d'afficher ou non une bordure autour de l'éditeur. (default: `false`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground withoutBorder />;
```

## useRichTextStyle
Un booléen qui permet de gérer le style. Si `false`, la taille de la police sera fixée à 14px au lieu de 20px. (default: `false`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground useRichTextStyle />;
```

## isDisabled
Un booléen qui définit si l'éditeur doit être rendu comme un DOM statique, avec toutes les capacités d'édition désactivées.(default: `false`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground isDisabled />;
```

## compact
A boolean that allows to manage the style. If it's `true` line-height will be set to 20px instead of 32px and the container margin will be set to 0. (default: `false`)

```javascript
import { Playground } from '@kisskissbankbank/underwood';

<Playground compact />;
```
