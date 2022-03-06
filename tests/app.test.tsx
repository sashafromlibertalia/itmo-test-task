import CardGrid from "../src/domain/grid/CardGrid";
import { render, screen } from '@testing-library/react'
import { Provider } from "react-redux";
import { store } from "../src/infrastructure/store/store"

describe('Test card grid', () => {
    test('Renders grid', () => {
        const { container } = render(
            <Provider store={store}>
                <CardGrid />
            </Provider>
        )
        expect(container).toMatchSnapshot()
    })

    test('Rendered 9 cards', () => {
        render( <Provider store={store}>
            <CardGrid />
        </Provider>)
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBe(9)
    })
})