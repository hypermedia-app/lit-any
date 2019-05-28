import { expect } from '@open-wc/testing'
import * as components from '..'
import render from './helper/render'

describe('paper-elements', () => {
    let opts

    describe('textbox', () => {
        describe('single line', () => {
            before(async () => {
                await import('@polymer/paper-input/paper-input')
            })

            beforeEach(() => {
                opts = {
                    type: 'single line',
                }
            })

            it('should mark required when field is required', async () => {
                // given
                const field = {
                    required: true,
                }

                // when
                const textbox = components.textbox(opts)
                const el = await render(textbox, field)

                // then
                expect(el.getAttribute('required')).to.be.not.null
            })

            it('should render a text textbox', async () => {
                // given
                const field = {
                }

                // when
                const textbox = components.textbox(opts)
                const el = await render(textbox, field)

                // then
                expect(el.tagName).to.match(/paper-input/i)
                expect(el.getAttribute('type')).to.equal('text')
            })

            it('should set field title as label', async () => {
                // given
                const field = {
                    title: 'user name',
                }

                // when
                const textbox = components.textbox(opts)
                const el = await render(textbox, field)

                // then
                expect(el).dom.to.equalSnapshot()
            })

            it('should be [auto-validate]', async () => {
                // given
                const field = {
                    title: 'user name',
                }

                // when
                const textbox = components.textbox(opts)
                const el = await render(textbox, field)

                // then
                expect(el.autoValidate).to.be.true
            })

            it('should not set invalid initially when setting null value', async () => {
                // given
                const field = {
                    title: 'user name',
                    required: true,
                }

                // when
                const textbox = components.textbox(opts)
                const el = await render(textbox, field, 'id', null)

                // then
                expect(el.invalid).to.be.false
            })
        })

        describe('multi line', () => {
            before(async () => {
                await import('@polymer/paper-input/paper-textarea')
            })

            beforeEach(() => {
                opts = {
                    type: 'multi line',
                }
            })

            it('should render a textarea', async () => {
                // given
                const field = {
                }

                // when
                const textbox = components.textbox(opts)
                const el = await render(textbox, field)

                // then
                expect(el.tagName).to.match(/paper-textarea/i)
            })

            it('should be [auto-validate]', async () => {
                // given
                const field = {
                    title: 'user name',
                }

                // when
                const textbox = components.textbox(opts)
                const el = await render(textbox, field)

                // then
                expect(el.autoValidate).to.be.true
            })

            it('should be required if field is required', async () => {
                // given
                const field = {
                    title: 'user name',
                    required: true,
                }

                // when
                const textbox = components.textbox(opts)
                const el = await render(textbox, field)

                // then
                expect(el.required).to.be.true
            })

            it('should not set invalid initially when setting null value', async () => {
                // given
                const field = {
                    title: 'user name',
                    required: true,
                }

                // when
                const textbox = components.textbox(opts)
                const el = await render(textbox, field, 'id', null)

                // then
                expect(el.invalid).to.be.false
            })
        })
    })
})
