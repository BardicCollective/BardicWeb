import React, { FunctionComponent } from 'react';
import SiteNav from '@components/SiteNav';
import sytles from './about.module.scss';

const About: FunctionComponent = () => {
    return (
        <div >
            <SiteNav></SiteNav>
            <div className={sytles.about}>
                <p>
                    Bardic Collective is an idea. It's focus is to produce shows which either tell stories or shows about how stories are told. This is an expiriment. Hopefully it'll be a long ride.
                </p>
            </div>
        </div>
    );
}

export default About;