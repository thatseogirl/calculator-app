import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from "../../redux/store"
// import configureStore from 'redux-mock-store'

import Button from "./Button";

test("Get result when clicked", async ()=>{
   render (<Provider store={store}><Button /></Provider>)

    expect(await screen.findByText('=', { value: /=/i })).toBeEnabled();
});

// import React from 'react'
// import { render } from 'react-testing-library'

// import App from '../pages/index.js'

// import { Provider } from 'react-redux'
// import configureStore from 'redux-mock-store'



// describe('With React Testing Library', () => {
//   const initialState = {output:10}
//   const mockStore = configureStore()
//   let store,wrapper

//   it('Shows "Hello world!"', () => {
//     store = mockStore(initialState)
//     const { getByText } = render(<Provider store={store}><App /></Provider>)

//     expect(getByText('Hello Worldd!')).not.toBeNull()
//   })
// })