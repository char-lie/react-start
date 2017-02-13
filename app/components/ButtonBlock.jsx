import React, {PropTypes} from 'react';

const ButtonBlock = ({onClick}) => (
    <div>
        <button onClick={() => onClick('Text1')}>Set text1</button>
        <button onClick={() => onClick('Text2')}>Set text2</button>
    </div>
)

ButtonBlock.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ButtonBlock
