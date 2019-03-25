/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */
// tslint:disable:max-line-length
import { EditableType } from '@cybertec/ory-editor-core/lib/types/editable';

const content: EditableType[] = [
  {
    'id': '1',
    'cells': [
      {
        'id': '5ac89ec4-7536-4120-a072-8eedad0a48ff',
        'inline': null,
        'size': 12,
        'rows': [
          {
            'id': 'dad71b07-5d3e-4aaf-9c8a-0e06a346da52',
            'order': 1,
            'cells': [
              {
                'id': '6c11a0d6-6857-4917-9692-eae056fd9400',
                'inline': null,
                'size': 12,
                'layout': {
                  'plugin': {
                    'name': 'ory/editor/core/layout/background',
                    'version': '0.0.1',
                  },
                  'state': {
                    'background': '/images/sea-bg.jpg',
                  },
                },
                'rows': [
                  {
                    'id': 'c9d1ff2a-f7d1-410c-b275-9dd6200113c8',
                    'cells': [],
                  },
                ],
              },
            ],
          },
          {
            'id': 'd813d094-215a-43ec-bcdd-d5fd6258b915',
            'order': 2,
            'cells': [
              {
                'id': '3fde7b92-fbfe-4b2d-85b3-bad431939df6',
                'inline': null,
                'size': 12,
                'content': {
                  'plugin': {
                    'name': 'ory/editor/core/content/slate',
                    'version': '0.0.2',
                  },
                  'state': {
                    'serialized': {
                      'object': 'value',
                      'document': {
                        'object': 'document',
                        'data': {},
                        'nodes': [
                          {
                            'object': 'block',
                            'type': 'HEADINGS/HEADING-ONE',
                            'isVoid': false,
                            'data': {
                              'align': 'center',
                            },
                            'nodes': [
                              {
                                'object': 'text',
                                'leaves': [
                                  {
                                    'object': 'leaf',
                                    'text': 'The ORY Editor',
                                    'marks': [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            'object': 'block',
                            'type': 'PARAGRAPH/PARAGRAPH',
                            'isVoid': false,
                            'data': {
                              'align': 'left',
                            },
                            'nodes': [
                              {
                                'object': 'text',
                                'leaves': [
                                  {
                                    'object': 'leaf',
                                    'text': '',
                                    'marks': [],
                                  },
                                ],
                              },
                              {
                                'object': 'inline',
                                'type': 'LINK/LINK',
                                'isVoid': false,
                                'data': {
                                  'href': 'https://www.ory.sh/',
                                },
                                'nodes': [
                                  {
                                    'object': 'text',
                                    'leaves': [
                                      {
                                        'object': 'leaf',
                                        'text': 'ORY',
                                        'marks': [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                'object': 'text',
                                'leaves': [
                                  {
                                    'object': 'leaf',
                                    'text': ' is a company building and maintaining developer tools for a safer, more accessible web. You might also like our other ',
                                    'marks': [],
                                  },
                                ],
                              },
                              {
                                'object': 'inline',
                                'type': 'LINK/LINK',
                                'isVoid': false,
                                'data': {
                                  'href': 'https://github.com/ory',
                                },
                                'nodes': [
                                  {
                                    'object': 'text',
                                    'leaves': [
                                      {
                                        'object': 'leaf',
                                        'text': 'Open Source',
                                        'marks': [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                'object': 'text',
                                'leaves': [
                                  {
                                    'object': 'leaf',
                                    'text': ' tools! The ORY Editor is a smart, extensible and modern editor ("WYSIWYG") for the web written in React.',
                                    'marks': [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            'object': 'block',
                            'type': 'PARAGRAPH/PARAGRAPH',
                            'isVoid': false,
                            'data': {
                              'align': 'left',
                            },
                            'nodes': [
                              {
                                'object': 'text',
                                'leaves': [
                                  {
                                    'object': 'leaf',
                                    'text': 'The ORY Editor was written because we urgently needed a robust and modern content editing solution for our open education platform ',
                                    'marks': [],
                                  },
                                ],
                              },
                              {
                                'object': 'inline',
                                'type': 'LINK/LINK',
                                'isVoid': false,
                                'data': {
                                  'href': 'https://en.serlo.org/serlo',
                                },
                                'nodes': [
                                  {
                                    'object': 'text',
                                    'leaves': [
                                      {
                                        'object': 'leaf',
                                        'text': 'serlo.org',
                                        'marks': [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                'object': 'text',
                                'leaves': [
                                  {
                                    'object': 'leaf',
                                    'text': '. Serlo is the largest open education platform in Germany, works like the Wikipedia and is used by millions every year.',
                                    'marks': [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            'id': 'ec4474f6-a418-4628-831b-03a7e64fd500',
            'order': 3,
            'cells': [
              {
                'id': '78269a8f-7b29-4703-b107-b399eac3e365',
                'inline': null,
                'size': 8,
                'order': 2,
                'content': {
                  'plugin': {
                    'name': 'ory/editor/core/content/slate',
                    'version': '0.0.2',
                  },
                  'state': {
                    'serialized': {
                      'object': 'value',
                      'document': {
                        'object': 'document',
                        'data': {},
                        'nodes': [
                          {
                            'object': 'block',
                            'type': 'HEADINGS/HEADING-THREE',
                            'isVoid': false,
                            'data': {},
                            'nodes': [
                              {
                                'object': 'text',
                                'leaves': [
                                  {
                                    'object': 'leaf',
                                    'text': 'Sane mark-up',
                                    'marks': [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            'object': 'block',
                            'type': 'PARAGRAPH/PARAGRAPH',
                            'isVoid': false,
                            'data': {},
                            'nodes': [
                              {
                                'object': 'text',
                                'leaves': [
                                  {
                                    'object': 'leaf',
                                    'text': 'Most web editors work on top of the DOM. This is dangerous (XSS), hard to maintain and difficult to parse. The ORY Editor uses JSON only - everywhere! It\'s sane, tested, clean and minimal.',
                                    'marks': [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    },
                  },
                },
              },
              {
                'id': 'e8c5696c-4769-483c-a962-2fd5f4727c0c',
                'order': 1,
                'inline': null,
                'size': 4,
                'content': {
                  'plugin': {
                    'name': 'ory/editor/core/content/image',
                    'version': '0.0.1',
                  },
                  'state': {
                    'src': '/images/sane-markup.png',
                  },
                },
              },
            ],
          },
          {
            'id': 'dad71b07-5d3e-4aaf-9c8a-0e06a346de99',
            'cells': [
              {
                'id': '6c11a0d6-6857-4917-9692-eae056fd9500',
                'inline': null,
                'size': 12,
                'layout': {
                  'plugin': {
                    'name': 'ory/editor/core/layout/background',
                    'version': '0.0.1',
                  },
                  'state': {
                    'background': '/images/sea-bg.jpg',
                  },
                },
                'rows': [
                  {
                    'id': 'c9d1ff2a-f7d1-410c-b275-9dd6200114c5',
                    'cells': [
                      {
                        'id': 'fa87ac49-73b9-4202-9034-f752fa83273c',
                        'inline': null,
                        'size': 4,
                        'content': {
                          'plugin': {
                            'name': 'ory/editor/core/content/image',
                            'version': '0.0.1',
                          },
                          'state': {
                            'src': '/images/react.png',
                          },
                        },
                      },
                      {
                        'id': '491d3370-e551-4b05-be4f-c926d52ee08b',
                        'inline': null,
                        'size': 8,
                        'content': {
                          'plugin': {
                            'name': 'ory/editor/core/content/slate',
                            'version': '0.0.2',
                          },
                          'state': {
                            'serialized': {
                              'object': 'value',
                              'document': {
                                'object': 'document',
                                'data': {},
                                'nodes': [
                                  {
                                    'object': 'block',
                                    'type': 'HEADINGS/HEADING-THREE',
                                    'isVoid': false,
                                    'data': {},
                                    'nodes': [
                                      {
                                        'object': 'text',
                                        'leaves': [
                                          {
                                            'object': 'leaf',
                                            'text': 'React Plugin API',
                                            'marks': [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    'object': 'block',
                                    'type': 'PARAGRAPH/PARAGRAPH',
                                    'isVoid': false,
                                    'data': {},
                                    'nodes': [
                                      {
                                        'object': 'text',
                                        'leaves': [
                                          {
                                            'object': 'leaf',
                                            'text': 'You don\'t like our rich text solution, require custom layout components, need a twitter feed, want to contribute or even sell plugins? No problem with our easy-to-use React Plugin API!',
                                            'marks': [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    'object': 'block',
                                    'type': 'PARAGRAPH/PARAGRAPH',
                                    'isVoid': false,
                                    'data': {},
                                    'nodes': [
                                      {
                                        'object': 'text',
                                        'leaves': [
                                          {
                                            'object': 'leaf',
                                            'text': 'In fact, this section is rendered on top of an exemplary layout plugin!',
                                            'marks': [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            'id': '5db554dd-6b14-46c6-8dd4-3de3aee946a9',
            'cells': [
              {
                'id': '246945c0-f677-4942-b067-ecfef5624911',
                'inline': null,
                'size': 12,
                'content': {
                  'plugin': {
                    'name': 'ory/editor/core/content/slate',
                    'version': '0.0.2',
                  },
                  'state': {
                    'serialized': {
                      'object': 'value',
                      'document': {
                        'object': 'document',
                        'data': {},
                        'nodes': [
                          {
                            'object': 'block',
                            'type': 'HEADINGS/HEADING-TWO',
                            'isVoid': false,
                            'data': {
                              'align': 'center',
                            },
                            'nodes': [
                              {
                                'object': 'text',
                                'leaves': [
                                  {
                                    'object': 'leaf',
                                    'text': 'That\'s all?',
                                    'marks': [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            'id': 'ba89fcb0-6657-4826-abc0-1ad006dac05c',
            'cells': [
              {
                'id': 'b368328c-86fd-4949-b0c8-7277da6c7d6d',
                'inline': null,
                'size': 12,
                'content': {
                  'plugin': {
                    'name': 'ory/editor/core/content/slate',
                    'version': '0.0.2',
                  },
                  'state': {
                    'serialized': {
                      'object': 'value',
                      'document': {
                        'object': 'document',
                        'data': {},
                        'nodes': [
                          {
                            'object': 'block',
                            'type': 'PARAGRAPH/PARAGRAPH',
                            'isVoid': false,
                            'data': {},
                            'nodes': [
                              {
                                'object': 'text',
                                'leaves': [
                                  {
                                    'object': 'leaf',
                                    'text': 'No, of course not! We are very proud of these ones as well:',
                                    'marks': [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            'object': 'block',
                            'type': 'LISTS/UNORDERED-LIST',
                            'isVoid': false,
                            'data': {},
                            'nodes': [
                              {
                                'object': 'block',
                                'type': 'LISTS/LIST-ITEM',
                                'isVoid': false,
                                'data': {},
                                'nodes': [
                                  {
                                    'object': 'block',
                                    'type': 'PARAGRAPH/PARAGRAPH',
                                    'isVoid': false,
                                    'data': {},
                                    'nodes': [
                                      {
                                        'object': 'text',
                                        'leaves': [
                                          {
                                            'object': 'leaf',
                                            'text': 'global un-/redo with ',
                                            'marks': [],
                                          },
                                          {
                                            'object': 'leaf',
                                            'text': 'ctrl+z',
                                            'marks': [
                                              {
                                                'object': 'mark',
                                                'type': 'EMPHASIZE/EM',
                                                'data': {},
                                              },
                                            ],
                                          },
                                          {
                                            'object': 'leaf',
                                            'text': ' / ',
                                            'marks': [],
                                          },
                                          {
                                            'object': 'leaf',
                                            'text': 'ctrl+y',
                                            'marks': [
                                              {
                                                'object': 'mark',
                                                'type': 'EMPHASIZE/EM',
                                                'data': {},
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                'object': 'block',
                                'type': 'LISTS/LIST-ITEM',
                                'isVoid': false,
                                'data': {},
                                'nodes': [
                                  {
                                    'object': 'block',
                                    'type': 'PARAGRAPH/PARAGRAPH',
                                    'isVoid': false,
                                    'data': {},
                                    'nodes': [
                                      {
                                        'object': 'text',
                                        'leaves': [
                                          {
                                            'object': 'leaf',
                                            'text': 'editing shortcuts, for example ',
                                            'marks': [],
                                          },
                                          {
                                            'object': 'leaf',
                                            'text': 'ctrl+b',
                                            'marks': [
                                              {
                                                'object': 'mark',
                                                'type': 'EMPHASIZE/STRONG',
                                                'data': {},
                                              },
                                            ],
                                          },
                                          {
                                            'object': 'leaf',
                                            'text': ',',
                                            'marks': [],
                                          },
                                          {
                                            'object': 'leaf',
                                            'text': ' ',
                                            'marks': [
                                              {
                                                'object': 'mark',
                                                'type': 'EMPHASIZE/STRONG',
                                                'data': {},
                                              },
                                            ],
                                          },
                                          {
                                            'object': 'leaf',
                                            'text': 'ctrl+i, ',
                                            'marks': [
                                              {
                                                'object': 'mark',
                                                'type': 'EMPHASIZE/EM',
                                                'data': {},
                                              },
                                            ],
                                          },
                                          {
                                            'object': 'leaf',
                                            'text': 'ctrl+u',
                                            'marks': [
                                              {
                                                'object': 'mark',
                                                'type': 'EMPHASIZE/U',
                                                'data': {},
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                'object': 'block',
                                'type': 'LISTS/LIST-ITEM',
                                'isVoid': false,
                                'data': {},
                                'nodes': [
                                  {
                                    'object': 'block',
                                    'type': 'PARAGRAPH/PARAGRAPH',
                                    'isVoid': false,
                                    'data': {},
                                    'nodes': [
                                      {
                                        'object': 'text',
                                        'leaves': [
                                          {
                                            'object': 'leaf',
                                            'text': 'collaborative editing',
                                            'marks': [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                'object': 'block',
                                'type': 'LISTS/LIST-ITEM',
                                'isVoid': false,
                                'data': {},
                                'nodes': [
                                  {
                                    'object': 'block',
                                    'type': 'PARAGRAPH/PARAGRAPH',
                                    'isVoid': false,
                                    'data': {},
                                    'nodes': [
                                      {
                                        'object': 'text',
                                        'leaves': [
                                          {
                                            'object': 'leaf',
                                            'text': '... and more things to come',
                                            'marks': [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    },
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  /*{
    id: '2',
    cells: [{
      rows: [
        {
          cells: [
            {
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {},
              },
              id: '7d29c96e-53b8-4b3e-b0f1-758b405d6daf',
            },
          ],
          id: 'd62fe894-5795-4f00-80c8-0a5c9cfe85b9',
        },
        {
          cells: [
            {
              rows: [
                {
                  cells: [
                    {
                      inline: 'right',
                      content: {
                        plugin: {
                          name: 'ory/editor/core/content/image',
                          version: '0.0.1',
                        },
                        state: {
                          src: '/images/grass-header.jpg',
                        },
                      },
                      id: 'c3fab3ee-c086-4faf-8a88-e8f321d425c2',
                    },
                    {
                      content: {
                        plugin: {
                          name: 'ory/editor/core/content/slate',
                          version: '0.0.2',
                        },
                        state: {
                          importFromHtml: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
                        },
                      },
                      id: '254233b6-4bf3-4d0a-8c86-ab7b88f4283c',
                    },
                  ],
                  id: 'f32b324e-2d17-4658-8941-93c7380d51d8',
                },
                {
                  cells: [
                    {
                      content: {
                        plugin: {
                          name: 'ory/editor/core/content/slate',
                          version: '0.0.2',
                        },
                        state: {
                          importFromHtml: '<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
                        },
                      },
                      id: 'c5d411d5-595c-4ff2-ac11-0d0079a814ef',
                    },
                  ],
                  id: '25d9f081-28b6-45f0-bff0-5a11bc5db071',
                },
                {
                  cells: [
                    {
                      content: {
                        plugin: {
                          name: 'ory/editor/core/content/slate',
                          version: '0.0.2',
                        },
                        state: {
                          importFromHtml: '<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>',
                        },
                      },
                      id: '42cd103b-9b14-4674-a895-50c629183a00',
                    },
                  ],
                  id: 'c969431c-aa25-4b81-a5e5-752751517309',
                },
                {
                  cells: [
                    {
                      content: {
                        plugin: {
                          name: 'ory/editor/core/content/slate',
                          version: '0.0.2',
                        },
                        state: {
                          importFromHtml: '<p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>',
                        },
                      },
                      id: '15ab9e7d-70e2-4a6b-9f99-3a849a31ac59',
                    },
                  ],
                  id: '83c94e3c-2fd5-4e2a-8384-4f31841dab27',
                },
              ],
              id: '9a7d26ec-ead5-429f-a596-b53935642f4b',
            },
          ],
          id: '8c16dbe4-96e3-41fd-8012-6c37233d86f6',
        },
      ],
      id: '15efd3c3-b683-4da6-b107-16d8d0c8cd26',
    }],
  },*/
];
export default content;
