import { makeSchema, queryType } from '@nexus/schema';

const Query = queryType({
  definition(t) {
    t.string('name', { resolve: () => 'Igor Ribeiro' });
  },
});

const types = { Query };

export const schema = makeSchema({
  types,
});
