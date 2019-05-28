import TemplateRegistry from '.'

type Constructor = new (...args: any[]) => TemplateRegistry;

export default function (Registry: Constructor, map, Builder, name) {
    if (!map[name]) {
        // eslint-disable-next-line no-param-reassign
        map[name] = new Registry(Builder, name || 'default')
    }

    return map[name]
}
