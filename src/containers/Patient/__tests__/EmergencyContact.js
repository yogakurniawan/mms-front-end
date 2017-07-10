import React from 'react';
import { shallow, mount } from 'enzyme';
import EmergencyContact from '../EmergencyContact';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SelectField from 'components/Form/SelectField';

injectTapEventPlugin();

//*******************************************************************************************************
describe('>>>EMERGENCY CONTACT --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
    // const initialState = { output: 100 }
    const mockStore = configureStore();
    let store, container;

    beforeEach(() => {
        store = mockStore();
        container = shallow(
            <MuiThemeProvider>
                <EmergencyContact isModify={false} store={store} />
            </MuiThemeProvider>
        );
    });

    it('+++ render the connected(SMART) component', () => {
        expect(container.length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
        expect(container.prop('isModify')).toEqual(false);
    });

});

//*******************************************************************************************************
describe('>>>EMERGENCY CONTACT --- REACT-REDUX (Mount + wrapping in <Provider>)', () => {
    // const initialState = { output: 10 }
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore();
        wrapper = mount(<MuiThemeProvider><Provider store={store}><EmergencyContact /></Provider></MuiThemeProvider>)
    });

    it('+++ contains header - h2', () => {
        expect(wrapper.find(SelectField).length).toEqual(5);
    });

    it('+++ render the connected(SMART) component', () => {
        expect(wrapper.find(EmergencyContact).length).toEqual(1);
    });

    // it('+++ check Prop matches with initialState', () => {
    //     expect(wrapper.find(Home).prop('output')).toEqual(initialState.output)
    // });

    // it('+++ check action on dispatching ', () => {
    //     let action
    //     store.dispatch(addInputs(500))
    //     store.dispatch(subtractInputs(100))
    //     action = store.getActions()
    //     expect(action[0].type).toBe("ADD_INPUTS")
    //     expect(action[1].type).toBe("SUBTRACT_INPUTS")
    // });

});
// //*******************************************************************************************************
// describe('>>>E M E R G E N C Y C O N T A C T --- REACT-REDUX (actual Store + reducers) more of Integration Testing', () => {
//     // const initialState = { output: 10 }
//     let store, wrapper

//     beforeEach(() => {
//         store = createStore(calculatorReducers)
//         wrapper = mount(<Provider store={store}><EmergencyContact /></Provider>)
//     })

//     it('+++ check Prop matches with initialState', () => {
//         store.dispatch(addInputs(500))
//         expect(wrapper.find(Home).prop('output')).toBe(500)
//     });

// });
// //*******************************************************************************************************