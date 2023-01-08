import { render, screen } from '@testing-library/react';
import App from './App';
// describe('testing poke suit',()=>{

// });
test('testing pokemon app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/pokemon app/i,{expect:true});
  expect(linkElement).toBeInTheDocument();
});


