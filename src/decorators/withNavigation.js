import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router';

import formatPossiblyNamedLocation from 'utils/formatPossiblyNamedLocation';

const withNavigation = compose(
	withRouter,
	withHandlers({
		navigate: ({
			history: {
				push: doPush,
				replace: doReplace,
				location: { pathname, search },
			},
		}) => (to, replace = false) => {
			const targetLoaction = formatPossiblyNamedLocation(to);
			if (`${pathname}${search}` !== targetLoaction) {
				(replace ? doReplace : doPush)(targetLoaction);
			}
		},
	}),
);

export default withNavigation;
