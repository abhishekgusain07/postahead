import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';

import RootPage from '../app/page';

describe('Root page', () => {
  it('should display the Postahead heading', () => {
    render(<RootPage />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeDefined();
    expect(heading.textContent).toBe('Postahead');
  });
});
