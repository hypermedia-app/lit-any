import './ags-field.html!'

@component('ags-field')
class AgsField extends polymer.Base {

    @property({ value: null })
    'property':String;

    @property()
    range:String;

    @computed()
    isReady(property) {
        return property != null;
    }
}

AgsField.register();