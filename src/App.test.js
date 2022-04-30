import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Paragragh contains how are you',()=>{
  render(<App />);
  const pel=screen.getByText('How are you');
  expect(pel).toBeInTheDocument();
})

