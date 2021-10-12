---
id: controls
title: <Controls />
sidebar_label: <Controls />
---
# Controls

Controls permet d'afficher des boutons de mise en forme comme l'alignement, l'ajout d'une image ou d'un lien.


## disabled
Un booléen global qui permet de rendre cliquable ou non les différents enfants du composant Controls (default: `false`)

```javascript
import { Controls } from '@kisskissbankbank/underwood';
 
<Controls disabled />;
```

## whiteMode
Un booléen qui permet de gérer la couleur du fond. Si `false` le fond sera gris clair, sinon le fond sera blanc. (default: `false`)

```javascript
import { Controls } from '@kisskissbankbank/underwood';

<Controls whiteMode />;
```

## centered
Un booléen qui permet de gérer l'alignement des boutons de contrôle. Si `true` les boutons seront centrés au lieu d'être alignés à gauche. (default: `false`)

```javascript
import { Controls } from '@kisskissbankbank/underwood';

<Controls centered />;
```

## className
Une chaîne de caractère avec un nom de classe pour surcharger le style.

```javascript
import { Controls } from '@kisskissbankbank/underwood';

<Controls
    className="kiss-News__editorToolbar__controls"
/>;
```

## children
Enfants transmis au composant Controls. Utilisez-le pour ajouter les boutons de contrôle.

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