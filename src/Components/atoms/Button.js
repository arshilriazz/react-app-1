const React = require('react')

const Button = (props) => {
    return (
        <div className={"ui basic " + props.color + " button"}>{props.children}</div>
    )
}

export default Button