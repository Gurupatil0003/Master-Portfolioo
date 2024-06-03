# SVG Logos for Iconify for React

This package includes individual files for each icon, ready to be imported into React project with Iconify for React.

Each icon is in its own file, so you can bundle several icons from different icon sets without bundling entire icon sets.

## Installation

If you are using NPM:
```
npm install @iconify/react @iconify/icons-logos --save
```

If you are using Yarn:
```
yarn add @iconify/react @iconify/icons-logos
```

## Usage

```
import { Icon, InlineIcon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import firefoxIcon from "@iconify/icons-logos/firefox";
```

```
<Icon icon={angularIcon} />
<p>This is some text with icon adjusted for baseline: <InlineIcon icon={firefoxIcon} /></p>
```

See https://github.com/iconify/iconify-react for details.

## About SVG Logos

Icons author: [object Object]
License: [object Object]

