import { storiesOf } from '@storybook/polymer';
import * as vaadin from '@lit-any/components-vaadin';
import * as paper from '@lit-any/components-paper-elements';
import { FieldTemplates } from 'lit-any';
import * as components from 'lit-any/components';
import { html } from 'lit-html/lib/lit-extended';
import { select, boolean } from '@storybook/addon-knobs';

import '../../bower_components/vaadin-lumo-styles/style.html';
import '../../bower_components/vaadin-dropdown-menu/vaadin-dropdown-menu.html';
import '../../bower_components/paper-input/paper-input.html';
import '../../bower_components/paper-input/paper-textarea.html';
import '../../bower_components/paper-dropdown-menu/paper-dropdown-menu.html';
import '../../bower_components/paper-listbox/paper-listbox.html';
import '../../bower_components/paper-item/paper-item.html';
import '../../bower_components/vaadin-text-field/vaadin-text-field.html';
import '../../bower_components/vaadin-text-field/vaadin-text-area.html';

import onSubmit from '../helpers/submit-handler';

const componentSets = { paper, vaadin };

storiesOf('lit-form/component sets', module)
    .add('getting started', () => {
        const selectedSet = select('component set', Object.keys(componentSets), 'paper');
        const templates = FieldTemplates.byName('components-complete')
            .useComponents(componentSets[selectedSet]);

        templates.when.fieldMatches(f => f.property === 'description')
            .rendersComponent(components.textbox({ type: 'multi line' }));
        templates.when.fieldMatches(f => f.type === 'string')
            .rendersComponent(components.textbox());
        templates.when.fieldMatches(f => f.type === 'language')
            .rendersComponent(components.dropdown({
                items: [
                    { value: 'en', label: 'English' },
                    { value: 'de', label: 'German' },
                    { value: 'pl', label: 'Polish' },
                ],
            }));

        const c = {
            fields: [
                {
                    property: 'name',
                    title: 'First name',
                    type: 'string',
                },
                {
                    property: 'description',
                    title: 'More about you',
                    type: 'string',
                },
                {
                    property: 'language',
                    title: 'Preferred language',
                    type: 'language',
                },
            ],
        };

        const initialValue = {
            name: 'Johann Doe',
            description: `I 
like 
line-breaks`,
            language: 'de',
        };

        return html`<lit-form template-registry="components-complete"
                              contract="${c}"
                              on-submit="${onSubmit}"
                              no-labels?="${!boolean('Show labels', false)}"
                              value="${initialValue}"></lit-form>`;
    });
