import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [user] = useAuthState(auth);


    return (
        <section>

        </section>
    );
};

export default MyOrder;