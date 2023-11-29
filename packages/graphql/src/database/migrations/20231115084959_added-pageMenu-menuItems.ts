import { Knex } from 'knex';
import crypto from 'crypto';

import { MenuTableModel, MenuItemTableModel, Menu2TemplateTableModel } from 'webmenu';
import { PagesTableModel, TemplatesTableModel } from 'webpages';

export async function up(knex: Knex): Promise<void> {
  const pagesList = await knex.select('*').from<PagesTableModel>('pagesList');
  const templates = await knex.select('*').from<TemplatesTableModel>('templates');

  const pageMenu: MenuTableModel = {
    id: crypto.randomUUID(),
    name: 'Main menu',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const menuItems: MenuItemTableModel[] = [];

  pagesList.forEach(page => {
    if (page.path !== '/' && page.path !== '/404') {
      menuItems.push({
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        pid: null,
        name: null,
        menu: pageMenu.id,
        page: page.id,
        url: null,
        visible: true,
        order: 1,
        target: 'SELF',
      });
    }
  });

  const menu2templates: Menu2TemplateTableModel[] = templates.map(t => ({
    menu: pageMenu.id,
    template: t.id,
  }));

  await knex('pagesMenu').insert(pageMenu);
  await knex('pagesMenuItems').insert(menuItems);
  await knex('menu2template').insert(menu2templates);
}

export async function down(knex: Knex): Promise<void> {
  await knex('pagesMenuItems').del();
  await knex('pagesMenu').del();
}
