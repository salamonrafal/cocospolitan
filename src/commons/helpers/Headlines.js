import TagsItems from './TagsItems.js';

class Headlines {
    constructor (data) {
        this.tags = new TagsItems();
        this.headlines = this.transformData(data);
        
    }

    getById (headlineId) {
        return this.headlines[headlineId];
    }

    getAll () {
        return this.headlines;
    }

    getTags () {
        return this.tags;
    }

    transformData (data) {
        let headlines = {};

        for (let i = 0; i < data.length; i++) {
            headlines[data[i].id] = data[i];

            this.tags.appendTags(data[i].tags, data[i].id)
        }

        return headlines;
    }


}

export default Headlines;