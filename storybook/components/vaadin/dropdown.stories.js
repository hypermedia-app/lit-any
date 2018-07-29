import iso from 'iso-639-1';
import { storiesOf } from '@storybook/polymer/dist/client/index';
import { boolean, select } from '@storybook/addon-knobs';

import { dropdown } from '@lit-any/components-vaadin';
import '../../../bower_components/vaadin-lumo-styles/style.html';
import '../../../bower_components/vaadin-dropdown-menu/vaadin-dropdown-menu.html';
import docs from '../../notes/components/vaadin/dropdown';
import set from '../set-logger';

storiesOf('lit-form/component sets/Vaadin', module)
    .add('dropdown', () => {
        const staticItems = dropdown({
            items: [
                { label: 'English', value: 'en' },
                { label: 'German', value: 'de' },
                { label: 'French', value: 'fr' },
                { label: 'Polish', value: 'pl' },
            ],
            required: boolean('required', false),
        });

        const dynamicItems = dropdown({
            items: f => f.languages.map(l => ({
                value: l,
                label: iso.getNativeName(l),
            })),
        });

        const field = {
            title: 'Select language',
            languages: ['en', 'de', 'fr', 'pl'],
        };

        const initialValue = select('initial value', field.languages, 'de');

        return docs(
            staticItems(field, 'id', initialValue, set),
            dynamicItems(field, 'id', initialValue, set),
        );
    });
