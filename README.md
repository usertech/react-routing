> Work in Progress

# `react-routing`

    $ yarn install --pure-lockfile
    $ `node generate-install-peers-command.js`
    $ yarn build
    $ cd examples
    $ yarn install --pure-lockfile
    $ yarn start

## API

### Enhanced React Router `to` structure.

All `@usertech/react-routing` APIs work with enhanced `to` format.
In addition to default `to` properties, you can pass these for convenience:

- `name` - path prop value of a Route to link to.
- `params` - path params values
- `query` - query params values
- `hashQuery` - hash query params values

### `withQueryParams` HOC

Parses query params from `location.search` and `location.hash`.

```javascript
import { withQueryParams } from '@usertech/react-routing';

const Screen = withQueryParams(({ queryParams, hashQueryParams }) => {
    console.log(queryParams, hashQueryParams);
    return null;
})
```

### `withNavigation` HOC

Provides imperative navigation api - the `navigate` function supporting route `name`.

```javascript
import { withNavigation } from '@usertech/react-routing';

const Screen = withNavigation(({ navigate }) => {})
```
#### `navigate` function signature
```javascript
navigate: (to, replace: boolean) => void
```

### `withLink` HOC

Wraps `react-router` `Link` to support named routes.

```javascript
import { Link as ReactRouterLink } from 'react-router';
import { withLink } from '@usertech/react-routing';

const Link = withLink(ReactRouterLink);
```

## Referring to routes by name

This library uses `react-router-named-routes` to generate paths from path templates and parameters.

```javascript

// in your paths.js file
const ID_PATH_ARTICLE_DETAIL = '/articles/:articleId';

// render Route
<Route path={ID_PATH_ARTICLE_DETAIL} component={SomeScreen} />

// Render link to named route
import { Link as ReactRouterLink } from 'react-router';
import { withLink } from '@usertech/react-routing';

const Link = withLink(ReactRouterLink);

<Link to={{ name: ID_PATH_ARTICLE_DETAIL, params: { articleId: 1 } }} >Article 1 detail</Link>

```

## Partial routing

Link/navigate APIs support partial routing. You don't have to generate entire `to` just to change a query param,
just do:

```javascript
// withLink enhanced link
<Link to={{ query: { q: 'foo' } }}>Set q query param to foo</Link>

// navigate function obtained from withNavigation
navigate({ hashQuery: { q: 'foo' } });
```
