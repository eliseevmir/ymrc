import React from 'react';
import { graphql, useFragment, useMutation } from 'react-relay';

import TextField from '~/components/TextField';
import fragmentSpec, {
  ContentBlockPlainTextFragment$key,
} from '~/relay/artifacts/ContentBlockPlainTextFragment.graphql';
import updateSpec, {
  ContentBlockPlainTextUpdateMutation,
} from '~/relay/artifacts/ContentBlockPlainTextUpdateMutation.graphql';

export interface ContentBlockPlainTextProps {
  readonly fragmentRef: ContentBlockPlainTextFragment$key | null;
}

const ContentBlockPlainText: React.FC<ContentBlockPlainTextProps> = props => {
  const { fragmentRef } = props;
  const fragment = useFragment(fragmentSpec, fragmentRef);
  const { text, name, id } = fragment || { id: '', text: '', name: '' };
  const [value, setValue] = React.useState(text);
  const lastSavedValueRef = React.useRef(value);

  const [updateMutation, isPending] = useMutation<ContentBlockPlainTextUpdateMutation>(updateSpec);
  const updateContentBlock = React.useCallback(() => {
    if (value === lastSavedValueRef.current) {
      return;
    }
    lastSavedValueRef.current = value;
    updateMutation({
      variables: {
        id,
        text: value,
        name,
      },
    });
  }, [id, name, updateMutation, value]);

  return (
    <div>
      <p>
        Content block name: <b>{name}</b>
      </p>
      <div>
        <TextField
          label="Content"
          value={value}
          readOnly={isPending}
          onChange={event => setValue(event.currentTarget.value)}
          onBlur={() => updateContentBlock()}
          onKeyDown={event => {
            if (['Enter', 'NumpadEnter'].includes(event.code)) {
              updateContentBlock();
            }
          }}
        />
      </div>
    </div>
  );
};

export default ContentBlockPlainText;

graphql`
  fragment ContentBlockPlainTextFragment on ContentBlockPlainText {
    id
    text
    name
  }
`;

graphql`
  mutation ContentBlockPlainTextUpdateMutation($id: ID!, $text: String!, $name: String) {
    pages {
      updateContentBlockPlainText(id: $id, text: $text, name: $name) {
        __typename
        ... on ContentBlockMutationSuccess {
          contentBlock {
            ...ContentBlockPlainTextFragment
          }
        }
        ... on ContentBlockMutationError {
          name
          msg
        }
      }
    }
  }
`;
