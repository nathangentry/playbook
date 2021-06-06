import type { NextApiRequest, NextApiResponse } from 'next';
import firebase from '../../../util/firebase';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const id = typeof req.query.id === "string" ? req.query.id : req.query.id[0];

  firebase
    .firestore()
    .collection('library')
    .doc(id)
    .get()
    .then((resource) => {
      res.json(resource.data());
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};