import { render } from '@testing-library/react'
import ErrorModal from './index';

test('<ErrorModal /> should render error modal', () => {
    const screen = render(<ErrorModal error={'test'}/>)
    expect(screen.getByText(`Oups! Somethig gone wrong... don't panic tho.`)).toBeInTheDocument()
    expect(screen.getByText(`It seems like we got: test. It's a free API plan, go easy with it.`)).toBeInTheDocument()
})