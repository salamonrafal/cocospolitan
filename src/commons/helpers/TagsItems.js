class TagsItems {

    constructor () {
        this.tags = [];
        this.tagsOrginalData = [];
        this.tagsListUnique = {};
    }

    getAll () {
        return this.tags;
    }

    appendTags (tags, headlineId) {
        this.tagsOrginalData = tags;

        for (let i = 0; i < tags.length; i++) {
            if (this.isTagExists(tags[i])) {
                this.appendTagExists(tags[i], headlineId);
            } else {
                this.appendTagNotExists(tags[i], headlineId);
            }
        }
        
    }

    appendTagExists(tagname, headlineId) {
        let tagIndex = this.findTagIndex(tagname)
        this.tags[tagIndex].headlineIds.push(headlineId);

        this.addToTagListUnique(tagname, headlineId);
    }

    appendTagNotExists(tagname, headlineId) {
        let tagItem = {
            tagname: tagname,
            headlineIds: [headlineId]
        }

        this.tags.push(tagItem);

        this.createTagListUnique(tagname);
        this.addToTagListUnique(tagname, headlineId);
    }

    isTagExists (tagname) {
        if (this.tagsListUnique[tagname] !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    findTagIndex (tagname) {
        for (let i = 0; i < this.tags.length; i++) {
            if (this.tags[i].tagname === tagname) {
                return i;
            }
        }
    }

    createTagListUnique (tagname) {
        this.tagsListUnique[tagname] = [];
    }

    addToTagListUnique (tagname, headlinesId) {
        this.tagsListUnique[tagname].push(headlinesId);
    }
}

export default TagsItems;