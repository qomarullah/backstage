/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createSpecializedApp } from '@backstage/frontend-app-api';
import {
  createExtensionOverrides,
  createPageExtension,
} from '@backstage/frontend-plugin-api';
import { render } from '@testing-library/react';

/** @public */
export function renderInTestApp(component: JSX.Element) {
  const app = createSpecializedApp({
    features: [
      createExtensionOverrides({
        extensions: [
          createPageExtension({
            namespace: 'test',
            defaultPath: '/',
            loader: async () => component,
          }),
        ],
      }),
    ],
  });

  return render(app.createRoot());
}
