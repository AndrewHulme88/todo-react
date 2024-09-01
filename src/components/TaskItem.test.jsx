import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TaskItem } from './TaskItem';

describe('TaskItem', () => {
  it('calls onDelete when the delete button is clicked', () => {
    const onDeleteMock = jest.fn();
    const { getByText } = render(<TaskItem task={{ text: 'Task1', completed: false }} onDelete={onDeleteMock} />);

    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });

  it('calls onToggle when the checkbox is toggled', () => {
    const onToggleMock = jest.fn();
    const { getByLabelText } = render(<TaskItem task={{ text: 'Task1', completed: false }} onToggle={onToggleMock} />);

    const checkbox = getByLabelText('');
    fireEvent.click(checkbox);

    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });
});
