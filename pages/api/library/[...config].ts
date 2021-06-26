import type { NextApiRequest, NextApiResponse } from 'next';
import firebase from '../../../util/firebase';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.config !== "string" && req.query.config.length === 4) {
    const [level, gender, resourceGroup, resourceType] = req.query.config;

    firebase
      .firestore()
      .collection("library")
      .where("level", "==", level)
      .where("gender", "==", gender)
      .where("group", "==", resourceGroup)
      .where("type", "==", resourceType)
      .get()
      .then((data) => {
        const resources: any[] = [];
        data.forEach(resource => resources.push(resource.data()));
        res.json(resources);
      })
      .catch((error) => {
        res.json({ message: error.message });
      });
  }
};