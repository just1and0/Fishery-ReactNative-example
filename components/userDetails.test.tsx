import React from "react";
import { render, RenderAPI } from "react-native-testing-library";

import UserDetails from "./userDetails";
import userFactory from "../factories/user";

describe('Test user detail component // without Fishery', () => {
 
  test('Displays users full name', () => {
    let c: RenderAPI;

    const UserDetailsProps = {
      firstName: 'Tobi',
      lastName: 'Shokunbi'
    }

    const fullName = `${UserDetailsProps.firstName} ${UserDetailsProps.lastName}`

    c = render(
      <UserDetails
      lastName={UserDetailsProps.lastName}
      firstName={UserDetailsProps.firstName}
    />)
    expect(c.getByTestId('test')).toHaveTextContent(fullName);
  })
});





describe('Test user detail component // Using Fishery', () => {
 
  test('Displays users full name', () => {
    let c: RenderAPI;

    const UserDetailsProps =  userFactory.build({
      firstName:'Tobi',
      lastName: 'Shokunbi'
    })

    const fullName = `${UserDetailsProps.firstName} ${UserDetailsProps.lastName}`

    c = render(
      <UserDetails
      lastName={UserDetailsProps.lastName}
      firstName={UserDetailsProps.firstName}
    />)
    expect(c.getByTestId('test')).toHaveTextContent(fullName);
  })
});