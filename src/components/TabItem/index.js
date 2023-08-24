// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const tabButtonClassName = isActive ? 'tab-button-active' : 'tab-button'

  const onClickTabId = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTabId}
        className={tabButtonClassName}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
