import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'

describe('NotFound', () => {
  test('should render Page Not Found message', () => {
    render(<NotFound />)
    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
  })
})
