import { compose, withPropsOnChange } from 'recompose';
import { withRouter } from 'react-router';
import querystring from 'query-string';

export default compose(
	withRouter,
	withPropsOnChange(['location'], ({ location }) => {
		const queryParams = querystring.parse(location.search);
		const hashQueryParams = querystring.parse(location.hash);

		return {
			queryParams,
			hashQueryParams,
		};
	}),
);
