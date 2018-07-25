import { directive } from 'lit-html';
import { html } from 'lit-html/lib/lit-extended';
import '../../../../bower_components/zero-md/build/zero-md.html';

function md(markdown) {
    return directive((part) => {
        const zeroMd = document.createElement('zero-md');
        zeroMd.innerHTML = `<template><xmp>${markdown}</xmp></template>`;
        part.setValue(zeroMd);
    });
}

export default function notes(field) {
    return html`${md(`
# Polymer elements

## Text field

### How it renders`)}

<br>${field}<br>

${md(`### Usage

${'```js'}
import { textbox } from '@lit-any/components/polymer-elements';
import { FieldTemplates } from 'lit-any;

FieldTemplates.default
    .when(f => f.type === 'string')
    .renders(textbox(options));
${'```'}
    
### Options

| a | b |
|--|--|
|x|y|
`)}`;
}
