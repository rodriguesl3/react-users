import React from 'react';
import { shallow } from 'enzyme';
import User from '../User';

describe('Link', () => {
  it('Renders User', () => {
    const userMock = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    };

    const userComponent = shallow(<User user={userMock} />);
    expect(userComponent).toMatchSnapshot();
  });

  //TODO: app
  it('Renders User Not Found', () => {
    const userComponent = shallow(<User />);
    const expectResponse = 'User Not Found';
    const text = userComponent.text();
    console.log(text);
    expect(expectResponse).toEqual(text);
    expect(userComponent).toMatchSnapshot();
  });
});
