const { Keystone } = require('@keystonejs/keystone');
const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'my-app';
const adapterConfig = { mongoUri: 'mongodb+srv://root:Password1998@cluster0.vuqwb.mongodb.net/test-db?authSource=admin&replicaSet=atlas-hhvw1a-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true' };


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret="25984981684"
});

keystone.createList('Todo', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'This is the thing you need to do' },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: '/', src: 'public' }),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),
  ],
};
