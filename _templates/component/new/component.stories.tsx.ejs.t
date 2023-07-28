---
to: src/features/<%= feature %>/<%= category %>/<%= name %>/<%= name %>.stories.tsx
---
<%
  ComponentName = h.changeCase.pascal(name)
  PropsInterface = 'I' + ComponentName
%>
import { Meta, StoryObj } from '@storybook/react-native'

import { <%= ComponentName %>, type <%= PropsInterface %> } from './<%= name %>'

 const meta: Meta<<%= PropsInterface %>> = {
   title: "<%= ComponentName %>",
   component: <%= ComponentName %>,
   argTypes: {},
 };

 export default meta;

 type Story = StoryObj<<%= PropsInterface %>>;

 export const Basic: Story = {
   storyName: "Basic",
   args: {},
 };

