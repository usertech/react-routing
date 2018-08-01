import React, { Fragment } from 'react';
import { compose, pure, withHandlers } from 'recompose';
import { BrowserRouter as Router, Switch, Route, withRouter, matchPath } from 'react-router-dom';
import { withQueryParams, withNavigation } from 'react-routing';

import Link from 'components/Link';
import { ID_ROUTE_ROOT, ID_ROUTE_DASHBOARD, ID_ROUTE_DASHBOARD_SECTION } from './paths';

const Screen = compose(
	withRouter,
	withQueryParams,
	withNavigation,
	withHandlers({
		goToOther: ({ navigate, location: { pathname } }) => () => {
			const match = matchPath(pathname, { path: ID_ROUTE_ROOT, exact: true });
			navigate({
				name: match ? ID_ROUTE_DASHBOARD : ID_ROUTE_ROOT,
			});
		},
	}),
)(({ name, goToOther, queryParams, hashQueryParams, match: { params } }) => (
	<div>
		<div>{name}</div>
		<ul>
			<li>
				<Link to={{ name: ID_ROUTE_ROOT }}>root</Link>
			</li>
			<li>
				<Link to={{ name: ID_ROUTE_DASHBOARD }}>dashboard</Link>
			</li>
			<li>
				<Link to={{ name: ID_ROUTE_DASHBOARD_SECTION, params: { sectionNumber: 1 } }}>
					dashboard 1
				</Link>
			</li>
			<li>
				<Link to={{ query: { foo: 'bar' }, hashQuery: { bay: 'baz' } }}>?foo=bar#bay=baz</Link>
			</li>
			<li>
				<button onClick={goToOther}>got to the other page</button>
			</li>
		</ul>

		<div>
			<strong>path params</strong>
		</div>
		<pre>{JSON.stringify(params, null, 2)}</pre>
		<div>
			<strong>queryParams</strong>
		</div>
		<pre>{JSON.stringify(queryParams, null, 2)}</pre>
		<div>
			<strong>hashQueryParams</strong>
		</div>
		<pre>{JSON.stringify(hashQueryParams, null, 2)}</pre>
	</div>
));

const withApp = compose(pure);

const renderApp = () => {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path={ID_ROUTE_ROOT} component={() => <Screen name="root" />} />
					<Route exact path={ID_ROUTE_DASHBOARD} component={() => <Screen name="dashboard" />} />
					<Route
						exact
						path={ID_ROUTE_DASHBOARD_SECTION}
						component={() => <Screen name="dashboard-section" />}
					/>
				</Switch>
			</Fragment>
		</Router>
	);
};

const App = withApp(renderApp);

export default App;
