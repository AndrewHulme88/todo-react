import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { TaskForm } from './TaskForm';

describe('TaskForm', () => {
  it('calls the onAdd function when the form is submitted with valid input', () => {
    const onAddMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(<TaskForm onAdd={onAddMock} />);

    const input = getByPlaceholderText('Add a task...');
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.submit(input.form);

    expect(onAddMock).toHaveBeenCalledTimes(1);
    expect(onAddMock).toHaveBeenCalledWith('New Task');
  });

  it('does not call onAdd when the form is submitted with empty input', () => {
    const onAddMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(<TaskForm onAdd={onAddMock} />);

    const input = getByPlaceholderText('Add a task...');
    fireEvent.submit(input.form);

    expect(onAddMock).toHaveBeenCalledTimes(0);
  });
});
