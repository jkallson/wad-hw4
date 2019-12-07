import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('emptyListTest', () => {
    // Now mount the component and you have the wrapper
    const testData = [
        {id: 1,
            title: 'Foo',
            done: true
        }, {
            id: 2,
            title: 'Bar',
            done: true
        }, {
            id: 3,
            title: 'Foobar',
            done: false
        }]

    const emptyWrapper = mount(List)
    const wrapper = mount(List, {
        propsData: {
            list: testData
        }
    })

    it('list contains something', () => {
        expect(emptyWrapper.html()).toContain("Add your first Todo task")
    })


    it('list contains something', () => {
        expect(wrapper.html()).not.toContain("Add your first Todo task")
    })

});