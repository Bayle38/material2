/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {TargetVersion} from '../../target-version';
import {VersionChanges} from '../transform-change-data';

export interface MaterialPropertyNameData {
  /** The property name to replace. */
  replace: string;
  /** The new name for the property. */
  replaceWith: string;
  /** Whitelist where this replacement is made. If omitted it is made for all Classes. */
  whitelist: {
    /** Replace the property only when its type is one of the given Classes. */
    classes: string[];
  };
}

export const propertyNames: VersionChanges<MaterialPropertyNameData> = {
  [TargetVersion.V7]: [
    {
      pr: 'https://github.com/angular/material2/pull/8286',
      changes: [
        {
          replace: 'onChange',
          replaceWith: 'changed',
          whitelist: {
            classes: ['SelectionModel']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/12927',
      changes: [
        {
          replace: 'flexibleDiemsions',
          replaceWith: 'flexibleDimensions',
          whitelist: {
            classes: ['CdkConnectedOverlay']
          }
        }
      ]
    }
  ],

  [TargetVersion.V6]: [
    {
      pr: 'https://github.com/angular/material2/pull/10161',
      changes: [
        {
          replace: '_deprecatedOrigin',
          replaceWith: 'origin',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        },
        {
          replace: '_deprecatedPositions',
          replaceWith: 'positions',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        },
        {
          replace: '_deprecatedOffsetX',
          replaceWith: 'offsetX',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        },
        {
          replace: '_deprecatedOffsetY',
          replaceWith: 'offsetY',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        },
        {
          replace: '_deprecatedWidth',
          replaceWith: 'width',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        },
        {
          replace: '_deprecatedHeight',
          replaceWith: 'height',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        },
        {
          replace: '_deprecatedMinWidth',
          replaceWith: 'minWidth',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        },
        {
          replace: '_deprecatedMinHeight',
          replaceWith: 'minHeight',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        },
        {
          replace: '_deprecatedBackdropClass',
          replaceWith: 'backdropClass',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        },
        {
          replace: '_deprecatedScrollStrategy',
          replaceWith: 'scrollStrategy',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        },
        {
          replace: '_deprecatedOpen',
          replaceWith: 'open',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        },
        {
          replace: '_deprecatedHasBackdrop',
          replaceWith: 'hasBackdrop',
          whitelist: {
            classes: ['CdkConnectedOverlay', 'ConnectedOverlayDirective']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10163',
      changes: [
        {
          replace: 'change',
          replaceWith: 'selectionChange',
          whitelist: {
            classes: ['MatSelect']
          }
        },
        {
          replace: 'onOpen',
          replaceWith: 'openedChange.pipe(filter(isOpen => isOpen))',
          whitelist: {
            classes: ['MatSelect']
          }
        },
        {
          replace: 'onClose',
          replaceWith: 'openedChange.pipe(filter(isOpen => !isOpen))',
          whitelist: {
            classes: ['MatSelect']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10218',
      changes: [
        {
          replace: 'align',
          replaceWith: 'labelPosition',
          whitelist: {
            classes: ['MatRadioGroup', 'MatRadioButton']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10253',
      changes: [
        {
          replace: 'extraClasses',
          replaceWith: 'panelClass',
          whitelist: {
            classes: ['MatSnackBarConfig']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10257',
      changes: [
        {
          replace: '_deprecatedPortal',
          replaceWith: 'portal',
          whitelist: {
            classes: ['CdkPortalOutlet']
          }
        },
        {
          replace: '_deprecatedPortalHost',
          replaceWith: 'portal',
          whitelist: {
            classes: ['CdkPortalOutlet']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10279',
      changes: [
        {
          replace: 'align',
          replaceWith: 'position',
          whitelist: {
            classes: ['MatDrawer', 'MatSidenav']
          }
        },
        {
          replace: 'onAlignChanged',
          replaceWith: 'onPositionChanged',
          whitelist: {
            classes: ['MatDrawer', 'MatSidenav']
          }
        },
        {
          replace: 'onOpen',
          replaceWith: 'openedChange.pipe(filter(isOpen => isOpen))',
          whitelist: {
            classes: ['MatDrawer', 'MatSidenav']
          }
        },
        {
          replace: 'onClose',
          replaceWith: 'openedChange.pipe(filter(isOpen => !isOpen))',
          whitelist: {
            classes: ['MatDrawer', 'MatSidenav']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10293',
      changes: [
        {
          replace: 'shouldPlaceholderFloat',
          replaceWith: 'shouldLabelFloat',
          whitelist: {
            classes: ['MatFormFieldControl', 'MatSelect']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10294',
      changes: [
        {
          replace: 'dividerColor',
          replaceWith: 'color',
          whitelist: {
            classes: ['MatFormField']
          }
        },
        {
          replace: 'floatPlaceholder',
          replaceWith: 'floatLabel',
          whitelist: {
            classes: ['MatFormField']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10309',
      changes: [
        {
          replace: 'selectChange',
          replaceWith: 'selectedTabChange',
          whitelist: {
            classes: ['MatTabGroup']
          }
        },
        {
          replace: '_dynamicHeightDeprecated',
          replaceWith: 'dynamicHeight',
          whitelist: {
            classes: ['MatTabGroup']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10311',
      changes: [
        {
          replace: 'destroy',
          replaceWith: 'destroyed',
          whitelist: {
            classes: ['MatChip']
          }
        },
        {
          replace: 'onRemove',
          replaceWith: 'removed',
          whitelist: {
            classes: ['MatChip']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10342',
      changes: [
        {
          replace: 'align',
          replaceWith: 'labelPosition',
          whitelist: {
            classes: ['MatCheckbox']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10344',
      changes: [
        {
          replace: '_positionDeprecated',
          replaceWith: 'position',
          whitelist: {
            classes: ['MatTooltip']
          }
        }
      ]
    },

    {
      pr: 'https://github.com/angular/material2/pull/10373',
      changes: [
        {
          replace: '_thumbLabelDeprecated',
          replaceWith: 'thumbLabel',
          whitelist: {
            classes: ['MatSlider']
          }
        },
        {
          replace: '_tickIntervalDeprecated',
          replaceWith: 'tickInterval',
          whitelist: {
            classes: ['MatSlider']
          }
        }
      ]
    },
  ]
};
