import { render, screen, fireEvent } from '@testing-library/react';

import App from '../App';

describe('Testing Task Functions', () => {
  test('Insert Default Task', async () => {
    render(<App />);

    const inputTask = screen.getByTestId('input-fast-task');
    const sendTask = screen.getByTestId('footer-send-task') 

    fireEvent.change(inputTask, { target: { value: 'clean the floor' } });
    fireEvent.click(sendTask)

    const taskTitle = screen.getByTestId('task-title-1');
    expect(taskTitle).toHaveTextContent('clean the floor')
  });

  test('Verify if pending tasks number is correct', async () => {
    render(<App />);

    const pendingTasksBtn = screen.getByTestId('pending-btn-and-number');
    
    expect(pendingTasksBtn).toHaveTextContent('1')
  });

  test('Test move task to completed', async () => {
    render(<App />);

    const doneTasksBtn = screen.getByTestId('done-btn-and-number');
    const moveToDoneTaskBtn = screen.getByTestId('move-to-done-task-btn');
    
    fireEvent.click(moveToDoneTaskBtn)
    fireEvent.click(doneTasksBtn)

    const taskTitle = screen.getByTestId('task-title-1');
    expect(taskTitle).toHaveTextContent('clean the floor')
  });

  test('Verify if done tasks number is correct', async () => {
    render(<App />);

    const doneTasksBtn = screen.getByTestId('done-btn-and-number');
    expect(doneTasksBtn).toHaveTextContent('1')
  });

  test('Test move task to pending', async () => {
    render(<App />);

    const doneTasksBtn = screen.getByTestId('done-btn-and-number');
    const pendingTasksBtn = screen.getByTestId('pending-btn-and-number');

    fireEvent.click(doneTasksBtn)

    const moveToPendingTaskBtn = screen.getByTestId('move-to-pending-task-btn');

    fireEvent.click(moveToPendingTaskBtn)
    fireEvent.click(pendingTasksBtn)

    const taskTitle = screen.getByTestId('task-title-1');
    expect(taskTitle).toHaveTextContent('clean the floor')
   
    expect(doneTasksBtn).toHaveTextContent('0')
  });
  

  test('Delete Task', async () => {
    render(<App />);

    const doneTasksBtn = screen.getByTestId('done-btn-and-number');
    const pendingTasksBtn = screen.getByTestId('pending-btn-and-number');

    const removeTaskBtn = screen.getByTestId('remove-task-btn');
    fireEvent.click(removeTaskBtn)

    expect(doneTasksBtn).toHaveTextContent('0')
    expect(pendingTasksBtn).toHaveTextContent('0')

  });
})

