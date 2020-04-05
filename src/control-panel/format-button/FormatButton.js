import React, { Component } from "react/cjs/react.production.min";
import './FormatButton.scss';
import { capitalize } from '../../App.utils';

export default class FormatButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            applied: this.props.applied
        };

        this.applyFormat = this.applyFormat.bind(this);
        this.setButtonClass = this.setButtonClass.bind(this);
    }

    componentWillMount() {
        this.setButtonClass();
    }

    applyFormat(){
        // eslint-disable-next-line
        this.state.applied = !this.state.applied;
        this.setButtonClass();
        this.props.onApply(this.props.name);
    }

    setButtonClass() {
        this.setState({ buttonClass: this.state.applied ? 'applied': 'not-applied' });
    }

    render() {
        return (
            <button
                className={`format-action ${this.state.buttonClass}`}
                type="button"
                title={capitalize(this.props.name)}
                dangerouslySetInnerHTML={{ __html: this.props.markup }}
                disabled={this.props.disabled}
                onClick={this.applyFormat}>
            </button>
        );
    }
}
FormatButton.defaultProps = { markup: '', disabled: true, applied: false };
