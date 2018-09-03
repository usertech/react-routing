import { withPropsOnChange } from 'recompose';
import formatPossiblyNamedLocation from 'utils/formatPossiblyNamedLocation';

const withLink = withPropsOnChange(['to'], ({ to }) => {
	return { to: formatPossiblyNamedLocation(to) };
});

export default withLink;
