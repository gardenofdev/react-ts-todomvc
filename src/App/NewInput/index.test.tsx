import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { wrapWithRecoilRoot } from '../../testUtils'

import NewInput from './'

describe('NewInput', () => {
  test('should render <NewInput/> correctly', async () => {
    render(wrapWithRecoilRoot(<NewInput />))
    const input = screen.getByTestId('new-todo-input-text') as HTMLInputElement

    screen.getByText('todos')
    screen.getByPlaceholderText('What needs to be done?')

    await userEvent.type(input, 'something to do')
    expect(input.value).toBe('something to do')

    await userEvent.keyboard('[enter]')
    expect(input.value).toBe('')
  })
})
