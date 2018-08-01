import { withProps } from 'recompose';
import formatPossiblyNamedLocation from 'utils/formatPossiblyNamedLocation';

const withLink = withProps(({ to }) => {
	return { to: formatPossiblyNamedLocation(to) };
});

export default withLink;
