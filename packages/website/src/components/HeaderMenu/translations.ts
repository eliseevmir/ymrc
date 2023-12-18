import React from 'react';
import { defineMessages } from 'react-intl';

export const useTranslations = () => {
  const translatedMenuItems = React.useMemo(
    () =>
      defineMessages({
        activity: {
          defaultMessage: 'Деятельность',
        },
        'about center': {
          defaultMessage: 'О центре',
        },
        services: {
          defaultMessage: 'Услуги',
        },
        osmuis: {
          defaultMessage: 'ОСМУиС',
        },
        conferences: {
          defaultMessage: 'Конференции',
        },
        contacts: {
          defaultMessage: 'Контакты',
        },
        'scientific activity': {
          defaultMessage: 'Научая деятельность',
        },
        'medical activity': {
          defaultMessage: 'Медицинская деятельность',
        },
        'educational activity': {
          defaultMessage: 'Образовательна деятельность',
        },
        unknown: {
          defaultMessage: 'Unknown',
        },
      }),
    [],
  );

  return {
    translatedMenuItems,
  };
};

export default useTranslations;
