import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login'; // Import your Login component
import { React } from 'react';

describe('Login form submission', () => {
  it('should submit form data correctly', async () => {
    // Mock the fetch API
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Success' }),
      })
    );

    // Render the Login component
    render(<Login />);

    // Fill the form fields
    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Your Password'), {
      target: { value: 'password123' },
    });

    // Submit the form
    fireEvent.click(screen.getByText('Sign In'));

    // Assertions
    expect(fetch).toHaveBeenCalledWith('YOUR_BACKEND_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'test@example.com',
        password: 'password123',
      }),
    });

    // Add any additional assertions here, like checking for success messages, etc.
  });
});
