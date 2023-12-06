// import { defineMessages } from 'react-intl';

// export const translatedMenuItems = defineMessages({
//   allowed: {
//     id: 'Account.status.allowed',
//     defaultMessage: 'Доступ разрешен',
//   },
//   forbidden: {
//     id: 'Account.status.forbidden',
//     defaultMessage: 'Доступ запрещен',
//   },
// });

// export const translatedHeaderTitles = defineMessages({
//   all: {
//     id: 'containers.Accounts.header.all',
//     defaultMessage: 'Пользователи',
//   },
// });

import React from 'react';
import { defineMessages } from 'react-intl';

export const useTranslations = () => {
  const translatedMenuItems = React.useMemo(
    () =>
      defineMessages({
        activity: {
          defaultMessage: 'Деятельность',
        },
        conferences: {
          defaultMessage: 'Конференции',
        },
      }),
    [],
  );

  //   const translatedLocale = React.useMemo(
  //     () =>
  //       defineMessages({
  //         ru: {
  //           defaultMessage: 'Русский',
  //         },
  //       }),
  //     [],
  //   );

  return {
    translatedMenuItems,
  };
};

export default useTranslations;
