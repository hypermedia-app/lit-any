import {AgsViewTemplate} from '../../dist/behaviors/view-template-registry.ts';
import {AgsFormTemplate} from '../../src/form-template-registry.ts';

@component('test-view-template')
@extend('template')
@behavior(AgsViewTemplate)
class TestViewTemplate extends polymer.Base {

}

@component('test-form-template')
@extend('template')
@behavior(AgsFormTemplate)
class TestFormTemplate extends polymer.Base {

}

TestViewTemplate.register();
TestFormTemplate.register();