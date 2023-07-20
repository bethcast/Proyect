import { FirebaseError, getFirestore } from "firebase/firestore";

import connection from "."

const db = getFirestore(connection)

export default db