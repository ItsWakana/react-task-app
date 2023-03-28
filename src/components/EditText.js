import React from 'react';

// const EditText = (props) => {

//     return (
//         <div>
//             <input placeholder="Enter edit here"></input>
//             <button type="submit">Save edit</button>
//         </div>
//     )
// }

class EditText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newTaskValue: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInput(e) {
        this.setState({
            newTaskValue: e.target.value,
        });
    }

    handleSubmit(e) {
        const { onTaskEdit, taskIndex, onEditCompletion } = this.props;
        const { newTaskValue } = this.state;
        e.preventDefault();
        onEditCompletion();
        onTaskEdit(newTaskValue, taskIndex)
    }

    render() {
        return (
            <div>
                <input placeholder="Enter edit here" onChange={this.handleInput}></input>
                <button type="submit" onClick={this.handleSubmit}>Save edit</button>
            </div>
        )
    }
}

export default EditText;