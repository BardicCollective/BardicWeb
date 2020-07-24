import React, { FunctionComponent } from 'react';
import sytles from './about.module.scss';

const About: FunctionComponent = () => {
    return (
        <div className={sytles.about}>
            <p>
                Bardic Collective is an idea. It's focus is to produce shows which either tell stories or shows about how stories are told. This is an expiriment. Hopefully it'll be a long ride.
            </p>
        </div>
    );
}

export default About;