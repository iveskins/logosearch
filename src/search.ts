//import * as fs from 'fs';
import * as KoaRouter from 'koa-router';
import * as lunr from 'lunr';
//import * as path from 'path';
import * as Pino from 'pino';

import * as sources from './sources';



let searchData: sources.ImageInfo[] = [];
let searchIndex: lunr.Index;

function init(logger:Pino.Logger) {

    for (const sourceData of sources.getSources()) {
        searchData = searchData.concat(sourceData.images);
    }

    searchIndex = new lunr.Index;

    searchIndex.ref('index');
    searchIndex.field('name');

    for (let loop = 0; loop < searchData.length; loop++) {
        searchIndex.add({index: loop, name: searchData[loop].name});
    }
    logger.info({ imageCount: searchData.length }, "Images indexed");
}

function getImageCount(): number {
    return searchData.length;
}
/*
function getSearchData (id:string): RepoData {
    const repoData: RepoData = JSON.parse(fs.readFileSync(path.join(baseDir, id + ".json"), 'utf8'));

    repoData.images.sort((left:ImageInfo, right:ImageInfo):number => {
        if (left.name < right.name) { return -1; }
        if (left.name > right.name) { return 1; }
        return 0;
    });

    return repoData;
}
*/
const router = new KoaRouter();

router.get('/api/', async (ctx) => {
    ctx.redirect('search.json');
});

router.get('/api/search.json', async (ctx) => {

    let query = ctx.query['q'];
    if (!query) {
        ctx.body = { success: false, message: 'Missing "q" parameter' };
        return;
    }

    try {
        let raw = searchIndex.search(query);
        /*if (raw.length == 0 && query.indexOf('*') == -1) {      //LATER: tweak lunr so this isn't necessary
            query = query + '*';
            raw = searchIndex.search(query);
        }*/
        const cooked:sources.ImageInfo[] = [];
        for (const result of raw) {
            cooked.push(searchData[Number(result.ref)]);
        }
        ctx.body = {success: true, query, raw: raw, results: cooked };
    } catch (err) {
        ctx.body = {success: false, message: 'Not ready yet!', err};
    }
});

export { getImageCount, init, router };