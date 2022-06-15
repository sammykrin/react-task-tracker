import PropsTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return(
        <header className = 'header'>
            <h1>{title}</h1>
            <Button 
            color={showAdd ? 'red': 'green'} 
            text={showAdd ? 'close' : 'Add'} 
            onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.PropsTypes={
    title: PropsTypes.string.isRequried,
}

export default Header