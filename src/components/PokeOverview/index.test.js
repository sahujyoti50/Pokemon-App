import { render, screen } from '@testing-library/react';
import PokeOverview from ".";
test('testing array', () => {
    render(<PokeOverview />);
    const linkElement = screen.getByRole('button', {
      name: /previous/i
    })
    expect(linkElement).toBeDisabled();
  });