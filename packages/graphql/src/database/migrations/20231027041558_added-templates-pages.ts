import { Knex } from 'knex';
import crypto from 'crypto';

import { PagesTableModel, PagesMetaTableModel, TemplateName, Template } from 'webpages';

export async function up(knex: Knex): Promise<void> {
  const pages: PagesTableModel[] = [];
  // const templates: Template[] = [];
  const pagesMeta: PagesMetaTableModel[] = [];

  // const template: Omit<Template, 'id'>[] = [
  //   {
  //     name: 'TemplateHomePage',
  //     displayName: 'Main page template',
  //   },
  // ];

  const templates: Template[] = [
    {
      id: crypto.randomUUID(),
      name: 'TemplateHomePage',
      displayName: 'Main page template',
    },
    {
      id: crypto.randomUUID(),
      name: 'TemplateSecondPage',
      displayName: 'Second page template',
    },
    {
      id: crypto.randomUUID(),
      name: 'TemplateConferencesPage',
      displayName: 'Conferences page template',
    },
    {
      id: crypto.randomUUID(),
      name: 'TemplateFallbackPage',
      displayName: '404 page template',
    },
  ];

  const getTemplateIDByTemplateName = (tplName: TemplateName): string => {
    const founded = templates.find(t => t.name === tplName);

    return typeof founded !== 'undefined' ? founded.id : templates[0].id;
  };

  // const pageTemplate = {
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  //   statusCode: 200,
  // };

  const pagesData: Pick<PagesTableModel, 'path' | 'template' | 'name' | 'order'>[] = [
    {
      path: '/',
      template: getTemplateIDByTemplateName('TemplateHomePage'),
      name: 'Main page',
      // name: 'Главная страница',
      order: 0,
    },

    {
      path: '/about',
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      // name: 'О центре',
      name: 'About center',
      order: 0,
    },

    {
      path: '/activity',
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      // name: 'Деятельность',
      name: 'Activity',
      order: 1,
    },
    {
      path: '/conferences',
      template: getTemplateIDByTemplateName('TemplateConferencesPage'),
      // name: 'Конференции',
      name: 'Conferences',
      order: 1,
    },
    {
      path: '/services',
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      // name: 'Услуги',
      name: 'Services',
      order: 1,
    },
    {
      path: '/osmuis',
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      // name: 'ОСМУиС',
      name: 'OSMUiS',
      order: 1,
    },
    {
      path: '/contacts',
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      // name: 'Контакты',
      name: 'Contacts',
      order: 2,
    },
    {
      path: '/404',
      template: getTemplateIDByTemplateName('TemplateFallbackPage'),
      // name: 'Ошибка 404',
      name: 'Error 404',
      order: 0,
    },
  ];

  const pageActivityChilds: typeof pagesData = [
    {
      path: '/activity/scientific',
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      // name: 'Деятельность',
      name: 'Scientific activity',
      order: 1,
    },
    {
      path: '/activity/medical',
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      // name: 'Деятельность',
      name: 'Medical activity',
      order: 2,
    },
    {
      path: '/activity/educational',
      template: getTemplateIDByTemplateName('TemplateSecondPage'),
      // name: 'Деятельность',
      name: 'Educational activity',
      order: 3,
    },
  ];

  pagesData.forEach(pd => {
    const pageID = crypto.randomUUID();

    pages.push({
      id: pageID,
      pid: null,
      path: pd.path,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      template: pd.template,
      name: pd.name,
      order: pd.order,
      statusCode: pd.name === 'Error 404' ? 404 : 200,
    });
  });

  pageActivityChilds.forEach(pAcc => {
    const pageID = crypto.randomUUID();
    const pageParent = pages.find(p => p.path === '/activity');

    pages.push({
      id: pageID,
      pid: pageParent.id,
      path: pAcc.path,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      template: pAcc.template,
      name: pAcc.name,
      order: pAcc.order,
      statusCode: 200,
    });
  });

  // const pages: PagesTableModel[] = [
  //   {
  //     id: crypto.randomUUID(),
  //     pid: null,
  //     path: '/',
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString(),
  //     template: getTemplateIDByTemplateName('TemplateHomePage'),
  //     name: 'Главная страница',
  //     order: 0,
  //     statusCode: 200,
  //   },

  //   {
  //     id: crypto.randomUUID(),
  //     pid: null,
  //     path: '/about',
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString(),
  //     template: getTemplateIDByTemplateName('TemplateSecondPage'),
  //     name: 'О центре',
  //     order: 0,
  //     statusCode: 200,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     pid: null,
  //     path: '/activity',
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString(),
  //     template: getTemplateIDByTemplateName('TemplateSecondPage'),
  //     name: 'Деятельность',
  //     order: 1,
  //     statusCode: 200,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     pid: null,
  //     path: '/conferences',
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString(),
  //     template: getTemplateIDByTemplateName('TemplateConferencesPage'),
  //     name: 'Конференции',
  //     order: 1,
  //     statusCode: 200,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     pid: null,
  //     path: '/services',
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString(),
  //     template: getTemplateIDByTemplateName('TemplateSecondPage'),
  //     name: 'Услуги',
  //     order: 1,
  //     statusCode: 200,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     pid: null,
  //     path: '/osmuis',
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString(),
  //     template: getTemplateIDByTemplateName('TemplateSecondPage'),
  //     name: 'ОСМУиС',
  //     order: 1,
  //     statusCode: 200,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     pid: null,
  //     path: '/contacts',
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString(),
  //     template: getTemplateIDByTemplateName('TemplateSecondPage'),
  //     name: 'Контакты',
  //     order: 2,
  //     statusCode: 200,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     pid: null,
  //     path: '/404',
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString(),
  //     template: getTemplateIDByTemplateName('TemplateFallbackPage'),
  //     name: 'Ошибка 404',
  //     order: 0,
  //     statusCode: 200,
  //   },
  // ];

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
