import {Component} from "react";

export default class Destroyer extends Component {
    subscriptions = [];

    set subscription(value) {
        this.subscriptions.push(value);
    }

    componentWillUnmount() {
        this.subscriptions.forEach(subscription => !subscription.closed && subscription.unsubscribe());
    }
}
