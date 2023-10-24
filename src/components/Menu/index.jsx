/* eslint-disable react/prop-types */
import classNames from 'classnames'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveIndex } from '../../store/modules/takeaway'

const Menu = ({ foodsList }) => {
  
  const dispatch = useDispatch()
  const { activeIndex } = useSelector(state => state.foods)
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            className={classNames(
              'list-menu-item',
              activeIndex === index && 'active'
            )}
            onClick={() => dispatch(changeActiveIndex(index))}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
