// Import the mount() method from the test utils
// and the component you want to test

import {mount, shallowMount} from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";


describe('Click event', () => {
    it('Click on + button', () => {
        const wrapper = mount(Footer);
        wrapper.find('span.plusButton').trigger('click');
        expect(wrapper.vm.open).toBe(true);
    });
});