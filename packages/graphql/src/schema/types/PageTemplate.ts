import { GraphQLUnionType } from 'graphql';

import type { Template as TemplateType } from 'webpages';
import TemplateHomePage from '~/schema/templates/TemplateHomePage';
import TemplateSecondPage from '~/schema/templates/TemplateSecondPage';
import TemplateFallbackPage from '~/schema/templates/TemplateFallbackPage';
import TemplateConferencesPage from '~/schema/templates/TemplateConferencesPage';

const PageTemplate = new GraphQLUnionType({
  name: 'PageTemplate',
  types: () => [
    TemplateHomePage,
    TemplateSecondPage,
    TemplateConferencesPage,
    TemplateFallbackPage,
  ],
  resolveType: (template: TemplateType) => template.name,
});

export default PageTemplate;
