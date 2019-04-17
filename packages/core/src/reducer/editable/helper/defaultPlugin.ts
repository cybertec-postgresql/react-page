const isDefaultPlugin = ({
  content: { plugin: { name: content = undefined } = {} } = {},
}: {
  // tslint:disable-next-line:no-any
  content?: { plugin?: any };
}): boolean => {
  return !(content && content === 'ory/editor/core/default');
};

// tslint:disable-next-line:no-any
export const defaultPluginFilter = (state: any): boolean => isDefaultPlugin(state);
