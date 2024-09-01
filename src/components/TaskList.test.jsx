import React from 'react';
import { render, within } from '@testing-library/react';
import { TaskList } from './TaskList';

describe('TaskList', () => {
  it('renders tasks correctly', () => {
    const tasks = [
      { text: 'Task1', completed: false },
      { text: 'Task2', completed: true }
    ];
    const { getAllByRole } = render(<TaskList tasks={tasks} onDelete={jest.fn()} onToggle={jest.fn()} />);

    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });
});
