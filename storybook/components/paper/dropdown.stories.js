import iso from 'iso-639-1';
import { storiesOf } from '@storybook/polymer/dist/client/index';
import '@bower_components/paper-dropdown-menu/paper-dropdown-menu.html';
import '@bower_components/paper-listbox/paper-listbox.html';
import '@bower_components/paper-item/paper-item.html';

import { dropdown } from '../../../components/paper-elements';
import docs from '../../notes/components/polymer-elements/dropdown';
import set from '../set-logger';

storiesOf('lit-form/component sets/Paper elements', module)
    .add('dropdown', () => {
        const staticItems = dropdown({
            items: [
                { label: 'English', value: 'en' },
                { label: 'German', value: 'de' },
                { label: 'French', value: 'fr' },
                { label: 'Polish', value: 'pl' },
            ],
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

        return docs(
            staticItems(field, 'id', '', set),
            dynamicItems(field, 'id', '', set),
        );
    });
