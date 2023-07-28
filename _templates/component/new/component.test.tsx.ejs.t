---
to: src/features/<%= feature %>/<%= category %>/<%= name %>/<%= name %>.test.tsx
---
<%
  ComponentName = h.changeCase.pascal(name)
%>
import { render, screen } from '@testing-library/react-native'

import { <%= ComponentName %> } from './<%= name %>'
it(`renders correctly`, () => {
  render(<<%= name %> />)
  expect(screen.getByText('<%= ComponentName %>')).toBeTruthy()
})

