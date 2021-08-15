import Statement from './Statement';
import { render } from '@testing-library/react';
import React from 'react';
import { Transaction } from './Transaction.model';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

test('should render Transaction Component and check columns', () => {
  const { getByLabelText } = render(<Statement />);
  const headerRow = getByLabelText('headerRow');
  expect(headerRow).not.toBeNull();
});

test('should render datarow', async () => {
  const transactions: Transaction[] = [
    {
      Date: '2013-12-22',
      Ledger: 'Phone & Internet Expense',
      Amount: '110.71',
      Company: 'SHAW CABLESYSTEMS CALGARY AB',
    },
  ];
  const realUseState = React.useState;
  jest
    .spyOn(React, 'useState')
    .mockImplementationOnce(() => realUseState<any>(transactions));

  const wrapper = render(<Statement />);

  const dataRow = wrapper.getByLabelText('dataRow');
  expect(dataRow).not.toBeNull();
  await wrapper.findByText('$110.71');
});