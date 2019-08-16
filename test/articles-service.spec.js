const ArticlesService = require('../src/articles-service');
const knex = require('knex');

describe(`Articles service object`, () => {
    let db;
    let testArticles = [{
        id: 1,
        date_published: new Date('1919-12-22T16:28:32.615Z'),
        title: 'First test post!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
    },
    {
        id: 2,
        date_published: new Date('1919-12-22T16:28:32.615Z'),
        title: 'Second test post!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
    },
    {
        id: 3,
        date_published: new Date('1919-12-22T16:28:32.615Z'),
        title: 'Third test post!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
    }
    ]
    before(() => (
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        })
    ));

    before(() => {
        return db
            .into('blogful_articles')
            .insert(testArticles)
    })

    before(() => db('blogful_articles').truncate());

    after(() => db.destroy());

    describe(`getAllArticles()`, () => {
        it(`resolves all articles from 'blogful_articles' table`, () => {
            return ArticlesService.getAllArticles(db)
                .then(actual => {
                    expect(actual).to.eql(testArticles);
                })
        })
    })
});