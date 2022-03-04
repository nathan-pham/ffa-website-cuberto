import Head from "next/head";

import PropTypes from "prop-types";

const Page = ({ title = "Home", description, children }) => {
    return (
        <>
            <Head>
                <title>Del Oro FFA | {title}</title>
            </Head>
            {children}
        </>
    );
};

Page.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
};

export default Page;
