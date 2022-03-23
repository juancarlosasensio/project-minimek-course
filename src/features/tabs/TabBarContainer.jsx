import React, {Component} from "react";
import TabBar from "./TabBar";

export default class TabBarContainer extends Component {
    constructor(props) {
        super(props);

        //This line is probably the same as initializing tabs as an array with an obj with a "name" prop and then reassigning its value by destructuring from props. I think...
        const {tabs = [{name : null}]} = props;
        const firstTab = tabs[0];

        this.state = {
            currentTab : firstTab.name
        };
    };

    onTabClick = (name) => {
        this.setState({currentTab : name});
    };

    render() {
        const {tabs, ...otherProps} = this.props;
        const {currentTab} = this.state;
        
        return (
            <TabBar
                {...otherProps}
                currentTab={currentTab}
                onTabClick={this.onTabClick}
                tabs={tabs}
            />
        )
    }
};