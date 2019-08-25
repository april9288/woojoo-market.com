import React, { Fragment } from 'react';

import { StyledHigherSection, StyledSection, StyledText } from './styles';

const tempStyle = {
    display: 'flex',
    justifyContent: 'center',
    borderTop: '2px solid rgba(0,0,0,0.3)',
    width: '80%',
    margin: 'auto'
};

const PublicFooter = () => (
    <Fragment>
        <section style={tempStyle}>
            <section style={{ margin: '0 4rem' }}>
                <p
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        paddingBottom: '1rem'
                    }}
                >
                    THE COMPANY
                </p>
                <p>About Us</p>
                <p>Promotions</p>
                <p>FAQ</p>
                <p>Site Map</p>
                <p>Get Email Update</p>
                <p>Careers</p>
            </section>

            <section style={{ margin: '0 4rem' }}>
                <p
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        paddingBottom: '1rem'
                    }}
                >
                    SHOP DEPARTMENTS
                </p>
                <p>Camera</p>
                <p>Drone</p>
                <p>Laptop</p>
                <p>Watch</p>
                <p>AR/VR</p>
            </section>

            <section style={{ margin: '0 4rem' }}>
                <p
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        paddingBottom: '1rem'
                    }}
                >
                    CUSTOMER SERVICE
                </p>
                <p>Contact Us</p>
                <p>Order Status</p>
                <p>Shipping</p>
                <p>Returns and Exchanges</p>
            </section>
        </section>
        <StyledHigherSection>
            <StyledSection>
                <StyledText att1={true}>WooJoo Market</StyledText>
                <StyledText att2={true}>
                    2019 Jong-Ho James Kim All Rights Reserved
                </StyledText>
            </StyledSection>
        </StyledHigherSection>
    </Fragment>
);

export default PublicFooter;
