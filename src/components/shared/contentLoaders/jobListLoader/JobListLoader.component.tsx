import ContentLoader from 'react-content-loader'

import { JobListLoaderWrapper } from './JobListLoader.theme'

const JobListLoader = () => (
  <JobListLoaderWrapper>
    <ContentLoader
      speed={2}
      width={550}
      height={460}
      viewBox="0 0 550 460"
      backgroundColor="#cecece"
      foregroundColor="#ddd"
    >
      <rect x="9" y="17" rx="9" ry="9" width="331" height="266" />
      <rect x="8" y="299" rx="10" ry="10" width="135" height="11" />
      <rect x="8" y="319" rx="10" ry="10" width="180" height="10" />
      <rect x="9" y="339" rx="10" ry="10" width="96" height="10" />
    </ContentLoader>
  </JobListLoaderWrapper>
)

export default JobListLoader
