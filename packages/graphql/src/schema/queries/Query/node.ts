import { Context, NodeInterfaceType } from '@via-profit-services/core';
import { GraphQLFieldConfig, GraphQLNonNull, GraphQLID } from 'graphql';

type Args = {
  readonly id: string;
};

const node: GraphQLFieldConfig<unknown, Context, Args> = {
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  type: NodeInterfaceType,
  description: 'GraphQL node spec',
  resolve: async (_parent, args, context) => {
    const { id } = args;
    const { dataloader, knex } = context;

    /**
     * Block
     */
    if (id.match(/:block:/)) {
      const nodeID = id.split(':').reverse()[0];
      const node = await dataloader.contentBlocks.load(nodeID);

      return {
        __typename: 'Block',
        ...node,
      };
    }

    const row = await knex
      .select<any, { type: string }>(['type'])
      .from('nodes')
      .where({ id })
      .first();

    if (!row) {
      return null;
    }

    const typeName = row.type;
    let node = null;

    switch (typeName) {
      case 'User':
        node = await context.dataloader.users.load(id);
        break;

      case 'Account':
        node = await context.dataloader.accounts.load(id);
        break;

      case 'File':
        node = await context.dataloader.files.load(id);
        break;

      case 'Page':
        node = await context.dataloader.webpages.load(id);
        break;

      case 'ContentBlockPlainText':
      case 'ContentBlockImage':
      case 'ContentBlockLexical':
        node = await context.dataloader.contentBlocks.load(id);
        break;

      case 'Notification':
        node = await context.dataloader.notifications.load(id);
        break;

      default:
        node = null;
        break;
    }

    if (!node) {
      return null;
    }

    return {
      __typename: typeName,
      ...node,
    };
  },
};

export default node;
