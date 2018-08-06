export default async function (name, path) {
    let href = `../../bower_components/${name}/${name}.html`;

    if (path) {
        href = `../../bower_components/${path}.html`;
    }

    const importHref = new Promise((resolve, reject) => {
        Polymer.importHref(href, resolve, reject, true);
    });

    await importHref;
    return window.customElements.whenDefined(name);
}
