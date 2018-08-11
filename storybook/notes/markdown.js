import { html } from 'lit-html/lib/lit-extended';
import { TemplateResult } from 'lit-html';
import '../../bower_components/zero-md/build/zero-md.html';

function createZeroMd(markdown) {
    const zeroMd = document.createElement('zero-md');
    zeroMd.innerHTML = `<template><xmp>${markdown.replace(/---/g, '```')}</xmp></template>`;

    return zeroMd;
}

export default function (strings, ...keys) {
    if (keys.length === 0) {
        return html`${strings[0]}`;
    }

    let result = '';
    let currentMarkdown = strings[0];
    keys.forEach((key, i) => {
        if (key.constructor === TemplateResult) {
            result = html`${result} ${createZeroMd(currentMarkdown)} <br> ${key} <br <hr> <br> `;
            currentMarkdown = '';
        } else {
            currentMarkdown = `${currentMarkdown} ${strings[i]} ${key}`;
        }

        if (i === keys.length - 1) {
            currentMarkdown = `${currentMarkdown} ${strings[i + 1]}`;
            result = html`${result} ${createZeroMd(currentMarkdown)}`;
        }
    });

    return result;
}
