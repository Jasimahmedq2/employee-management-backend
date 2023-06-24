import User from './user.model';

const findFirstEmployeeId = async (): Promise<string | undefined> => {
  const result = await User.findOne({ role: 'employee' }, { _id: 0, id: 1 })
    .sort({ createdAt: -1 })
    .lean();
  return result?.id ? result.id.substring(5) : undefined;
};

const generateEmployeeID = async (): Promise<string> => {
  const currentId =
    (await findFirstEmployeeId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `AMPl-${incrementedId}`;

  return incrementedId;
};

export const GenerateUserId = {
  generateEmployeeID,
};
