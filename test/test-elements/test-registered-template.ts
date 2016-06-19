import {RegisteredTemplate} from '../../src/template-registry.ts';

@component('test-registered-template')
@extend('template')
@behavior(RegisteredTemplate)
class TestRegisteredTemplate extends polymer.Base {
    
}

TestRegisteredTemplate.register();