export const LOAD_DATA = 'LOAD_DATA';

/**
 * storeProducts action for load product data
 * @param  {error}  err      Error from fetch request
 * @param  {Object} products product data data
 * @return {Object}          redux standard action
 */
function storeProducts (err, products) {
    return {
        type: LOAD_DATA,
        payload: err || products,
        error: !!err
    };
}

/**
 * loadProducts Load Product Data JSON
 * @return {Promise} Promise chain of fetch then dispatch
 */
export function loadData () {
    return (dispatch) => {
        return fetch('./data/bookings_data.json')
            .then(response => response.json())
            .then((json) => {
                const products = json;
                dispatch(storeProducts(null, products));
            })
            .catch(() => {
                dispatch(storeProducts(null, [{ id: 1, name: 'Timewalker' }]));
            });
    };
}
