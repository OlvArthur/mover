export function SearchRequest(query) {
  return {
    type: '@search/SEARCH_REQUEST',
    payload: { query },
  };
}

export function SearchSucess(products) {
  return {
    type: '@search/SEARCH_SUCESS',
    payload: { products },
  };
}
