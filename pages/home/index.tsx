import * as React from 'react';
import Layout from '../../src/YJComponents/Layouts/Layout'

const IndexPage: React.FunctionComponent = () => {
  return (

    <Layout
    title = "Codeit Home"
    headingContents = {<div>홈 캐러셀 광고</div>}
    >
      <h1>Codeit Home</h1>
    </Layout>
  )
}

export default IndexPage;