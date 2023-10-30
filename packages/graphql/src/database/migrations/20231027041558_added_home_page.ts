import { Knex } from 'knex';
import crypto from 'node:crypto';

import {
  ContentBlocksTableModel,
  ContentBlockPlainTextTableModel,
  PagesTableModel,
  TemplatesTableModel,
  PagesMetaTableModel,
} from 'webpages';

export async function up(knex: Knex): Promise<void> {
  const templateHomePage: TemplatesTableModel = {
    id: crypto.randomUUID(),
    name: 'TemplateHomePage',
    displayName: 'Шаблон главной страницы',
  };

  const mainPage: PagesTableModel = {
    id: crypto.randomUUID(),
    pid: null,
    path: '/',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    template: templateHomePage.id || '<unknown-id>',
    name: 'Главная страница',
    order: 0,
    statusCode: 200,
  };

  //   const contentBlocks: ContentBlocksTableModel[] = [];
  //   const contentBlockPlainText: ContentBlockPlainTextTableModel[] = [];

  //   blocks.forEach(block => {
  //     const id = crypto.randomUUID();
  //     contentBlocks.push({
  //       id,
  //       createdAt: new Date().toISOString(),
  //       updatedAt: new Date().toISOString(),
  //       type: 'PLAIN_TEXT',
  //       page: mainPage.id,
  //       name: block.name,
  //       template: templateHomePage.id,
  //     });

  //     contentBlockPlainText.push({
  //       id,
  //       text: block.text,
  //     });
  //   });

  const pagesMeta: PagesMetaTableModel[] = [
    {
      page: mainPage.id,
      title: 'Home page title with unicode ✓',
      description: 'Home page ©',
      locale: 'ru-RU',
      keywords: null,
    },
  ];

  await knex('templates').insert(templateHomePage);
  await knex('pagesList').insert(mainPage);
  //   await knex('contentBlocks').insert(contentBlocks);
  //   await knex('contentBlockPlainText').insert(contentBlockPlainText);
  await knex('pagesMeta').insert(pagesMeta);
}

export async function down(knex: Knex): Promise<void> {
  // await knex('pagesMeta').del();
  await knex('files').del();
  await knex('contentBlocks').del();
  // await knex('contentBlockPlainText').del();
  // await knex('contentBlockImage').del();
  await knex('pagesList').del();
  await knex('templates').del();
}
