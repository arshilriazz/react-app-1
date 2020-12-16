import Button from '../atoms/Button'
const React = require('react')

const ApprovalCard = (props) => {
    return (
        <div className="ui card center">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <Button color="green">Approve</Button>
                    <Button color="red">Decline</Button>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard