import topReducer, {changeActivePage, setHeader, isLoading} from "./topReducer";


let initialState = {
    films: [],
    header: '250 лучших фильмов',
    type: 'TOP_250_BEST_FILMS',
    pagesCount: 1,
    activePage: 1,
    isLoading: false
    }

it('pageCount should be changed', () => {
    let action = changeActivePage(2)
    let newState = topReducer(initialState, action)
    expect(newState.activePage).toBe(2)
    }
)

it('header should be changed', () => {
    let action = setHeader('TOP_100_POPULAR_FILMS')
    let newState = topReducer(initialState, action)
    expect(newState.header).toBe('100 популярных фильмов')
    }
)
it('header should be immutable', () => {
    let action = setHeader('fgh')
    let newState = topReducer(initialState, action)
    expect(newState.header).toBe(newState.header)
    }
)
it('isLoading should be changed', () => {
    let action = isLoading(true)
    let newState = topReducer(initialState, action)
    expect(newState.isLoading).toBe(true)
    }
)