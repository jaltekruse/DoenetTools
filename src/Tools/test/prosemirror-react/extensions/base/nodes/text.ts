import { NodeSpec } from 'prosemirror-model'

export const text: NodeSpec & { toDebugString?: () => string } = {
  group: 'inline',
  toDebugString: () => 'text_node',
};
