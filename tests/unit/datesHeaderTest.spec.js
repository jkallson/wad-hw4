// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header)
    let today = new Date();
    // Check that this component properly displays today's date

    it('renders the correct date', () => {
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    })

    it('renders the correct year', () => {
        let date = today.getFullYear();;
        expect(wrapper.html()).toContain(date)
    })

    it('renders the correct month', () => {
        var month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
        var currentMonth = month[today.getMonth()];
        expect(wrapper.html()).toContain(currentMonth)
    })

    it('renders the correct week day', () => {
        var weekdayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let weekDay = weekdayArray[today.getDay()].toUpperCase();
        expect(wrapper.html()).toContain(weekDay)
    })
});