import { render } from 'lit-html'
import { fixture } from '@open-wc/testing'

export default async function (componentFactory, field, id = 'id', value = '', setter = () => {}) {
    const container = await fixture('<div></div>')

    render(await componentFactory(field, id, value, setter), container)

    return container.children[0]
}
