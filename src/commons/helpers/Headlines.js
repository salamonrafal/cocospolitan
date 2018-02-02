import TagsItems from './TagsItems.js';

class Headlines {
    constructor (data) {
        this.tags = new TagsItems();
        this.headlines = this._transformData(data);
        
    }

    getById (headlineId) {
        return this.headlines[headlineId];
    }

    getAll () {
        return this.headlines;
    }

    showHeadlinesByTag (tagname) {
        let tags = this.getTags();
        let visibleHadlines = tags.getTag(tagname);

        if (tagname != '') {
            for (const headlineId of Object.keys(this.headlines)) {
                console.log(headlineId, visibleHadlines);

                if (!this._isHeadlineVisibleForTag(headlineId, visibleHadlines)) {
                    this.headlines[headlineId].visible = false;
                } else {
                    this.headlines[headlineId].visible = true; 
                }
            } 
        } else  {
            for (const headlineId of Object.keys(this.headlines)) {
                console.log(headlineId, visibleHadlines);
                this.headlines[headlineId].visible = true; 
            }
        }

        console.log(tagname, this.headlines);

        return this;
    }

    _isHeadlineVisibleForTag (headlineId, headlineIds) {
        for (let i = 0; i < headlineIds.length; i++) {
            if (headlineIds[i] == headlineId) {
                return true;
            }
        }

        return false;
    }

    getTags () {
        return this.tags;
    }

    _transformData (data) {
        let headlines = {};

        for (let i = 0; i < data.length; i++) {
            headlines[data[i].id] = data[i];
            headlines[data[i].id].index = i;
            
            this.tags.appendTags(data[i].tags, data[i].id)
        }

        return headlines;
    }


}

export default Headlines;