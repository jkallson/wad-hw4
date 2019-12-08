import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('itemMarkedAsDoneTest', () => {

    const testData = [
        {   id: 1,
            title: 'Foo',
            done: false
        }, {
            id: 2,
            title: 'Bar',
            done: false
        }, {
            id: 3,
            title: 'Foobar',
            done: true
        }];

    const wrapper = mount(List, {
        propsData: {
            list: testData
        },

    });

    it('item is marked as done', () => {
        wrapper.find('.list-item:first-of-type span').trigger('click');
        expect(wrapper.props().list[0].done).toBe(true);
    });

    it('item in the middle of the list is marked as done', () => {
        wrapper.find('.list-item:nth-of-type(2) span').trigger('click');
        expect(wrapper.props().list[1].done).toBe(true);
    });

    it('marking all items as done', () => {
        // Clicking all done items to not done
        wrapper.find('.list-item:nth-of-type(1) span').trigger('click');
        wrapper.find('.list-item:nth-of-type(2) span').trigger('click');
        wrapper.find('.list-item:nth-of-type(3) span').trigger('click');

        wrapper.find('.list-item:nth-of-type(1) span').trigger('click');
        wrapper.find('.list-item:nth-of-type(2) span').trigger('click');
        wrapper.find('.list-item:nth-of-type(3) span').trigger('click');

        for (let i = 0; i < wrapper.props().list.length; i++) {
            expect(wrapper.props().list[i].done).toBe(true)
        }
    })
});
