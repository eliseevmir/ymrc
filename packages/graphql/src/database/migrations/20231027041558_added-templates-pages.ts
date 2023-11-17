import { Knex } from 'knex';
import crypto from 'crypto';

import { PagesTableModel, PagesMetaTableModel, TemplateName, Template } from 'webpages';

export async function up(knex: Knex): Promise<void> {
  const templates: Template[] = [
    {
      id: crypto.randomUUID(),
      name: 'TemplateHomePage',
      displayName: 'Шаблон главной страницы',
    },
    {
      id: crypto.randomUUID(),
      name: 'TemplateSecondPage',
      displayName: 'Шаблон вторичной страницы',
    },
    {
      id: crypto.randomUUID(),
      name: 'TemplateConferencePage',
      displayName: 'Шаблон конференции',
    },
    {
      id: crypto.randomUUID(),
      name: 'TemplateFallbackPage',
      displayName: 'Шаблон 404',
    },
  ];

  const getTemplateIDByTemplateName = (tplName: TemplateName): string => {
    const founded = templates.find(t => t.name === tplName);

    return typeof founded !== 'undefined' ? founded.id : templates[0].id;
  };

  const pages: PagesTableModel[] = [
    {
      id: crypto.randomUUID(),
      pid: null,
      path: '/',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      template: getTemplateIDByTemplateName('TemplateHomePage'),
      name: 'Главная страница',
      order: 0,
      statusCode: 200,
    },

    {
      id: crypto.randomUUID(),
      pid: null,
      path: '/about',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      name: 'О центре',
      order: 0,
      statusCode: 200,
    },
    {
      id: crypto.randomUUID(),
      pid: null,
      path: '/activity',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      name: 'Деятельность',
      order: 0,
      statusCode: 200,
    },
    {
      id: crypto.randomUUID(),
      pid: null,
      path: '/conferences',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      template: getTemplateIDByTemplateName('TemplateConferencePage'),
      name: 'Конференции',
      order: 0,
      statusCode: 200,
    },
    {
      id: crypto.randomUUID(),
      pid: null,
      path: '/services',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      name: 'Услуги',
      order: 0,
      statusCode: 200,
    },
    {
      id: crypto.randomUUID(),
      pid: null,
      path: '/osmuis',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      name: 'ОСМУиС',
      order: 0,
      statusCode: 200,
    },
    {
      id: crypto.randomUUID(),
      pid: null,
      path: '/contacts',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      name: 'Контакты',
      order: 0,
      statusCode: 200,
    },
    {
      id: crypto.randomUUID(),
      pid: null,
      path: '/404',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      template: getTemplateIDByTemplateName('TemplateFallbackPage'),
      name: 'Ошибка 404',
      order: 0,
      statusCode: 200,
    },
  ];

  const pagesMeta: PagesMetaTableModel[] = [];

  pages.forEach(page => {
    pagesMeta.push({
      page: page.id,
      title: `${page.name} ✓`,
      description: `Description ©`,
      locale: 'ru-RU',
      keywords: null,
    });
  });

  await knex('templates').insert(templates);
  await knex('pagesList').insert(pages);
  await knex('pagesMeta').insert(pagesMeta);
}

export async function down(knex: Knex): Promise<void> {
  await knex('pagesList').del();
  await knex('templates').del();
}
