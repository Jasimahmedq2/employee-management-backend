import User from './user.model';

const findLastEmployeeId = async (): Promise<string | undefined> => {
  const result = await User.findOne({ role: 'employee' }, { _id: 0, id: 1 })
    .sort({ createdAt: -1 })
    .lean();
  return result?.id ? result.id.substring(5) : undefined;
};

const generateEmployeeID = async (): Promise<string> => {
  const currentId =
    (await findLastEmployeeId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `AMPl-${incrementedId}`;

  return incrementedId;
};

const findLastManagerId = async (): Promise<string | undefined> => {
  const result = await User.findOne({ role: 'manager' }, { _id: 0, id: 1 })
    .sort({ createdAt: -1 })
    .lean();
  return result?.id ? result.id.substring(4) : undefined;
};

const generateManagerID = async (): Promise<string> => {
  const currentId =
    (await findLastManagerId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `MGR-${incrementedId}`;

  return incrementedId;
};

const findLastAdminId = async (): Promise<string | undefined> => {
  const result = await User.findOne({ role: 'admin' }, { _id: 0, id: 1 })
    .sort({ createdAt: -1 })
    .lean();
  return result?.id ? result.id.substring(4) : undefined;
};

const generateAdminID = async (): Promise<string> => {
  const currentId =
    (await findLastAdminId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `ADM-${incrementedId}`;

  return incrementedId;
};

export const GenerateUserId = {
  generateEmployeeID,
  generateManagerID,
  generateAdminID,
};
