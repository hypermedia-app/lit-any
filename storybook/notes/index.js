import '../../bower_components/zero-md/build/zero-md.html';

export function md(strings, ...keys) {
    const result = [strings[0]];
    keys.forEach((key, i) => {
        result.push(key, strings[i + 1]);
    });
    const markdown = result.join('');

    const zeroMd = document.createElement('zero-md');
    zeroMd.innerHTML = `<template><xmp>${markdown}</xmp></template>`;

    return zeroMd;
}

export function codeblock(lang) {
    return `\`\`\`${lang || ''}`;
}
