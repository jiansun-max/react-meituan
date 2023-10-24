import './index.scss'

// eslint-disable-next-line react/prop-types
const Count = ({ onPlus, onMinus, count }) => {
  return (
    <div className="goods-count">
      <span className="minus" onClick={onMinus}></span>
      <span className="count">{count}</span>
      <span className="plus" onClick={onPlus}></span>
    </div>
  )
}

export default Count
