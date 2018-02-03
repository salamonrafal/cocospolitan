import React, { Component } from 'react';
import HtmlReactParser from 'html-react-parser';
import Style from './headlineslist.scss';
import HeadlineItem from "../HeadlineItem";

class HeadlinesList extends Component {
    render() {
        let {headlines, refreshHeadlines, activeTag} = this.props;
        headlines.showHeadlinesByTag(activeTag);
        let headlinesData = headlines.getAll();

        return (
            <div className={'headlines-list'}>
                {Object.keys(headlinesData).map (key => <HeadlineItem
                    id={headlinesData[key].id} 
                    tags={headlinesData[key].tags} 
                    visible={headlinesData[key].visible}
                    key={headlinesData[key].id}
                    refreshHeadlines={refreshHeadlines} 
                >
                    {HtmlReactParser(headlinesData[key].content)}
                </HeadlineItem>
                )}
            </div>
        );
    }
}

export default HeadlinesList;