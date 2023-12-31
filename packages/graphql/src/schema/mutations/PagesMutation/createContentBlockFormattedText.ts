import crypto from 'node:crypto';
import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';
import { Context, JSONObjectScalarType } from '@via-profit-services/core';

import ContentBlockMutationPayload from '~/schema/unions/ContentBlockMutationPayload';

interface Args {
  readonly input: {
    readonly id?: string | null;
    readonly page?: string | null;
    readonly template?: string | null;
    readonly name: string;
    readonly lexical?: Record<string, unknown>;
  };
}

const createContentBlockFormattedText: GraphQLFieldConfig<unknown, Context, Args> = {
  type: new GraphQLNonNull(ContentBlockMutationPayload),
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: 'ContentBlockFormattedTextInputCreate',
        fields: {
          id: { type: GraphQLID },
          page: { type: GraphQLID },
          template: { type: GraphQLID },
          name: { type: new GraphQLNonNull(GraphQLString) },
          lexical: { type: new GraphQLNonNull(JSONObjectScalarType) },
        },
      }),
    },
  },
  resolve: async (_parent, args, context) => {
    const { dataloader, services, emitter } = context;
    const { input } = args;
    const { id, name, page, template, lexical } = input;

    const blockID = id || crypto.randomUUID();
    const createdAt = new Date(
      new Date().toLocaleString('en-US', {
        timeZone: 'UTC',
        timeZoneName: 'short',
      }),
    ).toISOString();

    // check content block exists
    const existed = await dataloader.contentBlocks.load(blockID);
    if (existed) {
      return {
        __typename: 'ContentBlockMutationError',
        name: 'ContentBlockAlreadyExists',
        msg: `Content Block with id ${blockID} already exists `,
      };
    }

    // Check Page exists
    if (typeof page === 'string') {
      const existedPage = await dataloader.webpages.load(page);
      if (!existedPage) {
        return {
          __typename: 'ContentBlockMutationError',
          name: 'PageDoesNotExists',
          msg: `The page with id «${page}» does not exists`,
        };
      }
    }

    try {
      await services.webpages.createContentBlockFormatedText({
        id: blockID,
        createdAt,
        updatedAt: createdAt,
        page: typeof page === 'undefined' ? null : page,
        template: typeof template === 'undefined' ? null : template,
        lexical: typeof lexical === 'string' ? lexical : JSON.stringify(lexical),
        name,
      });
    } catch (err) {
      emitter.emit('log-error', 'pages', err instanceof Error ? err.message : 'Unknown Error');

      return {
        __typename: 'ContentBlockMutationError',
        name: 'UnknownError',
        msg: 'Unknown Error',
      };
    }

    dataloader.contentBlocks.clear(blockID);
    const newBlock = await dataloader.contentBlocks.load(blockID);

    return {
      __typename: 'ContentBlockMutationSuccess',
      contentBlock: newBlock,
    };
  },
};

export default createContentBlockFormattedText;
