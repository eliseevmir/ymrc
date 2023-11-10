declare module '@via-profit-services/core' {
  import type { RedisPubSub } from 'graphql-redis-subscriptions';
  import type Redis from 'ioredis';
  import type { Knex } from 'knex';
  import type DataLoader from 'dataloader';
  import type {
    User,
    Account,
    UsersService,
    JwtConfig,
    AccessTokenPayload,
    AuthentificationService,
  } from 'users';
  import type { Page, ContentBlock, PagesService, Template } from 'webpages';
  import type { MenuItem, Menu, MenuService } from 'webmenu';
  import type { FilesTableRecord, FilesService } from 'files';
  import type { Notification, NotificationsService } from 'notifications';

  interface ServicesCollection {
    authentification: AuthentificationService;
    files: FilesService;
    users: UsersService;
    webpages: PagesService;
    webmenu: MenuService;
    notifications: NotificationsService;
  }

  interface DataLoaderCollection {
    accounts: DataLoader<string, Account>;
    files: DataLoader<string, FilesTableRecord>;
    menuItems: DataLoader<string, MenuItem>;
    menus: DataLoader<string, Menu>;
    users: DataLoader<string, User>;
    webpages: DataLoader<string, Page>;
    contentBlocks: DataLoader<string, ContentBlock>;
    templates: DataLoader<string, Template>;
    notifications: DataLoader<string, Notification>;

    /**
     * Will be returns counter of unread notifications by resipient ID
     */
    notificationsCounter: DataLoader<string, number>;
  }

  interface Context {
    dataloader: DataLoaderCollection;
    jwt: JwtConfig;
    pubsub: RedisPubSub;
    redis: Redis;
    token: AccessTokenPayload;
    knex: Knex;
  }

  interface CoreEmitter {
    on(event: 'log-error', listener: (tag: string, message: string) => void): this;
    on(event: 'log-warn', listener: (tag: string, message: string) => void): this;
    on(event: 'log-debug', listener: (tag: string, message: string) => void): this;
    on(event: 'log-info', listener: (tag: string, message: string) => void): this;
    on(event: 'knex-debug', listener: (message: string) => void): this;
    on(event: 'knex-error', listener: (err: Error) => void): this;
    on(event: 'redis-error', listener: (error: Error) => void): this;
    once(event: 'log-error', listener: (tag: string, message: string) => void): this;
    once(event: 'log-warn', listener: (tag: string, message: string) => void): this;
    once(event: 'log-info', listener: (tag: string, message: string) => void): this;
    once(event: 'log-debug', listener: (tag: string, message: string) => void): this;
    once(event: 'knex-debug', listener: (message: string) => void): this;
    once(event: 'knex-error', listener: (err: Error) => void): this;
    once(event: 'redis-error', listener: (error: Error) => void): this;
    addListener(event: 'log-error', listener: (tag: string, message: string) => void): this;
    addListener(event: 'log-warn', listener: (tag: string, message: string) => void): this;
    addListener(event: 'log-debug', listener: (tag: string, message: string) => void): this;
    addListener(event: 'log-info', listener: (tag: string, message: string) => void): this;
    addListener(event: 'knex-debug', listener: (message: string) => void): this;
    addListener(event: 'knex-error', listener: (err: Error) => void): this;
    addListener(event: 'redis-error', listener: (error: Error) => void): this;
    removeListener(event: 'log-error', listener: (tag: string, message: string) => void): this;
    removeListener(event: 'log-warn', listener: (tag: string, message: string) => void): this;
    removeListener(event: 'log-debug', listener: (tag: string, message: string) => void): this;
    removeListener(event: 'log-info', listener: (tag: string, message: string) => void): this;
    removeListener(event: 'knex-debug', listener: (message: string) => void): this;
    removeListener(event: 'knex-error', listener: (err: Error) => void): this;
    removeListener(event: 'redis-error', listener: (error: Error) => void): this;
    prependListener(event: 'log-error', listener: (tag: string, message: string) => void): this;
    prependListener(event: 'log-warn', listener: (tag: string, message: string) => void): this;
    prependListener(event: 'log-debug', listener: (tag: string, message: string) => void): this;
    prependListener(event: 'log-info', listener: (tag: string, message: string) => void): this;
    prependListener(event: 'knex-debug', listener: (message: string) => void): this;
    prependListener(event: 'knex-error', listener: (err: Error) => void): this;
    prependListener(event: 'redis-error', listener: (error: Error) => void): this;
    prependOnceListener(event: 'log-error', listener: (tag: string, message: string) => void): this;
    prependOnceListener(event: 'log-warn', listener: (tag: string, message: string) => void): this;
    prependOnceListener(event: 'log-debug', listener: (tag: string, message: string) => void): this;
    prependOnceListener(event: 'log-info', listener: (tag: string, message: string) => void): this;
    prependOnceListener(event: 'knex-debug', listener: (message: string) => void): this;
    prependOnceListener(event: 'knex-error', listener: (err: Error) => void): this;
    prependOnceListener(event: 'redis-error', listener: (error: Error) => void): this;
    emit(event: 'log-error', ...args: [tag: string, message: string]): boolean;
    emit(event: 'log-warn', ...args: [tag: string, message: string]): boolean;
    emit(event: 'log-debug', ...args: [tag: string, message: string]): boolean;
    emit(event: 'log-info', ...args: [tag: string, message: string]): boolean;
    emit(event: 'knex-debug', ...args: [message: string]): boolean;
    emit(event: 'knex-error', ...args: [err: Error]): boolean;
    emit(event: 'redis-error', ...args: [error: Error]): boolean;
    removeAllListeners(event: 'log-error'): this;
    removeAllListeners(event: 'log-warn'): this;
    removeAllListeners(event: 'log-debug'): this;
    removeAllListeners(event: 'log-info'): this;
    removeAllListeners(event: 'knex-debug'): this;
    removeAllListeners(event: 'knex-error'): this;
    removeAllListeners(event: 'redis-error'): this;
    listeners(event: 'log-error'): () => unknown[];
    listeners(event: 'log-warn'): () => unknown[];
    listeners(event: 'log-debug'): () => unknown[];
    listeners(event: 'log-info'): () => unknown[];
    listeners(event: 'knex-debug'): () => unknown[];
    listeners(event: 'redis-error'): () => unknown[];
    listeners(event: 'knex-error'): () => unknown[];
    listenerCount(event: 'log-error'): number;
    listenerCount(event: 'log-warn'): number;
    listenerCount(event: 'log-debug'): number;
    listenerCount(event: 'log-info'): number;
    listenerCount(event: 'knex-debug'): number;
    listenerCount(event: 'knex-error'): number;
    listenerCount(event: 'redis-error'): number;
  }
}
