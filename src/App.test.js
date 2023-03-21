import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App';

describe('Testing Task Functions', () => {
  test('Insert Default Task', async () => {
    act(() => {
      render(<App />);
    });

    const inputTask = screen.getByTestId('input-fast-task');
    const sendTask = screen.getByTestId('footer-send-task') 

    fireEvent.change(inputTask, { target: { value: 'clean the floor' } });
    fireEvent.click(sendTask)

    const taskTitle = screen.getByTestId('task-title-1');
    expect(taskTitle).toHaveTextContent('clean the floor')
  });
})

