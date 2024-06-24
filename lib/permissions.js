import permit from './permit';

export const checkPermission = async (userId, action, resource) => {
  const result = await permit.check({
    key: userId,
  }, action, resource);

  return result;
};
