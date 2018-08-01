import { formatRoute } from 'react-router-named-routes';
import querystring from 'query-string';

const formatPossiblyNamedLocation = (location) => {
	if (typeof location === 'string') {
		return location;
	}
	const { name, params, query = {}, hashQuery = {} } = location;
	// query string
	let finalQuery = query;
	if (!name) {
		finalQuery = {
			...querystring.parse(window.location.search),
			...finalQuery,
		};
	}
	let queryString = querystring.stringify(finalQuery);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	// hash query string
	let finalHashQuery = hashQuery;
	if (!name) {
		finalHashQuery = {
			...querystring.parse(window.location.hash),
			...finalHashQuery,
		};
	}
	let hashQueryString = querystring.stringify(finalHashQuery);
	if (hashQueryString) {
		hashQueryString = `#${hashQueryString}`;
	}
	const path = name ? formatRoute(name, params) : window.location.pathname;
	return `${path}${queryString}${hashQueryString}`;
};

export default formatPossiblyNamedLocation;
