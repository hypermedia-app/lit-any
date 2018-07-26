import { directive } from 'lit-html';
import '../../bower_components/zero-md/build/zero-md.html';

export function md(markdown) {
    return directive((part) => {
        const zeroMd = document.createElement('zero-md');
        zeroMd.innerHTML = `<template><xmp>${markdown}</xmp></template>`;
        part.setValue(zeroMd);
    });
}

export function codeblock(lang) {
    return `\`\`\`${lang || ''}`;
}
