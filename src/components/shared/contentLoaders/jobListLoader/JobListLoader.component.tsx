import ContentLoader from 'react-content-loader'

import { JobListLoaderWrapper } from './JobListLoader.theme'

const JobListLoader = () => (
  <JobListLoaderWrapper>
    <ContentLoader 
    speed={2}
    width={470}
    height={250}
    viewBox="0 0 490 250"
    backgroundColor="#cecece"
    foregroundColor="#ddd"
  >
    <circle cx="575" cy="537" r="15" /> 
    <rect x="27" y="216" rx="8" ry="8" width="208" height="12" /> 
    <rect x="7" y="237" rx="8" ry="8" width="140" height="10" /> 
    <circle cx="12" cy="223" r="7" /> 
    <circle cx="25" cy="226" r="2" /> 
    <rect x="6" y="178" rx="8" ry="8" width="309" height="11" /> 
    <rect x="6" y="156" rx="8" ry="8" width="473" height="13" /> 
    <rect x="6" y="68" rx="8" ry="8" width="140" height="13" /> 
    <rect x="6" y="46" rx="8" ry="8" width="238" height="13" /> 
    <rect x="7" y="8" rx="8" ry="8" width="304" height="26" /> 
    <rect x="384" y="8" rx="8" ry="8" width="95" height="26" /> 
    <rect x="6" y="132" rx="8" ry="8" width="473" height="13" /> 
    <rect x="5" y="105" rx="8" ry="8" width="473" height="13" />
  </ContentLoader>
  </JobListLoaderWrapper>
)

export default JobListLoader
