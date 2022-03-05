import CardGrid from "../src/domain/grid/CardGrid";
import { render, screen } from '@testing-library/react'

describe('Test card grid', () => {
    test('Renders grid', () => {
        const { container } = render(<CardGrid />)
        expect(container).toMatchSnapshot()
    })

    test('Rendered 9 cards', () => {
        render(<CardGrid />)
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBe(9)
    })
})