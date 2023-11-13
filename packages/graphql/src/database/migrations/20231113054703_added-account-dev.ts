import crypto from 'node:crypto';
import bcryptjs from 'bcryptjs';
import type { Knex } from 'knex';
import type {
  UsersTableModel,
  AccountsTableModel,
  PrivilegesTableModel,
  Role2PrivilegesTableModel,
  RolesTableModel,
  Account2RolesTableModel,
} from 'users';

export async function up(knex: Knex): Promise<void> {
  const salt = bcryptjs.genSaltSync(10);

  const devUser: UsersTableModel = {
    id: 'ca8774c4-5fd3-4032-975d-67db9e864879',
    name: 'Developer',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    account: 'dd59defa-eb48-4f27-b2b5-354799128f3d',
  };

  const devAccount: AccountsTableModel = {
    id: devUser.account,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    login: 'dev',
    password: bcryptjs.hashSync('dev.dev', salt),
    status: 'allowed',
  };

  const privileges: PrivilegesTableModel[] = [
    { privilege: 'Users_CreateEditUser' },
    { privilege: 'Users_PrivilegesAssignment' },
    { privilege: 'Users_UsersList' },
  ];

  const roles: RolesTableModel[] = [
    { role: 'developer' },
    { role: 'administrator' },
    { role: 'viewer' },
    { role: 'copywriter' },
    { role: 'optimizator' },
  ];

  const role2privileges: Role2PrivilegesTableModel[] = [
    { role: 'administrator', privilege: 'Users_CreateEditUser' },
    { role: 'administrator', privilege: 'Users_PrivilegesAssignment' },
    { role: 'administrator', privilege: 'Users_UsersList' },
  ];

  await knex('roles').insert(roles);
  await knex('privileges').insert(privileges);
  await knex('accounts').insert([devAccount]);
  await knex('users').insert([devUser]);
  await knex('role2privileges').insert(role2privileges);
  await knex<Account2RolesTableModel>('account2roles').insert([
    { account: devAccount.id, role: 'developer' },
  ]);
}

export async function down(knex: Knex): Promise<void> {
  await knex('roles').del();
  await knex('privileges').del();
  await knex('accounts').del();
  await knex('users').del();
  await knex('role2privileges').del();
  await knex('account2rolesdel').del();
}
