import SearchBox from ".";
import { render, screen } from '@testing-library/react';

test('testing search button', () => {
    render(<SearchBox />);
    const buttonElement =  screen.getByRole('button', {
      name: /search/i
    })
    expect(buttonElement).toBeInTheDocument();
  });
  