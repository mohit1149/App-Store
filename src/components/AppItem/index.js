// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName, appId} = appDetails
  return (
    <li className="apps-container" key={appId}>
      <img src={imageUrl} alt={appName} className="image" />
      <p className="paragrahp">{appName}</p>
    </li>
  )
}
export default AppItem
