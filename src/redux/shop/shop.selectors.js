import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    // convert collections object to array
    collections => Object.keys(collections).map( c => collections[c])
)

export const selectCollection = collectionUrlParam => (
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )
)
