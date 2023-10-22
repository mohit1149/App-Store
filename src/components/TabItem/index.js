// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const clickOnTheButton = () => {
    updateActiveTabId(tabId)
  }
  const isActiveClassName = isActive ? 'button-add-class-name' : ''
  const isActiveClassNameFirst = isActive ? 'button-add-class' : ''
  return (
    <li className="button-container" key={tabId}>
      <button
        className={`button ${isActiveClassName}`}
        type="button"
        onClick={clickOnTheButton}
      >
        {displayText}
      </button>
      <hr className={`horizontal-line ${isActiveClassNameFirst}`} />
    </li>
  )
}

export default TabItem
