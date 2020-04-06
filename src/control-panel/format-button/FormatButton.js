import React, {Component} from "react/cjs/react.production.min";
import './FormatButton.scss';
import {capitalize} from '../../App.utils';

export default class FormatButton extends Component {
    constructor(props) {
        super(props);

        this.toggleFormat = this.toggleFormat.bind(this);
    }

    toggleFormat(){
        this.props.onToggleFormat(this.props.name);
    }

    render() {
        const { disabled, applied } = this.props;

        return (
            <button
                className={`format-action ${applied ? 'applied' : ''}`}
                type="button"
                title={capitalize(this.props.name)}
                dangerouslySetInnerHTML={{ __html: this.props.markup }}
                disabled={disabled}
                onClick={this.toggleFormat}>
            </button>
        );
    }
}
FormatButton.defaultProps = { markup: '', disabled: true, applied: false };
