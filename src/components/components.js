/**
 * Created by reawmarco-pc on 03/03/17.
 */

import React, { PropTypes } from 'react'

const components = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

components.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default components