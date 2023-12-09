import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login'; // Import your Login component

describe('Login form submission', () => {
  it('should submit form data correctly', async () => {
    // Mock the fetch API
    vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: 'Login successful' }),
    });

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
    expect(global.fetch).toHaveBeenCalledWith('api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'test@example.com',
        password: 'password123',
      }),
    });

    // Clean up mock
    global.fetch.mockRestore();
  });
});
