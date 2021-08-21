import type { NextApiRequest, NextApiResponse } from 'next';
import firebase from '../../../util/firebase';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const id = JSON.parse(req.body).id;

  firebase
    .firestore()
    .collection('library')
    .doc(id)
    .delete()
    .then(() => { res.json({ message: `Successfully deleted resource with id ${id}` }) })
    .catch((error) => { res.json({ message: `Error deleting resource: ${error.message}` }) });
};