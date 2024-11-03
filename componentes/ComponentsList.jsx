import React, { useEffect, useState } from 'react';
import { getComponents } from '../firebase-service/firebaseService';

const ComponentsList = () => {
    const [components, setComponents] = useState([]);

    useEffect(() => {
        const fetchComponents = async () => {
            const data = await getComponents();
            setComponents(data);
        };

        fetchComponents();
    }, []);

    return (
        <div>
            {components.map(component => (
                <img key={component.id} src={component.imageUrl} alt={component.name} />
            ))}
        </div>
    );
};

export default ComponentsList;
