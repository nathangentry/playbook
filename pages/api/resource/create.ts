import type { NextApiRequest, NextApiResponse } from 'next';
import generateId from '../../../util/generateId';
import firebase from '../../../util/firebase';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const id = generateId();

  firebase
    .firestore()
    .collection('library')
    .doc(id)
    .set({ ...JSON.parse(req.body), id: id })
    .then(() => { res.json({ message: `Successfully entered resource with id ${id}` }) })
    .catch((error) => { res.json({ message: `Error creating resource: ${error.message}` }) });
};