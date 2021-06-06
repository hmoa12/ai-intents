import { render, screen } from '@testing-library/react';
import PageOverview from '../src/components/PageOverview';
import Intents from '../src/components/Intents';

/* todo - Some of the very basic test cases has been written below. More test cases will be written later on */
test('PageOverview: renders Pre trained Intents text', () => {
  render(<PageOverview />);
  const pageHeading = screen.getByText(/Pre trained Intents/i);
  expect(pageHeading).toBeInTheDocument();
});

test('PageOverview: Bot image is present in document', () => {
  render(<PageOverview />);
  const botImage = screen.getByAltText('bot');
  expect(botImage).toBeInTheDocument();
});

test('Intents: Select All button is Material UI button', () => {
  render(<Intents />);
  const selectAllButton = screen.getByText('Select All');
  expect(selectAllButton.classList.contains('MuiButton-label')).toBe(true);
});

test('Intents: General Intents is Typography h5 variant', () => {
  render(<Intents />);
  const generalIntentEle = screen.getByText('General Intents');
  expect(generalIntentEle.classList.contains('MuiTypography-h5')).toBe(true);
});

test('Intents: Common Intents for users is Typography subtitle1 variant', () => {
  render(<Intents />);
  const commonIntentEle = screen.getByText('Common Intents for users');
  expect(commonIntentEle.classList.contains('MuiTypography-subtitle1')).toBe(true);
});