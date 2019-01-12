
# SVG Logo Search [<img alt="VectorLogoZone Logo" src="https://www.vectorlogo.zone/logos/vectorlogozone/vectorlogozone-tile.svg" height="90" align="right" />](https://search.vectorlogo.zone/)

[![# of sources](https://img.shields.io/badge/dynamic/json.svg?label=sources&url=https%3A%2F%2Fsearch.vectorlogo.zone%2Fstatus.json&query=%24.sourcecount)](https://search.vectorlogo.zone/sources/index.html)
[![# of logos](https://img.shields.io/badge/dynamic/json.svg?label=logos&url=https%3A%2F%2Fsearch.vectorlogo.zone%2Fstatus.json&query=%24.imagecount)](https://search.vectorlogo.zone/)

This is the server code for [VectorLogoZone](https://www.vectorlogo.zone/)'s [SVG Logo Search](https://search.vectorlogo.zone/).

## Using

Go to [search.vectorlogo.zone](https://search.vectorlogo.zone/) and search for something!

Click on the image to go to the source.  You will need to check that license before re-using.

No hot-linking.

## Running

There are two main parts: 

 1. Various cron jobs that update the search data.  This code is in `/bin`.  Currently the only one is a git repo loader.
 2. A web server, written in TypeScript/node.js.  This code is in `/src`.

The search data is stored in the `/logos` directory.  It consists of a directory for each 
logo source, with a `search.json` and optionally a local copy of the logos.

The git cron job gets public git repos (stored in the `/cache` directory) and copies the svgs to `/logos`.

## search.json

```json
{
  "data": { "info": "provider-specific blob" },
  "handle": "id-used-for-directories-and-urls",
  "images": [ { "img": "local/path/to/company.svg", "name": "company", "src": "https://logos.example.com/path/to/company.svg" }],
  "lastmodified": "2019-01-01T13:54:59Z",
  "name":"Example",
  "provider": "id-of-provider",
  "provider_icon": "svg-icon-of-provider",
  "url": "https://logos.example.com/"
}
```

## Contributing

If you want to add a repo, please submit a [github issue](https://github.com/VectorLogoZone/vlz-search/issues/new)

Code contributions are also welcome!  Please follow the standard Github [Fork & Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962)

See the [to do list](TODO.md) for a list of things that are planned.

## License

[GNU Affero General Public License v3.0](LICENSE.txt)

## Credits

[![Bootstrap](https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg)](http://getbootstrap.com/ "HTML/CSS Framework")
[![Cloudflare](https://www.vectorlogo.zone/logos/cloudflare/cloudflare-ar21.svg)](https://www.cloudflare.com/ "CDN")
[![Digital Ocean](https://www.vectorlogo.zone/logos/digitalocean/digitalocean-ar21.svg)](https://www.digitalocean.com/ "Hosting")
[![Git](https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg)](https://git-scm.com/ "Version control")
[![Github](https://www.vectorlogo.zone/logos/github/github-ar21.svg)](https://github.com/ "Code hosting")
[![Google Analytics](https://www.vectorlogo.zone/logos/google_analytics/google_analytics-ar21.svg)](https://www.google.com/analytics "Traffic Measurement")
[![Handlebars](https://www.vectorlogo.zone/logos/handlebarsjs/handlebarsjs-ar21.svg)](http://handlebarsjs.com/ "Templating")
[![Koa](https://www.vectorlogo.zone/logos/koajs/koajs-ar21.svg)](https://koajs.com/ "Web framework")
[![lunr.js](https://www.vectorlogo.zone/logos/lunrjs/lunrjs-ar21.svg)](https://lunrjs.com/ "Full-text search")
[![Node.js](https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg)](https://nodejs.org/ "Application Server")
[![npm](https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg)](https://www.npmjs.com/ "JS Package Management")
[![pino](https://www.vectorlogo.zone/logos/getpinoio/getpinoio-ar21.svg)](https://www.getpino.io/ "Logging")
[![Python](https://www.vectorlogo.zone/logos/python/python-ar21.svg)](https://www.python.org/ "data load script")
[![TypeScript](https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg)](https://www.typescriptlang.org/ "Programming Language")

