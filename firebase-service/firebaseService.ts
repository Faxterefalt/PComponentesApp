import app from './firebaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore(app);

export const getComponents = async () => {
    const componentsCollection = collection(db, 'components'); // Asegúrate de que 'components' es el nombre de tu colección
    const componentSnapshot = await getDocs(componentsCollection);
    const componentsList = componentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return componentsList;
};
