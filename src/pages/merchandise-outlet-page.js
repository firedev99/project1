import React from 'react'
//components
import Layout from '../components/layout'
import MerchandiseContent from '../components/link-2/MerchandiseContent'
import SecondMContent from '../components/link-2/SecondMContent'
import ThirdMContent from '../components/link-2/ThirdMContent'
const MerchandisePage = () => {
    return (
        <Layout>
            <MerchandiseContent />
            <SecondMContent />
            <ThirdMContent />
        </Layout>
    )
}

export default MerchandisePage
